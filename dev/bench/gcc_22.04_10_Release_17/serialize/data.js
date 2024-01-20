window.BENCHMARK_DATA = {
  "lastUpdate": 1705772081362,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 22.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397909522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 913.5472664664906,
            "unit": "ns/iter",
            "extra": "iterations: 766389\ncpu: 913.5363372908538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19004.44725239875,
            "unit": "ns/iter",
            "extra": "iterations: 44002\ncpu: 19004.211172219446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43648.90516652023,
            "unit": "ns/iter",
            "extra": "iterations: 20478\ncpu: 43647.543705439966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54138.657099997545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65813.81422399412,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 65811.93087404451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84019.18817557946,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 84019.11833818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98307.79152983856,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 98304.55214584984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115091.73194647179,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 115088.1012322777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147853.220060789,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 147842.9331306992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 741.6953994330644,
            "unit": "ns/iter",
            "extra": "iterations: 936515\ncpu: 741.6590230802514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 606.3574746730858,
            "unit": "ns/iter",
            "extra": "iterations: 1157268\ncpu: 606.3297352039463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 600.9004330718293,
            "unit": "ns/iter",
            "extra": "iterations: 1161932\ncpu: 600.8844751672211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.7745572325423,
            "unit": "ns/iter",
            "extra": "iterations: 1159017\ncpu: 603.7627575781892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1237.5496657673468,
            "unit": "ns/iter",
            "extra": "iterations: 564876\ncpu: 1237.460787854326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5100.651590000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5100.271999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23999.525642884186,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 23998.547531383174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21163.45396607845,
            "unit": "ns/iter",
            "extra": "iterations: 39384\ncpu: 21162.235933373984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20583.404830320353,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 20581.961852860994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21477.494990083855,
            "unit": "ns/iter",
            "extra": "iterations: 38823\ncpu: 21475.77724544729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59147.25368248921,
            "unit": "ns/iter",
            "extra": "iterations: 14053\ncpu: 59144.48872126946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 608644.6539999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608562.7999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 615198.704255321,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 615155.6028368777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604493.1037344359,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 604462.0331950209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610770.4660193868,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 610722.53814147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358005.36018175614,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 357979.719124329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616779.5112044698,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 616755.1120448173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2801813.7050146936,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2801599.1150442525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1167250.2465923105,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1167205.4522924393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3404903.690647566,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3404733.4532374153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5274.857819999852,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.504000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24148.756651691765,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 24147.28461184057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21323.761018932797,
            "unit": "ns/iter",
            "extra": "iterations: 39296\ncpu: 21322.65624999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20835.000922555042,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 20833.576023537626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21644.913108459976,
            "unit": "ns/iter",
            "extra": "iterations: 38807\ncpu: 21644.033292962573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50277.05570000194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50275.54000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 607642.0569999642,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607606.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504217.94300001464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504212.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 629692.5543785515,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 629641.7372881388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623613.9349363535,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 623584.9363507782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358870.15719467844,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 358863.7646110437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626009.22316381,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 625974.1525423698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2849669.574468124,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2849497.8723404254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1182935.0383663808,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1182827.103960396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5315.938261161566,
            "unit": "ns/iter",
            "extra": "iterations: 148950\ncpu: 5315.755622692195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24381.56302146739,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 24381.55824104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19527.802985075145,
            "unit": "ns/iter",
            "extra": "iterations: 42210\ncpu: 19527.230514096133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19089.237058987324,
            "unit": "ns/iter",
            "extra": "iterations: 43196\ncpu: 19088.941105658007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19262.0850165397,
            "unit": "ns/iter",
            "extra": "iterations: 42627\ncpu: 19261.287446923383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50281.95689999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50282.080000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602366.3060000218,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602331.300000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 620498.4435087905,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620456.7719298208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 621096.0781690084,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 621073.8028169015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 623653.4375441282,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 623631.6866619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 364194.2173021767,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 364167.240672407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620222.9936575064,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 620172.7272727304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.49153377254316,
            "unit": "ns/iter",
            "extra": "iterations: 2300139\ncpu: 304.47855542643146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2410.541555837388,
            "unit": "ns/iter",
            "extra": "iterations: 293244\ncpu: 2410.3466737597255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1843.179949836418,
            "unit": "ns/iter",
            "extra": "iterations: 380356\ncpu: 1843.1424770478145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1944.3492491250988,
            "unit": "ns/iter",
            "extra": "iterations: 362910\ncpu: 1944.2671736794382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1476.527531143436,
            "unit": "ns/iter",
            "extra": "iterations: 473936\ncpu: 1476.5092755140024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10864.906305253426,
            "unit": "ns/iter",
            "extra": "iterations: 65041\ncpu: 10864.437816146736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.41863905375,
            "unit": "ns/iter",
            "extra": "iterations: 22308\ncpu: 30878.465124619164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7215.257542659504,
            "unit": "ns/iter",
            "extra": "iterations: 97048\ncpu: 7214.877174181915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7291.523207319831,
            "unit": "ns/iter",
            "extra": "iterations: 96392\ncpu: 7291.023113951395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7229.041737157058,
            "unit": "ns/iter",
            "extra": "iterations: 96940\ncpu: 7229.041675263173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15250.32995960129,
            "unit": "ns/iter",
            "extra": "iterations: 46042\ncpu: 15250.045610529558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14136.553814852408,
            "unit": "ns/iter",
            "extra": "iterations: 49150\ncpu: 14135.54628687702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3216.2913337148784,
            "unit": "ns/iter",
            "extra": "iterations: 218375\ncpu: 3216.246823125323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15745.740120893865,
            "unit": "ns/iter",
            "extra": "iterations: 44336\ncpu: 15744.931883796262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13028.849436362587,
            "unit": "ns/iter",
            "extra": "iterations: 53758\ncpu: 13028.24323821567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12901.694689682527,
            "unit": "ns/iter",
            "extra": "iterations: 53123\ncpu: 12900.559079871067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13369.312468885219,
            "unit": "ns/iter",
            "extra": "iterations: 52226\ncpu: 13368.649714701538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30233.892875625508,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30231.455925478876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 136960.15743097174,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 136950.36224789455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118986.72577073563,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 118984.48305229045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118650.25547322865,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 118644.49309531771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 117387.73035805247,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117380.62107585403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69379.24606396856,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 69374.68066145212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 117709.16304715756,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 117699.52494061698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.2379115484387,
            "unit": "ns/iter",
            "extra": "iterations: 218018\ncpu: 3196.0081277692525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15803.958194731911,
            "unit": "ns/iter",
            "extra": "iterations: 44492\ncpu: 15802.908388024784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12964.972732694549,
            "unit": "ns/iter",
            "extra": "iterations: 53654\ncpu: 12964.537592723973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12892.008762362279,
            "unit": "ns/iter",
            "extra": "iterations: 54095\ncpu: 12891.760791200537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13565.555428679878,
            "unit": "ns/iter",
            "extra": "iterations: 52545\ncpu: 13564.959558473714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30470.575560879006,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 30468.677847963583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 140060.56133097035,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 140053.90824965655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118950.6326355572,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 118948.64447494781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126064.20865481508,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 125890.28849379471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118964.73061155438,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 118957.22582849266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69196.8421885802,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 69196.35895913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 117392.79247185627,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117385.98554864807 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397909522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 913.5472664664906,
            "unit": "ns/iter",
            "extra": "iterations: 766389\ncpu: 913.5363372908538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19004.44725239875,
            "unit": "ns/iter",
            "extra": "iterations: 44002\ncpu: 19004.211172219446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43648.90516652023,
            "unit": "ns/iter",
            "extra": "iterations: 20478\ncpu: 43647.543705439966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54138.657099997545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65813.81422399412,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 65811.93087404451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84019.18817557946,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 84019.11833818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98307.79152983856,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 98304.55214584984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115091.73194647179,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 115088.1012322777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147853.220060789,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 147842.9331306992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 741.6953994330644,
            "unit": "ns/iter",
            "extra": "iterations: 936515\ncpu: 741.6590230802514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 606.3574746730858,
            "unit": "ns/iter",
            "extra": "iterations: 1157268\ncpu: 606.3297352039463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 600.9004330718293,
            "unit": "ns/iter",
            "extra": "iterations: 1161932\ncpu: 600.8844751672211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.7745572325423,
            "unit": "ns/iter",
            "extra": "iterations: 1159017\ncpu: 603.7627575781892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1237.5496657673468,
            "unit": "ns/iter",
            "extra": "iterations: 564876\ncpu: 1237.460787854326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5100.651590000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5100.271999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23999.525642884186,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 23998.547531383174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21163.45396607845,
            "unit": "ns/iter",
            "extra": "iterations: 39384\ncpu: 21162.235933373984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20583.404830320353,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 20581.961852860994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21477.494990083855,
            "unit": "ns/iter",
            "extra": "iterations: 38823\ncpu: 21475.77724544729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59147.25368248921,
            "unit": "ns/iter",
            "extra": "iterations: 14053\ncpu: 59144.48872126946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 608644.6539999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608562.7999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 615198.704255321,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 615155.6028368777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604493.1037344359,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 604462.0331950209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610770.4660193868,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 610722.53814147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358005.36018175614,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 357979.719124329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616779.5112044698,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 616755.1120448173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2801813.7050146936,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2801599.1150442525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1167250.2465923105,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1167205.4522924393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3404903.690647566,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3404733.4532374153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5274.857819999852,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.504000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24148.756651691765,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 24147.28461184057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21323.761018932797,
            "unit": "ns/iter",
            "extra": "iterations: 39296\ncpu: 21322.65624999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20835.000922555042,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 20833.576023537626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21644.913108459976,
            "unit": "ns/iter",
            "extra": "iterations: 38807\ncpu: 21644.033292962573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50277.05570000194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50275.54000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 607642.0569999642,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607606.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504217.94300001464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504212.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 629692.5543785515,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 629641.7372881388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623613.9349363535,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 623584.9363507782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358870.15719467844,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 358863.7646110437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626009.22316381,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 625974.1525423698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2849669.574468124,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2849497.8723404254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1182935.0383663808,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1182827.103960396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5315.938261161566,
            "unit": "ns/iter",
            "extra": "iterations: 148950\ncpu: 5315.755622692195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24381.56302146739,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 24381.55824104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19527.802985075145,
            "unit": "ns/iter",
            "extra": "iterations: 42210\ncpu: 19527.230514096133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19089.237058987324,
            "unit": "ns/iter",
            "extra": "iterations: 43196\ncpu: 19088.941105658007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19262.0850165397,
            "unit": "ns/iter",
            "extra": "iterations: 42627\ncpu: 19261.287446923383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50281.95689999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50282.080000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602366.3060000218,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602331.300000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 620498.4435087905,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620456.7719298208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 621096.0781690084,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 621073.8028169015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 623653.4375441282,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 623631.6866619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 364194.2173021767,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 364167.240672407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620222.9936575064,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 620172.7272727304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.49153377254316,
            "unit": "ns/iter",
            "extra": "iterations: 2300139\ncpu: 304.47855542643146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2410.541555837388,
            "unit": "ns/iter",
            "extra": "iterations: 293244\ncpu: 2410.3466737597255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1843.179949836418,
            "unit": "ns/iter",
            "extra": "iterations: 380356\ncpu: 1843.1424770478145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1944.3492491250988,
            "unit": "ns/iter",
            "extra": "iterations: 362910\ncpu: 1944.2671736794382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1476.527531143436,
            "unit": "ns/iter",
            "extra": "iterations: 473936\ncpu: 1476.5092755140024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10864.906305253426,
            "unit": "ns/iter",
            "extra": "iterations: 65041\ncpu: 10864.437816146736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.41863905375,
            "unit": "ns/iter",
            "extra": "iterations: 22308\ncpu: 30878.465124619164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7215.257542659504,
            "unit": "ns/iter",
            "extra": "iterations: 97048\ncpu: 7214.877174181915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7291.523207319831,
            "unit": "ns/iter",
            "extra": "iterations: 96392\ncpu: 7291.023113951395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7229.041737157058,
            "unit": "ns/iter",
            "extra": "iterations: 96940\ncpu: 7229.041675263173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15250.32995960129,
            "unit": "ns/iter",
            "extra": "iterations: 46042\ncpu: 15250.045610529558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14136.553814852408,
            "unit": "ns/iter",
            "extra": "iterations: 49150\ncpu: 14135.54628687702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3216.2913337148784,
            "unit": "ns/iter",
            "extra": "iterations: 218375\ncpu: 3216.246823125323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15745.740120893865,
            "unit": "ns/iter",
            "extra": "iterations: 44336\ncpu: 15744.931883796262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13028.849436362587,
            "unit": "ns/iter",
            "extra": "iterations: 53758\ncpu: 13028.24323821567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12901.694689682527,
            "unit": "ns/iter",
            "extra": "iterations: 53123\ncpu: 12900.559079871067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13369.312468885219,
            "unit": "ns/iter",
            "extra": "iterations: 52226\ncpu: 13368.649714701538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30233.892875625508,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30231.455925478876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 136960.15743097174,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 136950.36224789455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118986.72577073563,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 118984.48305229045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118650.25547322865,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 118644.49309531771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 117387.73035805247,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117380.62107585403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69379.24606396856,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 69374.68066145212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 117709.16304715756,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 117699.52494061698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.2379115484387,
            "unit": "ns/iter",
            "extra": "iterations: 218018\ncpu: 3196.0081277692525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15803.958194731911,
            "unit": "ns/iter",
            "extra": "iterations: 44492\ncpu: 15802.908388024784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12964.972732694549,
            "unit": "ns/iter",
            "extra": "iterations: 53654\ncpu: 12964.537592723973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12892.008762362279,
            "unit": "ns/iter",
            "extra": "iterations: 54095\ncpu: 12891.760791200537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13565.555428679878,
            "unit": "ns/iter",
            "extra": "iterations: 52545\ncpu: 13564.959558473714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30470.575560879006,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 30468.677847963583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 140060.56133097035,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 140053.90824965655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118950.6326355572,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 118948.64447494781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126064.20865481508,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 125890.28849379471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118964.73061155438,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 118957.22582849266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69196.8421885802,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 69196.35895913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 117392.79247185627,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117385.98554864807 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397909522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 913.5472664664906,
            "unit": "ns/iter",
            "extra": "iterations: 766389\ncpu: 913.5363372908538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19004.44725239875,
            "unit": "ns/iter",
            "extra": "iterations: 44002\ncpu: 19004.211172219446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43648.90516652023,
            "unit": "ns/iter",
            "extra": "iterations: 20478\ncpu: 43647.543705439966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54138.657099997545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65813.81422399412,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 65811.93087404451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84019.18817557946,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 84019.11833818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98307.79152983856,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 98304.55214584984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115091.73194647179,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 115088.1012322777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147853.220060789,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 147842.9331306992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 741.6953994330644,
            "unit": "ns/iter",
            "extra": "iterations: 936515\ncpu: 741.6590230802514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 606.3574746730858,
            "unit": "ns/iter",
            "extra": "iterations: 1157268\ncpu: 606.3297352039463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 600.9004330718293,
            "unit": "ns/iter",
            "extra": "iterations: 1161932\ncpu: 600.8844751672211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.7745572325423,
            "unit": "ns/iter",
            "extra": "iterations: 1159017\ncpu: 603.7627575781892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1237.5496657673468,
            "unit": "ns/iter",
            "extra": "iterations: 564876\ncpu: 1237.460787854326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5100.651590000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5100.271999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23999.525642884186,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 23998.547531383174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21163.45396607845,
            "unit": "ns/iter",
            "extra": "iterations: 39384\ncpu: 21162.235933373984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20583.404830320353,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 20581.961852860994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21477.494990083855,
            "unit": "ns/iter",
            "extra": "iterations: 38823\ncpu: 21475.77724544729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59147.25368248921,
            "unit": "ns/iter",
            "extra": "iterations: 14053\ncpu: 59144.48872126946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 608644.6539999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608562.7999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 615198.704255321,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 615155.6028368777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604493.1037344359,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 604462.0331950209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610770.4660193868,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 610722.53814147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358005.36018175614,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 357979.719124329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616779.5112044698,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 616755.1120448173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2801813.7050146936,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2801599.1150442525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1167250.2465923105,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1167205.4522924393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3404903.690647566,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3404733.4532374153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5274.857819999852,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.504000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24148.756651691765,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 24147.28461184057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21323.761018932797,
            "unit": "ns/iter",
            "extra": "iterations: 39296\ncpu: 21322.65624999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20835.000922555042,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 20833.576023537626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21644.913108459976,
            "unit": "ns/iter",
            "extra": "iterations: 38807\ncpu: 21644.033292962573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50277.05570000194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50275.54000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 607642.0569999642,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607606.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504217.94300001464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504212.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 629692.5543785515,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 629641.7372881388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623613.9349363535,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 623584.9363507782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358870.15719467844,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 358863.7646110437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626009.22316381,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 625974.1525423698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2849669.574468124,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2849497.8723404254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1182935.0383663808,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1182827.103960396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5315.938261161566,
            "unit": "ns/iter",
            "extra": "iterations: 148950\ncpu: 5315.755622692195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24381.56302146739,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 24381.55824104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19527.802985075145,
            "unit": "ns/iter",
            "extra": "iterations: 42210\ncpu: 19527.230514096133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19089.237058987324,
            "unit": "ns/iter",
            "extra": "iterations: 43196\ncpu: 19088.941105658007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19262.0850165397,
            "unit": "ns/iter",
            "extra": "iterations: 42627\ncpu: 19261.287446923383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50281.95689999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50282.080000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602366.3060000218,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602331.300000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 620498.4435087905,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620456.7719298208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 621096.0781690084,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 621073.8028169015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 623653.4375441282,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 623631.6866619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 364194.2173021767,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 364167.240672407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620222.9936575064,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 620172.7272727304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.49153377254316,
            "unit": "ns/iter",
            "extra": "iterations: 2300139\ncpu: 304.47855542643146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2410.541555837388,
            "unit": "ns/iter",
            "extra": "iterations: 293244\ncpu: 2410.3466737597255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1843.179949836418,
            "unit": "ns/iter",
            "extra": "iterations: 380356\ncpu: 1843.1424770478145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1944.3492491250988,
            "unit": "ns/iter",
            "extra": "iterations: 362910\ncpu: 1944.2671736794382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1476.527531143436,
            "unit": "ns/iter",
            "extra": "iterations: 473936\ncpu: 1476.5092755140024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10864.906305253426,
            "unit": "ns/iter",
            "extra": "iterations: 65041\ncpu: 10864.437816146736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.41863905375,
            "unit": "ns/iter",
            "extra": "iterations: 22308\ncpu: 30878.465124619164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7215.257542659504,
            "unit": "ns/iter",
            "extra": "iterations: 97048\ncpu: 7214.877174181915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7291.523207319831,
            "unit": "ns/iter",
            "extra": "iterations: 96392\ncpu: 7291.023113951395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7229.041737157058,
            "unit": "ns/iter",
            "extra": "iterations: 96940\ncpu: 7229.041675263173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15250.32995960129,
            "unit": "ns/iter",
            "extra": "iterations: 46042\ncpu: 15250.045610529558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14136.553814852408,
            "unit": "ns/iter",
            "extra": "iterations: 49150\ncpu: 14135.54628687702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3216.2913337148784,
            "unit": "ns/iter",
            "extra": "iterations: 218375\ncpu: 3216.246823125323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15745.740120893865,
            "unit": "ns/iter",
            "extra": "iterations: 44336\ncpu: 15744.931883796262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13028.849436362587,
            "unit": "ns/iter",
            "extra": "iterations: 53758\ncpu: 13028.24323821567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12901.694689682527,
            "unit": "ns/iter",
            "extra": "iterations: 53123\ncpu: 12900.559079871067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13369.312468885219,
            "unit": "ns/iter",
            "extra": "iterations: 52226\ncpu: 13368.649714701538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30233.892875625508,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30231.455925478876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 136960.15743097174,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 136950.36224789455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118986.72577073563,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 118984.48305229045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118650.25547322865,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 118644.49309531771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 117387.73035805247,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117380.62107585403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69379.24606396856,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 69374.68066145212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 117709.16304715756,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 117699.52494061698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.2379115484387,
            "unit": "ns/iter",
            "extra": "iterations: 218018\ncpu: 3196.0081277692525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15803.958194731911,
            "unit": "ns/iter",
            "extra": "iterations: 44492\ncpu: 15802.908388024784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12964.972732694549,
            "unit": "ns/iter",
            "extra": "iterations: 53654\ncpu: 12964.537592723973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12892.008762362279,
            "unit": "ns/iter",
            "extra": "iterations: 54095\ncpu: 12891.760791200537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13565.555428679878,
            "unit": "ns/iter",
            "extra": "iterations: 52545\ncpu: 13564.959558473714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30470.575560879006,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 30468.677847963583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 140060.56133097035,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 140053.90824965655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118950.6326355572,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 118948.64447494781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126064.20865481508,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 125890.28849379471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118964.73061155438,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 118957.22582849266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69196.8421885802,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 69196.35895913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 117392.79247185627,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117385.98554864807 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397909522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 913.5472664664906,
            "unit": "ns/iter",
            "extra": "iterations: 766389\ncpu: 913.5363372908538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19004.44725239875,
            "unit": "ns/iter",
            "extra": "iterations: 44002\ncpu: 19004.211172219446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43648.90516652023,
            "unit": "ns/iter",
            "extra": "iterations: 20478\ncpu: 43647.543705439966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54138.657099997545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65813.81422399412,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 65811.93087404451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84019.18817557946,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 84019.11833818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98307.79152983856,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 98304.55214584984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115091.73194647179,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 115088.1012322777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147853.220060789,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 147842.9331306992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 741.6953994330644,
            "unit": "ns/iter",
            "extra": "iterations: 936515\ncpu: 741.6590230802514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 606.3574746730858,
            "unit": "ns/iter",
            "extra": "iterations: 1157268\ncpu: 606.3297352039463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 600.9004330718293,
            "unit": "ns/iter",
            "extra": "iterations: 1161932\ncpu: 600.8844751672211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.7745572325423,
            "unit": "ns/iter",
            "extra": "iterations: 1159017\ncpu: 603.7627575781892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1237.5496657673468,
            "unit": "ns/iter",
            "extra": "iterations: 564876\ncpu: 1237.460787854326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5100.651590000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5100.271999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23999.525642884186,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 23998.547531383174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21163.45396607845,
            "unit": "ns/iter",
            "extra": "iterations: 39384\ncpu: 21162.235933373984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20583.404830320353,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 20581.961852860994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21477.494990083855,
            "unit": "ns/iter",
            "extra": "iterations: 38823\ncpu: 21475.77724544729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59147.25368248921,
            "unit": "ns/iter",
            "extra": "iterations: 14053\ncpu: 59144.48872126946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 608644.6539999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608562.7999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 615198.704255321,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 615155.6028368777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604493.1037344359,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 604462.0331950209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610770.4660193868,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 610722.53814147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358005.36018175614,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 357979.719124329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616779.5112044698,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 616755.1120448173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2801813.7050146936,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2801599.1150442525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1167250.2465923105,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1167205.4522924393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3404903.690647566,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3404733.4532374153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5274.857819999852,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.504000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24148.756651691765,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 24147.28461184057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21323.761018932797,
            "unit": "ns/iter",
            "extra": "iterations: 39296\ncpu: 21322.65624999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20835.000922555042,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 20833.576023537626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21644.913108459976,
            "unit": "ns/iter",
            "extra": "iterations: 38807\ncpu: 21644.033292962573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50277.05570000194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50275.54000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 607642.0569999642,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607606.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504217.94300001464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504212.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 629692.5543785515,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 629641.7372881388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623613.9349363535,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 623584.9363507782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358870.15719467844,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 358863.7646110437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626009.22316381,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 625974.1525423698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2849669.574468124,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2849497.8723404254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1182935.0383663808,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1182827.103960396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5315.938261161566,
            "unit": "ns/iter",
            "extra": "iterations: 148950\ncpu: 5315.755622692195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24381.56302146739,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 24381.55824104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19527.802985075145,
            "unit": "ns/iter",
            "extra": "iterations: 42210\ncpu: 19527.230514096133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19089.237058987324,
            "unit": "ns/iter",
            "extra": "iterations: 43196\ncpu: 19088.941105658007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19262.0850165397,
            "unit": "ns/iter",
            "extra": "iterations: 42627\ncpu: 19261.287446923383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50281.95689999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50282.080000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602366.3060000218,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602331.300000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 620498.4435087905,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620456.7719298208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 621096.0781690084,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 621073.8028169015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 623653.4375441282,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 623631.6866619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 364194.2173021767,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 364167.240672407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620222.9936575064,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 620172.7272727304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.49153377254316,
            "unit": "ns/iter",
            "extra": "iterations: 2300139\ncpu: 304.47855542643146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2410.541555837388,
            "unit": "ns/iter",
            "extra": "iterations: 293244\ncpu: 2410.3466737597255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1843.179949836418,
            "unit": "ns/iter",
            "extra": "iterations: 380356\ncpu: 1843.1424770478145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1944.3492491250988,
            "unit": "ns/iter",
            "extra": "iterations: 362910\ncpu: 1944.2671736794382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1476.527531143436,
            "unit": "ns/iter",
            "extra": "iterations: 473936\ncpu: 1476.5092755140024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10864.906305253426,
            "unit": "ns/iter",
            "extra": "iterations: 65041\ncpu: 10864.437816146736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.41863905375,
            "unit": "ns/iter",
            "extra": "iterations: 22308\ncpu: 30878.465124619164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7215.257542659504,
            "unit": "ns/iter",
            "extra": "iterations: 97048\ncpu: 7214.877174181915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7291.523207319831,
            "unit": "ns/iter",
            "extra": "iterations: 96392\ncpu: 7291.023113951395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7229.041737157058,
            "unit": "ns/iter",
            "extra": "iterations: 96940\ncpu: 7229.041675263173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15250.32995960129,
            "unit": "ns/iter",
            "extra": "iterations: 46042\ncpu: 15250.045610529558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14136.553814852408,
            "unit": "ns/iter",
            "extra": "iterations: 49150\ncpu: 14135.54628687702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3216.2913337148784,
            "unit": "ns/iter",
            "extra": "iterations: 218375\ncpu: 3216.246823125323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15745.740120893865,
            "unit": "ns/iter",
            "extra": "iterations: 44336\ncpu: 15744.931883796262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13028.849436362587,
            "unit": "ns/iter",
            "extra": "iterations: 53758\ncpu: 13028.24323821567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12901.694689682527,
            "unit": "ns/iter",
            "extra": "iterations: 53123\ncpu: 12900.559079871067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13369.312468885219,
            "unit": "ns/iter",
            "extra": "iterations: 52226\ncpu: 13368.649714701538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30233.892875625508,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30231.455925478876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 136960.15743097174,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 136950.36224789455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118986.72577073563,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 118984.48305229045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118650.25547322865,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 118644.49309531771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 117387.73035805247,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117380.62107585403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69379.24606396856,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 69374.68066145212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 117709.16304715756,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 117699.52494061698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.2379115484387,
            "unit": "ns/iter",
            "extra": "iterations: 218018\ncpu: 3196.0081277692525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15803.958194731911,
            "unit": "ns/iter",
            "extra": "iterations: 44492\ncpu: 15802.908388024784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12964.972732694549,
            "unit": "ns/iter",
            "extra": "iterations: 53654\ncpu: 12964.537592723973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12892.008762362279,
            "unit": "ns/iter",
            "extra": "iterations: 54095\ncpu: 12891.760791200537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13565.555428679878,
            "unit": "ns/iter",
            "extra": "iterations: 52545\ncpu: 13564.959558473714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30470.575560879006,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 30468.677847963583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 140060.56133097035,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 140053.90824965655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118950.6326355572,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 118948.64447494781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126064.20865481508,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 125890.28849379471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118964.73061155438,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 118957.22582849266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69196.8421885802,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 69196.35895913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 117392.79247185627,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117385.98554864807 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409123508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 825.6248512228249,
            "unit": "ns/iter",
            "extra": "iterations: 846904\ncpu: 825.6045549436536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17753.946206139095,
            "unit": "ns/iter",
            "extra": "iterations: 47366\ncpu: 17753.804416670184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41224.25217549613,
            "unit": "ns/iter",
            "extra": "iterations: 21949\ncpu: 41224.032985557445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50930.056000004246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50929.54000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 61963.07936133491,
            "unit": "ns/iter",
            "extra": "iterations: 12714\ncpu: 61962.01038225581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 77054.54696083348,
            "unit": "ns/iter",
            "extra": "iterations: 11286\ncpu: 77050.76200602509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 93570.21943138304,
            "unit": "ns/iter",
            "extra": "iterations: 9356\ncpu: 93548.50363403164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121660.66003975912,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 121658.87176938362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 136276.86057920777,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 136272.2899192909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 665.1291355441183,
            "unit": "ns/iter",
            "extra": "iterations: 1030336\ncpu: 665.1111870302502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 543.3537854794741,
            "unit": "ns/iter",
            "extra": "iterations: 1295186\ncpu: 543.3333127442702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 542.2166761768342,
            "unit": "ns/iter",
            "extra": "iterations: 1263563\ncpu: 542.1817511275666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 549.544599660119,
            "unit": "ns/iter",
            "extra": "iterations: 1273855\ncpu: 549.5386837591407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1184.7963887242968,
            "unit": "ns/iter",
            "extra": "iterations: 590650\ncpu: 1184.7335985778373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5391.492304917708,
            "unit": "ns/iter",
            "extra": "iterations: 149706\ncpu: 5391.516038101349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23041.20086632985,
            "unit": "ns/iter",
            "extra": "iterations: 36014\ncpu: 23040.362081412775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18494.23031840859,
            "unit": "ns/iter",
            "extra": "iterations: 44534\ncpu: 18494.287510666018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18373.701322786637,
            "unit": "ns/iter",
            "extra": "iterations: 44754\ncpu: 18372.898511864845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18746.40043974781,
            "unit": "ns/iter",
            "extra": "iterations: 44571\ncpu: 18731.978192098013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55913.20048003347,
            "unit": "ns/iter",
            "extra": "iterations: 14999\ncpu: 55908.24054937011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 562189.4619999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562162.3999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 575313.560686011,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 575274.3403693936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 576103.9788639196,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 576062.9458388374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 573545.3703457497,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 573548.0718085101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 349661.87420128897,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 349648.60223642143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 566038.4221635836,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 566013.5224274402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2750210.620991287,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2749989.212827984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1169599.0150376058,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1169523.934837094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3399667.2733812407,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3399367.266187055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5374.887473112533,
            "unit": "ns/iter",
            "extra": "iterations: 146445\ncpu: 5374.318686196188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23457.878304116213,
            "unit": "ns/iter",
            "extra": "iterations: 32573\ncpu: 23456.893746354315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 19189.612137446333,
            "unit": "ns/iter",
            "extra": "iterations: 43304\ncpu: 19188.303620912586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18308.042251966486,
            "unit": "ns/iter",
            "extra": "iterations: 45276\ncpu: 18307.131813764525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 19057.051024858818,
            "unit": "ns/iter",
            "extra": "iterations: 43567\ncpu: 19055.677462299376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 56038.27845756887,
            "unit": "ns/iter",
            "extra": "iterations: 15119\ncpu: 56033.9969574707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 574524.4070000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574450.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 601255.887895462,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 601208.3906464903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 588791.0273972625,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 588782.6712328786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 593392.5806233003,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 593342.2764227674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 351467.64967896545,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 351440.8507223122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 584568.9163292891,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 584561.9433198408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2850719.5891239294,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2850442.900302124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1186127.6801007092,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1186063.8539042794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5561.694033756989,
            "unit": "ns/iter",
            "extra": "iterations: 147111\ncpu: 5561.291813664507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22954.980249987137,
            "unit": "ns/iter",
            "extra": "iterations: 36962\ncpu: 22953.132947351405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18381.76833019729,
            "unit": "ns/iter",
            "extra": "iterations: 45185\ncpu: 18380.863118291585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18264.56126722379,
            "unit": "ns/iter",
            "extra": "iterations: 46085\ncpu: 18262.451990886442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18505.51522258617,
            "unit": "ns/iter",
            "extra": "iterations: 45196\ncpu: 18504.28356491716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54808.51967234149,
            "unit": "ns/iter",
            "extra": "iterations: 15504\ncpu: 54805.83075335378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 591372.894000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591332.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 598662.6363018566,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 598629.4357579863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 597000.9265305956,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 596974.8979591838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 607343.8441734471,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 607308.739837402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 358514.10302535264,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 358492.84546197957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 591462.6379076244,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 591425.6793478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.8835437366869,
            "unit": "ns/iter",
            "extra": "iterations: 2281174\ncpu: 303.8633615848694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2141.3520647448345,
            "unit": "ns/iter",
            "extra": "iterations: 327934\ncpu: 2141.22536851927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1583.9377064245402,
            "unit": "ns/iter",
            "extra": "iterations: 439628\ncpu: 1583.8106308060378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1578.5797286741777,
            "unit": "ns/iter",
            "extra": "iterations: 444263\ncpu: 1578.5865579622875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1306.8913807663082,
            "unit": "ns/iter",
            "extra": "iterations: 537658\ncpu: 1306.815112952854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9759.181524988076,
            "unit": "ns/iter",
            "extra": "iterations: 71935\ncpu: 9758.597344825148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 28813.796454599087,
            "unit": "ns/iter",
            "extra": "iterations: 25385\ncpu: 28810.344691747054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 6764.761577729195,
            "unit": "ns/iter",
            "extra": "iterations: 103237\ncpu: 6764.250220366717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 6730.518586110371,
            "unit": "ns/iter",
            "extra": "iterations: 104110\ncpu: 6730.174815099367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 6840.83436115653,
            "unit": "ns/iter",
            "extra": "iterations: 103617\ncpu: 6839.9191252401015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 13094.58561083416,
            "unit": "ns/iter",
            "extra": "iterations: 53165\ncpu: 13094.43618922213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13452.903702135996,
            "unit": "ns/iter",
            "extra": "iterations: 51943\ncpu: 13451.756733342425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2993.06437166096,
            "unit": "ns/iter",
            "extra": "iterations: 233783\ncpu: 2993.0183118533187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 14886.616075992653,
            "unit": "ns/iter",
            "extra": "iterations: 46952\ncpu: 14885.276452547521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 11849.380671713556,
            "unit": "ns/iter",
            "extra": "iterations: 59043\ncpu: 11848.617109564117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 11764.330164595558,
            "unit": "ns/iter",
            "extra": "iterations: 59540\ncpu: 11763.557272421887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12548.375373441038,
            "unit": "ns/iter",
            "extra": "iterations: 55899\ncpu: 12547.15290076746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29821.68881982267,
            "unit": "ns/iter",
            "extra": "iterations: 23488\ncpu: 29820.244380109205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 130897.26092689956,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 130888.24415976122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 110139.49269609232,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 110137.98031121114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 111553.05534632133,
            "unit": "ns/iter",
            "extra": "iterations: 6107\ncpu: 111541.19862452938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 112228.32832240869,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 112220.96593635107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 65903.8826516223,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65900.03761165979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 110515.14096846424,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 110502.2777954771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2919.307882337884,
            "unit": "ns/iter",
            "extra": "iterations: 240043\ncpu: 2919.1748978308615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14474.538642945017,
            "unit": "ns/iter",
            "extra": "iterations: 48340\ncpu: 14473.802234174469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11630.868965631937,
            "unit": "ns/iter",
            "extra": "iterations: 60259\ncpu: 11630.705786687597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11594.275412408564,
            "unit": "ns/iter",
            "extra": "iterations: 59892\ncpu: 11593.351365791801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12501.394797532927,
            "unit": "ns/iter",
            "extra": "iterations: 55935\ncpu: 12500.570304817911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29704.827764149497,
            "unit": "ns/iter",
            "extra": "iterations: 23642\ncpu: 29702.867777683954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 127331.31070972387,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 127321.18226600996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 110095.74036798411,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 110086.25570058043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 110635.09406565908,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 110628.89835858488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 110529.04463018812,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 110526.33653997933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 65531.08791933701,
            "unit": "ns/iter",
            "extra": "iterations: 10612\ncpu: 65525.76328684384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 108816.0622568063,
            "unit": "ns/iter",
            "extra": "iterations: 6425\ncpu: 108806.07003891234 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412537129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 778.8330381604353,
            "unit": "ns/iter",
            "extra": "iterations: 896085\ncpu: 778.7880614004254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11431.722671897192,
            "unit": "ns/iter",
            "extra": "iterations: 72398\ncpu: 11431.397276167852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25050.782371130408,
            "unit": "ns/iter",
            "extra": "iterations: 33309\ncpu: 25049.359032093427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39780.9892663792,
            "unit": "ns/iter",
            "extra": "iterations: 21428\ncpu: 39779.027440731756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49690.63751560723,
            "unit": "ns/iter",
            "extra": "iterations: 16020\ncpu: 49687.58426966291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51388.07839999799,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51383.76999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62565.65140000135,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62564.319999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72354.5385191323,
            "unit": "ns/iter",
            "extra": "iterations: 12020\ncpu: 72352.62063227953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83102.21949601955,
            "unit": "ns/iter",
            "extra": "iterations: 10556\ncpu: 83099.61159530122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 658.7712273677846,
            "unit": "ns/iter",
            "extra": "iterations: 1071977\ncpu: 658.7422118198436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 550.8112630061138,
            "unit": "ns/iter",
            "extra": "iterations: 1273248\ncpu: 550.7789527256283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 544.4390516904265,
            "unit": "ns/iter",
            "extra": "iterations: 1290085\ncpu: 544.4178484363428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 551.8104213350084,
            "unit": "ns/iter",
            "extra": "iterations: 1267400\ncpu: 551.7945400031555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1056.118953751623,
            "unit": "ns/iter",
            "extra": "iterations: 668369\ncpu: 1054.2638871641261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4016.0357509790065,
            "unit": "ns/iter",
            "extra": "iterations: 196610\ncpu: 4015.8338843395513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17870.68400364819,
            "unit": "ns/iter",
            "extra": "iterations: 46048\ncpu: 17869.56219596944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14720.943437260592,
            "unit": "ns/iter",
            "extra": "iterations: 56097\ncpu: 14719.963634418953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14791.338000429845,
            "unit": "ns/iter",
            "extra": "iterations: 55852\ncpu: 14790.392465802463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14541.154723613847,
            "unit": "ns/iter",
            "extra": "iterations: 56895\ncpu: 14540.082608313569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37084.47636087165,
            "unit": "ns/iter",
            "extra": "iterations: 22357\ncpu: 37082.13087623561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 495540.53318207397,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 495501.361315938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 409543.50805688085,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 409514.17061611474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410085.59164292336,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 410055.5555555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426397.6021863219,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 426375.9980988599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257951.43161271486,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 257928.78390201242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 406507.26407130115,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 406479.0337711074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2057445.4691629573,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2057314.7577092513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 819578.6541484852,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 819496.5065502176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2596355.227528,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2596073.5955056176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3963.5069050287234,
            "unit": "ns/iter",
            "extra": "iterations: 198913\ncpu: 3963.2477515295523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17624.734095238276,
            "unit": "ns/iter",
            "extra": "iterations: 47250\ncpu: 17623.616931216933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14299.001314923531,
            "unit": "ns/iter",
            "extra": "iterations: 57798\ncpu: 14298.072597667731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14636.47454257571,
            "unit": "ns/iter",
            "extra": "iterations: 56840\ncpu: 14635.691414496912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14044.984902384585,
            "unit": "ns/iter",
            "extra": "iterations: 58751\ncpu: 14044.239246991592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37506.991211862514,
            "unit": "ns/iter",
            "extra": "iterations: 22189\ncpu: 37504.97543828042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507447.5943122306,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 507416.1926871724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416815.762452086,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 416778.591954023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 417553.9698852848,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 417532.64818355744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 413857.70302171155,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 413822.14353163494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249905.26230440623,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 249886.42958748215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 409443.86318760517,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 409421.57968970604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2055194.5685392483,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2055022.4719101263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 809616.6212251909,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 809556.859361518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3891.8944652749,
            "unit": "ns/iter",
            "extra": "iterations: 205629\ncpu: 3891.6266674447675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16988.715164989015,
            "unit": "ns/iter",
            "extra": "iterations: 48579\ncpu: 16987.80543033006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14279.828914866,
            "unit": "ns/iter",
            "extra": "iterations: 57486\ncpu: 14279.144487353502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14187.382466732497,
            "unit": "ns/iter",
            "extra": "iterations: 57639\ncpu: 14187.16147053209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14014.08817330555,
            "unit": "ns/iter",
            "extra": "iterations: 57886\ncpu: 14013.592233009806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37821.679800519996,
            "unit": "ns/iter",
            "extra": "iterations: 22258\ncpu: 37819.058316111186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 491921.1894322739,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 491883.9797639136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 409945.514031814,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 409919.8316183338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 410312.4195510061,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 410290.78578110406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 408299.8730679178,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 408275.5035128815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252119.60588068355,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 252104.94769578765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405189.70580110746,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 405151.1049723755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.3932169148342,
            "unit": "ns/iter",
            "extra": "iterations: 2168040\ncpu: 323.3759985978137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1709.0910659915887,
            "unit": "ns/iter",
            "extra": "iterations: 410219\ncpu: 1708.992757527075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1393.534732096957,
            "unit": "ns/iter",
            "extra": "iterations: 500013\ncpu: 1393.4723697183913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1337.056932237238,
            "unit": "ns/iter",
            "extra": "iterations: 524167\ncpu: 1336.963219737221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1134.20023042561,
            "unit": "ns/iter",
            "extra": "iterations: 617119\ncpu: 1134.1880577327831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6887.016038272158,
            "unit": "ns/iter",
            "extra": "iterations: 102006\ncpu: 6886.578240495624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20285.410807394845,
            "unit": "ns/iter",
            "extra": "iterations: 37974\ncpu: 20283.867909622448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4892.939859807705,
            "unit": "ns/iter",
            "extra": "iterations: 143232\ncpu: 4892.739052725592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4917.913613098579,
            "unit": "ns/iter",
            "extra": "iterations: 142429\ncpu: 4917.696536519923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4901.475153865948,
            "unit": "ns/iter",
            "extra": "iterations: 142819\ncpu: 4901.2022209929755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10432.829906374593,
            "unit": "ns/iter",
            "extra": "iterations: 66969\ncpu: 10432.335856888982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9273.19224247506,
            "unit": "ns/iter",
            "extra": "iterations: 75488\ncpu: 9272.461848240775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2401.6895758708133,
            "unit": "ns/iter",
            "extra": "iterations: 290902\ncpu: 2401.6641343133056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11848.091574781656,
            "unit": "ns/iter",
            "extra": "iterations: 59132\ncpu: 11847.921599134128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9491.404020059863,
            "unit": "ns/iter",
            "extra": "iterations: 73979\ncpu: 9490.70006353152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9419.946624529379,
            "unit": "ns/iter",
            "extra": "iterations: 74360\ncpu: 9419.396180742193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10075.912321933738,
            "unit": "ns/iter",
            "extra": "iterations: 69356\ncpu: 10075.178787703937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24602.58334505446,
            "unit": "ns/iter",
            "extra": "iterations: 28436\ncpu: 24601.153467435674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100556.86785405985,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 100550.38781959076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86618.58114794911,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 86616.41514101932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86767.3297411148,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86760.52273008828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86534.32925321374,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86529.4015825927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53680.016782898056,
            "unit": "ns/iter",
            "extra": "iterations: 13049\ncpu: 53677.699440571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85652.99008203292,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 85651.9774703086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2307.3147574649897,
            "unit": "ns/iter",
            "extra": "iterations: 302884\ncpu: 2307.2866179791818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11419.254996329793,
            "unit": "ns/iter",
            "extra": "iterations: 61295\ncpu: 11418.840035892137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9223.454781383605,
            "unit": "ns/iter",
            "extra": "iterations: 75909\ncpu: 9222.92218314029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9128.903068686575,
            "unit": "ns/iter",
            "extra": "iterations: 76580\ncpu: 9128.410812222424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9687.961697521932,
            "unit": "ns/iter",
            "extra": "iterations: 72058\ncpu: 9687.197812872964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23925.230748213915,
            "unit": "ns/iter",
            "extra": "iterations: 29283\ncpu: 23922.84260492396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98551.5892706253,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 98550.47873838354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84042.16983173284,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84040.67307692386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84531.2318280593,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84525.64597923249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83550.77475345541,
            "unit": "ns/iter",
            "extra": "iterations: 7605\ncpu: 83540.28928336661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53642.68412200645,
            "unit": "ns/iter",
            "extra": "iterations: 13081\ncpu: 53638.11635196085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85355.79205864346,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 85353.03604153928 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416003771,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 768.4586875052054,
            "unit": "ns/iter",
            "extra": "iterations: 911516\ncpu: 768.4391716656648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11255.806693080687,
            "unit": "ns/iter",
            "extra": "iterations: 72941\ncpu: 11255.39408563085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24938.529376589442,
            "unit": "ns/iter",
            "extra": "iterations: 33445\ncpu: 24938.379428913133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39389.542622178385,
            "unit": "ns/iter",
            "extra": "iterations: 21280\ncpu: 39388.12969924812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49845.657478115325,
            "unit": "ns/iter",
            "extra": "iterations: 16107\ncpu: 49844.52722418824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50965.24809999891,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50964.27999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61667.65859999827,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61666.60999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71718.57214461683,
            "unit": "ns/iter",
            "extra": "iterations: 12170\ncpu: 71715.3245686113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82473.41057792243,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 82471.70736306215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 650.5589868736347,
            "unit": "ns/iter",
            "extra": "iterations: 1077299\ncpu: 650.5376873087226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 554.20609007572,
            "unit": "ns/iter",
            "extra": "iterations: 1263137\ncpu: 554.1812170809663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 541.8634579969765,
            "unit": "ns/iter",
            "extra": "iterations: 1290753\ncpu: 541.8408479391495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 557.7282362663391,
            "unit": "ns/iter",
            "extra": "iterations: 1270600\ncpu: 557.709979537227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1047.4472967007334,
            "unit": "ns/iter",
            "extra": "iterations: 668165\ncpu: 1047.390240434623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4019.4516647013083,
            "unit": "ns/iter",
            "extra": "iterations: 199285\ncpu: 4019.3030082545124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17730.849573387408,
            "unit": "ns/iter",
            "extra": "iterations: 46295\ncpu: 17730.465493033804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14641.839200625225,
            "unit": "ns/iter",
            "extra": "iterations: 56244\ncpu: 14641.53687504446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14787.84266786071,
            "unit": "ns/iter",
            "extra": "iterations: 55850\ncpu: 14787.552372426122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14430.749081641186,
            "unit": "ns/iter",
            "extra": "iterations: 56895\ncpu: 14430.65823007292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37435.52728739089,
            "unit": "ns/iter",
            "extra": "iterations: 22318\ncpu: 37434.69844968193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490827.8301026267,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 490796.2941847203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 406769.890654183,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 406767.00934579567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 406977.02647754666,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 406968.6524822689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 409007.6888260414,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 408994.57802923134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 254637.73092722293,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 254632.33568075113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 404527.53327084624,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 404512.5585754465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2041048.3793860746,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2040925.2192982465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 847253.2671957489,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 847192.6807760143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2570862.091666647,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2570668.611111109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4112.13962039212,
            "unit": "ns/iter",
            "extra": "iterations: 199627\ncpu: 4112.090548873646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17799.820581321335,
            "unit": "ns/iter",
            "extra": "iterations: 46790\ncpu: 17799.69651634964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14311.284520493771,
            "unit": "ns/iter",
            "extra": "iterations: 57799\ncpu: 14310.437896849415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14802.376411027293,
            "unit": "ns/iter",
            "extra": "iterations: 55899\ncpu: 14802.048337179558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14268.978628781615,
            "unit": "ns/iter",
            "extra": "iterations: 57788\ncpu: 14268.159479476679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37026.46551647319,
            "unit": "ns/iter",
            "extra": "iterations: 22431\ncpu: 37026.56591324527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 502635.18520675204,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 502623.5876528816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 417398.64163499605,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 417393.5361216709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 415459.4635193103,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 415456.6523605149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 415401.5415486148,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 415386.11898017116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251090.07375397458,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 251087.78450014387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 414241.6013163981,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 414237.6586741902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2057077.4040179327,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2056886.1607142792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 812886.5785340285,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 812872.9493891806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3923.19088504976,
            "unit": "ns/iter",
            "extra": "iterations: 203819\ncpu: 3923.103832321809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17216.286888145227,
            "unit": "ns/iter",
            "extra": "iterations: 48071\ncpu: 17216.16775186702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14418.980611590745,
            "unit": "ns/iter",
            "extra": "iterations: 56116\ncpu: 14418.623921876066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14425.421919245151,
            "unit": "ns/iter",
            "extra": "iterations: 57210\ncpu: 14425.315504282375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14501.089397052856,
            "unit": "ns/iter",
            "extra": "iterations: 56937\ncpu: 14500.799128861703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37365.217167878676,
            "unit": "ns/iter",
            "extra": "iterations: 22379\ncpu: 37364.39519192107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 510029.4912587659,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 509994.17249417544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 413953.53091080097,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 413940.8211420467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 426436.8345935739,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 426423.156899812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 412429.01323251025,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 412403.3081285426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253780.9771147283,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 253775.40556199398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 411431.2773345888,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 411415.86109807494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.5938032701313,
            "unit": "ns/iter",
            "extra": "iterations: 2226271\ncpu: 314.5916197983106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1645.588648295111,
            "unit": "ns/iter",
            "extra": "iterations: 423443\ncpu: 1645.542139083662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1382.8485590141513,
            "unit": "ns/iter",
            "extra": "iterations: 500109\ncpu: 1382.8147463852915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1415.2160502602712,
            "unit": "ns/iter",
            "extra": "iterations: 513487\ncpu: 1415.1291074555033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1129.0727795048342,
            "unit": "ns/iter",
            "extra": "iterations: 618567\ncpu: 1129.0435797577304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6832.742076598784,
            "unit": "ns/iter",
            "extra": "iterations: 102639\ncpu: 6832.425296427254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20983.017783899293,
            "unit": "ns/iter",
            "extra": "iterations: 33401\ncpu: 20982.323882518373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4952.375534717813,
            "unit": "ns/iter",
            "extra": "iterations: 141196\ncpu: 4952.100626080073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5007.671650000134,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5007.647000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4984.808356909308,
            "unit": "ns/iter",
            "extra": "iterations: 141033\ncpu: 4984.563187339209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10801.185917060877,
            "unit": "ns/iter",
            "extra": "iterations: 64674\ncpu: 10800.915360113862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9446.685886437384,
            "unit": "ns/iter",
            "extra": "iterations: 74021\ncpu: 9446.346307129128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2379.1617581984456,
            "unit": "ns/iter",
            "extra": "iterations: 293778\ncpu: 2379.1287979358317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11949.821924585516,
            "unit": "ns/iter",
            "extra": "iterations: 58610\ncpu: 11949.716771882016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9695.604428116514,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9695.430262069234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9586.236762771563,
            "unit": "ns/iter",
            "extra": "iterations: 72976\ncpu: 9586.169425564593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10041.877398444494,
            "unit": "ns/iter",
            "extra": "iterations: 69420\ncpu: 10041.815038893636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24795.656048700104,
            "unit": "ns/iter",
            "extra": "iterations: 28254\ncpu: 24795.483825298692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101531.20406386505,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 101528.86792452916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88047.8632081425,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 88046.40120587876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 88449.40792305335,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 88449.8164789266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87880.91815214575,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 87878.50866181316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54686.96986493604,
            "unit": "ns/iter",
            "extra": "iterations: 12809\ncpu: 54686.54852057139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87190.78904588972,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 87189.97123921564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2303.2460982892007,
            "unit": "ns/iter",
            "extra": "iterations: 303777\ncpu: 2303.1799642500646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11586.590588702904,
            "unit": "ns/iter",
            "extra": "iterations: 60438\ncpu: 11586.642509679248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9169.705293860803,
            "unit": "ns/iter",
            "extra": "iterations: 75767\ncpu: 9169.647735821654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9038.825665672355,
            "unit": "ns/iter",
            "extra": "iterations: 77403\ncpu: 9038.758187667048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9637.713897094107,
            "unit": "ns/iter",
            "extra": "iterations: 72785\ncpu: 9637.635501820409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23711.503821957805,
            "unit": "ns/iter",
            "extra": "iterations: 29566\ncpu: 23711.293377528043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100403.41635473659,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 100402.51943564489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 88980.96508449138,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 88980.41749503098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85622.12745218964,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 85621.14743985159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85902.08935805164,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 85900.93285872089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53993.877267796655,
            "unit": "ns/iter",
            "extra": "iterations: 12898\ncpu: 53992.805086060005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86305.76904116539,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 86305.01602169099 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418339340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 777.8830344719918,
            "unit": "ns/iter",
            "extra": "iterations: 898410\ncpu: 777.8798098863549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11595.496101023962,
            "unit": "ns/iter",
            "extra": "iterations: 71429\ncpu: 11595.137829173025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25346.994604481624,
            "unit": "ns/iter",
            "extra": "iterations: 32805\ncpu: 25347.136107300717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40016.33294730981,
            "unit": "ns/iter",
            "extra": "iterations: 20724\ncpu: 40015.56649295505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50444.94149374974,
            "unit": "ns/iter",
            "extra": "iterations: 15759\ncpu: 50443.0737990989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52087.39309999828,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52085.02 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63252.08383537557,
            "unit": "ns/iter",
            "extra": "iterations: 13777\ncpu: 63251.477099513664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73163.88133882688,
            "unit": "ns/iter",
            "extra": "iterations: 11891\ncpu: 73160.54158607354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83879.400057773,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 83878.97169266327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 653.9710161548785,
            "unit": "ns/iter",
            "extra": "iterations: 1072494\ncpu: 653.9255231264699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 561.3130961821707,
            "unit": "ns/iter",
            "extra": "iterations: 1245844\ncpu: 561.2965186652582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 547.4730575857493,
            "unit": "ns/iter",
            "extra": "iterations: 1277521\ncpu: 547.4681825191135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 551.8385001415614,
            "unit": "ns/iter",
            "extra": "iterations: 1271320\ncpu: 551.8246389579339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1068.299842325115,
            "unit": "ns/iter",
            "extra": "iterations: 653877\ncpu: 1068.3070363386385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3738.5859241976823,
            "unit": "ns/iter",
            "extra": "iterations: 212606\ncpu: 3738.3690958862894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17270.938013821287,
            "unit": "ns/iter",
            "extra": "iterations: 47317\ncpu: 17270.820212608585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14549.552375724279,
            "unit": "ns/iter",
            "extra": "iterations: 56467\ncpu: 14548.956027414253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14685.123146091273,
            "unit": "ns/iter",
            "extra": "iterations: 55828\ncpu: 14685.217095364333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14564.586778914483,
            "unit": "ns/iter",
            "extra": "iterations: 56304\ncpu: 14564.036302926936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38205.873838831576,
            "unit": "ns/iter",
            "extra": "iterations: 21853\ncpu: 38205.58733354694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511367.7696726163,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 511206.4905226875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 406414.6457062464,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 406397.9352416701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 409286.67810150015,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 409269.12593984953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 405742.499061934,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 405718.5741088168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 254727.20214617756,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 254719.22853828347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 406102.29488371516,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 406073.44186046475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2058315.7126948808,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2058197.7728285086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 822644.752622418,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 820947.0279720264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578661.9804469156,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2578462.849162017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3836.041266954935,
            "unit": "ns/iter",
            "extra": "iterations: 203480\ncpu: 3836.063986632592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17157.319778034504,
            "unit": "ns/iter",
            "extra": "iterations: 48296\ncpu: 17156.64444260391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14504.150614556602,
            "unit": "ns/iter",
            "extra": "iterations: 57033\ncpu: 14503.976645100192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14471.34934345154,
            "unit": "ns/iter",
            "extra": "iterations: 57193\ncpu: 14471.022677600444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14504.376839625178,
            "unit": "ns/iter",
            "extra": "iterations: 56873\ncpu: 14504.177729326684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37513.0337929176,
            "unit": "ns/iter",
            "extra": "iterations: 22194\ncpu: 37512.04830134276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507754.9507531902,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 507758.458864426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 415481.0757793873,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 415465.03597122047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 415956.9326695148,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 415943.81223328324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 412315.75562852505,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 412313.2739212009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 247440.79875460832,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 247433.00311350063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 409751.31707318,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 409753.7992495323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2063082.3656884143,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2062843.5665914314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 844920.5936651559,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 844896.6515837138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3996.3756466832183,
            "unit": "ns/iter",
            "extra": "iterations: 199866\ncpu: 3996.282008946026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17496.36887231265,
            "unit": "ns/iter",
            "extra": "iterations: 46653\ncpu: 17496.18030994797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14328.496546217864,
            "unit": "ns/iter",
            "extra": "iterations: 57618\ncpu: 14328.225554514276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14236.706148499914,
            "unit": "ns/iter",
            "extra": "iterations: 58128\ncpu: 14236.792939719322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14266.742911903686,
            "unit": "ns/iter",
            "extra": "iterations: 57914\ncpu: 14266.263770418203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36861.90418871352,
            "unit": "ns/iter",
            "extra": "iterations: 22680\ncpu: 36861.27425044102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500312.8516388733,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 500306.09545716236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408488.1300469531,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 408474.27230047015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 405914.1778823633,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 405916.84705882403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 407573.11753642315,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 407560.69581570255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 250297.9139508252,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 250296.36935391792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 400891.80129990756,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 400889.8328690832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.5106778714923,
            "unit": "ns/iter",
            "extra": "iterations: 2218326\ncpu: 317.4926498630051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1693.5810460512007,
            "unit": "ns/iter",
            "extra": "iterations: 412389\ncpu: 1693.5674811888787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1282.9133545543345,
            "unit": "ns/iter",
            "extra": "iterations: 544114\ncpu: 1282.894393454315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1380.9313380844158,
            "unit": "ns/iter",
            "extra": "iterations: 501224\ncpu: 1380.88539255901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1132.2515181713036,
            "unit": "ns/iter",
            "extra": "iterations: 620154\ncpu: 1132.2581165323404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6807.689053328926,
            "unit": "ns/iter",
            "extra": "iterations: 103246\ncpu: 6807.444356197789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20342.396881727345,
            "unit": "ns/iter",
            "extra": "iterations: 34378\ncpu: 20342.533015300625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4866.405383638208,
            "unit": "ns/iter",
            "extra": "iterations: 144029\ncpu: 4866.128349151943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4879.621240542814,
            "unit": "ns/iter",
            "extra": "iterations: 143405\ncpu: 4879.582301872267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4899.998743930121,
            "unit": "ns/iter",
            "extra": "iterations: 142508\ncpu: 4899.982457125193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10235.731374990879,
            "unit": "ns/iter",
            "extra": "iterations: 68255\ncpu: 10235.641344956442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9204.245816435026,
            "unit": "ns/iter",
            "extra": "iterations: 76191\ncpu: 9203.807536323264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2370.3780529849946,
            "unit": "ns/iter",
            "extra": "iterations: 295858\ncpu: 2370.3925531842933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11713.308842052104,
            "unit": "ns/iter",
            "extra": "iterations: 59545\ncpu: 11712.904525988879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9439.272688298262,
            "unit": "ns/iter",
            "extra": "iterations: 74642\ncpu: 9439.32504488087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9360.038854259878,
            "unit": "ns/iter",
            "extra": "iterations: 74921\ncpu: 9359.844369402572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9970.292296062002,
            "unit": "ns/iter",
            "extra": "iterations: 70107\ncpu: 9970.11140114396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24631.26317458138,
            "unit": "ns/iter",
            "extra": "iterations: 28388\ncpu: 24630.805269832177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100284.7451205467,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 100281.37198622273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87202.06384824836,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 87202.50433920143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87925.56931190107,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87922.35057759893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87496.42582417351,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 87495.90409590385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53608.15751224196,
            "unit": "ns/iter",
            "extra": "iterations: 13072\ncpu: 53608.522031823624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86976.87687538989,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 86972.54804711735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2322.848670275317,
            "unit": "ns/iter",
            "extra": "iterations: 301679\ncpu: 2322.8610542994306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11696.824799558872,
            "unit": "ns/iter",
            "extra": "iterations: 59743\ncpu: 11696.312538707469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9322.104971199411,
            "unit": "ns/iter",
            "extra": "iterations: 75173\ncpu: 9322.168863820756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9330.122644155863,
            "unit": "ns/iter",
            "extra": "iterations: 74867\ncpu: 9330.031923277213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9760.604896421595,
            "unit": "ns/iter",
            "extra": "iterations: 71685\ncpu: 9760.514752040097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23785.70089771403,
            "unit": "ns/iter",
            "extra": "iterations: 29408\ncpu: 23785.85418933644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100067.75892602533,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 100062.03941730912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85022.85192821265,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 85023.40528741249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85471.72170731911,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85468.30487804972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85855.1135477618,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85854.37378167585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54160.71876694215,
            "unit": "ns/iter",
            "extra": "iterations: 12911\ncpu: 54161.01773681333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86254.9414370031,
            "unit": "ns/iter",
            "extra": "iterations: 8128\ncpu: 86250.98425196852 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420956103,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 777.6011487690608,
            "unit": "ns/iter",
            "extra": "iterations: 900268\ncpu: 777.5525732337483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11285.491159402722,
            "unit": "ns/iter",
            "extra": "iterations: 73581\ncpu: 11284.731112651363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24923.070820595367,
            "unit": "ns/iter",
            "extra": "iterations: 33366\ncpu: 24920.4189893904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39421.11695443853,
            "unit": "ns/iter",
            "extra": "iterations: 21487\ncpu: 39418.26685903103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49531.64139831917,
            "unit": "ns/iter",
            "extra": "iterations: 15962\ncpu: 49527.84738754538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51410.45839999947,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51405.45999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62608.42550903293,
            "unit": "ns/iter",
            "extra": "iterations: 13948\ncpu: 62602.91081158586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71881.03466045861,
            "unit": "ns/iter",
            "extra": "iterations: 12031\ncpu: 71877.68265314608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82446.43605474062,
            "unit": "ns/iter",
            "extra": "iterations: 10595\ncpu: 82439.53751769697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 648.7696440713278,
            "unit": "ns/iter",
            "extra": "iterations: 1079486\ncpu: 648.7299511063593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 547.8044353590146,
            "unit": "ns/iter",
            "extra": "iterations: 1259650\ncpu: 547.7447703727236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 543.0540395392948,
            "unit": "ns/iter",
            "extra": "iterations: 1295977\ncpu: 543.0159640178798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 546.2949899621625,
            "unit": "ns/iter",
            "extra": "iterations: 1284142\ncpu: 546.2596815616967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1052.0281372847378,
            "unit": "ns/iter",
            "extra": "iterations: 664954\ncpu: 1051.9799865855373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3941.141368152204,
            "unit": "ns/iter",
            "extra": "iterations: 202726\ncpu: 3940.7890453123964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16964.9320620291,
            "unit": "ns/iter",
            "extra": "iterations: 47720\ncpu: 16964.27074601845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14179.075549734216,
            "unit": "ns/iter",
            "extra": "iterations: 58028\ncpu: 14178.74129730477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14346.225579650407,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 14346.187128177424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14101.705397274614,
            "unit": "ns/iter",
            "extra": "iterations: 57844\ncpu: 14101.315607495999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38076.24268454925,
            "unit": "ns/iter",
            "extra": "iterations: 21769\ncpu: 38075.759106986916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 516470.5456620759,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 516352.7968036537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 406916.6474150016,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 406902.28225430846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 408573.5739046713,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 408566.34569090034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 407096.07082551584,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 407091.4165103187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255823.58458371137,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 255820.50603118574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 407073.27434457745,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 407039.2322097386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2048009.4368070255,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2047766.5188470117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 815887.5736434191,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 815868.73385013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2575477.2569832294,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2575255.586592176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3881.911683252763,
            "unit": "ns/iter",
            "extra": "iterations: 206903\ncpu: 3881.874114923419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17027.086123407476,
            "unit": "ns/iter",
            "extra": "iterations: 48117\ncpu: 17026.655859675386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14461.498889319015,
            "unit": "ns/iter",
            "extra": "iterations: 56722\ncpu: 14461.335989563171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14500.046367689682,
            "unit": "ns/iter",
            "extra": "iterations: 57195\ncpu: 14499.547163213581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14447.94057546173,
            "unit": "ns/iter",
            "extra": "iterations: 56963\ncpu: 14447.80471534155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37524.78090830672,
            "unit": "ns/iter",
            "extra": "iterations: 22041\ncpu: 37524.3092418672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 514656.62544168736,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 514648.5276796222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 415123.79066408554,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 415115.35129932634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414490.2336982424,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 414478.77201332734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 414527.38019617414,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 414526.6230733298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250333.46689595535,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 250323.24448265982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 411377.60263034486,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 411370.6904650078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2050186.6898877034,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2049988.9887640444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 812966.9931623795,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 812892.4786324758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4011.3947933186496,
            "unit": "ns/iter",
            "extra": "iterations: 199897\ncpu: 4011.1322331000424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17567.182526504177,
            "unit": "ns/iter",
            "extra": "iterations: 46974\ncpu: 17565.487290841855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14348.065041500944,
            "unit": "ns/iter",
            "extra": "iterations: 57348\ncpu: 14347.251865801702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14261.935821283165,
            "unit": "ns/iter",
            "extra": "iterations: 57745\ncpu: 14260.271885011642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14320.360427415608,
            "unit": "ns/iter",
            "extra": "iterations: 57368\ncpu: 14320.014642309237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37601.87494966602,
            "unit": "ns/iter",
            "extra": "iterations: 22351\ncpu: 37601.07825153238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 502295.64665126964,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 502289.49191686214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 412295.79619049496,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 412284.5238095235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 411373.40009491023,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 411369.1979117212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 409345.7479943466,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 409339.0750353948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253838.13758292995,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 253827.43005480195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 408770.35667292745,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 408757.3778195503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 325.4932121450843,
            "unit": "ns/iter",
            "extra": "iterations: 2173588\ncpu: 325.4927336735396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1692.046116797977,
            "unit": "ns/iter",
            "extra": "iterations: 414014\ncpu: 1691.9980966827152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1354.1441665507582,
            "unit": "ns/iter",
            "extra": "iterations: 517464\ncpu: 1353.9952537761112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1433.3778793785468,
            "unit": "ns/iter",
            "extra": "iterations: 508964\ncpu: 1433.318466532008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1130.1202333863657,
            "unit": "ns/iter",
            "extra": "iterations: 618888\ncpu: 1130.0884812761026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6831.2734727347115,
            "unit": "ns/iter",
            "extra": "iterations: 102438\ncpu: 6831.146644799745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20566.8077657354,
            "unit": "ns/iter",
            "extra": "iterations: 34047\ncpu: 20566.487502570202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4905.467729938927,
            "unit": "ns/iter",
            "extra": "iterations: 142516\ncpu: 4905.254146902839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4887.228622327833,
            "unit": "ns/iter",
            "extra": "iterations: 143140\ncpu: 4887.110521168062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4937.7532978281715,
            "unit": "ns/iter",
            "extra": "iterations: 142139\ncpu: 4937.747556968797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10083.579394446117,
            "unit": "ns/iter",
            "extra": "iterations: 69457\ncpu: 10083.22415307311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9326.468371449206,
            "unit": "ns/iter",
            "extra": "iterations: 75122\ncpu: 9326.283911504064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2377.37585766496,
            "unit": "ns/iter",
            "extra": "iterations: 294404\ncpu: 2377.3216396516455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11888.587025961055,
            "unit": "ns/iter",
            "extra": "iterations: 58856\ncpu: 11888.578904444788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9621.74070958717,
            "unit": "ns/iter",
            "extra": "iterations: 72521\ncpu: 9621.624081300633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9560.14098598497,
            "unit": "ns/iter",
            "extra": "iterations: 73064\ncpu: 9559.822894996138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10060.495139029275,
            "unit": "ns/iter",
            "extra": "iterations: 69122\ncpu: 10060.391771071409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24576.385585333494,
            "unit": "ns/iter",
            "extra": "iterations: 28471\ncpu: 24575.63485652025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102227.07514620526,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102227.04678362464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87060.41745518267,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 87058.91434262837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 88117.33593257818,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 88113.54546597919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87574.99874498622,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 87574.17168674817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54086.66809705903,
            "unit": "ns/iter",
            "extra": "iterations: 12817\ncpu: 54084.47374580679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87530.1018008903,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 87523.89944972492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2313.6835258438764,
            "unit": "ns/iter",
            "extra": "iterations: 301715\ncpu: 2313.4355269045313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11549.151168728282,
            "unit": "ns/iter",
            "extra": "iterations: 60707\ncpu: 11548.10483140337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9269.764632266972,
            "unit": "ns/iter",
            "extra": "iterations: 75911\ncpu: 9269.462923686982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9298.603941755835,
            "unit": "ns/iter",
            "extra": "iterations: 75956\ncpu: 9298.472800042166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9639.513251357057,
            "unit": "ns/iter",
            "extra": "iterations: 72785\ncpu: 9639.366627739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23908.72083973189,
            "unit": "ns/iter",
            "extra": "iterations: 29295\ncpu: 23907.91261307394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100120.07986109701,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 100115.46585648034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84331.0195198808,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84328.27352085225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 86073.80681401788,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 86070.61912321315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84901.03380761262,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 84901.03368600205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54082.427711773074,
            "unit": "ns/iter",
            "extra": "iterations: 12962\ncpu: 54080.010800802105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85322.9498506726,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 85320.8188153317 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421386346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 782.6777119430432,
            "unit": "ns/iter",
            "extra": "iterations: 895677\ncpu: 782.6658494077666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11481.224897534032,
            "unit": "ns/iter",
            "extra": "iterations: 71975\ncpu: 11481.253212921154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25241.738038642212,
            "unit": "ns/iter",
            "extra": "iterations: 32814\ncpu: 25241.820564393238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40862.94503719562,
            "unit": "ns/iter",
            "extra": "iterations: 20432\ncpu: 40862.97963978073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49307.4141714692,
            "unit": "ns/iter",
            "extra": "iterations: 16131\ncpu: 49306.04426259998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50893.58730000413,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50891.38000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61730.81499999853,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61730.58999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71266.02156444809,
            "unit": "ns/iter",
            "extra": "iterations: 12196\ncpu: 71263.52082650048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81541.91255857683,
            "unit": "ns/iter",
            "extra": "iterations: 10670\ncpu: 81538.02249297102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 643.2139446639926,
            "unit": "ns/iter",
            "extra": "iterations: 1091586\ncpu: 643.1815725009297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 547.9420306696783,
            "unit": "ns/iter",
            "extra": "iterations: 1282178\ncpu: 547.9268089142062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 542.4054708194612,
            "unit": "ns/iter",
            "extra": "iterations: 1290739\ncpu: 542.3943957686257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 537.8363977768989,
            "unit": "ns/iter",
            "extra": "iterations: 1300508\ncpu: 537.8275258591268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1056.5823568318624,
            "unit": "ns/iter",
            "extra": "iterations: 662228\ncpu: 1056.5184498390288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4047.844131053461,
            "unit": "ns/iter",
            "extra": "iterations: 198545\ncpu: 4047.75441335717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17246.749717111485,
            "unit": "ns/iter",
            "extra": "iterations: 47722\ncpu: 17246.135954067326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14217.42966310742,
            "unit": "ns/iter",
            "extra": "iterations: 57971\ncpu: 14217.122354280598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14761.33339941945,
            "unit": "ns/iter",
            "extra": "iterations: 55483\ncpu: 14760.741127913036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14496.498027839654,
            "unit": "ns/iter",
            "extra": "iterations: 56537\ncpu: 14496.007924014388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37716.67399596334,
            "unit": "ns/iter",
            "extra": "iterations: 22285\ncpu: 37714.55687682303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 486530.747762865,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 486516.4988814326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 401397.1739332029,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 401373.9795918372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 407858.715893122,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407848.7576183788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 407413.39418112824,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 407399.43688409176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256027.283994119,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 256007.43024963248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 404696.1009772108,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 404690.1349464863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2047103.7483443366,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2046814.3487858677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 821073.5095155878,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 821048.0968858111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2561246.319327647,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2561002.2408963605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3997.1511512917536,
            "unit": "ns/iter",
            "extra": "iterations: 199211\ncpu: 3997.028778531307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17642.44974720242,
            "unit": "ns/iter",
            "extra": "iterations: 47271\ncpu: 17641.763449049104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14414.571517725682,
            "unit": "ns/iter",
            "extra": "iterations: 57685\ncpu: 14414.081650342412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15013.989663947172,
            "unit": "ns/iter",
            "extra": "iterations: 56985\ncpu: 15013.475476002388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14361.108702031168,
            "unit": "ns/iter",
            "extra": "iterations: 57929\ncpu: 14360.693262442031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37399.68889777941,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 37398.910675381456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 513445.699648688,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 513445.96018735337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 418250.6484674421,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 418249.32950191444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414950.6687291657,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 414940.9328891007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 414533.98114098486,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 414534.46487505897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249212.10966279352,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 249211.4196656275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405950.1210428342,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 405955.1210428311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2052069.3542599757,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2051995.9641255557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 819592.6584506943,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 819585.299295775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3933.3817499379206,
            "unit": "ns/iter",
            "extra": "iterations: 197687\ncpu: 3933.3891454673253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17666.24063382567,
            "unit": "ns/iter",
            "extra": "iterations: 48152\ncpu: 17666.275544110373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14702.522498262171,
            "unit": "ns/iter",
            "extra": "iterations: 57560\ncpu: 14702.529534398896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14617.775284379772,
            "unit": "ns/iter",
            "extra": "iterations: 58109\ncpu: 14617.527405393274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14746.924351597621,
            "unit": "ns/iter",
            "extra": "iterations: 57873\ncpu: 14747.08758833996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38213.22535084215,
            "unit": "ns/iter",
            "extra": "iterations: 22161\ncpu: 38213.298136365716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 498524.90748142276,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 498525.1856082244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408998.1085016568,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 408998.44997651415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 408190.7890295364,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 408195.2180028119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 407279.6597744487,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 407279.98120300664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252233.91404911893,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 252234.35179897284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405696.7435777674,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 405701.1209715091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 319.89310296982575,
            "unit": "ns/iter",
            "extra": "iterations: 2183737\ncpu: 319.8901699243102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1691.4924250486526,
            "unit": "ns/iter",
            "extra": "iterations: 413468\ncpu: 1691.4931748043361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1377.939775246524,
            "unit": "ns/iter",
            "extra": "iterations: 508379\ncpu: 1377.940080137059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1393.1667837715427,
            "unit": "ns/iter",
            "extra": "iterations: 502399\ncpu: 1393.1825103155068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1154.9457043571083,
            "unit": "ns/iter",
            "extra": "iterations: 604892\ncpu: 1154.9455109341752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6823.618987834253,
            "unit": "ns/iter",
            "extra": "iterations: 102750\ncpu: 6823.692457420932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20520.247042631625,
            "unit": "ns/iter",
            "extra": "iterations: 34152\ncpu: 20520.212579058432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4947.5413220216915,
            "unit": "ns/iter",
            "extra": "iterations: 141450\ncpu: 4947.591375044184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4959.894596705442,
            "unit": "ns/iter",
            "extra": "iterations: 140840\ncpu: 4959.901306447069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4977.64196118274,
            "unit": "ns/iter",
            "extra": "iterations: 140711\ncpu: 4977.64069617873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10078.060986728166,
            "unit": "ns/iter",
            "extra": "iterations: 69097\ncpu: 10077.984572412728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9359.855943384548,
            "unit": "ns/iter",
            "extra": "iterations: 75033\ncpu: 9359.950954913144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2370.9677257782064,
            "unit": "ns/iter",
            "extra": "iterations: 293485\ncpu: 2370.9688740480974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11825.643666897402,
            "unit": "ns/iter",
            "extra": "iterations: 59189\ncpu: 11825.567250671635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9488.554810444299,
            "unit": "ns/iter",
            "extra": "iterations: 74411\ncpu: 9488.5567993979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9361.024367033515,
            "unit": "ns/iter",
            "extra": "iterations: 74609\ncpu: 9361.007385168034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9999.977177236822,
            "unit": "ns/iter",
            "extra": "iterations: 69974\ncpu: 10000.075742418663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24576.474283497522,
            "unit": "ns/iter",
            "extra": "iterations: 28367\ncpu: 24576.45151055801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100574.7823060195,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 100574.69180565767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86853.89645742513,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 86854.92852703552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87121.23756699653,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87121.46329303292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86616.55541765096,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 86617.59960282843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54146.206584746375,
            "unit": "ns/iter",
            "extra": "iterations: 12939\ncpu: 54144.74843496379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86606.29252545853,
            "unit": "ns/iter",
            "extra": "iterations: 8054\ncpu: 86607.21380680447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2285.14310824768,
            "unit": "ns/iter",
            "extra": "iterations: 306076\ncpu: 2285.1706765639824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11519.929736119968,
            "unit": "ns/iter",
            "extra": "iterations: 60899\ncpu: 11520.0479482423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9194.398793644907,
            "unit": "ns/iter",
            "extra": "iterations: 76097\ncpu: 9194.507010788759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9218.871784401626,
            "unit": "ns/iter",
            "extra": "iterations: 75919\ncpu: 9218.883283499412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9720.459509652934,
            "unit": "ns/iter",
            "extra": "iterations: 72153\ncpu: 9720.439898548952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23800.07792340759,
            "unit": "ns/iter",
            "extra": "iterations: 29298\ncpu: 23800.232097753742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98770.40197600385,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 98771.474947071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83862.95094520536,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83863.86695381743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84194.03446619304,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84194.09150954687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84085.7565529683,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 84085.68521843218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53772.318122553974,
            "unit": "ns/iter",
            "extra": "iterations: 13039\ncpu: 53772.62826903929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84733.14925553882,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 84734.24524875863 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422465969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 775.1483183645122,
            "unit": "ns/iter",
            "extra": "iterations: 902990\ncpu: 775.1411422053402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11612.953019473014,
            "unit": "ns/iter",
            "extra": "iterations: 71072\ncpu: 11612.781404772624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25457.695223817926,
            "unit": "ns/iter",
            "extra": "iterations: 32683\ncpu: 25457.421289355323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39771.45555608532,
            "unit": "ns/iter",
            "extra": "iterations: 20869\ncpu: 39770.96650534285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50013.19349562648,
            "unit": "ns/iter",
            "extra": "iterations: 15897\ncpu: 50010.99578536832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51700.566300002036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51695.509999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62266.718699999044,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62264.609999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71553.60270561873,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 71549.89625695083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82041.12736693426,
            "unit": "ns/iter",
            "extra": "iterations: 10615\ncpu: 82035.63824776253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 650.7198557295967,
            "unit": "ns/iter",
            "extra": "iterations: 1072708\ncpu: 650.6836902493488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 559.4188234825086,
            "unit": "ns/iter",
            "extra": "iterations: 1254125\ncpu: 559.3890561148208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 551.961170554201,
            "unit": "ns/iter",
            "extra": "iterations: 1269655\ncpu: 551.942535570686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 551.6957010949191,
            "unit": "ns/iter",
            "extra": "iterations: 1275348\ncpu: 550.4465447862069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1076.6970204511613,
            "unit": "ns/iter",
            "extra": "iterations: 649595\ncpu: 1076.6459101440123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4019.576148472603,
            "unit": "ns/iter",
            "extra": "iterations: 200549\ncpu: 4019.4356491430985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17729.52206295102,
            "unit": "ns/iter",
            "extra": "iterations: 46322\ncpu: 17729.58205604249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14345.791315426253,
            "unit": "ns/iter",
            "extra": "iterations: 57297\ncpu: 14345.442169747103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14402.978441888343,
            "unit": "ns/iter",
            "extra": "iterations: 56684\ncpu: 14403.002610966061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14379.851973047658,
            "unit": "ns/iter",
            "extra": "iterations: 56841\ncpu: 14379.743495012399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37459.03345993801,
            "unit": "ns/iter",
            "extra": "iterations: 22116\ncpu: 37456.25791282319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487977.52804531576,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 487965.5524079316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 406739.8277310899,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 406738.2352941177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 405848.7674199608,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 405843.8794726919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 408213.96390059544,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 408207.7355836852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255696.01933782554,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 255696.48403164322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 404503.1378504643,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 404498.69158878445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2042062.1039823373,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2041936.946902656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 799949.4259102852,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 799924.894157495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2561454.33611105,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2561395.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3935.281563096242,
            "unit": "ns/iter",
            "extra": "iterations: 200218\ncpu: 3935.2905333186786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17614.543867914123,
            "unit": "ns/iter",
            "extra": "iterations: 46697\ncpu: 17614.197914212888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14250.755358822747,
            "unit": "ns/iter",
            "extra": "iterations: 57382\ncpu: 14250.686626468218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14507.599356024853,
            "unit": "ns/iter",
            "extra": "iterations: 56524\ncpu: 14507.492392611912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14260.606718265111,
            "unit": "ns/iter",
            "extra": "iterations: 57366\ncpu: 14260.640449046537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36997.5933152591,
            "unit": "ns/iter",
            "extra": "iterations: 22499\ncpu: 36997.19987555002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 501467.7134637318,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 501445.05178366165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416617.9871612092,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 416607.0375653848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 412598.6122931566,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 412599.6217494092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 413198.2430391557,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 413199.3865030696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 246785.45689165907,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 246781.82076006764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 408841.7828731715,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 408835.6574637342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2040410.5121951287,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2040187.5831485614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 813672.7966985428,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 813664.5525629901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3885.6359317321694,
            "unit": "ns/iter",
            "extra": "iterations: 202907\ncpu: 3885.591921422133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17139.83203989959,
            "unit": "ns/iter",
            "extra": "iterations: 48321\ncpu: 17139.6328718363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14502.495757407507,
            "unit": "ns/iter",
            "extra": "iterations: 57512\ncpu: 14502.249965224682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14471.21845058428,
            "unit": "ns/iter",
            "extra": "iterations: 57299\ncpu: 14471.163545611542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14468.975089217802,
            "unit": "ns/iter",
            "extra": "iterations: 57164\ncpu: 14468.893009586438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37828.20087983153,
            "unit": "ns/iter",
            "extra": "iterations: 22277\ncpu: 37827.463302958255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 493097.9891984033,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 493096.70267197245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 409678.35992491606,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 409675.3636790259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 412515.31229545415,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 412506.7321178136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 412111.80887848523,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 412106.35514018603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251945.4286127192,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 251944.04624277458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 406339.79155060847,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 406341.3649025085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 312.8518872165613,
            "unit": "ns/iter",
            "extra": "iterations: 2224440\ncpu: 312.83379187570915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1684.487635481829,
            "unit": "ns/iter",
            "extra": "iterations: 414816\ncpu: 1684.3889821029122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1381.2473509646402,
            "unit": "ns/iter",
            "extra": "iterations: 507732\ncpu: 1381.165851275858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1407.3255938689804,
            "unit": "ns/iter",
            "extra": "iterations: 497795\ncpu: 1407.3148585261006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1123.448514318471,
            "unit": "ns/iter",
            "extra": "iterations: 626009\ncpu: 1123.4389601427422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6985.274849008101,
            "unit": "ns/iter",
            "extra": "iterations: 102489\ncpu: 6985.076447228483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20750.534007049315,
            "unit": "ns/iter",
            "extra": "iterations: 36316\ncpu: 20750.25883907911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4840.1291014685185,
            "unit": "ns/iter",
            "extra": "iterations: 143089\ncpu: 4840.07366044905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4831.639629176371,
            "unit": "ns/iter",
            "extra": "iterations: 144651\ncpu: 4831.202687848723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4885.997705943676,
            "unit": "ns/iter",
            "extra": "iterations: 143850\ncpu: 4885.724018074395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10259.344928088349,
            "unit": "ns/iter",
            "extra": "iterations: 68278\ncpu: 10258.352617241366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9181.632973555243,
            "unit": "ns/iter",
            "extra": "iterations: 76158\ncpu: 9181.575146406114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2385.089965350848,
            "unit": "ns/iter",
            "extra": "iterations: 293802\ncpu: 2385.013376355513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11814.701225274994,
            "unit": "ns/iter",
            "extra": "iterations: 59252\ncpu: 11787.347262539568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9581.890078894554,
            "unit": "ns/iter",
            "extra": "iterations: 73389\ncpu: 9581.303737617389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9466.359582888275,
            "unit": "ns/iter",
            "extra": "iterations: 74033\ncpu: 9465.686923399031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10034.042117465224,
            "unit": "ns/iter",
            "extra": "iterations: 69876\ncpu: 10033.457839601691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24691.61994362268,
            "unit": "ns/iter",
            "extra": "iterations: 28380\ncpu: 24689.0415785766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100265.09195072514,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 100263.39157834486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86593.96778590477,
            "unit": "ns/iter",
            "extra": "iterations: 8071\ncpu: 86592.24383595609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86469.55137070281,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 86465.68288466363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85355.08637424781,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 85347.95429413974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53196.767918348196,
            "unit": "ns/iter",
            "extra": "iterations: 13129\ncpu: 53191.63683448834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85520.93103447944,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85519.28344338492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2313.6652578358853,
            "unit": "ns/iter",
            "extra": "iterations: 302615\ncpu: 2313.6242420237027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11389.476391917218,
            "unit": "ns/iter",
            "extra": "iterations: 61462\ncpu: 11389.107090560132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9161.23620710071,
            "unit": "ns/iter",
            "extra": "iterations: 75963\ncpu: 9160.493924673776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9042.891762238502,
            "unit": "ns/iter",
            "extra": "iterations: 76295\ncpu: 9042.25440723492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9649.597025573054,
            "unit": "ns/iter",
            "extra": "iterations: 72888\ncpu: 9649.017670947194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23530.323208226648,
            "unit": "ns/iter",
            "extra": "iterations: 29761\ncpu: 23529.474816034446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99173.60749646444,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 99172.88543140083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84209.03485158079,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84204.95132796482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84727.38526775072,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84726.19336079517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84331.53140855134,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84329.8743657889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53932.341948927344,
            "unit": "ns/iter",
            "extra": "iterations: 12961\ncpu: 53931.46362163419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85905.22764128064,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 85903.67321867286 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453359512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 780.3070286387526,
            "unit": "ns/iter",
            "extra": "iterations: 898154\ncpu: 780.276879020747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11424.829266948162,
            "unit": "ns/iter",
            "extra": "iterations: 72546\ncpu: 11424.866980950015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24829.38635418504,
            "unit": "ns/iter",
            "extra": "iterations: 33666\ncpu: 24827.835204657516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39640.89051547425,
            "unit": "ns/iter",
            "extra": "iterations: 20971\ncpu: 39639.659529826924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49866.1178007228,
            "unit": "ns/iter",
            "extra": "iterations: 16078\ncpu: 49863.57755939794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51635.10350000138,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51631.83 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62465.23519999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62463.379999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72010.80823734077,
            "unit": "ns/iter",
            "extra": "iterations: 12067\ncpu: 72005.58548106404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84862.13845862936,
            "unit": "ns/iter",
            "extra": "iterations: 10588\ncpu: 84857.70683792967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 649.7918543477418,
            "unit": "ns/iter",
            "extra": "iterations: 1078514\ncpu: 649.762450927851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 555.9200430028751,
            "unit": "ns/iter",
            "extra": "iterations: 1262241\ncpu: 555.8985962268705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 545.8674867237718,
            "unit": "ns/iter",
            "extra": "iterations: 1281049\ncpu: 545.8454750755047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 544.4579050421489,
            "unit": "ns/iter",
            "extra": "iterations: 1284465\ncpu: 544.4527488098161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1038.6096809169687,
            "unit": "ns/iter",
            "extra": "iterations: 675122\ncpu: 1038.5850261137991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3939.4135678616567,
            "unit": "ns/iter",
            "extra": "iterations: 202847\ncpu: 3939.397181126662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16993.455031094334,
            "unit": "ns/iter",
            "extra": "iterations: 49045\ncpu: 16991.89519828728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14267.75347908994,
            "unit": "ns/iter",
            "extra": "iterations: 57630\ncpu: 14266.961651917409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14383.94696357733,
            "unit": "ns/iter",
            "extra": "iterations: 56942\ncpu: 14383.29352674649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14121.523371360037,
            "unit": "ns/iter",
            "extra": "iterations: 58469\ncpu: 14121.007713489194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40059.70610651925,
            "unit": "ns/iter",
            "extra": "iterations: 21780\ncpu: 40056.94214876032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490592.48633257305,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 490564.80637813115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 407399.9943555892,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 407370.413922859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 409533.59611743555,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 409515.8143939395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 409729.5120567464,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 409702.83687943313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256409.55178518963,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 256396.90174092626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 407842.81167607557,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 407830.36723163846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2042081.1318682344,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2041726.8131868094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 792458.6957606054,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 792417.7888611811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2565491.298050048,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2565342.3398328726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3816.3129790720445,
            "unit": "ns/iter",
            "extra": "iterations: 205084\ncpu: 3816.089504788295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17055.136024285213,
            "unit": "ns/iter",
            "extra": "iterations: 48756\ncpu: 17054.37484617276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14348.006608925913,
            "unit": "ns/iter",
            "extra": "iterations: 57498\ncpu: 14347.432954189775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14297.648995747653,
            "unit": "ns/iter",
            "extra": "iterations: 57854\ncpu: 14296.919832682162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14296.471286130793,
            "unit": "ns/iter",
            "extra": "iterations: 57568\ncpu: 14295.8483879933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 38330.0213505218,
            "unit": "ns/iter",
            "extra": "iterations: 21873\ncpu: 38328.295158414374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507169.29670973367,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 507144.35957697075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 417374.3083932725,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 417360.95923261263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 415443.4424821036,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 415424.0095465391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 414665.4368247885,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 414651.29168623855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250621.13894437609,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 250613.15263908784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 413038.0159325284,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 413017.19775070244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2051898.3109620118,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2051582.1029082662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 822220.7195766965,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 822172.6631393344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3968.954574075522,
            "unit": "ns/iter",
            "extra": "iterations: 200106\ncpu: 3968.819525651411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17532.374102711892,
            "unit": "ns/iter",
            "extra": "iterations: 46947\ncpu: 17531.386457068566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14325.671453187937,
            "unit": "ns/iter",
            "extra": "iterations: 57453\ncpu: 14325.03785703097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14263.854201360404,
            "unit": "ns/iter",
            "extra": "iterations: 57648\ncpu: 14263.681307243949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15400.486056982576,
            "unit": "ns/iter",
            "extra": "iterations: 52858\ncpu: 15400.520261833584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37483.862118685494,
            "unit": "ns/iter",
            "extra": "iterations: 22193\ncpu: 37481.77803812001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 504830.2188571532,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 504810.91428571293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 412192.39896373404,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 412179.13330192986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 412976.47008948954,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 412949.6938294836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 414978.7698449958,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 414958.6190699872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251883.85782793243,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 251870.88857545741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401335.0653382745,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 401316.96014828555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 313.0501876567996,
            "unit": "ns/iter",
            "extra": "iterations: 2182708\ncpu: 313.036329183751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1640.326777166838,
            "unit": "ns/iter",
            "extra": "iterations: 427028\ncpu: 1640.250288037322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1332.0191056060937,
            "unit": "ns/iter",
            "extra": "iterations: 521627\ncpu: 1332.010612947566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1325.2342073446905,
            "unit": "ns/iter",
            "extra": "iterations: 529360\ncpu: 1325.2384010881035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1115.883023413486,
            "unit": "ns/iter",
            "extra": "iterations: 628442\ncpu: 1115.8490361879096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6926.148423316662,
            "unit": "ns/iter",
            "extra": "iterations: 101352\ncpu: 6926.100126292465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20166.952223437213,
            "unit": "ns/iter",
            "extra": "iterations: 34766\ncpu: 20166.49600184095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4803.654537595072,
            "unit": "ns/iter",
            "extra": "iterations: 145738\ncpu: 4803.541286418074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4881.3999316343925,
            "unit": "ns/iter",
            "extra": "iterations: 143347\ncpu: 4881.019484188731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4900.951315541357,
            "unit": "ns/iter",
            "extra": "iterations: 143249\ncpu: 4900.719027707037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10281.300899871101,
            "unit": "ns/iter",
            "extra": "iterations: 68232\ncpu: 10280.463712041275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9151.459736800782,
            "unit": "ns/iter",
            "extra": "iterations: 76596\ncpu: 9151.467439552871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2382.55349074591,
            "unit": "ns/iter",
            "extra": "iterations: 293920\ncpu: 2382.509526401738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11748.241183124861,
            "unit": "ns/iter",
            "extra": "iterations: 59233\ncpu: 11748.001958367913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9446.537666193783,
            "unit": "ns/iter",
            "extra": "iterations: 74085\ncpu: 9446.101100087846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9358.33403156729,
            "unit": "ns/iter",
            "extra": "iterations: 74951\ncpu: 9358.025910261378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9985.05196303192,
            "unit": "ns/iter",
            "extra": "iterations: 70223\ncpu: 9984.408242313799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24851.629768694755,
            "unit": "ns/iter",
            "extra": "iterations: 28231\ncpu: 24850.104495058527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100352.37213630912,
            "unit": "ns/iter",
            "extra": "iterations: 6984\ncpu: 100350.40091638007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85749.56967821646,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 85748.74999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86412.09499136663,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86408.47520355278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86300.17118331855,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 86118.77375842941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53420.97030761056,
            "unit": "ns/iter",
            "extra": "iterations: 13101\ncpu: 53418.67033050911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85443.5987789965,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 85443.78510378522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2286.038105394354,
            "unit": "ns/iter",
            "extra": "iterations: 304760\ncpu: 2285.953537209632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11432.621343718944,
            "unit": "ns/iter",
            "extra": "iterations: 61367\ncpu: 11432.655987745835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9207.529081169332,
            "unit": "ns/iter",
            "extra": "iterations: 75977\ncpu: 9207.328533635216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9173.087931721166,
            "unit": "ns/iter",
            "extra": "iterations: 77799\ncpu: 9172.882684867463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9693.42190534341,
            "unit": "ns/iter",
            "extra": "iterations: 72092\ncpu: 9692.990900515866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23605.435854094583,
            "unit": "ns/iter",
            "extra": "iterations: 29581\ncpu: 23603.174334877123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98906.67709654545,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98906.96264975454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83349.15001189665,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83341.97002141339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83518.36577221206,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83513.38103756584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83032.28709638126,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 83028.11706373216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53735.31419800642,
            "unit": "ns/iter",
            "extra": "iterations: 13030\ncpu: 53733.99079048268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84966.43016280657,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 84966.60545966458 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479523563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 791.8312271709659,
            "unit": "ns/iter",
            "extra": "iterations: 882648\ncpu: 791.8139507482032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11607.594122947165,
            "unit": "ns/iter",
            "extra": "iterations: 72145\ncpu: 11607.350474738372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25313.909041460083,
            "unit": "ns/iter",
            "extra": "iterations: 33092\ncpu: 25313.417140094276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40830.36702659106,
            "unit": "ns/iter",
            "extra": "iterations: 21023\ncpu: 40830.1098796556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50465.04698324437,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 50462.22446151911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51651.92680000245,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51651.57000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62586.19568025598,
            "unit": "ns/iter",
            "extra": "iterations: 13936\ncpu: 62584.99569460393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72509.83246861564,
            "unit": "ns/iter",
            "extra": "iterations: 11950\ncpu: 72507.98326359832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83123.49419710673,
            "unit": "ns/iter",
            "extra": "iterations: 10512\ncpu: 83122.80251141543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 666.3360048334944,
            "unit": "ns/iter",
            "extra": "iterations: 1055961\ncpu: 666.316559039586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 570.8305724970741,
            "unit": "ns/iter",
            "extra": "iterations: 1224146\ncpu: 570.7916375987828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 561.3037966759484,
            "unit": "ns/iter",
            "extra": "iterations: 1214062\ncpu: 561.3060123782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 570.9904139016945,
            "unit": "ns/iter",
            "extra": "iterations: 1234496\ncpu: 570.9789258126403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1069.9018085917307,
            "unit": "ns/iter",
            "extra": "iterations: 653326\ncpu: 1069.8536412143396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3949.1970018833294,
            "unit": "ns/iter",
            "extra": "iterations: 199125\ncpu: 3949.013433772752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17248.7700888171,
            "unit": "ns/iter",
            "extra": "iterations: 47514\ncpu: 17248.027949656975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14472.14175665722,
            "unit": "ns/iter",
            "extra": "iterations: 56858\ncpu: 14471.38485349469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14204.39450957222,
            "unit": "ns/iter",
            "extra": "iterations: 57664\ncpu: 14203.950471698077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14210.316312352397,
            "unit": "ns/iter",
            "extra": "iterations: 57576\ncpu: 14205.941711824342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38046.54628734675,
            "unit": "ns/iter",
            "extra": "iterations: 21723\ncpu: 38044.874096579726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 514037.6336746455,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 513804.550625712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 410247.71186441643,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 410220.48022598826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411853.1979914114,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 411832.95074127306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 411201.73193235305,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 411180.57406458136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255507.6956521717,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 255504.28946600528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 407151.46719774255,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 407146.3917525787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2050472.425720598,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2050338.3592017733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 816506.4043103794,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 816504.3965517243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2705295.4733894235,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2705167.5070028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3843.576126053988,
            "unit": "ns/iter",
            "extra": "iterations: 206007\ncpu: 3843.443669389869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17144.571840272845,
            "unit": "ns/iter",
            "extra": "iterations: 48232\ncpu: 17144.399983413514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14464.830409767947,
            "unit": "ns/iter",
            "extra": "iterations: 56837\ncpu: 14464.889068740447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14412.642655837153,
            "unit": "ns/iter",
            "extra": "iterations: 57127\ncpu: 14412.465209095491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14248.969457682117,
            "unit": "ns/iter",
            "extra": "iterations: 57494\ncpu: 14248.888579677929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37530.72115252758,
            "unit": "ns/iter",
            "extra": "iterations: 21865\ncpu: 37530.55568259778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 513581.29356723715,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 513582.9824561411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 418024.2260076739,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 418025.2399232246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 418716.13362067955,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 418710.5842911898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 414122.05573927355,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 414123.00425130007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 248838.02217798424,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 248834.09155530258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 407333.8643592097,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 407328.43779233104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2058452.2635135318,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2058344.594594594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 813271.4495254449,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 813260.3968938772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4022.068144374568,
            "unit": "ns/iter",
            "extra": "iterations: 197874\ncpu: 4022.0665676137196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17558.054029382063,
            "unit": "ns/iter",
            "extra": "iterations: 47104\ncpu: 17557.895295516184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14497.492317340488,
            "unit": "ns/iter",
            "extra": "iterations: 57402\ncpu: 14497.53144489741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14261.979388240139,
            "unit": "ns/iter",
            "extra": "iterations: 57637\ncpu: 14261.896004302866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14306.616321938862,
            "unit": "ns/iter",
            "extra": "iterations: 57775\ncpu: 14306.670705322382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37160.802174878154,
            "unit": "ns/iter",
            "extra": "iterations: 22530\ncpu: 37159.74700399479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 503223.8959172018,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 503225.646923519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 410350.0478648546,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 410343.92304082506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414556.5415486296,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 414545.08970727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 410009.1942884033,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 410010.11235954886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252922.36836061522,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 252918.92047085817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 403715.75128324504,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 403713.5790947286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 330.9738740309009,
            "unit": "ns/iter",
            "extra": "iterations: 2123060\ncpu: 330.9712867276505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1688.7079490865933,
            "unit": "ns/iter",
            "extra": "iterations: 414664\ncpu: 1688.7135126270812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1387.5193822195795,
            "unit": "ns/iter",
            "extra": "iterations: 506005\ncpu: 1387.4997282635586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1429.9899801597162,
            "unit": "ns/iter",
            "extra": "iterations: 481345\ncpu: 1429.9743427271476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1133.4116208039807,
            "unit": "ns/iter",
            "extra": "iterations: 616842\ncpu: 1133.3848862431557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6930.756578038022,
            "unit": "ns/iter",
            "extra": "iterations: 101322\ncpu: 6930.67547028285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20593.73923909265,
            "unit": "ns/iter",
            "extra": "iterations: 34012\ncpu: 20593.831588851153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4900.614780380357,
            "unit": "ns/iter",
            "extra": "iterations: 142838\ncpu: 4900.632884806604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4961.246621334599,
            "unit": "ns/iter",
            "extra": "iterations: 141180\ncpu: 4961.180053831996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4918.262967023825,
            "unit": "ns/iter",
            "extra": "iterations: 142284\ncpu: 4918.276826628507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10449.39052255887,
            "unit": "ns/iter",
            "extra": "iterations: 66959\ncpu: 10449.257008019898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9257.05490705307,
            "unit": "ns/iter",
            "extra": "iterations: 75473\ncpu: 9257.091940164068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2414.236278989584,
            "unit": "ns/iter",
            "extra": "iterations: 289975\ncpu: 2414.149495646204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11867.04563753843,
            "unit": "ns/iter",
            "extra": "iterations: 59118\ncpu: 11866.456916674917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9538.653191056079,
            "unit": "ns/iter",
            "extra": "iterations: 73565\ncpu: 9538.41500713661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9608.140723196424,
            "unit": "ns/iter",
            "extra": "iterations: 74309\ncpu: 9607.41902057619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10202.500883456074,
            "unit": "ns/iter",
            "extra": "iterations: 69613\ncpu: 10201.871776823185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24769.086133344506,
            "unit": "ns/iter",
            "extra": "iterations: 28363\ncpu: 24767.87011247058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100902.25025462429,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 100894.8203113643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86436.14268142324,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 86434.98154981548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87236.72695565714,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87230.40607872383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85770.16843011839,
            "unit": "ns/iter",
            "extra": "iterations: 8128\ncpu: 85762.52460629777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53113.848773841484,
            "unit": "ns/iter",
            "extra": "iterations: 13212\ncpu: 53111.04299121926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86323.05296065041,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 86322.39794041913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2322.8092570577296,
            "unit": "ns/iter",
            "extra": "iterations: 301154\ncpu: 2322.782363840405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11521.5265806956,
            "unit": "ns/iter",
            "extra": "iterations: 60796\ncpu: 11521.304033160215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9218.235870651622,
            "unit": "ns/iter",
            "extra": "iterations: 76012\ncpu: 9218.05504394056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9167.823883408702,
            "unit": "ns/iter",
            "extra": "iterations: 76438\ncpu: 9167.77519035043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9588.412627944817,
            "unit": "ns/iter",
            "extra": "iterations: 72981\ncpu: 9588.45178882175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23580.595851771075,
            "unit": "ns/iter",
            "extra": "iterations: 29603\ncpu: 23580.231733270288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99097.95500849375,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99098.42954159675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84196.89445718974,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84195.30249969754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85327.91473429608,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 85325.79710144998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83999.140361374,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83999.41366519168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53812.86776668899,
            "unit": "ns/iter",
            "extra": "iterations: 13030\ncpu: 53811.51189562592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86165.41415384256,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 86165.74769230807 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488558769,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 778.4857704588824,
            "unit": "ns/iter",
            "extra": "iterations: 880949\ncpu: 778.4475605284757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11473.320334454855,
            "unit": "ns/iter",
            "extra": "iterations: 72237\ncpu: 11472.796489333723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25302.987865701212,
            "unit": "ns/iter",
            "extra": "iterations: 32882\ncpu: 25301.663524116542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40008.92573107742,
            "unit": "ns/iter",
            "extra": "iterations: 21099\ncpu: 40007.87715057587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49714.37908783415,
            "unit": "ns/iter",
            "extra": "iterations: 15962\ncpu: 49711.43340433532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51873.46419999699,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51873.93999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62182.92626861221,
            "unit": "ns/iter",
            "extra": "iterations: 13834\ncpu: 62180.302154113066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72182.44637512033,
            "unit": "ns/iter",
            "extra": "iterations: 12028\ncpu: 72178.19255071494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82932.97720552895,
            "unit": "ns/iter",
            "extra": "iterations: 10485\ncpu: 82930.43395326668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 654.1861495023476,
            "unit": "ns/iter",
            "extra": "iterations: 1072799\ncpu: 654.1416425630516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 563.4154636409822,
            "unit": "ns/iter",
            "extra": "iterations: 1248865\ncpu: 563.4038106600801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 549.0080840426837,
            "unit": "ns/iter",
            "extra": "iterations: 1275352\ncpu: 548.9891418212388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 545.6472239702134,
            "unit": "ns/iter",
            "extra": "iterations: 1277652\ncpu: 545.6225169294935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1037.4472056770405,
            "unit": "ns/iter",
            "extra": "iterations: 675423\ncpu: 1037.4085573040902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3928.028880830756,
            "unit": "ns/iter",
            "extra": "iterations: 203249\ncpu: 3927.8062868698003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17240.448703921655,
            "unit": "ns/iter",
            "extra": "iterations: 47528\ncpu: 17239.62295909777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14393.698749100891,
            "unit": "ns/iter",
            "extra": "iterations: 56999\ncpu: 14392.864787101522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14591.591839263128,
            "unit": "ns/iter",
            "extra": "iterations: 56490\ncpu: 14590.731102850083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14458.489585351364,
            "unit": "ns/iter",
            "extra": "iterations: 56795\ncpu: 14457.718108988416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38128.77636455108,
            "unit": "ns/iter",
            "extra": "iterations: 21857\ncpu: 38126.851809489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 506295.28521942365,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 506270.4965357985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 413101.2181991399,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 413071.129109099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 415656.17254528875,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 415635.1763584358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 412829.6031294488,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412803.7932669501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258741.62072019815,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 258730.78512396678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 407305.9149036199,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 407290.1739539259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2052760.4377778312,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2052662.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 795327.5769881593,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 795313.1979695412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578872.332402182,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2578654.469273745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3868.529896817175,
            "unit": "ns/iter",
            "extra": "iterations: 205557\ncpu: 3868.5050861804716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17198.90097257304,
            "unit": "ns/iter",
            "extra": "iterations: 48017\ncpu: 17199.033675573275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14535.843454029367,
            "unit": "ns/iter",
            "extra": "iterations: 56699\ncpu: 14535.949487645294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14540.7443880866,
            "unit": "ns/iter",
            "extra": "iterations: 56977\ncpu: 14540.858592063427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14614.840013395464,
            "unit": "ns/iter",
            "extra": "iterations: 56736\ncpu: 14614.95170614777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 38024.19110386395,
            "unit": "ns/iter",
            "extra": "iterations: 22077\ncpu: 38024.48702269337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 514557.5138479664,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 514554.0365350603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 419008.40114610817,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 419011.7000955126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 416501.2279202128,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 416501.7094017105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 412764.3174752752,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 412765.4733867165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249229.064880116,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 249231.8758815235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 413223.8285984807,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 413225.0473484873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2060223.986394525,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2060140.3628117838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 808691.8580192975,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 808677.7388255916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4013.0050695249297,
            "unit": "ns/iter",
            "extra": "iterations: 193312\ncpu: 4013.0136773712898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18109.675942684073,
            "unit": "ns/iter",
            "extra": "iterations: 46967\ncpu: 18109.672748951434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14765.891647698645,
            "unit": "ns/iter",
            "extra": "iterations: 57553\ncpu: 14766.027835212673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14635.198769784023,
            "unit": "ns/iter",
            "extra": "iterations: 57876\ncpu: 14635.32552353298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14783.173685033034,
            "unit": "ns/iter",
            "extra": "iterations: 57587\ncpu: 14783.303523364673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37534.98075476884,
            "unit": "ns/iter",
            "extra": "iterations: 22603\ncpu: 37535.044020705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 498541.1672354966,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498545.7337883956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 406160.0032558058,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 406163.53488372243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 406519.9628942445,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 406516.2337662342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 405025.06987507764,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 405028.3202221188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251597.7074010325,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 251599.82788296038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405184.5570438778,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 405184.5727482703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 318.6583408102636,
            "unit": "ns/iter",
            "extra": "iterations: 2235766\ncpu: 318.6612552476417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1707.2395786786692,
            "unit": "ns/iter",
            "extra": "iterations: 407290\ncpu: 1707.2552726558363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1342.107896519204,
            "unit": "ns/iter",
            "extra": "iterations: 522686\ncpu: 1342.120316978081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1396.1664865059056,
            "unit": "ns/iter",
            "extra": "iterations: 501404\ncpu: 1396.1775334859713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1126.270617303806,
            "unit": "ns/iter",
            "extra": "iterations: 621250\ncpu: 1126.2705835010033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6897.118360794256,
            "unit": "ns/iter",
            "extra": "iterations: 101537\ncpu: 6897.175413888479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20472.973726417236,
            "unit": "ns/iter",
            "extra": "iterations: 34293\ncpu: 20473.13445892766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4878.680813957352,
            "unit": "ns/iter",
            "extra": "iterations: 143349\ncpu: 4878.676516752867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4914.09006695041,
            "unit": "ns/iter",
            "extra": "iterations: 142494\ncpu: 4914.140946285452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4917.014480096904,
            "unit": "ns/iter",
            "extra": "iterations: 141988\ncpu: 4917.060596670147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10327.457344224355,
            "unit": "ns/iter",
            "extra": "iterations: 67822\ncpu: 10327.553006399243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9362.301105120547,
            "unit": "ns/iter",
            "extra": "iterations: 74562\ncpu: 9362.378959792028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2388.034387350454,
            "unit": "ns/iter",
            "extra": "iterations: 290223\ncpu: 2388.0295496910794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11784.834628582877,
            "unit": "ns/iter",
            "extra": "iterations: 59448\ncpu: 11784.832122190946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9447.588978495118,
            "unit": "ns/iter",
            "extra": "iterations: 74400\ncpu: 9447.676075268686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9411.978699672136,
            "unit": "ns/iter",
            "extra": "iterations: 74412\ncpu: 9411.937590711108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10002.121731816314,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 10002.215379351559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24366.617021276514,
            "unit": "ns/iter",
            "extra": "iterations: 28623\ncpu: 24366.516437829876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100292.01405219968,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 100293.01691998664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86103.04199605188,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 86103.84140316243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87127.63254658673,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 87127.13043478366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86011.58862009576,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86011.56504566818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53733.39767388083,
            "unit": "ns/iter",
            "extra": "iterations: 12983\ncpu: 53733.84425787556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86366.4360306808,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 86367.16159366578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2288.358434434876,
            "unit": "ns/iter",
            "extra": "iterations: 305551\ncpu: 2288.3777176314297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11412.628956547409,
            "unit": "ns/iter",
            "extra": "iterations: 61354\ncpu: 11412.589236235672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9323.617282640587,
            "unit": "ns/iter",
            "extra": "iterations: 75382\ncpu: 9323.611737550073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9130.845772701092,
            "unit": "ns/iter",
            "extra": "iterations: 76692\ncpu: 9130.803734418134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9714.909354092519,
            "unit": "ns/iter",
            "extra": "iterations: 72193\ncpu: 9714.9917582037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23856.960008190308,
            "unit": "ns/iter",
            "extra": "iterations: 29306\ncpu: 23856.831365590817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99559.17406143766,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 99557.72184300267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83996.77291740397,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83996.68937492612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85246.46749451636,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 85246.06768931072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84894.37592615254,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 84895.14150370532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53692.430063749955,
            "unit": "ns/iter",
            "extra": "iterations: 13019\ncpu: 53692.8873185346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86328.36674484231,
            "unit": "ns/iter",
            "extra": "iterations: 8101\ncpu: 86327.76200469155 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702491165604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 793.4634349030645,
            "unit": "ns/iter",
            "extra": "iterations: 880840\ncpu: 793.4400118069116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11497.391356609116,
            "unit": "ns/iter",
            "extra": "iterations: 72379\ncpu: 11497.134527970818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25449.71326328586,
            "unit": "ns/iter",
            "extra": "iterations: 32835\ncpu: 25448.87467641237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40900.856501599694,
            "unit": "ns/iter",
            "extra": "iterations: 20941\ncpu: 40896.53311685211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49603.90967500485,
            "unit": "ns/iter",
            "extra": "iterations: 16031\ncpu: 49603.256191129694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51158.01889999716,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51156.60999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61542.21148953754,
            "unit": "ns/iter",
            "extra": "iterations: 12185\ncpu: 61533.97620024619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71678.58137222443,
            "unit": "ns/iter",
            "extra": "iterations: 12068\ncpu: 71677.00530328134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82690.22515995051,
            "unit": "ns/iter",
            "extra": "iterations: 10628\ncpu: 82687.85284155059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 653.2146411522677,
            "unit": "ns/iter",
            "extra": "iterations: 1077142\ncpu: 653.1453605931257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 548.342423483152,
            "unit": "ns/iter",
            "extra": "iterations: 1277170\ncpu: 548.3218365605198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 540.1017007873511,
            "unit": "ns/iter",
            "extra": "iterations: 1293107\ncpu: 540.0611086321557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 545.1157647406658,
            "unit": "ns/iter",
            "extra": "iterations: 1285305\ncpu: 545.0874306098546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1038.7151316736092,
            "unit": "ns/iter",
            "extra": "iterations: 674129\ncpu: 1038.6850291264727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3959.443354722363,
            "unit": "ns/iter",
            "extra": "iterations: 197298\ncpu: 3959.0837210716713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17523.43610848421,
            "unit": "ns/iter",
            "extra": "iterations: 46532\ncpu: 17522.80151293735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14446.460890747514,
            "unit": "ns/iter",
            "extra": "iterations: 56649\ncpu: 14445.859591519695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14552.953155590598,
            "unit": "ns/iter",
            "extra": "iterations: 56186\ncpu: 14552.682162816369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14506.632406911946,
            "unit": "ns/iter",
            "extra": "iterations: 56130\ncpu: 14506.203456262254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37045.9541477868,
            "unit": "ns/iter",
            "extra": "iterations: 22289\ncpu: 37044.48382610262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 507561.56980704813,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 507206.4699205459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 407124.0548780545,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 407090.57223264524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 407130.41827603144,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 407118.3231276498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 406613.3201692561,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 406579.0785143394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256273.82421082936,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 256256.21198957422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 403243.2619600715,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 403222.9447282858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2045684.9008810914,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2045431.2775330453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 820601.9069767264,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 820535.7450473737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2592179.9775909083,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2591854.0616246434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4056.258149779701,
            "unit": "ns/iter",
            "extra": "iterations: 199760\ncpu: 4056.0162194633654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17449.55809089094,
            "unit": "ns/iter",
            "extra": "iterations: 47331\ncpu: 17448.75240328751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14216.186208677784,
            "unit": "ns/iter",
            "extra": "iterations: 58080\ncpu: 14215.194559228605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14459.08932178688,
            "unit": "ns/iter",
            "extra": "iterations: 56929\ncpu: 14457.775474714086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14175.776080896278,
            "unit": "ns/iter",
            "extra": "iterations: 57753\ncpu: 14174.635083891751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37087.87984702855,
            "unit": "ns/iter",
            "extra": "iterations: 22488\ncpu: 37086.428317324724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 502170.6257208852,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 502134.9480968866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 419543.8005766453,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 419517.3474291217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 412968.92534474493,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 412944.6980504025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 412601.70448048116,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 412567.01620590873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250719.22168742467,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 250712.4009060037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 411300.3906691756,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 411284.40150801156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2069352.2309416304,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2069022.645739913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 785736.6079257864,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 785649.3254637416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3888.0134374770487,
            "unit": "ns/iter",
            "extra": "iterations: 204205\ncpu: 3887.7828652579456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17197.896528564994,
            "unit": "ns/iter",
            "extra": "iterations: 47646\ncpu: 17197.028082105564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14390.692314470643,
            "unit": "ns/iter",
            "extra": "iterations: 56743\ncpu: 14389.914174435606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14264.028360906248,
            "unit": "ns/iter",
            "extra": "iterations: 57544\ncpu: 14263.4245099402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14357.879727248352,
            "unit": "ns/iter",
            "extra": "iterations: 57195\ncpu: 14357.265495235612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37633.66858220362,
            "unit": "ns/iter",
            "extra": "iterations: 22274\ncpu: 37631.41779653398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 505650.2932116415,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 504480.0342270371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 421130.2468085187,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 421126.3829787209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 412831.1237065118,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 412792.66227657424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 411028.9703808343,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 410995.3455571229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253400.33645390757,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 253384.11347517828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405084.7442075846,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 405066.7747914732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 319.8406506161977,
            "unit": "ns/iter",
            "extra": "iterations: 2186604\ncpu: 319.84296196293457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1676.7176636922895,
            "unit": "ns/iter",
            "extra": "iterations: 415887\ncpu: 1676.6013364207013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1377.3655209512326,
            "unit": "ns/iter",
            "extra": "iterations: 507514\ncpu: 1377.2843704804213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1376.5475671031625,
            "unit": "ns/iter",
            "extra": "iterations: 505118\ncpu: 1376.5312263669089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1124.6577494624578,
            "unit": "ns/iter",
            "extra": "iterations: 623140\ncpu: 1124.6100394774835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6841.485459178914,
            "unit": "ns/iter",
            "extra": "iterations: 102814\ncpu: 6841.143229521217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20217.325301556724,
            "unit": "ns/iter",
            "extra": "iterations: 34322\ncpu: 20215.88194161197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4881.480255053692,
            "unit": "ns/iter",
            "extra": "iterations: 142872\ncpu: 4881.311243630647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4901.791610047453,
            "unit": "ns/iter",
            "extra": "iterations: 142766\ncpu: 4901.549388509854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4924.599317766236,
            "unit": "ns/iter",
            "extra": "iterations: 142180\ncpu: 4924.444366296167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10417.073871368833,
            "unit": "ns/iter",
            "extra": "iterations: 67604\ncpu: 10416.756404946422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9256.244966930155,
            "unit": "ns/iter",
            "extra": "iterations: 75749\ncpu: 9255.854202695768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2392.3526009472735,
            "unit": "ns/iter",
            "extra": "iterations: 276803\ncpu: 2392.2710375248753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11881.371622651624,
            "unit": "ns/iter",
            "extra": "iterations: 59033\ncpu: 11880.85647010987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9588.350457501649,
            "unit": "ns/iter",
            "extra": "iterations: 72568\ncpu: 9587.964392018412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9464.510397128803,
            "unit": "ns/iter",
            "extra": "iterations: 74107\ncpu: 9464.16532851144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10071.865881339054,
            "unit": "ns/iter",
            "extra": "iterations: 69610\ncpu: 10071.55150122117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24617.366345681636,
            "unit": "ns/iter",
            "extra": "iterations: 28454\ncpu: 24616.099669642444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100914.52258342976,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100907.4942462591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86763.90441635837,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 86756.61203553158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86374.00496155246,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 86368.15926569115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86438.0299925917,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86431.22685756563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53791.40504292139,
            "unit": "ns/iter",
            "extra": "iterations: 13048\ncpu: 53786.2890864498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85888.55485894067,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 85882.44514106531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2285.0778809790136,
            "unit": "ns/iter",
            "extra": "iterations: 306198\ncpu: 2284.9120503726326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11377.941138285296,
            "unit": "ns/iter",
            "extra": "iterations: 61619\ncpu: 11378.02138950652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9139.679986867794,
            "unit": "ns/iter",
            "extra": "iterations: 76150\ncpu: 9139.579776756325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9034.051815479701,
            "unit": "ns/iter",
            "extra": "iterations: 77390\ncpu: 9033.57539733816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9621.69508376769,
            "unit": "ns/iter",
            "extra": "iterations: 72820\ncpu: 9620.953034880486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23572.14847352631,
            "unit": "ns/iter",
            "extra": "iterations: 29709\ncpu: 23570.50725369411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99181.14016706593,
            "unit": "ns/iter",
            "extra": "iterations: 7063\ncpu: 99176.17159846988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83202.65657170117,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 83196.66028249855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84378.94132499647,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84376.5540459306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84028.16296118543,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84023.53082562068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53652.505280879115,
            "unit": "ns/iter",
            "extra": "iterations: 13066\ncpu: 53648.591764885336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84772.51950247136,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84766.00652095163 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573938953,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 784.9440571961089,
            "unit": "ns/iter",
            "extra": "iterations: 888032\ncpu: 784.9249801808945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11646.027483198133,
            "unit": "ns/iter",
            "extra": "iterations: 71571\ncpu: 11645.802070671083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25575.70941086532,
            "unit": "ns/iter",
            "extra": "iterations: 32675\ncpu: 25575.528691660296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40288.61472528577,
            "unit": "ns/iter",
            "extra": "iterations: 20767\ncpu: 40286.61819232438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50370.85120112266,
            "unit": "ns/iter",
            "extra": "iterations: 15652\ncpu: 50369.20521339127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51921.21110000017,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51916.800000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63098.08483271771,
            "unit": "ns/iter",
            "extra": "iterations: 13839\ncpu: 63096.37257027245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72945.11385390675,
            "unit": "ns/iter",
            "extra": "iterations: 11910\ncpu: 72942.18303946266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83568.40891231483,
            "unit": "ns/iter",
            "extra": "iterations: 10435\ncpu: 83566.71777671298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 663.2367892197026,
            "unit": "ns/iter",
            "extra": "iterations: 1055407\ncpu: 663.2237610703735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 563.2871630756084,
            "unit": "ns/iter",
            "extra": "iterations: 1242712\ncpu: 563.2589851872352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 547.7790256277345,
            "unit": "ns/iter",
            "extra": "iterations: 1283452\ncpu: 547.7437410982258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 545.8232342185523,
            "unit": "ns/iter",
            "extra": "iterations: 1281713\ncpu: 545.8030776000556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1039.6353425248521,
            "unit": "ns/iter",
            "extra": "iterations: 671995\ncpu: 1039.6254436416948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4044.5423130173394,
            "unit": "ns/iter",
            "extra": "iterations: 197906\ncpu: 4044.3619698240573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17680.257547312875,
            "unit": "ns/iter",
            "extra": "iterations: 46341\ncpu: 17680.147169892763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14599.985183610475,
            "unit": "ns/iter",
            "extra": "iterations: 56424\ncpu: 14599.794413724649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14317.350329547893,
            "unit": "ns/iter",
            "extra": "iterations: 57503\ncpu: 14317.48778324609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14421.17960697798,
            "unit": "ns/iter",
            "extra": "iterations: 57147\ncpu: 14420.18303672986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37321.12709240208,
            "unit": "ns/iter",
            "extra": "iterations: 22283\ncpu: 37320.16335322885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 500617.7111237056,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 500527.3552780942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 408141.7454375333,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 408131.58633598476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410541.80227593944,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 410531.05737316253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 408116.3789374712,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 408090.6911142452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 254601.7966937287,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 254597.3027842233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 403304.82452036254,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 403269.5835283111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2036227.9298245318,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2036114.2543859647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 796671.6539763352,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 796647.3773265672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2579917.4957983117,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2579810.3641456533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3948.8326172519523,
            "unit": "ns/iter",
            "extra": "iterations: 194112\ncpu: 3948.7022955819307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17795.00261572362,
            "unit": "ns/iter",
            "extra": "iterations: 46641\ncpu: 17794.766407238243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14428.670074187614,
            "unit": "ns/iter",
            "extra": "iterations: 57422\ncpu: 14428.62491727915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14654.313111510797,
            "unit": "ns/iter",
            "extra": "iterations: 56622\ncpu: 14654.187418318044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14399.836311750583,
            "unit": "ns/iter",
            "extra": "iterations: 57469\ncpu: 14399.631105465602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37620.78167553403,
            "unit": "ns/iter",
            "extra": "iterations: 22178\ncpu: 37619.14509874633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 509507.6389214794,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 509498.241500584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416993.53725678,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 416961.27195064025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 415480.4850781647,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 415471.90904784465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 413703.85370456555,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 413688.62671071145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249677.97965616442,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 249662.4641833809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 410456.05401661614,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 410449.3536472734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2051585.6749435624,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2051336.7945823905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 798641.969957037,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 798623.0901287559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3898.4505020606807,
            "unit": "ns/iter",
            "extra": "iterations: 204059\ncpu: 3898.12456201393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17196.792744499144,
            "unit": "ns/iter",
            "extra": "iterations: 48129\ncpu: 17196.561324773036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14477.989279468076,
            "unit": "ns/iter",
            "extra": "iterations: 57180\ncpu: 14477.317243791642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14331.265253001988,
            "unit": "ns/iter",
            "extra": "iterations: 57628\ncpu: 14330.811411119623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14391.839641276845,
            "unit": "ns/iter",
            "extra": "iterations: 57203\ncpu: 14390.552943027425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37663.00790460926,
            "unit": "ns/iter",
            "extra": "iterations: 22392\ncpu: 37661.64701679175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 495375.885909895,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 495366.57159155863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408878.89236605895,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 408852.25225225335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 407218.5058823433,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 407209.3176470597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 406498.8800936551,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 406467.4473067933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 249550.11732799385,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 249544.5047102489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 411232.14987835067,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 411220.291970802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 318.8463089000126,
            "unit": "ns/iter",
            "extra": "iterations: 2153098\ncpu: 318.849118804626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1691.3609959005728,
            "unit": "ns/iter",
            "extra": "iterations: 415182\ncpu: 1691.3344027438527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1421.849840544559,
            "unit": "ns/iter",
            "extra": "iterations: 508606\ncpu: 1421.8455936422256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1409.0383453680702,
            "unit": "ns/iter",
            "extra": "iterations: 496618\ncpu: 1408.9565823228274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1127.5427439906043,
            "unit": "ns/iter",
            "extra": "iterations: 620403\ncpu: 1127.5229165558592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6873.780043117612,
            "unit": "ns/iter",
            "extra": "iterations: 102511\ncpu: 6873.582347260306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19639.770960345493,
            "unit": "ns/iter",
            "extra": "iterations: 35758\ncpu: 19639.177247049724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4923.296378890015,
            "unit": "ns/iter",
            "extra": "iterations: 139460\ncpu: 4923.281944643639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4895.964622493091,
            "unit": "ns/iter",
            "extra": "iterations: 143057\ncpu: 4895.898837526306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4904.376025360719,
            "unit": "ns/iter",
            "extra": "iterations: 142267\ncpu: 4904.227262822751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10465.151754804103,
            "unit": "ns/iter",
            "extra": "iterations: 67016\ncpu: 10464.74424018147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9299.563596986893,
            "unit": "ns/iter",
            "extra": "iterations: 75263\ncpu: 9299.538950081747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2365.314556569227,
            "unit": "ns/iter",
            "extra": "iterations: 294939\ncpu: 2365.2402700219322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11792.015889244658,
            "unit": "ns/iter",
            "extra": "iterations: 59663\ncpu: 11791.958165026956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9451.137366270108,
            "unit": "ns/iter",
            "extra": "iterations: 74123\ncpu: 9450.601028020903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9286.316450481185,
            "unit": "ns/iter",
            "extra": "iterations: 75244\ncpu: 9286.087927276514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9943.734380329452,
            "unit": "ns/iter",
            "extra": "iterations: 70360\ncpu: 9943.354178510539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24416.710763660318,
            "unit": "ns/iter",
            "extra": "iterations: 28717\ncpu: 24416.4536685585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100712.04252874029,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 100713.06034482663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86712.48859692711,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 86712.01041150327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86759.0898255121,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86756.99188989849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86047.53882179248,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 86037.30589105385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53326.62323355237,
            "unit": "ns/iter",
            "extra": "iterations: 13162\ncpu: 53325.26971584829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85609.34327628056,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85606.46699266546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2316.030657735089,
            "unit": "ns/iter",
            "extra": "iterations: 302599\ncpu: 2315.9081821155855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11417.321019584488,
            "unit": "ns/iter",
            "extra": "iterations: 61476\ncpu: 11416.930184136821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9130.931695986146,
            "unit": "ns/iter",
            "extra": "iterations: 76628\ncpu: 9130.119538549881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9061.539702104335,
            "unit": "ns/iter",
            "extra": "iterations: 77074\ncpu: 9061.058203804032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9616.886484189534,
            "unit": "ns/iter",
            "extra": "iterations: 72959\ncpu: 9616.77654573115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23913.366720185964,
            "unit": "ns/iter",
            "extra": "iterations: 29273\ncpu: 23913.57223379921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98547.12225661245,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 98539.5329206523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83804.43481897366,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83797.49073963476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83528.97908449311,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83525.69618740259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83559.31085289792,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83553.85721130743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53852.10842445522,
            "unit": "ns/iter",
            "extra": "iterations: 12986\ncpu: 53852.58740181787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85280.0839917351,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 85274.49860216367 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771599954,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 789.2495887429105,
            "unit": "ns/iter",
            "extra": "iterations: 891170\ncpu: 789.2429053940326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11556.572370071599,
            "unit": "ns/iter",
            "extra": "iterations: 71770\ncpu: 11555.740560122616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25589.030162909967,
            "unit": "ns/iter",
            "extra": "iterations: 32656\ncpu: 25588.80756981872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41373.8036427645,
            "unit": "ns/iter",
            "extra": "iterations: 21028\ncpu: 41370.21114704206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50997.66651575153,
            "unit": "ns/iter",
            "extra": "iterations: 15461\ncpu: 50994.094819222526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52409.01540000209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52405.24000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63558.33957726116,
            "unit": "ns/iter",
            "extra": "iterations: 13720\ncpu: 63555.750728862986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73735.78201750833,
            "unit": "ns/iter",
            "extra": "iterations: 11767\ncpu: 73727.50913571857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84467.27985652859,
            "unit": "ns/iter",
            "extra": "iterations: 10316\ncpu: 84463.63900736725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 664.8771230981594,
            "unit": "ns/iter",
            "extra": "iterations: 1053119\ncpu: 664.8129033850871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 574.4382230767457,
            "unit": "ns/iter",
            "extra": "iterations: 1219096\ncpu: 574.3852001811183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 562.5218544482203,
            "unit": "ns/iter",
            "extra": "iterations: 1245330\ncpu: 562.4865698248651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 562.6411693962211,
            "unit": "ns/iter",
            "extra": "iterations: 1241427\ncpu: 562.6043255060515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1039.942766508032,
            "unit": "ns/iter",
            "extra": "iterations: 673976\ncpu: 1039.8916281885392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4029.0652097376237,
            "unit": "ns/iter",
            "extra": "iterations: 198820\ncpu: 4028.883915099088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17780.018134096463,
            "unit": "ns/iter",
            "extra": "iterations: 46101\ncpu: 17779.163141797373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14686.233070725233,
            "unit": "ns/iter",
            "extra": "iterations: 55850\ncpu: 14684.594449418073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14706.073831758955,
            "unit": "ns/iter",
            "extra": "iterations: 55789\ncpu: 14705.393536360227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14727.836490850248,
            "unit": "ns/iter",
            "extra": "iterations: 55740\ncpu: 14726.440617151055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37461.30139152406,
            "unit": "ns/iter",
            "extra": "iterations: 22134\ncpu: 37460.472576127206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 503416.71794872754,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 503364.8018648015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 413391.7416427762,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 413367.3352435517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 413620.85928432434,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 413598.69439071504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 414414.90421454277,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 414370.11494252906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255697.8359169277,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 255695.70049722158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 409756.5035629372,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 409713.1116389547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2040715.9754464643,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2040402.0089285688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 796226.1471825277,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 796195.2060555099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2579305.564245768,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2579283.5195530723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3939.933475092678,
            "unit": "ns/iter",
            "extra": "iterations: 199399\ncpu: 3939.7544621587886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17654.192433362467,
            "unit": "ns/iter",
            "extra": "iterations: 46520\ncpu: 17653.482373172817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14299.458293166346,
            "unit": "ns/iter",
            "extra": "iterations: 57053\ncpu: 14298.974637617646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14440.294918137406,
            "unit": "ns/iter",
            "extra": "iterations: 56436\ncpu: 14440.172939258657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14248.471046867458,
            "unit": "ns/iter",
            "extra": "iterations: 57075\ncpu: 14248.071835304372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37709.77113682803,
            "unit": "ns/iter",
            "extra": "iterations: 22035\ncpu: 37708.56364874046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 513934.1285965971,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 513924.8972401649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 419289.24202898855,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 419257.77777777764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 418207.5932445284,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 418183.4443387224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 415326.5821037556,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 415292.71775345295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249419.80760500312,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 249393.89897843398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 412525.12564704055,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 412521.74117646983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2054808.0044641942,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2054611.3839285634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 806299.8856152312,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 806279.029462735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3880.7332747887067,
            "unit": "ns/iter",
            "extra": "iterations: 206111\ncpu: 3880.588614872579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16989.0156138505,
            "unit": "ns/iter",
            "extra": "iterations: 47650\ncpu: 16988.587618048146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14296.777362085313,
            "unit": "ns/iter",
            "extra": "iterations: 57735\ncpu: 14296.286481337125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14221.626242681774,
            "unit": "ns/iter",
            "extra": "iterations: 58241\ncpu: 14221.34235332505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14285.050175008617,
            "unit": "ns/iter",
            "extra": "iterations: 57997\ncpu: 14284.504370915778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37639.59152104192,
            "unit": "ns/iter",
            "extra": "iterations: 22432\ncpu: 37638.27121968596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 493588.93633802515,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 493574.0281690145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 411277.4364148294,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 411268.7939934278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 408162.74754098366,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 408152.88056205993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 409160.4361851385,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 409148.4338475928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251674.1541321151,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 251672.03317128978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405599.7916471077,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 405587.0952604413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 331.2707494777795,
            "unit": "ns/iter",
            "extra": "iterations: 2109282\ncpu: 331.2595470875868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1698.847466798604,
            "unit": "ns/iter",
            "extra": "iterations: 412107\ncpu: 1698.7857522439465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1360.8373622829688,
            "unit": "ns/iter",
            "extra": "iterations: 514733\ncpu: 1360.8272638435767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1363.0660876491695,
            "unit": "ns/iter",
            "extra": "iterations: 514665\ncpu: 1363.0213828412714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1136.0806737268567,
            "unit": "ns/iter",
            "extra": "iterations: 608674\ncpu: 1136.0532896098828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6754.664412559382,
            "unit": "ns/iter",
            "extra": "iterations: 103219\ncpu: 6754.433776727162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20517.31262431122,
            "unit": "ns/iter",
            "extra": "iterations: 34188\ncpu: 20516.792441792473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4911.276006705618,
            "unit": "ns/iter",
            "extra": "iterations: 142569\ncpu: 4911.064817737314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4879.281126264876,
            "unit": "ns/iter",
            "extra": "iterations: 143199\ncpu: 4879.247760110053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4927.6352123779625,
            "unit": "ns/iter",
            "extra": "iterations: 142058\ncpu: 4927.470469808024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10383.372797128091,
            "unit": "ns/iter",
            "extra": "iterations: 67412\ncpu: 10383.138016970275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9297.492992239568,
            "unit": "ns/iter",
            "extra": "iterations: 75131\ncpu: 9297.021202965614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2367.5662452175375,
            "unit": "ns/iter",
            "extra": "iterations: 295093\ncpu: 2367.5139701721246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11868.980532353029,
            "unit": "ns/iter",
            "extra": "iterations: 59021\ncpu: 11868.597617797053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9553.656323144882,
            "unit": "ns/iter",
            "extra": "iterations: 73057\ncpu: 9553.341911110396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9323.56219967996,
            "unit": "ns/iter",
            "extra": "iterations: 74920\ncpu: 9323.491724506113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9971.129387964382,
            "unit": "ns/iter",
            "extra": "iterations: 70192\ncpu: 9970.919762936055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24509.386081716242,
            "unit": "ns/iter",
            "extra": "iterations: 28538\ncpu: 24509.177237368007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101212.5940809464,
            "unit": "ns/iter",
            "extra": "iterations: 6893\ncpu: 101208.9801247635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86395.07716164227,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86393.27626845324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86785.74500806729,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86783.62892223815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86307.28776090253,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 86304.22378658631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54141.20657458301,
            "unit": "ns/iter",
            "extra": "iterations: 12959\ncpu: 54140.08796975086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86712.81916615048,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 86708.86123210896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2318.258013837123,
            "unit": "ns/iter",
            "extra": "iterations: 301073\ncpu: 2318.1806405755183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11516.448621348545,
            "unit": "ns/iter",
            "extra": "iterations: 60784\ncpu: 11516.06672808613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9174.34344742722,
            "unit": "ns/iter",
            "extra": "iterations: 76428\ncpu: 9174.034385303803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9124.975541480777,
            "unit": "ns/iter",
            "extra": "iterations: 77519\ncpu: 9124.779731420733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9609.610081287012,
            "unit": "ns/iter",
            "extra": "iterations: 72828\ncpu: 9609.176415664168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23597.608650073267,
            "unit": "ns/iter",
            "extra": "iterations: 29572\ncpu: 23597.419856620836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99856.21196192314,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 99851.6834777663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84718.75642431034,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 84716.64839849126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84715.31690821565,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84713.68357487764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84753.89980615629,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84751.21153380102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54218.21641501853,
            "unit": "ns/iter",
            "extra": "iterations: 12915\ncpu: 54216.03561749821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85953.08577380276,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85949.98161990049 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772079382,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 779.3069404281753,
            "unit": "ns/iter",
            "extra": "iterations: 896011\ncpu: 779.2848525297123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11319.135419345548,
            "unit": "ns/iter",
            "extra": "iterations: 69990\ncpu: 11319.052721817403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24917.691479442306,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 24917.474209750664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39470.78049013967,
            "unit": "ns/iter",
            "extra": "iterations: 20892\ncpu: 39470.917097453574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50475.271493494394,
            "unit": "ns/iter",
            "extra": "iterations: 16063\ncpu: 50474.61868891239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51883.840700003246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51876.10000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62691.84758417623,
            "unit": "ns/iter",
            "extra": "iterations: 13929\ncpu: 62691.815636441956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72459.34378387402,
            "unit": "ns/iter",
            "extra": "iterations: 11993\ncpu: 72457.80038355707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82697.41300227768,
            "unit": "ns/iter",
            "extra": "iterations: 10552\ncpu: 82692.51326762699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 651.2314888433051,
            "unit": "ns/iter",
            "extra": "iterations: 1075365\ncpu: 651.1945246497695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 573.5908720310891,
            "unit": "ns/iter",
            "extra": "iterations: 1233878\ncpu: 573.5678892078482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 555.101521699633,
            "unit": "ns/iter",
            "extra": "iterations: 1265690\ncpu: 555.0828401899366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 556.4182684894532,
            "unit": "ns/iter",
            "extra": "iterations: 1245248\ncpu: 556.4146258415997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1056.5083780439472,
            "unit": "ns/iter",
            "extra": "iterations: 663341\ncpu: 1056.4790959702484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3965.2871053230306,
            "unit": "ns/iter",
            "extra": "iterations: 201494\ncpu: 3965.218815448598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17241.262890954902,
            "unit": "ns/iter",
            "extra": "iterations: 47320\ncpu: 17241.145393068477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14509.61940154007,
            "unit": "ns/iter",
            "extra": "iterations: 56779\ncpu: 14509.378467391094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14583.542043616002,
            "unit": "ns/iter",
            "extra": "iterations: 56263\ncpu: 14582.882178341011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14484.779063410293,
            "unit": "ns/iter",
            "extra": "iterations: 56695\ncpu: 14484.049739835973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37972.29604334726,
            "unit": "ns/iter",
            "extra": "iterations: 21963\ncpu: 37972.78604926463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 497636.4657849483,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 497610.35077630903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 407746.2271662738,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 407729.13348946226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 408303.2756501034,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 408292.624113476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 407703.18250592257,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 407690.30732860556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 253254.61993588562,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 253249.57738268696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 405447.25724977313,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 405429.513564078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2028860.1876379356,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2028593.8189845437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 814166.1272727157,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 814130.5627705615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2574936.806094219,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2574614.681440447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3980.9620648048895,
            "unit": "ns/iter",
            "extra": "iterations: 203874\ncpu: 3980.8136397971166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17108.329895205272,
            "unit": "ns/iter",
            "extra": "iterations: 48476\ncpu: 17107.657397475003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14422.329060952079,
            "unit": "ns/iter",
            "extra": "iterations: 57111\ncpu: 14422.218136611229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14387.929994259146,
            "unit": "ns/iter",
            "extra": "iterations: 57481\ncpu: 14387.637654181348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14335.333745838048,
            "unit": "ns/iter",
            "extra": "iterations: 57373\ncpu: 14335.34066546987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37611.0129224661,
            "unit": "ns/iter",
            "extra": "iterations: 22132\ncpu: 37610.40574733427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 504753.69426751474,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 504759.64099594805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 420233.0358851847,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 420218.70813397085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 415270.5570950787,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 415256.4739608243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 413666.47848700476,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 413657.0212765964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 247135.15958050225,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 247123.41269841185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 411919.2118483405,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 411924.50236966915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2044550.401785702,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2044323.2142857148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 795370.3740392921,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 795346.7976088818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4157.516658998275,
            "unit": "ns/iter",
            "extra": "iterations: 199952\ncpu: 4157.333760102456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17553.457424348777,
            "unit": "ns/iter",
            "extra": "iterations: 46893\ncpu: 17552.562216109145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14323.89999477917,
            "unit": "ns/iter",
            "extra": "iterations: 57467\ncpu: 14323.223763203157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14223.331051175568,
            "unit": "ns/iter",
            "extra": "iterations: 57840\ncpu: 14222.778354080223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14309.260203904982,
            "unit": "ns/iter",
            "extra": "iterations: 57478\ncpu: 14308.86426110861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36811.29974943992,
            "unit": "ns/iter",
            "extra": "iterations: 22749\ncpu: 36810.20264627036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 503735.43187065446,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 503711.66281755146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 412172.2809254001,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 412149.3389990534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 412494.3857344105,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 412482.07414359634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 410811.44756552676,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 410792.2752808963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 250111.38947070212,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 250099.9433908845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405286.97522207,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 405272.46376811474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 320.0353677352749,
            "unit": "ns/iter",
            "extra": "iterations: 2191291\ncpu: 320.02572912497806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1687.560101321621,
            "unit": "ns/iter",
            "extra": "iterations: 414916\ncpu: 1687.4986744304756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1378.2777596843048,
            "unit": "ns/iter",
            "extra": "iterations: 525051\ncpu: 1378.2251628889383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1323.7342452396708,
            "unit": "ns/iter",
            "extra": "iterations: 529221\ncpu: 1323.6895361295146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1128.2401251151407,
            "unit": "ns/iter",
            "extra": "iterations: 620868\ncpu: 1128.1947209390719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6794.088898036909,
            "unit": "ns/iter",
            "extra": "iterations: 102027\ncpu: 6793.916316269266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19602.983289949054,
            "unit": "ns/iter",
            "extra": "iterations: 35727\ncpu: 19602.07686063767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4906.803027218426,
            "unit": "ns/iter",
            "extra": "iterations: 142441\ncpu: 4906.566929465542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4961.1493910212575,
            "unit": "ns/iter",
            "extra": "iterations: 141220\ncpu: 4960.962328282062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4959.741018250032,
            "unit": "ns/iter",
            "extra": "iterations: 141203\ncpu: 4959.536978676053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10487.58640829007,
            "unit": "ns/iter",
            "extra": "iterations: 66776\ncpu: 10487.085180304313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9357.436078767092,
            "unit": "ns/iter",
            "extra": "iterations: 74803\ncpu: 9356.92819806694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2378.8800462066174,
            "unit": "ns/iter",
            "extra": "iterations: 294330\ncpu: 2378.779940882683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11852.549567634334,
            "unit": "ns/iter",
            "extra": "iterations: 58284\ncpu: 11852.489534005863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9539.383798411725,
            "unit": "ns/iter",
            "extra": "iterations: 73536\ncpu: 9539.183529155755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9461.37669347452,
            "unit": "ns/iter",
            "extra": "iterations: 74108\ncpu: 9460.961029848393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10090.24383636637,
            "unit": "ns/iter",
            "extra": "iterations: 69399\ncpu: 10089.538754160594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24739.29872739445,
            "unit": "ns/iter",
            "extra": "iterations: 28367\ncpu: 24738.216942221326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100462.52112877663,
            "unit": "ns/iter",
            "extra": "iterations: 6981\ncpu: 100456.36728262456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86166.1977345498,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 86164.65156365484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87136.21184651638,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 87135.36570222201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86369.2481823777,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86366.51879235885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53278.325898953415,
            "unit": "ns/iter",
            "extra": "iterations: 13182\ncpu: 53276.26308602635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86198.03236880753,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 86193.68563021118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2313.886927989466,
            "unit": "ns/iter",
            "extra": "iterations: 301109\ncpu: 2313.7392107177075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11540.803317972679,
            "unit": "ns/iter",
            "extra": "iterations: 59675\ncpu: 11540.54461667365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9207.59537245994,
            "unit": "ns/iter",
            "extra": "iterations: 76196\ncpu: 9207.241849965865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9137.297554684053,
            "unit": "ns/iter",
            "extra": "iterations: 76759\ncpu: 9136.918146406324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9710.060239463994,
            "unit": "ns/iter",
            "extra": "iterations: 72328\ncpu: 9709.643568189336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23776.36244867485,
            "unit": "ns/iter",
            "extra": "iterations: 29469\ncpu: 23775.218025722108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99222.91370990455,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 99221.3738291238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84157.1988451818,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84154.81775532299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84631.0094043886,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84629.56353990856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84301.35492788738,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84301.3942307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53978.195588685274,
            "unit": "ns/iter",
            "extra": "iterations: 13012\ncpu: 53977.39010144462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85646.876175359,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85647.18524850499 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}