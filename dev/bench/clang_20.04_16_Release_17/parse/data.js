window.BENCHMARK_DATA = {
  "lastUpdate": 1702493049219,
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
      }
    ]
  }
}