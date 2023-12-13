window.BENCHMARK_DATA = {
  "lastUpdate": 1702489583146,
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
      }
    ]
  }
}