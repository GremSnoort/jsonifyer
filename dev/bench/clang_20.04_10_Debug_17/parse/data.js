window.BENCHMARK_DATA = {
  "lastUpdate": 1705777700471,
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
        "date": 1702503271127,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7701.428732009203,
            "unit": "ns/iter",
            "extra": "iterations: 90742\ncpu: 7700.936721694475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55527.67120000227,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55521.68999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102131.34507711114,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 102123.9027283511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148369.8391379464,
            "unit": "ns/iter",
            "extra": "iterations: 5800\ncpu: 148362.10344827588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195386.75727499634,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 195376.9456350101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242290.533128316,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 242255.21386636858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289298.05294703797,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 289279.12087912054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334116.84097033023,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 334102.2333461686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378195.6838905673,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 378181.80633955717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6330.215807703819,
            "unit": "ns/iter",
            "extra": "iterations: 110288\ncpu: 6329.756637168142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5271.890188394642,
            "unit": "ns/iter",
            "extra": "iterations: 132700\ncpu: 5271.449886963075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5191.004946750091,
            "unit": "ns/iter",
            "extra": "iterations: 134836\ncpu: 5190.732445341006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5178.559743076306,
            "unit": "ns/iter",
            "extra": "iterations: 135137\ncpu: 5178.527716317519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8326.741583214218,
            "unit": "ns/iter",
            "extra": "iterations: 83880\ncpu: 8326.20171673821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28515.43567004631,
            "unit": "ns/iter",
            "extra": "iterations: 28416\ncpu: 28513.759853603617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142605.2773710441,
            "unit": "ns/iter",
            "extra": "iterations: 6010\ncpu: 142593.81031613974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106820.62725451177,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 106813.37675350701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106823.80207162931,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 106819.81779608151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99339.66911421626,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99334.14918414924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213235.70494570324,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 213231.2424607964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815316.3620354016,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1815169.0802348312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1434631.8405573682,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1434574.922600622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1429937.9460708264,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1429830.50847458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1409378.7568387839,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1409370.820668692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 787291.3895992861,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 787239.5566922437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1380905.0762332783,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1380883.1091180893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37603.1847510024,
            "unit": "ns/iter",
            "extra": "iterations: 22008\ncpu: 37601.62668120676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176275.44106852083,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 176270.18760195782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134763.7608014976,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 134757.76455854758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133217.81577316415,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 133211.7601487451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130406.80409401408,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130403.71493555722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 235398.95279670306,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 235391.814461118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1868255.6104418878,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1868170.0803212845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1475501.7702060307,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1475417.749603802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1471249.947784883,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1471154.588607597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1443317.3012422253,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1443234.0062111733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822602.0735815983,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 822563.1205673751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1418230.960365879,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418136.5853658582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5090834.6599999275,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5090626.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3075614.257425727,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3075453.795379542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27016.138761200593,
            "unit": "ns/iter",
            "extra": "iterations: 30239\ncpu: 27015.34442276519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134650.6314800415,
            "unit": "ns/iter",
            "extra": "iterations: 6385\ncpu: 134644.5262333597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108286.60284491655,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 108280.6646525685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107673.81940092443,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 107668.96854242423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99149.44541332436,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 99146.69224508748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 209196.64783973165,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 209187.0866521842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1838181.2972441055,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1838105.5118110233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446510.506955176,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1446432.6120556411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1434997.4006163827,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434931.124807398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1413790.8710166845,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413706.9802731362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 795994.7039529142,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 795961.2279226249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391222.5626865022,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391107.164179105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2922.9217609099214,
            "unit": "ns/iter",
            "extra": "iterations: 240353\ncpu: 2922.7864848784884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18812.516723128327,
            "unit": "ns/iter",
            "extra": "iterations: 37194\ncpu: 18811.028660536635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15401.111958054753,
            "unit": "ns/iter",
            "extra": "iterations: 45392\ncpu: 15400.378921395924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14398.513739817343,
            "unit": "ns/iter",
            "extra": "iterations: 48727\ncpu: 14398.13860898473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11288.651093327335,
            "unit": "ns/iter",
            "extra": "iterations: 61601\ncpu: 11288.420642522005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69711.9271409865,
            "unit": "ns/iter",
            "extra": "iterations: 9937\ncpu: 69710.74771057672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127244.62070845642,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 127233.9327883739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30427.04347825767,
            "unit": "ns/iter",
            "extra": "iterations: 23000\ncpu: 30425.87826086943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30517.132124010364,
            "unit": "ns/iter",
            "extra": "iterations: 22933\ncpu: 30513.879562202943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30431.788499068756,
            "unit": "ns/iter",
            "extra": "iterations: 23059\ncpu: 30431.21124073037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61850.16318434598,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61842.89870404661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57596.715235600066,
            "unit": "ns/iter",
            "extra": "iterations: 12182\ncpu: 57594.04038745708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21827.959720879957,
            "unit": "ns/iter",
            "extra": "iterations: 32101\ncpu: 21827.220335815204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113172.31840233192,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 113164.99029754169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89175.79031017407,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89174.33991284209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88642.4010912283,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 88633.00342596105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88664.41856325076,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 88659.05912269597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135495.47808455964,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135490.71249276042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 543696.7267802693,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 543693.4984520075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448722.08492979076,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 448697.31800765934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 444080.7086763664,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 444060.67131095467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 437399.8031250181,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 437362.4375000063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281208.08008046716,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 281179.4768611707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 435488.95321273943,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 435463.94260760257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21959.016463356398,
            "unit": "ns/iter",
            "extra": "iterations: 31889\ncpu: 21958.51233967801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110970.11709713165,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 110959.03977182823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90468.06195834867,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 90464.04087440138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90583.02115583971,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 90579.97936016439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90208.02902851017,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 90205.44445877925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133570.66946724927,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133567.385907962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533288.1329787448,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 533268.4650455876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442860.4864182057,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442840.17687934026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 445455.10757479584,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 445446.46721833025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433199.02669153997,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 433175.79143389245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276926.2093391204,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 276910.1701622492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 432415.38861382595,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 432391.4603960382 ns\nthreads: 1"
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
        "date": 1705574905515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7720.79390524961,
            "unit": "ns/iter",
            "extra": "iterations: 90701\ncpu: 7720.509145433898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55238.86920000223,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55237.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101281.9326313343,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 101278.29364604522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146805.72665186052,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 146802.8854362301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193071.88747202203,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 193066.4876957495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242492.33066079373,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 242481.19988941107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284919.4485704679,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 284901.61025303975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330832.24847792584,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 330823.43987823447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374454.9615051729,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 374438.9705882347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6251.314166263877,
            "unit": "ns/iter",
            "extra": "iterations: 111702\ncpu: 6251.175448962427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5213.678814353878,
            "unit": "ns/iter",
            "extra": "iterations: 134374\ncpu: 5213.479542173337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5283.477725032933,
            "unit": "ns/iter",
            "extra": "iterations: 132503\ncpu: 5283.343018648627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5130.390406142615,
            "unit": "ns/iter",
            "extra": "iterations: 136504\ncpu: 5130.21230147102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8351.296740770564,
            "unit": "ns/iter",
            "extra": "iterations: 84161\ncpu: 8350.68737301126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27955.25680090766,
            "unit": "ns/iter",
            "extra": "iterations: 29077\ncpu: 27954.262819410553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134206.47962233814,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 134198.78835562555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103727.57877500792,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 103726.61006670697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104530.38384456569,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 104525.72406208004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98502.3280852023,
            "unit": "ns/iter",
            "extra": "iterations: 8638\ncpu: 98501.42394072692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 226131.24013240417,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 226114.2857142854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1819304.2328767017,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1819271.2328767176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1430912.9551776368,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1430851.6228748034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1449916.3265625725,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1449870.1562499995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1405075.361153256,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1404996.8133535674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789366.4316239493,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 789352.8205128204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1380483.0327868757,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1380413.4128166928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39407.038683519124,
            "unit": "ns/iter",
            "extra": "iterations: 20965\ncpu: 39406.6587169092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167465.95801747925,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 167452.82798833837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130579.96171308089,
            "unit": "ns/iter",
            "extra": "iterations: 6608\ncpu: 130456.67372881374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138669.9683307271,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 138657.61310452447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130206.7195996549,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 130199.4622049596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 249382.47316506194,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 249365.70931244598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1849999.07753468,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1849939.1650099433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1473032.1790809447,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1472978.2884310645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1473729.1144673575,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1473629.2527821886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1437250.6003085824,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437151.0802469146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819215.074074059,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 819165.1675485045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1410317.9438541643,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410200.6069802644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5019308.679999312,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5019262.999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3059715.5131579554,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3059401.3157894583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26876.668211790253,
            "unit": "ns/iter",
            "extra": "iterations: 30634\ncpu: 26875.135470392324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130136.52661107635,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130128.02122820333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103965.65588127529,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 103963.39861330684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105215.5692476818,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 105209.46507083545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97603.26732673141,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 97598.04256287684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 223885.6460831774,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 223878.7445776977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1819283.083984491,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1819252.7343749986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1444480.4298922133,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1444415.408320489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1429038.053846188,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429024.76923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1409611.1674276858,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1409493.4550989394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789028.0269133091,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 788973.4230445775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1384239.7261904744,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384127.97619048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.0630514767768,
            "unit": "ns/iter",
            "extra": "iterations: 240264\ncpu: 2916.7782106349646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18918.355144222776,
            "unit": "ns/iter",
            "extra": "iterations: 37061\ncpu: 18916.367610156216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14190.817632948365,
            "unit": "ns/iter",
            "extra": "iterations: 49192\ncpu: 14190.490323629776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14875.476001871959,
            "unit": "ns/iter",
            "extra": "iterations: 46962\ncpu: 14875.005323453015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11212.225280853592,
            "unit": "ns/iter",
            "extra": "iterations: 61865\ncpu: 11211.639860987612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71852.38944645145,
            "unit": "ns/iter",
            "extra": "iterations: 9665\ncpu: 71845.73202276266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120215.13194563027,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 120203.7502150357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30907.233368668607,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30905.358247194956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30925.402227227467,
            "unit": "ns/iter",
            "extra": "iterations: 22629\ncpu: 30924.477440452523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30901.736242887997,
            "unit": "ns/iter",
            "extra": "iterations: 22661\ncpu: 30900.21623052833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62342.28033211543,
            "unit": "ns/iter",
            "extra": "iterations: 11201\ncpu: 62335.12186411916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57801.76782465639,
            "unit": "ns/iter",
            "extra": "iterations: 12090\ncpu: 57800.397022332494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22269.947445676607,
            "unit": "ns/iter",
            "extra": "iterations: 31339\ncpu: 22269.287469287465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114363.86827269116,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 114362.71997266343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91755.45910220931,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 91746.91794267757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91185.8690908975,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 91176.64935065004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91490.15118253867,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91482.55586044613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 136986.4365752646,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 136980.94298678316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544717.9852370439,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 544712.8205128191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 456607.433986891,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456604.0522875853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453876.8774319524,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453869.1309986953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447975.28562303516,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447966.0702875404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283152.39386601845,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 283132.7280064558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 442799.3988621816,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 442795.57522123447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22806.46142587848,
            "unit": "ns/iter",
            "extra": "iterations: 30746\ncpu: 22805.26247316716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115606.25371900214,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 115603.30578512349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93832.78448967356,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 93829.3463702106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92915.16225562031,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 92914.39021146351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92681.40429481315,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92680.55408271495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 137452.38035364062,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 137442.77013752278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 538419.5141762007,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 538371.7241379343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 444391.30171867803,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 444366.3271801387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 451365.9948487208,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 451361.751448805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441550.37287065206,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441546.3722397447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284468.45890967106,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 284465.8665581825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 438978.5764631132,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 438975.20453115477 ns\nthreads: 1"
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
        "date": 1705772697812,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7444.2579365922265,
            "unit": "ns/iter",
            "extra": "iterations: 94058\ncpu: 7444.1567968700165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54869.75669999765,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54869.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101518.82967162543,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 101517.82423812899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147409.26899384524,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 147409.85626283364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197731.04521039105,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 197729.25246195163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239473.55814599045,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 239461.64307521508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286164.970705723,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 286157.72303595196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331302.14552381536,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 331292.11428571434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375779.45442764414,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 375768.50971922296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6272.833444869805,
            "unit": "ns/iter",
            "extra": "iterations: 112071\ncpu: 6272.538836987256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5176.65951417013,
            "unit": "ns/iter",
            "extra": "iterations: 135850\ncpu: 5176.499815973491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5185.014763684897,
            "unit": "ns/iter",
            "extra": "iterations: 135603\ncpu: 5181.570466730078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5163.270576329493,
            "unit": "ns/iter",
            "extra": "iterations: 135374\ncpu: 5163.167225612002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8312.857945568554,
            "unit": "ns/iter",
            "extra": "iterations: 84179\ncpu: 8312.87256916808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25850.327943984747,
            "unit": "ns/iter",
            "extra": "iterations: 31420\ncpu: 25850.041374920434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141039.26814815495,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 141039.70370370353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107278.47590965868,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 107277.7289836889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106783.77184647194,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 106784.91061382681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102354.72080489348,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 102354.01844532284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224285.9091367914,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 224285.79000504783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1825875.9232283386,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1825852.9527559062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1441594.7085270921,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441601.240310077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1430984.0338982884,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1430982.4345146366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1414869.6702290084,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1414857.8625954199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789132.3150684102,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 789108.6472602739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1387475.836826345,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1387490.8682634754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34758.827790720585,
            "unit": "ns/iter",
            "extra": "iterations: 23605\ncpu: 34758.7926286804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175712.16198616338,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 175714.0618640621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136208.02573818865,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 136205.71609032046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136088.50771678478,
            "unit": "ns/iter",
            "extra": "iterations: 6285\ncpu: 136088.97374701675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132436.47627822476,
            "unit": "ns/iter",
            "extra": "iterations: 6513\ncpu: 132435.22186396472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 247004.75442605503,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 247007.45288406592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1878210.871227319,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1878147.887323941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1472535.2559242807,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1472534.2812006222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1473806.3012618045,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1473775.8675078931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1459112.2150706335,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1459119.1522762955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 838414.7740774094,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 838408.0108010786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1427167.8246154806,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427156.46153847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5157146.459999922,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5157139.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3054281.891803332,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3054276.3934426294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24737.9447261991,
            "unit": "ns/iter",
            "extra": "iterations: 33126\ncpu: 24737.674334359555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132884.58822621152,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 132885.02781211302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108896.58350150673,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 108892.68415741614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109967.37840617051,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 109968.57326478075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103998.37409816458,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 103997.29154346483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219555.74785460506,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 219556.5623422521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1837475.5442044507,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1837474.0667976348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1450106.4922361332,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1450122.2049689458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1447338.9350849616,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1447332.148377116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1428609.102290188,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1428615.572519091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 790106.7604340052,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 790110.1836393964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1397197.3313253298,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1397213.2530120567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2920.0010037987154,
            "unit": "ns/iter",
            "extra": "iterations: 240088\ncpu: 2919.980590450171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18776.619882410792,
            "unit": "ns/iter",
            "extra": "iterations: 37249\ncpu: 18776.12284893537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14964.715176582096,
            "unit": "ns/iter",
            "extra": "iterations: 46664\ncpu: 14964.75655751754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15121.123308661898,
            "unit": "ns/iter",
            "extra": "iterations: 46339\ncpu: 15121.303869310901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10772.981915286324,
            "unit": "ns/iter",
            "extra": "iterations: 64972\ncpu: 10772.877547251032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72667.67192855479,
            "unit": "ns/iter",
            "extra": "iterations: 9629\ncpu: 72668.62602554788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127885.20094907297,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 127882.71582405592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31172.750790468235,
            "unit": "ns/iter",
            "extra": "iterations: 22455\ncpu: 31173.19082609649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30654.54833486385,
            "unit": "ns/iter",
            "extra": "iterations: 22851\ncpu: 30654.072031858745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30317.528776356423,
            "unit": "ns/iter",
            "extra": "iterations: 23144\ncpu: 30317.948496370595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61997.29362193119,
            "unit": "ns/iter",
            "extra": "iterations: 11273\ncpu: 61997.23232502421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58117.42556214832,
            "unit": "ns/iter",
            "extra": "iterations: 11963\ncpu: 58116.60118699347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21764.8067386352,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 21764.405935973533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116162.57263962488,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 116161.31981382906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91237.9643693174,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 91234.13524057147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90749.12951689803,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 90745.62880455946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89999.23022525714,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 90000.4321634371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133202.56495238762,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133202.74285714125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 541719.265274523,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 541711.8329466314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449892.78920307924,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449880.84832905076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 443259.48017904407,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 443257.0332480793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441347.1664565346,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441334.7414880225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284041.2718011439,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 284032.72208639013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436458.76139914995,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 436449.2192379812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22299.964531329522,
            "unit": "ns/iter",
            "extra": "iterations: 31408\ncpu: 22300.2260570556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114092.78559792443,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 114089.63831867118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92155.70511312719,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 92156.13966261275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92820.39628116567,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92820.49320849382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91500.7886147063,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 91500.27418723176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135154.97267653415,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 135154.26207427526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535057.6715049632,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535048.2811306363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446478.84193758003,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 446484.19375397963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 443692.67490496614,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 443690.1774397916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433881.9627560282,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 433878.7088764766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281068.499198739,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 281064.2227564106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 434373.0279850916,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434373.32089551724 ns\nthreads: 1"
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
        "date": 1705774161308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8062.704172842166,
            "unit": "ns/iter",
            "extra": "iterations: 86368\ncpu: 8062.4258984809185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58659.016499996134,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58658.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107690.49722991104,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 107688.95744145053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154033.18776823144,
            "unit": "ns/iter",
            "extra": "iterations: 5592\ncpu: 154029.0057224607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 205543.92062001268,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 205541.310474401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250538.7381502733,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 250534.132947977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 298309.59717435134,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 298303.5837353548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346494.01154455484,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 346479.89649681526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 396103.42009131046,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 396087.71689497726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6480.113289499207,
            "unit": "ns/iter",
            "extra": "iterations: 108439\ncpu: 6479.800625236314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5365.801873403671,
            "unit": "ns/iter",
            "extra": "iterations: 130351\ncpu: 5365.721014798501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5299.793267482524,
            "unit": "ns/iter",
            "extra": "iterations: 132016\ncpu: 5299.615198157796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5374.802698494235,
            "unit": "ns/iter",
            "extra": "iterations: 130369\ncpu: 5374.552999562778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8281.903728186107,
            "unit": "ns/iter",
            "extra": "iterations: 84116\ncpu: 8281.693138047453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28669.534573716926,
            "unit": "ns/iter",
            "extra": "iterations: 28432\ncpu: 28668.02546426563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144850.78614966304,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 144843.22722654953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112310.25567362635,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 112304.10599501524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109218.1872373001,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109215.71774296294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105200.22019254918,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 105198.11157738855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 221402.61810925935,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 221392.74133200268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1877700.5365853335,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1877610.5691056887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1471059.1759112633,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471008.716323299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1472370.5920634947,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1472311.7460317465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1453259.3526647135,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1453204.0752351051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 798792.5893634971,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 798756.756756755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1417712.7140671741,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1417682.8746177333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38392.39321219183,
            "unit": "ns/iter",
            "extra": "iterations: 21627\ncpu: 38390.53035557409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179920.65453040024,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 179914.91518411261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135485.29703900844,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 135478.67773774057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139172.51157145246,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 139167.68085450729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129291.45079987081,
            "unit": "ns/iter",
            "extra": "iterations: 6626\ncpu: 129286.46242076637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 244869.16840621587,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 244862.0592383639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1927493.1141079515,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1927404.9792531107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1507385.382258015,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1507344.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1523605.4820262576,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1523540.849673199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1506784.6456309473,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1506775.728155338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 845339.3863636516,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 845326.7272727254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1463460.2456693556,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1463404.8818897565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5161205.139999083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5161094.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3171292.4489795957,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3171260.204081627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27636.20748904747,
            "unit": "ns/iter",
            "extra": "iterations: 29216\ncpu: 27636.035049288268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142176.64231653634,
            "unit": "ns/iter",
            "extra": "iterations: 6078\ncpu: 142176.1434682458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113133.22717732954,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 113131.80745015778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112075.36417245446,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 112074.93120167693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103489.553730976,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 103487.41849794742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 215303.25414092472,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 215302.32385661377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1878160.5341363973,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1878140.7630522077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1485702.6009537906,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1485663.5930047699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1478564.5246423222,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1478519.5548489727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1471102.3860758706,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1471077.3734177207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 806684.4350817066,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 806661.650902837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1423997.4082569592,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423950.7645259884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2862.3860724890683,
            "unit": "ns/iter",
            "extra": "iterations: 245112\ncpu: 2862.3674075524905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18995.284852671834,
            "unit": "ns/iter",
            "extra": "iterations: 37637\ncpu: 18994.893323059714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15678.604260843675,
            "unit": "ns/iter",
            "extra": "iterations: 44686\ncpu: 15678.01324799713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15089.062610459103,
            "unit": "ns/iter",
            "extra": "iterations: 46398\ncpu: 15088.967196861999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11418.370663878639,
            "unit": "ns/iter",
            "extra": "iterations: 61201\ncpu: 11417.939249358695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72560.62536382525,
            "unit": "ns/iter",
            "extra": "iterations: 9620\ncpu: 72558.55509355504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125790.5209268719,
            "unit": "ns/iter",
            "extra": "iterations: 5567\ncpu: 125787.821088558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31546.74566865452,
            "unit": "ns/iter",
            "extra": "iterations: 22164\ncpu: 31546.192023100484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32146.124175522644,
            "unit": "ns/iter",
            "extra": "iterations: 21832\ncpu: 32145.240930743676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31765.439085258164,
            "unit": "ns/iter",
            "extra": "iterations: 22039\ncpu: 31764.794228412993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63339.450909418905,
            "unit": "ns/iter",
            "extra": "iterations: 11051\ncpu: 63338.15944258449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59417.6301820036,
            "unit": "ns/iter",
            "extra": "iterations: 11868\ncpu: 59414.787664307565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22380.94119900402,
            "unit": "ns/iter",
            "extra": "iterations: 31326\ncpu: 22380.80188980404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118127.59451270613,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 118125.66907927896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92964.75139293955,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 92960.82515256066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92937.3486372043,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 92934.54617623659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92171.27496363154,
            "unit": "ns/iter",
            "extra": "iterations: 7561\ncpu: 92168.4565533654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133694.66558317965,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 133691.91204588907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 568143.6683046932,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 568135.8722358719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 463673.75331563945,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463671.02122015826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 462930.3002645048,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462912.1031746075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461802.5273927019,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 461787.590759076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 289874.4752066013,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 289863.88429752376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 451347.2323298399,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 451299.0183246072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22808.307790134437,
            "unit": "ns/iter",
            "extra": "iterations: 30667\ncpu: 22807.734698535718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115549.388320681,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 115540.81161332903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94271.27221247756,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 94268.54523392196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94321.28129641608,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 94318.82511816411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93637.1157179082,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 93632.66231169047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135787.91823290332,
            "unit": "ns/iter",
            "extra": "iterations: 5161\ncpu: 135777.81437705836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 555943.7892234619,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 555922.2662440568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 460535.26907890703,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 460532.89473684604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 464996.23705180164,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 464984.46215139853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 459761.6347541216,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 459753.1803278705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290894.0765073075,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 290888.9812889777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 451371.9754997368,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 451354.22308187943 ns\nthreads: 1"
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
        "date": 1705777699511,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7626.044067056439,
            "unit": "ns/iter",
            "extra": "iterations: 91565\ncpu: 7626.130071533884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54358.7013999968,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54352.74000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99670.34853230919,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 99664.49704142012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146002.04270158842,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 145995.8659407961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195326.56108395295,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 195328.74278098627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236214.09423653694,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 236209.88800874088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280964.119209561,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 280960.96533851663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326672.13737294934,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 326663.26684230316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373006.95327901025,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 373008.18688384065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6220.15393557512,
            "unit": "ns/iter",
            "extra": "iterations: 112690\ncpu: 6219.637057414154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5093.682943268451,
            "unit": "ns/iter",
            "extra": "iterations: 129081\ncpu: 5093.5164741518865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5067.2211071662605,
            "unit": "ns/iter",
            "extra": "iterations: 138010\ncpu: 5067.179189913766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5254.551483459587,
            "unit": "ns/iter",
            "extra": "iterations: 136539\ncpu: 5254.339785702246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8247.236286969921,
            "unit": "ns/iter",
            "extra": "iterations: 84664\ncpu: 8247.338892563539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26454.140010401738,
            "unit": "ns/iter",
            "extra": "iterations: 30762\ncpu: 26453.25401469347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132971.79182214843,
            "unit": "ns/iter",
            "extra": "iterations: 6432\ncpu: 132970.8333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102620.97484050361,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 102618.59877211976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102497.14464349358,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 102498.42491282936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99156.6869240623,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 99154.85827598274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227749.85434895253,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 227743.90118373607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1768961.3167938327,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1768910.687022902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1380136.1248143644,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380143.0906389307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1381687.3273809177,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1381639.8809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1366839.6936671527,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1366793.667157586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 770147.2889259554,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 770119.900083262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1337390.0548341747,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337371.4285714275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35678.30115461263,
            "unit": "ns/iter",
            "extra": "iterations: 23038\ncpu: 35677.78018925252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166122.5534336518,
            "unit": "ns/iter",
            "extra": "iterations: 5184\ncpu: 166120.15817901245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131562.4691639946,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 131558.12395309887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131785.04882932905,
            "unit": "ns/iter",
            "extra": "iterations: 6492\ncpu: 131783.30252618616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127926.56616989312,
            "unit": "ns/iter",
            "extra": "iterations: 6710\ncpu: 127922.66766020861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 252130.56428154954,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 252122.57126236166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1811900.08576984,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811805.2631578937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1424668.198776739,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424624.1590214048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1412815.212442996,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412752.5037936273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1401096.241327343,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1401065.3092006054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 825696.1714031762,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 825699.9111900546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1382292.9495548808,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1382228.4866468909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5117811.8199993605,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5117671.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3119125.5100672254,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3119000.67114095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25378.06047275383,
            "unit": "ns/iter",
            "extra": "iterations: 32279\ncpu: 25376.98813470055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126883.9860926182,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 126881.21023820135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103812.90548227461,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 103807.11605954246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104016.24159765326,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 104014.32050657595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96979.51433121943,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 96976.7743403093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225699.66077921947,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 225699.6623376612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1787067.2203065157,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1786988.8888888825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1389833.1266765518,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1389788.971684056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1384242.812778725,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1384202.9717682104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1386788.6148148465,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1386743.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 778257.5012468749,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 778222.5270157922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353873.7822931136,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1353777.0682148119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2913.469891898392,
            "unit": "ns/iter",
            "extra": "iterations: 241347\ncpu: 2913.2684475050455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18643.557941835003,
            "unit": "ns/iter",
            "extra": "iterations: 37995\ncpu: 18642.168706408793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15495.913745500218,
            "unit": "ns/iter",
            "extra": "iterations: 45273\ncpu: 15494.944006361358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15522.086946853302,
            "unit": "ns/iter",
            "extra": "iterations: 44970\ncpu: 15521.732265955126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11359.154833065479,
            "unit": "ns/iter",
            "extra": "iterations: 61731\ncpu: 11359.010869741309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71639.69141223641,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 71637.29194322531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120798.2938162561,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 120789.02826855145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30966.283845979793,
            "unit": "ns/iter",
            "extra": "iterations: 21945\ncpu: 30965.222146274755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30316.101333447394,
            "unit": "ns/iter",
            "extra": "iterations: 23023\ncpu: 30315.5540112062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30325.222033532256,
            "unit": "ns/iter",
            "extra": "iterations: 22965\ncpu: 30324.654909645098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62277.186197683106,
            "unit": "ns/iter",
            "extra": "iterations: 11230\ncpu: 62275.9750667857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57679.59186697037,
            "unit": "ns/iter",
            "extra": "iterations: 12148\ncpu: 57678.16924596675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22298.048530070693,
            "unit": "ns/iter",
            "extra": "iterations: 31362\ncpu: 22297.752056628946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113273.25631476945,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 113271.68069948122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90838.9491591308,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 90837.128072445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90698.11796592844,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 90693.75322664017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90287.53779781613,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90283.79909851753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132965.5082589755,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132960.01518891272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 539908.5644787304,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 539901.0038610054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 442918.1330798173,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 442923.95437261986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 444650.9492063053,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444630.22222222056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 433684.9476861066,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 433674.37961099885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281994.40161290934,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 281987.29838709394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 433190.93843282544,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 433171.95273631695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22386.894578697873,
            "unit": "ns/iter",
            "extra": "iterations: 31284\ncpu: 22385.919319780423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112976.78668390932,
            "unit": "ns/iter",
            "extra": "iterations: 6188\ncpu: 112971.80025856616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92070.12467088657,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 92066.36387572359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92601.3305610522,
            "unit": "ns/iter",
            "extra": "iterations: 7575\ncpu: 92602.46864686348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92373.31748949634,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 92371.84873949703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134894.00867219456,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 134893.85238003678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532485.1166158577,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 532485.7469512189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438515.68299322046,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 438520.95238095237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 445876.4987260597,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 445866.1783439476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437760.8220973675,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 437766.2921348275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280774.9066506314,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280766.8269230777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 434221.4888198716,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434226.77018633357 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}