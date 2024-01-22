window.BENCHMARK_DATA = {
  "lastUpdate": 1705962319835,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 20.04 Release c++-17": [
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
        "date": 1702490407538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 532.7769641187043,
            "unit": "ns/iter",
            "extra": "iterations: 1307673\ncpu: 532.7661426059879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5166.87270000034,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5166.881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9882.369398514365,
            "unit": "ns/iter",
            "extra": "iterations: 83460\ncpu: 9882.167505391806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14702.351092513401,
            "unit": "ns/iter",
            "extra": "iterations: 57116\ncpu: 14702.3005812732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19568.79015483522,
            "unit": "ns/iter",
            "extra": "iterations: 42884\ncpu: 19567.694244939852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24534.264602890096,
            "unit": "ns/iter",
            "extra": "iterations: 33983\ncpu: 24533.33431421593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29522.62370897882,
            "unit": "ns/iter",
            "extra": "iterations: 28369\ncpu: 29521.66801790687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34124.660610019404,
            "unit": "ns/iter",
            "extra": "iterations: 24491\ncpu: 34124.14356294148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37378.414918194176,
            "unit": "ns/iter",
            "extra": "iterations: 21209\ncpu: 37377.92446602856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.2126444760394,
            "unit": "ns/iter",
            "extra": "iterations: 1325306\ncpu: 530.211815233613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.4604890034629,
            "unit": "ns/iter",
            "extra": "iterations: 1666941\ncpu: 404.45510668943876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.0957969075121,
            "unit": "ns/iter",
            "extra": "iterations: 1696370\ncpu: 413.09384155579204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 439.60191619690687,
            "unit": "ns/iter",
            "extra": "iterations: 1587937\ncpu: 439.5999337505194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.6088353567553,
            "unit": "ns/iter",
            "extra": "iterations: 832813\ncpu: 843.5912984067257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2028.8164506977832,
            "unit": "ns/iter",
            "extra": "iterations: 393807\ncpu: 2028.7201598752692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10552.094562094833,
            "unit": "ns/iter",
            "extra": "iterations: 76923\ncpu: 10551.896051896063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7995.595824011678,
            "unit": "ns/iter",
            "extra": "iterations: 101916\ncpu: 7995.578711880392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8138.965035034839,
            "unit": "ns/iter",
            "extra": "iterations: 98899\ncpu: 8138.948826580671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7467.311085471265,
            "unit": "ns/iter",
            "extra": "iterations: 108340\ncpu: 7467.062026952169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29787.420520748492,
            "unit": "ns/iter",
            "extra": "iterations: 27806\ncpu: 29784.762281521922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 235022.81134600783,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 235010.46293818578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182950.81203644385,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 182939.71180334815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187232.9003407303,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 187215.65161839873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182979.45439044584,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 182963.2992327364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98296.21989409877,
            "unit": "ns/iter",
            "extra": "iterations: 8877\ncpu: 98291.31463332202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183769.12075004465,
            "unit": "ns/iter",
            "extra": "iterations: 4853\ncpu: 183758.1289923753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5083.6788699996305,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5083.354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27723.39597826794,
            "unit": "ns/iter",
            "extra": "iterations: 30186\ncpu: 27722.21228384028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21454.06147721113,
            "unit": "ns/iter",
            "extra": "iterations: 38681\ncpu: 21452.744241358752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21334.865347454444,
            "unit": "ns/iter",
            "extra": "iterations: 38811\ncpu: 21333.81257890802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21033.727653561553,
            "unit": "ns/iter",
            "extra": "iterations: 39626\ncpu: 21032.37268460102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45439.20112239051,
            "unit": "ns/iter",
            "extra": "iterations: 18710\ncpu: 45436.231961517806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 252958.5237956922,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 252949.70980847263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197878.82391952846,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 197868.09970272155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199232.2108378734,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 199226.50273223978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198595.21384510782,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 198588.34818368708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110739.8864125574,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 110738.06508800738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188808.88291621013,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 188796.34385201233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797099.5833333443,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 797075.8333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440123.465937344,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 440104.2764793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2127.779138566076,
            "unit": "ns/iter",
            "extra": "iterations: 377069\ncpu: 2127.713230204563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10440.750413995376,
            "unit": "ns/iter",
            "extra": "iterations: 79107\ncpu: 10440.413616999735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8228.064036158084,
            "unit": "ns/iter",
            "extra": "iterations: 100006\ncpu: 8228.039317640925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7883.159440130944,
            "unit": "ns/iter",
            "extra": "iterations: 97880\ncpu: 7882.658357172066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7593.017964892359,
            "unit": "ns/iter",
            "extra": "iterations: 109380\ncpu: 7592.980435180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28972.828603939393,
            "unit": "ns/iter",
            "extra": "iterations: 29003\ncpu: 28970.77198910459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241746.5918478125,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 241731.0597826094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184084.81724931693,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 184074.75402972632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184879.49155406887,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 184869.27787162102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185122.5722093743,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 185105.7178894268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97230.86420983064,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 97226.02921646742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177834.37596269633,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 177824.98986623474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.35836824116492,
            "unit": "ns/iter",
            "extra": "iterations: 3663458\ncpu: 191.3464546338462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1457.0944045743477,
            "unit": "ns/iter",
            "extra": "iterations: 479892\ncpu: 1457.0424178773483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1034.7065436326347,
            "unit": "ns/iter",
            "extra": "iterations: 678186\ncpu: 1034.693432185264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1148.0115968749515,
            "unit": "ns/iter",
            "extra": "iterations: 609647\ncpu: 1147.9897383239709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.227444190093,
            "unit": "ns/iter",
            "extra": "iterations: 840892\ncpu: 834.197138276969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9314.701584786837,
            "unit": "ns/iter",
            "extra": "iterations: 75720\ncpu: 9314.598520866393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11760.526566869314,
            "unit": "ns/iter",
            "extra": "iterations: 60790\ncpu: 11760.212205954978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2608.0891589927105,
            "unit": "ns/iter",
            "extra": "iterations: 268868\ncpu: 2608.058229317001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2648.624285542752,
            "unit": "ns/iter",
            "extra": "iterations: 258063\ncpu: 2648.5699228483204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2648.419035102455,
            "unit": "ns/iter",
            "extra": "iterations: 264028\ncpu: 2648.356992440172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5170.547082729779,
            "unit": "ns/iter",
            "extra": "iterations: 136069\ncpu: 5170.442937039275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4539.10491141426,
            "unit": "ns/iter",
            "extra": "iterations: 153072\ncpu: 4538.8954217622895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1881.6948264392256,
            "unit": "ns/iter",
            "extra": "iterations: 369842\ncpu: 1881.6551392216152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10013.194586499909,
            "unit": "ns/iter",
            "extra": "iterations: 70786\ncpu: 10013.180572429677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7932.395515920257,
            "unit": "ns/iter",
            "extra": "iterations: 87688\ncpu: 7932.191405893685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7956.542102721318,
            "unit": "ns/iter",
            "extra": "iterations: 86954\ncpu: 7955.8513696898635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7829.763211269307,
            "unit": "ns/iter",
            "extra": "iterations: 89734\ncpu: 7829.449261149587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18444.686078540097,
            "unit": "ns/iter",
            "extra": "iterations: 38121\ncpu: 18443.689829752733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50677.73963267711,
            "unit": "ns/iter",
            "extra": "iterations: 12033\ncpu: 50677.63649962577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40987.59470385093,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 40986.69517839385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41339.25724252485,
            "unit": "ns/iter",
            "extra": "iterations: 16914\ncpu: 41339.198297268995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41468.355816170064,
            "unit": "ns/iter",
            "extra": "iterations: 16798\ncpu: 41467.37111560916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24953.91101875551,
            "unit": "ns/iter",
            "extra": "iterations: 28152\ncpu: 24952.937624325124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40941.767655617405,
            "unit": "ns/iter",
            "extra": "iterations: 17190\ncpu: 40939.354275742044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1960.5921499277258,
            "unit": "ns/iter",
            "extra": "iterations: 357933\ncpu: 1960.570274325067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11956.395619566121,
            "unit": "ns/iter",
            "extra": "iterations: 58670\ncpu: 11955.754218510368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9261.624584233092,
            "unit": "ns/iter",
            "extra": "iterations: 75463\ncpu: 9261.614301048232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8889.8145923176,
            "unit": "ns/iter",
            "extra": "iterations: 80234\ncpu: 8889.808559962095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9232.80945385811,
            "unit": "ns/iter",
            "extra": "iterations: 76244\ncpu: 9232.388122344051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18853.167847879085,
            "unit": "ns/iter",
            "extra": "iterations: 37391\ncpu: 18852.579497740273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51721.36941176157,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 51719.94852941123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41045.33226704418,
            "unit": "ns/iter",
            "extra": "iterations: 16881\ncpu: 41045.24021088758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41263.16958646047,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 41261.23227267248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41635.298552474735,
            "unit": "ns/iter",
            "extra": "iterations: 16580\ncpu: 41635.01809408893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25225.024313047277,
            "unit": "ns/iter",
            "extra": "iterations: 27804\ncpu: 25224.83815278403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42218.481949134984,
            "unit": "ns/iter",
            "extra": "iterations: 16869\ncpu: 42217.77817297996 ns\nthreads: 1"
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
        "date": 1702493048421,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.1224854563455,
            "unit": "ns/iter",
            "extra": "iterations: 1262754\ncpu: 568.1207899559217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5196.841129999257,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5196.508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9778.85709494307,
            "unit": "ns/iter",
            "extra": "iterations: 77520\ncpu: 9778.520381836946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14564.498802594424,
            "unit": "ns/iter",
            "extra": "iterations: 57207\ncpu: 14563.983428601397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19206.690453098538,
            "unit": "ns/iter",
            "extra": "iterations: 43302\ncpu: 19205.88194540667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24293.02579307251,
            "unit": "ns/iter",
            "extra": "iterations: 34234\ncpu: 24292.00794531754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29044.48192645918,
            "unit": "ns/iter",
            "extra": "iterations: 28965\ncpu: 29043.255653374774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33738.5191499694,
            "unit": "ns/iter",
            "extra": "iterations: 24752\ncpu: 33736.938429217844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38028.295375081616,
            "unit": "ns/iter",
            "extra": "iterations: 22595\ncpu: 38025.76676255808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7829342340033,
            "unit": "ns/iter",
            "extra": "iterations: 1317550\ncpu: 530.7447155705662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.9969613674183,
            "unit": "ns/iter",
            "extra": "iterations: 1721498\ncpu: 406.9838594061682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.6075800257526,
            "unit": "ns/iter",
            "extra": "iterations: 1715667\ncpu: 406.59731754472165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.8973019246828,
            "unit": "ns/iter",
            "extra": "iterations: 1648249\ncpu: 424.9023660866781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 869.6517600766988,
            "unit": "ns/iter",
            "extra": "iterations: 803090\ncpu: 869.6388947689561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1928.0691620618697,
            "unit": "ns/iter",
            "extra": "iterations: 413348\ncpu: 1928.090858066324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10240.22110224328,
            "unit": "ns/iter",
            "extra": "iterations: 79565\ncpu: 10240.180984101047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7623.317714500301,
            "unit": "ns/iter",
            "extra": "iterations: 106410\ncpu: 7623.236537919381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7684.628671751835,
            "unit": "ns/iter",
            "extra": "iterations: 105944\ncpu: 7684.577701427162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7723.349850752572,
            "unit": "ns/iter",
            "extra": "iterations: 104859\ncpu: 7722.995641766562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30101.63763851064,
            "unit": "ns/iter",
            "extra": "iterations: 27525\ncpu: 30100.134423251577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237816.30628913938,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 237806.9697794717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182823.7592829824,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 182810.13657703795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185033.55507746903,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 185027.92598967304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190617.2640534167,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 190606.353650657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98447.89697925888,
            "unit": "ns/iter",
            "extra": "iterations: 8872\ncpu: 98444.39810640208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184791.29758883984,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 184787.20389170898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5005.72496000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5005.646999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27507.973378589308,
            "unit": "ns/iter",
            "extra": "iterations: 30051\ncpu: 27507.85664370567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21062.908019532733,
            "unit": "ns/iter",
            "extra": "iterations: 39117\ncpu: 21062.755323772213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20748.70621556064,
            "unit": "ns/iter",
            "extra": "iterations: 38838\ncpu: 20747.35568257889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20818.761810338452,
            "unit": "ns/iter",
            "extra": "iterations: 40346\ncpu: 20817.954691914914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47825.50535662914,
            "unit": "ns/iter",
            "extra": "iterations: 17455\ncpu: 47822.80148954455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266653.9407568093,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 266609.9875930528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205621.0663685708,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 205619.4869381038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207013.7393780912,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 207012.36648468912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206757.5798999576,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 206752.9649916653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112045.11439208878,
            "unit": "ns/iter",
            "extra": "iterations: 7789\ncpu: 112043.42020798511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196453.30816190306,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 196449.64955912315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 807864.4564846209,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 807847.7815699689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447908.81395352044,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 447890.54600606725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2173.156728226207,
            "unit": "ns/iter",
            "extra": "iterations: 369072\ncpu: 2173.0686695278946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10283.79934932312,
            "unit": "ns/iter",
            "extra": "iterations: 79302\ncpu: 10283.407732465716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7745.440305395198,
            "unit": "ns/iter",
            "extra": "iterations: 107271\ncpu: 7745.454036971812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7920.391061665223,
            "unit": "ns/iter",
            "extra": "iterations: 105344\ncpu: 7920.116950182285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7404.793823453802,
            "unit": "ns/iter",
            "extra": "iterations: 108572\ncpu: 7404.531555097054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28893.47903841562,
            "unit": "ns/iter",
            "extra": "iterations: 29077\ncpu: 28892.592083089785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248513.03807175267,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 248510.73678444416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189457.66652267225,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 189454.7516198704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191954.59886883388,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 191950.05438329247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188778.78962040905,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 188773.64357709629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97901.14771710499,
            "unit": "ns/iter",
            "extra": "iterations: 8936\ncpu: 97900.5707251567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181691.01996295594,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 181684.52356452064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.8901033597574,
            "unit": "ns/iter",
            "extra": "iterations: 3537160\ncpu: 197.88491332029116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1458.5639061941688,
            "unit": "ns/iter",
            "extra": "iterations: 478819\ncpu: 1458.5490550709094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1036.7905941037698,
            "unit": "ns/iter",
            "extra": "iterations: 680807\ncpu: 1036.7715079310333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1043.4687226835208,
            "unit": "ns/iter",
            "extra": "iterations: 671525\ncpu: 1043.4034473772363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 852.4475484335959,
            "unit": "ns/iter",
            "extra": "iterations: 820557\ncpu: 852.3942882700431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9562.999477835048,
            "unit": "ns/iter",
            "extra": "iterations: 74689\ncpu: 9562.349208049334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10914.703554597798,
            "unit": "ns/iter",
            "extra": "iterations: 64086\ncpu: 10914.69119620514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2582.894313562101,
            "unit": "ns/iter",
            "extra": "iterations: 271066\ncpu: 2582.918551201551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2584.7024798893767,
            "unit": "ns/iter",
            "extra": "iterations: 270133\ncpu: 2584.6190580195425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2619.9373087542954,
            "unit": "ns/iter",
            "extra": "iterations: 267326\ncpu: 2619.898550833065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5173.6912368765725,
            "unit": "ns/iter",
            "extra": "iterations: 137063\ncpu: 5173.420252000927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5005.401500385258,
            "unit": "ns/iter",
            "extra": "iterations: 139031\ncpu: 5005.147772798875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1941.0923022938705,
            "unit": "ns/iter",
            "extra": "iterations: 359081\ncpu: 1941.0364235367465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9895.230191910225,
            "unit": "ns/iter",
            "extra": "iterations: 70085\ncpu: 9894.533780409361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7979.42367583402,
            "unit": "ns/iter",
            "extra": "iterations: 87338\ncpu: 7979.24958208334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7945.065604893203,
            "unit": "ns/iter",
            "extra": "iterations: 87966\ncpu: 7944.745697201095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7900.883911379504,
            "unit": "ns/iter",
            "extra": "iterations: 88286\ncpu: 7900.516503182913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18614.605771031638,
            "unit": "ns/iter",
            "extra": "iterations: 37359\ncpu: 18613.675419577357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52265.048465748965,
            "unit": "ns/iter",
            "extra": "iterations: 13329\ncpu: 52260.5971940876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41883.40132171629,
            "unit": "ns/iter",
            "extra": "iterations: 16645\ncpu: 41881.70621808325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42564.786715822855,
            "unit": "ns/iter",
            "extra": "iterations: 16546\ncpu: 42562.51662033155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42345.02325581766,
            "unit": "ns/iter",
            "extra": "iterations: 16598\ncpu: 42343.24617423837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25001.14596606619,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 24999.498890400206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41368.806297992494,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 41367.063515685964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2238.3869425007624,
            "unit": "ns/iter",
            "extra": "iterations: 310718\ncpu: 2238.2903468740305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9856.440932913718,
            "unit": "ns/iter",
            "extra": "iterations: 70403\ncpu: 9856.260386631438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8795.891648139026,
            "unit": "ns/iter",
            "extra": "iterations: 79611\ncpu: 8795.789526572938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9199.921272455525,
            "unit": "ns/iter",
            "extra": "iterations: 75539\ncpu: 9199.687578601826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8408.959886558398,
            "unit": "ns/iter",
            "extra": "iterations: 83214\ncpu: 8408.926382579977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18383.75497192541,
            "unit": "ns/iter",
            "extra": "iterations: 38114\ncpu: 18383.94028440971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52086.69206491629,
            "unit": "ns/iter",
            "extra": "iterations: 13308\ncpu: 52086.65464382325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41367.1062824766,
            "unit": "ns/iter",
            "extra": "iterations: 16936\ncpu: 41366.473783656365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41262.398333923324,
            "unit": "ns/iter",
            "extra": "iterations: 17046\ncpu: 41262.354804646406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41379.172113805886,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 41379.62026804609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25826.13463374989,
            "unit": "ns/iter",
            "extra": "iterations: 27222\ncpu: 25825.839394607145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41957.11288893888,
            "unit": "ns/iter",
            "extra": "iterations: 16937\ncpu: 41956.958138985254 ns\nthreads: 1"
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
        "date": 1702504636308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.9659803220724,
            "unit": "ns/iter",
            "extra": "iterations: 1264768\ncpu: 549.9587276085416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5194.4048400002885,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5194.278999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9995.728343778932,
            "unit": "ns/iter",
            "extra": "iterations: 82332\ncpu: 9995.373609289221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14624.790532128296,
            "unit": "ns/iter",
            "extra": "iterations: 57035\ncpu: 14624.17462961339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19545.8319314168,
            "unit": "ns/iter",
            "extra": "iterations: 43393\ncpu: 19545.346023552178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23938.393514940173,
            "unit": "ns/iter",
            "extra": "iterations: 34911\ncpu: 23937.67007533443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28906.372511684996,
            "unit": "ns/iter",
            "extra": "iterations: 28885\ncpu: 28905.916565691532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33644.13079171647,
            "unit": "ns/iter",
            "extra": "iterations: 24971\ncpu: 33643.13804012656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38609.89163975569,
            "unit": "ns/iter",
            "extra": "iterations: 22296\ncpu: 38609.50843200578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.3566583082903,
            "unit": "ns/iter",
            "extra": "iterations: 1299294\ncpu: 539.3466759640243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.32852142062706,
            "unit": "ns/iter",
            "extra": "iterations: 1725440\ncpu: 406.3266760942141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 402.9638132058525,
            "unit": "ns/iter",
            "extra": "iterations: 1736628\ncpu: 402.95768581411824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.7781962297638,
            "unit": "ns/iter",
            "extra": "iterations: 1628489\ncpu: 427.76923884656287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.6464039241332,
            "unit": "ns/iter",
            "extra": "iterations: 812608\ncpu: 864.6309167519879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1920.011503082137,
            "unit": "ns/iter",
            "extra": "iterations: 415280\ncpu: 1920.0156520901564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10365.687581270258,
            "unit": "ns/iter",
            "extra": "iterations: 79211\ncpu: 10365.636085897142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7774.305514632147,
            "unit": "ns/iter",
            "extra": "iterations: 103851\ncpu: 7774.021434555282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7864.1643280211965,
            "unit": "ns/iter",
            "extra": "iterations: 103835\ncpu: 7863.856117879343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7533.969093800563,
            "unit": "ns/iter",
            "extra": "iterations: 108166\ncpu: 7533.725939759239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30168.79490733867,
            "unit": "ns/iter",
            "extra": "iterations: 27412\ncpu: 30167.426674449194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241644.7184678573,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 241635.70451436378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185081.1571862716,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 185074.20755536272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187047.90579234765,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 187038.86338797802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185475.8860867602,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 185468.24107715333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99150.87883610082,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 99145.69220277354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184699.7253831718,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 184692.25278186047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5081.998729999668,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5081.664000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27091.317056509983,
            "unit": "ns/iter",
            "extra": "iterations: 30739\ncpu: 27090.227398418938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21195.141256408206,
            "unit": "ns/iter",
            "extra": "iterations: 39000\ncpu: 21194.346153846185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21305.79102819739,
            "unit": "ns/iter",
            "extra": "iterations: 39613\ncpu: 21304.824173882338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20966.038052803855,
            "unit": "ns/iter",
            "extra": "iterations: 39051\ncpu: 20964.925354024243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47550.49731329838,
            "unit": "ns/iter",
            "extra": "iterations: 18238\ncpu: 47548.49215922803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262716.1388059944,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 262714.7761194036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203292.9474912311,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 203289.68494749238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203433.1648225035,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 203425.97971415462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206403.19920318652,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 206320.7874384817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112716.81339713896,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 112715.51791025474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195269.8713185252,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 195263.88763026774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 805415.5578059792,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 805388.6075949374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 451577.36858160055,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 451555.51601423713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2157.3005357459765,
            "unit": "ns/iter",
            "extra": "iterations: 370698\ncpu: 2157.2163863846117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10598.947974182693,
            "unit": "ns/iter",
            "extra": "iterations: 77154\ncpu: 10598.417450812589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8092.431691933916,
            "unit": "ns/iter",
            "extra": "iterations: 103692\ncpu: 8092.118003317542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8325.780153481119,
            "unit": "ns/iter",
            "extra": "iterations: 98123\ncpu: 8325.699377312121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7834.942455473313,
            "unit": "ns/iter",
            "extra": "iterations: 105275\ncpu: 7834.805034433588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28792.568096077743,
            "unit": "ns/iter",
            "extra": "iterations: 28893\ncpu: 28792.160730972977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243522.69287469002,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 243517.3355173355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185097.22042106086,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 185097.64210526363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190235.0085052159,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 190230.78885817516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185753.72075078476,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 185750.96976016642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98093.9950826964,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 98090.63477872172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180306.20800162645,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 180303.93957950687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.408262219773,
            "unit": "ns/iter",
            "extra": "iterations: 3660929\ncpu: 191.40379395503066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1435.794748439244,
            "unit": "ns/iter",
            "extra": "iterations: 485151\ncpu: 1435.7985451952093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1159.2475802908257,
            "unit": "ns/iter",
            "extra": "iterations: 605238\ncpu: 1159.25008013377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 987.7615679790384,
            "unit": "ns/iter",
            "extra": "iterations: 707535\ncpu: 987.7295116142693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.0500884151513,
            "unit": "ns/iter",
            "extra": "iterations: 840354\ncpu: 825.0405186385739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9345.329226420748,
            "unit": "ns/iter",
            "extra": "iterations: 75726\ncpu: 9345.078308638991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11770.731256316714,
            "unit": "ns/iter",
            "extra": "iterations: 59380\ncpu: 11770.666891209241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2628.949046240711,
            "unit": "ns/iter",
            "extra": "iterations: 265633\ncpu: 2628.8691540584227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2680.9899089352907,
            "unit": "ns/iter",
            "extra": "iterations: 261023\ncpu: 2680.9802201338675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2691.856972673864,
            "unit": "ns/iter",
            "extra": "iterations: 259384\ncpu: 2691.805971069912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5178.27225391809,
            "unit": "ns/iter",
            "extra": "iterations: 134437\ncpu: 5178.199454019386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5052.039615254958,
            "unit": "ns/iter",
            "extra": "iterations: 135882\ncpu: 5052.009096127505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.3587551301398,
            "unit": "ns/iter",
            "extra": "iterations: 368424\ncpu: 1898.3095563806976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10064.138488253986,
            "unit": "ns/iter",
            "extra": "iterations: 69681\ncpu: 10064.086336304048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7959.224715380874,
            "unit": "ns/iter",
            "extra": "iterations: 87573\ncpu: 7958.969088646146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7966.244854760055,
            "unit": "ns/iter",
            "extra": "iterations: 86925\ncpu: 7966.076502732167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7801.170268376764,
            "unit": "ns/iter",
            "extra": "iterations: 89911\ncpu: 7801.122220862771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18315.590382036713,
            "unit": "ns/iter",
            "extra": "iterations: 38033\ncpu: 18315.023795125453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52608.546117410464,
            "unit": "ns/iter",
            "extra": "iterations: 13303\ncpu: 52608.22370893735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42179.61965657764,
            "unit": "ns/iter",
            "extra": "iterations: 16656\ncpu: 42177.4555715657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42212.168769242126,
            "unit": "ns/iter",
            "extra": "iterations: 16567\ncpu: 42211.92128930968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42105.744463167954,
            "unit": "ns/iter",
            "extra": "iterations: 16616\ncpu: 42105.09147809274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24824.030887621517,
            "unit": "ns/iter",
            "extra": "iterations: 28199\ncpu: 24823.699421965608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41720.40350773079,
            "unit": "ns/iter",
            "extra": "iterations: 16877\ncpu: 41719.88505066034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1865.6907853917526,
            "unit": "ns/iter",
            "extra": "iterations: 373928\ncpu: 1865.6810936865077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10620.716473522485,
            "unit": "ns/iter",
            "extra": "iterations: 65754\ncpu: 10620.524987072979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9424.58322667481,
            "unit": "ns/iter",
            "extra": "iterations: 74225\ncpu: 9424.451330414304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9656.577675647575,
            "unit": "ns/iter",
            "extra": "iterations: 72674\ncpu: 9656.285604205228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9213.87602986285,
            "unit": "ns/iter",
            "extra": "iterations: 75010\ncpu: 9213.802159712106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18911.24534287973,
            "unit": "ns/iter",
            "extra": "iterations: 36879\ncpu: 18910.85441579224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52402.94510363413,
            "unit": "ns/iter",
            "extra": "iterations: 13316\ncpu: 52401.55452087647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42570.20296215084,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 42570.27488267159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40975.06368938702,
            "unit": "ns/iter",
            "extra": "iterations: 16973\ncpu: 40974.506569257515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41202.53133128106,
            "unit": "ns/iter",
            "extra": "iterations: 16916\ncpu: 41201.53109482146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25751.861692014423,
            "unit": "ns/iter",
            "extra": "iterations: 27352\ncpu: 25751.692746417255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41490.67392065168,
            "unit": "ns/iter",
            "extra": "iterations: 17140\ncpu: 41489.1890315052 ns\nthreads: 1"
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
        "date": 1705575717388,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 548.7540897349514,
            "unit": "ns/iter",
            "extra": "iterations: 1275266\ncpu: 548.7513193325941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5257.07523000051,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5257.051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10483.924908626033,
            "unit": "ns/iter",
            "extra": "iterations: 81807\ncpu: 10483.74711210532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15065.556555222052,
            "unit": "ns/iter",
            "extra": "iterations: 54796\ncpu: 15065.475582159275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20149.700113997325,
            "unit": "ns/iter",
            "extra": "iterations: 41229\ncpu: 20149.32207911907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25045.04452968216,
            "unit": "ns/iter",
            "extra": "iterations: 33371\ncpu: 25044.61957987472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29389.238218500985,
            "unit": "ns/iter",
            "extra": "iterations: 28201\ncpu: 29388.7202581469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34059.44173176985,
            "unit": "ns/iter",
            "extra": "iterations: 24576\ncpu: 34058.21533203126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38618.82856116676,
            "unit": "ns/iter",
            "extra": "iterations: 22282\ncpu: 38616.600843730375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.8935086744216,
            "unit": "ns/iter",
            "extra": "iterations: 1308839\ncpu: 534.8597497476779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 408.1333980448149,
            "unit": "ns/iter",
            "extra": "iterations: 1716337\ncpu: 408.1091883470438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.6552777790832,
            "unit": "ns/iter",
            "extra": "iterations: 1704088\ncpu: 410.62926327748374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.4042274379334,
            "unit": "ns/iter",
            "extra": "iterations: 1618569\ncpu: 432.38280233959773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 889.328666863597,
            "unit": "ns/iter",
            "extra": "iterations: 792462\ncpu: 889.2981619307922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2034.0939540214622,
            "unit": "ns/iter",
            "extra": "iterations: 392575\ncpu: 2033.9746545246169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10749.230585393267,
            "unit": "ns/iter",
            "extra": "iterations: 76154\ncpu: 10748.797174147136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8088.706802189626,
            "unit": "ns/iter",
            "extra": "iterations: 101041\ncpu: 8088.339386981529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8247.591696823194,
            "unit": "ns/iter",
            "extra": "iterations: 99480\ncpu: 8247.329111379191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7554.86548395193,
            "unit": "ns/iter",
            "extra": "iterations: 107831\ncpu: 7554.827461490677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29945.897527513265,
            "unit": "ns/iter",
            "extra": "iterations: 27988\ncpu: 29943.865227954826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249182.1630076873,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 249169.4291986836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181862.23623902883,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 181855.94345684297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186239.97059469923,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 186230.39280228224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192223.57028292524,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 192214.70260637064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98386.19972841117,
            "unit": "ns/iter",
            "extra": "iterations: 8837\ncpu: 98380.66085775734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183875.77135625607,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 183871.73592069204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5034.789820000469,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5034.764000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27239.891751229454,
            "unit": "ns/iter",
            "extra": "iterations: 30550\ncpu: 27239.509001636605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21376.62581516311,
            "unit": "ns/iter",
            "extra": "iterations: 39256\ncpu: 21376.3730385164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20910.61263004439,
            "unit": "ns/iter",
            "extra": "iterations: 39794\ncpu: 20910.217620746764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21013.925751577106,
            "unit": "ns/iter",
            "extra": "iterations: 40149\ncpu: 21013.564472340506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47385.541151693156,
            "unit": "ns/iter",
            "extra": "iterations: 18043\ncpu: 47383.954996397566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 264587.47300148115,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 264574.9321266973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203869.8818585121,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203863.6469764185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206788.08056083092,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 206776.4258555135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206078.12423095477,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 206066.25650733482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112842.3785695878,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 112837.3166966811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195492.34772828902,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 195484.9302744043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 808478.1416526788,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 808433.7268128189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440076.36041870306,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 440063.55932203383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2128.5727892237396,
            "unit": "ns/iter",
            "extra": "iterations: 377130\ncpu: 2128.542412430734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9840.631527908008,
            "unit": "ns/iter",
            "extra": "iterations: 83526\ncpu: 9840.503555778974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7666.350596602263,
            "unit": "ns/iter",
            "extra": "iterations: 106855\ncpu: 7666.244911328424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7562.825391107966,
            "unit": "ns/iter",
            "extra": "iterations: 108282\ncpu: 7562.580114885181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7518.79724628159,
            "unit": "ns/iter",
            "extra": "iterations: 108871\ncpu: 7518.561416722588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28799.474472827398,
            "unit": "ns/iter",
            "extra": "iterations: 29165\ncpu: 28798.96794102521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252091.09078326737,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 252084.8602269575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190279.8568044733,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 190273.60034452984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188918.68836417305,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 188915.42225058508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187821.2571550627,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 187819.22255446325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97279.43780380556,
            "unit": "ns/iter",
            "extra": "iterations: 9052\ncpu: 97277.9164825452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182020.9820950771,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 182016.423132332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.13783196260587,
            "unit": "ns/iter",
            "extra": "iterations: 3588130\ncpu: 195.13596218643187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1457.2809056045635,
            "unit": "ns/iter",
            "extra": "iterations: 479282\ncpu: 1457.2639907194566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1108.9876706999987,
            "unit": "ns/iter",
            "extra": "iterations: 632396\ncpu: 1108.973175035898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1144.1941582163195,
            "unit": "ns/iter",
            "extra": "iterations: 610430\ncpu: 1144.1752535098315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 803.2793344918845,
            "unit": "ns/iter",
            "extra": "iterations: 870673\ncpu: 803.2637970857015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9286.707940496432,
            "unit": "ns/iter",
            "extra": "iterations: 75625\ncpu: 9286.563966942169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11942.640319791479,
            "unit": "ns/iter",
            "extra": "iterations: 58413\ncpu: 11942.31249892999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2652.1304180047873,
            "unit": "ns/iter",
            "extra": "iterations: 264327\ncpu: 2652.0045246985783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2670.637188547177,
            "unit": "ns/iter",
            "extra": "iterations: 261075\ncpu: 2670.4663410897297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2659.9400165778775,
            "unit": "ns/iter",
            "extra": "iterations: 261789\ncpu: 2659.784024538866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5155.960266505045,
            "unit": "ns/iter",
            "extra": "iterations: 136283\ncpu: 5155.816939750379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4875.394183051583,
            "unit": "ns/iter",
            "extra": "iterations: 143271\ncpu: 4875.154776612167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1915.1335745494102,
            "unit": "ns/iter",
            "extra": "iterations: 366200\ncpu: 1914.9781540141983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9948.561927814531,
            "unit": "ns/iter",
            "extra": "iterations: 70235\ncpu: 9947.86787214356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7909.56022481511,
            "unit": "ns/iter",
            "extra": "iterations: 88784\ncpu: 7909.141286718266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7913.578941402546,
            "unit": "ns/iter",
            "extra": "iterations: 88230\ncpu: 7913.538478975397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7809.550163534583,
            "unit": "ns/iter",
            "extra": "iterations: 90195\ncpu: 7809.147957203939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18455.890038981535,
            "unit": "ns/iter",
            "extra": "iterations: 37968\ncpu: 18454.840918668506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52851.60727738499,
            "unit": "ns/iter",
            "extra": "iterations: 13274\ncpu: 52849.35965044461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42303.221953582026,
            "unit": "ns/iter",
            "extra": "iterations: 16544\ncpu: 42301.214941972896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42615.531080748005,
            "unit": "ns/iter",
            "extra": "iterations: 16248\ncpu: 42613.36164451014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42443.74013920894,
            "unit": "ns/iter",
            "extra": "iterations: 16378\ncpu: 42442.831847601185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24936.876248357432,
            "unit": "ns/iter",
            "extra": "iterations: 28137\ncpu: 24936.1943348615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41456.86071882811,
            "unit": "ns/iter",
            "extra": "iterations: 16499\ncpu: 41456.00339414554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1897.5360900808307,
            "unit": "ns/iter",
            "extra": "iterations: 368647\ncpu: 1897.4691235789053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11242.110183397537,
            "unit": "ns/iter",
            "extra": "iterations: 62160\ncpu: 11241.8983268982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9484.713458538896,
            "unit": "ns/iter",
            "extra": "iterations: 73745\ncpu: 9484.360973625273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9723.778027158532,
            "unit": "ns/iter",
            "extra": "iterations: 71288\ncpu: 9723.461171585668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9096.319422776229,
            "unit": "ns/iter",
            "extra": "iterations: 76920\ncpu: 9096.003640145493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18224.948109379402,
            "unit": "ns/iter",
            "extra": "iterations: 38215\ncpu: 18223.70535130178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51506.726560758056,
            "unit": "ns/iter",
            "extra": "iterations: 13407\ncpu: 51505.489669575116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41370.10016723831,
            "unit": "ns/iter",
            "extra": "iterations: 16742\ncpu: 41369.58547365975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41262.20797552974,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 41262.05152334974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41308.150397473335,
            "unit": "ns/iter",
            "extra": "iterations: 17108\ncpu: 41307.335749356826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25198.613965839704,
            "unit": "ns/iter",
            "extra": "iterations: 27868\ncpu: 25199.13520884145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41726.49242649341,
            "unit": "ns/iter",
            "extra": "iterations: 16835\ncpu: 41726.15384615383 ns\nthreads: 1"
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
        "date": 1705774016804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 537.1214369083336,
            "unit": "ns/iter",
            "extra": "iterations: 1298872\ncpu: 537.1189000917719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5118.926110000075,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5118.807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10018.118229735599,
            "unit": "ns/iter",
            "extra": "iterations: 83287\ncpu: 10017.742264699174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14853.548773265515,
            "unit": "ns/iter",
            "extra": "iterations: 55717\ncpu: 14853.012545542657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19789.900868557223,
            "unit": "ns/iter",
            "extra": "iterations: 43175\ncpu: 19789.48697162709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24194.88658839719,
            "unit": "ns/iter",
            "extra": "iterations: 34582\ncpu: 24194.138569197865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29089.8761996521,
            "unit": "ns/iter",
            "extra": "iterations: 29071\ncpu: 29088.951188469604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33762.333238868276,
            "unit": "ns/iter",
            "extra": "iterations: 24700\ncpu: 33761.53441295547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37225.707912640806,
            "unit": "ns/iter",
            "extra": "iterations: 22483\ncpu: 37224.449584130256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 533.3370042342907,
            "unit": "ns/iter",
            "extra": "iterations: 1314028\ncpu: 533.3156523300872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.51910138722417,
            "unit": "ns/iter",
            "extra": "iterations: 1739036\ncpu: 406.5061332830373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.0800918632992,
            "unit": "ns/iter",
            "extra": "iterations: 1712109\ncpu: 410.0775709957723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 428.2754205516709,
            "unit": "ns/iter",
            "extra": "iterations: 1624414\ncpu: 428.26767068001135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 853.5873615438368,
            "unit": "ns/iter",
            "extra": "iterations: 822553\ncpu: 853.576608437389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1924.1731724727906,
            "unit": "ns/iter",
            "extra": "iterations: 413195\ncpu: 1924.1304952867304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10248.23982585457,
            "unit": "ns/iter",
            "extra": "iterations: 79933\ncpu: 10248.126555990644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7518.401370943092,
            "unit": "ns/iter",
            "extra": "iterations: 104016\ncpu: 7518.232771881225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7865.343714033691,
            "unit": "ns/iter",
            "extra": "iterations: 103397\ncpu: 7865.2678510981905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7337.842810940644,
            "unit": "ns/iter",
            "extra": "iterations: 110383\ncpu: 7337.673373617335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30226.85127672981,
            "unit": "ns/iter",
            "extra": "iterations: 26983\ncpu: 30226.70940962828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244001.9865130653,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 243996.51587524524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 190300.83333334187,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 190296.440972222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192721.56111602404,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 192714.37112488915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190610.33325951645,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 190607.4844995569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99278.30707230861,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 99275.03689408588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183159.69584477012,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 183154.56654714208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5041.778649999742,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5041.662999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27343.83342159367,
            "unit": "ns/iter",
            "extra": "iterations: 30214\ncpu: 27343.565896604163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21593.086210887428,
            "unit": "ns/iter",
            "extra": "iterations: 38893\ncpu: 21592.61563777547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21376.39006437441,
            "unit": "ns/iter",
            "extra": "iterations: 38991\ncpu: 21376.040624759567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21057.099444850646,
            "unit": "ns/iter",
            "extra": "iterations: 39449\ncpu: 21056.597125402426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47149.939017502285,
            "unit": "ns/iter",
            "extra": "iterations: 17710\ncpu: 47149.63297571994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262994.7040212845,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 262989.47368421004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203180.01960325174,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 203174.02567094614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205171.54689375352,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 205168.1458383299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204683.51166627253,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 204681.6167805791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112707.30444844629,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 112705.07842633117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194793.34162743334,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 194790.18157363904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 811946.615979383,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 811930.8419243983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 450802.40955286403,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 450795.7825203261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2164.530622531676,
            "unit": "ns/iter",
            "extra": "iterations: 370985\ncpu: 2164.4945213418405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10314.514653868135,
            "unit": "ns/iter",
            "extra": "iterations: 80013\ncpu: 10314.303925612112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8024.114729872704,
            "unit": "ns/iter",
            "extra": "iterations: 102859\ncpu: 8023.9434565764805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8223.233534725221,
            "unit": "ns/iter",
            "extra": "iterations: 100302\ncpu: 8223.10123427248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7972.966135321284,
            "unit": "ns/iter",
            "extra": "iterations: 101817\ncpu: 7972.761915986482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29123.563800996195,
            "unit": "ns/iter",
            "extra": "iterations: 28824\ncpu: 29122.966971967835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244219.07988980995,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 244218.2920110195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188824.49253731288,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 188825.05330490443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187127.5481243401,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 187125.72347266797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185486.38466375414,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 185482.35910328955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98693.07030538052,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 98610.50592525043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181178.09160621665,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 181178.65284974076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 192.10417221964147,
            "unit": "ns/iter",
            "extra": "iterations: 3665459\ncpu: 192.10071644506166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1437.5546418102313,
            "unit": "ns/iter",
            "extra": "iterations: 487493\ncpu: 1437.5369492484929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1140.5304540286827,
            "unit": "ns/iter",
            "extra": "iterations: 665971\ncpu: 1140.4971087329723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1080.887971309817,
            "unit": "ns/iter",
            "extra": "iterations: 646629\ncpu: 1080.8814637141286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 835.821759328088,
            "unit": "ns/iter",
            "extra": "iterations: 841469\ncpu: 835.8122521447563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9408.310602755875,
            "unit": "ns/iter",
            "extra": "iterations: 75669\ncpu: 9407.92530626816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11404.996974603333,
            "unit": "ns/iter",
            "extra": "iterations: 61149\ncpu: 11404.909319858085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2565.8204606001714,
            "unit": "ns/iter",
            "extra": "iterations: 272514\ncpu: 2565.7540530027836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2587.0254515358224,
            "unit": "ns/iter",
            "extra": "iterations: 270632\ncpu: 2587.033684117176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2584.990709640218,
            "unit": "ns/iter",
            "extra": "iterations: 270926\ncpu: 2584.946073835677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4986.07087613353,
            "unit": "ns/iter",
            "extra": "iterations: 141063\ncpu: 4986.040279874906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5026.800089999597,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5026.714999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1928.8121957405303,
            "unit": "ns/iter",
            "extra": "iterations: 358863\ncpu: 1928.7909313582147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9927.897778093979,
            "unit": "ns/iter",
            "extra": "iterations: 70210\ncpu: 9927.698333570754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7875.501715692421,
            "unit": "ns/iter",
            "extra": "iterations: 88594\ncpu: 7875.278235546553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7946.277972483413,
            "unit": "ns/iter",
            "extra": "iterations: 88167\ncpu: 7946.078464731738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7810.792366620141,
            "unit": "ns/iter",
            "extra": "iterations: 88637\ncpu: 7810.601667475294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18576.760681039992,
            "unit": "ns/iter",
            "extra": "iterations: 37707\ncpu: 18576.518948736466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52394.446202528656,
            "unit": "ns/iter",
            "extra": "iterations: 13272\ncpu: 52392.13381555156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42000.051556948616,
            "unit": "ns/iter",
            "extra": "iterations: 16603\ncpu: 41997.675118954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42211.05207956072,
            "unit": "ns/iter",
            "extra": "iterations: 16590\ncpu: 42210.421940927816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42070.44059346559,
            "unit": "ns/iter",
            "extra": "iterations: 16648\ncpu: 42070.64512253735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25015.07150266478,
            "unit": "ns/iter",
            "extra": "iterations: 27957\ncpu: 25014.293379117826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41464.84937114068,
            "unit": "ns/iter",
            "extra": "iterations: 16856\ncpu: 41462.114380635656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1884.7266739428458,
            "unit": "ns/iter",
            "extra": "iterations: 368322\ncpu: 1884.690841166116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11257.273631601427,
            "unit": "ns/iter",
            "extra": "iterations: 62226\ncpu: 11257.337768778352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8864.125854627424,
            "unit": "ns/iter",
            "extra": "iterations: 78543\ncpu: 8863.775256865765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9710.227960136917,
            "unit": "ns/iter",
            "extra": "iterations: 71745\ncpu: 9709.830650219608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9153.062860122582,
            "unit": "ns/iter",
            "extra": "iterations: 76710\ncpu: 9153.299439447248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19942.10826332647,
            "unit": "ns/iter",
            "extra": "iterations: 34998\ncpu: 19941.728098748594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52303.448309684405,
            "unit": "ns/iter",
            "extra": "iterations: 13252\ncpu: 52303.7579233326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41928.6936543967,
            "unit": "ns/iter",
            "extra": "iterations: 16736\ncpu: 41927.56931166349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41046.31934499568,
            "unit": "ns/iter",
            "extra": "iterations: 17038\ncpu: 41045.9267519665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41145.196377113156,
            "unit": "ns/iter",
            "extra": "iterations: 17003\ncpu: 41144.098100335774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25008.28378952115,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 25007.73746375242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41812.75110612869,
            "unit": "ns/iter",
            "extra": "iterations: 16951\ncpu: 41811.12618724621 ns\nthreads: 1"
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
        "date": 1705775506322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 532.9340307820357,
            "unit": "ns/iter",
            "extra": "iterations: 1319858\ncpu: 532.9307395189483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5703.708888780547,
            "unit": "ns/iter",
            "extra": "iterations: 144103\ncpu: 5703.690415883084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9768.188196566713,
            "unit": "ns/iter",
            "extra": "iterations: 89008\ncpu: 9768.192746719396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14641.113256882556,
            "unit": "ns/iter",
            "extra": "iterations: 58513\ncpu: 14641.007981132401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19374.524338862942,
            "unit": "ns/iter",
            "extra": "iterations: 42011\ncpu: 19374.459070243505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24389.039278568864,
            "unit": "ns/iter",
            "extra": "iterations: 33988\ncpu: 24388.507708603047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28862.900528258626,
            "unit": "ns/iter",
            "extra": "iterations: 28963\ncpu: 28862.49007354212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34548.44974585989,
            "unit": "ns/iter",
            "extra": "iterations: 24396\ncpu: 34548.04476143627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38636.045384727026,
            "unit": "ns/iter",
            "extra": "iterations: 21483\ncpu: 38635.414048317296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 556.1126979165525,
            "unit": "ns/iter",
            "extra": "iterations: 1292464\ncpu: 556.1063983213467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.3110916595902,
            "unit": "ns/iter",
            "extra": "iterations: 1717092\ncpu: 407.30875223925125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 408.5271988802908,
            "unit": "ns/iter",
            "extra": "iterations: 1711155\ncpu: 408.53008640362845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 430.34551608658495,
            "unit": "ns/iter",
            "extra": "iterations: 1645906\ncpu: 430.33824531899194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 849.2958408767629,
            "unit": "ns/iter",
            "extra": "iterations: 823010\ncpu: 849.3008590418094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2020.934818358392,
            "unit": "ns/iter",
            "extra": "iterations: 394651\ncpu: 2020.8868088513636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10745.704392845097,
            "unit": "ns/iter",
            "extra": "iterations: 76101\ncpu: 10745.477720397867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7977.152717988457,
            "unit": "ns/iter",
            "extra": "iterations: 101049\ncpu: 7976.979485200239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7948.901340009834,
            "unit": "ns/iter",
            "extra": "iterations: 101044\ncpu: 7948.8262539091975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7617.987849560782,
            "unit": "ns/iter",
            "extra": "iterations: 106169\ncpu: 7617.905414951647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29074.961810968747,
            "unit": "ns/iter",
            "extra": "iterations: 28228\ncpu: 29074.822870908305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247971.4390243989,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 247967.05915334998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187752.1407407462,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 187749.9782135075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 179664.70335821068,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 179663.37064676662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186244.20247491574,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 186241.64710902527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96787.98070289902,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 96785.78050884017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184173.64077079363,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 184171.19675456383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5078.912550000041,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5078.824999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26685.18136417453,
            "unit": "ns/iter",
            "extra": "iterations: 30436\ncpu: 26685.04074122759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21126.914242236177,
            "unit": "ns/iter",
            "extra": "iterations: 38772\ncpu: 21126.70225936236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20725.1226338258,
            "unit": "ns/iter",
            "extra": "iterations: 40519\ncpu: 20725.022828796304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20020.18739011525,
            "unit": "ns/iter",
            "extra": "iterations: 40952\ncpu: 20019.874487204488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45514.71814671463,
            "unit": "ns/iter",
            "extra": "iterations: 18389\ncpu: 45514.43254119319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 253769.60262131743,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 253764.8912437256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 194630.07007531144,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 194628.7377311116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 193134.31379462205,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 193130.69634200106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197932.82293762546,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 197930.20344287928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111369.27280846788,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 111366.3774403471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 184712.7508800917,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 184708.20045558072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 771779.9821138236,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 771749.9186991861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439959.4972596051,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 439946.1385151974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2120.6473834693966,
            "unit": "ns/iter",
            "extra": "iterations: 371083\ncpu: 2120.586499516276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9947.84349419754,
            "unit": "ns/iter",
            "extra": "iterations: 80751\ncpu: 9947.354212331758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7605.357534591584,
            "unit": "ns/iter",
            "extra": "iterations: 107033\ncpu: 7605.045172984091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7744.25807751385,
            "unit": "ns/iter",
            "extra": "iterations: 106716\ncpu: 7744.03275984857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7711.753931313363,
            "unit": "ns/iter",
            "extra": "iterations: 107852\ncpu: 7711.487037792501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28107.56617671744,
            "unit": "ns/iter",
            "extra": "iterations: 29731\ncpu: 28106.410816992382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 240141.24821002,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 240133.01511535572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 179776.45340611687,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 179769.21366484725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180122.69846781399,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 180119.63227783397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 178773.77997997834,
            "unit": "ns/iter",
            "extra": "iterations: 4995\ncpu: 178775.03503503412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95005.26666666594,
            "unit": "ns/iter",
            "extra": "iterations: 9105\ncpu: 95003.185063152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177450.77495462546,
            "unit": "ns/iter",
            "extra": "iterations: 4959\ncpu: 177448.55817705145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 190.2190310913487,
            "unit": "ns/iter",
            "extra": "iterations: 3671182\ncpu: 190.21244383961516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1401.862680408003,
            "unit": "ns/iter",
            "extra": "iterations: 491940\ncpu: 1401.8353864292378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.8904154092695,
            "unit": "ns/iter",
            "extra": "iterations: 683326\ncpu: 1031.8498052174266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1059.5900095664024,
            "unit": "ns/iter",
            "extra": "iterations: 666918\ncpu: 1059.5779391169433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.0345726930647,
            "unit": "ns/iter",
            "extra": "iterations: 846593\ncpu: 825.0239489341461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8941.898586428926,
            "unit": "ns/iter",
            "extra": "iterations: 75907\ncpu: 8941.540305900626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11173.484909212006,
            "unit": "ns/iter",
            "extra": "iterations: 65868\ncpu: 11172.994473796132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2546.0054139181316,
            "unit": "ns/iter",
            "extra": "iterations: 280019\ncpu: 2545.9108131948256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2535.329495418566,
            "unit": "ns/iter",
            "extra": "iterations: 271849\ncpu: 2535.2018951697437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2549.0801551226605,
            "unit": "ns/iter",
            "extra": "iterations: 275653\ncpu: 2548.971351663155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5011.501290400771,
            "unit": "ns/iter",
            "extra": "iterations: 139879\ncpu: 5011.313349394837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4844.77202933327,
            "unit": "ns/iter",
            "extra": "iterations: 143865\ncpu: 4844.516039342465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1881.270049152818,
            "unit": "ns/iter",
            "extra": "iterations: 371699\ncpu: 1881.2337402037542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9761.598074444226,
            "unit": "ns/iter",
            "extra": "iterations: 72914\ncpu: 9760.945771731163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7745.014890808979,
            "unit": "ns/iter",
            "extra": "iterations: 89384\ncpu: 7744.959948089074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7659.289343596344,
            "unit": "ns/iter",
            "extra": "iterations: 88604\ncpu: 7658.939776985262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7773.824165299481,
            "unit": "ns/iter",
            "extra": "iterations: 90841\ncpu: 7773.362248324049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18242.714304369496,
            "unit": "ns/iter",
            "extra": "iterations: 38289\ncpu: 18242.42210556561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51325.52910833069,
            "unit": "ns/iter",
            "extra": "iterations: 13570\ncpu: 51322.26234340429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40273.21307534356,
            "unit": "ns/iter",
            "extra": "iterations: 17055\ncpu: 40271.802990325115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40791.35382335934,
            "unit": "ns/iter",
            "extra": "iterations: 16870\ncpu: 40789.32424422049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41087.58487554157,
            "unit": "ns/iter",
            "extra": "iterations: 16913\ncpu: 41086.383255484245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 23816.86249132359,
            "unit": "ns/iter",
            "extra": "iterations: 28820\ncpu: 23815.579458709057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40014.65943074606,
            "unit": "ns/iter",
            "extra": "iterations: 17321\ncpu: 40013.31909243155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2165.092335561,
            "unit": "ns/iter",
            "extra": "iterations: 326808\ncpu: 2164.9595481138635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11363.988106957137,
            "unit": "ns/iter",
            "extra": "iterations: 60960\ncpu: 11363.651574803227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8857.965591967883,
            "unit": "ns/iter",
            "extra": "iterations: 79371\ncpu: 8857.41139710977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8772.34634042708,
            "unit": "ns/iter",
            "extra": "iterations: 79982\ncpu: 8772.29501637861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9376.11207878269,
            "unit": "ns/iter",
            "extra": "iterations: 74635\ncpu: 9376.090306156531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18731.38333692349,
            "unit": "ns/iter",
            "extra": "iterations: 37124\ncpu: 18730.56513306783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49522.17100858703,
            "unit": "ns/iter",
            "extra": "iterations: 13742\ncpu: 49520.419152962284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39825.7501600776,
            "unit": "ns/iter",
            "extra": "iterations: 17179\ncpu: 39824.51248617482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40266.134167338256,
            "unit": "ns/iter",
            "extra": "iterations: 17426\ncpu: 40264.14552966856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40557.43617630646,
            "unit": "ns/iter",
            "extra": "iterations: 17470\ncpu: 40557.03491700047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24466.293467511383,
            "unit": "ns/iter",
            "extra": "iterations: 28320\ncpu: 24465.999293784953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40428.55132674139,
            "unit": "ns/iter",
            "extra": "iterations: 17788\ncpu: 40428.53609174726 ns\nthreads: 1"
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
        "date": 1705778510082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 548.9872135311658,
            "unit": "ns/iter",
            "extra": "iterations: 1271735\ncpu: 548.9721522172465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5230.812649999734,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5230.802999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10067.059249879689,
            "unit": "ns/iter",
            "extra": "iterations: 82920\ncpu: 10066.88856729378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15131.063358834384,
            "unit": "ns/iter",
            "extra": "iterations: 55162\ncpu: 15130.990536963849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20011.31391516228,
            "unit": "ns/iter",
            "extra": "iterations: 41868\ncpu: 20010.991688162805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25533.56800024249,
            "unit": "ns/iter",
            "extra": "iterations: 33294\ncpu: 25532.59145792034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29773.125102792397,
            "unit": "ns/iter",
            "extra": "iterations: 27969\ncpu: 29771.761593192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34684.502690492816,
            "unit": "ns/iter",
            "extra": "iterations: 24345\ncpu: 34683.914561511636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38762.21421145715,
            "unit": "ns/iter",
            "extra": "iterations: 22123\ncpu: 38760.602088324384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 532.8213002011336,
            "unit": "ns/iter",
            "extra": "iterations: 1319565\ncpu: 532.8311981599998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 392.682134968655,
            "unit": "ns/iter",
            "extra": "iterations: 1725852\ncpu: 392.6775876494626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 395.46059616722573,
            "unit": "ns/iter",
            "extra": "iterations: 1774066\ncpu: 395.4634720466992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.92016706670006,
            "unit": "ns/iter",
            "extra": "iterations: 1671428\ncpu: 418.9099979179479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 842.9699041456978,
            "unit": "ns/iter",
            "extra": "iterations: 833869\ncpu: 842.9852890561932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1911.1639626341728,
            "unit": "ns/iter",
            "extra": "iterations: 417278\ncpu: 1911.118966252712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10617.066034229649,
            "unit": "ns/iter",
            "extra": "iterations: 78005\ncpu: 10617.04121530671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8087.229603513939,
            "unit": "ns/iter",
            "extra": "iterations: 102677\ncpu: 8086.916251935679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7868.992311105755,
            "unit": "ns/iter",
            "extra": "iterations: 103656\ncpu: 7868.829590182914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7554.1726234174,
            "unit": "ns/iter",
            "extra": "iterations: 106266\ncpu: 7553.943876686824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30061.374545584727,
            "unit": "ns/iter",
            "extra": "iterations: 27508\ncpu: 30059.54267849351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236854.15527448303,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 236847.38966630842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185289.64729587143,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 185284.98409331875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183505.38900768544,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 183498.05389221522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185280.1591986004,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 185271.95174493708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98812.30416053676,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 98808.0036277067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182178.70163315616,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 182168.92797319926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5026.939530000618,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5026.629000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27619.745227749787,
            "unit": "ns/iter",
            "extra": "iterations: 30384\ncpu: 27618.29252238018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21251.757151286598,
            "unit": "ns/iter",
            "extra": "iterations: 38979\ncpu: 21251.068524077065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21193.671581088412,
            "unit": "ns/iter",
            "extra": "iterations: 39340\ncpu: 21193.06304016273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21101.706405249686,
            "unit": "ns/iter",
            "extra": "iterations: 39936\ncpu: 21101.101762820526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47139.663036118865,
            "unit": "ns/iter",
            "extra": "iterations: 17720\ncpu: 47137.528216704166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255285.7532770117,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 255273.9003786776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200642.1270096419,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 200644.18925126377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199989.05363720044,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 199984.02394106798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197032.28522880553,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 197024.2637063885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112008.66024742379,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 112008.94018620081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194625.84860737988,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 194619.8787061999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 805553.3005877511,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 805535.3484466843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 450364.96163557464,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 450366.380615849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2158.7978888336497,
            "unit": "ns/iter",
            "extra": "iterations: 370885\ncpu: 2158.829556331475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10847.465956232314,
            "unit": "ns/iter",
            "extra": "iterations: 77136\ncpu: 10847.547189379791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8102.308473875788,
            "unit": "ns/iter",
            "extra": "iterations: 101571\ncpu: 8102.181725098657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8250.417161537544,
            "unit": "ns/iter",
            "extra": "iterations: 100026\ncpu: 8250.414892128007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8125.115965559536,
            "unit": "ns/iter",
            "extra": "iterations: 101625\ncpu: 8124.846248462422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29081.15157084511,
            "unit": "ns/iter",
            "extra": "iterations: 28838\ncpu: 29081.26430404322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246998.10947894413,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 246988.2206208432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186826.9414376252,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 186827.23044397432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192348.17655913462,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 192345.74193548434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185042.24117032162,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 185043.8662486938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98334.15327979624,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 98329.66309683214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178786.75760031058,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 178783.80624239956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 192.04803768644896,
            "unit": "ns/iter",
            "extra": "iterations: 3630587\ncpu: 192.04010260599617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1448.902145640302,
            "unit": "ns/iter",
            "extra": "iterations: 483259\ncpu: 1448.8644805373394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 964.5564274742894,
            "unit": "ns/iter",
            "extra": "iterations: 723309\ncpu: 964.5389453193623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1079.1897676145331,
            "unit": "ns/iter",
            "extra": "iterations: 646770\ncpu: 1079.151321180633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.5246895212521,
            "unit": "ns/iter",
            "extra": "iterations: 840154\ncpu: 825.4852086641182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9279.499248418051,
            "unit": "ns/iter",
            "extra": "iterations: 75840\ncpu: 9279.566191983136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10794.980464771546,
            "unit": "ns/iter",
            "extra": "iterations: 64806\ncpu: 10794.991204518097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2578.0339810651085,
            "unit": "ns/iter",
            "extra": "iterations: 271769\ncpu: 2577.996754596746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2585.058797046417,
            "unit": "ns/iter",
            "extra": "iterations: 270983\ncpu: 2585.082090020397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2588.7731117935477,
            "unit": "ns/iter",
            "extra": "iterations: 273540\ncpu: 2588.742048694903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4861.495596182326,
            "unit": "ns/iter",
            "extra": "iterations: 143966\ncpu: 4861.514524262678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4917.315354118613,
            "unit": "ns/iter",
            "extra": "iterations: 143017\ncpu: 4917.287455337476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1886.7276723074608,
            "unit": "ns/iter",
            "extra": "iterations: 376304\ncpu: 1886.6857647008705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9799.588067981811,
            "unit": "ns/iter",
            "extra": "iterations: 71371\ncpu: 9799.774418181152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7916.46021118814,
            "unit": "ns/iter",
            "extra": "iterations: 89020\ncpu: 7916.61312064705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7922.388641338117,
            "unit": "ns/iter",
            "extra": "iterations: 88197\ncpu: 7922.0823837545295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7774.096966957884,
            "unit": "ns/iter",
            "extra": "iterations: 90701\ncpu: 7773.955083185276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18198.546230366508,
            "unit": "ns/iter",
            "extra": "iterations: 38200\ncpu: 18197.97120418835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52414.72112993678,
            "unit": "ns/iter",
            "extra": "iterations: 13275\ncpu: 52411.43502824856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42423.90318858089,
            "unit": "ns/iter",
            "extra": "iterations: 16465\ncpu: 42422.27755845695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41372.19366720334,
            "unit": "ns/iter",
            "extra": "iterations: 16833\ncpu: 41369.31028337177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41324.869420234994,
            "unit": "ns/iter",
            "extra": "iterations: 17093\ncpu: 41324.76452348891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24942.62377189529,
            "unit": "ns/iter",
            "extra": "iterations: 28092\ncpu: 24942.841378328172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41189.97344924347,
            "unit": "ns/iter",
            "extra": "iterations: 17024\ncpu: 41189.61466165403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1890.035558221606,
            "unit": "ns/iter",
            "extra": "iterations: 363404\ncpu: 1889.9852505751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11165.75661224175,
            "unit": "ns/iter",
            "extra": "iterations: 62838\ncpu: 11165.161208186124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9431.64198871873,
            "unit": "ns/iter",
            "extra": "iterations: 76411\ncpu: 9431.7231812174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9499.54448742617,
            "unit": "ns/iter",
            "extra": "iterations: 73414\ncpu: 9499.632222736818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9160.612085259007,
            "unit": "ns/iter",
            "extra": "iterations: 76192\ncpu: 9160.497165056855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18224.48583713538,
            "unit": "ns/iter",
            "extra": "iterations: 38375\ncpu: 18224.643648208545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51527.26025669756,
            "unit": "ns/iter",
            "extra": "iterations: 13479\ncpu: 51524.57155575403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41526.293482797635,
            "unit": "ns/iter",
            "extra": "iterations: 16771\ncpu: 41527.082463776744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42383.19470527736,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 42381.83800811845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42277.76376340162,
            "unit": "ns/iter",
            "extra": "iterations: 16602\ncpu: 42278.592940609735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25902.289752518886,
            "unit": "ns/iter",
            "extra": "iterations: 26992\ncpu: 25902.389596917455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41730.997101105306,
            "unit": "ns/iter",
            "extra": "iterations: 16903\ncpu: 41730.26090043217 ns\nthreads: 1"
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
        "date": 1705953676065,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 546.78159433287,
            "unit": "ns/iter",
            "extra": "iterations: 1278378\ncpu: 546.7703605662801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5218.870490000427,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5218.828000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10127.676670057795,
            "unit": "ns/iter",
            "extra": "iterations: 82572\ncpu: 10127.546868187763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15018.979913944691,
            "unit": "ns/iter",
            "extra": "iterations: 52524\ncpu: 15018.899931459897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20097.67126839443,
            "unit": "ns/iter",
            "extra": "iterations: 41651\ncpu: 20097.36140788936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24777.95021041824,
            "unit": "ns/iter",
            "extra": "iterations: 33742\ncpu: 24777.452433169346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29617.43655996862,
            "unit": "ns/iter",
            "extra": "iterations: 28523\ncpu: 29616.502471689517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34614.046658934196,
            "unit": "ns/iter",
            "extra": "iterations: 24154\ncpu: 34613.90245922001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39583.78554002328,
            "unit": "ns/iter",
            "extra": "iterations: 21314\ncpu: 39582.50445716433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.6335579023347,
            "unit": "ns/iter",
            "extra": "iterations: 1291511\ncpu: 541.620241716873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.7305414353386,
            "unit": "ns/iter",
            "extra": "iterations: 1727427\ncpu: 404.7225150469455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 408.47845673314805,
            "unit": "ns/iter",
            "extra": "iterations: 1713482\ncpu: 408.46702795827514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.60000036931547,
            "unit": "ns/iter",
            "extra": "iterations: 1624549\ncpu: 435.57251889601383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 879.6103231513362,
            "unit": "ns/iter",
            "extra": "iterations: 798264\ncpu: 879.6028632131719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1921.2632479001775,
            "unit": "ns/iter",
            "extra": "iterations: 414594\ncpu: 1921.1898869737615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10696.47011189978,
            "unit": "ns/iter",
            "extra": "iterations: 76318\ncpu: 10696.400587017468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7619.617904714708,
            "unit": "ns/iter",
            "extra": "iterations: 105704\ncpu: 7619.4921668054085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8039.809014786675,
            "unit": "ns/iter",
            "extra": "iterations: 101034\ncpu: 8039.57776590058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7683.573919207128,
            "unit": "ns/iter",
            "extra": "iterations: 105825\ncpu: 7683.485943775091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30259.964315808254,
            "unit": "ns/iter",
            "extra": "iterations: 27295\ncpu: 30259.50906759476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250230.94433619085,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 250218.92568883905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 189300.28403396351,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 189296.34066652195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186681.80127360695,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 186674.72551602928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191875.6050605021,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 191673.64136413648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99414.9413503055,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 99412.44601045702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183721.13419001555,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 183715.0832104488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5780.395151957167,
            "unit": "ns/iter",
            "extra": "iterations: 142573\ncpu: 5780.076872900202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27926.051449419443,
            "unit": "ns/iter",
            "extra": "iterations: 29874\ncpu: 27925.252728124793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21302.806680317863,
            "unit": "ns/iter",
            "extra": "iterations: 39070\ncpu: 21301.76350140774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21044.384558652895,
            "unit": "ns/iter",
            "extra": "iterations: 39323\ncpu: 21043.15794827461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20649.64780913765,
            "unit": "ns/iter",
            "extra": "iterations: 40532\ncpu: 20648.633178722983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47057.84117180506,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 47055.2640525839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263953.18399512116,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 263940.86086692975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204595.3206214908,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 204582.65065913423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205525.52303331363,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 205519.27710843366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203963.00328561716,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 203954.04834545922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112365.10754064607,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 112358.63525796945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196663.48814629696,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 196654.0302551375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 810083.6980324963,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 810051.0692899894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444249.2061906997,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 444224.1637543681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2134.5489550470284,
            "unit": "ns/iter",
            "extra": "iterations: 377816\ncpu: 2134.471541702843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10315.93568426756,
            "unit": "ns/iter",
            "extra": "iterations: 82095\ncpu: 10315.555149521855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7667.868352467326,
            "unit": "ns/iter",
            "extra": "iterations: 107051\ncpu: 7667.686429832501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7727.336748311942,
            "unit": "ns/iter",
            "extra": "iterations: 106394\ncpu: 7727.0485177735545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7835.89875829412,
            "unit": "ns/iter",
            "extra": "iterations: 105500\ncpu: 7835.75071090046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29338.067452978,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 29336.936874062158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248126.8086163936,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 248113.83595691907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190375.1881209452,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 190370.04319654393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191604.83882224132,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 191597.7099236642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189266.870163368,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 189258.53396388606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98794.75914634972,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 98789.74706413725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181388.31266734732,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 181377.8784757982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.47840896432066,
            "unit": "ns/iter",
            "extra": "iterations: 3644846\ncpu: 191.4721499893262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1450.0793768179471,
            "unit": "ns/iter",
            "extra": "iterations: 485444\ncpu: 1450.0560311797058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1109.280143707682,
            "unit": "ns/iter",
            "extra": "iterations: 624044\ncpu: 1109.2586420188327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1144.1145313716586,
            "unit": "ns/iter",
            "extra": "iterations: 600604\ncpu: 1144.060312618629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 860.551758761412,
            "unit": "ns/iter",
            "extra": "iterations: 832603\ncpu: 860.4993015879144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9377.550639069352,
            "unit": "ns/iter",
            "extra": "iterations: 75031\ncpu: 9377.082805773614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11786.796778004018,
            "unit": "ns/iter",
            "extra": "iterations: 59280\ncpu: 11786.283738191674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2654.6982832239974,
            "unit": "ns/iter",
            "extra": "iterations: 263459\ncpu: 2654.6400009109625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2669.10539701537,
            "unit": "ns/iter",
            "extra": "iterations: 260292\ncpu: 2668.9867533385523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2650.057135598114,
            "unit": "ns/iter",
            "extra": "iterations: 263706\ncpu: 2649.9161945499864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5272.661285901491,
            "unit": "ns/iter",
            "extra": "iterations: 134987\ncpu: 5272.437345818504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4909.654974153521,
            "unit": "ns/iter",
            "extra": "iterations: 134445\ncpu: 4909.171780281893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1921.1559885666748,
            "unit": "ns/iter",
            "extra": "iterations: 363501\ncpu: 1921.0874247938746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10150.899360402585,
            "unit": "ns/iter",
            "extra": "iterations: 69575\ncpu: 10150.42184692788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8073.005984841214,
            "unit": "ns/iter",
            "extra": "iterations: 86552\ncpu: 8072.896062482747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8054.824219829021,
            "unit": "ns/iter",
            "extra": "iterations: 86904\ncpu: 8054.350777869824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7976.201051456746,
            "unit": "ns/iter",
            "extra": "iterations: 87878\ncpu: 7975.84378342707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18917.319867497103,
            "unit": "ns/iter",
            "extra": "iterations: 37131\ncpu: 18914.898602246103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52933.36173011396,
            "unit": "ns/iter",
            "extra": "iterations: 12924\ncpu: 52929.928814607854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42655.13249557435,
            "unit": "ns/iter",
            "extra": "iterations: 16393\ncpu: 42652.58951991708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42574.42439883321,
            "unit": "ns/iter",
            "extra": "iterations: 16468\ncpu: 42572.50425066763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42565.741306192795,
            "unit": "ns/iter",
            "extra": "iterations: 16506\ncpu: 42563.39512904425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24875.143024496883,
            "unit": "ns/iter",
            "extra": "iterations: 28170\ncpu: 24872.8753993609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41817.71131516466,
            "unit": "ns/iter",
            "extra": "iterations: 16880\ncpu: 41816.2973933648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1898.5351460842621,
            "unit": "ns/iter",
            "extra": "iterations: 365816\ncpu: 1898.5085398123765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10700.171727189596,
            "unit": "ns/iter",
            "extra": "iterations: 65540\ncpu: 10699.656698199604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8258.539606782439,
            "unit": "ns/iter",
            "extra": "iterations: 84228\ncpu: 8258.246663817234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9165.347836427487,
            "unit": "ns/iter",
            "extra": "iterations: 75685\ncpu: 9164.772411970796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9754.605598389275,
            "unit": "ns/iter",
            "extra": "iterations: 71985\ncpu: 9754.334930888423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18838.655081003402,
            "unit": "ns/iter",
            "extra": "iterations: 37345\ncpu: 18837.975632614744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52927.32604150512,
            "unit": "ns/iter",
            "extra": "iterations: 13394\ncpu: 52923.36120651027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42947.80880064903,
            "unit": "ns/iter",
            "extra": "iterations: 16067\ncpu: 42947.22723594996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43377.57829343709,
            "unit": "ns/iter",
            "extra": "iterations: 16419\ncpu: 43376.71599975646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42795.72277906433,
            "unit": "ns/iter",
            "extra": "iterations: 16063\ncpu: 42793.05235634624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26509.034999423293,
            "unit": "ns/iter",
            "extra": "iterations: 26029\ncpu: 26507.537746359998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43016.64256148411,
            "unit": "ns/iter",
            "extra": "iterations: 16428\ncpu: 43014.59702946245 ns\nthreads: 1"
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
        "date": 1705955744659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 544.1989426376192,
            "unit": "ns/iter",
            "extra": "iterations: 1285652\ncpu: 544.1935298198891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5315.973460000123,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5315.924999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10132.525282331297,
            "unit": "ns/iter",
            "extra": "iterations: 82350\ncpu: 10132.35458409229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15149.383586921738,
            "unit": "ns/iter",
            "extra": "iterations: 55273\ncpu: 15149.269987154667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20303.07958077396,
            "unit": "ns/iter",
            "extra": "iterations: 41505\ncpu: 20301.92988796531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24678.066731087307,
            "unit": "ns/iter",
            "extra": "iterations: 34152\ncpu: 24677.02623565238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29454.960140885796,
            "unit": "ns/iter",
            "extra": "iterations: 28676\ncpu: 29453.62323894546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35739.50416142118,
            "unit": "ns/iter",
            "extra": "iterations: 24631\ncpu: 35737.42844383094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37689.22139404585,
            "unit": "ns/iter",
            "extra": "iterations: 22137\ncpu: 37687.39666621491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 529.4743163980594,
            "unit": "ns/iter",
            "extra": "iterations: 1325223\ncpu: 529.4464403349476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.1015720221266,
            "unit": "ns/iter",
            "extra": "iterations: 1733627\ncpu: 393.07959555313835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 398.2790783625486,
            "unit": "ns/iter",
            "extra": "iterations: 1756005\ncpu: 398.2767702825452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.6660957816785,
            "unit": "ns/iter",
            "extra": "iterations: 1653573\ncpu: 418.6519736352733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 830.083926937164,
            "unit": "ns/iter",
            "extra": "iterations: 836978\ncpu: 830.0776125537361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2021.7677588311926,
            "unit": "ns/iter",
            "extra": "iterations: 407051\ncpu: 2021.6420055472179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10558.458162706465,
            "unit": "ns/iter",
            "extra": "iterations: 76678\ncpu: 10557.947520801292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8317.020150876777,
            "unit": "ns/iter",
            "extra": "iterations: 97961\ncpu: 8316.5269852288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8068.330549965847,
            "unit": "ns/iter",
            "extra": "iterations: 99879\ncpu: 8067.96523793791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7878.961882892771,
            "unit": "ns/iter",
            "extra": "iterations: 104520\ncpu: 7878.586873325671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30056.473531442498,
            "unit": "ns/iter",
            "extra": "iterations: 27561\ncpu: 30054.74039403504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244665.59327730013,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 244648.2072829128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187523.7058823404,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 187515.75163398733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185052.9820012954,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 185042.5755303191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188161.0259515687,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 188149.74048442888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100292.39990942382,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 100284.63541666654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186481.37643617572,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 186449.1748485485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5061.3470200005395,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.256000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27969.10524749332,
            "unit": "ns/iter",
            "extra": "iterations: 30243\ncpu: 27968.891975002483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21363.530211594367,
            "unit": "ns/iter",
            "extra": "iterations: 39273\ncpu: 21363.3183102895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21428.83650760659,
            "unit": "ns/iter",
            "extra": "iterations: 38644\ncpu: 21428.351102370332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21292.597421351074,
            "unit": "ns/iter",
            "extra": "iterations: 38780\ncpu: 21292.086126869493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44912.72526013106,
            "unit": "ns/iter",
            "extra": "iterations: 18068\ncpu: 44912.29798538848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256227.1049475311,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 256221.40929535253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202046.8560623347,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 202043.86889754754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204479.34149753113,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 204469.11593188744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204154.72657164492,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 204145.8518345407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113934.00205602749,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 113928.19326651194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194988.38527941622,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 194980.5997273975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 801386.0202873442,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 801347.1682163972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453286.13316197175,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 453267.35218509013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2197.991878050782,
            "unit": "ns/iter",
            "extra": "iterations: 366907\ncpu: 2197.858312869479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11005.199813977846,
            "unit": "ns/iter",
            "extra": "iterations: 75260\ncpu: 11004.736912038219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8496.688118042875,
            "unit": "ns/iter",
            "extra": "iterations: 96575\ncpu: 8496.491845715727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8269.257423744508,
            "unit": "ns/iter",
            "extra": "iterations: 99074\ncpu: 8269.197771362828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8379.192366224366,
            "unit": "ns/iter",
            "extra": "iterations: 97907\ncpu: 8379.08014748687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29200.15410766672,
            "unit": "ns/iter",
            "extra": "iterations: 28532\ncpu: 29199.975466143194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245106.24965706634,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 245106.14540466497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186295.48845992808,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 186293.76835921104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193604.26244540128,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 193601.50655021722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190827.3120155231,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 190824.33247200676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98115.42179301994,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 98115.35112202773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178135.92254664318,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 178134.08353609167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.13856326529333,
            "unit": "ns/iter",
            "extra": "iterations: 3668346\ncpu: 191.1370137931369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1429.9973336813412,
            "unit": "ns/iter",
            "extra": "iterations: 490189\ncpu: 1429.9725208032007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1146.710017004062,
            "unit": "ns/iter",
            "extra": "iterations: 609853\ncpu: 1146.699614497265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1023.8945816954123,
            "unit": "ns/iter",
            "extra": "iterations: 686617\ncpu: 1023.8697847562755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.1240211259657,
            "unit": "ns/iter",
            "extra": "iterations: 849573\ncpu: 827.1166809679722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9362.96895278302,
            "unit": "ns/iter",
            "extra": "iterations: 75820\ncpu: 9362.831706673704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11435.501948901914,
            "unit": "ns/iter",
            "extra": "iterations: 61060\ncpu: 11435.491320013105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2588.9949703800344,
            "unit": "ns/iter",
            "extra": "iterations: 270597\ncpu: 2588.9939651954865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2600.6108299257758,
            "unit": "ns/iter",
            "extra": "iterations: 269494\ncpu: 2600.578862609175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2580.801618253224,
            "unit": "ns/iter",
            "extra": "iterations: 271033\ncpu: 2580.751790372388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5141.442399999505,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5141.313000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5221.1181684133535,
            "unit": "ns/iter",
            "extra": "iterations: 126142\ncpu: 5221.049293653154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1916.9872374339798,
            "unit": "ns/iter",
            "extra": "iterations: 366384\ncpu: 1916.9699004323259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10146.123432590988,
            "unit": "ns/iter",
            "extra": "iterations: 69382\ncpu: 10146.017699114993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7925.519178626155,
            "unit": "ns/iter",
            "extra": "iterations: 88145\ncpu: 7925.324181746001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7988.210960754593,
            "unit": "ns/iter",
            "extra": "iterations: 87348\ncpu: 7987.636809085448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7910.90757679498,
            "unit": "ns/iter",
            "extra": "iterations: 89101\ncpu: 7910.398312028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18927.526000370326,
            "unit": "ns/iter",
            "extra": "iterations: 37711\ncpu: 18925.912863620364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52975.606388650616,
            "unit": "ns/iter",
            "extra": "iterations: 13117\ncpu: 52971.41114584175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42248.483032971715,
            "unit": "ns/iter",
            "extra": "iterations: 16591\ncpu: 42246.07919956661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42333.88649070992,
            "unit": "ns/iter",
            "extra": "iterations: 16633\ncpu: 42331.69602597231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41988.29863522069,
            "unit": "ns/iter",
            "extra": "iterations: 16706\ncpu: 41985.72967795972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24823.051911112594,
            "unit": "ns/iter",
            "extra": "iterations: 28125\ncpu: 24821.13066666645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41763.854665956416,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 41760.571631457315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2206.4365662621785,
            "unit": "ns/iter",
            "extra": "iterations: 318545\ncpu: 2206.290163085299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9954.728412097169,
            "unit": "ns/iter",
            "extra": "iterations: 70294\ncpu: 9953.924943807335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8176.277172511664,
            "unit": "ns/iter",
            "extra": "iterations: 85362\ncpu: 8176.195496825323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9588.460894661177,
            "unit": "ns/iter",
            "extra": "iterations: 72765\ncpu: 9588.299319727841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9432.360044751698,
            "unit": "ns/iter",
            "extra": "iterations: 74188\ncpu: 9432.309807516096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18620.107998730236,
            "unit": "ns/iter",
            "extra": "iterations: 37806\ncpu: 18619.906893086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52832.58775911425,
            "unit": "ns/iter",
            "extra": "iterations: 13218\ncpu: 52831.75215615122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42435.5102152879,
            "unit": "ns/iter",
            "extra": "iterations: 16397\ncpu: 42434.500213453386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42502.39776386996,
            "unit": "ns/iter",
            "extra": "iterations: 16457\ncpu: 42501.91407911544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42296.73356359356,
            "unit": "ns/iter",
            "extra": "iterations: 16503\ncpu: 42296.27340483565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25876.288463648634,
            "unit": "ns/iter",
            "extra": "iterations: 27331\ncpu: 25874.33317478295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42758.6762832085,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 42756.54525784279 ns\nthreads: 1"
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
        "date": 1705957268419,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.9577728945653,
            "unit": "ns/iter",
            "extra": "iterations: 1264188\ncpu: 549.9208978411439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5251.498159999528,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5250.927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10111.729637871544,
            "unit": "ns/iter",
            "extra": "iterations: 82678\ncpu: 10111.273857616294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15124.556505691593,
            "unit": "ns/iter",
            "extra": "iterations: 54729\ncpu: 15123.448263260792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19895.376919218998,
            "unit": "ns/iter",
            "extra": "iterations: 41879\ncpu: 19894.362329568514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24893.126366262182,
            "unit": "ns/iter",
            "extra": "iterations: 33577\ncpu: 24891.226136938967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29027.782200340494,
            "unit": "ns/iter",
            "extra": "iterations: 28641\ncpu: 29026.685520756957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33926.51058393851,
            "unit": "ns/iter",
            "extra": "iterations: 24660\ncpu: 33924.36334144364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38495.97278850003,
            "unit": "ns/iter",
            "extra": "iterations: 22123\ncpu: 38493.87515255622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 544.2234100060648,
            "unit": "ns/iter",
            "extra": "iterations: 1311593\ncpu: 544.1879454983367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.10467755094004,
            "unit": "ns/iter",
            "extra": "iterations: 1719853\ncpu: 407.08095401176735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.48849797578066,
            "unit": "ns/iter",
            "extra": "iterations: 1706091\ncpu: 410.46544410585324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 431.69390097170935,
            "unit": "ns/iter",
            "extra": "iterations: 1619012\ncpu: 431.6808646260806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 936.8292922979189,
            "unit": "ns/iter",
            "extra": "iterations: 740693\ncpu: 936.7854158200493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2027.7022204948591,
            "unit": "ns/iter",
            "extra": "iterations: 388472\ncpu: 2027.609197059244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10404.913578227286,
            "unit": "ns/iter",
            "extra": "iterations: 79517\ncpu: 10404.23054189671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8245.451144162647,
            "unit": "ns/iter",
            "extra": "iterations: 99374\ncpu: 8245.091271358702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8106.071258578338,
            "unit": "ns/iter",
            "extra": "iterations: 100844\ncpu: 8105.618579191645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7758.631637409886,
            "unit": "ns/iter",
            "extra": "iterations: 105331\ncpu: 7758.270594601785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30239.836336443837,
            "unit": "ns/iter",
            "extra": "iterations: 27416\ncpu: 30238.050773271112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239214.00355288532,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 239204.86471713614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182014.23667241161,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 182007.17970765263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187396.53980959542,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 187388.4465599306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187965.31807282264,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 187952.45258338717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98665.4929354518,
            "unit": "ns/iter",
            "extra": "iterations: 8847\ncpu: 98661.04894314459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182287.0135303841,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 182276.8734388008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5791.446902717654,
            "unit": "ns/iter",
            "extra": "iterations: 140704\ncpu: 5791.047873550151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27244.07279543506,
            "unit": "ns/iter",
            "extra": "iterations: 30675\ncpu: 27243.171964140194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21622.63041014217,
            "unit": "ns/iter",
            "extra": "iterations: 38816\ncpu: 21621.220630667824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21002.504824845615,
            "unit": "ns/iter",
            "extra": "iterations: 39794\ncpu: 21001.671106196914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20655.123693077217,
            "unit": "ns/iter",
            "extra": "iterations: 40075\ncpu: 20654.08858390522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46753.49848526882,
            "unit": "ns/iter",
            "extra": "iterations: 18155\ncpu: 46750.26163591317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260681.46826809173,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 260665.95492289469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202751.32936784733,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 202741.40424539242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203064.48197030424,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 203053.59415507843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205981.9767387573,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 205976.15724587126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113139.40269151663,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 113136.40010352014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193543.8303353417,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 193536.6644459256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 809579.5186757199,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 809550.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457448.37512902176,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 457437.92569659406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2123.820956326397,
            "unit": "ns/iter",
            "extra": "iterations: 377528\ncpu: 2123.752940179269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10269.809270365473,
            "unit": "ns/iter",
            "extra": "iterations: 80040\ncpu: 10269.572713643169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7999.209803960194,
            "unit": "ns/iter",
            "extra": "iterations: 102734\ncpu: 7998.889364767277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8120.936902542021,
            "unit": "ns/iter",
            "extra": "iterations: 102413\ncpu: 8120.681944675027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7773.617511039208,
            "unit": "ns/iter",
            "extra": "iterations: 105305\ncpu: 7773.400123450939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29001.112648765604,
            "unit": "ns/iter",
            "extra": "iterations: 28904\ncpu: 28999.979241627556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246263.33830844532,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 246253.0127142061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187635.59161856674,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 187625.78576010282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189500.96000001236,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 189495.43478260876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186685.06356293848,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 186680.8460884358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97645.99274552564,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 97638.24776785691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179082.15727365413,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 179072.12614445545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.9296529746312,
            "unit": "ns/iter",
            "extra": "iterations: 3596769\ncpu: 193.91968180330716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1455.1414161330747,
            "unit": "ns/iter",
            "extra": "iterations: 481805\ncpu: 1455.0608648727111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1065.5882791247277,
            "unit": "ns/iter",
            "extra": "iterations: 653586\ncpu: 1065.5047690740003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1156.2726474263372,
            "unit": "ns/iter",
            "extra": "iterations: 605709\ncpu: 1156.215938676821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 792.3140999474305,
            "unit": "ns/iter",
            "extra": "iterations: 884365\ncpu: 792.2752483420282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9475.9457839398,
            "unit": "ns/iter",
            "extra": "iterations: 74572\ncpu: 9475.819342380602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11570.443654285797,
            "unit": "ns/iter",
            "extra": "iterations: 60466\ncpu: 11569.715211854646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2635.177448967335,
            "unit": "ns/iter",
            "extra": "iterations: 266888\ncpu: 2634.9933305356676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2653.583146820509,
            "unit": "ns/iter",
            "extra": "iterations: 264057\ncpu: 2653.449444627486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2614.6576905760257,
            "unit": "ns/iter",
            "extra": "iterations: 266560\ncpu: 2614.501425570236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5190.787805203222,
            "unit": "ns/iter",
            "extra": "iterations: 135074\ncpu: 5190.57923804728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5124.934412990714,
            "unit": "ns/iter",
            "extra": "iterations: 136216\ncpu: 5124.527221471786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1913.1430403740876,
            "unit": "ns/iter",
            "extra": "iterations: 367218\ncpu: 1913.0502862060093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9962.428884586156,
            "unit": "ns/iter",
            "extra": "iterations: 70252\ncpu: 9962.290041564644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7914.257911429382,
            "unit": "ns/iter",
            "extra": "iterations: 88290\ncpu: 7913.839619435993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7923.073654294945,
            "unit": "ns/iter",
            "extra": "iterations: 88318\ncpu: 7922.63411762037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7861.744319783797,
            "unit": "ns/iter",
            "extra": "iterations: 88685\ncpu: 7861.156903647706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18706.310406491706,
            "unit": "ns/iter",
            "extra": "iterations: 37467\ncpu: 18705.354044892505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52833.18190809488,
            "unit": "ns/iter",
            "extra": "iterations: 13144\ncpu: 52831.4896530733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42756.08237722717,
            "unit": "ns/iter",
            "extra": "iterations: 16473\ncpu: 42753.88818065904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42816.990929566266,
            "unit": "ns/iter",
            "extra": "iterations: 16427\ncpu: 42813.964814025705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42871.27427391214,
            "unit": "ns/iter",
            "extra": "iterations: 16458\ncpu: 42869.52242070757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25207.983660716145,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 25206.366933601457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41751.00233281537,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 41749.13865294879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1882.2089798276975,
            "unit": "ns/iter",
            "extra": "iterations: 373682\ncpu: 1882.0721897228325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10031.833285521527,
            "unit": "ns/iter",
            "extra": "iterations: 69718\ncpu: 10031.340543331711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8240.441707951706,
            "unit": "ns/iter",
            "extra": "iterations: 84171\ncpu: 8239.733399864617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8917.570589808016,
            "unit": "ns/iter",
            "extra": "iterations: 78517\ncpu: 8917.447177044458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9236.631226952604,
            "unit": "ns/iter",
            "extra": "iterations: 75659\ncpu: 9236.075020817085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19876.773269958685,
            "unit": "ns/iter",
            "extra": "iterations: 35346\ncpu: 19875.84167939773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52580.85760097447,
            "unit": "ns/iter",
            "extra": "iterations: 13097\ncpu: 52578.94174238405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41113.341279202075,
            "unit": "ns/iter",
            "extra": "iterations: 16948\ncpu: 41112.2846353551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42457.929339942995,
            "unit": "ns/iter",
            "extra": "iterations: 16544\ncpu: 42456.268133461796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41799.437320278324,
            "unit": "ns/iter",
            "extra": "iterations: 16345\ncpu: 41798.34200061132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26533.642143404606,
            "unit": "ns/iter",
            "extra": "iterations: 26220\ncpu: 26533.257055683116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42910.95910938353,
            "unit": "ns/iter",
            "extra": "iterations: 16483\ncpu: 42910.331857064724 ns\nthreads: 1"
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
        "date": 1705959048189,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 542.2294234253434,
            "unit": "ns/iter",
            "extra": "iterations: 1277302\ncpu: 542.1971467984862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5095.833660000153,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5095.629000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9818.832402431328,
            "unit": "ns/iter",
            "extra": "iterations: 85222\ncpu: 9818.625472295887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14731.101144869324,
            "unit": "ns/iter",
            "extra": "iterations: 56513\ncpu: 14730.803531930713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19703.79037371603,
            "unit": "ns/iter",
            "extra": "iterations: 41636\ncpu: 19703.122298011323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24535.70944063827,
            "unit": "ns/iter",
            "extra": "iterations: 34468\ncpu: 24535.75200185678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29454.519045784484,
            "unit": "ns/iter",
            "extra": "iterations: 28589\ncpu: 29454.05575571022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34191.724051671015,
            "unit": "ns/iter",
            "extra": "iterations: 24385\ncpu: 34191.10928849702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38424.44114133529,
            "unit": "ns/iter",
            "extra": "iterations: 21764\ncpu: 38422.8542547326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 522.848663998557,
            "unit": "ns/iter",
            "extra": "iterations: 1342027\ncpu: 522.8366493371595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.9379006035692,
            "unit": "ns/iter",
            "extra": "iterations: 1777006\ncpu: 393.9340103522447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 393.7774170715081,
            "unit": "ns/iter",
            "extra": "iterations: 1775837\ncpu: 393.7595060807949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.2754763706159,
            "unit": "ns/iter",
            "extra": "iterations: 1669341\ncpu: 418.272120555356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 848.1213011841785,
            "unit": "ns/iter",
            "extra": "iterations: 826109\ncpu: 848.1298472719715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1919.1500879708785,
            "unit": "ns/iter",
            "extra": "iterations: 414910\ncpu: 1919.1523462919672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9603.110105473801,
            "unit": "ns/iter",
            "extra": "iterations: 84192\ncpu: 9603.0608608894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7564.4423153916,
            "unit": "ns/iter",
            "extra": "iterations: 107403\ncpu: 7564.378089997501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7508.890729918238,
            "unit": "ns/iter",
            "extra": "iterations: 107971\ncpu: 7508.848672328675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7773.619831901357,
            "unit": "ns/iter",
            "extra": "iterations: 108865\ncpu: 7773.611353511228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30209.022688496232,
            "unit": "ns/iter",
            "extra": "iterations: 27547\ncpu: 30208.69060151748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236794.2811649694,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 236786.49972781676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181594.4303094946,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 181590.43756670176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185231.2377350129,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 185228.44175491668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191667.45322335747,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 191664.48882135894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98524.33933423381,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 98522.01086956514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184869.1578731179,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 184866.45452679144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5030.326959999911,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5030.388999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27357.060669867456,
            "unit": "ns/iter",
            "extra": "iterations: 30394\ncpu: 27356.9849312364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21437.163750604053,
            "unit": "ns/iter",
            "extra": "iterations: 39151\ncpu: 21436.42818829659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21146.064838344468,
            "unit": "ns/iter",
            "extra": "iterations: 39745\ncpu: 21146.046043527476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20830.33891877312,
            "unit": "ns/iter",
            "extra": "iterations: 40343\ncpu: 20830.35966586525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46687.608403917686,
            "unit": "ns/iter",
            "extra": "iterations: 18182\ncpu: 46687.09712902858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256904.29951981205,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 256898.7094837936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202944.59445207685,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 202943.30582301746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201322.06359598818,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 201320.48164601365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202077.1073549347,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 202068.54728186404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110883.68598485153,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 110882.22222222213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191362.9651598636,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 191356.7144432191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 801828.6023490411,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 801811.2416107387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437519.98711596505,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 437495.3419226969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2156.409706342132,
            "unit": "ns/iter",
            "extra": "iterations: 370397\ncpu: 2156.2833932240296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10612.234537012722,
            "unit": "ns/iter",
            "extra": "iterations: 77540\ncpu: 10611.89837503222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8129.517935206738,
            "unit": "ns/iter",
            "extra": "iterations: 101337\ncpu: 8129.2430208117785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8198.090415390197,
            "unit": "ns/iter",
            "extra": "iterations: 100171\ncpu: 8197.681963841782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7931.460982211637,
            "unit": "ns/iter",
            "extra": "iterations: 103440\ncpu: 7931.329273008465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28791.749402350335,
            "unit": "ns/iter",
            "extra": "iterations: 28863\ncpu: 28790.794442712086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244569.15523368315,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 244560.1530472797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186310.04807083152,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 186299.97891629828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186392.09234995648,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 186382.31191884997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185567.21020450903,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 185563.9679527725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97002.19572994161,
            "unit": "ns/iter",
            "extra": "iterations: 8946\ncpu: 96996.6241895821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178003.28444624605,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 177994.83558603947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.882829338517,
            "unit": "ns/iter",
            "extra": "iterations: 3597590\ncpu: 194.8728454326358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.1174710009032,
            "unit": "ns/iter",
            "extra": "iterations: 483464\ncpu: 1446.090298346927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1086.7902027674115,
            "unit": "ns/iter",
            "extra": "iterations: 642263\ncpu: 1086.7563599335447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1074.9744053346685,
            "unit": "ns/iter",
            "extra": "iterations: 652636\ncpu: 1074.9511212988514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.0905235727267,
            "unit": "ns/iter",
            "extra": "iterations: 849624\ncpu: 824.0825353332771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9321.1722587394,
            "unit": "ns/iter",
            "extra": "iterations: 75613\ncpu: 9320.696176583353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11487.107706683882,
            "unit": "ns/iter",
            "extra": "iterations: 60999\ncpu: 11486.845685994946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2601.5783663721354,
            "unit": "ns/iter",
            "extra": "iterations: 268776\ncpu: 2601.527294103637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2617.4464461639295,
            "unit": "ns/iter",
            "extra": "iterations: 265938\ncpu: 2617.31644217825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2618.6913714918837,
            "unit": "ns/iter",
            "extra": "iterations: 268598\ncpu: 2618.640868509826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5481.983405977212,
            "unit": "ns/iter",
            "extra": "iterations: 134446\ncpu: 5481.637237255068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5012.648718191983,
            "unit": "ns/iter",
            "extra": "iterations: 137189\ncpu: 5012.581183622606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1922.010461727949,
            "unit": "ns/iter",
            "extra": "iterations: 364089\ncpu: 1922.00203796325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10019.16976780894,
            "unit": "ns/iter",
            "extra": "iterations: 69813\ncpu: 10018.9964619771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7989.071523072218,
            "unit": "ns/iter",
            "extra": "iterations: 86923\ncpu: 7989.06043279698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7991.003245714248,
            "unit": "ns/iter",
            "extra": "iterations: 87500\ncpu: 7991.016000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7835.402076016435,
            "unit": "ns/iter",
            "extra": "iterations: 88824\ncpu: 7835.4003422497635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18387.84960519575,
            "unit": "ns/iter",
            "extra": "iterations: 37867\ncpu: 18387.677925370455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52357.66593854017,
            "unit": "ns/iter",
            "extra": "iterations: 13276\ncpu: 52356.952395300614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42116.327104491815,
            "unit": "ns/iter",
            "extra": "iterations: 16643\ncpu: 42116.25908790434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41988.09596293907,
            "unit": "ns/iter",
            "extra": "iterations: 16621\ncpu: 41987.804584561505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42092.98412793973,
            "unit": "ns/iter",
            "extra": "iterations: 16633\ncpu: 42091.96176276015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24859.097172456128,
            "unit": "ns/iter",
            "extra": "iterations: 28187\ncpu: 24858.200588923635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41786.732160958054,
            "unit": "ns/iter",
            "extra": "iterations: 16775\ncpu: 41787.14157973176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2146.5405635003685,
            "unit": "ns/iter",
            "extra": "iterations: 326069\ncpu: 2146.542296262476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11551.741598269344,
            "unit": "ns/iter",
            "extra": "iterations: 60553\ncpu: 11551.614288309442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9625.692975326001,
            "unit": "ns/iter",
            "extra": "iterations: 72587\ncpu: 9625.477013790332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9559.33747462465,
            "unit": "ns/iter",
            "extra": "iterations: 73890\ncpu: 9559.270537285305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9126.948589276431,
            "unit": "ns/iter",
            "extra": "iterations: 76521\ncpu: 9127.047477163196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19263.890321694318,
            "unit": "ns/iter",
            "extra": "iterations: 36370\ncpu: 19263.643112455506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52645.85339202229,
            "unit": "ns/iter",
            "extra": "iterations: 13178\ncpu: 52646.42586128378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42767.640159904535,
            "unit": "ns/iter",
            "extra": "iterations: 16260\ncpu: 42767.49077490771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41707.41668655915,
            "unit": "ns/iter",
            "extra": "iterations: 16756\ncpu: 41707.824063022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42109.090218311314,
            "unit": "ns/iter",
            "extra": "iterations: 16582\ncpu: 42108.877095645556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25079.986094273983,
            "unit": "ns/iter",
            "extra": "iterations: 28046\ncpu: 25079.58354132514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42013.37627300711,
            "unit": "ns/iter",
            "extra": "iterations: 16791\ncpu: 42014.09088202013 ns\nthreads: 1"
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
        "date": 1705960623515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 548.5294115333164,
            "unit": "ns/iter",
            "extra": "iterations: 1270777\ncpu: 548.5064649423149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5208.308750000015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5208.094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10025.95373772251,
            "unit": "ns/iter",
            "extra": "iterations: 83286\ncpu: 10025.690992483731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15278.724002733254,
            "unit": "ns/iter",
            "extra": "iterations: 55602\ncpu: 15278.209416927444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19683.120525367955,
            "unit": "ns/iter",
            "extra": "iterations: 42713\ncpu: 19682.4947908131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24418.28339575284,
            "unit": "ns/iter",
            "extra": "iterations: 34443\ncpu: 24416.81909241355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29482.157940570964,
            "unit": "ns/iter",
            "extra": "iterations: 28707\ncpu: 29481.33556275475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33916.89957273841,
            "unit": "ns/iter",
            "extra": "iterations: 24575\ncpu: 33914.69786368263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38063.964032379554,
            "unit": "ns/iter",
            "extra": "iterations: 21992\ncpu: 38061.84066933433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.5348865598032,
            "unit": "ns/iter",
            "extra": "iterations: 1294338\ncpu: 538.5023077434176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.9493214719629,
            "unit": "ns/iter",
            "extra": "iterations: 1717394\ncpu: 407.9249141431727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 408.6073905812501,
            "unit": "ns/iter",
            "extra": "iterations: 1709419\ncpu: 408.58695264297427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.60936860470235,
            "unit": "ns/iter",
            "extra": "iterations: 1629613\ncpu: 429.5689835562184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 879.7506530547262,
            "unit": "ns/iter",
            "extra": "iterations: 804297\ncpu: 879.6982955301345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2024.4676007093615,
            "unit": "ns/iter",
            "extra": "iterations: 394700\ncpu: 2024.3985305295148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10471.5327831567,
            "unit": "ns/iter",
            "extra": "iterations: 76945\ncpu: 10470.977971278191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8068.522663766015,
            "unit": "ns/iter",
            "extra": "iterations: 100204\ncpu: 8068.366532274157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8102.466865725638,
            "unit": "ns/iter",
            "extra": "iterations: 100138\ncpu: 8102.097105993701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7886.506784339292,
            "unit": "ns/iter",
            "extra": "iterations: 102884\ncpu: 7886.174721045064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29708.465987736032,
            "unit": "ns/iter",
            "extra": "iterations: 27887\ncpu: 29706.834725857934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244391.7525857294,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 244381.46434403936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192517.5971855852,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 192501.187335092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187381.03708609106,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 187372.73730684348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190446.81715674198,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 190434.04819809875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100612.60309689656,
            "unit": "ns/iter",
            "extra": "iterations: 8783\ncpu: 100607.46897415453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183768.86050455252,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 183755.75577697696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5848.633022630565,
            "unit": "ns/iter",
            "extra": "iterations: 140649\ncpu: 5848.387119709349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27726.0019277459,
            "unit": "ns/iter",
            "extra": "iterations: 30087\ncpu: 27724.761524911024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21739.965271432116,
            "unit": "ns/iter",
            "extra": "iterations: 38297\ncpu: 21738.867274198998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21444.309698723133,
            "unit": "ns/iter",
            "extra": "iterations: 39067\ncpu: 21442.36056006351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21332.00884281117,
            "unit": "ns/iter",
            "extra": "iterations: 39354\ncpu: 21330.589012552737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47066.456387422346,
            "unit": "ns/iter",
            "extra": "iterations: 17965\ncpu: 47064.787086000666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258055.54659497342,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 258045.51971326166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203214.3788689891,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 203207.56341633608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204533.59721895336,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 204521.1878387934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201661.19613260933,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 201648.8720073654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114855.39214673117,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 114846.62877809345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196958.11219512337,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 196952.12860310523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 801555.3097642752,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 801512.6262626247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440479.2311880997,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 440444.5544554434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2165.6875727436786,
            "unit": "ns/iter",
            "extra": "iterations: 370307\ncpu: 2165.4837742737836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10222.565078079471,
            "unit": "ns/iter",
            "extra": "iterations: 81456\ncpu: 10221.85719897858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7905.743424641397,
            "unit": "ns/iter",
            "extra": "iterations: 102656\ncpu: 7905.265157418951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8080.876299334698,
            "unit": "ns/iter",
            "extra": "iterations: 101398\ncpu: 8080.663326692873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7947.857227493703,
            "unit": "ns/iter",
            "extra": "iterations: 104649\ncpu: 7947.665051744382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28677.30465937788,
            "unit": "ns/iter",
            "extra": "iterations: 29167\ncpu: 28676.511125587254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 242501.43200439124,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 242494.53850355075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185945.60975094294,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 185934.5715491768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188056.5496378325,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 188046.6553046445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185354.11940297965,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 185348.95942821185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98912.04011492824,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 98908.14454635872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178882.11111109424,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 178872.92817679458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.59207806733306,
            "unit": "ns/iter",
            "extra": "iterations: 3458348\ncpu: 201.58506315732296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1483.1920322026388,
            "unit": "ns/iter",
            "extra": "iterations: 473004\ncpu: 1483.159550447774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1167.0015330811013,
            "unit": "ns/iter",
            "extra": "iterations: 600751\ncpu: 1166.979330870852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1078.6163739953502,
            "unit": "ns/iter",
            "extra": "iterations: 636607\ncpu: 1078.5658970133848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.9007370346712,
            "unit": "ns/iter",
            "extra": "iterations: 847043\ncpu: 827.8520689032339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9254.134168418119,
            "unit": "ns/iter",
            "extra": "iterations: 75681\ncpu: 9253.325141052603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11436.39247566776,
            "unit": "ns/iter",
            "extra": "iterations: 61135\ncpu: 11435.619530547092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2606.4429638758625,
            "unit": "ns/iter",
            "extra": "iterations: 267690\ncpu: 2606.167581904447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2625.7347892980797,
            "unit": "ns/iter",
            "extra": "iterations: 266490\ncpu: 2625.486134564169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2618.6282049361816,
            "unit": "ns/iter",
            "extra": "iterations: 267244\ncpu: 2618.362619927845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5189.404229954276,
            "unit": "ns/iter",
            "extra": "iterations: 132531\ncpu: 5189.229689657542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4892.560339477251,
            "unit": "ns/iter",
            "extra": "iterations: 143397\ncpu: 4892.10513469594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1888.5990631132222,
            "unit": "ns/iter",
            "extra": "iterations: 371016\ncpu: 1888.437964939501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9919.489919982327,
            "unit": "ns/iter",
            "extra": "iterations: 70734\ncpu: 9918.989453445301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7916.919961405658,
            "unit": "ns/iter",
            "extra": "iterations: 88095\ncpu: 7916.624098984125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7985.483374863721,
            "unit": "ns/iter",
            "extra": "iterations: 88691\ncpu: 7985.034558185068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7803.38825417558,
            "unit": "ns/iter",
            "extra": "iterations: 89104\ncpu: 7802.614921888923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18472.501859031898,
            "unit": "ns/iter",
            "extra": "iterations: 37923\ncpu: 18470.875194473207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52742.45445656117,
            "unit": "ns/iter",
            "extra": "iterations: 13295\ncpu: 52738.68371568234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42206.31544148675,
            "unit": "ns/iter",
            "extra": "iterations: 16637\ncpu: 42202.81300715298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42823.30682448345,
            "unit": "ns/iter",
            "extra": "iterations: 16221\ncpu: 42819.09869921686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42331.66746119026,
            "unit": "ns/iter",
            "extra": "iterations: 16362\ncpu: 42331.01087886511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25246.999348577836,
            "unit": "ns/iter",
            "extra": "iterations: 27632\ncpu: 25246.50405327155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42150.621874440054,
            "unit": "ns/iter",
            "extra": "iterations: 16677\ncpu: 42150.33878995096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2057.659068767285,
            "unit": "ns/iter",
            "extra": "iterations: 341805\ncpu: 2057.619695440352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10572.000546531006,
            "unit": "ns/iter",
            "extra": "iterations: 65870\ncpu: 10571.492333383918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9287.65122799584,
            "unit": "ns/iter",
            "extra": "iterations: 75611\ncpu: 9287.378820542053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9794.910862535455,
            "unit": "ns/iter",
            "extra": "iterations: 71429\ncpu: 9794.750031499867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9714.299389848224,
            "unit": "ns/iter",
            "extra": "iterations: 72277\ncpu: 9714.112373230622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18989.986447795447,
            "unit": "ns/iter",
            "extra": "iterations: 36673\ncpu: 18989.417282469156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53772.228180697966,
            "unit": "ns/iter",
            "extra": "iterations: 13016\ncpu: 53768.40043023964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41216.76995138104,
            "unit": "ns/iter",
            "extra": "iterations: 16866\ncpu: 41215.93738882895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41874.38739224032,
            "unit": "ns/iter",
            "extra": "iterations: 16704\ncpu: 41873.670977011774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42112.517107164036,
            "unit": "ns/iter",
            "extra": "iterations: 15929\ncpu: 42111.13064222513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25880.32846420193,
            "unit": "ns/iter",
            "extra": "iterations: 27178\ncpu: 25879.89182426952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42909.8709248148,
            "unit": "ns/iter",
            "extra": "iterations: 16533\ncpu: 42908.78243512942 ns\nthreads: 1"
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
        "date": 1705962319314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.7778206523212,
            "unit": "ns/iter",
            "extra": "iterations: 1238756\ncpu: 581.7361126807862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5154.80984000078,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5154.794999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9968.97231206303,
            "unit": "ns/iter",
            "extra": "iterations: 83791\ncpu: 9968.310439068631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15001.01230653509,
            "unit": "ns/iter",
            "extra": "iterations: 55824\ncpu: 15000.225709372315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19641.252650428098,
            "unit": "ns/iter",
            "extra": "iterations: 42446\ncpu: 19640.02732884135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24821.27425599364,
            "unit": "ns/iter",
            "extra": "iterations: 33837\ncpu: 24819.452079085033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29500.250506389366,
            "unit": "ns/iter",
            "extra": "iterations: 28634\ncpu: 29498.679891038646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35093.24506122465,
            "unit": "ns/iter",
            "extra": "iterations: 24500\ncpu: 35091.27346938777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38296.41019865307,
            "unit": "ns/iter",
            "extra": "iterations: 22199\ncpu: 38295.01328888689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.984996789841,
            "unit": "ns/iter",
            "extra": "iterations: 1305254\ncpu: 538.9593136661531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.6447792633269,
            "unit": "ns/iter",
            "extra": "iterations: 1725178\ncpu: 410.6202954129953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.6730669452355,
            "unit": "ns/iter",
            "extra": "iterations: 1686437\ncpu: 413.6320538508104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.1903555023356,
            "unit": "ns/iter",
            "extra": "iterations: 1619680\ncpu: 432.1714783167042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 861.3688121034726,
            "unit": "ns/iter",
            "extra": "iterations: 801888\ncpu: 861.2842441837261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2033.1910690408693,
            "unit": "ns/iter",
            "extra": "iterations: 393418\ncpu: 2033.090250064816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10883.514936993133,
            "unit": "ns/iter",
            "extra": "iterations: 75149\ncpu: 10882.61720049502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8219.494048885379,
            "unit": "ns/iter",
            "extra": "iterations: 98721\ncpu: 8219.399114676717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8397.783246374884,
            "unit": "ns/iter",
            "extra": "iterations: 97364\ncpu: 8397.652109609302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7852.26071511599,
            "unit": "ns/iter",
            "extra": "iterations: 103312\ncpu: 7851.799403747865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30314.441842623586,
            "unit": "ns/iter",
            "extra": "iterations: 27374\ncpu: 30313.596843720337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246534.46551724107,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 246522.69643866588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192438.1861795645,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 192431.47007042306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191268.83630289175,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 191262.694877505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191132.73221476996,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 191124.2058165552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99281.5565770083,
            "unit": "ns/iter",
            "extra": "iterations: 8811\ncpu: 99279.40074906379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185110.9513536548,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 185105.98561759706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5157.328469999811,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5157.142000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27264.662077887653,
            "unit": "ns/iter",
            "extra": "iterations: 30146\ncpu: 27264.011809195224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21367.54875825146,
            "unit": "ns/iter",
            "extra": "iterations: 38937\ncpu: 21366.242905205872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21169.702941774904,
            "unit": "ns/iter",
            "extra": "iterations: 39228\ncpu: 21168.675435913126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20797.09368077892,
            "unit": "ns/iter",
            "extra": "iterations: 40179\ncpu: 20795.422982154872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45915.833239912405,
            "unit": "ns/iter",
            "extra": "iterations: 17840\ncpu: 45913.81726457417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 265924.4260499185,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 265918.50273889204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205815.04321279103,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 205806.34100516766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205334.62697478372,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 205329.2619665168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205722.0958069542,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 205706.18411805987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112792.34418364169,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 112787.61509531832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194871.66225613002,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 194856.06638259697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 809918.0831918532,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 809876.4855687596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453192.79652355204,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 453152.5562372188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2126.5284335289207,
            "unit": "ns/iter",
            "extra": "iterations: 377811\ncpu: 2126.4447038333974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10082.094866303933,
            "unit": "ns/iter",
            "extra": "iterations: 81715\ncpu: 10081.377959982909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7849.703770643699,
            "unit": "ns/iter",
            "extra": "iterations: 104571\ncpu: 7849.318644748546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7772.982662187149,
            "unit": "ns/iter",
            "extra": "iterations: 105665\ncpu: 7772.291676524867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7683.029516776586,
            "unit": "ns/iter",
            "extra": "iterations: 106990\ncpu: 7682.660996354773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28907.366095487487,
            "unit": "ns/iter",
            "extra": "iterations: 28946\ncpu: 28905.330615629275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245020.8154778349,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 245008.09694299157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190529.5771465548,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 190516.5267914783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192888.38647235985,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 192877.88168768949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189734.43253711713,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 189719.4534108028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98338.479467258,
            "unit": "ns/iter",
            "extra": "iterations: 9010\ncpu: 98332.93007769146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181353.8594683811,
            "unit": "ns/iter",
            "extra": "iterations: 4853\ncpu: 181340.14011951257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.61122096658178,
            "unit": "ns/iter",
            "extra": "iterations: 3599173\ncpu: 194.60314911230873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1440.3938019278385,
            "unit": "ns/iter",
            "extra": "iterations: 485409\ncpu: 1440.265219639525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1154.9883728601003,
            "unit": "ns/iter",
            "extra": "iterations: 606340\ncpu: 1154.9356796516806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1153.875842268268,
            "unit": "ns/iter",
            "extra": "iterations: 608476\ncpu: 1153.8542193940275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.2834046251658,
            "unit": "ns/iter",
            "extra": "iterations: 835064\ncpu: 839.2444171943675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9256.469286064452,
            "unit": "ns/iter",
            "extra": "iterations: 75259\ncpu: 9256.067712831637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11781.814702410134,
            "unit": "ns/iter",
            "extra": "iterations: 59310\ncpu: 11780.949249704885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2647.7127804470815,
            "unit": "ns/iter",
            "extra": "iterations: 264310\ncpu: 2647.4923385418515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2705.3123316764213,
            "unit": "ns/iter",
            "extra": "iterations: 259916\ncpu: 2705.1947552286224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2641.12264065027,
            "unit": "ns/iter",
            "extra": "iterations: 263526\ncpu: 2641.0308660245864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5200.369504647781,
            "unit": "ns/iter",
            "extra": "iterations: 134591\ncpu: 5199.985140165367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5123.324554925406,
            "unit": "ns/iter",
            "extra": "iterations: 136775\ncpu: 5123.3039663681375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1904.514825892163,
            "unit": "ns/iter",
            "extra": "iterations: 369455\ncpu: 1904.459812426398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9882.151336066641,
            "unit": "ns/iter",
            "extra": "iterations: 70730\ncpu: 9881.29930722469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7921.829634303189,
            "unit": "ns/iter",
            "extra": "iterations: 88762\ncpu: 7921.492305265856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7956.982553234724,
            "unit": "ns/iter",
            "extra": "iterations: 88899\ncpu: 7956.420207201413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7845.345755578199,
            "unit": "ns/iter",
            "extra": "iterations: 89329\ncpu: 7844.994346740644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18358.839686273022,
            "unit": "ns/iter",
            "extra": "iterations: 38250\ncpu: 18358.392156862683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52580.0097875531,
            "unit": "ns/iter",
            "extra": "iterations: 13180\ncpu: 52576.49468892313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42811.83549285256,
            "unit": "ns/iter",
            "extra": "iterations: 16516\ncpu: 42811.02567207562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42892.15894324438,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 42889.708226063696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42596.093872068755,
            "unit": "ns/iter",
            "extra": "iterations: 16384\ncpu: 42592.65747070303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25297.92110410521,
            "unit": "ns/iter",
            "extra": "iterations: 27606\ncpu: 25296.808664782846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41864.833433336295,
            "unit": "ns/iter",
            "extra": "iterations: 16666\ncpu: 41861.322452897766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2154.1482629683755,
            "unit": "ns/iter",
            "extra": "iterations: 327081\ncpu: 2154.0159776935648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9929.17744914158,
            "unit": "ns/iter",
            "extra": "iterations: 70392\ncpu: 9928.366859870483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9171.660246881276,
            "unit": "ns/iter",
            "extra": "iterations: 75340\ncpu: 9171.518449694819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9202.139371815683,
            "unit": "ns/iter",
            "extra": "iterations: 76156\ncpu: 9202.100950680204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9501.375219682766,
            "unit": "ns/iter",
            "extra": "iterations: 73970\ncpu: 9500.736785183213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19828.017783352527,
            "unit": "ns/iter",
            "extra": "iterations: 35089\ncpu: 19826.945766479515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52055.80583327232,
            "unit": "ns/iter",
            "extra": "iterations: 13303\ncpu: 52050.24430579517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41518.4532807884,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 41515.51137381279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43323.69078295751,
            "unit": "ns/iter",
            "extra": "iterations: 16144\ncpu: 43321.09762140724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42538.68295921122,
            "unit": "ns/iter",
            "extra": "iterations: 16572\ncpu: 42536.211682355315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26002.826088565977,
            "unit": "ns/iter",
            "extra": "iterations: 26985\ncpu: 26001.19325551266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42803.552125413116,
            "unit": "ns/iter",
            "extra": "iterations: 16585\ncpu: 42802.83991558686 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}