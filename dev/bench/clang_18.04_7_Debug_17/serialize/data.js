window.BENCHMARK_DATA = {
  "lastUpdate": 1702492182082,
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
      }
    ]
  }
}