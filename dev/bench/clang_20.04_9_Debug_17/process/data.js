window.BENCHMARK_DATA = {
  "lastUpdate": 1702392452787,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 20.04 Debug c++-17": [
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
        "date": 1702392451966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16804.779526990013,
            "unit": "ns/iter",
            "extra": "iterations: 41479\ncpu: 16804.87957761759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 165921.92423061896,
            "unit": "ns/iter",
            "extra": "iterations: 5134\ncpu: 165917.9392286716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 316050.6214442028,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 316043.58132749825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 463658.0133833063,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 463643.2548179871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 616751.7873239818,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 616737.4647887327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 616585.9609999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616547.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 735280.4352660688,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 735273.0738681499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 863140.3898617518,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 863121.4746543779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 973579.6873032929,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 973566.7366211955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13484.844599622067,
            "unit": "ns/iter",
            "extra": "iterations: 52413\ncpu: 13484.328315494238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11132.430152495663,
            "unit": "ns/iter",
            "extra": "iterations: 62887\ncpu: 11132.10520457329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11126.900521230926,
            "unit": "ns/iter",
            "extra": "iterations: 62928\ncpu: 11126.965738621922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11230.514280677031,
            "unit": "ns/iter",
            "extra": "iterations: 62392\ncpu: 11230.167329144744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18649.31835953021,
            "unit": "ns/iter",
            "extra": "iterations: 37599\ncpu: 18648.892257772786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63289.020893322035,
            "unit": "ns/iter",
            "extra": "iterations: 13545\ncpu: 63286.50424510885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 338567.0702938974,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 338558.8959491655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 267069.2543116989,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 267063.5308874251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 267723.54000627954,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 267718.3558205218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 264461.74378109,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 264457.64925373165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 501916.02500001405,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501901.0999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5123549.785714708,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 5123430.769230773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4196933.396396129,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4196768.018018005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4328559.640000296,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4328172.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4146571.9464289313,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4146223.214285705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2486953.9973261855,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2486932.620320855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4065184.2543861237,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4065035.526315796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16456270.781251447,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16456154.687500002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7210991.439999361,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7210870.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20605518.274509467,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 20604603.921568636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69168.9167958241,
            "unit": "ns/iter",
            "extra": "iterations: 12259\ncpu: 69166.94673301239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 373054.4740966487,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 373052.4161950377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 298463.3866015442,
            "unit": "ns/iter",
            "extra": "iterations: 2866\ncpu: 298457.67620376847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 304692.0758865394,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 304688.2624113464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 296373.0905935596,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 296368.8996876079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 623412.0612099781,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 623402.8469750887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5249186.151685576,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5249083.146067439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4261391.6438355595,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4261319.634703216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4249532.488584466,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4249473.51598173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4248258.213636353,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4248101.3636363745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2565051.289256309,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2564977.6859504045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4142290.6088887937,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4142192.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 17043923.50000071,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17043385.483870886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7375096.300000905,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7374766.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61888.16542343385,
            "unit": "ns/iter",
            "extra": "iterations: 13674\ncpu: 61887.8747988887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 350443.17193269345,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 350429.7496922459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 269021.4821822742,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 269014.0018921467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 267805.03044568666,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 267796.42184557253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 267478.0833593398,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 267474.4302216658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 511060.79499993485,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511063.49999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5166900.005555262,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5166706.666666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4232528.117646794,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4232405.429864255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4169406.811659004,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4169242.152466367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4176953.200893,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4176859.3750000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2510162.576819395,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2510086.5229110476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4082697.2894733083,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4082641.2280701785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6089.830913853328,
            "unit": "ns/iter",
            "extra": "iterations: 115314\ncpu: 6089.75753160935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41086.95456413305,
            "unit": "ns/iter",
            "extra": "iterations: 17035\ncpu: 41085.08952157341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33109.737848969606,
            "unit": "ns/iter",
            "extra": "iterations: 21850\ncpu: 33109.1487414188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32342.96815726824,
            "unit": "ns/iter",
            "extra": "iterations: 23145\ncpu: 32342.449773169013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24771.836154200835,
            "unit": "ns/iter",
            "extra": "iterations: 28301\ncpu: 24771.142362460483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167118.2458233766,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 167112.36276849752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 343127.7079863134,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 343117.3934345912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 84063.00756482901,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 84058.51344860713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83925.69108127961,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 83925.35363222299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84153.68083564898,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84149.07619852826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 180104.68790135457,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 180092.34523503672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163048.98387849436,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 163034.18224298832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49931.12903915652,
            "unit": "ns/iter",
            "extra": "iterations: 14019\ncpu: 49930.037805834814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 243973.66037735523,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 243953.87840670714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 200119.1560854864,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 200103.251780736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 201151.19333523294,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 201148.00344728338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 200585.5761305203,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 200567.40125929832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340209.4146815953,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 340183.22800194315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1458761.3999999862,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1458648.1249999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1221791.3484319735,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1221704.0069686233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1215984.0034782183,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1215925.0434782458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1215116.1317157198,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1215105.719237433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 802195.4886104609,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 801367.3120729014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1204547.4819276747,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1204493.1153184376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50676.60426455031,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 50675.25117455705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 246432.08374384555,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 246425.68613652495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 202939.14322917,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 202933.33333333398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 200877.09789806104,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 200872.3869853157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 203197.0513192049,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 203190.66396056765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 340493.8204379695,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 340491.6788321171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1460098.6450938662,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1460086.847599155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1217552.1686956768,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1217533.043478254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1216391.6770294546,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1216340.9326424995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1220679.528795855,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1220672.774869103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 805371.8167238568,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 805345.8190149029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1208865.4061963505,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1208856.7986230694 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}