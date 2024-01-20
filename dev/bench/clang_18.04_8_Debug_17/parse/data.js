window.BENCHMARK_DATA = {
  "lastUpdate": 1705774143572,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-8 18.04 Debug c++-17": [
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
        "date": 1702489582753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8175.631166522409,
            "unit": "ns/iter",
            "extra": "iterations: 85502\ncpu: 8175.301162545907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59200.14066992083,
            "unit": "ns/iter",
            "extra": "iterations: 13912\ncpu: 59198.23174238069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109273.50694532778,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 109269.51701287118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158108.08344030453,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 158100.880249404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208282.5474189758,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 208269.05162064818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264419.19845052395,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 264405.78069129924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308165.65553976555,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 308148.0823863637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358212.04697154457,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 358197.2805933249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405367.99906762724,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 405350.9090909087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6890.080175970091,
            "unit": "ns/iter",
            "extra": "iterations: 102063\ncpu: 6889.592702546474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5638.340195251034,
            "unit": "ns/iter",
            "extra": "iterations: 124455\ncpu: 5638.173637057573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5668.060410595206,
            "unit": "ns/iter",
            "extra": "iterations: 123869\ncpu: 5668.061419725688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5623.592039081388,
            "unit": "ns/iter",
            "extra": "iterations: 124458\ncpu: 5623.441642963895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9743.82084532014,
            "unit": "ns/iter",
            "extra": "iterations: 71949\ncpu: 9743.733755854835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31917.624799903155,
            "unit": "ns/iter",
            "extra": "iterations: 25613\ncpu: 31916.49162534656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147516.23838210214,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 147510.1549053354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115836.60249797085,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 115829.71762150415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118829.71784062673,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 118820.83220016336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109515.72134106884,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 109510.00644745314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 363009.51307693525,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 362999.6538461537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2014574.8601694459,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 2014440.6779661009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1506958.9079159491,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1506868.3360258513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1527107.3256578324,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1526948.0263157876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1511303.7463175512,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1511224.0589198023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847337.7893772434,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 847282.0512820492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1479526.3949044647,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1479463.8535031867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 45589.60269972505,
            "unit": "ns/iter",
            "extra": "iterations: 18150\ncpu: 45588.21487603307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178430.2581246147,
            "unit": "ns/iter",
            "extra": "iterations: 4831\ncpu: 178425.15007244883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142573.54273433125,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 142570.04463547675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145092.259102463,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 145086.9771380186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136749.05914321175,
            "unit": "ns/iter",
            "extra": "iterations: 6256\ncpu: 136742.00767263406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 327082.4885208865,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 326388.445615355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2001960.6537634018,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2001818.7096774173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1530523.9487601705,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1530441.6528925633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1583158.0967740805,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1583034.1256366705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1557430.7508363,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1557353.1772575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 884400.648854922,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 884344.0839694645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1519514.5024469474,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1519471.4518760163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5493949.24000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5493822.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3316882.6085409084,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316808.8967971685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31575.14215893943,
            "unit": "ns/iter",
            "extra": "iterations: 25985\ncpu: 31573.030594573887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155156.9781153896,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 155150.82293362293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110743.7080632552,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 110736.82914181927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109266.02136916592,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 109258.7715930904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104900.04307692009,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 104893.4030769225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 286382.03494889505,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286360.17144741095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1967215.922105233,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1967114.1052631624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1502030.1286173768,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1501948.553054666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1510055.2988691905,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1509976.7366720492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1496783.8743962275,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1496672.4637681209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 834800.679245314,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834754.9865229088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1464615.9559054389,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1464490.5511811045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3305.6648364628345,
            "unit": "ns/iter",
            "extra": "iterations: 211634\ncpu: 3305.638507990199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21518.810958330447,
            "unit": "ns/iter",
            "extra": "iterations: 33527\ncpu: 21518.647657112175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16236.773780884538,
            "unit": "ns/iter",
            "extra": "iterations: 43228\ncpu: 16236.626723420053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15921.24743252014,
            "unit": "ns/iter",
            "extra": "iterations: 44012\ncpu: 15920.97836953556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12000.909359233532,
            "unit": "ns/iter",
            "extra": "iterations: 58274\ncpu: 12000.82369495834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105184.15238522383,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 105183.20622102551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135848.46019419326,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 135846.31067961233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33217.836144011155,
            "unit": "ns/iter",
            "extra": "iterations: 21110\ncpu: 33217.88252013248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33160.825870883265,
            "unit": "ns/iter",
            "extra": "iterations: 21128\ncpu: 33160.52631578943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32980.82198193151,
            "unit": "ns/iter",
            "extra": "iterations: 21363\ncpu: 32979.806206993635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67120.44813396691,
            "unit": "ns/iter",
            "extra": "iterations: 10450\ncpu: 67118.89952153151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54984.813816409805,
            "unit": "ns/iter",
            "extra": "iterations: 12724\ncpu: 54984.36026406794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24258.483645184624,
            "unit": "ns/iter",
            "extra": "iterations: 28860\ncpu: 24258.12543312558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122744.86395511706,
            "unit": "ns/iter",
            "extra": "iterations: 5704\ncpu: 122743.98667601684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95854.84062328839,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95854.08693274981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96448.83104703652,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 96447.90033594442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95676.74636886902,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 95676.00712524031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170495.04662459737,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 170493.32200097345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 575879.3719007733,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 575875.0413223136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 472938.2001352597,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 472926.166328594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 470122.2800537393,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470117.7971793115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 464289.18567635905,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464277.85145888524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304721.11202778877,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 304715.2409900121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 461533.2734478158,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461523.64597094397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24042.394458335464,
            "unit": "ns/iter",
            "extra": "iterations: 29197\ncpu: 24042.02829057753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117210.51423308878,
            "unit": "ns/iter",
            "extra": "iterations: 5972\ncpu: 117209.15941058409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95893.13410169317,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 95892.27118644076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96040.82755775923,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96038.72387238764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99107.00683528089,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 99106.16541353389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169023.41337531348,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169017.8337775605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 589057.9624059821,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 589052.2138680023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473127.8257626616,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473115.9322033888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 473802.7294357605,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 473795.30931339186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474443.74308832275,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 474438.30074174004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306930.76387662167,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 306924.40528634127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465688.5013315809,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 465680.95872170647 ns\nthreads: 1"
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
        "date": 1702492208645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8129.8437802360595,
            "unit": "ns/iter",
            "extra": "iterations: 85783\ncpu: 8129.24821934416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59584.45159999428,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59581.97 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109986.78150614485,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109983.23514344265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159394.28479142243,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 159385.6773717239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209460.19951575168,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 209447.5060532689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259194.86518873667,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 259183.40323547038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 311108.0589706899,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 311090.0285918512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 360720.7210743882,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 360706.85950413224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407913.9911048992,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 407893.5393258424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6746.035854195259,
            "unit": "ns/iter",
            "extra": "iterations: 103893\ncpu: 6745.729741176033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5537.929589415567,
            "unit": "ns/iter",
            "extra": "iterations: 127282\ncpu: 5537.677754906422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5568.068632321546,
            "unit": "ns/iter",
            "extra": "iterations: 124810\ncpu: 5567.827097187727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5542.225499561971,
            "unit": "ns/iter",
            "extra": "iterations: 125610\ncpu: 5542.1112968712705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9718.065202613327,
            "unit": "ns/iter",
            "extra": "iterations: 72083\ncpu: 9717.68239390701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33276.89605997366,
            "unit": "ns/iter",
            "extra": "iterations: 24543\ncpu: 33274.1555637045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 157773.04785568846,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 157767.89987115777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 127014.39923167913,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 127007.90484633547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 127027.16469544008,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 127022.0283855705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 119388.17447405492,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 119381.5147265079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 379145.07683021616,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 379141.83427192277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1985989.8218884692,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1985864.592274681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1535577.9057851902,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1535497.3553719027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1539579.5867768605,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1539506.115702479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1516427.349102841,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1516320.7177813991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 848415.503676471,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 848342.9227941176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1489128.4855304982,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1489068.9710610954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41575.191782895665,
            "unit": "ns/iter",
            "extra": "iterations: 19788\ncpu: 41575.02021427126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 210020.4784712218,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 210021.28688921104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153725.56381460465,
            "unit": "ns/iter",
            "extra": "iterations: 5610\ncpu: 153724.56327985687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 149927.40481172028,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 149928.05090655515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141337.48625965454,
            "unit": "ns/iter",
            "extra": "iterations: 6077\ncpu: 141338.0121770611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 337310.6056009301,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 337290.5095293664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2037971.0678337386,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2037875.4923413566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1578130.255499139,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577996.2774957723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1574919.702199604,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1574848.9001692042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1561524.8204697906,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1561454.6979865793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 882960.797528513,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 882940.3992395438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1533423.7269736435,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1533347.697368424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5446807.590000162,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5446807.999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3267716.5244755326,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3267507.342657359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 33298.34128045972,
            "unit": "ns/iter",
            "extra": "iterations: 24663\ncpu: 33298.18756842241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 167525.66902791997,
            "unit": "ns/iter",
            "extra": "iterations: 5082\ncpu: 167519.9921290837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120371.14914872899,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120370.81750386885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 122697.39044224088,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 122691.98288159809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 117701.59114584308,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117700.63048245602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289591.7765886377,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 289584.080267558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1972534.1800847892,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1972496.61016949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1532017.9802954935,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1531941.0509031222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1526269.1745515268,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1526211.5823817293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1508669.4087237192,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1508635.379644579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 830873.555058222,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 830837.153088629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1469865.0158227137,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1469797.6265822754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3255.804570520329,
            "unit": "ns/iter",
            "extra": "iterations: 215249\ncpu: 3255.698748890818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21179.83566539426,
            "unit": "ns/iter",
            "extra": "iterations: 33018\ncpu: 21179.193167363093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16236.560817557465,
            "unit": "ns/iter",
            "extra": "iterations: 43055\ncpu: 16235.891301823156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15414.118323547104,
            "unit": "ns/iter",
            "extra": "iterations: 45477\ncpu: 15413.125316093823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12152.652902308377,
            "unit": "ns/iter",
            "extra": "iterations: 57661\ncpu: 12152.54851632818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105135.37937274766,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 105132.31302774427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135470.3886300136,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 135466.95246971116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32879.487684264306,
            "unit": "ns/iter",
            "extra": "iterations: 21233\ncpu: 32878.05303065983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32801.7020907554,
            "unit": "ns/iter",
            "extra": "iterations: 21332\ncpu: 32801.181323832854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32845.06381180631,
            "unit": "ns/iter",
            "extra": "iterations: 21297\ncpu: 32844.086021505376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66122.56069472534,
            "unit": "ns/iter",
            "extra": "iterations: 10594\ncpu: 66120.6060033979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61780.99682147624,
            "unit": "ns/iter",
            "extra": "iterations: 11326\ncpu: 61777.89157690275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24016.452064668876,
            "unit": "ns/iter",
            "extra": "iterations: 29133\ncpu: 24014.934953488948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120523.12819194596,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 120516.53813196032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96636.16769759437,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96634.3642611675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97001.19444058802,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97001.69562195904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95823.07682809516,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95818.42502400844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174256.32088623525,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 174242.8927059966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 578637.8511166078,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 578610.0909842798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 468479.70261216006,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 468454.38713999395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 469239.75887477555,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469217.0127260462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461508.9940633373,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 461505.21108179627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299283.78399310284,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 299275.0860585184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460130.79355689976,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460112.2287968393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24391.346551544324,
            "unit": "ns/iter",
            "extra": "iterations: 28723\ncpu: 24389.910524666466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119680.38366928669,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 119680.64571233281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97185.65169457786,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 97180.14155437596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96587.83483434546,
            "unit": "ns/iter",
            "extra": "iterations: 6218\ncpu: 96589.83596011667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94636.5488976006,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 94633.38292979941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170570.24062346204,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 170563.61422308825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 579232.6589595781,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 579210.2394715097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478077.86657594104,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 478058.47515316226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485172.6265865069,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 485148.96459585195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 469395.04161072604,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469356.2416107394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298707.825451449,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 298688.56405846705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 462459.3222591486,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 462450.6312292373 ns\nthreads: 1"
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
        "date": 1702503265739,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8239.088584377836,
            "unit": "ns/iter",
            "extra": "iterations: 84507\ncpu: 8238.116369058185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60066.878247799534,
            "unit": "ns/iter",
            "extra": "iterations: 13971\ncpu: 60061.06220027199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111559.2327192024,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 111550.58147131845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161570.00508475283,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 161556.59133709988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212970.68410660647,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 212956.98420533072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 263043.3291831114,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 263014.12086243567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312179.93587898737,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 312169.23631123937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 364703.4294710075,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 364691.51973131835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411311.63472488726,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 411282.1157495253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6875.218836510373,
            "unit": "ns/iter",
            "extra": "iterations: 101866\ncpu: 6875.005399249994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5572.6440015565,
            "unit": "ns/iter",
            "extra": "iterations: 125891\ncpu: 5572.406287979278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5716.962106122751,
            "unit": "ns/iter",
            "extra": "iterations: 122500\ncpu: 5716.550204081625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5651.279638097049,
            "unit": "ns/iter",
            "extra": "iterations: 124232\ncpu: 5651.070577628954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9843.921850639583,
            "unit": "ns/iter",
            "extra": "iterations: 71197\ncpu: 9843.293959015129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32382.67157836191,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 32381.575184685047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147324.94644394793,
            "unit": "ns/iter",
            "extra": "iterations: 5807\ncpu: 147317.34114000347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121730.27048597396,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 121725.79449907385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119170.25595984215,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 119163.65537432018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118444.15498613617,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 118441.48199445999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 377684.1139647127,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 377658.3065810597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2028929.6579520334,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2028679.5206971632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1561857.5259631337,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1561480.067001677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1562768.308724915,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1562568.6241610746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1524398.4484452216,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1524288.8707037661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 879239.3715639781,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 879161.137440758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1506779.4870549976,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1506650.6472491934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42344.31281393946,
            "unit": "ns/iter",
            "extra": "iterations: 19510\ncpu: 42341.4607893389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187662.6051025003,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 187649.69472307005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148204.50622837094,
            "unit": "ns/iter",
            "extra": "iterations: 5780\ncpu: 148169.34256055366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146355.88436647295,
            "unit": "ns/iter",
            "extra": "iterations: 5872\ncpu: 146340.1396457765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140058.6212765949,
            "unit": "ns/iter",
            "extra": "iterations: 6110\ncpu: 140049.03436988505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338850.86331778823,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 338351.8302180697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2044875.8300221374,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2044767.3289183087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1602436.115318493,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1602391.0499139398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1592296.0529913823,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1592198.8034187937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1581904.3316325645,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581821.0884353763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 914582.1496062804,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 914475.5905511853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1552631.956666725,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1552514.166666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5608228.699999244,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5607989.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3373072.9061371908,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3372814.801444049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 33593.07025837617,
            "unit": "ns/iter",
            "extra": "iterations: 24538\ncpu: 33590.337435813824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 157447.51879560348,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 157436.1678832118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115700.10310255885,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 115688.98523235341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 116422.34807900753,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 116414.177489178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 113113.1115084095,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 113100.67540723088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 297086.46019816,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 297062.9654936813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2010679.2424891763,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2010466.5236051506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1554323.3857617124,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1554152.4834437196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1567266.875426735,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1567119.9658703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521373.6178862022,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1521274.308943093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 870755.6569821964,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 870688.0974695414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1501229.134831602,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1501167.2552166933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3294.0212978587006,
            "unit": "ns/iter",
            "extra": "iterations: 212134\ncpu: 3293.87274081477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20498.445715453003,
            "unit": "ns/iter",
            "extra": "iterations: 34181\ncpu: 20497.64781603809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16767.05885874454,
            "unit": "ns/iter",
            "extra": "iterations: 41761\ncpu: 16766.01374488169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15303.426596372596,
            "unit": "ns/iter",
            "extra": "iterations: 45713\ncpu: 15302.23350031722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12045.590707750049,
            "unit": "ns/iter",
            "extra": "iterations: 61406\ncpu: 12045.052600723142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104726.3275419164,
            "unit": "ns/iter",
            "extra": "iterations: 6619\ncpu: 104722.10303671208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138595.1126509472,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138589.48723025128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33813.882139921254,
            "unit": "ns/iter",
            "extra": "iterations: 20711\ncpu: 33811.68944039395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33768.40735024204,
            "unit": "ns/iter",
            "extra": "iterations: 20734\ncpu: 33767.21809588095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33381.26075358554,
            "unit": "ns/iter",
            "extra": "iterations: 20993\ncpu: 33379.4074215216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69339.07429420589,
            "unit": "ns/iter",
            "extra": "iterations: 10095\ncpu: 69335.87914809318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62806.17672375068,
            "unit": "ns/iter",
            "extra": "iterations: 11153\ncpu: 62799.757912669644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24296.565594833373,
            "unit": "ns/iter",
            "extra": "iterations: 28798\ncpu: 24295.058684630454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120232.27377471598,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120222.80309544154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96921.57214206275,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 96917.53607103376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97501.88574613859,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97498.24439180898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95082.72868006975,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 95077.85171102616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169398.70029026901,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169388.29221093294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 584603.7158333198,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 584567.0833333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479317.0877313024,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479296.84715558804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 477734.73006133875,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 477699.1820040898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469758.8418945929,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 469721.68112075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307874.3711521687,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 307861.081794197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464958.88231384486,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 464921.9414893557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24790.40142786215,
            "unit": "ns/iter",
            "extra": "iterations: 28294\ncpu: 24788.386230296033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120895.84807726229,
            "unit": "ns/iter",
            "extra": "iterations: 5799\ncpu: 120880.39317123771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95748.5198743457,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95740.43163502199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98330.65420298776,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98325.7379814445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96766.40490371828,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 96761.15805513063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170433.24865918254,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 170416.18722574244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 593261.9050042783,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 593191.00932994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477910.6938356451,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 477879.0410958867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 478238.06913073035,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478214.3737166371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475784.96671193355,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475764.9456521767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309032.647943377,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309019.15081822407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 472555.12119157496,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 472529.0453622225 ns\nthreads: 1"
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
        "date": 1705574912214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8252.38519539504,
            "unit": "ns/iter",
            "extra": "iterations: 84879\ncpu: 8252.32625266556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58570.29769999826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58569.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106972.72043950901,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 106971.66937195658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156105.72337330884,
            "unit": "ns/iter",
            "extra": "iterations: 5502\ncpu: 156102.52635405303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 205332.747033692,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 205328.7375415283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 253866.87488987108,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 253855.94713656392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 302071.7643156641,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 302066.86452513986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 351233.24293782405,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 351218.8054882971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 401037.7831491496,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 401026.9797421736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6748.897522348717,
            "unit": "ns/iter",
            "extra": "iterations: 103808\ncpu: 6748.696632244158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5539.132507119114,
            "unit": "ns/iter",
            "extra": "iterations: 126763\ncpu: 5539.032683038425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5586.427615819876,
            "unit": "ns/iter",
            "extra": "iterations: 124827\ncpu: 5586.235349724013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5569.816347147824,
            "unit": "ns/iter",
            "extra": "iterations: 126701\ncpu: 5569.561408355106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9661.75620373192,
            "unit": "ns/iter",
            "extra": "iterations: 72134\ncpu: 9661.134832395248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29643.2579738036,
            "unit": "ns/iter",
            "extra": "iterations: 27026\ncpu: 29641.304669577392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155133.69098789766,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 155125.42893263474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118107.62632667934,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 118102.5086147486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119426.10375243776,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 119418.3562027444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111862.9453350785,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 111857.76609724062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 372779.98107256624,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 372766.24605678185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1952746.0462186143,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1952664.0756302543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1496318.5494326018,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1496214.7487844443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1499601.5252033127,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1499541.4634146355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1490393.5337619262,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1490306.2700964622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 859264.2655524607,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 859210.8635097512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1466642.5791138832,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1466529.1139240486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41345.22688609985,
            "unit": "ns/iter",
            "extra": "iterations: 19869\ncpu: 41344.738034123635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 194773.05716836784,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 194764.29209468525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148673.03626943278,
            "unit": "ns/iter",
            "extra": "iterations: 5790\ncpu: 148667.18480138193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 149812.11641220163,
            "unit": "ns/iter",
            "extra": "iterations: 5764\ncpu: 149803.40041637773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138540.9675754123,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 138535.8283594132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 341135.98937845265,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 341118.01730920473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1987335.6330473425,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1987301.9313304764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1543756.1310115778,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1543718.7396351497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1535811.7305785234,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1535799.3388429768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1525766.9442624573,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1525721.4754098356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 887427.6032349793,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 887404.9476688872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1498575.7835218683,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1498535.5411954771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5528741.829999718,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5528607.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3327195.250000159,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3327140.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28969.350789603355,
            "unit": "ns/iter",
            "extra": "iterations: 28242\ncpu: 28968.28482402092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 163813.18688714033,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 163810.65179773167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114806.93045113797,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 114805.27658431813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113573.3806049361,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 113569.72671796227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110377.29287190292,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 110369.95092975134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 281948.78481013037,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 281933.8201882523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1938276.9496854509,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1938203.3542976952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1477673.5809523272,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1477603.0158730107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1492524.0614888347,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1492430.9061488635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1482560.2476037694,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1482473.162939297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844572.2723948305,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 844565.4478976186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1458592.9748821883,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1458556.357927791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3234.751734969125,
            "unit": "ns/iter",
            "extra": "iterations: 215854\ncpu: 3234.7151315240885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20890.96988042158,
            "unit": "ns/iter",
            "extra": "iterations: 33367\ncpu: 20890.319777025245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16823.99304022406,
            "unit": "ns/iter",
            "extra": "iterations: 41668\ncpu: 16823.908034942826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16045.436132140649,
            "unit": "ns/iter",
            "extra": "iterations: 43590\ncpu: 16044.8176187199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12070.84562485935,
            "unit": "ns/iter",
            "extra": "iterations: 58021\ncpu: 12070.426224987581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 106683.8845160339,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 106681.7049080683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134856.3596068402,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 134854.4228174986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32895.872139467225,
            "unit": "ns/iter",
            "extra": "iterations: 21281\ncpu: 32895.32916686254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32981.23644811394,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 32979.65926690761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32700.308852460123,
            "unit": "ns/iter",
            "extra": "iterations: 21350\ncpu: 32699.822014051617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67732.5765739678,
            "unit": "ns/iter",
            "extra": "iterations: 10356\ncpu: 67730.24333719625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55103.033626650555,
            "unit": "ns/iter",
            "extra": "iterations: 12728\ncpu: 55103.34695160253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23984.145537490447,
            "unit": "ns/iter",
            "extra": "iterations: 29154\ncpu: 23983.669479316824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119616.72401372824,
            "unit": "ns/iter",
            "extra": "iterations: 5830\ncpu: 119612.21269296772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95590.53542122548,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 95588.86761488022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96027.12619895193,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 96024.11619621796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94149.43051075215,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 94147.37903225824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168524.44042452003,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 168520.01929570673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 570061.5061124461,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 570046.2102689568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 465658.7868087643,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 465646.6355762816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 467463.1098534638,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 467455.6591211645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 456297.1223958841,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 456281.31510415854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 303079.6644765817,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 303069.9518177832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 458295.4453125065,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 457021.8750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23671.135129636164,
            "unit": "ns/iter",
            "extra": "iterations: 29505\ncpu: 23669.38485002583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119081.56389314774,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 119074.74902160997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95407.62700790162,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 95400.77593248058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95907.50410396428,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 95908.11217510191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95262.18050639768,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 95257.13313367903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169629.48313541472,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 169623.91923990287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574887.1941031778,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 574870.5978705934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 462178.8940397476,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 462163.2450331055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 466214.33134126576,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 466216.86586985097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 459422.15768721886,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 459405.190538764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 297540.5876857683,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 297530.1486199561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 456519.0692357574,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 456517.30894839653 ns\nthreads: 1"
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
        "date": 1705772725671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8093.982888788184,
            "unit": "ns/iter",
            "extra": "iterations: 86493\ncpu: 8093.185575711329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58073.75330000468,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.069999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107915.1686807692,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 107908.5347432024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158195.76130789847,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 158190.0817438692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204193.54515443087,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 204184.22541853334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250364.80381942546,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 250356.13425925927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 301338.14235988783,
            "unit": "ns/iter",
            "extra": "iterations: 2873\ncpu: 301327.84545770986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 348556.8730984418,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 348542.2337870297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 399307.22262943664,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 399293.7700412277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6759.587221135427,
            "unit": "ns/iter",
            "extra": "iterations: 103186\ncpu: 6759.464462233251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5504.9446296211345,
            "unit": "ns/iter",
            "extra": "iterations: 126006\ncpu: 5504.66565084203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5549.775747047534,
            "unit": "ns/iter",
            "extra": "iterations: 126063\ncpu: 5549.428460372985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5494.465681646519,
            "unit": "ns/iter",
            "extra": "iterations: 127104\ncpu: 5494.3133182276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9698.752108508423,
            "unit": "ns/iter",
            "extra": "iterations: 72326\ncpu: 9698.344993501654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31012.965078638117,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 31011.603640656558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154318.75576784197,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 154314.94232155744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119002.6781127957,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 118999.44165270786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119009.40044586938,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119004.22181970216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115676.41289269405,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 115672.51461988286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 386415.721560611,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 386400.6160164257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1930552.0208331945,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1930428.1249999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1498420.0436187289,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1498368.4975767366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1491817.6006439766,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1491761.8357487922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1455189.6588049498,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1455139.7798742114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843692.6337900502,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 843641.0958904118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1448534.7671875814,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1448475.6250000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41450.416464525806,
            "unit": "ns/iter",
            "extra": "iterations: 19788\ncpu: 41448.463715383135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 195805.1817564338,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 195798.415572657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151634.8995948651,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 151624.81944689105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146599.36094069586,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 146592.85957736903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140944.20854729664,
            "unit": "ns/iter",
            "extra": "iterations: 6037\ncpu: 140935.0339572638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 335715.7996894293,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 335695.6909937876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1978791.6730361534,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1978613.8004246345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1553914.6227043215,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1553832.3873121778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1530190.8300329694,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1530080.3630363047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1515257.767479623,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1515180.162601629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 886343.5057252791,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 886309.8282442751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1500052.1256038866,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1499988.083735919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5473862.190000318,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5473767.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3316238.5821429193,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3316056.0714285686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29835.63223420886,
            "unit": "ns/iter",
            "extra": "iterations: 26506\ncpu: 29834.06775824333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 162680.6785103455,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 162675.81227436822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115146.71733584789,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 115143.57459379693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112396.32292901493,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 112390.78098248428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109914.78729174766,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 109906.71574325154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 301969.1052448779,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 301963.59847169125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1916673.7463918477,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1916602.4742267965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1497724.953450865,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1497645.7463884514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1483231.877583437,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1483127.821939584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1449713.0233644666,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1449633.3333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 834726.7209720688,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 834691.5391539149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1437135.9552469626,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437050.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3317.0697489266345,
            "unit": "ns/iter",
            "extra": "iterations: 211014\ncpu: 3316.855753646673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21494.72813144456,
            "unit": "ns/iter",
            "extra": "iterations: 32501\ncpu: 21493.28943724813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16295.148683723266,
            "unit": "ns/iter",
            "extra": "iterations: 43152\ncpu: 16294.306173526198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16697.157922360497,
            "unit": "ns/iter",
            "extra": "iterations: 41913\ncpu: 16696.697921885774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12135.847960210453,
            "unit": "ns/iter",
            "extra": "iterations: 57702\ncpu: 12135.376590066167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104897.44760184981,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 104891.835814163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132868.43555132634,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132860.20912547573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32359.54447276588,
            "unit": "ns/iter",
            "extra": "iterations: 21575\ncpu: 32358.04866743932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32352.28116170131,
            "unit": "ns/iter",
            "extra": "iterations: 21589\ncpu: 32350.06716383348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31857.02727686731,
            "unit": "ns/iter",
            "extra": "iterations: 21960\ncpu: 31855.56921675758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65983.57516463501,
            "unit": "ns/iter",
            "extra": "iterations: 10630\ncpu: 65979.75540921923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60287.586594105764,
            "unit": "ns/iter",
            "extra": "iterations: 11577\ncpu: 60284.4605683685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23581.196009822703,
            "unit": "ns/iter",
            "extra": "iterations: 29723\ncpu: 23579.679036436395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119608.96414546334,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 119604.37083831342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94780.53219465226,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 94778.86674799945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95231.32362548402,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95225.14970059753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92394.88790832387,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 92389.46259220151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167327.29328875165,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 167311.44017195914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 566959.5340909335,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 566925.8928571463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 463793.8933068102,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 463751.6898608378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 461303.6750329932,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461268.42800528306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 451386.6177231686,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 451357.69728331396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 296757.8049298816,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 296749.63875903207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 452511.0239017749,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 452498.643410857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23946.7224215086,
            "unit": "ns/iter",
            "extra": "iterations: 29271\ncpu: 23945.946499948866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116453.05071500753,
            "unit": "ns/iter",
            "extra": "iterations: 6014\ncpu: 116447.25640172989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92338.33833488458,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 92333.89988049395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95605.0949583299,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95597.7319305914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93702.89125200635,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 93697.16425896187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167139.64766222727,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 167130.1288167936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 563808.0516962584,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 563766.7205169722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 461754.3328929908,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461733.2892998647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 463914.54298942327,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 463887.89682539436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 458547.3924133413,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 458506.73642904084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 300751.8212435694,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 300735.578583765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 455228.9485006839,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455200.7170795265 ns\nthreads: 1"
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
        "date": 1705774143097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8287.282681868684,
            "unit": "ns/iter",
            "extra": "iterations: 84374\ncpu: 8286.935548865764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59151.53759999611,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59150.38 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109871.31007157722,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 109867.4463190184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160069.14498346203,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 160065.17824329296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208590.62337348107,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 208581.80722891574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258317.80059698797,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 258317.64179104473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 306634.24434230244,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 306623.9038189533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 355962.03718840313,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 355951.85941969766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 408193.47189419606,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 408170.949456778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6793.387984545181,
            "unit": "ns/iter",
            "extra": "iterations: 103267\ncpu: 6793.08878925504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5559.368393053835,
            "unit": "ns/iter",
            "extra": "iterations: 125947\ncpu: 5559.1018444266365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5579.678193562594,
            "unit": "ns/iter",
            "extra": "iterations: 125706\ncpu: 5579.469555948017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5568.10966392905,
            "unit": "ns/iter",
            "extra": "iterations: 125301\ncpu: 5567.894909058984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9793.032554410032,
            "unit": "ns/iter",
            "extra": "iterations: 71081\ncpu: 9792.63938323885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29681.027794092843,
            "unit": "ns/iter",
            "extra": "iterations: 27236\ncpu: 29678.822147158153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148026.54869400227,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 148018.40512022155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114942.65353589544,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 114937.29497176662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115945.08010862039,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 115941.28988458969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110487.85798045472,
            "unit": "ns/iter",
            "extra": "iterations: 7675\ncpu: 110484.84690553744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 369730.3432485081,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 369711.311154599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1998165.4227467906,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1998076.8240343325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1549160.0645695345,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1549105.7947019883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1534831.5198020497,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534761.881188119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1494563.0609951217,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494493.4189406072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 850420.2987132752,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 850384.1911764714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1478501.6369425463,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1478471.3375796184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41617.89664565084,
            "unit": "ns/iter",
            "extra": "iterations: 19825\ncpu: 41615.9798234552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179408.60187501073,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 179404.18750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143244.05929512717,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 143238.4666778016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143604.10376569815,
            "unit": "ns/iter",
            "extra": "iterations: 5975\ncpu: 143601.18828451907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139013.1642033319,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 139004.2065941202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 322423.46914499416,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 322407.50929367996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2040732.6637554807,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2040575.764192142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1597300.6479590542,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1597209.0136054463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1553388.324459101,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1553294.6755407632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1559384.2613065017,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1559314.070351764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 886884.0057251846,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 886851.3358778652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1538950.5485996956,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1538875.2883031263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5469271.270000036,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5468750 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3245518.446366631,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3245385.467128024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28054.151816430276,
            "unit": "ns/iter",
            "extra": "iterations: 29068\ncpu: 28053.065226365772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154728.0199058999,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 154717.86102063066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111399.7059053045,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 111392.6378772113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107760.58334389595,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 107755.58372417292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106364.3165422976,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 106360.34825870664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287289.568834596,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 287277.22020468855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2001221.2452025886,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 2001097.4413646033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1543619.2688525808,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1543556.8852459053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1515584.3289903344,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1515513.6807817598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1499679.267101032,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1499606.840390878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 849218.0847766608,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 849167.9124885998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1483646.2340765216,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1483566.878980892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3267.6469949527896,
            "unit": "ns/iter",
            "extra": "iterations: 214589\ncpu: 3267.612971773976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20990.814468237273,
            "unit": "ns/iter",
            "extra": "iterations: 33342\ncpu: 20990.417491452277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16274.122131738106,
            "unit": "ns/iter",
            "extra": "iterations: 43101\ncpu: 16273.190877241797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15128.533295822932,
            "unit": "ns/iter",
            "extra": "iterations: 46207\ncpu: 15127.692773822064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11983.803561967776,
            "unit": "ns/iter",
            "extra": "iterations: 58507\ncpu: 11983.203719213046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108003.15576711595,
            "unit": "ns/iter",
            "extra": "iterations: 6407\ncpu: 107999.78148899571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135869.62119155398,
            "unit": "ns/iter",
            "extra": "iterations: 5153\ncpu: 135860.62487871153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32996.873613665324,
            "unit": "ns/iter",
            "extra": "iterations: 21189\ncpu: 32995.65812449863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33231.74182076762,
            "unit": "ns/iter",
            "extra": "iterations: 21090\ncpu: 33230.12802275981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32945.59933355397,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 32944.31407518638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66376.81826777144,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66373.45877458352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61511.15007025617,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61508.157709870386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24077.721970319886,
            "unit": "ns/iter",
            "extra": "iterations: 29112\ncpu: 24077.174361088135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119403.87684139927,
            "unit": "ns/iter",
            "extra": "iterations: 5838\ncpu: 119398.98937992677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95736.12633014497,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 95729.84993178719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96342.35387782742,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 96334.13864104448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94234.75614011817,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 94233.84780566375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170458.66151242683,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 170452.86301039124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 581873.9551495108,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 581850.4152823951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 463822.10159358394,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 463809.4953519238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 469824.37821385416,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 469812.5845737497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 467652.42666666984,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 467632.06666667166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311303.7085162591,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 311269.2273924518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462090.13052074175,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 462085.29993407935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24813.306944395445,
            "unit": "ns/iter",
            "extra": "iterations: 28181\ncpu: 24812.827791774696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118364.73139376192,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 118364.68200270565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93779.95748961114,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 93778.1547539227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97540.71261486183,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 97535.14341409123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95636.62409506147,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95633.35609889278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169013.0744860849,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 169006.04594921158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 583881.0340814339,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 583855.1953449656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 471123.53887763905,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 471103.98918188096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471061.6984553583,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 471048.3546004036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 466175.2267904089,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 466156.16710875987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302542.61871750455,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 302531.0225303305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 462662.812706841,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462657.9086697546 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}