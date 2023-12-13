window.BENCHMARK_DATA = {
  "lastUpdate": 1702503241598,
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
      }
    ]
  }
}