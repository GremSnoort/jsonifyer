window.BENCHMARK_DATA = {
  "lastUpdate": 1705959265521,
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
        "date": 1705777750527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8126.52741599532,
            "unit": "ns/iter",
            "extra": "iterations: 85917\ncpu: 8126.398733661557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58442.24109999914,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58440.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109135.83536585647,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 109127.19766260161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159753.5358807095,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 159745.06989748374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209458.53812740257,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 209441.8194980694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259157.31876681373,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 259145.5851541455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308269.1016346759,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 308257.42714996444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358727.0824742593,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 358712.2061855671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 409419.60724363255,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 409413.02916274744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6819.067203594891,
            "unit": "ns/iter",
            "extra": "iterations: 102807\ncpu: 6818.978279689124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5490.270560426385,
            "unit": "ns/iter",
            "extra": "iterations: 126493\ncpu: 5489.9939127066355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5563.613515911601,
            "unit": "ns/iter",
            "extra": "iterations: 125097\ncpu: 5563.278895577041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5598.720388864979,
            "unit": "ns/iter",
            "extra": "iterations: 124362\ncpu: 5598.339524935266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9906.94257487307,
            "unit": "ns/iter",
            "extra": "iterations: 70753\ncpu: 9906.661201645147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30913.864460174565,
            "unit": "ns/iter",
            "extra": "iterations: 26981\ncpu: 30912.838664245206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152686.3949743243,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 152682.65793664832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.3230063994,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 118436.96860238924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117404.85686708085,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 117402.75785990086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114012.71603449067,
            "unit": "ns/iter",
            "extra": "iterations: 5800\ncpu: 114012.4310344824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364793.04007782496,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 364775.44747081696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1995546.6017316536,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1995427.9220779203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1510079.765472168,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1510057.654723126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1551201.9036544603,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1551126.578073094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1510287.0681817292,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1510196.1038961015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 866799.2713615074,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 866746.3849765251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1487449.9935794694,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1487426.8057784867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42905.32430747015,
            "unit": "ns/iter",
            "extra": "iterations: 19241\ncpu: 42903.66405072509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197281.45036595705,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 197276.1207685272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 147682.2332131254,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 147676.28370255846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146736.9948787971,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 146736.6678047112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142135.56172737954,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 142125.6799076974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 330327.77735561575,
            "unit": "ns/iter",
            "extra": "iterations: 2632\ncpu: 330318.04711246217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2052327.845474694,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2052205.9602649112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1562975.7048904812,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1562941.4839797637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1579537.2971136207,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1579383.361629885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1552664.2066665394,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1552601.833333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 902073.7980582118,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 902010.8737864036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1533225.036243862,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1533189.9505766053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5556740.309999669,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5556322.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3217783.4344824515,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3217635.862068969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29338.692014390428,
            "unit": "ns/iter",
            "extra": "iterations: 27800\ncpu: 29337.438848920836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 158115.0149881204,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 158112.7216231041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114330.6826203179,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 114318.26203208558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112279.52692408554,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 112274.33674809567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110955.38303408894,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 110952.36794171241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287734.1656177584,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 287731.30175554845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1999848.3139786874,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1999682.1505376326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1518375.798045611,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1518302.931596088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1523377.4435351293,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523263.3387888717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1502142.2334944177,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1502006.6022544329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 852977.3703024071,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852912.8322639792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482133.9538949665,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482041.3354530982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3262.917527742975,
            "unit": "ns/iter",
            "extra": "iterations: 214557\ncpu: 3262.686372385872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20857.332718237045,
            "unit": "ns/iter",
            "extra": "iterations: 33599\ncpu: 20855.742730438506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14842.904604636784,
            "unit": "ns/iter",
            "extra": "iterations: 47235\ncpu: 14841.951942415597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16010.359322496617,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 16009.579647534698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12001.839577410292,
            "unit": "ns/iter",
            "extra": "iterations: 58402\ncpu: 12001.347556590534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100977.00115489014,
            "unit": "ns/iter",
            "extra": "iterations: 6927\ncpu: 100976.69987007412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137543.78715886376,
            "unit": "ns/iter",
            "extra": "iterations: 5093\ncpu: 137530.9051639507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32732.027889561214,
            "unit": "ns/iter",
            "extra": "iterations: 21370\ncpu: 32729.438465137984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33108.845462287965,
            "unit": "ns/iter",
            "extra": "iterations: 21134\ncpu: 33107.05971420483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32428.83270014626,
            "unit": "ns/iter",
            "extra": "iterations: 21584\ncpu: 32428.75277983703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66091.9727126819,
            "unit": "ns/iter",
            "extra": "iterations: 10591\ncpu: 66085.49712019629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61747.372619887174,
            "unit": "ns/iter",
            "extra": "iterations: 11344\ncpu: 61740.59414668552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23586.530135094836,
            "unit": "ns/iter",
            "extra": "iterations: 29683\ncpu: 23584.62756459931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119730.32985099097,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 119720.73985271326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94141.95105552184,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 94141.77759849415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94693.68288043751,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 94687.86684782547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93111.1655346885,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93102.88986549473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168224.80206582212,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 168210.6653855387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 576754.6765676467,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 576753.8778877829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 466412.27840535616,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 466386.3787375377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 477537.68618107185,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 477521.3070115751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461820.3774214977,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 461803.0060120248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305525.17995644704,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 305518.56209150207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460329.8115845529,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 460312.05059919466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24168.930450999545,
            "unit": "ns/iter",
            "extra": "iterations: 28958\ncpu: 24168.87561295665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118856.16867265872,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 118854.31429055659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93210.25360000023,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93209.93333333264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95701.83187294213,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 95696.27601314461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94982.89057710124,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 94975.26322804239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167535.72340935768,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 167532.05282112915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 580674.2814070429,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 580666.2479061952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 472384.0226817867,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 472370.24683122215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465656.6254158031,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 465624.81703259464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 465989.55688627576,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 465972.9873586171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301061.76116840926,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 301061.12542955554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 460253.1763540449,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 460240.6869220546 ns\nthreads: 1"
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
        "date": 1705952875808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8178.778514216051,
            "unit": "ns/iter",
            "extra": "iterations: 85396\ncpu: 8178.54934657361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57807.249400002554,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57805.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106629.15363614552,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 106623.60387192848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155075.5959323165,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 155073.77609791214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204264.96302401542,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 204252.6142251531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252515.32833186197,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 252514.88673139154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 299607.6887737277,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 299605.7685664938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 348722.39791415556,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 348713.838748496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 394892.6254562354,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 394888.95985401457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6719.190449707843,
            "unit": "ns/iter",
            "extra": "iterations: 104290\ncpu: 6719.09291398983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5536.850437719964,
            "unit": "ns/iter",
            "extra": "iterations: 126108\ncpu: 5536.567862467094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5538.62604613015,
            "unit": "ns/iter",
            "extra": "iterations: 124387\ncpu: 5538.341627340477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5566.006357364897,
            "unit": "ns/iter",
            "extra": "iterations: 125681\ncpu: 5565.73069915102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9699.309223503245,
            "unit": "ns/iter",
            "extra": "iterations: 71990\ncpu: 9699.408251145976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31233.120457503064,
            "unit": "ns/iter",
            "extra": "iterations: 26142\ncpu: 31232.80544717312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152749.4884506062,
            "unit": "ns/iter",
            "extra": "iterations: 5628\ncpu: 152747.63681592015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119499.71900362779,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 119498.44668345925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118714.67058986689,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 118711.76959291022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113417.30696498521,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 113413.79677720068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 382986.35121948353,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 382975.4065040652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1906909.1108831137,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1906792.8131416873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1474395.931528693,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1474343.4713375804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1486232.0865383993,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1486161.6987179439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1454950.1208791998,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1454884.3014128713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 836274.8057813168,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 836224.0289069549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1436026.1581395413,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1435966.6666666693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42250.492418029804,
            "unit": "ns/iter",
            "extra": "iterations: 19520\ncpu: 42248.20696721305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185329.11457887318,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 185318.6618212907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145717.11345467734,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 145712.58717468946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147553.60329861133,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 147546.26736111127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138781.97964458368,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 138775.18578352183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 339297.93111545296,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 339288.6888454013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1959735.4905262794,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1959699.3684210565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1509535.0798046135,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1509490.5537459254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1523054.4664485555,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523007.5286415715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1500501.2028986176,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1500432.689210949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 887523.3683205267,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 887477.3854961795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1477301.6544585628,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1477168.9490445848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5495720.730000358,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5495785.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3071057.970297117,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3070852.475247529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30903.10212556991,
            "unit": "ns/iter",
            "extra": "iterations: 26487\ncpu: 30903.424321365244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 159369.98155051004,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 159365.09504286162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115611.04582828385,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 115607.70993395303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113469.62511566878,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 113463.80700594874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110045.0056965221,
            "unit": "ns/iter",
            "extra": "iterations: 7724\ncpu: 110040.4194717759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 302326.7160278682,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 302319.0940766556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1898374.9329266646,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1898301.2195121918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1466738.8832808412,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1466682.1766561498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1461840.7937501133,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1461777.3437500037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1441419.5486862776,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1441358.7326120648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 816203.3773087211,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 816183.5532102071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1414556.3805175538,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1414514.6118721468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3223.141512977753,
            "unit": "ns/iter",
            "extra": "iterations: 218298\ncpu: 3223.132140468555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20925.464433267152,
            "unit": "ns/iter",
            "extra": "iterations: 33402\ncpu: 20924.86078677928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16787.69947191329,
            "unit": "ns/iter",
            "extra": "iterations: 41660\ncpu: 16787.6308209313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15401.545970062904,
            "unit": "ns/iter",
            "extra": "iterations: 45497\ncpu: 15401.246236015551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12086.098626070107,
            "unit": "ns/iter",
            "extra": "iterations: 57936\ncpu: 12085.791217895521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109625.65734044308,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 109621.61270040882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125989.57453303422,
            "unit": "ns/iter",
            "extra": "iterations: 5568\ncpu: 125984.35704022988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32154.86104218291,
            "unit": "ns/iter",
            "extra": "iterations: 21762\ncpu: 32154.144839628814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31916.582700438954,
            "unit": "ns/iter",
            "extra": "iterations: 21989\ncpu: 31915.65782891444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32221.69930488362,
            "unit": "ns/iter",
            "extra": "iterations: 21723\ncpu: 32221.01919624365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61930.21346526976,
            "unit": "ns/iter",
            "extra": "iterations: 11318\ncpu: 61927.54903693234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60076.343089428396,
            "unit": "ns/iter",
            "extra": "iterations: 11685\ncpu: 60075.027813435685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23964.86521664964,
            "unit": "ns/iter",
            "extra": "iterations: 29195\ncpu: 23964.28498030482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120287.21448181276,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 120282.94440631419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95017.20997553515,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 95014.59635770667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95526.53095043001,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 95523.52780060234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94015.67024561178,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 94013.75654274592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167961.95348837518,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 167957.18053224642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 570146.265157626,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 570129.4260307201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 453248.2782835338,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 453226.8530559206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 464076.13072334835,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464057.3324485814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 453224.3505821117,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 453210.8667529036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299089.3142123066,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 299077.5684931513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 451376.418439701,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 451368.3430045146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24118.203130409674,
            "unit": "ns/iter",
            "extra": "iterations: 28878\ncpu: 24117.22418450072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121576.395281257,
            "unit": "ns/iter",
            "extra": "iterations: 5849\ncpu: 121575.58557018418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94507.16403403146,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94503.68570271363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95877.70253598334,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 95867.81357093874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95014.24622501108,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95013.44034825286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168354.6638655609,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168352.412965186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 568616.1269324599,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 568597.7217249776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 457937.39019606676,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 457927.90849673696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 458192.3433616711,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 458163.0477436289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 459476.0689428992,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459455.2856204853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 296559.1701227084,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 296547.2704189572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 454368.81088081334,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 454345.2720207317 ns\nthreads: 1"
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
        "date": 1705954286269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7940.557676980686,
            "unit": "ns/iter",
            "extra": "iterations: 87834\ncpu: 7940.139353780997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57296.961199995174,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57291.58000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106304.63997024069,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 106300.34713612693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154873.03314719148,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 154861.2682399568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201221.0275186542,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 201207.97574626873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250436.91372323848,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 250422.7562246672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 298533.9958663411,
            "unit": "ns/iter",
            "extra": "iterations: 2903\ncpu: 298516.3279366175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345500.7680063696,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 345484.00318344607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 391955.37516929634,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 391934.76297968446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6837.758867332472,
            "unit": "ns/iter",
            "extra": "iterations: 102060\ncpu: 6837.516166960616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5675.510471970433,
            "unit": "ns/iter",
            "extra": "iterations: 126385\ncpu: 5675.177434030938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5617.626073361816,
            "unit": "ns/iter",
            "extra": "iterations: 124725\ncpu: 5617.204249348567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5583.898464299494,
            "unit": "ns/iter",
            "extra": "iterations: 125936\ncpu: 5583.551962901796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9731.974371796508,
            "unit": "ns/iter",
            "extra": "iterations: 71991\ncpu: 9731.669236432335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30410.811998057532,
            "unit": "ns/iter",
            "extra": "iterations: 26771\ncpu: 30409.88009413171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153964.75808771272,
            "unit": "ns/iter",
            "extra": "iterations: 5564\ncpu: 153961.35873472318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116590.03897169633,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 116587.50170928467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 120386.65938555582,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 120382.4126268321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110691.51066320599,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 110686.39791937561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 382340.4526315704,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 382318.2591093123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1944470.0922431976,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1944323.2704402474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1514059.1712887539,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1513965.089722673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1470597.3243244675,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1470494.4356120834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1471469.6244056984,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471344.8494453258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 831155.11971191,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 831084.7884788482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1445613.3734375597,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1445494.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42278.0616301144,
            "unit": "ns/iter",
            "extra": "iterations: 19471\ncpu: 42275.71773406608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187052.53656426503,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 187043.42276070983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149140.2059951094,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 149129.85360752876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148337.79772765737,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 148330.9864004136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139598.39014039517,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 139588.93241919673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 330358.365055206,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 330342.93871336203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1992019.0705128778,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1991872.6495726467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1555253.9515050873,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1555122.4080267611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1524208.3557376512,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1524166.2295081925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541926.2985073717,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1541830.0165837386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 873538.8215962328,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 873475.5868544574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1509292.7747164539,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509203.4035656424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5396832.259999655,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5396780.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3137049.614093979,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3136857.046979868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28877.21718722572,
            "unit": "ns/iter",
            "extra": "iterations: 28335\ncpu: 28875.99435327353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 162060.20225774962,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 162055.82314205068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114595.0279867963,
            "unit": "ns/iter",
            "extra": "iterations: 7575\ncpu: 114589.91419141903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112745.84637681344,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112737.33860342558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108805.43452835012,
            "unit": "ns/iter",
            "extra": "iterations: 7866\ncpu: 108796.63107043054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 295867.35003408045,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 295848.8070892975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1929589.501035086,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929495.0310558956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1508573.116693682,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1508480.0648298124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1455338.2410017028,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1455238.967136147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1451001.8578123506,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1450937.8124999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 818571.7671958155,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 818535.1851851891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1438654.473035554,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1438545.1463790422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3299.041654701188,
            "unit": "ns/iter",
            "extra": "iterations: 212413\ncpu: 3298.8329339541147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21218.863867840475,
            "unit": "ns/iter",
            "extra": "iterations: 32990\ncpu: 21217.820551682278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 17117.558421593767,
            "unit": "ns/iter",
            "extra": "iterations: 40978\ncpu: 17116.325833374023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16616.82273040267,
            "unit": "ns/iter",
            "extra": "iterations: 42111\ncpu: 16615.63961910189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12110.389396424158,
            "unit": "ns/iter",
            "extra": "iterations: 57905\ncpu: 12109.555306104736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104306.56939078144,
            "unit": "ns/iter",
            "extra": "iterations: 6730\ncpu: 104305.36404160454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136940.00176057883,
            "unit": "ns/iter",
            "extra": "iterations: 5112\ncpu: 136934.33098591556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32782.333911087764,
            "unit": "ns/iter",
            "extra": "iterations: 21347\ncpu: 32780.507799690735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32320.395484140972,
            "unit": "ns/iter",
            "extra": "iterations: 21657\ncpu: 32318.446691600806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32449.762707165857,
            "unit": "ns/iter",
            "extra": "iterations: 21661\ncpu: 32449.388301555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62064.54044214977,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 62061.635443487554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61096.60507498338,
            "unit": "ns/iter",
            "extra": "iterations: 11468\ncpu: 61091.227764213254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23542.3001581399,
            "unit": "ns/iter",
            "extra": "iterations: 29721\ncpu: 23539.79341206545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119766.41324005967,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 119756.03139396007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94350.83606336193,
            "unit": "ns/iter",
            "extra": "iterations: 7387\ncpu: 94349.89847028567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94621.96582003536,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94617.76546879283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93215.00385126099,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 93210.26560425002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167181.90050106484,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 167173.10904318982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 569438.0423797701,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 569394.7840260788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467724.7315930251,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467694.9129852738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 460491.0138067053,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460471.72912557656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 451584.6985151333,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 451538.2827630709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299903.20785317704,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 299895.98804950353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 453070.6712062286,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453025.0972762591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24241.57510237881,
            "unit": "ns/iter",
            "extra": "iterations: 28814\ncpu: 24240.202679252892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118542.58106509024,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118536.90617075095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93493.37607974812,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 93489.46179402016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95205.75027189596,
            "unit": "ns/iter",
            "extra": "iterations: 7356\ncpu: 95199.93202827577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94044.40778001903,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 94037.12944332667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 166143.05509576993,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 166131.96973279677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574223.0360951561,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574196.1443806463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 464978.5216234109,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 464958.08383233263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 460029.68466095504,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460004.47662935813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460620.0889327508,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 460592.02898551023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301441.8028411155,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 301428.71287128533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 457797.98297314777,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 457779.96070727415 ns\nthreads: 1"
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
        "date": 1705956388014,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8111.562937102969,
            "unit": "ns/iter",
            "extra": "iterations: 85363\ncpu: 8111.478040837365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58193.92380000181,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58192.179999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107111.57246195532,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 107107.39585931652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156355.2256717533,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 156349.18300653598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204163.9632422354,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204157.46936852016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254320.17083212675,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 254309.20317553665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 302215.47403277515,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 302203.0324154757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 349231.31498593313,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 349216.9947770188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 396948.7704244672,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 396932.770424464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6778.9752032555625,
            "unit": "ns/iter",
            "extra": "iterations: 103441\ncpu: 6778.676733596923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5504.309866360592,
            "unit": "ns/iter",
            "extra": "iterations: 127058\ncpu: 5504.160304742725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5600.195580811479,
            "unit": "ns/iter",
            "extra": "iterations: 129164\ncpu: 5600.03948468613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5564.252376007378,
            "unit": "ns/iter",
            "extra": "iterations: 126157\ncpu: 5564.050349960762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9772.172931701165,
            "unit": "ns/iter",
            "extra": "iterations: 71641\ncpu: 9771.710333468267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33644.01037677772,
            "unit": "ns/iter",
            "extra": "iterations: 24285\ncpu: 33642.174181593604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154334.01527130665,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 154327.61408551913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 128644.54602792654,
            "unit": "ns/iter",
            "extra": "iterations: 6659\ncpu: 128641.3275266556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 125951.86927144133,
            "unit": "ns/iter",
            "extra": "iterations: 6808\ncpu: 125947.03290246792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 121885.63614388781,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 121878.82838049172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 380751.46645112004,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 380723.2821341957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2010404.636363747,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2010342.8571428545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1553687.207357876,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1553626.9230769242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1545721.5664452387,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1545655.1495016627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1508883.0784313784,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1508814.3790849664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 863263.3119180471,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 863231.0986964597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1497015.1407766896,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1496944.0129449875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 44113.113250946655,
            "unit": "ns/iter",
            "extra": "iterations: 18693\ncpu: 44112.27197346609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 212451.51066349755,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 212444.7867298585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 158518.00403373403,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 158514.35643564328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152037.58199753513,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 152033.59168574974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145328.19014560746,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145322.5194717237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 334362.5558562258,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 334350.9470429074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2049272.1037526098,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2049199.3377483464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586689.8617747263,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586635.836177479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1572917.7525596388,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1572841.6382252541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1561469.7008401866,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1561436.6386554672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901058.8294573342,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901012.2093023283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1533184.7326732979,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1533138.6138613878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5553861.660000621,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553547.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3315891.7634408777,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3315808.6021505506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 33631.32179534273,
            "unit": "ns/iter",
            "extra": "iterations: 24441\ncpu: 33629.01681600589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 168467.55105221277,
            "unit": "ns/iter",
            "extra": "iterations: 5132\ncpu: 168461.86671862836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 122730.87974682741,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 122725.04315304913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 121932.4462365502,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 121928.16921335606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 119507.8333333346,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 119502.73839310533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 300271.2327374724,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 300261.9348054675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2015185.5485960417,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2015097.4082073388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1545199.148086566,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1545170.049916806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1530608.1245901878,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1530536.3934426173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1496090.8822580853,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1496002.5806451705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 843109.7459313096,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 843053.9783001762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1487929.0865384322,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1487857.3717948755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3260.3708330413174,
            "unit": "ns/iter",
            "extra": "iterations: 213735\ncpu: 3260.2311273305527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21328.089164784516,
            "unit": "ns/iter",
            "extra": "iterations: 32782\ncpu: 21327.893356110053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16193.33236131414,
            "unit": "ns/iter",
            "extra": "iterations: 43209\ncpu: 16193.131060658643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15472.877681030817,
            "unit": "ns/iter",
            "extra": "iterations: 45365\ncpu: 15472.406039898546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12103.517885504189,
            "unit": "ns/iter",
            "extra": "iterations: 57924\ncpu: 12102.983219390995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108721.19868361043,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 108717.14373182286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 129538.34368646244,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129532.90811610376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32531.60921620227,
            "unit": "ns/iter",
            "extra": "iterations: 21549\ncpu: 32530.604668429878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32661.98774293197,
            "unit": "ns/iter",
            "extra": "iterations: 21457\ncpu: 32660.52570256794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32481.76068336194,
            "unit": "ns/iter",
            "extra": "iterations: 21482\ncpu: 32480.53253886963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66239.04546316116,
            "unit": "ns/iter",
            "extra": "iterations: 10558\ncpu: 66234.98768706257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61253.46254157345,
            "unit": "ns/iter",
            "extra": "iterations: 11426\ncpu: 61252.01295291452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23625.73502249623,
            "unit": "ns/iter",
            "extra": "iterations: 29561\ncpu: 23625.7433780995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120450.04106528306,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 120444.2783505137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94964.92278515188,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94961.14874017914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95747.5048530395,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 95742.89815447743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94040.03581007717,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 94036.19903433313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170997.68772869863,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170995.51110026843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 584967.8399339843,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 584961.386138616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470057.2024291786,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470049.93252362416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 472467.3286099866,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472445.074224019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461754.94598160643,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 461730.96179183654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305970.90384616534,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 305956.4685314658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 461033.50891090865,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 461009.9009901003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24519.835166761983,
            "unit": "ns/iter",
            "extra": "iterations: 28544\ncpu: 24519.089826233274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119298.20105459717,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 119291.76730736555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93809.87521755858,
            "unit": "ns/iter",
            "extra": "iterations: 7469\ncpu: 93806.09184629822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96605.90050984942,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96598.53934132632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95238.86264111014,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 95237.3997008023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171026.79642769272,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 171024.2231465627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 583927.1272878336,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 583891.5141430987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 467674.1771977898,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 467669.4368131872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 472198.6574510937,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472194.1335131463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 469570.88479570334,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469552.17682518973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309696.0123729377,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 309683.4290764488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465623.83055371256,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 465600.4002668453 ns\nthreads: 1"
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
        "date": 1705957842159,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8177.160875956997,
            "unit": "ns/iter",
            "extra": "iterations: 85712\ncpu: 8176.577375396679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58544.02329999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58541.19999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108023.42713568476,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 108021.98492462309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156949.73349229153,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 156945.08437270724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206073.26798475764,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 206072.24868985242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 255819.75949369,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 255805.32823079196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 303752.04693520983,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 303742.17162872176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 353272.25843151775,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 353247.4603819584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 400814.4148592562,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 400778.03414859285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6846.572987001899,
            "unit": "ns/iter",
            "extra": "iterations: 102484\ncpu: 6846.151594395217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5640.510073634945,
            "unit": "ns/iter",
            "extra": "iterations: 124533\ncpu: 5640.178105401787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5614.283645472836,
            "unit": "ns/iter",
            "extra": "iterations: 125745\ncpu: 5614.037933913868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5559.876994797136,
            "unit": "ns/iter",
            "extra": "iterations: 125702\ncpu: 5559.602870280507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9901.31077775766,
            "unit": "ns/iter",
            "extra": "iterations: 70729\ncpu: 9900.788926748573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29244.12819314996,
            "unit": "ns/iter",
            "extra": "iterations: 27833\ncpu: 29242.374160169573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150459.5127304588,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 150450.18437225657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113425.24946921396,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113418.15286624202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114331.01952393737,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 114324.15084247115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111894.3537934578,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 111886.57797681766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 369898.9293008932,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 369860.32992930105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1983944.5278970813,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1983846.7811158828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550407.0166946596,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1550301.5025041706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1583312.6933334067,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1583251.6666666644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1517101.493420968,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1516955.2631578944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 874893.9734848427,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 874856.0606060602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503190.5996758468,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1503107.4554294948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41285.3105863486,
            "unit": "ns/iter",
            "extra": "iterations: 19988\ncpu: 41283.13488092858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185061.4068596054,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 185045.65916398694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146265.95785109984,
            "unit": "ns/iter",
            "extra": "iterations: 5789\ncpu: 146255.43271722217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141856.911444578,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 141841.70514511885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136156.76740481306,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 136149.9442408793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 320687.23334574874,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 320682.8433196872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2039221.964989081,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2039166.5207877439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1598974.9036143997,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1598953.1841652298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1593167.813675247,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1593124.9572649484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1564945.4528619975,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1564916.3299663276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 927842.2395625787,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 927819.483101388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1540161.4354305936,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540131.6225165548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5674507.2399996845,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5674311.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3364675.382671593,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364452.346570384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28342.35141313295,
            "unit": "ns/iter",
            "extra": "iterations: 28872\ncpu: 28340.322804100953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155311.01872525172,
            "unit": "ns/iter",
            "extra": "iterations: 5554\ncpu: 155307.97623334534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110879.30700388126,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 110877.00389105067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109050.732388969,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 109050.3318019402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106261.9654395178,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 106260.25544703272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287967.2350215007,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 287965.1770936766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1979052.8704881498,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1978988.9596602975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1549201.6016666337,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1549184.8333333398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1538789.7652892417,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538766.7768595135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1507481.627228659,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1507432.9011345168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 869632.3765144614,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 869495.2469711091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1497489.5217390428,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1497427.8582930749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3284.2259301004183,
            "unit": "ns/iter",
            "extra": "iterations: 214708\ncpu: 3284.1007321571806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21277.334011170104,
            "unit": "ns/iter",
            "extra": "iterations: 32948\ncpu: 21277.20650722354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16737.43755343437,
            "unit": "ns/iter",
            "extra": "iterations: 43277\ncpu: 16736.698477251215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15248.066488261686,
            "unit": "ns/iter",
            "extra": "iterations: 45963\ncpu: 15247.325022300574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12044.73641327696,
            "unit": "ns/iter",
            "extra": "iterations: 58053\ncpu: 12043.956384682913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104430.1301810532,
            "unit": "ns/iter",
            "extra": "iterations: 6683\ncpu: 104422.4001197061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136386.04716429033,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 136377.25589553698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33272.72269426334,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 33270.67451464358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32792.83071290807,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 32791.29394095843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32854.22354547267,
            "unit": "ns/iter",
            "extra": "iterations: 21244\ncpu: 32852.27358312906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69184.26520753969,
            "unit": "ns/iter",
            "extra": "iterations: 10143\ncpu: 69181.14956127349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62174.89988471873,
            "unit": "ns/iter",
            "extra": "iterations: 11277\ncpu: 62172.74984481681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24273.35131948647,
            "unit": "ns/iter",
            "extra": "iterations: 28837\ncpu: 24273.038110760295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119832.92476812913,
            "unit": "ns/iter",
            "extra": "iterations: 5822\ncpu: 119832.06801786408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95480.86673948941,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 95476.05133806683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96010.14174092059,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 96006.07265250225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93326.97430434739,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 93319.4647849826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172546.7590629001,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 172539.16152897602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 580812.5091361854,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 580784.0531561457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 474220.4277966775,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474191.3898305071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482888.23379309557,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482851.5172413839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 462350.8250824821,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462324.48844884394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305978.4416376606,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 305963.1968641149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464794.85487072304,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464765.54009277566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24245.736980699883,
            "unit": "ns/iter",
            "extra": "iterations: 28861\ncpu: 24245.840407469885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118361.71360705316,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118360.79063454435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92877.68734127114,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 92876.79454618337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95464.69967222678,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 95462.10051898305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94561.28363440416,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 94559.94877325337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169375.70166948022,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169374.20759738897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 577793.806105554,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 577789.7689769029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477081.57298773655,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477077.42155525816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 473179.5503038564,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 473176.43484131806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 466029.8352234614,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466020.880587057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308024.22002635506,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 308021.38779095263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 468170.637873753,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 468163.18936877174 ns\nthreads: 1"
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
        "date": 1705959264980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8150.982126815421,
            "unit": "ns/iter",
            "extra": "iterations: 85715\ncpu: 8150.769410254915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59382.6083999943,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59382.889999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109551.86364795952,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 109551.18622448976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160088.07690879094,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 160085.24986067245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209022.31332850532,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209022.75247047475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259200.38015542476,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 259197.36999402283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308970.43147023837,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 308968.24492702057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 359551.1451613028,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 359544.74772539287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411030.9709329544,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 411018.6591654948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6705.65580777447,
            "unit": "ns/iter",
            "extra": "iterations: 103878\ncpu: 6705.56807023623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5535.3747452710195,
            "unit": "ns/iter",
            "extra": "iterations: 125133\ncpu: 5535.409524266178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5591.2281547581115,
            "unit": "ns/iter",
            "extra": "iterations: 125073\ncpu: 5591.225924060342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5507.4515642425995,
            "unit": "ns/iter",
            "extra": "iterations: 127282\ncpu: 5507.4912399239465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9694.349549798071,
            "unit": "ns/iter",
            "extra": "iterations: 72190\ncpu: 9693.934062889582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31337.18354360852,
            "unit": "ns/iter",
            "extra": "iterations: 27187\ncpu: 31337.10964799354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150429.67768013338,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 150428.36555360287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115502.88057671257,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 115502.43471164288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113737.70947115359,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 113736.2062075397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110370.180696283,
            "unit": "ns/iter",
            "extra": "iterations: 7698\ncpu: 110369.51156144464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 367950.7788611668,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 367943.99375975004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1908901.324380267,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1908894.0082644655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1509023.8800649378,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509008.7520259342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1510872.6009773682,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1510852.6058631884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1485982.7110754896,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1485964.8475120342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 861202.9185393455,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 861194.3820224738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1460843.8862559614,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1460822.2748815112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41088.204071427834,
            "unit": "ns/iter",
            "extra": "iterations: 19993\ncpu: 41088.0608212875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 200440.55182007572,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 200437.67679109704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149536.46088316932,
            "unit": "ns/iter",
            "extra": "iterations: 5752\ncpu: 149534.78789986094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141689.77065574823,
            "unit": "ns/iter",
            "extra": "iterations: 6100\ncpu: 141686.5573770489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142645.18815504812,
            "unit": "ns/iter",
            "extra": "iterations: 6011\ncpu: 142644.66810846815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 321539.7433135262,
            "unit": "ns/iter",
            "extra": "iterations: 2692\ncpu: 321520.57949479955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1959894.732631495,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1959810.7368421094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1539901.3857615308,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1539824.1721854357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1540000.7640265033,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1539941.7491749134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1530521.5420098116,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1530444.151565071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 894284.8048076913,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 894237.980769226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1490172.9436392477,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1490163.9291465376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5553726.830000869,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553572.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3292988.5159011665,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3292806.0070671327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28938.027204833572,
            "unit": "ns/iter",
            "extra": "iterations: 28120\ncpu: 28937.31863442395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155016.91580475424,
            "unit": "ns/iter",
            "extra": "iterations: 5511\ncpu: 155009.01832698213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111078.83902183949,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 111080.9336994904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108669.72256598363,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 108667.5969188028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106230.40599624788,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 106231.69269206737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280883.26440130686,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 280885.7605178009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1925668.167701855,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1925641.614906841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1500295.072580574,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1500294.5161290355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1504500.1822580807,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1504471.2903225727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1495966.4999999856,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1495957.4433656966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 854016.16574588,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 854022.9281767899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1467383.328100458,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1467413.5007849254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3285.1937182836123,
            "unit": "ns/iter",
            "extra": "iterations: 213413\ncpu: 3285.2281726042816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21264.398627933762,
            "unit": "ns/iter",
            "extra": "iterations: 32943\ncpu: 21264.3778647968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16839.83783458871,
            "unit": "ns/iter",
            "extra": "iterations: 41618\ncpu: 16839.80248930753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16606.909500651986,
            "unit": "ns/iter",
            "extra": "iterations: 42155\ncpu: 16607.071521764803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12095.919276544719,
            "unit": "ns/iter",
            "extra": "iterations: 57889\ncpu: 12095.911140285787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102177.89754396748,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 102178.05551518657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 133881.60403070593,
            "unit": "ns/iter",
            "extra": "iterations: 5210\ncpu: 133881.59309021075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32576.8093133592,
            "unit": "ns/iter",
            "extra": "iterations: 21496\ncpu: 32576.697990323886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32891.38389962052,
            "unit": "ns/iter",
            "extra": "iterations: 21279\ncpu: 32891.02401428651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32290.253199645762,
            "unit": "ns/iter",
            "extra": "iterations: 21643\ncpu: 32290.569699210027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66782.27475579121,
            "unit": "ns/iter",
            "extra": "iterations: 10442\ncpu: 66782.69488603759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61368.49657954669,
            "unit": "ns/iter",
            "extra": "iterations: 11402\ncpu: 61366.61989124691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23923.217287407493,
            "unit": "ns/iter",
            "extra": "iterations: 29293\ncpu: 23923.015737548256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120409.46532437688,
            "unit": "ns/iter",
            "extra": "iterations: 5811\ncpu: 120407.89881259686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95161.79804160516,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 95161.97470420213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96677.83763530785,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 96677.92117679711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94145.79402664208,
            "unit": "ns/iter",
            "extra": "iterations: 7433\ncpu: 94145.21727431807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168219.6216670471,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 168220.87436944604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 574013.8939144326,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 573993.8322368386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 464247.9880079395,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 464215.12325117015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 471283.8921634074,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 471273.8780977887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 458550.5006543969,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 458535.4712041913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 316625.53542957944,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 316603.01151461754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460733.9223684305,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 460706.90789474087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24837.7522821707,
            "unit": "ns/iter",
            "extra": "iterations: 28153\ncpu: 24836.319397577387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122244.9235068069,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122239.66119455092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94407.11166553658,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94403.69521240728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95904.76039956302,
            "unit": "ns/iter",
            "extra": "iterations: 7308\ncpu: 95904.76190476245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95147.21241697914,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 95139.89426596189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168307.49452642474,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 168307.82960494928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 576823.1102880093,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 576829.3004115251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 474815.13093625434,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474815.8073269993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 470423.37206177745,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470412.7602417712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467839.08744989487,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467831.7089452542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309253.4030048608,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 309247.7684489616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465840.8695072872,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 465845.47270306177 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}