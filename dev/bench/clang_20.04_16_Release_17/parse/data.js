window.BENCHMARK_DATA = {
  "lastUpdate": 1705575717881,
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
      }
    ]
  }
}