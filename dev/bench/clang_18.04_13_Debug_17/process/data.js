window.BENCHMARK_DATA = {
  "lastUpdate": 1705956157699,
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
        "date": 1705774118053,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16586.46871828754,
            "unit": "ns/iter",
            "extra": "iterations: 42373\ncpu: 16585.66540013688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133578.0928096339,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 133568.84700665192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 253595.13953489787,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 253578.28488372103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 367652.3955669206,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 367645.95055413456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 485112.3929765693,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 485082.107023411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 602781.9681660583,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 602728.3044982697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 579712.4409999696,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579655.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 673136.4282608826,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 673092.7536231887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 768136.8474855793,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 768103.0502885405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13279.750434583751,
            "unit": "ns/iter",
            "extra": "iterations: 52924\ncpu: 13278.608948681118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11199.224317886124,
            "unit": "ns/iter",
            "extra": "iterations: 62563\ncpu: 11198.93866982081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11082.100015853757,
            "unit": "ns/iter",
            "extra": "iterations: 63080\ncpu: 11081.506024096405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11200.747500400219,
            "unit": "ns/iter",
            "extra": "iterations: 62610\ncpu: 11200.432838204782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18844.770555726085,
            "unit": "ns/iter",
            "extra": "iterations: 35647\ncpu: 18843.504362218442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58498.57690000136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58494.16999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289927.38156557083,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 289918.3666553708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 224906.8322867677,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 224893.01412872877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225912.62073525222,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 225900.18513620808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 221024.18214936068,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 221007.25995316112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 507388.55700001295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507386.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4232290.897560943,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4231853.6585365785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3382251.718977987,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3382020.0729926997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3397263.529197258,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3397067.8832116816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3377746.8430654374,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3377520.07299269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1962998.1564482052,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1962897.2515856219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3294794.3950178265,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294592.5266903983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12471522.406976188,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12470702.325581394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5569284.840000819,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5569120.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16187867.261538276,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16186847.692307701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62518.598587923334,
            "unit": "ns/iter",
            "extra": "iterations: 13597\ncpu: 62516.31977642141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328012.56389839447,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 327989.4577171036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259155.9380823579,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 259134.71596032355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252319.91656874222,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 252314.86486486602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256146.49955398712,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 256137.58548914694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505290.50000000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505288.39999999775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4274269.0458716415,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4274057.339449544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3429407.313653153,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3429246.8634686423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3421871.1544118505,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3421793.014705903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3420607.1360291815,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3420478.6764705833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1998083.7956988276,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1998018.2795698987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3327114.882143129,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3326980.7142857085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12692343.095237458,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12691632.142857147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5612320.210000235,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5612106.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52423.90199999818,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52420.13000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 278509.4413298625,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 278492.7640156448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219398.48439101884,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 219385.36335721542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220208.4201244677,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 220193.17946058142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218972.32073544996,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 218957.66087844665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 575373.6870794258,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 575320.5248990596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4225376.154545818,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4225160.9090909045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3374425.6195652033,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3374301.0869565145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3380502.336956331,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3380371.0144927544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3373191.2463765736,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3373108.3333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1949772.1404611492,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1949735.8490566104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3297178.1737589147,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297072.695035463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6650.461734621716,
            "unit": "ns/iter",
            "extra": "iterations: 105487\ncpu: 6650.237470019988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37474.2979021719,
            "unit": "ns/iter",
            "extra": "iterations: 19258\ncpu: 37473.75116834548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29297.808594856524,
            "unit": "ns/iter",
            "extra": "iterations: 24759\ncpu: 29297.415081384675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30454.80161364462,
            "unit": "ns/iter",
            "extra": "iterations: 23797\ncpu: 30454.053031894666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23303.15853125916,
            "unit": "ns/iter",
            "extra": "iterations: 29767\ncpu: 23302.368394530837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167916.7952756036,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 167916.48771176362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 283449.86928369553,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 283437.1509510297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71325.02038112498,
            "unit": "ns/iter",
            "extra": "iterations: 9813\ncpu: 71323.83572811521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70933.30170341763,
            "unit": "ns/iter",
            "extra": "iterations: 9569\ncpu: 70927.48458564133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70617.10079790514,
            "unit": "ns/iter",
            "extra": "iterations: 9901\ncpu: 70611.66548833459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137519.43902439694,
            "unit": "ns/iter",
            "extra": "iterations: 5084\ncpu: 137512.3131392617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131976.26940467424,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131969.23511680446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44535.07482819607,
            "unit": "ns/iter",
            "extra": "iterations: 15716\ncpu: 44532.05013998497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223362.0702426774,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 223344.57215836766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175868.27375850917,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 175856.314595411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177102.48917421003,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 177088.3434038248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177711.47436547917,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177708.680203045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 331933.8322306102,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 331926.3232514192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1222502.0964913773,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1222465.789473678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1021563.7128279957,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1021526.0932944679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1022307.2700730808,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1022264.5255474612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1010584.6575144805,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1010569.7976878576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 668028.9990477138,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 667988.2857142838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1004259.9913669305,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1004209.3525179808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44751.597030278994,
            "unit": "ns/iter",
            "extra": "iterations: 15557\ncpu: 44750.00964196183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222784.72669628233,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 222776.63284717646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180419.84722578726,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180410.81290322557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177537.2517694718,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 177531.64812942393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177731.1838963691,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 177722.27584454956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 320452.4076782522,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 320446.57221207087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1216518.5773912289,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1216435.4782608757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1015891.2197961707,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1015851.6739447006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1007565.7766570088,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1007551.440922176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1013393.6705202593,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013363.8728323763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 664594.7180952914,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 664583.6190476135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 998806.8981349531,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 998749.2109038794 ns\nthreads: 1"
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
        "date": 1705777698142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17189.9501221897,
            "unit": "ns/iter",
            "extra": "iterations: 40920\ncpu: 17188.633919843596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137916.81319763736,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 137913.34537097835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260094.21174004438,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 260080.71278826002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379759.2195336589,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 379748.79014518263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 501168.5837182535,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 501145.4965357967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 500392.4410000309,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500378.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 596103.1709999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595955.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 695705.6189978839,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 694993.6325678499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 796720.4126712142,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 796647.3458904104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13532.463437614328,
            "unit": "ns/iter",
            "extra": "iterations: 52007\ncpu: 13531.272713288605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11242.53714725789,
            "unit": "ns/iter",
            "extra": "iterations: 62333\ncpu: 11241.777228755216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11112.919624300086,
            "unit": "ns/iter",
            "extra": "iterations: 63029\ncpu: 11112.448238112638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11190.401396048672,
            "unit": "ns/iter",
            "extra": "iterations: 62462\ncpu: 11190.173225321016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18951.963371747635,
            "unit": "ns/iter",
            "extra": "iterations: 36966\ncpu: 18950.516691013367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57122.04120000024,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57117.11000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 303916.32496464497,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 303893.38755304134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237024.1626489316,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 237010.27985591575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236259.71140569032,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 236247.27975697315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230171.9767063928,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 230160.4550379198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 523516.1100000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523463.2999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4325740.400000001,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4325428.372093018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3460138.735074545,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3459921.268656723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3443244.992592377,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3443010.740740736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3440155.540740593,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3439961.1111111133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1962423.7515922408,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1962374.9469214457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3359941.1195651735,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3359796.014492752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12520082.011764422,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12519564.70588232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5609418.83000055,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5609089.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16207655.590909036,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16207096.969696987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61952.64630295915,
            "unit": "ns/iter",
            "extra": "iterations: 13619\ncpu: 61948.69667376445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 337086.9623085644,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 337059.9136238715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 266477.85443824506,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 266453.2898820608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262241.36569677095,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 262224.44104134757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260968.60128324223,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 260953.13168347016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 520447.8309999558,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520407.30000000226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4390501.739336477,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4390207.1090047425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3531338.840909026,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3531128.4090909003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3487939.9812736036,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3487880.8988764086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3490382.6578947254,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3490103.759398502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2005501.7149029255,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2005388.768898484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3407511.4742648792,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407305.5147058773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12760944.951806033,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12760018.07228913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5658136.040000272,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5657607.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53857.722500004005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53855.980000000156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 291710.8093292484,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 291699.89785495325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233346.33479093475,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 233334.29898879465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227761.7441613443,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 227741.16242038264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223132.25691182687,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 223118.64893062098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 606146.3417015403,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 606109.7629009783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4344266.995327144,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4343933.17757009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3479360.5318354787,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3479138.5767790307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3440352.1029413836,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3440113.235294127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3431038.575645557,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3430805.1660516826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1964689.4143762009,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1964581.6067653229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3358155.6714800056,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3357891.3357400843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6715.408800438177,
            "unit": "ns/iter",
            "extra": "iterations: 104063\ncpu: 6715.008216176692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37470.08782339062,
            "unit": "ns/iter",
            "extra": "iterations: 18708\ncpu: 37467.062219371466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28636.866251944477,
            "unit": "ns/iter",
            "extra": "iterations: 24434\ncpu: 28634.902185479183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30369.313969691702,
            "unit": "ns/iter",
            "extra": "iterations: 22964\ncpu: 30368.20675840445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23443.518888739793,
            "unit": "ns/iter",
            "extra": "iterations: 29912\ncpu: 23442.080101631494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175239.86507346333,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 175224.47099825615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 289922.04340963,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 289902.4072612469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72483.66818511112,
            "unit": "ns/iter",
            "extra": "iterations: 9659\ncpu: 72478.3828553676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71927.80858254596,
            "unit": "ns/iter",
            "extra": "iterations: 9764\ncpu: 71922.50102417046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71965.26346628227,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 71963.47656249943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144914.0240614071,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 144904.1900020758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 134251.31068145094,
            "unit": "ns/iter",
            "extra": "iterations: 5224\ncpu: 134243.41500765708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43780.521474702036,
            "unit": "ns/iter",
            "extra": "iterations: 15949\ncpu: 43778.261959997966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226514.76998051937,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 226506.66016894495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180591.8918918737,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 180583.21750321682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177672.9393708835,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177662.65854895953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178155.79129550382,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178141.0282514624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 334380.51124943775,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 334359.64576352003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1246781.50889694,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1246687.9003558806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1047818.230884603,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1047724.5877061568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1019167.3755458314,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1019093.3042212516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1032288.7835049982,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1032236.6715758576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 666629.1893434408,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666590.6755470945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1021176.6976743379,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1021082.4127906854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44550.50664800177,
            "unit": "ns/iter",
            "extra": "iterations: 15719\ncpu: 44548.02468350414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227348.67952043636,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 227332.01555411087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184205.1221052543,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 184195.13157894587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179970.81447266982,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179954.37516037832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181597.4817537255,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 181584.11656602932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 328677.63453437743,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 328654.890032758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1241746.3143872197,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1241636.944937835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1042713.2723214477,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1042651.339285711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1019200.8653001352,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1019152.8550512402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1033011.9985207896,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1032997.7810650903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 662110.0387523486,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 662070.4158790117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1016492.3689604676,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1016412.7379209223 ns\nthreads: 1"
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
        "date": 1705952868295,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16837.513162631207,
            "unit": "ns/iter",
            "extra": "iterations: 41671\ncpu: 16836.495404477933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 136233.91149444372,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 136225.45542479446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 256890.66528680263,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 256872.117090479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 373345.87455987587,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 373322.0950704225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 492541.9892290439,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 492523.4126984127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 607750.3494398549,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 607699.2997198879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 585441.4560000122,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585409.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 677758.5692194488,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 677722.3858615608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 774310.7564853543,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 774297.9079497907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13340.11186731485,
            "unit": "ns/iter",
            "extra": "iterations: 52455\ncpu: 13339.660661519392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11314.500040334324,
            "unit": "ns/iter",
            "extra": "iterations: 61983\ncpu: 11313.723117629024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11150.188251788153,
            "unit": "ns/iter",
            "extra": "iterations: 62767\ncpu: 11149.586566189255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11188.149027628471,
            "unit": "ns/iter",
            "extra": "iterations: 62579\ncpu: 11187.211364834862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18720.861905654638,
            "unit": "ns/iter",
            "extra": "iterations: 37373\ncpu: 18719.72547025928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57488.60679999552,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57484.969999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299652.90751645755,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 299650.2597852443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232855.06499180265,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 232835.77280174807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235758.8451720237,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 235749.139844617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230607.92093149363,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 230593.33874898506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500641.07100001816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500637.10000000225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4148449.52232128,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4148222.3214285774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3365348.2282609046,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3365154.710144925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3369169.6800001,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3368945.090909095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3335911.9602891128,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3335710.4693140783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1925442.5895835445,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1925337.2916666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3274925.5106382277,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3274657.8014184427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12264318.816092761,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12263873.563218374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5408963.530001074,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5408849.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16053321.287879016,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16033004.545454515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63132.875037170066,
            "unit": "ns/iter",
            "extra": "iterations: 13452\ncpu: 63130.15165031224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 335114.1647838014,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 335092.7931437482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267050.89835251035,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 267032.73235934123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260950.90266829336,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 260944.81503941814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259299.42383105823,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 259281.96078431368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 606795.9838709539,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 606756.8022440397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4232326.26027393,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4232157.534246572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3433232.671586515,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3433085.2398523744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3421807.772058785,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3421679.0441176416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3378379.9236363685,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3378186.5454545305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1975322.2532190604,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1975252.1459227486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3312752.4535716795,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3312587.8571428503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12469202.00000004,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12468420.23809522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5464350.119999608,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5464023.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54224.58980000329,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54223.640000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 287500.3412671786,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 287470.5330204509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230124.24556687643,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 230115.6098871567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226689.29481753605,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 226674.4050766784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225880.32393251636,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 225871.1913547714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 579626.4410596511,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 579598.5430463563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4168570.4484305484,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4168303.13901344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3387293.0362319853,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3387169.9275362385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3371364.8659420907,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3371116.6666666465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3338242.6953404713,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3338041.93548386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1916587.8436213392,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1916478.8065843738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3264676.1091549527,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3264456.3380281846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6665.812657337438,
            "unit": "ns/iter",
            "extra": "iterations: 105267\ncpu: 6665.409862539972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37123.87413701246,
            "unit": "ns/iter",
            "extra": "iterations: 18830\ncpu: 37122.79872543828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30281.129109099384,
            "unit": "ns/iter",
            "extra": "iterations: 23089\ncpu: 30280.54484819621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29662.71177838678,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 29661.687460350935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23023.480904721782,
            "unit": "ns/iter",
            "extra": "iterations: 30374\ncpu: 23023.01310331199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172235.01477468488,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 172225.78182713484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 281516.3933897622,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 281506.08625554276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71709.05714576982,
            "unit": "ns/iter",
            "extra": "iterations: 9782\ncpu: 71707.20711510906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71122.72921952597,
            "unit": "ns/iter",
            "extra": "iterations: 9853\ncpu: 71115.93423322946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70866.25618159333,
            "unit": "ns/iter",
            "extra": "iterations: 9868\ncpu: 70863.1941629502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143693.40573770402,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143685.67622950842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131987.7891759392,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 131983.7073354701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43771.28441517155,
            "unit": "ns/iter",
            "extra": "iterations: 15945\ncpu: 43768.94324239648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 221946.3336490033,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 221938.19444444266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176512.00453630646,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 176508.77016129132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175268.29268292943,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 175262.5345737972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178098.65885945424,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 178095.34114053185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 324148.2531293311,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 324135.8831710699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1217377.296684096,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1217339.0924956342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1020993.2154294504,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1020917.1761281012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1025652.4165457643,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1025616.9811320821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1011686.654624297,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011645.5202312133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 659403.619811265,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 659378.6792452786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 999820.3968480332,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 999782.5214899651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43705.4084559942,
            "unit": "ns/iter",
            "extra": "iterations: 15965\ncpu: 43703.3009708737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 221135.75512135806,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 221122.18720453588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178281.1441372028,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 178270.55811571924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177817.89920897252,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 177802.75580505276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178380.41617908247,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178363.64792673738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 321420.0794306941,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 321411.01928374986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1214932.704861048,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1214852.9513889006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1025940.5168374451,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1025855.1976573876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1011359.118497121,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011322.6878612565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1012280.0144091718,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1012229.2507204597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 653755.5574712635,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 653721.9348659011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 999785.3842857499,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 999714.5714285694 ns\nthreads: 1"
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
        "date": 1705954309394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16863.891521348713,
            "unit": "ns/iter",
            "extra": "iterations: 41575\ncpu: 16862.92242934456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137769.33753943036,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 137762.2152120575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259810.22998499445,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 259797.1514242878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 383692.11008366384,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 383662.6155878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 500939.4538106416,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 500906.40877598175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 623123.5520684902,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 623050.0713266763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 598888.6750000119,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598889.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 691529.634109733,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 691493.8392186322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 786790.8789429704,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 786736.2318840594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13475.371976117665,
            "unit": "ns/iter",
            "extra": "iterations: 51920\ncpu: 13474.535824345157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11427.08199754357,
            "unit": "ns/iter",
            "extra": "iterations: 61075\ncpu: 11426.21858370855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11233.938021034197,
            "unit": "ns/iter",
            "extra": "iterations: 62376\ncpu: 11233.434333718096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11350.346204306212,
            "unit": "ns/iter",
            "extra": "iterations: 61741\ncpu: 11349.799970845967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18825.976783465,
            "unit": "ns/iter",
            "extra": "iterations: 37301\ncpu: 18825.996622074486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56310.79099999852,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56310.03999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287509.39073514164,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 287484.99496475357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223041.80398321146,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 223031.07966457034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224580.69796889808,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 224574.4922184122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 217430.5717574785,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 217414.8631363522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 643257.2263083926,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 643230.9052333807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4297405.287037169,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4297160.648148154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3483267.368627661,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3483032.5490196147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3456740.0408921926,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3456586.988847585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3443250.051851818,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3442939.259259261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1983231.5781584496,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1983142.18415418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3366192.10144943,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3365856.8840579614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12604933.458823433,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12604342.352941198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5665023.500000644,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5664635.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16447169.35384692,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16446321.538461572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61913.19642466136,
            "unit": "ns/iter",
            "extra": "iterations: 13705\ncpu: 61907.282013863485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 325099.5950037922,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 325085.6548069652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257445.74052914736,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 257435.62838244133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 251963.55791332995,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 251947.77483053415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252534.2303370943,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 252506.8598462449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 615134.2278839666,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 615108.0679405514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4371188.342722508,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4371099.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3545453.343511722,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3545156.870228994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3511376.72075465,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3511249.811320738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3474429.791044764,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3474238.805970163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2027191.9564269735,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2027041.6122004315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3409163.191176724,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3408919.1176470756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12951059.878048455,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12950815.853658555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5745101.21000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5744800.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53144.48309999307,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53140.600000000406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 277992.3613363892,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 277979.24099902774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219417.70297285376,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 219408.944131215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 216094.7744455471,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 216081.77923386978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 213736.41107215316,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 213717.73547094248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 572135.3819855368,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 572114.3326758682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4324810.918781849,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4324637.563451785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3493262.685393613,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3492934.456928847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3467362.0925925914,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3467201.4814814944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3437204.15555582,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3436966.6666666497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1979889.5138593798,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1979771.4285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3376164.1083030608,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3375878.3393501774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6698.119421149777,
            "unit": "ns/iter",
            "extra": "iterations: 105174\ncpu: 6697.505086808496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37191.30092814042,
            "unit": "ns/iter",
            "extra": "iterations: 18855\ncpu: 37188.72447626592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30398.8355096702,
            "unit": "ns/iter",
            "extra": "iterations: 24506\ncpu: 30396.93952501409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30346.501474541084,
            "unit": "ns/iter",
            "extra": "iterations: 23058\ncpu: 30343.976060369492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23233.467972771097,
            "unit": "ns/iter",
            "extra": "iterations: 30115\ncpu: 23231.562344346898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166362.00402845824,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 166353.69668246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 288817.93146161776,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288801.2799339411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73827.84996334917,
            "unit": "ns/iter",
            "extra": "iterations: 9551\ncpu: 73820.27012878245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72183.23615969814,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 72179.26528092098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72233.44371134107,
            "unit": "ns/iter",
            "extra": "iterations: 9700\ncpu: 72230.69072164963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145750.6396584193,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 145739.15850864348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 134292.3019012943,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 134281.64009986428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43661.86256012687,
            "unit": "ns/iter",
            "extra": "iterations: 16007\ncpu: 43659.805085274565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219948.49543595174,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 219936.29209946527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177235.84290799923,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 177218.50533807915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175229.0446338949,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175215.09528586006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176298.97586121762,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176281.3175760615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323118.8642032138,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 323102.4942263308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1246886.9107144494,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1246810.5357142838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1044967.5335321011,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1044918.4798807625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1026722.6881405857,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1026625.1830161194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1027720.1512482952,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027666.0792951566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 661532.9053926355,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 661488.6471144814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1018325.5094614909,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1018325.1819505207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43722.61542820644,
            "unit": "ns/iter",
            "extra": "iterations: 15880\ncpu: 43719.874055415195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 223517.87189291467,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 223503.91969407361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179947.9859226994,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 179937.85513181234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177376.14603895193,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 177367.40065806295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177431.56469992985,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 177422.94251709338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323543.0628466144,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 323513.07763401355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1238610.0336878495,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1238566.843971624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1041554.4317507287,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1041517.9525222653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1020633.0773721708,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1020553.7226277492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1030852.9322533834,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1030791.3107511144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 660215.2292452741,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660188.2075471674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1018374.979651071,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1018317.8779069834 ns\nthreads: 1"
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
        "date": 1705956154226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16711.35304802837,
            "unit": "ns/iter",
            "extra": "iterations: 41289\ncpu: 16710.632371818163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135353.769340476,
            "unit": "ns/iter",
            "extra": "iterations: 5610\ncpu: 135344.1532976827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 256602.31065089838,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 256557.04142011833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 373984.6961805762,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 373982.9861111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 493409.69069241174,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 493389.5005675364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 611896.9398868261,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 611884.5827439892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 587911.5530000264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587889.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 682417.3710273245,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 682400.4434589798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 778738.9966471117,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 778708.3822296734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13295.87563644845,
            "unit": "ns/iter",
            "extra": "iterations: 52636\ncpu: 13295.727258910247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11229.15204405294,
            "unit": "ns/iter",
            "extra": "iterations: 62107\ncpu: 11226.16774276653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11121.740679685203,
            "unit": "ns/iter",
            "extra": "iterations: 63088\ncpu: 11121.585721531841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11110.90865964357,
            "unit": "ns/iter",
            "extra": "iterations: 63028\ncpu: 11110.86025258616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19145.66027642812,
            "unit": "ns/iter",
            "extra": "iterations: 36827\ncpu: 19145.431341135612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56771.34369999521,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56770.33999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 301734.39747192344,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 301725.21067415713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232979.51310044856,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 232978.54803493488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234732.84801098407,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234725.1577503425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229788.67113734,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 229782.0278969959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 641996.1560084615,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 641985.7343640198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4240477.254545154,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4240319.545454535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3406077.6080583152,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3405954.2124542114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3421723.121771206,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3421609.594095949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3385065.6181816286,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384908.363636366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1948760.8438820173,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1948673.4177215216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3306967.1535717556,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3306831.071428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12406074.255813807,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12405504.651162775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5546452.449999605,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5546177.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16075642.151515074,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16074727.272727288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63636.65747504029,
            "unit": "ns/iter",
            "extra": "iterations: 13418\ncpu: 63635.23624981378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 333791.6373882465,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 333782.70501360274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267293.9136378029,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 267282.0130475308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 261653.49969605423,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 261652.31003039522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 263963.2565284415,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 263955.36098310415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 610402.675561828,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 610391.7837078624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4278107.926266839,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4278018.894009233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3470084.8694032645,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3469922.7611940335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3496127.6479400573,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3496111.2359550647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3425444.2398524988,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3425291.881918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1992144.8516127982,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992059.3548387121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3360364.725631617,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3360348.736462094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12626809.00000018,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12626335.71428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5450951.29999936,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5450864.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53195.94079999206,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53191.07000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 288056.53714285855,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 288049.04201680655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 228284.11125862456,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 228281.5188528943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228717.9452349047,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 228703.89261745015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221612.12202767472,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 221605.9315390648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 565678.3590078509,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 565671.1488250664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4236906.595454312,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4236775.454545465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3436497.6102941283,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3436355.882352928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3442410.217712425,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3442297.047970475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3386907.032727322,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3386841.09090911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1939858.2567849061,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1939835.4906054174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3313763.9074734855,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313620.640569399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6617.882925719485,
            "unit": "ns/iter",
            "extra": "iterations: 105574\ncpu: 6617.853827646919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37323.697737701084,
            "unit": "ns/iter",
            "extra": "iterations: 18742\ncpu: 37322.52160921991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30509.706503710877,
            "unit": "ns/iter",
            "extra": "iterations: 22910\ncpu: 30509.035355739925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30424.90308140308,
            "unit": "ns/iter",
            "extra": "iterations: 23009\ncpu: 30423.72984484321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23243.633165159517,
            "unit": "ns/iter",
            "extra": "iterations: 30128\ncpu: 23243.530934678874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167353.297013146,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 167348.38709677584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 287444.9484748115,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287441.09645506885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72650.58573060273,
            "unit": "ns/iter",
            "extra": "iterations: 9629\ncpu: 72648.7278014339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72319.7304446247,
            "unit": "ns/iter",
            "extra": "iterations: 9716\ncpu: 72318.21737340366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72159.62230697651,
            "unit": "ns/iter",
            "extra": "iterations: 9701\ncpu: 72158.14864447009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145139.86882523206,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 145134.84848484828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133407.01258580812,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 133405.20594965614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43950.03563572092,
            "unit": "ns/iter",
            "extra": "iterations: 15911\ncpu: 43948.708440702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 221561.65706142902,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 221547.56174794212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177994.56481954537,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 177982.61311642162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177776.45991346255,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 177769.5087808597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178749.36509962293,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 178744.66019417363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 330961.8032242581,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 330949.40730204055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1233537.026454914,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1233519.9294532519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1040538.110283101,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1040480.178837554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1030419.0867645623,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1030340.5882353064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1024656.4122806174,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1024605.2631578894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657815.5639097308,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 657785.244360901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1013158.210144846,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013144.2028985615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44477.46799340582,
            "unit": "ns/iter",
            "extra": "iterations: 15778\ncpu: 44474.52782355212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227396.50877192285,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227390.70825211194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180658.5860020689,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 180651.49793388695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178177.50114532077,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178176.73708322577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179318.59615877416,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 179305.0960307316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323300.6071098657,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323292.79778393084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1229904.2302283405,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1229825.6590509845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1033075.5022156916,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1033031.7577547893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1025282.111273797,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1025240.5563689498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1031863.2044118203,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1031786.9117647029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 661757.8818524732,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661734.971644616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1014147.7999998946,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1014084.9275362483 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}