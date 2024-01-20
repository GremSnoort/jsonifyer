window.BENCHMARK_DATA = {
  "lastUpdate": 1705777678467,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-7 18.04 Debug c++-17": [
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
        "date": 1702489555695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8286.926958909797,
            "unit": "ns/iter",
            "extra": "iterations: 84473\ncpu: 8286.444189267579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77750.54589372315,
            "unit": "ns/iter",
            "extra": "iterations: 10971\ncpu: 77747.74405250206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148026.91211965142,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 148019.22488526264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 217930.9987446479,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 217918.0015064023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288072.7646082012,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 288060.9229747676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358549.666391424,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 358528.9430222956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 428128.1941843649,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 428120.4534253326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 495834.2578436733,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 495793.3257273244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 564862.7092481721,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 564831.2042581503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6294.044782200256,
            "unit": "ns/iter",
            "extra": "iterations: 110468\ncpu: 6293.832603106771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5381.786705899794,
            "unit": "ns/iter",
            "extra": "iterations: 130163\ncpu: 5381.716770510816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5274.305236183798,
            "unit": "ns/iter",
            "extra": "iterations: 132291\ncpu: 5273.943049791748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5405.028637920418,
            "unit": "ns/iter",
            "extra": "iterations: 129339\ncpu: 5404.853137877986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9572.030567086988,
            "unit": "ns/iter",
            "extra": "iterations: 72987\ncpu: 9571.673037664243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36576.297279303326,
            "unit": "ns/iter",
            "extra": "iterations: 22531\ncpu: 36575.44272335891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143419.34028009622,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 143409.65321773934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114568.15684182291,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 114564.96399039702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119259.09807185442,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 119255.083922874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116667.16751060034,
            "unit": "ns/iter",
            "extra": "iterations: 7307\ncpu: 116663.55549473067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 303324.7642732152,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 303301.01576182165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2339176.688607512,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2339085.0632911385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1927612.9896481854,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1927514.0786749488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1933827.3739669814,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1933783.0578512382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1935834.4499998735,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1935652.083333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1145730.8759214452,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1145705.52825553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1870862.7419353859,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1870771.1693548353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7646922.77999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7645951.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4329967.186046371,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4329731.627906977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9512042.649122888,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9511869.298245624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33934.994495032675,
            "unit": "ns/iter",
            "extra": "iterations: 24160\ncpu: 33933.83278145686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148135.9086611459,
            "unit": "ns/iter",
            "extra": "iterations: 5923\ncpu: 148133.59783893294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115665.90046234491,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 115658.34919771575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120593.47655152196,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 120586.74529626533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117585.32606897679,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 117577.66896551731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 300483.17868339684,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 300470.3239289441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2359316.121518981,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359243.797468354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1954194.5919660493,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954108.0338266382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1934206.3991686027,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1934131.600831613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1952939.761006134,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952837.9454926632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1144204.8728395654,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1144165.1851851845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1880340.2741934494,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1880218.3467741916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7719730.2500007935,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7719437.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4212180.674208327,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4211860.633484181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33515.99893799377,
            "unit": "ns/iter",
            "extra": "iterations: 24482\ncpu: 33516.14655665385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140608.41097018323,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 140605.84747158596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 114658.5533628657,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 114655.30943750813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 120814.00141025068,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 120805.8524890701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115017.72445481045,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 115014.9636538201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 302947.4989517766,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 302943.43116701674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2343077.1407034495,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2343062.0603015125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1932851.9502074071,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1932786.7219916969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1930777.3913045705,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1930754.0372670775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1937864.2937499061,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1937843.74999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1130923.3255527355,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1130877.27272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1874146.6827309816,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1874116.4658634656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3229.9788257898394,
            "unit": "ns/iter",
            "extra": "iterations: 216537\ncpu: 3229.78567173278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17026.519603554814,
            "unit": "ns/iter",
            "extra": "iterations: 41166\ncpu: 17026.266822134778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13479.944465905959,
            "unit": "ns/iter",
            "extra": "iterations: 51770\ncpu: 13479.793316592697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13639.95384346051,
            "unit": "ns/iter",
            "extra": "iterations: 51412\ncpu: 13639.261261962147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11074.637249193054,
            "unit": "ns/iter",
            "extra": "iterations: 63545\ncpu: 11049.088047840083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69240.89477848612,
            "unit": "ns/iter",
            "extra": "iterations: 10112\ncpu: 69238.62737341793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154442.90943230124,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 154438.76739562632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39385.127446568025,
            "unit": "ns/iter",
            "extra": "iterations: 17780\ncpu: 39383.28458942655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39327.71836277231,
            "unit": "ns/iter",
            "extra": "iterations: 17835\ncpu: 39327.4852817491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39466.140438981296,
            "unit": "ns/iter",
            "extra": "iterations: 17723\ncpu: 39464.94950064886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80052.85256999818,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 80051.67508031178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71011.25374645795,
            "unit": "ns/iter",
            "extra": "iterations: 9876\ncpu: 71007.49291210953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21531.315452020724,
            "unit": "ns/iter",
            "extra": "iterations: 32753\ncpu: 21530.726956309554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103482.19432539765,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 103478.73503768088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83476.42336114949,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83471.12038140655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84012.05773615785,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 84011.41519625449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84481.4328232385,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84475.04518616626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 170545.0526315792,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 170494.04734543772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 655537.5009362363,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655521.6292134771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 563869.0523770928,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 563855.7614826696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 561205.6503215994,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 561201.8488745996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562833.2630731978,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 562806.3555913079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 367849.6255252067,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 367839.07563025097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 551556.2488226373,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 551534.4583987432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21823.303105665316,
            "unit": "ns/iter",
            "extra": "iterations: 32167\ncpu: 21823.011160506147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104377.81144980692,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104372.41635687699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84208.46217678,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84204.32952495481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83758.9734608419,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83759.21099820556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84770.10999515736,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84765.96079380397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158186.2179023376,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 158184.38065099638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 658723.7381851574,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 658683.270321357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 562702.438071549,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 562683.7073981798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 561966.2914331267,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 561967.4139311439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 559536.5667466075,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 559517.985611509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364978.06422975,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 364967.57180157205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 547149.8433829724,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 547110.2584181688 ns\nthreads: 1"
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
        "date": 1702489555695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8286.926958909797,
            "unit": "ns/iter",
            "extra": "iterations: 84473\ncpu: 8286.444189267579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77750.54589372315,
            "unit": "ns/iter",
            "extra": "iterations: 10971\ncpu: 77747.74405250206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148026.91211965142,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 148019.22488526264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 217930.9987446479,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 217918.0015064023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288072.7646082012,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 288060.9229747676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358549.666391424,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 358528.9430222956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 428128.1941843649,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 428120.4534253326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 495834.2578436733,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 495793.3257273244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 564862.7092481721,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 564831.2042581503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6294.044782200256,
            "unit": "ns/iter",
            "extra": "iterations: 110468\ncpu: 6293.832603106771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5381.786705899794,
            "unit": "ns/iter",
            "extra": "iterations: 130163\ncpu: 5381.716770510816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5274.305236183798,
            "unit": "ns/iter",
            "extra": "iterations: 132291\ncpu: 5273.943049791748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5405.028637920418,
            "unit": "ns/iter",
            "extra": "iterations: 129339\ncpu: 5404.853137877986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9572.030567086988,
            "unit": "ns/iter",
            "extra": "iterations: 72987\ncpu: 9571.673037664243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36576.297279303326,
            "unit": "ns/iter",
            "extra": "iterations: 22531\ncpu: 36575.44272335891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143419.34028009622,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 143409.65321773934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114568.15684182291,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 114564.96399039702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119259.09807185442,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 119255.083922874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116667.16751060034,
            "unit": "ns/iter",
            "extra": "iterations: 7307\ncpu: 116663.55549473067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 303324.7642732152,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 303301.01576182165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2339176.688607512,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2339085.0632911385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1927612.9896481854,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1927514.0786749488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1933827.3739669814,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1933783.0578512382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1935834.4499998735,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1935652.083333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1145730.8759214452,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1145705.52825553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1870862.7419353859,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1870771.1693548353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7646922.77999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7645951.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4329967.186046371,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4329731.627906977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9512042.649122888,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9511869.298245624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33934.994495032675,
            "unit": "ns/iter",
            "extra": "iterations: 24160\ncpu: 33933.83278145686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148135.9086611459,
            "unit": "ns/iter",
            "extra": "iterations: 5923\ncpu: 148133.59783893294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115665.90046234491,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 115658.34919771575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120593.47655152196,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 120586.74529626533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117585.32606897679,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 117577.66896551731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 300483.17868339684,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 300470.3239289441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2359316.121518981,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359243.797468354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1954194.5919660493,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954108.0338266382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1934206.3991686027,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1934131.600831613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1952939.761006134,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952837.9454926632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1144204.8728395654,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1144165.1851851845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1880340.2741934494,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1880218.3467741916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7719730.2500007935,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7719437.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4212180.674208327,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4211860.633484181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33515.99893799377,
            "unit": "ns/iter",
            "extra": "iterations: 24482\ncpu: 33516.14655665385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140608.41097018323,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 140605.84747158596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 114658.5533628657,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 114655.30943750813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 120814.00141025068,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 120805.8524890701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115017.72445481045,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 115014.9636538201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 302947.4989517766,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 302943.43116701674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2343077.1407034495,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2343062.0603015125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1932851.9502074071,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1932786.7219916969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1930777.3913045705,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1930754.0372670775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1937864.2937499061,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1937843.74999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1130923.3255527355,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1130877.27272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1874146.6827309816,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1874116.4658634656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3229.9788257898394,
            "unit": "ns/iter",
            "extra": "iterations: 216537\ncpu: 3229.78567173278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17026.519603554814,
            "unit": "ns/iter",
            "extra": "iterations: 41166\ncpu: 17026.266822134778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13479.944465905959,
            "unit": "ns/iter",
            "extra": "iterations: 51770\ncpu: 13479.793316592697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13639.95384346051,
            "unit": "ns/iter",
            "extra": "iterations: 51412\ncpu: 13639.261261962147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11074.637249193054,
            "unit": "ns/iter",
            "extra": "iterations: 63545\ncpu: 11049.088047840083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69240.89477848612,
            "unit": "ns/iter",
            "extra": "iterations: 10112\ncpu: 69238.62737341793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154442.90943230124,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 154438.76739562632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39385.127446568025,
            "unit": "ns/iter",
            "extra": "iterations: 17780\ncpu: 39383.28458942655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39327.71836277231,
            "unit": "ns/iter",
            "extra": "iterations: 17835\ncpu: 39327.4852817491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39466.140438981296,
            "unit": "ns/iter",
            "extra": "iterations: 17723\ncpu: 39464.94950064886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80052.85256999818,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 80051.67508031178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71011.25374645795,
            "unit": "ns/iter",
            "extra": "iterations: 9876\ncpu: 71007.49291210953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21531.315452020724,
            "unit": "ns/iter",
            "extra": "iterations: 32753\ncpu: 21530.726956309554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103482.19432539765,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 103478.73503768088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83476.42336114949,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83471.12038140655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84012.05773615785,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 84011.41519625449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84481.4328232385,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84475.04518616626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 170545.0526315792,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 170494.04734543772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 655537.5009362363,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655521.6292134771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 563869.0523770928,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 563855.7614826696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 561205.6503215994,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 561201.8488745996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562833.2630731978,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 562806.3555913079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 367849.6255252067,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 367839.07563025097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 551556.2488226373,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 551534.4583987432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21823.303105665316,
            "unit": "ns/iter",
            "extra": "iterations: 32167\ncpu: 21823.011160506147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104377.81144980692,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104372.41635687699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84208.46217678,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84204.32952495481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83758.9734608419,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83759.21099820556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84770.10999515736,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84765.96079380397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158186.2179023376,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 158184.38065099638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 658723.7381851574,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 658683.270321357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 562702.438071549,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 562683.7073981798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 561966.2914331267,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 561967.4139311439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 559536.5667466075,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 559517.985611509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364978.06422975,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 364967.57180157205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 547149.8433829724,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 547110.2584181688 ns\nthreads: 1"
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
        "date": 1702492181046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8450.313242856188,
            "unit": "ns/iter",
            "extra": "iterations: 83041\ncpu: 8450.119820329717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78420.69360709324,
            "unit": "ns/iter",
            "extra": "iterations: 10715\ncpu: 78415.97760149323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149017.43990384936,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 149012.68887362638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219464.30101009313,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 219456.21212121221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290127.62411822414,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 290120.82633523684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358956.6766541747,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 358941.3233458175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424874.096504203,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 424845.24864598707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 497747.99828375527,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 497726.0869565216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 564855.9286640986,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 564837.224383917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6428.292012357994,
            "unit": "ns/iter",
            "extra": "iterations: 109081\ncpu: 6428.133222101004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5560.180328517012,
            "unit": "ns/iter",
            "extra": "iterations: 126447\ncpu: 5560.187272137728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5441.7432096442335,
            "unit": "ns/iter",
            "extra": "iterations: 127497\ncpu: 5441.596272853486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5557.516818578568,
            "unit": "ns/iter",
            "extra": "iterations: 126170\ncpu: 5557.467702306411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9719.08406343447,
            "unit": "ns/iter",
            "extra": "iterations: 72136\ncpu: 9718.980814017963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35534.270460939864,
            "unit": "ns/iter",
            "extra": "iterations: 23105\ncpu: 35533.17896559187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140502.92582781377,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 140500.82781456958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112983.68049073646,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 112981.5708761167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114124.25699958553,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 114123.37372893172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115979.5464709047,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 115972.6158405171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282871.20413524285,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 282855.5628487036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2305409.134663209,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2305334.6633416507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1902439.1026694418,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1902309.6509240237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1940405.4423480174,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1940319.4968553418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1940893.1924687661,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1940798.7447698698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1158677.4128787601,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1158649.1161616156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1856977.4598392495,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1856847.1887550198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7777316.215827655,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7776838.129496396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4367974.925925835,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4367758.796296284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9527458.219298424,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9526937.71929824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34710.67772271088,
            "unit": "ns/iter",
            "extra": "iterations: 23607\ncpu: 34708.49747956121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143205.62889374828,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 143199.74743222786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114837.15271798057,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 114836.35629709366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118426.37375017666,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 118424.48950851973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117157.80769761493,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 117145.12346530537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285560.6117530632,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 285552.4925718062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2327267.39698474,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2327233.165829146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1930872.0748440295,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1930803.5343035345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1948970.1638655956,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1948922.8991596538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1961223.6843220969,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1961125.8474576261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1161393.87108895,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1161347.9349186493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1875872.9070705525,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1875767.0707070662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7817643.485507036,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7817045.652173897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4376104.218009477,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4375906.1611374505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33479.51517875409,
            "unit": "ns/iter",
            "extra": "iterations: 24475\ncpu: 33477.68743615934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140021.83537190492,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 140013.30578512466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112261.4270984792,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 112254.79180436295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116683.6528270928,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 116680.08740781233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114204.53992243396,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 114200.14711782847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284551.8769788819,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 284537.5329815299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2338186.927318305,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2338027.819548877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1916164.625766945,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1916110.429447845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1956582.4547369534,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1956477.6842105254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1968364.2410147868,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1968284.7780126773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1155678.8019925985,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1155627.2727272739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1884056.2213278208,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1883997.5855130837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3368.6001223953444,
            "unit": "ns/iter",
            "extra": "iterations: 209159\ncpu: 3368.468007592313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17313.3703089806,
            "unit": "ns/iter",
            "extra": "iterations: 40423\ncpu: 17313.24246097518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13833.74317982841,
            "unit": "ns/iter",
            "extra": "iterations: 50292\ncpu: 13833.526206951281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14067.388492391,
            "unit": "ns/iter",
            "extra": "iterations: 49741\ncpu: 14066.944773928868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11205.251149701311,
            "unit": "ns/iter",
            "extra": "iterations: 62190\ncpu: 11204.53288310026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67381.64482294468,
            "unit": "ns/iter",
            "extra": "iterations: 10392\ncpu: 67377.65588914522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147831.76064053478,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 147824.71554993765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40001.42942220857,
            "unit": "ns/iter",
            "extra": "iterations: 17463\ncpu: 40000.1488862168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40543.01783956027,
            "unit": "ns/iter",
            "extra": "iterations: 17265\ncpu: 40541.53489719065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40658.04660893474,
            "unit": "ns/iter",
            "extra": "iterations: 17207\ncpu: 40655.611088511134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81730.29970811939,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 81726.83012259149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72251.77427009492,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 72247.44661095618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22538.413913156077,
            "unit": "ns/iter",
            "extra": "iterations: 31021\ncpu: 22537.40047064914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106265.70276811729,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 106262.77416427096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84588.82366366478,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84584.45645645598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 86017.74785381368,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 86010.39980377714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85867.05336114248,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85862.69627085344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161313.2801654571,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 161305.4470236737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 655080.4489222362,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 655061.012183697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556438.302141188,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 556405.3925456022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 563614.4874899292,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 563585.0686037224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 563751.5526951067,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 563726.4682220515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 370095.2168865619,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 370069.6569920877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547137.4289062858,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 547096.2500000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22118.02308180082,
            "unit": "ns/iter",
            "extra": "iterations: 31540\ncpu: 22118.031071654732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105518.87848785985,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 105515.87158715975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84208.88492063584,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 84204.93025492906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84834.85034506771,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 84830.69378859397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85410.52483828424,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 85404.27193945988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159869.74451052328,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 159863.15187557173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 654642.1607143037,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 654628.007518796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 558599.8559935961,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 558578.1174577662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 563569.9604838354,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 563542.1774193613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 564560.6930533499,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 564523.182552509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 365722.224372371,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 365703.9748954028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545119.4968798712,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 545101.9500780022 ns\nthreads: 1"
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
        "date": 1702503229176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8314.57102912218,
            "unit": "ns/iter",
            "extra": "iterations: 84402\ncpu: 8314.336153171726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74792.58233427028,
            "unit": "ns/iter",
            "extra": "iterations: 11344\ncpu: 74792.63928067702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143361.6660661811,
            "unit": "ns/iter",
            "extra": "iterations: 6106\ncpu: 143353.09531608253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 210882.38018936233,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 210880.52925467349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278172.3709418357,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 278163.0343940856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343087.29500998073,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 343087.70459081815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 410000.3688177458,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 409990.4851625059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 476182.26022914523,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 476152.91871249356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 542277.180348285,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 542273.1965174135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6354.750936991706,
            "unit": "ns/iter",
            "extra": "iterations: 110193\ncpu: 6354.455364678335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5437.373245394516,
            "unit": "ns/iter",
            "extra": "iterations: 115838\ncpu: 5437.125123016639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5334.3409966067675,
            "unit": "ns/iter",
            "extra": "iterations: 131145\ncpu: 5333.735178619088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5412.480012080949,
            "unit": "ns/iter",
            "extra": "iterations: 129128\ncpu: 5412.086456849012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9449.902828597324,
            "unit": "ns/iter",
            "extra": "iterations: 74065\ncpu: 9449.710389522725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36417.876475248835,
            "unit": "ns/iter",
            "extra": "iterations: 22708\ncpu: 36415.210498502754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137488.71634537494,
            "unit": "ns/iter",
            "extra": "iterations: 6173\ncpu: 137482.13186457168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111640.40437666755,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 111633.70026525171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114294.12712992232,
            "unit": "ns/iter",
            "extra": "iterations: 7512\ncpu: 114293.01118210869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111768.47820934797,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 111763.58130348925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278464.148565908,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 278454.27006123064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2205098.454761799,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2205021.190476197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1838685.0098618225,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838651.479289936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1856885.3514057263,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1856779.718875505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1841801.6031746664,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1841740.873015874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1119601.3623187328,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1119538.2850241526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1789540.4613898294,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1789469.4980694954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7547307.849999925,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7546675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4219892.506787439,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4219550.678733038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9223574.423729286,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9223218.644067796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36197.05743183381,
            "unit": "ns/iter",
            "extra": "iterations: 22740\ncpu: 36196.1565523307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143244.95267766796,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 143239.45772987534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114749.9318027351,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 114741.32590680604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117023.29164923739,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 117015.46075561088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116831.9770369493,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 116822.9353990869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278482.5193798753,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 278473.4496124036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2238160.7325300993,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2238000.9638554333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1847495.9940593827,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1847418.8118811878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1884785.1153845508,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884660.1214574897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1868496.9356136445,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868419.517102613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1108442.4631829737,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1108389.9049881292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1804183.887378651,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1804063.1067961084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7511897.550000412,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7511203.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4303985.720720415,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4303739.63963965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34660.52589024001,
            "unit": "ns/iter",
            "extra": "iterations: 23870\ncpu: 34658.82279011317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138731.70885458248,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 138728.789601949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112271.6771684668,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 112265.660427103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115881.02931596282,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 115875.27144408345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113008.68983815385,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 112999.3366940838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285186.9762833003,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 285014.587394413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2223557.3380950904,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2223539.2857142854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1845961.8811880543,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1845939.6039604018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1873619.680000047,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1873570.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1858699.056000205,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858621.5999999922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1114961.0480191547,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1114961.944777911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1802702.76595734,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802601.934235979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3323.5118359756952,
            "unit": "ns/iter",
            "extra": "iterations: 210798\ncpu: 3323.441873262552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17280.015374727365,
            "unit": "ns/iter",
            "extra": "iterations: 40456\ncpu: 17279.25153252916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13808.721390289993,
            "unit": "ns/iter",
            "extra": "iterations: 50752\ncpu: 13808.742512610364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13662.08573436298,
            "unit": "ns/iter",
            "extra": "iterations: 51228\ncpu: 13661.573748731174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11077.623657787588,
            "unit": "ns/iter",
            "extra": "iterations: 63142\ncpu: 11077.427069145657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65652.20403944798,
            "unit": "ns/iter",
            "extra": "iterations: 10645\ncpu: 65650.8407703149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147620.7090562763,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 147612.12441811213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38831.98170122933,
            "unit": "ns/iter",
            "extra": "iterations: 18034\ncpu: 38831.57369413332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39300.20991339058,
            "unit": "ns/iter",
            "extra": "iterations: 17088\ncpu: 39299.61376404513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39511.51916869227,
            "unit": "ns/iter",
            "extra": "iterations: 17659\ncpu: 39511.14445891595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78651.0953504005,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 78649.28122192323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69580.80390593524,
            "unit": "ns/iter",
            "extra": "iterations: 10036\ncpu: 69579.73296133924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21457.20294930986,
            "unit": "ns/iter",
            "extra": "iterations: 32550\ncpu: 21456.31336405527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100578.06096166107,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 100575.15741270858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81228.47614072246,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 81226.43678160834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81684.68215700248,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81681.15536920581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82850.56526918447,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 82849.92853739961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155312.99821508082,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 155302.61044176668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630741.664869788,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 630734.2318059272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 539222.1675676171,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 539203.3204633167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540904.7814671437,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 540886.2548262533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 541262.9258114046,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 541263.4466769644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 354618.83155758237,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 354597.3110096356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 527477.8203592447,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 527453.7425149727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21408.922397456394,
            "unit": "ns/iter",
            "extra": "iterations: 32718\ncpu: 21407.86417262675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98502.44185719607,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 98501.33258521432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80496.4240193302,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 80495.50212814823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81398.59639115458,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81394.86612339922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82636.4395241975,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 82635.48463078562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152437.9818895863,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152432.75147283394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 628185.4701691894,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 628186.3757791647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 534366.0594512301,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 534359.5274390198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536001.9219586379,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 535983.1675592966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 536242.4942529263,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536235.0957854392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350736.9117352066,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 350719.95987963775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 526254.6463964181,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526241.9669669718 ns\nthreads: 1"
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
        "date": 1705574873179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8510.099506117918,
            "unit": "ns/iter",
            "extra": "iterations: 82206\ncpu: 8509.599056029974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78755.26243631505,
            "unit": "ns/iter",
            "extra": "iterations: 10795\ncpu: 78754.31218156555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149915.50730366676,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 149907.54425158966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220761.78082888256,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 220745.86829392327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290303.1065188321,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 290275.43682795693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358777.8951078176,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 358744.2371475951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429900.08519068087,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 429863.6948984647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 499069.489667055,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 499042.5947187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569593.4235294106,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 569566.9934640528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6462.873130804466,
            "unit": "ns/iter",
            "extra": "iterations: 108001\ncpu: 6462.75404857363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5550.977540014167,
            "unit": "ns/iter",
            "extra": "iterations: 126269\ncpu: 5550.40033579106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5445.347312064374,
            "unit": "ns/iter",
            "extra": "iterations: 127384\ncpu: 5445.229385166111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5522.825092926614,
            "unit": "ns/iter",
            "extra": "iterations: 126713\ncpu: 5522.359189664831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9682.75612081361,
            "unit": "ns/iter",
            "extra": "iterations: 72376\ncpu: 9681.821321985186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35529.70305336855,
            "unit": "ns/iter",
            "extra": "iterations: 23122\ncpu: 35527.75711443641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142686.37556409428,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 142676.38308540863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113231.18329126532,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 113221.25116217321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117359.12820161287,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 117351.40391727195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115135.65966671194,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 115134.57526080469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289760.4855607809,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 289743.72061786416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2356563.8455699016,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356462.784810123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1947501.139583352,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1947384.3750000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1947552.5251045914,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1947550.2092050188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1950262.480000004,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1950163.3684210537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1146105.625313263,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1146076.5664160417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1890726.2373225256,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1890635.9026369187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7759680.000000345,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7759509.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4388525.136150512,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4388133.333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9657339.303571584,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9657084.821428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34439.22304879647,
            "unit": "ns/iter",
            "extra": "iterations: 23793\ncpu: 34436.88059513303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148001.97140397527,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 147994.2807924202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115840.1639967437,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 115835.88107521053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119802.46033301915,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 119801.24527773914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117899.96655564147,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 117896.87760199794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290234.2244966583,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 290233.8255033546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2359382.4872447113,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2359323.724489813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1967568.843551807,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1967495.1374207218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1962607.1852632633,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1962580.210526306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1982755.5808510722,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1982700.4255319177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1158434.461731526,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 1158403.6386449153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1896129.9592668086,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1896070.468431776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7753279.762589779,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7753180.57553957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4321957.90686233,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4321729.901960783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33712.41968890804,
            "unit": "ns/iter",
            "extra": "iterations: 24430\ncpu: 33712.05485059354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142295.26004649073,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 142293.8226502818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113480.47336884875,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 113480.17310252982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118879.14067278788,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 118873.46399777546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115153.83747299983,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 115153.55021598251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 287904.4564205023,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 287901.69660678547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2371447.2418134133,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2371376.070528966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1962329.4957983384,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1962278.7815126076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1954432.2163863939,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1954385.7142857139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1966025.8710359572,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1966019.6617336061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1157575.0776943292,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1157549.1228070206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1896964.2510122047,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1896929.1497975732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3333.6843192516903,
            "unit": "ns/iter",
            "extra": "iterations: 208638\ncpu: 3333.5672312809697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16786.862049130246,
            "unit": "ns/iter",
            "extra": "iterations: 41725\ncpu: 16786.808867585372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13253.742485045399,
            "unit": "ns/iter",
            "extra": "iterations: 52828\ncpu: 13253.365639433652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13360.175711531067,
            "unit": "ns/iter",
            "extra": "iterations: 52387\ncpu: 13359.864088418923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11020.723700946068,
            "unit": "ns/iter",
            "extra": "iterations: 63681\ncpu: 11020.54615976506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67554.98029746475,
            "unit": "ns/iter",
            "extra": "iterations: 10354\ncpu: 67553.24512265774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 156595.6254980209,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 156595.32979194282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40207.37724791295,
            "unit": "ns/iter",
            "extra": "iterations: 17405\ncpu: 40205.88336684868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40159.169038328735,
            "unit": "ns/iter",
            "extra": "iterations: 17428\ncpu: 40159.02570576042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40413.40565219804,
            "unit": "ns/iter",
            "extra": "iterations: 17303\ncpu: 40413.315610009995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81088.20275750707,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 81087.96199745017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72188.99112487241,
            "unit": "ns/iter",
            "extra": "iterations: 9690\ncpu: 72186.06811145518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21924.66392958113,
            "unit": "ns/iter",
            "extra": "iterations: 32151\ncpu: 21924.31339616154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104758.36411252969,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 104747.99461239135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84206.30925481184,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84206.16586538331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83870.76134050566,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83868.41412328079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84268.9153356618,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84265.2816140271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162570.53322489408,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 162570.3763940533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 658264.3915094796,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 658235.8490566104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 569697.4857375153,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 569696.5770171139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 562544.3368252014,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 562543.1103948419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 563070.7278583572,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 563048.3896940429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 374602.48102614813,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 374600.32068412274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 548481.5873139711,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 548457.0869224739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21650.607305368576,
            "unit": "ns/iter",
            "extra": "iterations: 32305\ncpu: 21650.462776659857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102730.83521975974,
            "unit": "ns/iter",
            "extra": "iterations: 6803\ncpu: 102726.69410554119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83560.26493383409,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83556.52795993749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83164.81578320898,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83163.50130734491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83821.20071856352,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 83817.59281437205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158915.89972775918,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158915.35843920134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 659990.9191729788,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 659970.3947368398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 565187.9280517495,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 565173.0800323398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 559125.6110223818,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 559123.2428115021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 557427.6913875657,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 557411.0047846939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 369965.22999469313,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 369957.8166401719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 550659.5358549947,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 550636.7218282096 ns\nthreads: 1"
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
        "date": 1705772696728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8529.48755201962,
            "unit": "ns/iter",
            "extra": "iterations: 82182\ncpu: 8529.34949258962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78711.21981596554,
            "unit": "ns/iter",
            "extra": "iterations: 10759\ncpu: 78705.67896644668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150330.5399036639,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 150323.46061231507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 221606.08000000127,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 221599.89808917203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290639.545975076,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 290627.6860895926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 359380.7920833096,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 359368.2916666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 433516.93055553274,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 433496.97420634935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500292.9758342978,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 500266.8584579978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569902.4557956805,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 569876.9482645713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6440.102545994372,
            "unit": "ns/iter",
            "extra": "iterations: 107620\ncpu: 6439.81880691322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5525.001172452969,
            "unit": "ns/iter",
            "extra": "iterations: 126231\ncpu: 5524.756200933215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5593.765299370102,
            "unit": "ns/iter",
            "extra": "iterations: 128453\ncpu: 5593.426389418689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5551.544920361512,
            "unit": "ns/iter",
            "extra": "iterations: 126446\ncpu: 5551.5128987868375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9569.152339797536,
            "unit": "ns/iter",
            "extra": "iterations: 73126\ncpu: 9569.021962092836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35876.927707171206,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 35876.72353760447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 150461.073475131,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 150457.21567938104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 119485.94359692407,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 119482.99510146941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 124571.90106212761,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 124567.84519132822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119006.72185060669,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 119001.19843924185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291555.16856568697,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 291551.44101876643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2345865.9107140936,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2345764.540816321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1948610.3256785497,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1948486.8475991623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1959316.2827003507,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1959248.7341772136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1963751.9515790222,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1963651.5789473732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1155980.0449438537,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1155914.9812734073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1886861.3026584329,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1886767.4846625705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7762942.971222768,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7762699.280575545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4339575.75462995,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4339366.203703709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9568425.939130027,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9567662.608695662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35124.06683528855,
            "unit": "ns/iter",
            "extra": "iterations: 23326\ncpu: 35122.571379576424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 152691.5037540344,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 152615.55237754754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 122294.84150187459,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 122288.66437374652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 125351.87406866386,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 125345.58071585093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 120348.8400056452,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 120343.61432196265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284632.79744762706,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 284619.2081151847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2366674.402035783,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2366581.424936393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1967132.3516947858,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1967016.9491525441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1965309.1966174294,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1965253.4883720987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1976135.3078555774,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1976054.9893842926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1171124.7054361135,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1171064.2225031522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1897545.901840542,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1897434.7648261713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7747673.549999946,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7747443.571428546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4372898.431924788,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4372715.9624413345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33810.37148047501,
            "unit": "ns/iter",
            "extra": "iterations: 24222\ncpu: 33808.500536702326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 150764.07299527733,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 150762.29163011033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118914.85161022087,
            "unit": "ns/iter",
            "extra": "iterations: 7204\ncpu: 118911.68795113874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 124891.66114741721,
            "unit": "ns/iter",
            "extra": "iterations: 6885\ncpu: 124890.95134350038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 120608.5128205186,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 120604.67737390789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 291948.8582914819,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 291944.9916247905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2362864.8956741407,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2362779.1348600453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1958443.5473684368,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1958388.0000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1977522.3037975244,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1976216.8776371358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1976484.3072033885,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1976475.4237288225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1163885.5871212003,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1163840.656565655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1901083.1680329046,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901043.2377049208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3379.595658571069,
            "unit": "ns/iter",
            "extra": "iterations: 207305\ncpu: 3379.5755046911545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17693.541301766934,
            "unit": "ns/iter",
            "extra": "iterations: 39623\ncpu: 17693.23120409862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12837.986881600242,
            "unit": "ns/iter",
            "extra": "iterations: 53970\ncpu: 12837.793218454613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13719.62129271689,
            "unit": "ns/iter",
            "extra": "iterations: 50947\ncpu: 13719.125758140912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11396.061691541243,
            "unit": "ns/iter",
            "extra": "iterations: 61305\ncpu: 11395.582742027573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66465.26386506221,
            "unit": "ns/iter",
            "extra": "iterations: 10494\ncpu: 66464.24623594429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154788.7373087951,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 154785.8124584346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40471.87301495618,
            "unit": "ns/iter",
            "extra": "iterations: 17317\ncpu: 40470.9707224111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40202.84784732826,
            "unit": "ns/iter",
            "extra": "iterations: 17397\ncpu: 40201.63821348537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40989.62982558146,
            "unit": "ns/iter",
            "extra": "iterations: 17200\ncpu: 40989.43604651198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80312.67583112643,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 80308.455078798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71908.1549223331,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 71907.10832218947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21647.232301362917,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21646.93965917179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103750.3448375346,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 103748.04332130082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83147.32311910475,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83146.08322403701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83781.09843694509,
            "unit": "ns/iter",
            "extra": "iterations: 8381\ncpu: 83775.22968619448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84793.45706672885,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84789.0396027604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158842.33814104134,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 158838.2326007331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 658091.5206766486,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658076.1278195477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 561563.1706923567,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 561560.1449275371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 560664.9469879802,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 560646.0240963806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 564744.5064620528,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 564726.575121169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 368318.0738219595,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 368306.4921465963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 549535.8894117374,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 549528.2352941175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21522.46361963172,
            "unit": "ns/iter",
            "extra": "iterations: 32600\ncpu: 21522.346625766815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102311.97082966517,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 102305.49692172362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83405.44370229366,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83400.85877862647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83362.34472934609,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83357.31244064575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84488.50864048899,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84488.02416918373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155837.0687889694,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155836.26447016688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 652534.3133769636,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 652498.4097287112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 559633.2376000646,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 559593.1999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 560007.4823999421,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 559973.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 556643.4721780873,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 556620.5882352914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364537.03593751404,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 364531.51041666575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 544934.9329173196,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 544907.6443057675 ns\nthreads: 1"
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
        "date": 1705774115356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8518.613734322777,
            "unit": "ns/iter",
            "extra": "iterations: 82363\ncpu: 8518.689217245608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77173.40397411949,
            "unit": "ns/iter",
            "extra": "iterations: 10971\ncpu: 77171.78014766202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147565.9127562218,
            "unit": "ns/iter",
            "extra": "iterations: 5903\ncpu: 147565.44130103337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 218216.36500753916,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 218212.9210658622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 287588.40756719315,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287583.53800199146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 354656.4155363606,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 354648.08877928474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424576.36932094913,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 424565.2173913044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 492157.0215419562,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 492147.05215419485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559146.5093367225,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559130.3927881529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6502.182413443732,
            "unit": "ns/iter",
            "extra": "iterations: 107821\ncpu: 6502.1442947106725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5649.632547398972,
            "unit": "ns/iter",
            "extra": "iterations: 125159\ncpu: 5645.025128037124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5510.35953657026,
            "unit": "ns/iter",
            "extra": "iterations: 126880\ncpu: 5510.279791929385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5563.597967174389,
            "unit": "ns/iter",
            "extra": "iterations: 126425\ncpu: 5563.587106980416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9602.029663285426,
            "unit": "ns/iter",
            "extra": "iterations: 72851\ncpu: 9602.108413062275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35158.56659365369,
            "unit": "ns/iter",
            "extra": "iterations: 23283\ncpu: 35158.14972297383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142453.38539926338,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 142452.8065486135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116142.00489198083,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 116135.39883136308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120051.14756629005,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 120045.0273530649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118056.94776223045,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 118049.56353055271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289633.6781492911,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 289612.52955082734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2301625.8029925223,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2301577.8054862856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1908106.0143441549,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1908009.8360655748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1955205.78991587,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1955122.8991596652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1956800.465408744,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1956706.2893081806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1166507.1767676768,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1166467.5505050512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1871238.5823291296,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1871164.4578313252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7806695.89855124,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7806303.623188413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4442473.63507105,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4442404.739336493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9588285.271930592,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9588011.403508788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35301.420842286534,
            "unit": "ns/iter",
            "extra": "iterations: 23270\ncpu: 35300.18048990115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 149870.04153522887,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 149865.59761654332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118404.23034253788,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118398.95992234153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 122832.87406770032,
            "unit": "ns/iter",
            "extra": "iterations: 6972\ncpu: 122830.9236947787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119033.68402681558,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 119031.2482546773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 288201.0610814513,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 288195.5273698274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2325040.3756217347,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2324912.1890547196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1938141.4615383863,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1938090.2286902352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1971527.0296609236,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1971460.8050847582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1974017.118644204,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1973946.8220338933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1169838.320659135,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1169786.8187579254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1884605.2596348347,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884573.4279918869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7850220.905796518,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7849698.550724678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4353773.893023234,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4353754.418604653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33659.19207579792,
            "unit": "ns/iter",
            "extra": "iterations: 24381\ncpu: 33657.09363848908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145393.38223740942,
            "unit": "ns/iter",
            "extra": "iterations: 5855\ncpu: 145381.84457728485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118698.67716424982,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 118690.9406215315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 123202.96253435491,
            "unit": "ns/iter",
            "extra": "iterations: 6913\ncpu: 123198.59684652097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 118110.94510907624,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 118107.52990851521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 292890.71457976237,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 292875.0600343057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2328625.451371481,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2328452.11970074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1924891.0475206957,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924738.4297520614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1972568.4968286988,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1972464.9048625843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1970988.765822888,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1970878.6919831198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1172486.380352655,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1172419.1435768306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1890212.6930894116,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1890110.569105692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3402.5814231382087,
            "unit": "ns/iter",
            "extra": "iterations: 205869\ncpu: 3402.4539877300826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17073.67060316394,
            "unit": "ns/iter",
            "extra": "iterations: 40984\ncpu: 17072.333105602127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13432.59382495785,
            "unit": "ns/iter",
            "extra": "iterations: 52113\ncpu: 13431.823153531794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13228.188716613155,
            "unit": "ns/iter",
            "extra": "iterations: 53016\ncpu: 13227.521880187063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11218.399913559188,
            "unit": "ns/iter",
            "extra": "iterations: 62471\ncpu: 11217.822669718793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67612.33784305291,
            "unit": "ns/iter",
            "extra": "iterations: 10348\ncpu: 67608.80363355216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144739.7544661503,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 144732.94557540506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39839.70561759331,
            "unit": "ns/iter",
            "extra": "iterations: 17552\ncpu: 39839.995442115025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40369.16862676804,
            "unit": "ns/iter",
            "extra": "iterations: 17346\ncpu: 40368.61524270695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40397.2532062414,
            "unit": "ns/iter",
            "extra": "iterations: 17310\ncpu: 40396.256499133466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80844.00600878398,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 80843.77166628043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71624.1536891612,
            "unit": "ns/iter",
            "extra": "iterations: 9799\ncpu: 71624.71680783755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22209.152597094937,
            "unit": "ns/iter",
            "extra": "iterations: 31593\ncpu: 22208.875383787523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102957.57550780465,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 102954.54813070355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86536.45859569377,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 86303.84935249989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84833.12780593456,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84831.75235336808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84677.79683153477,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84677.59100253935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162116.55305839196,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162115.7784986104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 650989.5101851692,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 650976.1111111082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556525.9817025147,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 556498.7271280836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 569917.2251224126,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 569901.7128874417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 565091.1090468421,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 565089.8222940204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 365949.2060828624,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 365937.1788148982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547648.4679688199,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 547615.3125000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21958.344408884688,
            "unit": "ns/iter",
            "extra": "iterations: 31872\ncpu: 21956.918298192857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104309.6946803811,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 104304.47027268505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82779.12757153109,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82773.5280208082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84599.46759371122,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 84594.81257557441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84529.69567319956,
            "unit": "ns/iter",
            "extra": "iterations: 8274\ncpu: 84529.57457094584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158020.05193045677,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 158011.78595619733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 651152.4100185055,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 651116.7903525091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 557716.42686805,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 557689.4276629625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 566955.0687701672,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 566943.689320385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 557823.491199997,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 557822.2399999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 365083.2974947748,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 365080.01043841353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 546976.9063231474,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546968.1498829045 ns\nthreads: 1"
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
        "date": 1705777678001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8414.98877595189,
            "unit": "ns/iter",
            "extra": "iterations: 83036\ncpu: 8414.714099908473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 80748.7598025212,
            "unit": "ns/iter",
            "extra": "iterations: 10533\ncpu: 80745.35270103485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 154238.5599929067,
            "unit": "ns/iter",
            "extra": "iterations: 5634\ncpu: 154236.03123890664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 227032.2679225307,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 227023.94034536902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 299630.4766355323,
            "unit": "ns/iter",
            "extra": "iterations: 2889\ncpu: 299625.5797853927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 370966.85769064014,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 370950.4899872178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 445085.9858712782,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 445061.95709052833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 515569.21170908236,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 515554.2282672971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 588344.4570655401,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 588309.8715348198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6405.373225839005,
            "unit": "ns/iter",
            "extra": "iterations: 109277\ncpu: 6405.248130896701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5583.031472943467,
            "unit": "ns/iter",
            "extra": "iterations: 126013\ncpu: 5582.804948695776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5483.304629473813,
            "unit": "ns/iter",
            "extra": "iterations: 130598\ncpu: 5483.212606624912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5596.457140113473,
            "unit": "ns/iter",
            "extra": "iterations: 124977\ncpu: 5596.314521872012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9565.827524538194,
            "unit": "ns/iter",
            "extra": "iterations: 73251\ncpu: 9565.422997638234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35769.44709538835,
            "unit": "ns/iter",
            "extra": "iterations: 22843\ncpu: 35768.581184607974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139384.33327862603,
            "unit": "ns/iter",
            "extra": "iterations: 6094\ncpu: 139378.91368559262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112525.48853452812,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 112522.93094359509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116413.6543697206,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 116406.88810236879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114368.08245356835,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 114362.03394360575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280824.34974095057,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 280807.4481865285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2339774.969620429,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2339647.0886075962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1941842.1861924632,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1941733.263598324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1941788.9540710824,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941696.242171193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1940821.2949789634,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1940707.1129707058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1147845.0550688233,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1147783.229036298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1878268.016227048,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1878161.4604462485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7797311.811594003,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7796713.768115945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4338147.467593061,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4337887.499999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9601055.557522383,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9585278.761061965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34538.27390115664,
            "unit": "ns/iter",
            "extra": "iterations: 23775\ncpu: 34536.27339642482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143401.89773679205,
            "unit": "ns/iter",
            "extra": "iterations: 5965\ncpu: 143394.11567476942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114768.6845791149,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 114762.51851851876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118423.49334813081,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 118416.25554323684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116069.2893877611,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 116062.50340136046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279365.2687721796,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 279349.6293909114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2354400.3222506545,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2354260.6138107367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1976955.0530785378,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1976849.0445859926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1949696.2147367843,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1949560.4210526322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1987655.5774946741,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1987608.917197443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1160548.0162499761,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1160492.4999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1897493.2546199025,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1897400.4106776158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7852070.727941108,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7851525.735294123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4320018.446511778,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4319742.325581371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32793.42135531947,
            "unit": "ns/iter",
            "extra": "iterations: 24865\ncpu: 32791.45787251159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139563.49763652345,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 139556.26731866284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113316.96431392996,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 113308.59889386312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118837.30848257533,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 118830.34846591731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113330.77649861223,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 113322.97207886727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283851.18139993993,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 283837.39730529196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2370193.324808174,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2370068.797953972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1994760.6004274462,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1994605.9829059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1958147.529411663,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1958051.2605041957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1974137.6425532082,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1974063.6170212761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1152983.0398010472,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1152956.3432835815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1907130.9366052013,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1906989.7750511137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3380.5559723440206,
            "unit": "ns/iter",
            "extra": "iterations: 207406\ncpu: 3380.3308486736164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16881.61881689157,
            "unit": "ns/iter",
            "extra": "iterations: 41484\ncpu: 16879.985054478908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13107.867067619669,
            "unit": "ns/iter",
            "extra": "iterations: 53373\ncpu: 13107.603095197885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13600.485465795293,
            "unit": "ns/iter",
            "extra": "iterations: 51396\ncpu: 13600.352167483825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11210.914167428937,
            "unit": "ns/iter",
            "extra": "iterations: 62319\ncpu: 11210.619554229135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66479.88275534233,
            "unit": "ns/iter",
            "extra": "iterations: 10525\ncpu: 66478.15676959646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 158687.8862914137,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 158683.99909214652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 41171.50711597315,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 41170.44812985174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 41103.8134244759,
            "unit": "ns/iter",
            "extra": "iterations: 16969\ncpu: 41101.57345748077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 41357.85343709598,
            "unit": "ns/iter",
            "extra": "iterations: 16962\ncpu: 41356.89777148893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82962.84343195106,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82959.38461538483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73580.47870885793,
            "unit": "ns/iter",
            "extra": "iterations: 9511\ncpu: 73577.66796341143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21901.375390477584,
            "unit": "ns/iter",
            "extra": "iterations: 32012\ncpu: 21900.637261027096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106237.1277955205,
            "unit": "ns/iter",
            "extra": "iterations: 6573\ncpu: 106234.47436482391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85563.85374772565,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85563.12004875112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85297.4900654125,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 85294.50820683602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 86069.57466175141,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 86066.236162362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158549.1328496858,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158541.37383813178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 677829.1414729106,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 677805.8139534803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 579002.5610560905,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 578997.1947194702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 571911.1420408549,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 571889.7142857055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 577449.8504131561,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 577434.9586776815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 376680.48064515897,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 376655.32258064323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 563672.2526230377,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 563648.8297013699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21728.707713842614,
            "unit": "ns/iter",
            "extra": "iterations: 32150\ncpu: 21727.63297045118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104235.29551925919,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 104233.19346620655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85064.23856567677,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85063.43456519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83442.7046835939,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83440.00715051845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84732.02456734027,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84729.85598450957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156484.84454342342,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 156479.62138084453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 673383.0393096876,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 673357.7181208057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 576515.0074196388,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 576504.2868920129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 569376.3928280708,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 569357.6202118922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 574330.7233169482,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 574316.1740558245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 373516.9578442201,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 373499.4663820721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 561517.2648000225,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 561497.200000008 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}