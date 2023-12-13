window.BENCHMARK_DATA = {
  "lastUpdate": 1702492950559,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 18.04 Release c++-17": [
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
        "date": 1702490311354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1330.0620731337576,
            "unit": "ns/iter",
            "extra": "iterations: 522851\ncpu: 1329.960160734129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15937.407463895574,
            "unit": "ns/iter",
            "extra": "iterations: 51796\ncpu: 15936.259556722527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33696.840851308225,
            "unit": "ns/iter",
            "extra": "iterations: 24386\ncpu: 33694.48454031001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50202.2212871881,
            "unit": "ns/iter",
            "extra": "iterations: 16874\ncpu: 50201.28600213346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55971.64550000571,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55969.59000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71702.05454545775,
            "unit": "ns/iter",
            "extra": "iterations: 12485\ncpu: 71700.59271125356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82995.1004844961,
            "unit": "ns/iter",
            "extra": "iterations: 10320\ncpu: 82995.05813953489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96370.4718034627,
            "unit": "ns/iter",
            "extra": "iterations: 8955\ncpu: 96365.43830262418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112565.3040093339,
            "unit": "ns/iter",
            "extra": "iterations: 7707\ncpu: 112559.21889191649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1184.0829156428317,
            "unit": "ns/iter",
            "extra": "iterations: 603517\ncpu: 1184.054633092358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.4888871139188,
            "unit": "ns/iter",
            "extra": "iterations: 738647\ncpu: 948.4780957615733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 951.3976600210763,
            "unit": "ns/iter",
            "extra": "iterations: 733169\ncpu: 951.3731486192125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 939.6431541450885,
            "unit": "ns/iter",
            "extra": "iterations: 745064\ncpu: 939.6273340276816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1840.652306398124,
            "unit": "ns/iter",
            "extra": "iterations: 378057\ncpu: 1840.6063106886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5725.663367043554,
            "unit": "ns/iter",
            "extra": "iterations: 140117\ncpu: 5725.596465810726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25177.592954031577,
            "unit": "ns/iter",
            "extra": "iterations: 32586\ncpu: 25177.174246609007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19685.42992320758,
            "unit": "ns/iter",
            "extra": "iterations: 42061\ncpu: 19684.990846627556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18966.474797542207,
            "unit": "ns/iter",
            "extra": "iterations: 42972\ncpu: 18962.373173229043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19058.56597092926,
            "unit": "ns/iter",
            "extra": "iterations: 42928\ncpu: 19058.129891912078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64985.98598336003,
            "unit": "ns/iter",
            "extra": "iterations: 13698\ncpu: 64980.87312016363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 553583.4580000483,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553516.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560848.9942418687,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560799.0403071019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552059.2652284008,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 552031.0913705574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555740.3094169956,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 555718.7059577192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321526.8854049919,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 321516.3493840974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551785.2951959369,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 551770.4804045497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2328908.2688441123,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2328833.4170854273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1050087.1391105931,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1050064.6522234888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222496.689895722,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3222096.1672473894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7250.632463978922,
            "unit": "ns/iter",
            "extra": "iterations: 115488\ncpu: 7250.216472707106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39730.88329855578,
            "unit": "ns/iter",
            "extra": "iterations: 21088\ncpu: 39727.55595599396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31285.636456520715,
            "unit": "ns/iter",
            "extra": "iterations: 26426\ncpu: 31282.56262771511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30563.605249500517,
            "unit": "ns/iter",
            "extra": "iterations: 26974\ncpu: 30561.407281085332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31283.748916488097,
            "unit": "ns/iter",
            "extra": "iterations: 27457\ncpu: 31281.804275776718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75709.13599511658,
            "unit": "ns/iter",
            "extra": "iterations: 11471\ncpu: 75702.76349054187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600390.9119999661,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600341.3999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589861.416267926,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 589823.5133287759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588220.7247956389,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 588194.6866484995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581603.2006689124,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 581596.5886287661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339845.10563655535,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 339834.9625541966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579489.3759999316,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 579477.7333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2477567.3315507765,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2477478.8770053554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1078607.2649768696,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1078518.4331797257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5057.982535526289,
            "unit": "ns/iter",
            "extra": "iterations: 157348\ncpu: 5057.736990619508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25508.772699137666,
            "unit": "ns/iter",
            "extra": "iterations: 32314\ncpu: 25507.3249984528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19995.498888698163,
            "unit": "ns/iter",
            "extra": "iterations: 40943\ncpu: 19994.072246782103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20008.2360985628,
            "unit": "ns/iter",
            "extra": "iterations: 40949\ncpu: 20006.512979559957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19498.073734489975,
            "unit": "ns/iter",
            "extra": "iterations: 41663\ncpu: 19496.67810767361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62360.30346903007,
            "unit": "ns/iter",
            "extra": "iterations: 13952\ncpu: 62355.89879587175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577063.2829999159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576995.5999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 565544.9367172677,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 565509.1628213576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573521.6373056616,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 573513.9896373069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571144.8784494094,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571138.3705650474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328040.0910442406,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 328025.56670382654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569110.3826200061,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 569091.6990920905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 495.3699820925495,
            "unit": "ns/iter",
            "extra": "iterations: 1413936\ncpu: 495.3478799606213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2950.255905943566,
            "unit": "ns/iter",
            "extra": "iterations: 236880\ncpu: 2949.9016379601458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2481.8015028818436,
            "unit": "ns/iter",
            "extra": "iterations: 282790\ncpu: 2481.7649138936995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2382.2302809901903,
            "unit": "ns/iter",
            "extra": "iterations: 294779\ncpu: 2382.1004888407806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1925.5127334607755,
            "unit": "ns/iter",
            "extra": "iterations: 362588\ncpu: 1925.4853994065038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17345.400388923466,
            "unit": "ns/iter",
            "extra": "iterations: 40111\ncpu: 17309.44877963644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31052.364510838266,
            "unit": "ns/iter",
            "extra": "iterations: 22559\ncpu: 31051.677822598576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7312.753978607326,
            "unit": "ns/iter",
            "extra": "iterations: 95825\ncpu: 7312.745108270411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7311.174152736013,
            "unit": "ns/iter",
            "extra": "iterations: 95956\ncpu: 7310.9591896285365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7350.282943143779,
            "unit": "ns/iter",
            "extra": "iterations: 95680\ncpu: 7350.1849916388255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14497.709593919815,
            "unit": "ns/iter",
            "extra": "iterations: 48291\ncpu: 14497.107121410028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13755.979749237169,
            "unit": "ns/iter",
            "extra": "iterations: 50566\ncpu: 13755.45623541502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5220.567751331715,
            "unit": "ns/iter",
            "extra": "iterations: 134573\ncpu: 5220.287130405114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26449.405803148944,
            "unit": "ns/iter",
            "extra": "iterations: 26365\ncpu: 26448.177508059922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21343.35673618288,
            "unit": "ns/iter",
            "extra": "iterations: 32845\ncpu: 21341.132592479615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21079.769596560334,
            "unit": "ns/iter",
            "extra": "iterations: 33016\ncpu: 21078.20753574025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21573.810738461292,
            "unit": "ns/iter",
            "extra": "iterations: 32500\ncpu: 21572.412307692117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48601.781382722824,
            "unit": "ns/iter",
            "extra": "iterations: 14363\ncpu: 48599.54744830473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159053.25068243442,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 159038.67151956342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131880.93362495356,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 131868.65728413663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131778.2248587429,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131770.13182674203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133068.38673507492,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133053.42075256346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82632.19268867852,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82629.91745282974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133269.00465204875,
            "unit": "ns/iter",
            "extra": "iterations: 5159\ncpu: 133262.93855398436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5048.360412903886,
            "unit": "ns/iter",
            "extra": "iterations: 137853\ncpu: 5048.2477711765805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25309.537802875286,
            "unit": "ns/iter",
            "extra": "iterations: 27445\ncpu: 25308.92694479867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20460.16499319937,
            "unit": "ns/iter",
            "extra": "iterations: 34559\ncpu: 20459.365143667328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20118.446695127106,
            "unit": "ns/iter",
            "extra": "iterations: 34903\ncpu: 20117.90390510842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20624.457053860442,
            "unit": "ns/iter",
            "extra": "iterations: 34031\ncpu: 20624.189709382717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46504.65422422691,
            "unit": "ns/iter",
            "extra": "iterations: 15056\ncpu: 46504.61609989408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154572.132596664,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 154569.03867403558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128894.09632354815,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 128892.29779411817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128196.8446921169,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 128196.72939886578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129095.55528934735,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129095.3188352369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81153.94075278469,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 81152.33503717465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127946.26703195622,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127939.39726027194 ns\nthreads: 1"
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
        "date": 1702492947319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1419.3510703885054,
            "unit": "ns/iter",
            "extra": "iterations: 493092\ncpu: 1419.2529994402669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15984.636407777065,
            "unit": "ns/iter",
            "extra": "iterations: 51489\ncpu: 15983.505214706054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34177.22046982707,
            "unit": "ns/iter",
            "extra": "iterations: 24094\ncpu: 34173.79845604716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50883.359915861074,
            "unit": "ns/iter",
            "extra": "iterations: 16640\ncpu: 50879.70552884613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56744.703300000765,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56739.66000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71145.10147735587,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 71141.66464842175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83452.9765837581,
            "unit": "ns/iter",
            "extra": "iterations: 10292\ncpu: 83447.6000777303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97305.411326211,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 97300.89007565641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116557.22907142979,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 116554.83870967754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1330.8244621190472,
            "unit": "ns/iter",
            "extra": "iterations: 526929\ncpu: 1330.8400182946846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1008.6823303527711,
            "unit": "ns/iter",
            "extra": "iterations: 693749\ncpu: 1008.6828233265903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1013.1532217243944,
            "unit": "ns/iter",
            "extra": "iterations: 689491\ncpu: 1013.1534711838143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1006.9099356393906,
            "unit": "ns/iter",
            "extra": "iterations: 693282\ncpu: 1006.8960394183031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1901.9852354133563,
            "unit": "ns/iter",
            "extra": "iterations: 368246\ncpu: 1901.9158388685862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5258.053692735573,
            "unit": "ns/iter",
            "extra": "iterations: 151622\ncpu: 5257.964543403992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25353.939834522487,
            "unit": "ns/iter",
            "extra": "iterations: 33358\ncpu: 25353.813178248085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19556.727171254028,
            "unit": "ns/iter",
            "extra": "iterations: 42107\ncpu: 19556.349300591315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19562.286221640596,
            "unit": "ns/iter",
            "extra": "iterations: 41391\ncpu: 19562.368630861743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19387.76213999571,
            "unit": "ns/iter",
            "extra": "iterations: 41701\ncpu: 19387.309656842728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65414.31721526909,
            "unit": "ns/iter",
            "extra": "iterations: 13732\ncpu: 65413.996504515155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557060.6659999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557033.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559531.9837346083,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 559527.6512687032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548139.1528465564,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 548140.7178217839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551856.199374967,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 551846.1250000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319796.215311017,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 319793.2646301063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 548158.1809045342,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 548141.9597989966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2334723.247500108,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2334708.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1092620.8829787292,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1092620.330969265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3269457.7809189553,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3269455.4770318014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7342.36119120522,
            "unit": "ns/iter",
            "extra": "iterations: 113062\ncpu: 7342.316605048562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38510.59476059804,
            "unit": "ns/iter",
            "extra": "iterations: 21491\ncpu: 38510.03675957381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30768.635417834143,
            "unit": "ns/iter",
            "extra": "iterations: 26721\ncpu: 30768.766138991963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30548.05198505152,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 30547.75224775209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31613.53568609739,
            "unit": "ns/iter",
            "extra": "iterations: 26607\ncpu: 31612.695907092082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75658.20581303805,
            "unit": "ns/iter",
            "extra": "iterations: 11457\ncpu: 75655.98324168645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600374.5049999907,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600372.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593096.4568072321,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 593091.5687629592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587691.7607655065,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 587685.8509911109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579237.3625497811,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 579239.1766268243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332332.154607762,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 332327.98933739593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568238.4974127266,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 568232.6002587321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2478300.0214478276,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2478246.1126005445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1093587.5687426995,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1093588.1316098731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5100.963303221092,
            "unit": "ns/iter",
            "extra": "iterations: 156526\ncpu: 5100.988334206479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24192.416308377964,
            "unit": "ns/iter",
            "extra": "iterations: 33725\ncpu: 24192.035581912543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18548.056506461817,
            "unit": "ns/iter",
            "extra": "iterations: 44402\ncpu: 18548.099184721403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18821.77097846322,
            "unit": "ns/iter",
            "extra": "iterations: 43926\ncpu: 18821.768428721072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18649.583707518974,
            "unit": "ns/iter",
            "extra": "iterations: 43873\ncpu: 18649.556674948206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62628.82643140227,
            "unit": "ns/iter",
            "extra": "iterations: 13885\ncpu: 62627.23082463059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 564978.2389999699,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564985.7000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567184.4456591319,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 567145.7877813481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578297.7504898766,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 578279.6864794256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 577172.1072596757,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 577162.2629169436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330602.7422524304,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 330597.12773998565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 553901.789306169,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 553887.1419478055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.6360993594827,
            "unit": "ns/iter",
            "extra": "iterations: 1296505\ncpu: 539.6084087604739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3102.089016128224,
            "unit": "ns/iter",
            "extra": "iterations: 224948\ncpu: 3102.0195778579864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2541.425514586017,
            "unit": "ns/iter",
            "extra": "iterations: 275027\ncpu: 2541.2970362909787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2334.45411350256,
            "unit": "ns/iter",
            "extra": "iterations: 300328\ncpu: 2334.380743720211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2006.1991072312771,
            "unit": "ns/iter",
            "extra": "iterations: 352835\ncpu: 2006.1173069565002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17087.724863621097,
            "unit": "ns/iter",
            "extra": "iterations: 41245\ncpu: 17087.74396896602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29413.977186790165,
            "unit": "ns/iter",
            "extra": "iterations: 23802\ncpu: 29413.591294849066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7341.896081966682,
            "unit": "ns/iter",
            "extra": "iterations: 95941\ncpu: 7341.907005347136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7363.9991151289205,
            "unit": "ns/iter",
            "extra": "iterations: 94929\ncpu: 7363.748696394109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7330.757851334777,
            "unit": "ns/iter",
            "extra": "iterations: 95557\ncpu: 7330.271984260627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14523.211481490316,
            "unit": "ns/iter",
            "extra": "iterations: 48269\ncpu: 14522.639789513094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13874.429563629292,
            "unit": "ns/iter",
            "extra": "iterations: 50393\ncpu: 13873.88923064716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5365.944821666274,
            "unit": "ns/iter",
            "extra": "iterations: 130486\ncpu: 5365.96033290938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26619.809081209958,
            "unit": "ns/iter",
            "extra": "iterations: 26252\ncpu: 26619.49565747357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21655.97916410002,
            "unit": "ns/iter",
            "extra": "iterations: 32492\ncpu: 21655.198202634554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21524.11549861048,
            "unit": "ns/iter",
            "extra": "iterations: 32390\ncpu: 21523.31275084898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21772.75274384613,
            "unit": "ns/iter",
            "extra": "iterations: 32254\ncpu: 21771.6066224344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48729.76273430231,
            "unit": "ns/iter",
            "extra": "iterations: 14351\ncpu: 48729.22444429043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156500.42115858122,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156495.25833146955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131658.026023009,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 131652.74372996436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132339.557966866,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 132328.82162573608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132209.68341519273,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132206.4034756329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83597.89518922108,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83593.26727945509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133766.4315146827,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133766.0244181603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5152.976128651175,
            "unit": "ns/iter",
            "extra": "iterations: 135560\ncpu: 5152.737533195674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26028.344365437057,
            "unit": "ns/iter",
            "extra": "iterations: 26861\ncpu: 26027.09132199092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20851.335450549774,
            "unit": "ns/iter",
            "extra": "iterations: 33692\ncpu: 20850.661878190647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20590.534185758213,
            "unit": "ns/iter",
            "extra": "iterations: 33786\ncpu: 20589.73243355243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21188.47637878422,
            "unit": "ns/iter",
            "extra": "iterations: 33127\ncpu: 21187.53886557787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46952.75031889512,
            "unit": "ns/iter",
            "extra": "iterations: 14895\ncpu: 46950.38603558236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156223.95740410825,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156221.38715432698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129175.90195714732,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129166.59896602672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129137.06640911552,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 129132.2295805747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129107.02418757968,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129100.59084194864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81626.2829814495,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81626.19853027018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128357.10634396526,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128352.6402640257 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}