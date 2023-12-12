window.BENCHMARK_DATA = {
  "lastUpdate": 1702418339735,
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
      }
    ]
  }
}