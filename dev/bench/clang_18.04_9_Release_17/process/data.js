window.BENCHMARK_DATA = {
  "lastUpdate": 1705958501044,
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
        "date": 1702503968484,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1328.1025953379476,
            "unit": "ns/iter",
            "extra": "iterations: 522090\ncpu: 1327.9538010687813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15703.06800677135,
            "unit": "ns/iter",
            "extra": "iterations: 52583\ncpu: 15702.671966224823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33711.390744139826,
            "unit": "ns/iter",
            "extra": "iterations: 24525\ncpu: 33710.14475025485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50096.4211497302,
            "unit": "ns/iter",
            "extra": "iterations: 16804\ncpu: 50095.37014996431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55504.160099997076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55501.55000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70164.00834857569,
            "unit": "ns/iter",
            "extra": "iterations: 12577\ncpu: 70163.08340621773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83608.7964141111,
            "unit": "ns/iter",
            "extra": "iterations: 10374\ncpu: 83604.74262579522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96145.69303072071,
            "unit": "ns/iter",
            "extra": "iterations: 8724\ncpu: 96144.19990829895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112060.69205213543,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 112058.22898032209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1151.1557615984784,
            "unit": "ns/iter",
            "extra": "iterations: 609258\ncpu: 1151.1655160867797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.7968728865076,
            "unit": "ns/iter",
            "extra": "iterations: 739276\ncpu: 948.7590561576474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 947.5408894818182,
            "unit": "ns/iter",
            "extra": "iterations: 737598\ncpu: 947.5090767599688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 934.339811260231,
            "unit": "ns/iter",
            "extra": "iterations: 752041\ncpu: 934.3037148240599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1842.1716704994487,
            "unit": "ns/iter",
            "extra": "iterations: 381341\ncpu: 1842.0683849887644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5238.813936176438,
            "unit": "ns/iter",
            "extra": "iterations: 153141\ncpu: 5238.493283967056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25444.488384257795,
            "unit": "ns/iter",
            "extra": "iterations: 32499\ncpu: 25443.404412443444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19711.92269896888,
            "unit": "ns/iter",
            "extra": "iterations: 41112\ncpu: 19711.203541545077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19703.694768202793,
            "unit": "ns/iter",
            "extra": "iterations: 41955\ncpu: 19702.9436300798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19696.574973057337,
            "unit": "ns/iter",
            "extra": "iterations: 41755\ncpu: 19695.80409531792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65543.20986397061,
            "unit": "ns/iter",
            "extra": "iterations: 13747\ncpu: 65538.92485633235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559341.4709999252,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559336.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555096.7138263177,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 555067.5241157567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559936.6681585887,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 559902.173913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564780.8414154995,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 564748.3617300141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323549.4617679558,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 323527.82543826924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562600.1828718358,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562567.675466839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2340738.5924052,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2340660.7594936723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1056947.238857122,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1056898.6285714256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3259289.657342401,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3259282.1678321613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7147.0858475944515,
            "unit": "ns/iter",
            "extra": "iterations: 118093\ncpu: 7146.774999364909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38484.27293333812,
            "unit": "ns/iter",
            "extra": "iterations: 21617\ncpu: 38483.26317250317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30616.42211407331,
            "unit": "ns/iter",
            "extra": "iterations: 27123\ncpu: 30615.27117206784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30999.705708733843,
            "unit": "ns/iter",
            "extra": "iterations: 26766\ncpu: 30998.980049316327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30506.498980083,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 30504.747246226285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75138.27934493069,
            "unit": "ns/iter",
            "extra": "iterations: 11663\ncpu: 75135.23964674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599043.7649999195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599024.1999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588385.270491863,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 588368.9207650253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 613940.8389078506,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 613930.3071672354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590354.2592087225,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 590321.0095497982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335883.29946113407,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 335877.02078521875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 566571.086928101,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 566552.4836601322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2467493.8918203744,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2467307.6517150505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101912.996449696,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1101892.5443786965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5067.27509748254,
            "unit": "ns/iter",
            "extra": "iterations: 160285\ncpu: 5067.107963939233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24225.992183553994,
            "unit": "ns/iter",
            "extra": "iterations: 33647\ncpu: 24225.407911552164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19693.42115504828,
            "unit": "ns/iter",
            "extra": "iterations: 41626\ncpu: 19692.507086916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19590.75746536993,
            "unit": "ns/iter",
            "extra": "iterations: 41726\ncpu: 19590.243493265574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18992.048621505164,
            "unit": "ns/iter",
            "extra": "iterations: 41422\ncpu: 18950.22210419589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62328.27241477757,
            "unit": "ns/iter",
            "extra": "iterations: 13964\ncpu: 62325.916642795484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585959.7330000951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585954.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576160.7662936029,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 576155.8262014491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579395.723390278,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 579370.8935611033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578419.9310118653,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 578389.1590013161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326196.5456909485,
            "unit": "ns/iter",
            "extra": "iterations: 2692\ncpu: 326199.1456166438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573955.6302083818,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 573916.601562502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 508.32209350433305,
            "unit": "ns/iter",
            "extra": "iterations: 1377690\ncpu: 508.3045532739582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3094.534794424154,
            "unit": "ns/iter",
            "extra": "iterations: 232566\ncpu: 3094.3792299820248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2526.8273051115343,
            "unit": "ns/iter",
            "extra": "iterations: 287177\ncpu: 2526.774776531546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2427.4512895468597,
            "unit": "ns/iter",
            "extra": "iterations: 288706\ncpu: 2427.299398003493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1955.3782356356974,
            "unit": "ns/iter",
            "extra": "iterations: 358044\ncpu: 1955.3373328417656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17178.867124940036,
            "unit": "ns/iter",
            "extra": "iterations: 40587\ncpu: 17178.364993717096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31832.7129038062,
            "unit": "ns/iter",
            "extra": "iterations: 22226\ncpu: 31832.979393503105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7344.992446971329,
            "unit": "ns/iter",
            "extra": "iterations: 95326\ncpu: 7344.5156620439475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7338.805299515471,
            "unit": "ns/iter",
            "extra": "iterations: 94386\ncpu: 7338.690059966543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7328.641180661003,
            "unit": "ns/iter",
            "extra": "iterations: 95438\ncpu: 7328.27070978026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15115.489009508512,
            "unit": "ns/iter",
            "extra": "iterations: 48269\ncpu: 15114.28245872086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14068.966833202887,
            "unit": "ns/iter",
            "extra": "iterations: 49839\ncpu: 14068.618953028885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5380.9919518641345,
            "unit": "ns/iter",
            "extra": "iterations: 130465\ncpu: 5380.751159314773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26729.469098122365,
            "unit": "ns/iter",
            "extra": "iterations: 26212\ncpu: 26729.295742408263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21555.72541526736,
            "unit": "ns/iter",
            "extra": "iterations: 32449\ncpu: 21555.561034237984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21246.97347665594,
            "unit": "ns/iter",
            "extra": "iterations: 32839\ncpu: 21246.493498584005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21445.822895892274,
            "unit": "ns/iter",
            "extra": "iterations: 32591\ncpu: 21444.852873492768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49016.28167144201,
            "unit": "ns/iter",
            "extra": "iterations: 14311\ncpu: 49014.17091747591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158651.51447964643,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 158640.9728506782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133083.61462300536,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133078.76999238535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132972.01234333238,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 132967.7933915674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133196.39139538447,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 133187.41671425666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83263.59724039084,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83259.28393005823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132804.0658569017,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132798.93717973042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5028.894494721747,
            "unit": "ns/iter",
            "extra": "iterations: 139339\ncpu: 5028.774427834219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25615.690005503173,
            "unit": "ns/iter",
            "extra": "iterations: 27265\ncpu: 25614.872547221883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20467.973138439596,
            "unit": "ns/iter",
            "extra": "iterations: 34138\ncpu: 20467.16562188777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20319.11693782888,
            "unit": "ns/iter",
            "extra": "iterations: 34420\ncpu: 20318.242300987546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20767.600266747086,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 20766.538233550855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46449.47427887683,
            "unit": "ns/iter",
            "extra": "iterations: 15046\ncpu: 46448.03269972166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154855.54539414233,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 154853.23294951193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130177.20281793961,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 130172.98850574784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130185.29115569919,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130178.57673727359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130009.0543397551,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 130007.49258160203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82157.61533036114,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82153.62097343022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129091.78447640261,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129091.29793510176 ns\nthreads: 1"
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
        "date": 1705575644319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1396.768725377169,
            "unit": "ns/iter",
            "extra": "iterations: 500297\ncpu: 1396.6991606985453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16053.677039480848,
            "unit": "ns/iter",
            "extra": "iterations: 51545\ncpu: 16052.944029488799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34437.923153441756,
            "unit": "ns/iter",
            "extra": "iterations: 24126\ncpu: 34435.310453452716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50518.41142233619,
            "unit": "ns/iter",
            "extra": "iterations: 16494\ncpu: 50516.77579725958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56343.10340000183,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56339.499999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70592.27101975167,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 70588.80290205564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83766.75264983074,
            "unit": "ns/iter",
            "extra": "iterations: 10378\ncpu: 83763.26845249566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96422.71230598073,
            "unit": "ns/iter",
            "extra": "iterations: 9020\ncpu: 96420.89800443468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112441.79620852722,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 112440.08688783567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1157.6691527569521,
            "unit": "ns/iter",
            "extra": "iterations: 603357\ncpu: 1157.6360264321115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 944.5853203867266,
            "unit": "ns/iter",
            "extra": "iterations: 742431\ncpu: 944.5533659020172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 940.3447004567906,
            "unit": "ns/iter",
            "extra": "iterations: 663727\ncpu: 940.2909630013521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 922.2494471640695,
            "unit": "ns/iter",
            "extra": "iterations: 761528\ncpu: 922.2354266684872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1834.4301773367474,
            "unit": "ns/iter",
            "extra": "iterations: 382605\ncpu: 1834.3092745782196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5254.047184867727,
            "unit": "ns/iter",
            "extra": "iterations: 152888\ncpu: 5253.90678143478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24465.305250234644,
            "unit": "ns/iter",
            "extra": "iterations: 33389\ncpu: 24464.362514600587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19052.084762748003,
            "unit": "ns/iter",
            "extra": "iterations: 42908\ncpu: 19051.836487368317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19358.930779206148,
            "unit": "ns/iter",
            "extra": "iterations: 42415\ncpu: 19358.373217022225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19047.55197497927,
            "unit": "ns/iter",
            "extra": "iterations: 43165\ncpu: 19046.199467160874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65105.2230598706,
            "unit": "ns/iter",
            "extra": "iterations: 13530\ncpu: 65099.55654102004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 577457.695000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577426.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549981.183364809,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 549942.2810333954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555959.2298335399,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 555935.2112676062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558115.4687700567,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558103.0264005157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324151.34673552983,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 324135.89081519755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557349.8287715351,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 557343.2208784218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2342918.1417720392,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2342817.9746835446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1055336.53652972,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1055332.4200913233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3254381.3309857827,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3254140.1408450594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7332.6227344002,
            "unit": "ns/iter",
            "extra": "iterations: 114153\ncpu: 7332.508125060238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40243.01251133949,
            "unit": "ns/iter",
            "extra": "iterations: 20941\ncpu: 40242.39530108397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30539.109155845854,
            "unit": "ns/iter",
            "extra": "iterations: 26879\ncpu: 30537.888314297452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30974.925419696785,
            "unit": "ns/iter",
            "extra": "iterations: 26924\ncpu: 30973.06492348831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30223.814201096022,
            "unit": "ns/iter",
            "extra": "iterations: 27519\ncpu: 30221.207165957974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75910.12239675484,
            "unit": "ns/iter",
            "extra": "iterations: 11332\ncpu: 75904.87116131322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601502.8179999718,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601507.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593145.6046671225,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 593102.2649279356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591022.8001368784,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 590973.716632446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587413.11111113,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 587372.5609756096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336085.0621861838,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 336059.7528003095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571200.3119204936,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 571153.7748344349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2474097.1413333076,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2473952.2666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1082400.7777777659,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1082322.4537036999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5030.567849555308,
            "unit": "ns/iter",
            "extra": "iterations: 159102\ncpu: 5030.529471659675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25155.502528579866,
            "unit": "ns/iter",
            "extra": "iterations: 32627\ncpu: 25153.817390504748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19248.030218045787,
            "unit": "ns/iter",
            "extra": "iterations: 42789\ncpu: 19246.53766154842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19141.533778131514,
            "unit": "ns/iter",
            "extra": "iterations: 43016\ncpu: 19139.996745397126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19013.311080140254,
            "unit": "ns/iter",
            "extra": "iterations: 43050\ncpu: 19011.997677119616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62412.787025091005,
            "unit": "ns/iter",
            "extra": "iterations: 13950\ncpu: 62411.21863799257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581146.0969999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581144.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566090.5068226213,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 566071.6699155315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566318.140442132,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 566279.1937581245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566045.4231014751,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 566023.9948947061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327165.3488805716,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 327137.38805970235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564622.2760416671,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 564588.9322916652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.0233497435314,
            "unit": "ns/iter",
            "extra": "iterations: 1402585\ncpu: 499.00141524399396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3030.48217310851,
            "unit": "ns/iter",
            "extra": "iterations: 230803\ncpu: 3030.2578389362484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2392.877063736821,
            "unit": "ns/iter",
            "extra": "iterations: 292249\ncpu: 2392.7185379590724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2279.6117622612405,
            "unit": "ns/iter",
            "extra": "iterations: 308002\ncpu: 2279.566691125393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1916.6603441720317,
            "unit": "ns/iter",
            "extra": "iterations: 365573\ncpu: 1916.6133713376053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17089.212648792538,
            "unit": "ns/iter",
            "extra": "iterations: 41585\ncpu: 17088.269808825422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31372.312620486,
            "unit": "ns/iter",
            "extra": "iterations: 22305\ncpu: 31370.697153105157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7366.1265595274435,
            "unit": "ns/iter",
            "extra": "iterations: 95141\ncpu: 7365.815999411288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7305.131557192516,
            "unit": "ns/iter",
            "extra": "iterations: 95563\ncpu: 7304.951707250768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7280.792063128614,
            "unit": "ns/iter",
            "extra": "iterations: 96058\ncpu: 7280.7657873368025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14462.668140045373,
            "unit": "ns/iter",
            "extra": "iterations: 48641\ncpu: 14462.41647992427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13881.446113004242,
            "unit": "ns/iter",
            "extra": "iterations: 50476\ncpu: 13880.788889769256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5305.92534612704,
            "unit": "ns/iter",
            "extra": "iterations: 131527\ncpu: 5305.524341009805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26574.682460673488,
            "unit": "ns/iter",
            "extra": "iterations: 26318\ncpu: 26573.941788889515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21396.766788878416,
            "unit": "ns/iter",
            "extra": "iterations: 32730\ncpu: 21396.458906202442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21285.60800219484,
            "unit": "ns/iter",
            "extra": "iterations: 32791\ncpu: 21284.788509041897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21578.729948175005,
            "unit": "ns/iter",
            "extra": "iterations: 32416\ncpu: 21578.220631786444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48759.97401427499,
            "unit": "ns/iter",
            "extra": "iterations: 14431\ncpu: 48758.38126255986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158695.82945034106,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158692.98801176008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132716.75759878222,
            "unit": "ns/iter",
            "extra": "iterations: 5264\ncpu: 132714.15273556078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132047.11321110165,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132041.63674163673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132463.71768707043,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 132460.27966742232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82517.51142789933,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 82515.89302544676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132278.750047269,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132271.18547929454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5090.052395187738,
            "unit": "ns/iter",
            "extra": "iterations: 137818\ncpu: 5089.846754415201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25778.841849684766,
            "unit": "ns/iter",
            "extra": "iterations: 27183\ncpu: 25777.54846779261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20434.32201459843,
            "unit": "ns/iter",
            "extra": "iterations: 34250\ncpu: 20434.218978102166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20403.507928700663,
            "unit": "ns/iter",
            "extra": "iterations: 34558\ncpu: 20403.096243995627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20560.181230823997,
            "unit": "ns/iter",
            "extra": "iterations: 33896\ncpu: 20558.977460467064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46848.216259948815,
            "unit": "ns/iter",
            "extra": "iterations: 14834\ncpu: 46847.600107860766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153802.813256993,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 153799.69169786418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128397.94326111811,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128397.55784061826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127657.40674567976,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127654.87693710111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127881.45172477986,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 127874.44789195087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 88040.24644713769,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 88034.6967071048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127550.3604884336,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127548.13194824201 ns\nthreads: 1"
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
        "date": 1705773459598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1381.4013237206998,
            "unit": "ns/iter",
            "extra": "iterations: 504336\ncpu: 1381.3186050569461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16205.40769548095,
            "unit": "ns/iter",
            "extra": "iterations: 50913\ncpu: 16204.821951171603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33543.16758114782,
            "unit": "ns/iter",
            "extra": "iterations: 23875\ncpu: 33541.859685863885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49850.19204438104,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 49850.424929178494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55424.50400000689,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55423.25999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69825.55054137277,
            "unit": "ns/iter",
            "extra": "iterations: 12653\ncpu: 69823.69398561606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83007.18787647088,
            "unit": "ns/iter",
            "extra": "iterations: 10459\ncpu: 83005.37336265409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95911.80444836579,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 95909.79960361146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111321.98543880497,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 111320.9759937031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1187.0390916722688,
            "unit": "ns/iter",
            "extra": "iterations: 592121\ncpu: 1186.985936995987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 974.1811984007086,
            "unit": "ns/iter",
            "extra": "iterations: 716822\ncpu: 974.1679245335655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.1326549283989,
            "unit": "ns/iter",
            "extra": "iterations: 721398\ncpu: 969.1102553652773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 955.006279469157,
            "unit": "ns/iter",
            "extra": "iterations: 734457\ncpu: 954.9981823306206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1840.3253024075595,
            "unit": "ns/iter",
            "extra": "iterations: 380695\ncpu: 1840.275023312627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5322.110606366257,
            "unit": "ns/iter",
            "extra": "iterations: 153653\ncpu: 5321.864200503737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23681.8210219922,
            "unit": "ns/iter",
            "extra": "iterations: 34697\ncpu: 23681.471020549332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19242.301151481708,
            "unit": "ns/iter",
            "extra": "iterations: 42467\ncpu: 19242.40233593149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19336.63554749189,
            "unit": "ns/iter",
            "extra": "iterations: 41882\ncpu: 19335.982044792523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19124.09697877558,
            "unit": "ns/iter",
            "extra": "iterations: 42731\ncpu: 19123.36008986453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66286.87567805084,
            "unit": "ns/iter",
            "extra": "iterations: 13642\ncpu: 66284.79695059375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 555950.370000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555939.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555485.5602563672,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 555469.8076923073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548414.6292278147,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 548396.8730057434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563950.7898457159,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 563937.8534704361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325756.1570952057,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 325745.0166728425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567144.299618278,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 566868.5114503824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2343354.596977204,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2343266.4987405576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066785.6913293737,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1066750.1734104033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3252019.8631581273,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3251872.6315789525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7262.537543160303,
            "unit": "ns/iter",
            "extra": "iterations: 116426\ncpu: 7262.451686049508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39300.668583922416,
            "unit": "ns/iter",
            "extra": "iterations: 21037\ncpu: 39299.62922469933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30957.35143746238,
            "unit": "ns/iter",
            "extra": "iterations: 26679\ncpu: 30956.164024138805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30876.389209300025,
            "unit": "ns/iter",
            "extra": "iterations: 26875\ncpu: 30874.965581395285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30581.902625455386,
            "unit": "ns/iter",
            "extra": "iterations: 27081\ncpu: 30580.923894981683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76156.41376027366,
            "unit": "ns/iter",
            "extra": "iterations: 11555\ncpu: 76156.82388576334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603477.0390000403,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603467.7999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 477963.54727132205,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 477952.80553420086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579486.6308219316,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 579478.6986301393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598212.8287483056,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 598209.1471801939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337128.8501742129,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 337123.4610917559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582474.6006689101,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582463.344481605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2465378.175066202,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2465323.87267904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1057705.4335982406,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1057655.3916004554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5037.922812788262,
            "unit": "ns/iter",
            "extra": "iterations: 159301\ncpu: 5037.7593360996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24209.850987697773,
            "unit": "ns/iter",
            "extra": "iterations: 33816\ncpu: 24209.075585521747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20863.334244197675,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 20863.457363945225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20463.788955224805,
            "unit": "ns/iter",
            "extra": "iterations: 40200\ncpu: 20463.273631840795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19828.142148159553,
            "unit": "ns/iter",
            "extra": "iterations: 41105\ncpu: 19827.736285123483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62621.206399536975,
            "unit": "ns/iter",
            "extra": "iterations: 13876\ncpu: 62619.292303257535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578713.5169999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578706.6999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575146.1717304881,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 575106.2747688235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575662.4934725858,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 575623.9556135756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576983.7308201406,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 576966.7989417978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327999.7077438823,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 327963.4028294876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566881.0880052332,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 566865.9061277716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 502.1277791290074,
            "unit": "ns/iter",
            "extra": "iterations: 1397920\ncpu: 502.112853382166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2994.3343705327097,
            "unit": "ns/iter",
            "extra": "iterations: 233642\ncpu: 2994.264301795034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2417.3833558160354,
            "unit": "ns/iter",
            "extra": "iterations: 289110\ncpu: 2417.308636851045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2485.3618622409113,
            "unit": "ns/iter",
            "extra": "iterations: 281317\ncpu: 2485.2472477667484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1946.32015421067,
            "unit": "ns/iter",
            "extra": "iterations: 359508\ncpu: 1946.235688774661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17139.414141907415,
            "unit": "ns/iter",
            "extra": "iterations: 40928\ncpu: 17139.019741985954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31425.9694018224,
            "unit": "ns/iter",
            "extra": "iterations: 22485\ncpu: 31423.820324661203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7565.086003621423,
            "unit": "ns/iter",
            "extra": "iterations: 87787\ncpu: 7564.7669928348705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7369.774341980517,
            "unit": "ns/iter",
            "extra": "iterations: 94754\ncpu: 7369.651940815242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7344.023292920235,
            "unit": "ns/iter",
            "extra": "iterations: 95265\ncpu: 7343.659266257221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14470.256960114213,
            "unit": "ns/iter",
            "extra": "iterations: 48311\ncpu: 14469.534888534514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14094.243971229966,
            "unit": "ns/iter",
            "extra": "iterations: 49637\ncpu: 14093.212724378955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5344.250323301449,
            "unit": "ns/iter",
            "extra": "iterations: 130683\ncpu: 5344.004958563884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26577.51619018673,
            "unit": "ns/iter",
            "extra": "iterations: 26374\ncpu: 26576.57541518133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21454.27560042904,
            "unit": "ns/iter",
            "extra": "iterations: 32685\ncpu: 21453.63316506037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21499.03997661055,
            "unit": "ns/iter",
            "extra": "iterations: 32494\ncpu: 21498.22428756089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21682.24515407619,
            "unit": "ns/iter",
            "extra": "iterations: 32192\ncpu: 21681.45191351879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48729.31080139356,
            "unit": "ns/iter",
            "extra": "iterations: 14350\ncpu: 48726.7874564465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159168.6218678791,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159163.4396355362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133329.45577325186,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 133327.1828038809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133143.75147479062,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133140.93244529018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131032.26870489752,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 131026.33877706242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83043.65657521665,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 83038.69441816452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132085.23152521803,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132082.1394821387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5037.460980219508,
            "unit": "ns/iter",
            "extra": "iterations: 138622\ncpu: 5037.265369133258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25717.783364004124,
            "unit": "ns/iter",
            "extra": "iterations: 27170\ncpu: 25716.27162311362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20606.148419782163,
            "unit": "ns/iter",
            "extra": "iterations: 33951\ncpu: 20605.65226355646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20429.207799820608,
            "unit": "ns/iter",
            "extra": "iterations: 34129\ncpu: 20428.524129039964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20890.64740108588,
            "unit": "ns/iter",
            "extra": "iterations: 33514\ncpu: 20890.31747926232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46704.73976451549,
            "unit": "ns/iter",
            "extra": "iterations: 14948\ncpu: 46702.68932298584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155129.64010683517,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 154722.8800356101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129298.82454847381,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129295.85329893099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128393.02112030193,
            "unit": "ns/iter",
            "extra": "iterations: 5445\ncpu: 128393.66391184437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127939.62736455484,
            "unit": "ns/iter",
            "extra": "iterations: 5445\ncpu: 127936.69421487692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81721.5896474994,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 81716.33680758897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127497.18421051734,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127490.88929219684 ns\nthreads: 1"
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
        "date": 1705774864234,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1418.7041222762264,
            "unit": "ns/iter",
            "extra": "iterations: 497104\ncpu: 1418.666315298207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15958.753725586623,
            "unit": "ns/iter",
            "extra": "iterations: 49254\ncpu: 15957.92625979616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33955.831975101246,
            "unit": "ns/iter",
            "extra": "iterations: 24419\ncpu: 33954.03169662968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50192.89367798846,
            "unit": "ns/iter",
            "extra": "iterations: 16751\ncpu: 50189.755835472504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56130.21020000133,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56127.28000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70532.20964242624,
            "unit": "ns/iter",
            "extra": "iterations: 12445\ncpu: 70530.64684612288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84220.80631988152,
            "unit": "ns/iter",
            "extra": "iterations: 10285\ncpu: 84218.46378220708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96659.66324709005,
            "unit": "ns/iter",
            "extra": "iterations: 8968\ncpu: 96651.49420160569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 110339.21045853241,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 110335.94796496649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1192.0139757014945,
            "unit": "ns/iter",
            "extra": "iterations: 591312\ncpu: 1191.9331926292728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 977.5474386211728,
            "unit": "ns/iter",
            "extra": "iterations: 704152\ncpu: 977.5245969620179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 973.7110247416508,
            "unit": "ns/iter",
            "extra": "iterations: 718103\ncpu: 973.6820483969568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 977.5112137423201,
            "unit": "ns/iter",
            "extra": "iterations: 716264\ncpu: 977.4544022874268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1839.4992412427728,
            "unit": "ns/iter",
            "extra": "iterations: 380886\ncpu: 1839.4514369128817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5017.300690331829,
            "unit": "ns/iter",
            "extra": "iterations: 159054\ncpu: 5017.128145158243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25204.433534100386,
            "unit": "ns/iter",
            "extra": "iterations: 32874\ncpu: 25203.89365455985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19174.192800150107,
            "unit": "ns/iter",
            "extra": "iterations: 43112\ncpu: 19173.225552050466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19057.54766817027,
            "unit": "ns/iter",
            "extra": "iterations: 44107\ncpu: 19057.231278481882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19194.734131818004,
            "unit": "ns/iter",
            "extra": "iterations: 43499\ncpu: 19194.096416009583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65403.28818022599,
            "unit": "ns/iter",
            "extra": "iterations: 13672\ncpu: 65402.0260386191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 544127.7689999425,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544088.8000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 543300.5554863045,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 543270.573566085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558337.4479434353,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 558330.0128534691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553989.1420381931,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 553952.3566878972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 314725.023694958,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 314714.66123657924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552080.6286787555,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 552050.3443957441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2318557.4382871776,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2318465.491183884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1058732.9006849623,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1058680.136986302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3263997.3789476547,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3263802.456140353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7289.4192244088135,
            "unit": "ns/iter",
            "extra": "iterations: 115499\ncpu: 7289.055316496257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39009.60412713229,
            "unit": "ns/iter",
            "extra": "iterations: 21080\ncpu: 39007.51423149914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30649.084193331695,
            "unit": "ns/iter",
            "extra": "iterations: 26938\ncpu: 30648.091914767218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31621.357700098626,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 31619.66469132099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30978.041783789842,
            "unit": "ns/iter",
            "extra": "iterations: 26326\ncpu: 30975.989516067788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75972.8869800294,
            "unit": "ns/iter",
            "extra": "iterations: 11467\ncpu: 75967.4021104036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599465.6260000966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599437.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589338.989137778,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 589298.0312287824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586513.9688135599,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 586487.5932203394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585098.9775510032,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 585075.4421768711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336385.80282765394,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 336365.6094764983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580121.9655400739,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 580092.3790589751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2460389.1881718733,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2460215.322580645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1099726.2995282544,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1099695.7547169786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5066.468957027744,
            "unit": "ns/iter",
            "extra": "iterations: 157588\ncpu: 5066.435261568121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24446.692641209134,
            "unit": "ns/iter",
            "extra": "iterations: 33674\ncpu: 24445.598978440317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19570.7714477538,
            "unit": "ns/iter",
            "extra": "iterations: 41706\ncpu: 19570.102623123767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19285.4652640046,
            "unit": "ns/iter",
            "extra": "iterations: 42348\ncpu: 19284.530556342677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18386.354164760436,
            "unit": "ns/iter",
            "extra": "iterations: 43700\ncpu: 18386.050343249473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62667.14325741654,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 62663.30914577163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578896.2320000337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578863.9000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574217.8708827712,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 574182.0158102756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576916.8613666093,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 576887.1879106425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573870.5679419284,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 573837.7968337723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330170.5884123389,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 330152.106847255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562268.778852383,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 562244.9387491936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 495.8163603010152,
            "unit": "ns/iter",
            "extra": "iterations: 1408067\ncpu: 495.79181956540845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3002.3960393488546,
            "unit": "ns/iter",
            "extra": "iterations: 233194\ncpu: 3002.3113802242033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2470.2750331798948,
            "unit": "ns/iter",
            "extra": "iterations: 296866\ncpu: 2470.2178760787683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2391.338614355195,
            "unit": "ns/iter",
            "extra": "iterations: 296786\ncpu: 2391.2984439966876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1914.5167990427797,
            "unit": "ns/iter",
            "extra": "iterations: 366003\ncpu: 1914.419280716279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17033.766546359973,
            "unit": "ns/iter",
            "extra": "iterations: 41006\ncpu: 17033.312198215026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30322.507074637804,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 30320.4059073222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7279.654326119198,
            "unit": "ns/iter",
            "extra": "iterations: 96241\ncpu: 7279.526397273655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7282.39837491132,
            "unit": "ns/iter",
            "extra": "iterations: 96487\ncpu: 7282.189310477113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7247.130140169595,
            "unit": "ns/iter",
            "extra": "iterations: 96811\ncpu: 7246.51330943789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14438.193853279445,
            "unit": "ns/iter",
            "extra": "iterations: 48351\ncpu: 14437.31050029976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13784.472780715741,
            "unit": "ns/iter",
            "extra": "iterations: 51030\ncpu: 13783.703703703613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5380.553194603641,
            "unit": "ns/iter",
            "extra": "iterations: 129797\ncpu: 5380.141297564744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26760.865230345164,
            "unit": "ns/iter",
            "extra": "iterations: 26178\ncpu: 26758.759263504144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21767.05864312277,
            "unit": "ns/iter",
            "extra": "iterations: 32280\ncpu: 21766.418835192388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21695.517978047494,
            "unit": "ns/iter",
            "extra": "iterations: 32345\ncpu: 21694.456639356973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21900.17961938958,
            "unit": "ns/iter",
            "extra": "iterations: 32001\ncpu: 21899.759382519183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48488.334741654624,
            "unit": "ns/iter",
            "extra": "iterations: 14438\ncpu: 48484.85247264132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158793.42452403504,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 158787.60199456083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132367.95893263913,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132362.79333837976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132648.374266792,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 132643.65184484358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132639.51248331481,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 132633.19992376686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82593.17287896076,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 82586.46314045625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134900.20211582154,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 134890.51596139613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5003.769200995258,
            "unit": "ns/iter",
            "extra": "iterations: 139511\ncpu: 5003.538789056068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25410.8136880751,
            "unit": "ns/iter",
            "extra": "iterations: 27513\ncpu: 25409.918947406757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20175.40159068473,
            "unit": "ns/iter",
            "extra": "iterations: 34702\ncpu: 20174.393406719948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19924.70342292021,
            "unit": "ns/iter",
            "extra": "iterations: 35087\ncpu: 19924.33094878476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20503.460096771192,
            "unit": "ns/iter",
            "extra": "iterations: 34308\ncpu: 20502.941005013367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46230.213905877485,
            "unit": "ns/iter",
            "extra": "iterations: 15044\ncpu: 46229.30736506302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154116.11605374783,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154109.84364677465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128197.90123686407,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 128189.90215986836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127815.33107487779,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 127810.80388207237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128420.77059037528,
            "unit": "ns/iter",
            "extra": "iterations: 5488\ncpu: 128411.1151603519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82155.14365802381,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 82149.0072412989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129039.63931124401,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 129030.99468767224 ns\nthreads: 1"
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
        "date": 1705778423278,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1409.5428105527644,
            "unit": "ns/iter",
            "extra": "iterations: 500414\ncpu: 1409.5215161845992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16047.257178190383,
            "unit": "ns/iter",
            "extra": "iterations: 44475\ncpu: 16046.169758291173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33748.5056917872,
            "unit": "ns/iter",
            "extra": "iterations: 24509\ncpu: 33746.54208658045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50619.33099740763,
            "unit": "ns/iter",
            "extra": "iterations: 16553\ncpu: 50615.25403250165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56297.97880000069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56297.13999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70397.39125876856,
            "unit": "ns/iter",
            "extra": "iterations: 12401\ncpu: 70392.54092411904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83523.49879611225,
            "unit": "ns/iter",
            "extra": "iterations: 10383\ncpu: 83517.92352884523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96983.52827678414,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 96978.29895764029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113032.21236979392,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 113024.76562499984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1203.3096462767155,
            "unit": "ns/iter",
            "extra": "iterations: 581302\ncpu: 1203.1916284478662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 946.4637597489645,
            "unit": "ns/iter",
            "extra": "iterations: 737895\ncpu: 946.3983358065851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 951.9708142424121,
            "unit": "ns/iter",
            "extra": "iterations: 737483\ncpu: 951.9565874738801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.8885509310513,
            "unit": "ns/iter",
            "extra": "iterations: 744340\ncpu: 941.8650079264836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1837.891642093528,
            "unit": "ns/iter",
            "extra": "iterations: 381172\ncpu: 1837.7687763004647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5378.09405982842,
            "unit": "ns/iter",
            "extra": "iterations: 152403\ncpu: 5377.635610847554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26013.656560574585,
            "unit": "ns/iter",
            "extra": "iterations: 31796\ncpu: 26012.130456661187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20649.478873238313,
            "unit": "ns/iter",
            "extra": "iterations: 39831\ncpu: 20648.208681680157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20248.950751457676,
            "unit": "ns/iter",
            "extra": "iterations: 40854\ncpu: 20247.57918441284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21979.448384256884,
            "unit": "ns/iter",
            "extra": "iterations: 39765\ncpu: 21977.912737331895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65929.44653675127,
            "unit": "ns/iter",
            "extra": "iterations: 13701\ncpu: 65925.69155536068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564925.6409999452,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564916.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565261.3933161459,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 565236.5681233926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 572743.292682932,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 572719.5121951221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567505.566883105,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567487.5324675326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326045.749266873,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 326032.88123167126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 570553.5985593053,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 570527.6358873616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2358445.2290074658,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2358257.7608142453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1087007.7056075435,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1086945.2102803749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3248226.7007044577,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3247994.366197182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7389.236666695959,
            "unit": "ns/iter",
            "extra": "iterations: 113569\ncpu: 7388.656235416352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38804.970550099715,
            "unit": "ns/iter",
            "extra": "iterations: 21596\ncpu: 38802.34302648628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31032.59105479525,
            "unit": "ns/iter",
            "extra": "iterations: 26517\ncpu: 31031.756986084605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31148.387064378763,
            "unit": "ns/iter",
            "extra": "iterations: 26887\ncpu: 31147.16405697916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30614.040852507344,
            "unit": "ns/iter",
            "extra": "iterations: 27073\ncpu: 30613.326930890627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75461.07043229799,
            "unit": "ns/iter",
            "extra": "iterations: 11543\ncpu: 75458.49432556584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604587.4630000298,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604569.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598397.6685083332,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598366.1602209948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 601697.244841823,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 601672.4209078414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592729.7336512306,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 592708.1062670334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335706.867714761,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 335699.00306748267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587280.306136187,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 587265.6102494912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2484005.927223827,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2483853.9083558023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1084391.8345071208,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1084336.0328638523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5132.113296209357,
            "unit": "ns/iter",
            "extra": "iterations: 156413\ncpu: 5131.990307711026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24484.983891287993,
            "unit": "ns/iter",
            "extra": "iterations: 33336\ncpu: 24484.380249580005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18785.712055426367,
            "unit": "ns/iter",
            "extra": "iterations: 43300\ncpu: 18785.08314087768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19721.41474805693,
            "unit": "ns/iter",
            "extra": "iterations: 42609\ncpu: 19720.620056795553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19090.069203588933,
            "unit": "ns/iter",
            "extra": "iterations: 43018\ncpu: 19089.576456367115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63105.030816189465,
            "unit": "ns/iter",
            "extra": "iterations: 13759\ncpu: 63103.53223344693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566079.0670000324,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566060.500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 591506.7763768744,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 591480.8228268104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 584407.4805280957,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 584398.9438943896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 583729.0610080087,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 583709.6153846172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332979.05530303344,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 332964.4318181835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567110.1222222449,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 567089.9346405215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 502.82108096398287,
            "unit": "ns/iter",
            "extra": "iterations: 1388779\ncpu: 502.8049819301692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3061.2303045645394,
            "unit": "ns/iter",
            "extra": "iterations: 229114\ncpu: 3061.1503443700717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2406.3727715026803,
            "unit": "ns/iter",
            "extra": "iterations: 291452\ncpu: 2406.3118455182916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2408.680732650615,
            "unit": "ns/iter",
            "extra": "iterations: 291981\ncpu: 2408.6255612522796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1950.4055671124531,
            "unit": "ns/iter",
            "extra": "iterations: 361013\ncpu: 1950.3566353566077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16925.89818645286,
            "unit": "ns/iter",
            "extra": "iterations: 41576\ncpu: 16925.16596113158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30924.96644474949,
            "unit": "ns/iter",
            "extra": "iterations: 22381\ncpu: 30923.653992225634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7356.519578187352,
            "unit": "ns/iter",
            "extra": "iterations: 95208\ncpu: 7356.339803377967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7421.86434740227,
            "unit": "ns/iter",
            "extra": "iterations: 94484\ncpu: 7421.767706701664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7372.359557201765,
            "unit": "ns/iter",
            "extra": "iterations: 94761\ncpu: 7372.161543250991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14602.400272708055,
            "unit": "ns/iter",
            "extra": "iterations: 47670\ncpu: 14601.711768407551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13957.320453363847,
            "unit": "ns/iter",
            "extra": "iterations: 50026\ncpu: 13956.282732978874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5360.867398913451,
            "unit": "ns/iter",
            "extra": "iterations: 130557\ncpu: 5360.734391874777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26863.461216175652,
            "unit": "ns/iter",
            "extra": "iterations: 26016\ncpu: 26862.46924969294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21737.436798058836,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 21736.891391594054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21692.082440512364,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21690.989784477362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21720.27022359037,
            "unit": "ns/iter",
            "extra": "iterations: 31844\ncpu: 21719.38512749676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49099.9892608972,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 49096.06934793216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160520.1557812121,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 160508.0775444264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134527.25688598797,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 134513.98240244924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134728.038238691,
            "unit": "ns/iter",
            "extra": "iterations: 5178\ncpu: 134717.76747779004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134590.90472501176,
            "unit": "ns/iter",
            "extra": "iterations: 5164\ncpu: 134582.01006971288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84401.38999403476,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 84399.10661107741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134136.43569654948,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 134132.71545958534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5167.807041080036,
            "unit": "ns/iter",
            "extra": "iterations: 135661\ncpu: 5167.40625529811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26001.092813813608,
            "unit": "ns/iter",
            "extra": "iterations: 26871\ncpu: 25998.928212571212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20678.15787296728,
            "unit": "ns/iter",
            "extra": "iterations: 33850\ncpu: 20676.691285081197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20726.345646905414,
            "unit": "ns/iter",
            "extra": "iterations: 33838\ncpu: 20724.765057036708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21003.361669989594,
            "unit": "ns/iter",
            "extra": "iterations: 33102\ncpu: 21001.54673433646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47417.97003592259,
            "unit": "ns/iter",
            "extra": "iterations: 14751\ncpu: 47414.64985424756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156362.40887694707,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 156353.4633490231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130855.1651702217,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130844.81855592987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130773.92978208033,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130763.32650400324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131578.542557171,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131573.13460817406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82621.22829279875,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82619.99765010028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131334.27539503877,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131325.48908954073 ns\nthreads: 1"
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
        "date": 1705953601852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1406.5948455632797,
            "unit": "ns/iter",
            "extra": "iterations: 489132\ncpu: 1406.5626456662005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15892.848338681586,
            "unit": "ns/iter",
            "extra": "iterations: 52037\ncpu: 15892.476507100715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33907.600665624814,
            "unit": "ns/iter",
            "extra": "iterations: 24338\ncpu: 33905.62905744104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50413.381111774455,
            "unit": "ns/iter",
            "extra": "iterations: 16730\ncpu: 50411.918708906145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56099.98850000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56098.08000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72569.50246067428,
            "unit": "ns/iter",
            "extra": "iterations: 12395\ncpu: 72565.09883017346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82666.7155180682,
            "unit": "ns/iter",
            "extra": "iterations: 10433\ncpu: 82662.8103134286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96293.712429999,
            "unit": "ns/iter",
            "extra": "iterations: 8930\ncpu: 96290.04479283307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112432.94448081961,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 112427.24891973287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.5051783979918,
            "unit": "ns/iter",
            "extra": "iterations: 609648\ncpu: 1147.4970802823927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.3290536755273,
            "unit": "ns/iter",
            "extra": "iterations: 738922\ncpu: 948.3153837617509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 952.637859605648,
            "unit": "ns/iter",
            "extra": "iterations: 733790\ncpu: 952.6206407827841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 932.5040721711811,
            "unit": "ns/iter",
            "extra": "iterations: 749109\ncpu: 932.4852591545431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1833.2486770836595,
            "unit": "ns/iter",
            "extra": "iterations: 384189\ncpu: 1833.1375963393023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5239.498611896711,
            "unit": "ns/iter",
            "extra": "iterations: 152006\ncpu: 5239.403049879614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25185.415104672964,
            "unit": "ns/iter",
            "extra": "iterations: 32864\ncpu: 25146.792843232717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19452.597772218236,
            "unit": "ns/iter",
            "extra": "iterations: 41566\ncpu: 19452.07381032573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19757.704197781084,
            "unit": "ns/iter",
            "extra": "iterations: 41379\ncpu: 19756.88875999899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19224.77256087464,
            "unit": "ns/iter",
            "extra": "iterations: 42341\ncpu: 19224.196405375398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66243.54332570451,
            "unit": "ns/iter",
            "extra": "iterations: 13537\ncpu: 66241.03567998816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 542586.6729999598,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542581.3000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563595.8169642837,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 563564.9234693877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557028.2970360625,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 556999.4201030916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 552570.2969657994,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 552563.0083925128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324392.1011443466,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 324358.25027685513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560007.633739538,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559952.8543938425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2345831.14898971,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2345720.454545455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1088358.8922716153,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1088280.2107728324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3269880.7429575236,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3269675.352112685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7324.332808164016,
            "unit": "ns/iter",
            "extra": "iterations: 114249\ncpu: 7323.913557230258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40104.26718150084,
            "unit": "ns/iter",
            "extra": "iterations: 20589\ncpu: 40104.53154597123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31892.591692304413,
            "unit": "ns/iter",
            "extra": "iterations: 26000\ncpu: 31890.342307692572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31862.173321025635,
            "unit": "ns/iter",
            "extra": "iterations: 25998\ncpu: 31860.58542964836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33558.53309205546,
            "unit": "ns/iter",
            "extra": "iterations: 25973\ncpu: 33557.682978477584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76963.413170524,
            "unit": "ns/iter",
            "extra": "iterations: 11465\ncpu: 76960.70649803735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601640.3009999748,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601599.8999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589030.2150684831,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 589017.8082191781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588556.7636363801,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 588554.4107744095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584999.6856754401,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 584946.3679565472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336422.7588190313,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 336411.65644171793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579456.820478668,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 579438.962765955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2492005.890080715,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2491771.045576398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105026.6370106898,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1104960.6168446029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4927.8650548983705,
            "unit": "ns/iter",
            "extra": "iterations: 160569\ncpu: 4927.610559946229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24452.394480132723,
            "unit": "ns/iter",
            "extra": "iterations: 33624\ncpu: 24451.094456340827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19312.7398998184,
            "unit": "ns/iter",
            "extra": "iterations: 42722\ncpu: 19311.462478348454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18805.57272229555,
            "unit": "ns/iter",
            "extra": "iterations: 43838\ncpu: 18804.6192800766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19298.194128984505,
            "unit": "ns/iter",
            "extra": "iterations: 43059\ncpu: 19297.21080378095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62128.875134712354,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 62129.21186866857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582138.5949999468,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582112.2999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577320.3302631576,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 577314.0131578954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 560267.2446183938,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 560236.2035225075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566466.4656991726,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 566439.313984169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327264.0553684869,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 327249.53236064373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562312.9903784412,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 562292.0461834479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 505.1730175039588,
            "unit": "ns/iter",
            "extra": "iterations: 1384883\ncpu: 505.16498505649594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3095.970975484976,
            "unit": "ns/iter",
            "extra": "iterations: 226636\ncpu: 3095.7892832559487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2508.685304749086,
            "unit": "ns/iter",
            "extra": "iterations: 279410\ncpu: 2508.5952542858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2241.2077699387655,
            "unit": "ns/iter",
            "extra": "iterations: 310839\ncpu: 2241.1209661593352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1937.4679748290046,
            "unit": "ns/iter",
            "extra": "iterations: 361372\ncpu: 1937.4807677407262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16737.133737362095,
            "unit": "ns/iter",
            "extra": "iterations: 41746\ncpu: 16736.76998993918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31314.86553606129,
            "unit": "ns/iter",
            "extra": "iterations: 22348\ncpu: 31314.596384463952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7313.902141663381,
            "unit": "ns/iter",
            "extra": "iterations: 95720\ncpu: 7313.429795236079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7328.227142737676,
            "unit": "ns/iter",
            "extra": "iterations: 95812\ncpu: 7327.789838433607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7338.091031323294,
            "unit": "ns/iter",
            "extra": "iterations: 95198\ncpu: 7337.83797978953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14433.947550502562,
            "unit": "ns/iter",
            "extra": "iterations: 48561\ncpu: 14433.275673894432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14054.106124499449,
            "unit": "ns/iter",
            "extra": "iterations: 49800\ncpu: 14053.98393574281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5332.133895660827,
            "unit": "ns/iter",
            "extra": "iterations: 130766\ncpu: 5331.9318477279785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26510.52148289187,
            "unit": "ns/iter",
            "extra": "iterations: 26300\ncpu: 26510.422053231927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21325.660238977165,
            "unit": "ns/iter",
            "extra": "iterations: 32723\ncpu: 21324.835742444335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21220.588306501453,
            "unit": "ns/iter",
            "extra": "iterations: 33044\ncpu: 21219.244038251927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21397.029564792294,
            "unit": "ns/iter",
            "extra": "iterations: 32674\ncpu: 21395.681581685836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48669.64242083587,
            "unit": "ns/iter",
            "extra": "iterations: 14243\ncpu: 48666.53092747343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157547.70283020317,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 157534.43396226206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132226.97623986084,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 132217.98981708608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131369.88390006474,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131365.2263761058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131339.80408698748,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131331.72103487226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81728.36336021157,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 81728.84682790075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130657.25230480364,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 130654.5061147701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5008.302477519685,
            "unit": "ns/iter",
            "extra": "iterations: 139898\ncpu: 5007.9429298489495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25641.895454711725,
            "unit": "ns/iter",
            "extra": "iterations: 27347\ncpu: 25639.32058361031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20402.37471862475,
            "unit": "ns/iter",
            "extra": "iterations: 34207\ncpu: 20400.95886806785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20367.156296491186,
            "unit": "ns/iter",
            "extra": "iterations: 34281\ncpu: 20365.969487471142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20705.26878338307,
            "unit": "ns/iter",
            "extra": "iterations: 33700\ncpu: 20703.881305637955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46812.8614397417,
            "unit": "ns/iter",
            "extra": "iterations: 14961\ncpu: 46808.80957155207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152676.44628821814,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152665.78602620235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127438.06495166809,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 127432.62178434675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127156.31453952045,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 127147.02683103851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127179.53321234812,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127178.4573502701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80490.05847751026,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 80481.01499423417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126644.18757898679,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126638.23794908811 ns\nthreads: 1"
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
        "date": 1705955020151,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1379.2617363684926,
            "unit": "ns/iter",
            "extra": "iterations: 508164\ncpu: 1379.207696727828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16156.433697593582,
            "unit": "ns/iter",
            "extra": "iterations: 50971\ncpu: 16155.657138372799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34426.67264424817,
            "unit": "ns/iter",
            "extra": "iterations: 24090\ncpu: 34425.13075965132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50713.73084860967,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 50712.74128930434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55586.657999992894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55586.909999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69408.0859076419,
            "unit": "ns/iter",
            "extra": "iterations: 12560\ncpu: 69404.5700636943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83333.4593246298,
            "unit": "ns/iter",
            "extra": "iterations: 10424\ncpu: 83331.73445894096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96377.72450566343,
            "unit": "ns/iter",
            "extra": "iterations: 9002\ncpu: 96373.45034436797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112533.68064473738,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 112527.53243349497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1154.6303195872456,
            "unit": "ns/iter",
            "extra": "iterations: 606908\ncpu: 1154.5667547634885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 937.2661449791528,
            "unit": "ns/iter",
            "extra": "iterations: 747446\ncpu: 937.2653007708919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 943.4157938124994,
            "unit": "ns/iter",
            "extra": "iterations: 742392\ncpu: 943.402003254347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 932.2776257532068,
            "unit": "ns/iter",
            "extra": "iterations: 750975\ncpu: 932.2399547255222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1861.0950126755024,
            "unit": "ns/iter",
            "extra": "iterations: 377497\ncpu: 1861.0322731041556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5220.237238203393,
            "unit": "ns/iter",
            "extra": "iterations: 152408\ncpu: 5220.093433415568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25827.18695451057,
            "unit": "ns/iter",
            "extra": "iterations: 32425\ncpu: 25825.74248265229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20091.88157732545,
            "unit": "ns/iter",
            "extra": "iterations: 40499\ncpu: 20091.639299735805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19780.57269205512,
            "unit": "ns/iter",
            "extra": "iterations: 41043\ncpu: 19780.07455595351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19206.49857977898,
            "unit": "ns/iter",
            "extra": "iterations: 42599\ncpu: 19206.068217563825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65026.60182058362,
            "unit": "ns/iter",
            "extra": "iterations: 13622\ncpu: 65021.0982234621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557938.7989999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557905.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 548773.2270132882,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 548747.9391249223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556757.9642857183,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 556738.7662337667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 542219.571061095,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 542181.864951769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322723.27330115496,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 322705.3471964347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559129.5198973353,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 559120.4107830533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2344182.3787878077,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2344032.57575758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1068002.9457901844,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1067966.5513264148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3263609.5070422054,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3263373.239436625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7357.396291010195,
            "unit": "ns/iter",
            "extra": "iterations: 114209\ncpu: 7357.2818254253425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39791.619648082,
            "unit": "ns/iter",
            "extra": "iterations: 20857\ncpu: 39789.92184877984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33460.09394866096,
            "unit": "ns/iter",
            "extra": "iterations: 24854\ncpu: 33459.54775891209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32749.38310474935,
            "unit": "ns/iter",
            "extra": "iterations: 25155\ncpu: 32748.610614191864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30997.608259539415,
            "unit": "ns/iter",
            "extra": "iterations: 25522\ncpu: 30997.08878614548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75091.03412074212,
            "unit": "ns/iter",
            "extra": "iterations: 11430\ncpu: 75087.45406824152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602232.9469999477,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602214.6000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593532.8498293865,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 593513.1740614336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593452.3524199001,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 593426.6530334041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583659.1591973059,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 583648.3612040116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334714.12788908655,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 334699.65331278916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578369.7146631412,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 578359.0488771483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2474548.898123062,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2474428.150134034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1080841.7660069815,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1080799.534342264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5089.946198174929,
            "unit": "ns/iter",
            "extra": "iterations: 156872\ncpu: 5089.819725636218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24357.59467956588,
            "unit": "ns/iter",
            "extra": "iterations: 33080\ncpu: 24356.27871825868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19216.20915452723,
            "unit": "ns/iter",
            "extra": "iterations: 42012\ncpu: 19215.60744549174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18692.963534629176,
            "unit": "ns/iter",
            "extra": "iterations: 42177\ncpu: 18690.97138250702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18401.584663796522,
            "unit": "ns/iter",
            "extra": "iterations: 43218\ncpu: 18400.92554028404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62755.88581912288,
            "unit": "ns/iter",
            "extra": "iterations: 13899\ncpu: 62752.35628462464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577552.3959999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577516.9000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569145.6131147579,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 569128.3934426231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569424.5980327546,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 569414.8852459043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563575.0502577253,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 563561.9201030938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329123.3945863207,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 329113.1910026686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559686.8492013016,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 559680.2555910522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 503.1460631841422,
            "unit": "ns/iter",
            "extra": "iterations: 1394020\ncpu: 502.7659574468103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3006.9375597677026,
            "unit": "ns/iter",
            "extra": "iterations: 234240\ncpu: 3006.8967725409802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2270.3973691113883,
            "unit": "ns/iter",
            "extra": "iterations: 308869\ncpu: 2270.263121258524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2370.8620249694095,
            "unit": "ns/iter",
            "extra": "iterations: 295481\ncpu: 2370.7896616026087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1935.620457578182,
            "unit": "ns/iter",
            "extra": "iterations: 361206\ncpu: 1935.5091000703196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16974.529360967514,
            "unit": "ns/iter",
            "extra": "iterations: 41688\ncpu: 16973.584724621225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31444.851538116865,
            "unit": "ns/iter",
            "extra": "iterations: 22430\ncpu: 31442.345073562155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7362.680860079444,
            "unit": "ns/iter",
            "extra": "iterations: 94410\ncpu: 7362.661794301537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7373.213412577427,
            "unit": "ns/iter",
            "extra": "iterations: 94896\ncpu: 7373.133746417025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7261.715725998089,
            "unit": "ns/iter",
            "extra": "iterations: 95021\ncpu: 7261.02230033352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13785.592135606308,
            "unit": "ns/iter",
            "extra": "iterations: 50735\ncpu: 13784.998521730397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13891.916360749914,
            "unit": "ns/iter",
            "extra": "iterations: 50395\ncpu: 13891.090385950938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5278.896702833282,
            "unit": "ns/iter",
            "extra": "iterations: 132811\ncpu: 5278.85491412604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26613.128362971387,
            "unit": "ns/iter",
            "extra": "iterations: 26316\ncpu: 26612.186502507993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20991.429909617742,
            "unit": "ns/iter",
            "extra": "iterations: 33414\ncpu: 20991.323995929997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21117.562914106813,
            "unit": "ns/iter",
            "extra": "iterations: 33355\ncpu: 21116.63019037643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21447.92951110538,
            "unit": "ns/iter",
            "extra": "iterations: 32686\ncpu: 21447.543290705424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48351.38154699972,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 48349.594172737525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156848.36991229077,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 156846.39082527702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131301.14901593022,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131298.5192127459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132269.87625980744,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 132264.6323254961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131911.98248257212,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 131909.68167263243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82502.47243725203,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 82499.81233872812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132083.23502825285,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 132076.47834275008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5019.124746655511,
            "unit": "ns/iter",
            "extra": "iterations: 138152\ncpu: 5019.15064566564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25428.717841121143,
            "unit": "ns/iter",
            "extra": "iterations: 27644\ncpu: 25428.63550860969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20274.0596709595,
            "unit": "ns/iter",
            "extra": "iterations: 34707\ncpu: 20273.645086005858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20173.07424901338,
            "unit": "ns/iter",
            "extra": "iterations: 34721\ncpu: 20172.687998617843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20596.774714269195,
            "unit": "ns/iter",
            "extra": "iterations: 33948\ncpu: 20596.538824083946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47028.941200214016,
            "unit": "ns/iter",
            "extra": "iterations: 14864\ncpu: 47028.821313240805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154080.8354064931,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 154077.5655264336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128937.40976605646,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 128931.56331229115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126184.81660962159,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 126182.20140515195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128761.4629527585,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128756.5177422318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81517.15377435288,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 81517.50087504303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127999.39351171882,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 127997.12243401691 ns\nthreads: 1"
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
        "date": 1705957023007,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1400.676448647042,
            "unit": "ns/iter",
            "extra": "iterations: 500001\ncpu: 1400.5975988048024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16326.907132466928,
            "unit": "ns/iter",
            "extra": "iterations: 50179\ncpu: 16326.710376850873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34292.51520841289,
            "unit": "ns/iter",
            "extra": "iterations: 23967\ncpu: 34291.31722785497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50672.63787696465,
            "unit": "ns/iter",
            "extra": "iterations: 16580\ncpu: 50671.59831121836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56198.30210000601,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56195.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70610.31155939808,
            "unit": "ns/iter",
            "extra": "iterations: 12492\ncpu: 70607.25264169069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84491.15483808766,
            "unit": "ns/iter",
            "extra": "iterations: 10314\ncpu: 84487.54120612766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96626.59161595223,
            "unit": "ns/iter",
            "extra": "iterations: 8874\ncpu: 96624.3971151679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112223.38345665905,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 112221.39270613102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1158.4659497198668,
            "unit": "ns/iter",
            "extra": "iterations: 604136\ncpu: 1158.448428830595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.0130699802512,
            "unit": "ns/iter",
            "extra": "iterations: 740552\ncpu: 948.0171547710343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 950.7210906697286,
            "unit": "ns/iter",
            "extra": "iterations: 739839\ncpu: 950.6911638883606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1009.2567236813729,
            "unit": "ns/iter",
            "extra": "iterations: 696605\ncpu: 1009.2324918712903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1836.4782506219644,
            "unit": "ns/iter",
            "extra": "iterations: 381850\ncpu: 1836.4213696477661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5228.343189494792,
            "unit": "ns/iter",
            "extra": "iterations: 152764\ncpu: 5228.324081589905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25248.085270129715,
            "unit": "ns/iter",
            "extra": "iterations: 32614\ncpu: 25247.399889617995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19763.330461299,
            "unit": "ns/iter",
            "extra": "iterations: 41318\ncpu: 19763.294447940352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19215.08994044527,
            "unit": "ns/iter",
            "extra": "iterations: 42984\ncpu: 19214.600781686153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19585.7750343928,
            "unit": "ns/iter",
            "extra": "iterations: 42162\ncpu: 19585.392059200178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65345.071641355695,
            "unit": "ns/iter",
            "extra": "iterations: 13763\ncpu: 65343.68233669975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 606995.1609999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606963.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560397.7775653858,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 560372.594008921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545443.978682155,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 545433.5917312657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 545074.105934902,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 545066.560306316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321919.15568639786,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 321908.2811924915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566959.2699742655,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 566952.5773195876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2346542.4156171293,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2346462.720403025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1112657.7546947438,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1112654.2253521124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3250987.4230768885,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3250969.930069926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7247.893374437797,
            "unit": "ns/iter",
            "extra": "iterations: 116126\ncpu: 7247.667189087716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38722.7638400628,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 38722.1675338678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31237.003713149454,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 31236.036306353566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30898.164631202657,
            "unit": "ns/iter",
            "extra": "iterations: 26939\ncpu: 30897.85812390955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30686.10204844558,
            "unit": "ns/iter",
            "extra": "iterations: 26752\ncpu: 30684.610496411384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75217.14935517279,
            "unit": "ns/iter",
            "extra": "iterations: 11476\ncpu: 75216.1815963747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603298.5239999107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603262.8999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588133.652322425,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 588128.8251366095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587187.386456905,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 587173.3242134083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581923.9142856625,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 581903.5374149634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339986.00233283854,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 339983.8258164834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577933.2586436016,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 577915.492021277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2496618.781671194,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2496604.851752015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1087615.6405151268,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1087574.3559719005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5105.8468627581515,
            "unit": "ns/iter",
            "extra": "iterations: 158531\ncpu: 5105.56799616476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24432.076512613265,
            "unit": "ns/iter",
            "extra": "iterations: 33733\ncpu: 24431.60703168998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19928.52479886494,
            "unit": "ns/iter",
            "extra": "iterations: 42260\ncpu: 19927.953147184136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19608.058536121847,
            "unit": "ns/iter",
            "extra": "iterations: 41957\ncpu: 19607.874728889146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19136.16196568101,
            "unit": "ns/iter",
            "extra": "iterations: 42367\ncpu: 19135.565416479763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62930.218312388504,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 62928.88330341109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584508.504999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584510.7000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580871.478751663,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 580865.4714475468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576842.5069767956,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 576826.0465116323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573359.9275839678,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 573340.5529953913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329141.5783132868,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 329136.85993976094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567955.4465449438,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567941.0691003901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 501.9156010376946,
            "unit": "ns/iter",
            "extra": "iterations: 1397766\ncpu: 501.89337843387705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3089.633222125642,
            "unit": "ns/iter",
            "extra": "iterations: 226903\ncpu: 3089.5096142404254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2495.7166978371315,
            "unit": "ns/iter",
            "extra": "iterations: 302638\ncpu: 2495.5659897303194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2411.452304936943,
            "unit": "ns/iter",
            "extra": "iterations: 290355\ncpu: 2411.354720945057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1975.518223517853,
            "unit": "ns/iter",
            "extra": "iterations: 354048\ncpu: 1975.4471145155399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16886.43171457358,
            "unit": "ns/iter",
            "extra": "iterations: 41678\ncpu: 16885.98061327323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31250.18286124029,
            "unit": "ns/iter",
            "extra": "iterations: 22312\ncpu: 31249.02294729284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7410.865531626143,
            "unit": "ns/iter",
            "extra": "iterations: 94446\ncpu: 7410.675941808111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7415.043055305414,
            "unit": "ns/iter",
            "extra": "iterations: 94367\ncpu: 7415.008424555253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7407.928830592099,
            "unit": "ns/iter",
            "extra": "iterations: 94535\ncpu: 7407.667001639541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14767.795856566623,
            "unit": "ns/iter",
            "extra": "iterations: 47883\ncpu: 14767.00707975703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14005.94626369221,
            "unit": "ns/iter",
            "extra": "iterations: 49929\ncpu: 14005.245448536827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5594.892582487866,
            "unit": "ns/iter",
            "extra": "iterations: 125352\ncpu: 5594.640691811828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26631.8334855036,
            "unit": "ns/iter",
            "extra": "iterations: 26286\ncpu: 26630.875751350522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21469.557299650536,
            "unit": "ns/iter",
            "extra": "iterations: 32618\ncpu: 21469.621068121545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21278.023026614308,
            "unit": "ns/iter",
            "extra": "iterations: 32875\ncpu: 21277.73079847929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21519.048808208863,
            "unit": "ns/iter",
            "extra": "iterations: 32556\ncpu: 21519.108612851895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48749.13798871033,
            "unit": "ns/iter",
            "extra": "iterations: 14349\ncpu: 48747.96153042002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157188.9049865297,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 157186.2533692727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133153.25403983492,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 133148.42164600006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131123.1541627767,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 131122.24508886776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131550.91380281298,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131547.00469483656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82372.17963157983,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 82371.1017247441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131478.6763766185,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131474.87314414585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5068.22066627079,
            "unit": "ns/iter",
            "extra": "iterations: 138322\ncpu: 5068.17209120744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25682.86642904418,
            "unit": "ns/iter",
            "extra": "iterations: 27214\ncpu: 25681.7851106051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20453.55355680496,
            "unit": "ns/iter",
            "extra": "iterations: 34188\ncpu: 20453.120978120984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20141.214308333958,
            "unit": "ns/iter",
            "extra": "iterations: 34735\ncpu: 20141.070965884493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20537.54290748773,
            "unit": "ns/iter",
            "extra": "iterations: 34050\ncpu: 20536.919236417176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47089.62711977664,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 47087.81419666206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154001.46894887544,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 153998.8369541348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128386.36258491766,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128386.76335597767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126920.9996357171,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 126915.42805100186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128621.79279940926,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128616.07274063077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81602.94284712539,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 81600.64282374944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128284.93470284804,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128285.41819515577 ns\nthreads: 1"
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
        "date": 1705958496345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1357.9890945363975,
            "unit": "ns/iter",
            "extra": "iterations: 525333\ncpu: 1357.9801763833607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15934.22789135609,
            "unit": "ns/iter",
            "extra": "iterations: 51507\ncpu: 15933.337216300697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33981.181665162265,
            "unit": "ns/iter",
            "extra": "iterations: 24358\ncpu: 33979.91624928156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50670.15730136465,
            "unit": "ns/iter",
            "extra": "iterations: 16764\ncpu: 50667.412312097345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55992.37579999681,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55991.030000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70710.72563031845,
            "unit": "ns/iter",
            "extra": "iterations: 12454\ncpu: 70706.32728440658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84475.08619020355,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 84471.53786558202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95897.5330821206,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 95893.76039011413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111534.83226704272,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 111528.17802503472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1153.087598214513,
            "unit": "ns/iter",
            "extra": "iterations: 607090\ncpu: 1153.0458416379772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.6530433325579,
            "unit": "ns/iter",
            "extra": "iterations: 733423\ncpu: 958.6416024586094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 957.9971131884834,
            "unit": "ns/iter",
            "extra": "iterations: 729871\ncpu: 957.9625714681085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 942.5019122041693,
            "unit": "ns/iter",
            "extra": "iterations: 742337\ncpu: 942.4774731691947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1836.5316705112114,
            "unit": "ns/iter",
            "extra": "iterations: 380638\ncpu: 1836.4640419506204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5192.74668923778,
            "unit": "ns/iter",
            "extra": "iterations: 153590\ncpu: 5192.617357900905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25304.36757844644,
            "unit": "ns/iter",
            "extra": "iterations: 32793\ncpu: 25302.970146067764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20071.788176859838,
            "unit": "ns/iter",
            "extra": "iterations: 40869\ncpu: 20071.004918153154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20072.13874609753,
            "unit": "ns/iter",
            "extra": "iterations: 40657\ncpu: 20071.325970927508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20154.400652264165,
            "unit": "ns/iter",
            "extra": "iterations: 40781\ncpu: 20153.603393737325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65962.63876451197,
            "unit": "ns/iter",
            "extra": "iterations: 13177\ncpu: 65959.61144418296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 578698.9570000287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578668.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 544963.276893717,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 544950.7956715459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 550730.5035278983,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 550713.5984605525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558826.9613401858,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 558782.7963917521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325365.08635201526,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 325352.54299304774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556973.2915339879,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 556961.998726926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2329241.2130328435,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2329097.7443609047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1064884.997687862,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1064853.4104046235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3237852.599302813,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3237675.6097561084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7274.117059646241,
            "unit": "ns/iter",
            "extra": "iterations: 115061\ncpu: 7273.893847611283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38453.5404249391,
            "unit": "ns/iter",
            "extra": "iterations: 21509\ncpu: 38451.8806081175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30877.34145702415,
            "unit": "ns/iter",
            "extra": "iterations: 26712\ncpu: 30875.909703504105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30375.478475730324,
            "unit": "ns/iter",
            "extra": "iterations: 27318\ncpu: 30374.024452741804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30670.98944957621,
            "unit": "ns/iter",
            "extra": "iterations: 26634\ncpu: 30668.7955245175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76451.92044655367,
            "unit": "ns/iter",
            "extra": "iterations: 11376\ncpu: 76446.272855134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 587933.411999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587935.6000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589916.2244067141,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 589884.3389830472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587313.1588911628,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 587282.1501014206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587458.4264706499,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 587441.3770053475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333221.96272102,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 333195.8877786309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577466.8286852882,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 577431.4077025233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2484289.715817458,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2484169.973190358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1085995.0514018864,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1085853.3878504673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5006.983234632802,
            "unit": "ns/iter",
            "extra": "iterations: 157885\ncpu: 5006.934160939914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24449.342862219473,
            "unit": "ns/iter",
            "extra": "iterations: 33757\ncpu: 24448.096691056795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19172.125220788577,
            "unit": "ns/iter",
            "extra": "iterations: 43028\ncpu: 19171.502277586802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18910.977935598436,
            "unit": "ns/iter",
            "extra": "iterations: 43509\ncpu: 18909.745110207114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18752.941577318958,
            "unit": "ns/iter",
            "extra": "iterations: 44024\ncpu: 18752.778030165467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62210.33615009484,
            "unit": "ns/iter",
            "extra": "iterations: 13964\ncpu: 62208.1638498998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573529.753999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573513.4999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573466.2284963616,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 573438.2140512164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574378.175587481,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 574365.7310704935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574123.4831387859,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 574107.3929961076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326295.6948076196,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 326274.37429959053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558956.7435233258,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 558951.8134715047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 496.2352530166463,
            "unit": "ns/iter",
            "extra": "iterations: 1406864\ncpu: 496.22131208134175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3038.9922314727737,
            "unit": "ns/iter",
            "extra": "iterations: 229902\ncpu: 3038.8965733225295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2393.465216644999,
            "unit": "ns/iter",
            "extra": "iterations: 291260\ncpu: 2393.422371764068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2271.0830614928564,
            "unit": "ns/iter",
            "extra": "iterations: 308085\ncpu: 2271.0615576869814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1923.6103954533964,
            "unit": "ns/iter",
            "extra": "iterations: 362293\ncpu: 1923.5491715268906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16875.91130151144,
            "unit": "ns/iter",
            "extra": "iterations: 41083\ncpu: 16875.778302460803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30995.471752287875,
            "unit": "ns/iter",
            "extra": "iterations: 22639\ncpu: 30994.456468925368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7292.874728896249,
            "unit": "ns/iter",
            "extra": "iterations: 95904\ncpu: 7292.875166833556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7308.808484542646,
            "unit": "ns/iter",
            "extra": "iterations: 95397\ncpu: 7308.500267304012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7299.3579669467945,
            "unit": "ns/iter",
            "extra": "iterations: 96210\ncpu: 7299.106122024737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14419.59577409515,
            "unit": "ns/iter",
            "extra": "iterations: 48463\ncpu: 14418.90308070079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13858.978942461592,
            "unit": "ns/iter",
            "extra": "iterations: 49341\ncpu: 13858.561845118662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5281.6951793641265,
            "unit": "ns/iter",
            "extra": "iterations: 132970\ncpu: 5281.597352786411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26357.150549368474,
            "unit": "ns/iter",
            "extra": "iterations: 26576\ncpu: 26355.50496688757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21232.392165184585,
            "unit": "ns/iter",
            "extra": "iterations: 32981\ncpu: 21231.972954125395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21268.14550790347,
            "unit": "ns/iter",
            "extra": "iterations: 32713\ncpu: 21267.15984471028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21605.453685503904,
            "unit": "ns/iter",
            "extra": "iterations: 32560\ncpu: 21605.285626535468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48450.751000968805,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48447.61148695278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155947.81494905025,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 155942.6047565129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132657.51988583672,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 132651.5509039029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132632.90153379878,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132628.53626207137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132462.1551430191,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132458.15495358876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82572.4239489851,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82569.6386395853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132587.53215162896,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 132586.51706581214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5085.793915324727,
            "unit": "ns/iter",
            "extra": "iterations: 137230\ncpu: 5085.58697077896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26013.138414611873,
            "unit": "ns/iter",
            "extra": "iterations: 26883\ncpu: 26012.8891864746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20779.88451599411,
            "unit": "ns/iter",
            "extra": "iterations: 33667\ncpu: 20778.902189087064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20699.927355108688,
            "unit": "ns/iter",
            "extra": "iterations: 33767\ncpu: 20699.28332395554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20943.147603125646,
            "unit": "ns/iter",
            "extra": "iterations: 33502\ncpu: 20942.669094382403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46601.31760399467,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46599.65391015033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152854.86473429867,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 152846.64031620603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128182.13825305138,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 128179.47262406131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127910.16526507371,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 127905.08226690994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125670.67665874033,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 125666.86163407119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81269.77405518008,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 81266.47345235388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126690.70205417903,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 126683.89383748325 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}