window.BENCHMARK_DATA = {
  "lastUpdate": 1702492205039,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 20.04 Debug c++-17": [
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
        "date": 1702489565970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7716.197896287581,
            "unit": "ns/iter",
            "extra": "iterations: 90982\ncpu: 7715.552526873447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54197.079400000795,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54196.19999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100825.68297847199,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 100823.5031172803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145422.76608679866,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 145421.87130552274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191861.4343299923,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 191857.2093023256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236823.72328768333,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 236819.34246575346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282724.3767548145,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 282712.2428991186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327426.4065561399,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 327417.4453654861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373108.1207044508,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373097.0790378007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6273.4932971062935,
            "unit": "ns/iter",
            "extra": "iterations: 111519\ncpu: 6273.355213013028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5170.3001189396045,
            "unit": "ns/iter",
            "extra": "iterations: 135363\ncpu: 5170.214164875178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5196.23927171457,
            "unit": "ns/iter",
            "extra": "iterations: 134947\ncpu: 5196.171830422319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5152.091291194135,
            "unit": "ns/iter",
            "extra": "iterations: 135851\ncpu: 5152.021700245118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8275.88556317195,
            "unit": "ns/iter",
            "extra": "iterations: 84326\ncpu: 8275.667054052132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28292.228261244953,
            "unit": "ns/iter",
            "extra": "iterations: 29015\ncpu: 28291.449250387715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130565.80299785729,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 130559.5136127255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100565.49546792776,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 100563.4373160682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100740.67587999302,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 100738.57784077476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96423.76989443408,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 96422.34078783041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224663.0394101124,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 224653.31807780295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1835723.8851485187,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1835687.9207920833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1429296.1876921814,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429267.076923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1407169.230303094,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1407145.15151515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1389608.6317366282,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1389568.5628742499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789430.0658119166,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 789415.3846153838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1374314.1911111334,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1374275.703703705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37227.900431537084,
            "unit": "ns/iter",
            "extra": "iterations: 22246\ncpu: 37227.09251101322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 168644.83431028566,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 168637.47557639686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129987.88798431354,
            "unit": "ns/iter",
            "extra": "iterations: 6633\ncpu: 129984.44142921754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132715.7751004111,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 132710.64257028134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125850.15369852244,
            "unit": "ns/iter",
            "extra": "iterations: 6773\ncpu: 125843.36335449576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 253156.8708260213,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 253143.38019917952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1885537.0527385173,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1885409.5334685524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1491979.596153761,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1491933.0128205135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1467700.9968453867,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467648.895899052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1434036.0989180545,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1433996.9088098928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824472.9946761013,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 824456.7879325645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1420754.8715596527,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420632.2629969427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5083126.900000252,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5083018.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3140508.390572641,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3140293.602693594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27333.71051671094,
            "unit": "ns/iter",
            "extra": "iterations: 30133\ncpu: 27333.116516775444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127521.14769184236,
            "unit": "ns/iter",
            "extra": "iterations: 6737\ncpu: 127517.88629953984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103422.66806169876,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 103415.10223603957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104792.65331711105,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 104786.31771150326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94782.93028952272,
            "unit": "ns/iter",
            "extra": "iterations: 8980\ncpu: 94781.75946547842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 221020.89410562883,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 221016.22862975317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1847028.6916996734,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1846986.7588932782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1432175.297090392,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1432132.7718223562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1407690.7080181418,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407655.52193646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1398766.0315315402,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1398731.2312312357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 798882.4405772999,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 798864.0067911715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1381865.001483672,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1381837.3887240365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2908.118958907864,
            "unit": "ns/iter",
            "extra": "iterations: 241554\ncpu: 2908.105847967738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19109.727896547956,
            "unit": "ns/iter",
            "extra": "iterations: 36578\ncpu: 19109.617803051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14684.408419993772,
            "unit": "ns/iter",
            "extra": "iterations: 47696\ncpu: 14684.036397182244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14757.181958251227,
            "unit": "ns/iter",
            "extra": "iterations: 47379\ncpu: 14756.845859980076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11291.827821091058,
            "unit": "ns/iter",
            "extra": "iterations: 61953\ncpu: 11291.674333769193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 76437.16480508976,
            "unit": "ns/iter",
            "extra": "iterations: 9132\ncpu: 76435.15111695106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126099.9211663018,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 126099.40604751601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31120.376554727358,
            "unit": "ns/iter",
            "extra": "iterations: 22512\ncpu: 31119.589552238907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30534.858519493406,
            "unit": "ns/iter",
            "extra": "iterations: 22830\ncpu: 30534.669294787418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30744.153403854587,
            "unit": "ns/iter",
            "extra": "iterations: 22783\ncpu: 30743.42272747234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63276.24273163797,
            "unit": "ns/iter",
            "extra": "iterations: 11041\ncpu: 63275.93515080127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57916.087060765305,
            "unit": "ns/iter",
            "extra": "iterations: 12095\ncpu: 57914.49359239351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22465.12106125507,
            "unit": "ns/iter",
            "extra": "iterations: 31133\ncpu: 22464.548870972965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115881.16487335919,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 115880.66545273978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92166.39379946291,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 92162.5593667537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91725.67909472036,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 91724.34589220285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90599.99365530258,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 90597.12546937786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134508.5201690294,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 134503.36150595552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 545081.4007782154,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545079.06614786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 443701.97208120907,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443678.2360406107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449489.4579858599,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 449459.9743425273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 444258.77290075825,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 444222.1374045835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282248.2854259398,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 282228.5425918463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436370.708489372,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 436335.76779026666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22516.790086901397,
            "unit": "ns/iter",
            "extra": "iterations: 31070\ncpu: 22514.950112648865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116551.61065779546,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 116541.68193172287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94106.23707879902,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 94099.1676735143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93521.6382608708,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93518.10033444848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91674.02844783428,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 91666.03303618112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138038.91579156235,
            "unit": "ns/iter",
            "extra": "iterations: 5047\ncpu: 138026.4909847433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540229.8604471283,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540191.7501927603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439257.464375018,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 439217.68749999756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 440532.6257861707,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 440493.1446540931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 435175.53731344186,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435164.67661690956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285187.6877809914,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 285180.2615447443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433587.96764161414,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 433565.0280024852 ns\nthreads: 1"
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
        "date": 1702492199269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7732.182245828922,
            "unit": "ns/iter",
            "extra": "iterations: 90559\ncpu: 7731.669961019889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55281.604000003885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55275.13 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102084.61004869195,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 102076.38674426892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148258.22276449896,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 148248.840857591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194944.31557560855,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 194929.25507900683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241051.5687690754,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 241035.03751041973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286835.0766688575,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 286819.0350297423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332945.8554027651,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 332923.22200392955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378288.5698737604,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378267.087505442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6276.234943319175,
            "unit": "ns/iter",
            "extra": "iterations: 111678\ncpu: 6275.931696484549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5194.330146911183,
            "unit": "ns/iter",
            "extra": "iterations: 134843\ncpu: 5194.024903035377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5139.415880485843,
            "unit": "ns/iter",
            "extra": "iterations: 136419\ncpu: 5139.057609277307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5147.404776399162,
            "unit": "ns/iter",
            "extra": "iterations: 136337\ncpu: 5147.361317910766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8385.173139119706,
            "unit": "ns/iter",
            "extra": "iterations: 83482\ncpu: 8384.590690208674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27868.374452206474,
            "unit": "ns/iter",
            "extra": "iterations: 29208\ncpu: 27866.091481785774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141064.72613766993,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 141056.7931657631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107119.60873920593,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 107113.91010391893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107244.78518610449,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 107238.15014412822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98998.82245703753,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 98997.96795169558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 233894.69664997084,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 233887.57583751026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1818932.4911938382,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1818897.651663404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1435623.959752279,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1435577.2445820454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1430377.656923051,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430364.7692307702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1408478.5696969572,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1408436.6666666644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 787217.7551194574,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 787197.1843003433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1380387.0564636432,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380331.0549777127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37385.73505355242,
            "unit": "ns/iter",
            "extra": "iterations: 22129\ncpu: 37384.712368385415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182775.3575280004,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 182773.82828701733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136825.96920146275,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 136822.40038101308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137975.24365155888,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 137969.72034715494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128455.53351246327,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 128452.90341842028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 256268.1371969327,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 256261.0881135425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1859309.4148295468,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1859187.1743486945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1506861.4071082256,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1506747.0113085594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1466980.979527518,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1466907.8740157455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1446434.9130433628,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446397.670807456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 815578.9850878081,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 815554.2105263149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1424306.8759570657,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424254.0581929586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5034670.819999292,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5034495.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3088990.2682119347,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3088862.2516556266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26700.716015535283,
            "unit": "ns/iter",
            "extra": "iterations: 30639\ncpu: 26700.248049871083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134028.43799594234,
            "unit": "ns/iter",
            "extra": "iterations: 6427\ncpu: 134022.84113894572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108572.64317629689,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 108567.84118473095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107913.71653741367,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 107910.87065298978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98942.19528541715,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 98940.48994684468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 227507.71316203236,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 227494.62506554706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1825512.9352940226,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1825425.8823529368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1441465.598461666,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1441380.6153846255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1425076.6824426407,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425018.4732824387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408078.9954750785,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1408000.3016591168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 793344.0723905367,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 793302.1885521923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1382915.9836553524,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1382827.043090637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2928.749219754027,
            "unit": "ns/iter",
            "extra": "iterations: 239668\ncpu: 2928.5252933224056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18627.320344709206,
            "unit": "ns/iter",
            "extra": "iterations: 37597\ncpu: 18626.15368247471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14995.752237016812,
            "unit": "ns/iter",
            "extra": "iterations: 46714\ncpu: 14994.680395598814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15739.732974383658,
            "unit": "ns/iter",
            "extra": "iterations: 44389\ncpu: 15738.20991687137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10788.515447180798,
            "unit": "ns/iter",
            "extra": "iterations: 62212\ncpu: 10788.325403459081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73378.42514213454,
            "unit": "ns/iter",
            "extra": "iterations: 9498\ncpu: 73374.26826700312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127617.086203747,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127609.56806998355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31346.477299187747,
            "unit": "ns/iter",
            "extra": "iterations: 22334\ncpu: 31343.72705292381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30834.1761596369,
            "unit": "ns/iter",
            "extra": "iterations: 22701\ncpu: 30832.232060261642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30730.230397541247,
            "unit": "ns/iter",
            "extra": "iterations: 22765\ncpu: 30728.37689435533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60208.36017896968,
            "unit": "ns/iter",
            "extra": "iterations: 11622\ncpu: 60202.24574083664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58855.82136356349,
            "unit": "ns/iter",
            "extra": "iterations: 12086\ncpu: 58851.150091014446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22139.1512381325,
            "unit": "ns/iter",
            "extra": "iterations: 31176\ncpu: 22137.182448036816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112974.54467325711,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 112973.58521161054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90788.97858255173,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 90785.43613707136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90232.30974134468,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 90226.81765538546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90665.75410683829,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 90659.0997283661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137379.11533933858,
            "unit": "ns/iter",
            "extra": "iterations: 5098\ncpu: 137368.06590819894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544445.2735042381,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 544410.3341103367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449594.1835687054,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449582.3491655985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449023.51571515197,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 449007.3123797322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 445828.18066157785,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 445817.9389312913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284421.1111110758,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 284413.83801384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 438255.0670426357,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 438251.6917293248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22576.132191495682,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 22575.499822928836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113096.23437248054,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 113091.63301566857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91635.95850242405,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 91631.64026704956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91623.31532828108,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91616.1391577312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91885.42784113147,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 91883.77244724201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 137136.0570252774,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137129.70801489305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535003.1802903112,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 534986.5546218462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 447186.29955391475,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 447178.7125557696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 444653.03305787296,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 444644.2466624257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 438388.8680424663,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 438373.170731708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280493.07538089185,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 280484.7634322367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 435740.54840729997,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 435731.4178638398 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}