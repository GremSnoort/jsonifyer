window.BENCHMARK_DATA = {
  "lastUpdate": 1702397912350,
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
      }
    ]
  }
}