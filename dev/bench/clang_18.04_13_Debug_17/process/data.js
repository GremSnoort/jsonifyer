window.BENCHMARK_DATA = {
  "lastUpdate": 1705772687179,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 18.04 Debug c++-17": [
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
        "date": 1702489566177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16708.442742108473,
            "unit": "ns/iter",
            "extra": "iterations: 42099\ncpu: 16707.57262642818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132988.71911552304,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 132988.83191796188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250909.21858713336,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 250899.8262883614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369348.03918227536,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369335.9028960817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 485012.1940715886,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 484978.80313199083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 600519.3782849403,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 600510.0968188107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 578119.565999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578116.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669901.7930283314,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 669872.8395061727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 780772.5663350098,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 780735.737976782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13173.007231364818,
            "unit": "ns/iter",
            "extra": "iterations: 53102\ncpu: 13172.517042672584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11149.158390739565,
            "unit": "ns/iter",
            "extra": "iterations: 62712\ncpu: 11148.561678785574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11108.132720792217,
            "unit": "ns/iter",
            "extra": "iterations: 63125\ncpu: 11107.662574257442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11112.019712576875,
            "unit": "ns/iter",
            "extra": "iterations: 62904\ncpu: 11112.024672516834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18765.34880536853,
            "unit": "ns/iter",
            "extra": "iterations: 37250\ncpu: 18765.00134228186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57167.98380000228,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57165.619999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285421.8777146745,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 285408.5532910125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225071.2128110174,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 225063.52567496058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227758.55908240352,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 227758.49559882632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223330.26167981542,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223329.8950131231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 636861.383157881,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 636852.9122807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4152779.7040356495,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4152713.452914795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3368793.7890913007,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3368765.4545454523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3335354.057347798,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3335359.4982078774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3339381.3741003927,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3338593.1654676287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1965383.0530786244,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1965343.9490445869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3266284.707746321,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266176.0563380253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12376851.465115726,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12376886.046511624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5488736.170000266,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5488572.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15946931.378788453,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15946762.121212149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64107.29790125161,
            "unit": "ns/iter",
            "extra": "iterations: 13246\ncpu: 64106.53782273882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330230.41235137003,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 330230.99347909394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259360.1691888441,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 259355.75060532728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259555.0035724972,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 259553.97439714157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252086.36856048845,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 252086.51751545473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 618568.4091233315,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 618550.3920171085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4249772.01834888,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4249600.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3423125.8081179247,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3423019.9261992592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3390118.105839244,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3389877.0072992602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3375709.9490908743,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3375584.7272727187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1991897.713361907,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1991898.2758620684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3309069.747331048,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3308935.2313167206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12677647.357142925,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12677355.952380933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5604256.160000887,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5603993.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53240.50899999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53241.02999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282957.68087214546,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 282948.36471754307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222650.9403453533,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 222644.1653584512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219357.9671035705,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 219347.72552043168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 215577.86179889992,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 215570.1616978273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567635.0026160815,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 567614.3884892081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4180242.891891851,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4180066.2162162163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3391842.8836361933,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3391726.9090909227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3349618.7266184944,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3349482.7338129375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3340309.2697840324,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340205.395683447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1952931.1530399036,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952849.05660377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3276284.0315790367,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3276210.175438596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6625.902003545781,
            "unit": "ns/iter",
            "extra": "iterations: 105463\ncpu: 6625.666821539338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37334.42784081736,
            "unit": "ns/iter",
            "extra": "iterations: 18771\ncpu: 37333.040328165705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30280.8952899946,
            "unit": "ns/iter",
            "extra": "iterations: 23121\ncpu: 30279.50780675562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30389.231836169965,
            "unit": "ns/iter",
            "extra": "iterations: 22999\ncpu: 30388.612548371646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23265.488584476654,
            "unit": "ns/iter",
            "extra": "iterations: 30222\ncpu: 23264.28098736009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169631.36244539949,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169623.50800582257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 282844.01214084006,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 282824.6458923512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71797.3107622925,
            "unit": "ns/iter",
            "extra": "iterations: 9747\ncpu: 71797.27095516614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70913.12121212209,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 70913.07707952087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70997.12510137512,
            "unit": "ns/iter",
            "extra": "iterations: 9864\ncpu: 70993.40024330908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 138625.3584868231,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 138621.15270350702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131914.663096581,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131907.72266065385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43902.61329399962,
            "unit": "ns/iter",
            "extra": "iterations: 15932\ncpu: 43901.311825257035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219597.71249213233,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 219587.53923414767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174770.52370258482,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 174763.44810378997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172852.95544065733,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 172843.5992122106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175121.32392608622,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 175114.3606393602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323771.3284200466,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 323753.984339019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1209582.0604489446,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1209569.7754749577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1013831.1391304907,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013810.1449275338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1007761.0043165694,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1007726.0431654704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1004844.0617815973,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1004789.2241379401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658718.4812029845,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658687.4060150343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 994798.858155973,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994766.9503546007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43971.855117021674,
            "unit": "ns/iter",
            "extra": "iterations: 15937\ncpu: 43970.05709983023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219681.21909231684,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 219672.05007824872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181619.7833460153,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 181611.8197924587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175088.42867848376,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175086.03547339546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174134.78097624148,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 174130.93867334197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318101.05186533515,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 318101.0919017287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1198462.1626713497,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1198425.8561643981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1013950.8381503759,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013905.9248554969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997927.4765957134,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 997881.4184397291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 998146.749287782,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 998080.7692307781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 658012.1685499072,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 658018.1732579968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 992793.8456090363,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992796.1756373816 ns\nthreads: 1"
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
        "date": 1702489566177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16708.442742108473,
            "unit": "ns/iter",
            "extra": "iterations: 42099\ncpu: 16707.57262642818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132988.71911552304,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 132988.83191796188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250909.21858713336,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 250899.8262883614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369348.03918227536,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369335.9028960817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 485012.1940715886,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 484978.80313199083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 600519.3782849403,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 600510.0968188107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 578119.565999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578116.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669901.7930283314,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 669872.8395061727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 780772.5663350098,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 780735.737976782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13173.007231364818,
            "unit": "ns/iter",
            "extra": "iterations: 53102\ncpu: 13172.517042672584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11149.158390739565,
            "unit": "ns/iter",
            "extra": "iterations: 62712\ncpu: 11148.561678785574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11108.132720792217,
            "unit": "ns/iter",
            "extra": "iterations: 63125\ncpu: 11107.662574257442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11112.019712576875,
            "unit": "ns/iter",
            "extra": "iterations: 62904\ncpu: 11112.024672516834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18765.34880536853,
            "unit": "ns/iter",
            "extra": "iterations: 37250\ncpu: 18765.00134228186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57167.98380000228,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57165.619999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285421.8777146745,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 285408.5532910125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225071.2128110174,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 225063.52567496058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227758.55908240352,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 227758.49559882632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223330.26167981542,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223329.8950131231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 636861.383157881,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 636852.9122807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4152779.7040356495,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4152713.452914795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3368793.7890913007,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3368765.4545454523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3335354.057347798,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3335359.4982078774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3339381.3741003927,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3338593.1654676287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1965383.0530786244,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1965343.9490445869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3266284.707746321,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266176.0563380253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12376851.465115726,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12376886.046511624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5488736.170000266,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5488572.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15946931.378788453,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15946762.121212149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64107.29790125161,
            "unit": "ns/iter",
            "extra": "iterations: 13246\ncpu: 64106.53782273882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330230.41235137003,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 330230.99347909394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259360.1691888441,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 259355.75060532728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259555.0035724972,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 259553.97439714157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252086.36856048845,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 252086.51751545473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 618568.4091233315,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 618550.3920171085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4249772.01834888,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4249600.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3423125.8081179247,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3423019.9261992592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3390118.105839244,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3389877.0072992602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3375709.9490908743,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3375584.7272727187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1991897.713361907,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1991898.2758620684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3309069.747331048,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3308935.2313167206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12677647.357142925,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12677355.952380933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5604256.160000887,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5603993.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53240.50899999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53241.02999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282957.68087214546,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 282948.36471754307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222650.9403453533,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 222644.1653584512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219357.9671035705,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 219347.72552043168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 215577.86179889992,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 215570.1616978273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567635.0026160815,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 567614.3884892081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4180242.891891851,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4180066.2162162163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3391842.8836361933,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3391726.9090909227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3349618.7266184944,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3349482.7338129375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3340309.2697840324,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340205.395683447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1952931.1530399036,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952849.05660377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3276284.0315790367,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3276210.175438596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6625.902003545781,
            "unit": "ns/iter",
            "extra": "iterations: 105463\ncpu: 6625.666821539338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37334.42784081736,
            "unit": "ns/iter",
            "extra": "iterations: 18771\ncpu: 37333.040328165705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30280.8952899946,
            "unit": "ns/iter",
            "extra": "iterations: 23121\ncpu: 30279.50780675562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30389.231836169965,
            "unit": "ns/iter",
            "extra": "iterations: 22999\ncpu: 30388.612548371646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23265.488584476654,
            "unit": "ns/iter",
            "extra": "iterations: 30222\ncpu: 23264.28098736009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169631.36244539949,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169623.50800582257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 282844.01214084006,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 282824.6458923512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71797.3107622925,
            "unit": "ns/iter",
            "extra": "iterations: 9747\ncpu: 71797.27095516614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70913.12121212209,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 70913.07707952087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70997.12510137512,
            "unit": "ns/iter",
            "extra": "iterations: 9864\ncpu: 70993.40024330908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 138625.3584868231,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 138621.15270350702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131914.663096581,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131907.72266065385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43902.61329399962,
            "unit": "ns/iter",
            "extra": "iterations: 15932\ncpu: 43901.311825257035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219597.71249213233,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 219587.53923414767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174770.52370258482,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 174763.44810378997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172852.95544065733,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 172843.5992122106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175121.32392608622,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 175114.3606393602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323771.3284200466,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 323753.984339019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1209582.0604489446,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1209569.7754749577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1013831.1391304907,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013810.1449275338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1007761.0043165694,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1007726.0431654704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1004844.0617815973,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1004789.2241379401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658718.4812029845,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658687.4060150343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 994798.858155973,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994766.9503546007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43971.855117021674,
            "unit": "ns/iter",
            "extra": "iterations: 15937\ncpu: 43970.05709983023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219681.21909231684,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 219672.05007824872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181619.7833460153,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 181611.8197924587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175088.42867848376,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175086.03547339546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174134.78097624148,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 174130.93867334197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318101.05186533515,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 318101.0919017287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1198462.1626713497,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1198425.8561643981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1013950.8381503759,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013905.9248554969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997927.4765957134,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 997881.4184397291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 998146.749287782,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 998080.7692307781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 658012.1685499072,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 658018.1732579968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 992793.8456090363,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992796.1756373816 ns\nthreads: 1"
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
        "date": 1702489566177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16708.442742108473,
            "unit": "ns/iter",
            "extra": "iterations: 42099\ncpu: 16707.57262642818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132988.71911552304,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 132988.83191796188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250909.21858713336,
            "unit": "ns/iter",
            "extra": "iterations: 3454\ncpu: 250899.8262883614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369348.03918227536,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369335.9028960817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 485012.1940715886,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 484978.80313199083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 600519.3782849403,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 600510.0968188107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 578119.565999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578116.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669901.7930283314,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 669872.8395061727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 780772.5663350098,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 780735.737976782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13173.007231364818,
            "unit": "ns/iter",
            "extra": "iterations: 53102\ncpu: 13172.517042672584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11149.158390739565,
            "unit": "ns/iter",
            "extra": "iterations: 62712\ncpu: 11148.561678785574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11108.132720792217,
            "unit": "ns/iter",
            "extra": "iterations: 63125\ncpu: 11107.662574257442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11112.019712576875,
            "unit": "ns/iter",
            "extra": "iterations: 62904\ncpu: 11112.024672516834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18765.34880536853,
            "unit": "ns/iter",
            "extra": "iterations: 37250\ncpu: 18765.00134228186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57167.98380000228,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57165.619999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285421.8777146745,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 285408.5532910125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225071.2128110174,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 225063.52567496058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227758.55908240352,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 227758.49559882632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223330.26167981542,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223329.8950131231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 636861.383157881,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 636852.9122807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4152779.7040356495,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4152713.452914795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3368793.7890913007,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3368765.4545454523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3335354.057347798,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3335359.4982078774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3339381.3741003927,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3338593.1654676287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1965383.0530786244,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1965343.9490445869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3266284.707746321,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266176.0563380253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12376851.465115726,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12376886.046511624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5488736.170000266,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5488572.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15946931.378788453,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15946762.121212149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64107.29790125161,
            "unit": "ns/iter",
            "extra": "iterations: 13246\ncpu: 64106.53782273882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330230.41235137003,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 330230.99347909394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259360.1691888441,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 259355.75060532728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259555.0035724972,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 259553.97439714157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252086.36856048845,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 252086.51751545473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 618568.4091233315,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 618550.3920171085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4249772.01834888,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4249600.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3423125.8081179247,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3423019.9261992592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3390118.105839244,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3389877.0072992602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3375709.9490908743,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3375584.7272727187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1991897.713361907,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1991898.2758620684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3309069.747331048,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3308935.2313167206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12677647.357142925,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12677355.952380933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5604256.160000887,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5603993.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53240.50899999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53241.02999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282957.68087214546,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 282948.36471754307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222650.9403453533,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 222644.1653584512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219357.9671035705,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 219347.72552043168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 215577.86179889992,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 215570.1616978273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567635.0026160815,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 567614.3884892081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4180242.891891851,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4180066.2162162163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3391842.8836361933,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3391726.9090909227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3349618.7266184944,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3349482.7338129375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3340309.2697840324,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340205.395683447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1952931.1530399036,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952849.05660377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3276284.0315790367,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3276210.175438596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6625.902003545781,
            "unit": "ns/iter",
            "extra": "iterations: 105463\ncpu: 6625.666821539338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37334.42784081736,
            "unit": "ns/iter",
            "extra": "iterations: 18771\ncpu: 37333.040328165705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30280.8952899946,
            "unit": "ns/iter",
            "extra": "iterations: 23121\ncpu: 30279.50780675562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30389.231836169965,
            "unit": "ns/iter",
            "extra": "iterations: 22999\ncpu: 30388.612548371646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23265.488584476654,
            "unit": "ns/iter",
            "extra": "iterations: 30222\ncpu: 23264.28098736009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169631.36244539949,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169623.50800582257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 282844.01214084006,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 282824.6458923512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71797.3107622925,
            "unit": "ns/iter",
            "extra": "iterations: 9747\ncpu: 71797.27095516614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70913.12121212209,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 70913.07707952087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70997.12510137512,
            "unit": "ns/iter",
            "extra": "iterations: 9864\ncpu: 70993.40024330908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 138625.3584868231,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 138621.15270350702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131914.663096581,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131907.72266065385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43902.61329399962,
            "unit": "ns/iter",
            "extra": "iterations: 15932\ncpu: 43901.311825257035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219597.71249213233,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 219587.53923414767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174770.52370258482,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 174763.44810378997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172852.95544065733,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 172843.5992122106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175121.32392608622,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 175114.3606393602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323771.3284200466,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 323753.984339019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1209582.0604489446,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1209569.7754749577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1013831.1391304907,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013810.1449275338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1007761.0043165694,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1007726.0431654704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1004844.0617815973,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1004789.2241379401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658718.4812029845,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658687.4060150343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 994798.858155973,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994766.9503546007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43971.855117021674,
            "unit": "ns/iter",
            "extra": "iterations: 15937\ncpu: 43970.05709983023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219681.21909231684,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 219672.05007824872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181619.7833460153,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 181611.8197924587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175088.42867848376,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175086.03547339546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174134.78097624148,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 174130.93867334197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318101.05186533515,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 318101.0919017287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1198462.1626713497,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1198425.8561643981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1013950.8381503759,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013905.9248554969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997927.4765957134,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 997881.4184397291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 998146.749287782,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 998080.7692307781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 658012.1685499072,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 658018.1732579968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 992793.8456090363,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992796.1756373816 ns\nthreads: 1"
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
        "date": 1702503239331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16820.98695902774,
            "unit": "ns/iter",
            "extra": "iterations: 41638\ncpu: 16819.962534223545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135590.60899708964,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 135579.86133505323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 257269.89300534347,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 257246.2951985773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 375105.78236316313,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 375078.71416159876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 493994.7134735297,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 493945.7646389994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 615683.163713636,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 615639.5464209778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 590610.6990000808,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590596.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 686196.2111194787,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 686145.7550713744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 778635.8375421157,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 778587.5420875427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13511.63203096394,
            "unit": "ns/iter",
            "extra": "iterations: 51931\ncpu: 13510.617935337288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11400.507754649787,
            "unit": "ns/iter",
            "extra": "iterations: 61447\ncpu: 11399.575243705945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11252.721622969246,
            "unit": "ns/iter",
            "extra": "iterations: 62207\ncpu: 11251.777131191031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11307.139216001988,
            "unit": "ns/iter",
            "extra": "iterations: 61990\ncpu: 11307.16889820939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19155.41153456972,
            "unit": "ns/iter",
            "extra": "iterations: 36551\ncpu: 19154.972504172263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57269.371599988976,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57264.059999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292225.373933829,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 292209.2801091776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 224749.2865435417,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 224734.98680738764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224329.42921051034,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 224315.2894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224738.57339692695,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 224720.29676735582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500669.59799994493,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500610.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4253038.557077539,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4252956.164383553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3571972.8475834224,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3571839.0334572485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3460194.5501858317,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3460075.4646840123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3414400.8014707463,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3414299.6323529445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1985154.8344086139,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1985122.150537631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3339094.3176897177,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3338986.6425992777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12587917.588235969,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12587628.235294132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5610795.170000529,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5610643.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16223307.569230901,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16223003.076923102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63193.2333308581,
            "unit": "ns/iter",
            "extra": "iterations: 13453\ncpu: 63191.54092024092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 334961.52839796105,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 334959.73364668986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260374.74735249416,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 260365.7791225403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254463.08291529023,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 254442.51991737983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258066.22965643136,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258056.9620253174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 507329.4579999583,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507267.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4345751.985981168,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4345464.485981303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3506305.6150943767,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3506108.679245301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3498621.9962408366,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3498419.5488721863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3458828.189591208,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3458472.4907063255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2029827.0391304847,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2029724.1304347827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3383917.2290907465,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3383675.27272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12845164.216867993,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12844421.686747026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5598165.359999712,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5597382.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52520.60049999727,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52515.7500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 280827.37155963376,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 280803.8663171689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220751.41261634452,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 220737.84901758013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220331.20588994023,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 220313.56238697987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 214917.41800805353,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 214908.04828973865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 586108.002699077,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 586062.6180836722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4283393.477064358,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4283138.532110093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3443382.6444443283,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3443212.2222222164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3447999.91111131,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3447745.1851852033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3401320.904761936,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3401121.611721616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1974234.8322718125,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1974162.8450106236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3339806.863799183,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3339706.81003583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6714.920828293356,
            "unit": "ns/iter",
            "extra": "iterations: 104166\ncpu: 6714.8551350728385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37232.90768004117,
            "unit": "ns/iter",
            "extra": "iterations: 18815\ncpu: 37231.98511825682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28678.23579033609,
            "unit": "ns/iter",
            "extra": "iterations: 24420\ncpu: 28677.882882883074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30655.93580505559,
            "unit": "ns/iter",
            "extra": "iterations: 22899\ncpu: 30655.13777894222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23533.753396624343,
            "unit": "ns/iter",
            "extra": "iterations: 29809\ncpu: 23533.214800899066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168643.0846560949,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 168641.60654160727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 288493.9303379745,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 288482.069249794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73020.3552727628,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 73017.22123709328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72126.95454545552,
            "unit": "ns/iter",
            "extra": "iterations: 9724\ncpu: 72124.94858083034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71589.84267593377,
            "unit": "ns/iter",
            "extra": "iterations: 9776\ncpu: 71588.29787233977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147019.79987348148,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 147013.77056094547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120583.70889997888,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 120582.42382509823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43662.7905278939,
            "unit": "ns/iter",
            "extra": "iterations: 16026\ncpu: 43661.1755896668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220245.98781250403,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 220240.7812499985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175851.42749436208,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 175847.32344810295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177316.05665148687,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 177310.97622660443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176820.22847765218,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176816.10704367695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 328346.270511018,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 328343.0848570075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1231528.6067020826,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1231502.8218694776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1039168.1795251723,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1039112.3145400623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1037303.2056213762,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1037280.7692307583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1025119.6085671815,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1025080.354505175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670744.6737044282,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 670724.4721689051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1018071.2656022706,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1018049.9274310472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44345.16058625164,
            "unit": "ns/iter",
            "extra": "iterations: 15761\ncpu: 44344.78776727329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220969.71546003126,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 220967.21466961745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178327.42508267716,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178323.8361739984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176760.3615520379,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 176752.55731922618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176346.00352112082,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 176339.3611670023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 325057.6183844171,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 325044.8003714032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1224752.1241258758,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224692.4825174748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1030077.5257731461,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1030049.4845360774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1023880.36734691,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1023822.7405247696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1027065.5315711707,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027054.331864895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 664987.2504744073,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664979.8861480089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1013517.1705202817,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013487.1387283228 ns\nthreads: 1"
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
        "date": 1705574904428,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16555.641613848642,
            "unit": "ns/iter",
            "extra": "iterations: 42284\ncpu: 16554.457950998014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133593.08681265934,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 133587.85252875375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 252315.1704479266,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 252278.65037812683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 367481.8130323809,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 367478.44974446355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483487.07688018493,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 483461.44846796704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 599172.0851210736,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 599151.7647058824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 580600.8250000331,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580609.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 671349.9318346886,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 671328.8614938357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 765418.8579686087,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 765409.7440132116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13203.088857493403,
            "unit": "ns/iter",
            "extra": "iterations: 53085\ncpu: 13202.823773193919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11195.9296028886,
            "unit": "ns/iter",
            "extra": "iterations: 62602\ncpu: 11192.4890578576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11037.197030909287,
            "unit": "ns/iter",
            "extra": "iterations: 62376\ncpu: 11036.752917788874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11181.11164450521,
            "unit": "ns/iter",
            "extra": "iterations: 63326\ncpu: 11180.431418374761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18644.588353845586,
            "unit": "ns/iter",
            "extra": "iterations: 37214\ncpu: 18643.789971516075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58970.71980000418,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58969.65999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300192.10896984243,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 300190.50455501024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 241840.97076668454,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 241829.34362934422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230409.9768381391,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230404.01292755207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227697.38430742547,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 227687.61676007477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 513460.61699996423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513457.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4137483.3911110424,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4137416.8888888913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3339703.9496400184,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3339610.0719424477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3348923.4400001974,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3348679.272727266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3338686.4460432315,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3338551.0791367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1975183.2409381557,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1975073.5607675952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3264129.9366197228,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3263882.042253518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12578806.223529467,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12577599.99999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5488652.529999171,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5488728.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16174428.307691904,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16173435.38461536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65728.95320917235,
            "unit": "ns/iter",
            "extra": "iterations: 12994\ncpu: 65724.56518393104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 341456.12169103074,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 341452.35084946716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 272082.0965495468,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 272072.9977841098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260542.60473587882,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 260534.54766241615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260784.71941571764,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 260780.43213633538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 511346.8069999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511311.30000000267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4196111.67567556,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4195993.243243219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3403517.1978022293,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3403436.630036619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3401808.410256345,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3401516.483516495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3368296.3804347184,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3368105.7971014357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1998044.950537601,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1997932.2580645254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3294002.46099301,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3293811.702127651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12787771.214285774,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12786810.714285731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5540991.930000701,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5540931.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54091.500499998794,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54087.36999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284311.2727574495,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 284293.75415282306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230248.89483593748,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 230237.116729424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224907.67927502666,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 224892.06724454975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224209.3677890991,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 224197.3636126337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 596959.0261347616,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596960.5226960129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4162217.2366067343,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4161906.250000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3347187.808664361,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3346976.8953068624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3348835.5376343327,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3348700.358422947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3338851.604982238,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3338689.32384341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1965594.8270041766,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1965575.1054852363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3253226.8986014463,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253083.566433568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6746.048193002688,
            "unit": "ns/iter",
            "extra": "iterations: 104206\ncpu: 6746.143216321494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37267.4440712247,
            "unit": "ns/iter",
            "extra": "iterations: 18756\ncpu: 37264.70995947962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28270.231989981832,
            "unit": "ns/iter",
            "extra": "iterations: 24764\ncpu: 28268.983201421343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29318.62710589068,
            "unit": "ns/iter",
            "extra": "iterations: 23921\ncpu: 29317.28188620887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23266.077099236867,
            "unit": "ns/iter",
            "extra": "iterations: 30130\ncpu: 23265.011616329386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170433.2637603405,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 170432.9274232839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 280186.3632000277,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 280185.2000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71016.1809233932,
            "unit": "ns/iter",
            "extra": "iterations: 9855\ncpu: 71014.77422628013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70620.89753148836,
            "unit": "ns/iter",
            "extra": "iterations: 9925\ncpu: 70616.96725440868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70540.26037469378,
            "unit": "ns/iter",
            "extra": "iterations: 9928\ncpu: 70534.9113618046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143940.60020534252,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 143926.42710472178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131018.99906225408,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131018.07951988102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44111.28749214244,
            "unit": "ns/iter",
            "extra": "iterations: 15910\ncpu: 44108.96920176015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218273.54616345058,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 218263.72426699934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174758.73427791576,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 174743.82301764714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172914.93860945097,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172914.15187376714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173250.6879169839,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 173252.95280454747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325427.0779582263,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 325430.99767981016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1196782.81849333,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1196691.2671233015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1006781.788793068,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1006722.1264367864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1003610.2048710625,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1003534.0974212048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 998358.3214286033,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 998301.9999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 661327.0425732661,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 661322.2327341578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 989743.471751388,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989729.9435028353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44246.297278521306,
            "unit": "ns/iter",
            "extra": "iterations: 15837\ncpu: 44246.85230788712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219760.7042606514,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 219763.65914786907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176367.02875157725,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 176369.3064312722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175295.79624530466,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175284.98122653455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175189.73938032184,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 175177.76111944037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 322312.96600830916,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 322291.82361047657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1194907.9078497207,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1194844.8805460746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1009617.9119769162,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1009549.6392496492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 994008.0765956852,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 993928.6524822803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1002117.9055794062,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1002130.0429184496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 656944.5418626505,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 656917.1213546582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989619.6638417762,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989559.604519781 ns\nthreads: 1"
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
        "date": 1705772684266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16963.954835909426,
            "unit": "ns/iter",
            "extra": "iterations: 41471\ncpu: 16962.925900026527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135065.9190871424,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 135060.35748483884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 257544.6104923722,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 257525.64478311848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 371828.6497636544,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 371795.10098839714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 487870.57785273896,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 487830.24170882505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606497.8360083476,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 606453.7334263781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 582917.4979999721,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582898.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 676800.6942815147,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 676753.8856304982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 770695.0624479657,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 770641.1323896751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13353.08914958175,
            "unit": "ns/iter",
            "extra": "iterations: 52339\ncpu: 13352.049141175818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11326.544290478752,
            "unit": "ns/iter",
            "extra": "iterations: 61774\ncpu: 11325.507495062653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11324.806972624909,
            "unit": "ns/iter",
            "extra": "iterations: 62100\ncpu: 11324.040257648956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11345.645284608363,
            "unit": "ns/iter",
            "extra": "iterations: 61734\ncpu: 11344.913661839515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18766.062146590106,
            "unit": "ns/iter",
            "extra": "iterations: 37315\ncpu: 18765.089106257507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55691.89469999856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55689.73999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 307950.4675510817,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 307926.1742560053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234104.63484225023,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234099.50617283973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231842.14875136447,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 231834.50054288848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 225705.12364597974,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 225695.8520475562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 642276.390812741,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 642243.6749116606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4139512.555555535,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139246.2222222234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3347074.3068593554,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3346892.7797833886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3354914.5683453637,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3354643.5251798597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3362115.891304357,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3361821.376811589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1963852.8874733718,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1963784.7133757991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3261570.833922339,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3261475.971731448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12456856.802325705,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12456360.465116275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5524665.460000051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5524477.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16084447.060606092,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16083953.030302987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60863.942233539026,
            "unit": "ns/iter",
            "extra": "iterations: 13745\ncpu: 60862.029829028776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 340827.14580850146,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 340822.56654747867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 263045.3180700791,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 263025.62999385316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 258885.6817906751,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 258868.75378100286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259393.21519371987,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 259375.57506053252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617031.4222853042,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 616974.166075229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4208204.900452461,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4207929.864253389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3408986.5787544968,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3408741.0256410316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3409418.6373626986,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3409346.153846152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3407106.860805802,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3406867.0329670543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1995272.870967759,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1995098.7096774282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3314241.459074773,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3314055.8718861034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12715039.666666767,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12714102.380952327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5482860.060000121,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5482405.000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52500.2316000041,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52497.75999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 294861.16059146775,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 294842.09078404424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225552.45337197246,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 225539.25184404638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222373.9266579968,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 222356.98309492858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 215917.79225708678,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 215900.7591093128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 571332.4598683824,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 571280.5263157896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4168839.1562502147,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4168516.0714285886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3364344.678700187,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364174.0072202086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3377100.873188059,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3376846.3768115966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3366138.7737225615,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3365863.138686131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1958164.4778011423,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1958063.213530668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3283447.439716048,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3283167.3758865204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6751.444459434371,
            "unit": "ns/iter",
            "extra": "iterations: 103771\ncpu: 6750.94005068853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37555.856741134434,
            "unit": "ns/iter",
            "extra": "iterations: 19203\ncpu: 37554.99661511215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30498.071194872893,
            "unit": "ns/iter",
            "extra": "iterations: 22923\ncpu: 30497.22985647617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28356.88318741788,
            "unit": "ns/iter",
            "extra": "iterations: 24672\ncpu: 28354.312581063496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23334.222723020674,
            "unit": "ns/iter",
            "extra": "iterations: 29952\ncpu: 23332.605502136637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167408.9631049547,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 167395.11260182108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 284267.0215447074,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 284243.90243901993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72668.76863514366,
            "unit": "ns/iter",
            "extra": "iterations: 9686\ncpu: 72662.89489985489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71455.42549719589,
            "unit": "ns/iter",
            "extra": "iterations: 9805\ncpu: 71449.92350841488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71299.09990843805,
            "unit": "ns/iter",
            "extra": "iterations: 9829\ncpu: 71296.34754298488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145648.1985845181,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145633.07660283183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133101.2280568852,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 133092.51184834036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44370.89868204249,
            "unit": "ns/iter",
            "extra": "iterations: 15782\ncpu: 44368.69218096577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219441.7067126636,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 219423.9335006267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176496.69401104882,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 176482.10870659124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174603.85069010695,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 174599.42283563493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175401.99348045513,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175397.16649949597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 327383.654817585,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 327376.0056127225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1210866.833910084,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1210782.8719723173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1023667.4122806658,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023598.9766081918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1019847.0886628781,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1019778.3430232683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1011620.0882778944,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1011559.9131693078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 664935.3967802731,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 664891.2878787856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1002797.3100000054,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1002710.5714285816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44025.57317532057,
            "unit": "ns/iter",
            "extra": "iterations: 15948\ncpu: 44022.291196388156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220825.70714736954,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 220804.26944971355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178414.77560975173,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 178410.19255455755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175177.14707352774,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 175169.58479239594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174826.6623802407,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 174822.16338880415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 315831.4041497652,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 315823.0491655356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1210469.7172415415,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1210420.3448275835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1014431.1548481305,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1014392.9088277903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1008540.2287769683,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1008514.2446043086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1013291.9129171724,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1013264.0058055205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 663725.4576270712,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 663710.0753295714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 997281.380341746,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997251.8518518603 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}