window.BENCHMARK_DATA = {
  "lastUpdate": 1702489556689,
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
      }
    ]
  }
}