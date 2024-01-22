window.BENCHMARK_DATA = {
  "lastUpdate": 1705958573655,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 20.04 Release c++-17": [
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
        "date": 1702490329960,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9075182215023,
            "unit": "ns/iter",
            "extra": "iterations: 964244\ncpu: 721.8802502271211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10723.03437629082,
            "unit": "ns/iter",
            "extra": "iterations: 77408\ncpu: 10722.570018602726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23803.529472536688,
            "unit": "ns/iter",
            "extra": "iterations: 34846\ncpu: 23802.05762497848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38460.0477120172,
            "unit": "ns/iter",
            "extra": "iterations: 21001\ncpu: 38459.9066711109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46535.34469254587,
            "unit": "ns/iter",
            "extra": "iterations: 17108\ncpu: 46533.9256488193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58235.67717563054,
            "unit": "ns/iter",
            "extra": "iterations: 14559\ncpu: 58232.94182292744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58383.660100003006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58383.52999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66618.42623835309,
            "unit": "ns/iter",
            "extra": "iterations: 12981\ncpu: 66617.66427856096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77134.04107047709,
            "unit": "ns/iter",
            "extra": "iterations: 11322\ncpu: 77132.7503974562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.3532235346286,
            "unit": "ns/iter",
            "extra": "iterations: 1225394\ncpu: 571.3592526158932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.58117152400916,
            "unit": "ns/iter",
            "extra": "iterations: 1454106\ncpu: 481.56736854122084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.03409547993965,
            "unit": "ns/iter",
            "extra": "iterations: 1466822\ncpu: 477.03913630965474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.46264796644465,
            "unit": "ns/iter",
            "extra": "iterations: 1460804\ncpu: 479.45405406885493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 953.8670526989026,
            "unit": "ns/iter",
            "extra": "iterations: 735690\ncpu: 953.8561078715228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3021.6084981840777,
            "unit": "ns/iter",
            "extra": "iterations: 263774\ncpu: 3021.5976555687803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14600.933510733537,
            "unit": "ns/iter",
            "extra": "iterations: 55994\ncpu: 14601.069757474017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11914.22026823938,
            "unit": "ns/iter",
            "extra": "iterations: 68521\ncpu: 11914.077436114458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11285.046437871275,
            "unit": "ns/iter",
            "extra": "iterations: 72204\ncpu: 11285.0326851698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12900.867114926072,
            "unit": "ns/iter",
            "extra": "iterations: 59638\ncpu: 12900.467822529228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36775.068977763774,
            "unit": "ns/iter",
            "extra": "iterations: 22529\ncpu: 36775.44498202326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460290.6718085304,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 460295.69148936216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371007.46801202436,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 370986.4319450398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 365418.9869143143,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 365392.3596454198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371139.5240733016,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371137.15381337784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229026.92416688034,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 229022.0676987664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372367.61931333115,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 372345.36480686656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1888732.1926229573,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1888689.9590163925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 742420.598887948,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 742403.7331215243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2568012.4361110125,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2567948.888888891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3167.7277779382016,
            "unit": "ns/iter",
            "extra": "iterations: 242383\ncpu: 3167.7258718639487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14534.99759215271,
            "unit": "ns/iter",
            "extra": "iterations: 56482\ncpu: 14534.79515597884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11897.08940162816,
            "unit": "ns/iter",
            "extra": "iterations: 69171\ncpu: 11897.013199173078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11500.554736413922,
            "unit": "ns/iter",
            "extra": "iterations: 73790\ncpu: 11500.460767041692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12156.354066839169,
            "unit": "ns/iter",
            "extra": "iterations: 65739\ncpu: 12156.356196473957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37986.036318852464,
            "unit": "ns/iter",
            "extra": "iterations: 22330\ncpu: 37985.63367666828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475971.8089453379,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 475977.4710104929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383476.04095109034,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 383467.8996036982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375470.7121277653,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375474.7086750119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376458.88044885325,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376462.667242124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224298.0620015524,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 224290.50681759772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373723.08959043847,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 373723.08020477823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1899260.9190871052,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1899030.0829875628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749163.6841686475,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 749165.9506762091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3218.280418086528,
            "unit": "ns/iter",
            "extra": "iterations: 248561\ncpu: 3218.188291807634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14530.270153084615,
            "unit": "ns/iter",
            "extra": "iterations: 56505\ncpu: 14530.183169631102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11899.083471827817,
            "unit": "ns/iter",
            "extra": "iterations: 69197\ncpu: 11898.908912236142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11462.503622429022,
            "unit": "ns/iter",
            "extra": "iterations: 71637\ncpu: 11462.628250764332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12254.990250467952,
            "unit": "ns/iter",
            "extra": "iterations: 66875\ncpu: 12254.509158878514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36289.952233870696,
            "unit": "ns/iter",
            "extra": "iterations: 22987\ncpu: 36290.3380171402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456627.0089051851,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 456614.03876375227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373544.33248301584,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 373542.5595238124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368135.8443694478,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 368139.85660059267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369527.66497675737,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 369520.36332910886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230946.06922873293,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 230948.53908923332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368332.1579838706,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 368319.5256247344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 316.19473664097904,
            "unit": "ns/iter",
            "extra": "iterations: 2224055\ncpu: 316.1982954558231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1508.9872974503605,
            "unit": "ns/iter",
            "extra": "iterations: 465812\ncpu: 1508.9765828274062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1155.392832003256,
            "unit": "ns/iter",
            "extra": "iterations: 606613\ncpu: 1155.4061650508638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1179.9124203794247,
            "unit": "ns/iter",
            "extra": "iterations: 593597\ncpu: 1179.8956194185675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 985.7463311807874,
            "unit": "ns/iter",
            "extra": "iterations: 711128\ncpu: 985.7312607575568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6623.377529809921,
            "unit": "ns/iter",
            "extra": "iterations: 105838\ncpu: 6623.363064305815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18756.695605313307,
            "unit": "ns/iter",
            "extra": "iterations: 37113\ncpu: 18756.123191334496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4456.513731969543,
            "unit": "ns/iter",
            "extra": "iterations: 157370\ncpu: 4456.426256592711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4420.452173748379,
            "unit": "ns/iter",
            "extra": "iterations: 158344\ncpu: 4420.277370787655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4483.113216884218,
            "unit": "ns/iter",
            "extra": "iterations: 155604\ncpu: 4483.023572658817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9408.733514110576,
            "unit": "ns/iter",
            "extra": "iterations: 75231\ncpu: 9408.340976459176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8496.96734183714,
            "unit": "ns/iter",
            "extra": "iterations: 82399\ncpu: 8496.66743528438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3084.3883166503915,
            "unit": "ns/iter",
            "extra": "iterations: 227178\ncpu: 3084.2929332945823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15411.522823313593,
            "unit": "ns/iter",
            "extra": "iterations: 45436\ncpu: 15411.702174487215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12262.986681914623,
            "unit": "ns/iter",
            "extra": "iterations: 56840\ncpu: 12262.776213933728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12218.581024084817,
            "unit": "ns/iter",
            "extra": "iterations: 57378\ncpu: 12218.148070689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12737.648197670984,
            "unit": "ns/iter",
            "extra": "iterations: 54596\ncpu: 12736.031943732181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28043.61621274419,
            "unit": "ns/iter",
            "extra": "iterations: 24894\ncpu: 28042.04225917844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98858.81872088693,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98857.09445150282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84386.17136658475,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84381.248493613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83377.64353725381,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 83377.04118067084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83375.15924555666,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83371.74406112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54646.99261849286,
            "unit": "ns/iter",
            "extra": "iterations: 12870\ncpu: 54644.739704739324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84016.42384105996,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84014.22034918836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3002.1584428644355,
            "unit": "ns/iter",
            "extra": "iterations: 232658\ncpu: 3002.039474249748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15046.269088083434,
            "unit": "ns/iter",
            "extra": "iterations: 46364\ncpu: 15045.684151496876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11990.116005747448,
            "unit": "ns/iter",
            "extra": "iterations: 58454\ncpu: 11989.684196119802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12008.645504549148,
            "unit": "ns/iter",
            "extra": "iterations: 58359\ncpu: 12008.464846895868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12592.661161188666,
            "unit": "ns/iter",
            "extra": "iterations: 55581\ncpu: 12591.932494917355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27029.46811303181,
            "unit": "ns/iter",
            "extra": "iterations: 25904\ncpu: 27028.02269919693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97034.07260634557,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 97027.47679091048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80888.1010287854,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80884.77632643563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81675.53484564708,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81673.46819457396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81127.8377157432,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81126.66512220562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54883.36168540496,
            "unit": "ns/iter",
            "extra": "iterations: 12721\ncpu: 54881.12569766523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82789.56305506382,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 82788.43102427525 ns\nthreads: 1"
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
        "date": 1702492950269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 701.3090928864484,
            "unit": "ns/iter",
            "extra": "iterations: 993051\ncpu: 701.2875471652513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10634.12343098916,
            "unit": "ns/iter",
            "extra": "iterations: 77995\ncpu: 10633.45727290211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23632.408713399236,
            "unit": "ns/iter",
            "extra": "iterations: 35279\ncpu: 23631.09498568554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37830.075638509494,
            "unit": "ns/iter",
            "extra": "iterations: 21378\ncpu: 37827.61249883058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46317.36482970299,
            "unit": "ns/iter",
            "extra": "iterations: 17293\ncpu: 46314.42780315735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58685.92310875729,
            "unit": "ns/iter",
            "extra": "iterations: 14501\ncpu: 58682.53913523209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59001.51829999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59000.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68151.8832139819,
            "unit": "ns/iter",
            "extra": "iterations: 12707\ncpu: 68148.57165341935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79499.9241948473,
            "unit": "ns/iter",
            "extra": "iterations: 11147\ncpu: 79494.3123710416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 568.3466019558695,
            "unit": "ns/iter",
            "extra": "iterations: 1231326\ncpu: 568.3139152425912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.8125777834618,
            "unit": "ns/iter",
            "extra": "iterations: 1480070\ncpu: 472.7729769537928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.9585742893019,
            "unit": "ns/iter",
            "extra": "iterations: 1505635\ncpu: 465.949649151355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 467.89971106766944,
            "unit": "ns/iter",
            "extra": "iterations: 1492737\ncpu: 467.87089755261724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 921.8457972114297,
            "unit": "ns/iter",
            "extra": "iterations: 759234\ncpu: 921.8194917508974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3244.628372543912,
            "unit": "ns/iter",
            "extra": "iterations: 246661\ncpu: 3244.440345251175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13682.660288208277,
            "unit": "ns/iter",
            "extra": "iterations: 59471\ncpu: 13682.433454961243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11188.14187928718,
            "unit": "ns/iter",
            "extra": "iterations: 72900\ncpu: 11187.890260631038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11288.394581519708,
            "unit": "ns/iter",
            "extra": "iterations: 72345\ncpu: 11288.109751883303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11834.129698137398,
            "unit": "ns/iter",
            "extra": "iterations: 69469\ncpu: 11833.481121075612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37679.024674162065,
            "unit": "ns/iter",
            "extra": "iterations: 22250\ncpu: 37678.534831460674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 462201.1159496526,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 462160.5981112279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369951.3980375337,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 369928.83959044307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367762.21507198195,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 367742.76037256536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373877.9435656099,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 373855.40829414374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228710.22592494747,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 228695.22435056456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370351.7340696958,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 370328.0798640615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1889031.9038856584,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1888916.5644171773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750371.433466091,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 750321.6733067727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2554971.6323120287,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2554821.169916436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3170.424478307487,
            "unit": "ns/iter",
            "extra": "iterations: 245499\ncpu: 3170.268310665215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14919.806085863544,
            "unit": "ns/iter",
            "extra": "iterations: 54947\ncpu: 14918.945529328199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12181.475007420342,
            "unit": "ns/iter",
            "extra": "iterations: 67380\ncpu: 12180.635203324495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10760.788253134582,
            "unit": "ns/iter",
            "extra": "iterations: 76497\ncpu: 10760.123926428561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11799.887703650784,
            "unit": "ns/iter",
            "extra": "iterations: 68622\ncpu: 11799.20142228439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36390.446823358005,
            "unit": "ns/iter",
            "extra": "iterations: 22933\ncpu: 36388.22657306044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474945.68403908686,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 474914.7665580873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385168.64698046364,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 385146.9360568375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377433.23633998376,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 377422.6366001742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379173.4926406825,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 379150.0865800838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226089.4545923664,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 226078.40557275544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379570.14360087673,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 379548.32971800416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1895070.2683438004,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1894910.9014675023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 754238.2292839474,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 754172.8077232505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3239.474812027228,
            "unit": "ns/iter",
            "extra": "iterations: 253494\ncpu: 3239.2888983565813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15016.673852295455,
            "unit": "ns/iter",
            "extra": "iterations: 55110\ncpu: 15015.65596080568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11846.637585279948,
            "unit": "ns/iter",
            "extra": "iterations: 67718\ncpu: 11845.854868720286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11099.225230602939,
            "unit": "ns/iter",
            "extra": "iterations: 73720\ncpu: 11098.703201302196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11788.288354445025,
            "unit": "ns/iter",
            "extra": "iterations: 69314\ncpu: 11787.628761866235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37707.50287153294,
            "unit": "ns/iter",
            "extra": "iterations: 22636\ncpu: 37706.15833186071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453128.06559087033,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 453095.7313898989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371648.55569723644,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 371637.41496598435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368151.3424599693,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 368130.62342038786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368449.246511619,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 368430.48625792627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227213.57610390004,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 227195.16883116864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367376.07836453774,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 367350.5536626913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.3565787929769,
            "unit": "ns/iter",
            "extra": "iterations: 2360547\ncpu: 296.34292390704275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1486.512705182321,
            "unit": "ns/iter",
            "extra": "iterations: 471776\ncpu: 1486.433816048293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1127.1027311139958,
            "unit": "ns/iter",
            "extra": "iterations: 621944\ncpu: 1127.0035565903045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1119.863167658085,
            "unit": "ns/iter",
            "extra": "iterations: 625320\ncpu: 1119.7906671784112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 987.6892852747889,
            "unit": "ns/iter",
            "extra": "iterations: 706999\ncpu: 987.6564181844727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6602.467739498578,
            "unit": "ns/iter",
            "extra": "iterations: 105888\ncpu: 6602.316598670309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18618.495837654824,
            "unit": "ns/iter",
            "extra": "iterations: 37599\ncpu: 18617.4419532434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4428.002510814952,
            "unit": "ns/iter",
            "extra": "iterations: 158116\ncpu: 4427.850438918258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4400.206496212709,
            "unit": "ns/iter",
            "extra": "iterations: 158831\ncpu: 4399.9622239990795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4424.346178893849,
            "unit": "ns/iter",
            "extra": "iterations: 158161\ncpu: 4424.059028458314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9285.402454183128,
            "unit": "ns/iter",
            "extra": "iterations: 75626\ncpu: 9284.810779361542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8388.12685154983,
            "unit": "ns/iter",
            "extra": "iterations: 82971\ncpu: 8387.822251147896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3067.7995511261784,
            "unit": "ns/iter",
            "extra": "iterations: 228572\ncpu: 3067.754580613567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15337.415297550251,
            "unit": "ns/iter",
            "extra": "iterations: 45589\ncpu: 15337.373050516753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12180.329674147768,
            "unit": "ns/iter",
            "extra": "iterations: 57572\ncpu: 12179.792260126533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12111.270262785345,
            "unit": "ns/iter",
            "extra": "iterations: 57766\ncpu: 12110.230931689932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13152.847788510628,
            "unit": "ns/iter",
            "extra": "iterations: 49175\ncpu: 13151.884087442892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27638.823736590515,
            "unit": "ns/iter",
            "extra": "iterations: 25269\ncpu: 27637.31845344078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98089.6972502785,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98083.19304152741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84491.89039111095,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84489.5943988423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84353.51419976354,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84347.95427196099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83925.26523809216,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83919.13095238124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55301.770934419495,
            "unit": "ns/iter",
            "extra": "iterations: 12778\ncpu: 55298.786977617354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83560.61454978869,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83557.13774597576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3022.2389504550342,
            "unit": "ns/iter",
            "extra": "iterations: 231910\ncpu: 3022.03139148807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15028.928044838143,
            "unit": "ns/iter",
            "extra": "iterations: 46390\ncpu: 15028.238844578502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12040.46407873536,
            "unit": "ns/iter",
            "extra": "iterations: 58322\ncpu: 12040.296971983133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11864.684946182599,
            "unit": "ns/iter",
            "extra": "iterations: 58809\ncpu: 11864.167049261194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12670.973564777949,
            "unit": "ns/iter",
            "extra": "iterations: 55305\ncpu: 12670.127474911706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27042.757873256825,
            "unit": "ns/iter",
            "extra": "iterations: 25974\ncpu: 27040.49819049825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96943.2111265735,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 96936.67593880367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81610.3209790219,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81609.23076923008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82125.53951849478,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82125.26130358152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82162.57349313462,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82158.6887557272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55455.792130834394,
            "unit": "ns/iter",
            "extra": "iterations: 12657\ncpu: 55450.48589713164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84196.11906763868,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 84189.52300853154 ns\nthreads: 1"
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
        "date": 1702503961848,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 700.0489641651064,
            "unit": "ns/iter",
            "extra": "iterations: 987947\ncpu: 699.9954450997878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10695.738275536525,
            "unit": "ns/iter",
            "extra": "iterations: 77253\ncpu: 10694.792435245236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23725.593944969438,
            "unit": "ns/iter",
            "extra": "iterations: 34781\ncpu: 23723.35470515511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37916.526607102845,
            "unit": "ns/iter",
            "extra": "iterations: 22945\ncpu: 37913.36674656788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46422.64334420478,
            "unit": "ns/iter",
            "extra": "iterations: 16865\ncpu: 46418.67773495405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58333.37554224268,
            "unit": "ns/iter",
            "extra": "iterations: 14523\ncpu: 58326.130964676704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58616.93279999827,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58614.81999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66935.92753623449,
            "unit": "ns/iter",
            "extra": "iterations: 13041\ncpu: 66933.62472203057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78057.94969053702,
            "unit": "ns/iter",
            "extra": "iterations: 11310\ncpu: 78050.14146772763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 558.9165847369541,
            "unit": "ns/iter",
            "extra": "iterations: 1248021\ncpu: 558.899169164621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.54050387518043,
            "unit": "ns/iter",
            "extra": "iterations: 1479414\ncpu: 473.53736006283594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 463.7345111252487,
            "unit": "ns/iter",
            "extra": "iterations: 1502982\ncpu: 463.73835481729037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.0088004942002,
            "unit": "ns/iter",
            "extra": "iterations: 1479576\ncpu: 472.9989537543191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.7343589716053,
            "unit": "ns/iter",
            "extra": "iterations: 754522\ncpu: 931.7269741637742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 2997.34415897561,
            "unit": "ns/iter",
            "extra": "iterations: 265450\ncpu: 2997.3219061970267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14684.45244450976,
            "unit": "ns/iter",
            "extra": "iterations: 55819\ncpu: 14684.116519464744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11930.037717756377,
            "unit": "ns/iter",
            "extra": "iterations: 68827\ncpu: 11929.940285062545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11316.80423835217,
            "unit": "ns/iter",
            "extra": "iterations: 72481\ncpu: 11316.637463611127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11467.29463870748,
            "unit": "ns/iter",
            "extra": "iterations: 71009\ncpu: 11466.922502781328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37293.213338743866,
            "unit": "ns/iter",
            "extra": "iterations: 22176\ncpu: 37292.3069985569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 453959.06865830923,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 453940.77568134235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372638.7961538153,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 372618.20512820594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 370259.47525599255,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 370239.50511945377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375307.8946459268,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 375301.4680483591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227651.43817276065,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 227641.55946442677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369175.32531158073,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 369160.9798023208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1894301.9979590236,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1894286.326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 755197.1616814947,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 755185.4486661279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2557576.9224375673,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2557463.711911352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3211.9243298351694,
            "unit": "ns/iter",
            "extra": "iterations: 250125\ncpu: 3211.851674162931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14692.380426063766,
            "unit": "ns/iter",
            "extra": "iterations: 56095\ncpu: 14692.489526695768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11754.596500612412,
            "unit": "ns/iter",
            "extra": "iterations: 71041\ncpu: 11754.464323418924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11124.985825182148,
            "unit": "ns/iter",
            "extra": "iterations: 73299\ncpu: 11124.953955715677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12055.091538834751,
            "unit": "ns/iter",
            "extra": "iterations: 67993\ncpu: 12055.061550453778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37377.15151108386,
            "unit": "ns/iter",
            "extra": "iterations: 22368\ncpu: 37377.423104435074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 491662.1790465834,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 491654.5454545466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385922.3359929249,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 385917.95212765725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383584.8698901208,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 383584.219780219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378341.8358862196,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 378334.96717724093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226665.0218807148,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 226661.26595467684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378198.9257019689,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 378191.144708423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1898129.2041665653,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1898086.4583333218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 764635.452536876,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 764581.2602291334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3189.1772491535116,
            "unit": "ns/iter",
            "extra": "iterations: 250083\ncpu: 3189.0800254315564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15072.15613059232,
            "unit": "ns/iter",
            "extra": "iterations: 56267\ncpu: 15071.086071764947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11889.723327904883,
            "unit": "ns/iter",
            "extra": "iterations: 69389\ncpu: 11889.331161999738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11551.162657129064,
            "unit": "ns/iter",
            "extra": "iterations: 73824\ncpu: 11550.705732553057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11737.707379804006,
            "unit": "ns/iter",
            "extra": "iterations: 68430\ncpu: 11737.021774075698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36491.26294331934,
            "unit": "ns/iter",
            "extra": "iterations: 22811\ncpu: 36490.64486431997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466401.06230031047,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 466405.4313099067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375567.6132930483,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375564.65256797615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372417.6358626371,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 372406.74014413095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371937.29944468685,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 371940.06834686076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227337.33419420637,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 227323.78615702572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366932.0368644221,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 366920.38135593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 290.47737501865606,
            "unit": "ns/iter",
            "extra": "iterations: 2399118\ncpu: 290.4724986432526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1468.8768532595482,
            "unit": "ns/iter",
            "extra": "iterations: 479493\ncpu: 1468.8881798065727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1121.4090621966661,
            "unit": "ns/iter",
            "extra": "iterations: 625323\ncpu: 1121.367197432361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1178.0727020889,
            "unit": "ns/iter",
            "extra": "iterations: 620890\ncpu: 1178.0403936285034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 980.4251990028946,
            "unit": "ns/iter",
            "extra": "iterations: 709663\ncpu: 980.3895651879766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6607.158133365205,
            "unit": "ns/iter",
            "extra": "iterations: 106309\ncpu: 6607.132039620329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18557.945569588475,
            "unit": "ns/iter",
            "extra": "iterations: 37773\ncpu: 18558.08646387635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4445.999549089121,
            "unit": "ns/iter",
            "extra": "iterations: 157459\ncpu: 4445.978318165316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4395.040063174811,
            "unit": "ns/iter",
            "extra": "iterations: 158924\ncpu: 4394.964888877725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4450.550981694338,
            "unit": "ns/iter",
            "extra": "iterations: 156566\ncpu: 4450.585695489467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9265.608847498252,
            "unit": "ns/iter",
            "extra": "iterations: 74733\ncpu: 9265.490479439972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8409.540190031883,
            "unit": "ns/iter",
            "extra": "iterations: 83354\ncpu: 8409.385272452393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3099.6645402298473,
            "unit": "ns/iter",
            "extra": "iterations: 226200\ncpu: 3099.5579133510305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15482.312658925985,
            "unit": "ns/iter",
            "extra": "iterations: 45225\ncpu: 15482.228855721502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12304.51997970547,
            "unit": "ns/iter",
            "extra": "iterations: 57158\ncpu: 12304.617026488082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12249.285879082781,
            "unit": "ns/iter",
            "extra": "iterations: 57213\ncpu: 12249.032562529439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12815.36210189145,
            "unit": "ns/iter",
            "extra": "iterations: 54979\ncpu: 12815.029374852344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28037.895942434945,
            "unit": "ns/iter",
            "extra": "iterations: 25015\ncpu: 28037.193683790112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97320.6229485449,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 97321.25173852617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83425.73125075475,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83424.15643257379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83211.75493362352,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83211.36227723955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83798.4376106295,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 83796.563421829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54445.964679403165,
            "unit": "ns/iter",
            "extra": "iterations: 12882\ncpu: 54444.566061170495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83371.75951475189,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83371.34871550866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3024.166336933119,
            "unit": "ns/iter",
            "extra": "iterations: 231500\ncpu: 3024.038012958993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15179.014801208434,
            "unit": "ns/iter",
            "extra": "iterations: 46280\ncpu: 15178.980121002356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12169.287126293637,
            "unit": "ns/iter",
            "extra": "iterations: 57264\ncpu: 12169.14466331391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11915.04782933768,
            "unit": "ns/iter",
            "extra": "iterations: 58876\ncpu: 11914.849853930327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12688.167191116301,
            "unit": "ns/iter",
            "extra": "iterations: 55296\ncpu: 12688.237847222268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27121.880658120088,
            "unit": "ns/iter",
            "extra": "iterations: 25892\ncpu: 27121.373397188436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96525.02364261539,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96523.67010309242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81956.89119473605,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 81955.950287254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81139.99884138067,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 81139.79840111289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80779.7191063008,
            "unit": "ns/iter",
            "extra": "iterations: 8683\ncpu: 80780.1796614069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54980.49021457088,
            "unit": "ns/iter",
            "extra": "iterations: 12723\ncpu: 54979.38379313027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82400.68961865237,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82399.41148775892 ns\nthreads: 1"
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
        "date": 1705575642381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 743.4182049253557,
            "unit": "ns/iter",
            "extra": "iterations: 1011100\ncpu: 743.3985758085255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10838.262985748766,
            "unit": "ns/iter",
            "extra": "iterations: 77046\ncpu: 10838.074656698596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23976.986054969453,
            "unit": "ns/iter",
            "extra": "iterations: 34636\ncpu: 23975.64383878046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37031.567761991166,
            "unit": "ns/iter",
            "extra": "iterations: 22520\ncpu: 37029.48046181173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46734.4063514521,
            "unit": "ns/iter",
            "extra": "iterations: 16941\ncpu: 46732.56596422875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58544.109436292914,
            "unit": "ns/iter",
            "extra": "iterations: 14529\ncpu: 58541.221006263375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58362.53869999837,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58360.14999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67905.42000466211,
            "unit": "ns/iter",
            "extra": "iterations: 12857\ncpu: 67902.15446838291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78024.28175621897,
            "unit": "ns/iter",
            "extra": "iterations: 11297\ncpu: 78021.85535982996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.2004540314191,
            "unit": "ns/iter",
            "extra": "iterations: 1220180\ncpu: 572.1770558442187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 474.60874726455523,
            "unit": "ns/iter",
            "extra": "iterations: 1475044\ncpu: 474.5913342246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 468.70220192329555,
            "unit": "ns/iter",
            "extra": "iterations: 1493240\ncpu: 468.67730572446453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.3720294154791,
            "unit": "ns/iter",
            "extra": "iterations: 1473784\ncpu: 474.37534944062367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 927.8534322720997,
            "unit": "ns/iter",
            "extra": "iterations: 754136\ncpu: 927.812092248613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3212.5744027207297,
            "unit": "ns/iter",
            "extra": "iterations: 246409\ncpu: 3212.4885860500226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14687.067727716343,
            "unit": "ns/iter",
            "extra": "iterations: 55354\ncpu: 14686.438197781577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11845.772149142127,
            "unit": "ns/iter",
            "extra": "iterations: 68874\ncpu: 11845.445305920954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11188.774583195887,
            "unit": "ns/iter",
            "extra": "iterations: 72936\ncpu: 11188.337720741469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11873.449996340816,
            "unit": "ns/iter",
            "extra": "iterations: 68325\ncpu: 11873.124039517039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38418.585699868425,
            "unit": "ns/iter",
            "extra": "iterations: 20811\ncpu: 38416.89971649594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 456601.96354995016,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 456579.76756471227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372685.85671643214,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 372676.16204690974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369666.53226485674,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 369648.24968367704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370273.5173288296,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 370271.2595097205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227727.3209876506,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 227726.39873916496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368493.7119148944,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 368491.0212765946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1887773.2546202862,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1887725.2566735111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 740649.6287284587,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 740631.4756671906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2568109.5666666604,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2567976.6666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3162.97432332664,
            "unit": "ns/iter",
            "extra": "iterations: 242399\ncpu: 3162.924351998154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15001.391871151878,
            "unit": "ns/iter",
            "extra": "iterations: 56687\ncpu: 15000.959655653009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12351.129484086909,
            "unit": "ns/iter",
            "extra": "iterations: 67182\ncpu: 12351.018129856218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11225.526504648833,
            "unit": "ns/iter",
            "extra": "iterations: 73572\ncpu: 11225.046213233285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11830.448116017027,
            "unit": "ns/iter",
            "extra": "iterations: 68817\ncpu: 11830.133542583955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36593.976120080355,
            "unit": "ns/iter",
            "extra": "iterations: 21985\ncpu: 36592.754150557186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471008.52966790425,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 471004.5726728378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383327.60907884204,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 383323.5345967378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379991.7996469386,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 379984.15710503125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380798.52234272804,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 380800.69414316583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225067.4284232422,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225059.05082987537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378758.5869659309,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 378741.8644799295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1900745.4117647815,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1900624.5798319376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 738352.9968101655,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 738323.3652312594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3327.085407579831,
            "unit": "ns/iter",
            "extra": "iterations: 244627\ncpu: 3326.9234385411264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15225.341895923177,
            "unit": "ns/iter",
            "extra": "iterations: 54306\ncpu: 15224.60501602034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12419.257159574257,
            "unit": "ns/iter",
            "extra": "iterations: 66659\ncpu: 12418.690649424712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11816.546073712223,
            "unit": "ns/iter",
            "extra": "iterations: 69595\ncpu: 11816.100294561395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12672.22495763211,
            "unit": "ns/iter",
            "extra": "iterations: 66088\ncpu: 12672.155308074152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36818.05319007153,
            "unit": "ns/iter",
            "extra": "iterations: 22523\ncpu: 36816.29889446351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460376.2445853394,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 460359.8520866343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376482.51981054305,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 376461.88630490954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373000.792003407,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 372988.1752445767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372566.1379015307,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 372548.22269807383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228741.04637151715,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 228732.93162169374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370955.1794217538,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 370940.34863945545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.7992350573129,
            "unit": "ns/iter",
            "extra": "iterations: 2367759\ncpu: 297.78600778204316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1477.672876866961,
            "unit": "ns/iter",
            "extra": "iterations: 471214\ncpu: 1477.6437032855522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1171.6266331972795,
            "unit": "ns/iter",
            "extra": "iterations: 623853\ncpu: 1171.620718342304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1133.1637566553613,
            "unit": "ns/iter",
            "extra": "iterations: 618497\ncpu: 1133.1589320562618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.8803317873202,
            "unit": "ns/iter",
            "extra": "iterations: 701172\ncpu: 997.835481165828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6683.039629892254,
            "unit": "ns/iter",
            "extra": "iterations: 104618\ncpu: 6682.68557991934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18746.029921047786,
            "unit": "ns/iter",
            "extra": "iterations: 37365\ncpu: 18745.189348320866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4506.795168324104,
            "unit": "ns/iter",
            "extra": "iterations: 155474\ncpu: 4506.530352341854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4478.920411751439,
            "unit": "ns/iter",
            "extra": "iterations: 156405\ncpu: 4478.910520763412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4479.9664524241725,
            "unit": "ns/iter",
            "extra": "iterations: 155898\ncpu: 4479.898395104435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8968.683849149758,
            "unit": "ns/iter",
            "extra": "iterations: 78064\ncpu: 8968.634709981652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8504.774218702645,
            "unit": "ns/iter",
            "extra": "iterations: 82075\ncpu: 8504.404508072008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3052.6256663512113,
            "unit": "ns/iter",
            "extra": "iterations: 229421\ncpu: 3052.495194424209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15424.631329499243,
            "unit": "ns/iter",
            "extra": "iterations: 45363\ncpu: 15423.737407137776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12286.797627625467,
            "unit": "ns/iter",
            "extra": "iterations: 56905\ncpu: 12286.375538177743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12266.724350899642,
            "unit": "ns/iter",
            "extra": "iterations: 57156\ncpu: 12266.024564350268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12774.9259939618,
            "unit": "ns/iter",
            "extra": "iterations: 54982\ncpu: 12774.74264304697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27575.59892879389,
            "unit": "ns/iter",
            "extra": "iterations: 25392\ncpu: 27575.20478890996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99128.72442500688,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 99127.20474107613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84559.16433059024,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 84555.48574190304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84025.09028446848,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84021.26325940283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83719.43777857417,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 83715.44392241864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53966.55880754218,
            "unit": "ns/iter",
            "extra": "iterations: 12881\ncpu: 53965.92655849714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84201.32719615026,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84199.96389891765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3008.163262499389,
            "unit": "ns/iter",
            "extra": "iterations: 232705\ncpu: 3008.153241228214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15005.671364731068,
            "unit": "ns/iter",
            "extra": "iterations: 46544\ncpu: 15004.675146098329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12164.137263025623,
            "unit": "ns/iter",
            "extra": "iterations: 57918\ncpu: 12163.500120860495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11912.625184706892,
            "unit": "ns/iter",
            "extra": "iterations: 58877\ncpu: 11912.07602289534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12586.884811964825,
            "unit": "ns/iter",
            "extra": "iterations: 55761\ncpu: 12586.122917451155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26929.36795252029,
            "unit": "ns/iter",
            "extra": "iterations: 25949\ncpu: 26928.124397857486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96772.86915498636,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 96771.30567503905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82235.45431055823,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82235.20084566674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82050.94518935538,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 82046.51846624455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81950.34647788714,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 81947.4139948522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54792.05676479703,
            "unit": "ns/iter",
            "extra": "iterations: 12772\ncpu: 54789.53961791386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83237.19440493651,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 83236.66429587497 ns\nthreads: 1"
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
        "date": 1705773459660,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 701.5229113561514,
            "unit": "ns/iter",
            "extra": "iterations: 998806\ncpu: 701.5119052148266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10876.705701420966,
            "unit": "ns/iter",
            "extra": "iterations: 76402\ncpu: 10876.414229993981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24287.830700169492,
            "unit": "ns/iter",
            "extra": "iterations: 34306\ncpu: 24287.503643677486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39340.888994011075,
            "unit": "ns/iter",
            "extra": "iterations: 22197\ncpu: 39339.775645357484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49743.68267674016,
            "unit": "ns/iter",
            "extra": "iterations: 16677\ncpu: 49741.35635905738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59770.013277775935,
            "unit": "ns/iter",
            "extra": "iterations: 14159\ncpu: 59769.15036372625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59830.69870000008,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59830.260000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69063.1691217441,
            "unit": "ns/iter",
            "extra": "iterations: 12559\ncpu: 69061.4698622501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78827.87685621741,
            "unit": "ns/iter",
            "extra": "iterations: 11044\ncpu: 78825.59760956178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 583.0515936250822,
            "unit": "ns/iter",
            "extra": "iterations: 1201098\ncpu: 583.0380202115061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 486.8701108215423,
            "unit": "ns/iter",
            "extra": "iterations: 1440605\ncpu: 486.8662124593495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.95165760879394,
            "unit": "ns/iter",
            "extra": "iterations: 1461533\ncpu: 478.94094762143544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.8316956652026,
            "unit": "ns/iter",
            "extra": "iterations: 1447485\ncpu: 483.828018943201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 944.9017285979598,
            "unit": "ns/iter",
            "extra": "iterations: 734873\ncpu: 944.8616291522475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 2993.8133892886626,
            "unit": "ns/iter",
            "extra": "iterations: 265451\ncpu: 2993.7709784480003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14743.056484826428,
            "unit": "ns/iter",
            "extra": "iterations: 55360\ncpu: 14742.639089595365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11620.75878313114,
            "unit": "ns/iter",
            "extra": "iterations: 70476\ncpu: 11620.489244565506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11274.257933191677,
            "unit": "ns/iter",
            "extra": "iterations: 74182\ncpu: 11274.03008816152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11959.258615368642,
            "unit": "ns/iter",
            "extra": "iterations: 68047\ncpu: 11959.164988904717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37042.88626723141,
            "unit": "ns/iter",
            "extra": "iterations: 22632\ncpu: 37041.618062919646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457328.51399897144,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 457317.27416798804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370850.98206659127,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 370845.5166524334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368248.724459518,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 368242.56040695234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372817.9210751099,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 372808.7457337889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228330.11198739574,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 228327.02418506786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370144.72354945587,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 370137.62798634876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1885056.6680327563,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1884965.9836065585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746969.2861684995,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 746948.8871224154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2567225.724234014,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2567162.1169916363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3143.230421989391,
            "unit": "ns/iter",
            "extra": "iterations: 248774\ncpu: 3143.1825673100825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15093.16640548701,
            "unit": "ns/iter",
            "extra": "iterations: 54241\ncpu: 15092.81724157002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11874.70189134555,
            "unit": "ns/iter",
            "extra": "iterations: 68787\ncpu: 11874.607120531462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11167.731186626423,
            "unit": "ns/iter",
            "extra": "iterations: 72980\ncpu: 11167.559605371302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12098.592142951738,
            "unit": "ns/iter",
            "extra": "iterations: 67379\ncpu: 12098.501016637209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36561.489008088945,
            "unit": "ns/iter",
            "extra": "iterations: 22744\ncpu: 36560.61818501577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475725.3336968122,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 475714.7764449292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383826.37527498044,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 383823.7131544225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379195.66405911127,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379186.52759669645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377905.36643537454,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 377895.88031222916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226108.60853817523,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 226094.5407503225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374155.9457959872,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 374131.2846777647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1890456.7219917125,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1890310.3734439737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 726552.9740769593,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 726514.9253731379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3259.734194920083,
            "unit": "ns/iter",
            "extra": "iterations: 250236\ncpu: 3259.5745616138347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14900.915587557833,
            "unit": "ns/iter",
            "extra": "iterations: 53748\ncpu: 14900.044652824374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11577.171340710962,
            "unit": "ns/iter",
            "extra": "iterations: 70567\ncpu: 11576.967987869675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10839.937010908738,
            "unit": "ns/iter",
            "extra": "iterations: 75267\ncpu: 10839.848804921125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11913.476889141144,
            "unit": "ns/iter",
            "extra": "iterations: 68907\ncpu: 11913.383255692532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36862.699959979036,
            "unit": "ns/iter",
            "extra": "iterations: 22487\ncpu: 36862.10254813873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 459807.77684205445,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 459796.8421052612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375067.15027909295,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 375061.22799484734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373059.25085909216,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373050.8591065286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373724.70132645493,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 373714.1634574246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231108.73788197068,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 231105.32139093772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371190.4317596677,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 371187.3390557931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.1084064595196,
            "unit": "ns/iter",
            "extra": "iterations: 2358365\ncpu: 296.102257284177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1492.4012102476793,
            "unit": "ns/iter",
            "extra": "iterations: 473622\ncpu: 1492.3134905050838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1157.1464425313209,
            "unit": "ns/iter",
            "extra": "iterations: 604278\ncpu: 1157.0877973383008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1115.4106476576746,
            "unit": "ns/iter",
            "extra": "iterations: 625809\ncpu: 1115.359958070272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 979.6302759624892,
            "unit": "ns/iter",
            "extra": "iterations: 710676\ncpu: 979.6229224006499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6624.921200428687,
            "unit": "ns/iter",
            "extra": "iterations: 104696\ncpu: 6624.537709177045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18844.623777315242,
            "unit": "ns/iter",
            "extra": "iterations: 37111\ncpu: 18844.124383605573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4415.312311554305,
            "unit": "ns/iter",
            "extra": "iterations: 158534\ncpu: 4415.236479241046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4396.680185932479,
            "unit": "ns/iter",
            "extra": "iterations: 158983\ncpu: 4396.644295302061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4421.452849498852,
            "unit": "ns/iter",
            "extra": "iterations: 158291\ncpu: 4421.376452230381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9250.743315224277,
            "unit": "ns/iter",
            "extra": "iterations: 75470\ncpu: 9250.470385583656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8364.272848789244,
            "unit": "ns/iter",
            "extra": "iterations: 83790\ncpu: 8364.058956916051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3094.4871001710553,
            "unit": "ns/iter",
            "extra": "iterations: 227910\ncpu: 3094.4614102057903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15733.000742124155,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15732.163177187767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12384.122552920815,
            "unit": "ns/iter",
            "extra": "iterations: 56547\ncpu: 12383.498682511901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12374.42641836178,
            "unit": "ns/iter",
            "extra": "iterations: 56597\ncpu: 12373.926179832775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13045.53809479491,
            "unit": "ns/iter",
            "extra": "iterations: 53695\ncpu: 13045.432535617814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27771.750337115336,
            "unit": "ns/iter",
            "extra": "iterations: 25214\ncpu: 27771.54755294667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98927.41778403767,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 98924.85532815807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84016.90780481088,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 84015.22599208765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83495.41527445363,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83493.28162291233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83610.49612403939,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83609.87477638658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55064.87494097352,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 55064.449866204915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83799.82152702502,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 83797.6147668703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.0657798034376,
            "unit": "ns/iter",
            "extra": "iterations: 231302\ncpu: 3024.9807610829084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14954.30215336047,
            "unit": "ns/iter",
            "extra": "iterations: 46857\ncpu: 14954.041018417609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12202.437615544213,
            "unit": "ns/iter",
            "extra": "iterations: 57338\ncpu: 12202.326554815341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11995.71603393608,
            "unit": "ns/iter",
            "extra": "iterations: 58345\ncpu: 11995.480332504922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12633.083633871724,
            "unit": "ns/iter",
            "extra": "iterations: 55456\ncpu: 12632.578981534878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27008.744957383435,
            "unit": "ns/iter",
            "extra": "iterations: 25929\ncpu: 27008.500134983828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96753.3689159254,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96751.65929203555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81867.50321298535,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 81866.78350274569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81280.81183294083,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 81278.38747099818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81403.98663102246,
            "unit": "ns/iter",
            "extra": "iterations: 8602\ncpu: 81401.72053010951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55286.13230890036,
            "unit": "ns/iter",
            "extra": "iterations: 12690\ncpu: 55285.77620173377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83510.2519957201,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83508.94793280211 ns\nthreads: 1"
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
        "date": 1705775077454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 698.2004947350852,
            "unit": "ns/iter",
            "extra": "iterations: 999727\ncpu: 698.1956074008206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10805.360497812391,
            "unit": "ns/iter",
            "extra": "iterations: 76816\ncpu: 10804.644865652992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23891.01525841877,
            "unit": "ns/iter",
            "extra": "iterations: 34866\ncpu: 23889.505535478693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37460.668537824815,
            "unit": "ns/iter",
            "extra": "iterations: 22446\ncpu: 37460.19335293594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49228.890291378375,
            "unit": "ns/iter",
            "extra": "iterations: 16954\ncpu: 49227.6453934175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51550.7284000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51549.26999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58510.32919999852,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58504.73999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67444.23066169888,
            "unit": "ns/iter",
            "extra": "iterations: 12876\ncpu: 67441.57347002174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76900.39354206497,
            "unit": "ns/iter",
            "extra": "iterations: 11211\ncpu: 76895.31709927748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.2976574267036,
            "unit": "ns/iter",
            "extra": "iterations: 1206323\ncpu: 580.2881981028303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.4171960100587,
            "unit": "ns/iter",
            "extra": "iterations: 1453058\ncpu: 481.3849825677992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 472.54553732892424,
            "unit": "ns/iter",
            "extra": "iterations: 1478117\ncpu: 472.5223375416161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.2853425005271,
            "unit": "ns/iter",
            "extra": "iterations: 1445151\ncpu: 484.2438610221355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.2651402302804,
            "unit": "ns/iter",
            "extra": "iterations: 756577\ncpu: 926.1854378338226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3242.0084728640177,
            "unit": "ns/iter",
            "extra": "iterations: 242539\ncpu: 3241.8237891638005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14727.974363089545,
            "unit": "ns/iter",
            "extra": "iterations: 56091\ncpu: 14727.325239343223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12138.154047795566,
            "unit": "ns/iter",
            "extra": "iterations: 68667\ncpu: 12137.504186872859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11381.65740032544,
            "unit": "ns/iter",
            "extra": "iterations: 71909\ncpu: 11381.126145545059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12032.883959344326,
            "unit": "ns/iter",
            "extra": "iterations: 68476\ncpu: 12032.294526549475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37593.53845809715,
            "unit": "ns/iter",
            "extra": "iterations: 22362\ncpu: 37591.387174671436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 459868.62427439535,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 459840.47493403655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371444.8270131914,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371432.68001704285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369299.80903664633,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 369288.7041773223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373880.2011149033,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 373863.0789022303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234121.73907319125,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 233942.41706161128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374825.8018096086,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374815.20896165445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1873088.3877551884,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1873035.1020408222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 752475.7297297353,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 752446.1844197148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2546408.0027623842,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2546252.7624309435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3207.6294764351596,
            "unit": "ns/iter",
            "extra": "iterations: 250227\ncpu: 3207.6106894939367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14494.150057414992,
            "unit": "ns/iter",
            "extra": "iterations: 56605\ncpu: 14493.624238141505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11866.643554913551,
            "unit": "ns/iter",
            "extra": "iterations: 69200\ncpu: 11866.203757225443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11146.376517833822,
            "unit": "ns/iter",
            "extra": "iterations: 73460\ncpu: 11145.608494418706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12008.249049148464,
            "unit": "ns/iter",
            "extra": "iterations: 67834\ncpu: 12008.099183300383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36060.96089893516,
            "unit": "ns/iter",
            "extra": "iterations: 23094\ncpu: 36060.82532259469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 473917.53829443187,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 473903.0418250956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381653.346760054,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 381638.7915936944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379456.68592528446,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 379446.04691572546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379228.1778741457,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 379214.4468546613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228053.66220045698,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 228043.26204586404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372817.10919291404,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 372805.7833405261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1886152.1323529114,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1886056.9327731067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 751961.731667964,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 751929.0088638231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3309.6817889761974,
            "unit": "ns/iter",
            "extra": "iterations: 245906\ncpu: 3309.5512106252095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14959.86794131636,
            "unit": "ns/iter",
            "extra": "iterations: 55074\ncpu: 14959.345607727728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12182.229029107102,
            "unit": "ns/iter",
            "extra": "iterations: 67546\ncpu: 12181.868652473886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11485.986754413649,
            "unit": "ns/iter",
            "extra": "iterations: 71722\ncpu: 11485.502356320163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11859.700982020282,
            "unit": "ns/iter",
            "extra": "iterations: 66190\ncpu: 11859.631364254466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36336.87688900082,
            "unit": "ns/iter",
            "extra": "iterations: 23028\ncpu: 36335.53065832898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456958.11813903647,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 456938.15995817765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373796.8651928775,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 373781.9679237084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371902.1421276456,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 371885.70212765806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368017.431605814,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 368014.7833474922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227940.79740598358,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 227933.22957198566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368532.58700208756,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 368527.5052410898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 308.8927322754222,
            "unit": "ns/iter",
            "extra": "iterations: 2204624\ncpu: 308.8892709142222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1489.3688519714126,
            "unit": "ns/iter",
            "extra": "iterations: 470720\ncpu: 1489.3465329707728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1119.781463768588,
            "unit": "ns/iter",
            "extra": "iterations: 625823\ncpu: 1119.7726833305837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1166.7323919857147,
            "unit": "ns/iter",
            "extra": "iterations: 591705\ncpu: 1166.6991152685841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 984.5039934014445,
            "unit": "ns/iter",
            "extra": "iterations: 711674\ncpu: 984.481377709459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6718.1046293707295,
            "unit": "ns/iter",
            "extra": "iterations: 104053\ncpu: 6717.994675790219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18943.190637169355,
            "unit": "ns/iter",
            "extra": "iterations: 36976\ncpu: 18942.876460406667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4540.369578072674,
            "unit": "ns/iter",
            "extra": "iterations: 155572\ncpu: 4540.302882266741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4420.135756019796,
            "unit": "ns/iter",
            "extra": "iterations: 158144\ncpu: 4420.100035410808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4481.69492740195,
            "unit": "ns/iter",
            "extra": "iterations: 156271\ncpu: 4481.663264457286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9559.95485385824,
            "unit": "ns/iter",
            "extra": "iterations: 73251\ncpu: 9559.784849353618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8601.017405841027,
            "unit": "ns/iter",
            "extra": "iterations: 81352\ncpu: 8600.865375159716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3085.3827672685443,
            "unit": "ns/iter",
            "extra": "iterations: 224886\ncpu: 3085.300552279812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15535.61934439444,
            "unit": "ns/iter",
            "extra": "iterations: 45088\ncpu: 15535.497249822467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12487.724793607165,
            "unit": "ns/iter",
            "extra": "iterations: 56325\ncpu: 12487.52596537941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12323.905264642686,
            "unit": "ns/iter",
            "extra": "iterations: 56737\ncpu: 12323.549006821026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12921.647560975343,
            "unit": "ns/iter",
            "extra": "iterations: 54120\ncpu: 12921.406134515999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27914.942537435698,
            "unit": "ns/iter",
            "extra": "iterations: 25112\ncpu: 27914.299936285326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99473.66074222358,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 99472.24513010125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84481.28761329109,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84480.543806647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83555.42036086076,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83551.72661010847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83655.59047848138,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 83654.16716632791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54524.402550942,
            "unit": "ns/iter",
            "extra": "iterations: 12858\ncpu: 54523.87618603144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85233.94323145112,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 85233.57593401127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3049.682103394048,
            "unit": "ns/iter",
            "extra": "iterations: 228697\ncpu: 3049.6206771404823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15411.55228182898,
            "unit": "ns/iter",
            "extra": "iterations: 45446\ncpu: 15411.281520925651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12151.394275210261,
            "unit": "ns/iter",
            "extra": "iterations: 57120\ncpu: 12151.313025210193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12832.037970759993,
            "unit": "ns/iter",
            "extra": "iterations: 54858\ncpu: 12831.913303437976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13497.479774225027,
            "unit": "ns/iter",
            "extra": "iterations: 52087\ncpu: 13497.258433006255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28561.22459088008,
            "unit": "ns/iter",
            "extra": "iterations: 25237\ncpu: 28560.375638942747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96797.51030067612,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 96794.83574610177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82170.98528546888,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82169.86462625017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82480.33192090369,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82480.66148775918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82258.55331614937,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 82257.0775720655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54941.25090196094,
            "unit": "ns/iter",
            "extra": "iterations: 12750\ncpu: 54940.16470588153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83251.276162097,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83249.79737783002 ns\nthreads: 1"
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
        "date": 1705778422709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.0185133357357,
            "unit": "ns/iter",
            "extra": "iterations: 982589\ncpu: 711.00073377577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10880.449396471557,
            "unit": "ns/iter",
            "extra": "iterations: 76467\ncpu: 10880.00052310147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23939.51199930773,
            "unit": "ns/iter",
            "extra": "iterations: 34752\ncpu: 23938.768991712695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38557.72209940343,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 38556.70321896002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46471.03796133431,
            "unit": "ns/iter",
            "extra": "iterations: 17070\ncpu: 46469.484475688354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57967.84810564124,
            "unit": "ns/iter",
            "extra": "iterations: 14464\ncpu: 57965.90154867253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57979.70969999824,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57977.74000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66978.62023642883,
            "unit": "ns/iter",
            "extra": "iterations: 12858\ncpu: 66976.05381863432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76715.22210461581,
            "unit": "ns/iter",
            "extra": "iterations: 11337\ncpu: 76712.39304930753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 568.8265473446047,
            "unit": "ns/iter",
            "extra": "iterations: 1228831\ncpu: 568.8230521528184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 466.0544939033362,
            "unit": "ns/iter",
            "extra": "iterations: 1448162\ncpu: 466.0490331882758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 459.6854976495342,
            "unit": "ns/iter",
            "extra": "iterations: 1521181\ncpu: 459.6604217381093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 466.82039312940714,
            "unit": "ns/iter",
            "extra": "iterations: 1500015\ncpu: 466.8088652446807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 947.6401270867282,
            "unit": "ns/iter",
            "extra": "iterations: 738708\ncpu: 947.5963438868941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3283.7969335616367,
            "unit": "ns/iter",
            "extra": "iterations: 246801\ncpu: 3283.676727403856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14528.001432640474,
            "unit": "ns/iter",
            "extra": "iterations: 55841\ncpu: 14527.272076073143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11934.490903255484,
            "unit": "ns/iter",
            "extra": "iterations: 68541\ncpu: 11934.178083191095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10661.453178044041,
            "unit": "ns/iter",
            "extra": "iterations: 76588\ncpu: 10660.860709249473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11710.71476485226,
            "unit": "ns/iter",
            "extra": "iterations: 67681\ncpu: 11710.410602680216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37377.944916206856,
            "unit": "ns/iter",
            "extra": "iterations: 22257\ncpu: 37376.31307004532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 459736.2036553526,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 459721.9321148817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375209.8667240034,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 375195.65778159973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 370251.36034483707,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 370238.5775862077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373978.5965442396,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 373965.70194384415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229634.06735071572,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 229623.4938174163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370477.5762350558,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 370469.03747870534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1878128.5804481292,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1877927.9022403194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747902.3979348398,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 747875.297855441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2545244.884297661,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2545140.771349864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3249.858455949501,
            "unit": "ns/iter",
            "extra": "iterations: 245005\ncpu: 3249.7161282422785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14521.038766311642,
            "unit": "ns/iter",
            "extra": "iterations: 55022\ncpu: 14520.564501472076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11833.386453779991,
            "unit": "ns/iter",
            "extra": "iterations: 69082\ncpu: 11833.01583625262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11111.102118937491,
            "unit": "ns/iter",
            "extra": "iterations: 73669\ncpu: 11110.539032700304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11953.676743372043,
            "unit": "ns/iter",
            "extra": "iterations: 68574\ncpu: 11953.303001137383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36231.17689943029,
            "unit": "ns/iter",
            "extra": "iterations: 22770\ncpu: 36230.19323671469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 470344.24510870996,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 470334.4021739104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382219.94363717537,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 382209.37912813795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377799.4743700911,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 377781.3640312785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378108.7871051291,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 378095.67286888795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224619.316739739,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224613.79932937826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375623.68610635895,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 374825.55746140535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1887724.4008263852,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1887632.851239682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733910.1973374779,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 733881.0493343822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3192.0695637462886,
            "unit": "ns/iter",
            "extra": "iterations: 248319\ncpu: 3192.0070554407616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14566.226413763408,
            "unit": "ns/iter",
            "extra": "iterations: 56675\ncpu: 14565.81737979707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11886.149935752679,
            "unit": "ns/iter",
            "extra": "iterations: 69263\ncpu: 11885.852475347578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11508.59489091663,
            "unit": "ns/iter",
            "extra": "iterations: 72146\ncpu: 11508.09192470823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11828.304884012778,
            "unit": "ns/iter",
            "extra": "iterations: 67465\ncpu: 11827.897428296199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36180.90990133412,
            "unit": "ns/iter",
            "extra": "iterations: 23108\ncpu: 36179.20633546813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455721.61902287515,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 455696.049896051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371685.9073128782,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 371667.04931972775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 366581.5161560994,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 366572.38774653815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369150.68789541116,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 369140.15183467016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226900.75588309593,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 226892.1644685804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367275.8169308121,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 367268.0567139286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 290.2833969465635,
            "unit": "ns/iter",
            "extra": "iterations: 2413544\ncpu: 290.2710288273191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1482.5557304811994,
            "unit": "ns/iter",
            "extra": "iterations: 473852\ncpu: 1482.5190143757998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1166.6952997633437,
            "unit": "ns/iter",
            "extra": "iterations: 608480\ncpu: 1166.6671049171723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1137.5906612800557,
            "unit": "ns/iter",
            "extra": "iterations: 619057\ncpu: 1137.5404849634199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 993.0199488882816,
            "unit": "ns/iter",
            "extra": "iterations: 703949\ncpu: 992.9749172170125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6637.23505819346,
            "unit": "ns/iter",
            "extra": "iterations: 106714\ncpu: 6636.840527016187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18550.596207264458,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18550.208333333194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4435.669225909492,
            "unit": "ns/iter",
            "extra": "iterations: 156687\ncpu: 4435.459227632166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4440.068037563306,
            "unit": "ns/iter",
            "extra": "iterations: 157707\ncpu: 4439.913256862329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4430.510598345364,
            "unit": "ns/iter",
            "extra": "iterations: 157100\ncpu: 4430.325907065501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9257.589928731632,
            "unit": "ns/iter",
            "extra": "iterations: 74648\ncpu: 9256.988800771544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8413.968420416695,
            "unit": "ns/iter",
            "extra": "iterations: 82775\ncpu: 8413.591060102615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3045.31766292511,
            "unit": "ns/iter",
            "extra": "iterations: 229860\ncpu: 3045.274949969542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15215.03777821355,
            "unit": "ns/iter",
            "extra": "iterations: 45873\ncpu: 15214.468205698395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12118.93977432865,
            "unit": "ns/iter",
            "extra": "iterations: 57517\ncpu: 12118.505833058107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12123.839610332776,
            "unit": "ns/iter",
            "extra": "iterations: 57485\ncpu: 12123.402626772278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12638.576478523937,
            "unit": "ns/iter",
            "extra": "iterations: 54852\ncpu: 12637.97673740243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27896.322783053223,
            "unit": "ns/iter",
            "extra": "iterations: 25181\ncpu: 27895.214645963217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98056.72776051237,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 98050.42360914985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83447.89343969765,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 83443.98142636011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83394.23571428705,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83391.6666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82896.97525162884,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 82894.02013025475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54511.26920355449,
            "unit": "ns/iter",
            "extra": "iterations: 12719\ncpu: 54508.42047330705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83527.14422961953,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 83522.73327729004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2994.5149993767773,
            "unit": "ns/iter",
            "extra": "iterations: 232643\ncpu: 2994.3789411244006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15056.487976058075,
            "unit": "ns/iter",
            "extra": "iterations: 46449\ncpu: 15055.872031690795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12127.145664618478,
            "unit": "ns/iter",
            "extra": "iterations: 57296\ncpu: 12126.65980173112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12034.302373206301,
            "unit": "ns/iter",
            "extra": "iterations: 58107\ncpu: 12033.828970691926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12718.651137773864,
            "unit": "ns/iter",
            "extra": "iterations: 54844\ncpu: 12718.401283640973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27418.06897766215,
            "unit": "ns/iter",
            "extra": "iterations: 25559\ncpu: 27417.277671270225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96261.99145652143,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96259.10155711765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81117.99264362112,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 81116.27744044874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81195.02044392408,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 81191.91588785018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81933.6807988848,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81931.42957252922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54315.766679638786,
            "unit": "ns/iter",
            "extra": "iterations: 12845\ncpu: 54314.51148306798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82369.33153385765,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82363.31416500418 ns\nthreads: 1"
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
        "date": 1705953613180,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 700.1964981963825,
            "unit": "ns/iter",
            "extra": "iterations: 1001027\ncpu: 700.1567390290172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10694.05151753695,
            "unit": "ns/iter",
            "extra": "iterations: 77527\ncpu: 10693.602228900898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23843.54962246925,
            "unit": "ns/iter",
            "extra": "iterations: 34964\ncpu: 23841.920260839714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37335.192093596444,
            "unit": "ns/iter",
            "extra": "iterations: 21198\ncpu: 37335.102368147964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47351.857710321376,
            "unit": "ns/iter",
            "extra": "iterations: 16867\ncpu: 47349.27372976816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57951.6405115722,
            "unit": "ns/iter",
            "extra": "iterations: 14465\ncpu: 57950.47355686144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58215.5438999962,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58214.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67196.26643999692,
            "unit": "ns/iter",
            "extra": "iterations: 12941\ncpu: 67195.05447801555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77118.35291508024,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 77116.91365693488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 569.2705524930919,
            "unit": "ns/iter",
            "extra": "iterations: 1227418\ncpu: 569.2681710713067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.6704820457044,
            "unit": "ns/iter",
            "extra": "iterations: 1475607\ncpu: 473.66426155473687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.1702533941143,
            "unit": "ns/iter",
            "extra": "iterations: 1502995\ncpu: 465.17273843226343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 467.44946949464315,
            "unit": "ns/iter",
            "extra": "iterations: 1494424\ncpu: 467.426714239065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 937.0721561491313,
            "unit": "ns/iter",
            "extra": "iterations: 746312\ncpu: 937.026739486972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3258.2115292193243,
            "unit": "ns/iter",
            "extra": "iterations: 243451\ncpu: 3258.0909505403547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14995.607269295753,
            "unit": "ns/iter",
            "extra": "iterations: 55081\ncpu: 14995.050925001373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12005.55721108458,
            "unit": "ns/iter",
            "extra": "iterations: 69934\ncpu: 12004.983269940236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10850.659183916317,
            "unit": "ns/iter",
            "extra": "iterations: 75507\ncpu: 10850.172831657997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11364.571754304474,
            "unit": "ns/iter",
            "extra": "iterations: 71487\ncpu: 11363.951487683034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36974.445538088185,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36972.492487260955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463663.23105657106,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 463652.66808964784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374587.4303030221,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 374586.79653679585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368662.51619774644,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 368661.8073316295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371338.7969283147,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371330.2474402742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226108.3862447845,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 226105.54393305402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368061.4608177091,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 368056.2180579215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1883026.2889343328,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1883001.4344262343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 752343.7452228845,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 752336.8630573265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2563705.9271708033,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2563652.6610644213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3141.4435573304804,
            "unit": "ns/iter",
            "extra": "iterations: 253381\ncpu: 3141.387870440161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14679.510405297648,
            "unit": "ns/iter",
            "extra": "iterations: 55885\ncpu: 14679.278876263774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11876.531311251269,
            "unit": "ns/iter",
            "extra": "iterations: 70917\ncpu: 11876.38930016781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11229.561737325283,
            "unit": "ns/iter",
            "extra": "iterations: 73262\ncpu: 11229.37129753487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12090.569970207815,
            "unit": "ns/iter",
            "extra": "iterations: 68472\ncpu: 12090.474938661113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36543.912449479365,
            "unit": "ns/iter",
            "extra": "iterations: 22764\ncpu: 36543.70497276377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475538.8206820657,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 475533.55335533485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382740.8692982596,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 382736.40350877173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377438.09169548977,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377436.8512110717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377187.60560347495,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 377182.9741379313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225636.81820524673,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 225634.19288292836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375420.70427350205,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 375416.2393162411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1896733.5104167187,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1896698.54166666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736306.1361464859,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 736289.3312101956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3150.5218238227567,
            "unit": "ns/iter",
            "extra": "iterations: 252064\ncpu: 3150.48995493209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15142.64494977131,
            "unit": "ns/iter",
            "extra": "iterations: 54750\ncpu: 15142.40913241999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11947.781236501722,
            "unit": "ns/iter",
            "extra": "iterations: 69454\ncpu: 11947.713594609379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11247.034274358877,
            "unit": "ns/iter",
            "extra": "iterations: 73466\ncpu: 11246.933275256535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11745.35278354094,
            "unit": "ns/iter",
            "extra": "iterations: 69408\ncpu: 11745.199400645395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38193.48920204988,
            "unit": "ns/iter",
            "extra": "iterations: 21856\ncpu: 38193.39311859439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460951.86194227147,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 460941.7322834631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372455.45187394717,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 372446.42248722183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369514.8334038218,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 369508.45665962034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369959.9570943386,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 369957.90144434833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229507.77496740175,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 229505.6323337694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370103.46943970164,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 370097.07130730234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 291.5592649681376,
            "unit": "ns/iter",
            "extra": "iterations: 2407569\ncpu: 291.557666675388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1480.4312230307198,
            "unit": "ns/iter",
            "extra": "iterations: 472760\ncpu: 1480.4215669684374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1106.3270795470667,
            "unit": "ns/iter",
            "extra": "iterations: 633323\ncpu: 1106.2784708592633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1121.8760143435352,
            "unit": "ns/iter",
            "extra": "iterations: 623556\ncpu: 1121.8184092527417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 972.0790624363979,
            "unit": "ns/iter",
            "extra": "iterations: 716282\ncpu: 972.0509519993482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6726.9934277949405,
            "unit": "ns/iter",
            "extra": "iterations: 106357\ncpu: 6726.793723027215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18271.050443398613,
            "unit": "ns/iter",
            "extra": "iterations: 38340\ncpu: 18270.714658320183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4400.146171606066,
            "unit": "ns/iter",
            "extra": "iterations: 159388\ncpu: 4400.0947373704485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4375.370958377324,
            "unit": "ns/iter",
            "extra": "iterations: 160177\ncpu: 4375.321675396669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4365.299900726108,
            "unit": "ns/iter",
            "extra": "iterations: 160163\ncpu: 4365.270380799575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9200.8361763503,
            "unit": "ns/iter",
            "extra": "iterations: 75917\ncpu: 9200.723158185921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8309.48793540188,
            "unit": "ns/iter",
            "extra": "iterations: 84089\ncpu: 8309.390051017363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3030.6878860944944,
            "unit": "ns/iter",
            "extra": "iterations: 230999\ncpu: 3030.6590071818696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15153.085429530283,
            "unit": "ns/iter",
            "extra": "iterations: 46155\ncpu: 15153.02567435794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12054.876667756012,
            "unit": "ns/iter",
            "extra": "iterations: 58087\ncpu: 12054.66971955854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12050.479506649524,
            "unit": "ns/iter",
            "extra": "iterations: 58214\ncpu: 12050.42944996055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12459.248724219528,
            "unit": "ns/iter",
            "extra": "iterations: 56436\ncpu: 12459.19271387035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27593.154372231085,
            "unit": "ns/iter",
            "extra": "iterations: 25296\ncpu: 27592.2754585707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97359.97085761947,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 97359.2422980856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84912.39395778184,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84911.27153603504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83480.40159637059,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83479.23516797653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83508.1617945346,
            "unit": "ns/iter",
            "extra": "iterations: 8381\ncpu: 83508.11359026413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55450.35659098396,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 55449.66099022472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84676.62246974958,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 84675.94921547448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2967.7935103739587,
            "unit": "ns/iter",
            "extra": "iterations: 237949\ncpu: 2967.759898129433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14867.646051541713,
            "unit": "ns/iter",
            "extra": "iterations: 47069\ncpu: 14867.424419469125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11954.9890002905,
            "unit": "ns/iter",
            "extra": "iterations: 58547\ncpu: 11954.732095581505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11790.444898439973,
            "unit": "ns/iter",
            "extra": "iterations: 59472\ncpu: 11790.395480226152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12451.3832833052,
            "unit": "ns/iter",
            "extra": "iterations: 56303\ncpu: 12451.292115873075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26694.975418268947,
            "unit": "ns/iter",
            "extra": "iterations: 26239\ncpu: 26693.99748466062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96064.9917548328,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 96061.24776693764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81228.56977148652,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 81224.96230135697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81426.93989904183,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 81423.89951872207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81105.52495657692,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81103.05732484056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55341.66753267038,
            "unit": "ns/iter",
            "extra": "iterations: 12702\ncpu: 55339.27727916809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83091.31045129399,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83086.75771971658 ns\nthreads: 1"
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
        "date": 1705955073741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.277395928234,
            "unit": "ns/iter",
            "extra": "iterations: 1002722\ncpu: 693.2453860591471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10748.557242930985,
            "unit": "ns/iter",
            "extra": "iterations: 77372\ncpu: 10748.084578400454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23804.676355091397,
            "unit": "ns/iter",
            "extra": "iterations: 34887\ncpu: 23804.093215237765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37834.06609509322,
            "unit": "ns/iter",
            "extra": "iterations: 22861\ncpu: 37833.09129084466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46764.08936445209,
            "unit": "ns/iter",
            "extra": "iterations: 17009\ncpu: 46763.48403786231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58408.527949883224,
            "unit": "ns/iter",
            "extra": "iterations: 14526\ncpu: 58407.24907063201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58490.34049999772,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58490.77999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67419.73821049764,
            "unit": "ns/iter",
            "extra": "iterations: 12808\ncpu: 67418.96470955652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77186.75313993159,
            "unit": "ns/iter",
            "extra": "iterations: 11306\ncpu: 77186.67963912962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 567.492610021963,
            "unit": "ns/iter",
            "extra": "iterations: 1232277\ncpu: 567.4857195257233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.30801661866394,
            "unit": "ns/iter",
            "extra": "iterations: 1482907\ncpu: 472.31121034562517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.9486438811638,
            "unit": "ns/iter",
            "extra": "iterations: 1506247\ncpu: 464.9479135892053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 468.86344735135407,
            "unit": "ns/iter",
            "extra": "iterations: 1487397\ncpu: 468.8671551710804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 935.2681086350373,
            "unit": "ns/iter",
            "extra": "iterations: 748745\ncpu: 935.2590000601009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3288.1345452288438,
            "unit": "ns/iter",
            "extra": "iterations: 242045\ncpu: 3288.0984940816784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15179.091583744237,
            "unit": "ns/iter",
            "extra": "iterations: 53765\ncpu: 15178.964010043694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12007.815079191641,
            "unit": "ns/iter",
            "extra": "iterations: 68505\ncpu: 12007.905992263371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11374.31129472764,
            "unit": "ns/iter",
            "extra": "iterations: 72131\ncpu: 11374.208038152823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12034.57903337325,
            "unit": "ns/iter",
            "extra": "iterations: 67927\ncpu: 12034.653377890972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36621.344534149444,
            "unit": "ns/iter",
            "extra": "iterations: 22915\ncpu: 36620.702596552495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458288.8159831488,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 458284.2271293383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370588.6136556472,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 370581.80661577714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367690.53110453265,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 367687.3042742283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368759.3676280663,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 368761.47223418043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227597.09428570417,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 227593.45454545517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370175.7266495252,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 370177.892030849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1885175.577868847,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1885122.745901638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 749602.0774141719,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 749594.4134078223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2553448.9166665887,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2553323.055555554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3232.1666891994996,
            "unit": "ns/iter",
            "extra": "iterations: 244089\ncpu: 3232.156713329974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15074.570126935752,
            "unit": "ns/iter",
            "extra": "iterations: 54437\ncpu: 15074.274849826346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11865.774174400523,
            "unit": "ns/iter",
            "extra": "iterations: 69071\ncpu: 11865.846737415122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11133.171088796787,
            "unit": "ns/iter",
            "extra": "iterations: 73494\ncpu: 11132.933300677594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11932.687433689678,
            "unit": "ns/iter",
            "extra": "iterations: 67864\ncpu: 11932.756689850283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36030.68185167141,
            "unit": "ns/iter",
            "extra": "iterations: 23071\ncpu: 36030.31944865838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475674.2155787418,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 475672.90181020345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383884.45037166553,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 383873.677306515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377799.14551754016,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377787.5270679952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377936.4057217203,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 377930.68920676096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227662.7664948545,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 227657.60309278296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375000.5807145721,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 375003.4438226433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1891353.799999962,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1891299.3749999886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758321.6274350042,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 758313.3116883155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3170.243046339161,
            "unit": "ns/iter",
            "extra": "iterations: 252421\ncpu: 3170.2615867935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15084.330762075706,
            "unit": "ns/iter",
            "extra": "iterations: 54837\ncpu: 15084.178565567063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11953.88791397834,
            "unit": "ns/iter",
            "extra": "iterations: 69750\ncpu: 11953.865232974917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11190.888222500158,
            "unit": "ns/iter",
            "extra": "iterations: 74031\ncpu: 11190.70119274358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11469.152232313307,
            "unit": "ns/iter",
            "extra": "iterations: 68494\ncpu: 11468.677548398442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36246.7802864173,
            "unit": "ns/iter",
            "extra": "iterations: 23253\ncpu: 36245.69732937668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455735.9315211542,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 455726.81651855697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371506.4039763158,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 371496.9966159054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368383.5752620667,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 368373.2914046121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369419.71500845504,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 369414.5025295104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225357.58575128255,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 225349.32642487102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367158.90506329475,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 367152.9957805896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 292.5980511494513,
            "unit": "ns/iter",
            "extra": "iterations: 2389819\ncpu: 292.5881834565703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1487.399322961966,
            "unit": "ns/iter",
            "extra": "iterations: 471170\ncpu: 1487.3652821699063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1183.2691885168654,
            "unit": "ns/iter",
            "extra": "iterations: 591682\ncpu: 1183.2158152521154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1169.8011662634374,
            "unit": "ns/iter",
            "extra": "iterations: 599350\ncpu: 1169.7732543588825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 978.0248711508574,
            "unit": "ns/iter",
            "extra": "iterations: 705476\ncpu: 978.0297274464336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6624.4906498523005,
            "unit": "ns/iter",
            "extra": "iterations: 106255\ncpu: 6624.2190955719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18702.36553287953,
            "unit": "ns/iter",
            "extra": "iterations: 37485\ncpu: 18701.899426437434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4431.326008948295,
            "unit": "ns/iter",
            "extra": "iterations: 158011\ncpu: 4431.317439925125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4411.85618457335,
            "unit": "ns/iter",
            "extra": "iterations: 158766\ncpu: 4411.882266984153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4432.016028319944,
            "unit": "ns/iter",
            "extra": "iterations: 157908\ncpu: 4431.912885984299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9323.514340853966,
            "unit": "ns/iter",
            "extra": "iterations: 75135\ncpu: 9323.459106940792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8471.111851187718,
            "unit": "ns/iter",
            "extra": "iterations: 82574\ncpu: 8470.995712936254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3094.7264531312317,
            "unit": "ns/iter",
            "extra": "iterations: 226941\ncpu: 3094.7448896409337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15278.994205422776,
            "unit": "ns/iter",
            "extra": "iterations: 45905\ncpu: 15278.46639799584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12239.355344542153,
            "unit": "ns/iter",
            "extra": "iterations: 57395\ncpu: 12239.053924557902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12144.13102239629,
            "unit": "ns/iter",
            "extra": "iterations: 57639\ncpu: 12143.635385763262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12668.54399623369,
            "unit": "ns/iter",
            "extra": "iterations: 55232\ncpu: 12668.206836616353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27858.29905798993,
            "unit": "ns/iter",
            "extra": "iterations: 25159\ncpu: 27857.069040899944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98223.93912678429,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 98224.67114469482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83987.36549987324,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 83988.03644210155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83557.23258305961,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 83552.80457306282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84010.80865822104,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 84008.74192776848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54604.03391979467,
            "unit": "ns/iter",
            "extra": "iterations: 12618\ncpu: 54601.22840386717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84020.53543118393,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84020.03362959372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3070.645485463484,
            "unit": "ns/iter",
            "extra": "iterations: 227875\ncpu: 3070.66330224898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15116.597063973693,
            "unit": "ns/iter",
            "extra": "iterations: 46253\ncpu: 15116.574060060988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12214.730580873906,
            "unit": "ns/iter",
            "extra": "iterations: 57379\ncpu: 12214.442566095793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11922.485291113468,
            "unit": "ns/iter",
            "extra": "iterations: 58740\ncpu: 11922.020769492678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12626.18840658239,
            "unit": "ns/iter",
            "extra": "iterations: 55359\ncpu: 12625.963258006841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26840.34577104819,
            "unit": "ns/iter",
            "extra": "iterations: 26023\ncpu: 26839.14998270783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97432.64503549824,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 97431.0959476398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82717.07448942786,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82717.55400779156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82430.21725805038,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82429.81256630854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82343.19732048477,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82341.03889998811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54406.32800620425,
            "unit": "ns/iter",
            "extra": "iterations: 12890\ncpu: 54403.607447633716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83256.50941373022,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83253.3245948528 ns\nthreads: 1"
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
        "date": 1705957097211,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.6431884069948,
            "unit": "ns/iter",
            "extra": "iterations: 982384\ncpu: 713.6357066075996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11128.672488495708,
            "unit": "ns/iter",
            "extra": "iterations: 74318\ncpu: 11128.616216798086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24238.11525997798,
            "unit": "ns/iter",
            "extra": "iterations: 34253\ncpu: 24237.888652088866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38742.251714515514,
            "unit": "ns/iter",
            "extra": "iterations: 21143\ncpu: 38741.569313720865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47669.51313203072,
            "unit": "ns/iter",
            "extra": "iterations: 16791\ncpu: 47668.91787266986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59438.170770953395,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 59438.06492234504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59595.58910000169,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59594.24000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68728.6767949168,
            "unit": "ns/iter",
            "extra": "iterations: 12605\ncpu: 68727.62395874658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78285.50437291892,
            "unit": "ns/iter",
            "extra": "iterations: 11091\ncpu: 78284.27553872507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 608.3940044038418,
            "unit": "ns/iter",
            "extra": "iterations: 1148543\ncpu: 608.3942873710417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 512.4544244508332,
            "unit": "ns/iter",
            "extra": "iterations: 1371108\ncpu: 512.4542340938864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 504.2177678251117,
            "unit": "ns/iter",
            "extra": "iterations: 1371828\ncpu: 504.21707386057216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 542.8755569113739,
            "unit": "ns/iter",
            "extra": "iterations: 1301374\ncpu: 542.8792952679241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 935.3286052864272,
            "unit": "ns/iter",
            "extra": "iterations: 746820\ncpu: 935.3146675236325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3065.6010540849384,
            "unit": "ns/iter",
            "extra": "iterations: 261459\ncpu: 3065.52920343151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15438.610666030401,
            "unit": "ns/iter",
            "extra": "iterations: 54547\ncpu: 15432.588409995044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11940.974029388968,
            "unit": "ns/iter",
            "extra": "iterations: 68462\ncpu: 11941.051970436156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11229.60789780967,
            "unit": "ns/iter",
            "extra": "iterations: 72805\ncpu: 11229.329029599588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11914.268408165342,
            "unit": "ns/iter",
            "extra": "iterations: 67796\ncpu: 11914.040651365865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38390.23786856535,
            "unit": "ns/iter",
            "extra": "iterations: 21638\ncpu: 38390.10074868283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 461294.0582726023,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 461290.4266389179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370622.4836910009,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370605.87982832623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369539.86816448806,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369526.5366680801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 369616.8883661314,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 369602.5235243785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226223.850991649,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 226206.23695198304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368366.3052721037,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368351.7857142861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1890155.4918034167,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1889563.934426235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736826.8237608188,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 736827.9307631785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2561762.26183821,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2561651.5320334258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3142.7693614602854,
            "unit": "ns/iter",
            "extra": "iterations: 246030\ncpu: 3142.767548672918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15080.512375108076,
            "unit": "ns/iter",
            "extra": "iterations: 54747\ncpu: 15080.369700622856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11926.240773108377,
            "unit": "ns/iter",
            "extra": "iterations: 69227\ncpu: 11926.236872896428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11417.861301742476,
            "unit": "ns/iter",
            "extra": "iterations: 73440\ncpu: 11417.74373638343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12009.410944400113,
            "unit": "ns/iter",
            "extra": "iterations: 66116\ncpu: 12009.300320648548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37177.448900039235,
            "unit": "ns/iter",
            "extra": "iterations: 22319\ncpu: 37176.437116358145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474513.5132075647,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 474512.1293800508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382116.7022866841,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 382116.97449428134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379757.91702680534,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 379755.87726879836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378845.2722922748,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378845.150065245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225454.16835279705,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 225452.1660181586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376794.3658641321,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 376797.2055030076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1894327.824634711,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1894262.4217118989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736989.5250995937,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 736983.0278884444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3196.894479612959,
            "unit": "ns/iter",
            "extra": "iterations: 248805\ncpu: 3196.8943550169965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14641.442287044241,
            "unit": "ns/iter",
            "extra": "iterations: 55880\ncpu: 14641.349319971436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11599.13835628017,
            "unit": "ns/iter",
            "extra": "iterations: 71034\ncpu: 11598.800574372775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11191.968715757697,
            "unit": "ns/iter",
            "extra": "iterations: 73008\ncpu: 11191.957045803241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11917.437294822754,
            "unit": "ns/iter",
            "extra": "iterations: 67929\ncpu: 11917.235643098002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36177.72003834959,
            "unit": "ns/iter",
            "extra": "iterations: 22946\ncpu: 36178.01359714085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457665.3586097883,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 457665.8767772503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375389.4543897195,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 375382.698072807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370390.53296230035,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 370387.5428082187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372349.0734414744,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372339.15456874494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228243.02269172014,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 228242.01877934163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371699.0584470918,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371693.6006825943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.3132252726306,
            "unit": "ns/iter",
            "extra": "iterations: 2388843\ncpu: 293.3071365510405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1491.5319913366068,
            "unit": "ns/iter",
            "extra": "iterations: 470940\ncpu: 1491.492122138702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1161.914265205116,
            "unit": "ns/iter",
            "extra": "iterations: 601821\ncpu: 1161.8745440920056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1136.3600394636044,
            "unit": "ns/iter",
            "extra": "iterations: 616263\ncpu: 1136.3481176056237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.057098421724,
            "unit": "ns/iter",
            "extra": "iterations: 713715\ncpu: 981.039490552949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6877.59009540898,
            "unit": "ns/iter",
            "extra": "iterations: 105022\ncpu: 6877.378073165631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18960.962519308465,
            "unit": "ns/iter",
            "extra": "iterations: 36899\ncpu: 18960.443372449256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4564.986372824031,
            "unit": "ns/iter",
            "extra": "iterations: 153370\ncpu: 4564.74799504463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4538.855173398451,
            "unit": "ns/iter",
            "extra": "iterations: 154067\ncpu: 4538.819474644103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4497.79049653599,
            "unit": "ns/iter",
            "extra": "iterations: 154007\ncpu: 4497.5760842039435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9372.109567612879,
            "unit": "ns/iter",
            "extra": "iterations: 74794\ncpu: 9371.993742813493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8650.73781560174,
            "unit": "ns/iter",
            "extra": "iterations: 81313\ncpu: 8650.258876194452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3144.196810827779,
            "unit": "ns/iter",
            "extra": "iterations: 222691\ncpu: 3144.1571504910403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15531.268648767757,
            "unit": "ns/iter",
            "extra": "iterations: 45070\ncpu: 15530.703350343767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12356.837335029351,
            "unit": "ns/iter",
            "extra": "iterations: 56601\ncpu: 12356.454832953528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12233.17941309539,
            "unit": "ns/iter",
            "extra": "iterations: 57454\ncpu: 12232.796672120363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12894.850144571838,
            "unit": "ns/iter",
            "extra": "iterations: 54299\ncpu: 12894.233779627517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27697.86712345228,
            "unit": "ns/iter",
            "extra": "iterations: 25249\ncpu: 27696.589963958842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100609.08897514298,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 100607.57510421074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85754.11187186358,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85753.00158943623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85601.74452733168,
            "unit": "ns/iter",
            "extra": "iterations: 8177\ncpu: 85598.69145163223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85008.22337061871,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 85005.60554474738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55102.644586387876,
            "unit": "ns/iter",
            "extra": "iterations: 12681\ncpu: 55101.00938411706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85101.02241608873,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 85099.99999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3130.066946898743,
            "unit": "ns/iter",
            "extra": "iterations: 223386\ncpu: 3130.0323207362894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15250.998825678489,
            "unit": "ns/iter",
            "extra": "iterations: 45984\ncpu: 15250.589335421275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12413.034890312922,
            "unit": "ns/iter",
            "extra": "iterations: 56434\ncpu: 12412.490697097435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12164.898321885265,
            "unit": "ns/iter",
            "extra": "iterations: 57505\ncpu: 12164.672637161933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12860.981839860759,
            "unit": "ns/iter",
            "extra": "iterations: 54515\ncpu: 12860.401724296134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27011.556584990307,
            "unit": "ns/iter",
            "extra": "iterations: 26120\ncpu: 27010.34456355307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97487.59137519593,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 97482.86276162312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82444.12248024995,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82442.74431215269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82879.60996685346,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 82878.90624999932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82915.68513913659,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 82913.39253996385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55289.023021127345,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 55286.802270576576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84180.68010076135,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 84176.2624445234 ns\nthreads: 1"
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
        "date": 1705958572649,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.7395731264829,
            "unit": "ns/iter",
            "extra": "iterations: 970545\ncpu: 713.6827246547043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10630.361821857749,
            "unit": "ns/iter",
            "extra": "iterations: 77657\ncpu: 10629.786110717643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23636.709899251764,
            "unit": "ns/iter",
            "extra": "iterations: 35336\ncpu: 23635.06339144215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37344.22720240861,
            "unit": "ns/iter",
            "extra": "iterations: 22623\ncpu: 37342.05012597799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46817.24244557642,
            "unit": "ns/iter",
            "extra": "iterations: 17043\ncpu: 46815.25553012963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50102.033499990735,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50096.92999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57497.696699999775,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57495.78 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66093.73699885308,
            "unit": "ns/iter",
            "extra": "iterations: 13095\ncpu: 66092.66132111497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 75922.25237142362,
            "unit": "ns/iter",
            "extra": "iterations: 11491\ncpu: 75918.97136889734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 566.28721000093,
            "unit": "ns/iter",
            "extra": "iterations: 1236771\ncpu: 566.2298032537954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 478.8554727562763,
            "unit": "ns/iter",
            "extra": "iterations: 1459621\ncpu: 478.84724870360134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 462.5761726060527,
            "unit": "ns/iter",
            "extra": "iterations: 1437354\ncpu: 462.53525575467233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 468.4992193418539,
            "unit": "ns/iter",
            "extra": "iterations: 1495533\ncpu: 468.44810512372464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 955.332977196256,
            "unit": "ns/iter",
            "extra": "iterations: 730056\ncpu: 955.3071271244952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3040.365982409423,
            "unit": "ns/iter",
            "extra": "iterations: 262182\ncpu: 3040.2121427100274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14585.980995049988,
            "unit": "ns/iter",
            "extra": "iterations: 55354\ncpu: 14585.404848791411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11905.247478665457,
            "unit": "ns/iter",
            "extra": "iterations: 68317\ncpu: 11904.79382876882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11152.74179799897,
            "unit": "ns/iter",
            "extra": "iterations: 72970\ncpu: 11151.566397149525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12218.219695563588,
            "unit": "ns/iter",
            "extra": "iterations: 64644\ncpu: 12218.031062434287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36592.13150038105,
            "unit": "ns/iter",
            "extra": "iterations: 22441\ncpu: 36590.553005659356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460553.6184419568,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 460522.8934817169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374137.5863851656,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374130.8487720813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372450.0025619223,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372429.931682322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376212.899221436,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376206.57439446397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228521.8638152592,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 228518.89267908686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372331.82642487815,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 372318.3937823841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1891134.4098360112,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1891099.1803278702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 737787.7009569571,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 737731.8181818175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2565897.709497074,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2565734.0782122943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 2928.513465358892,
            "unit": "ns/iter",
            "extra": "iterations: 253688\ncpu: 2928.2409889312967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14498.766713030385,
            "unit": "ns/iter",
            "extra": "iterations: 56797\ncpu: 14497.607267989544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11797.89195468178,
            "unit": "ns/iter",
            "extra": "iterations: 69730\ncpu: 11796.853578086886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11044.632147960136,
            "unit": "ns/iter",
            "extra": "iterations: 74182\ncpu: 11043.69388800513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11897.95318183838,
            "unit": "ns/iter",
            "extra": "iterations: 67901\ncpu: 11897.290172456998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36645.325951311796,
            "unit": "ns/iter",
            "extra": "iterations: 22758\ncpu: 36642.52131118735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472713.1871600007,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 472679.92383025226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382681.34061131027,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 382660.7860262005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377601.166377096,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 377593.44048653333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378748.038544869,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 378702.72845387814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224432.05888454686,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 224411.2062256815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371108.68405302503,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 371074.5190252246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1886067.4164947453,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1885823.7113402106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739870.1917916613,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 739800.4735595884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3196.032208404795,
            "unit": "ns/iter",
            "extra": "iterations: 250090\ncpu: 3195.8534927426053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14979.179143898291,
            "unit": "ns/iter",
            "extra": "iterations: 54900\ncpu: 14978.010928961741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12283.641700885355,
            "unit": "ns/iter",
            "extra": "iterations: 67212\ncpu: 12282.642980420074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11427.970231609626,
            "unit": "ns/iter",
            "extra": "iterations: 71586\ncpu: 11426.961975805321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11942.611524516942,
            "unit": "ns/iter",
            "extra": "iterations: 68671\ncpu: 11942.28422478201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35986.84961788916,
            "unit": "ns/iter",
            "extra": "iterations: 23161\ncpu: 35985.99369629963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455828.95062366873,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 455821.62162162404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373842.6235042686,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373828.54700854793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370389.73067116336,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 370376.55055224925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370182.5199999938,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 370179.7446808511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232838.19339497984,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 232826.31439894368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368459.35940803395,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 368456.4059196623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 290.93894509693524,
            "unit": "ns/iter",
            "extra": "iterations: 2406932\ncpu: 290.9298642421138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1519.5219282192497,
            "unit": "ns/iter",
            "extra": "iterations: 461711\ncpu: 1519.5102564158115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1166.2949895297015,
            "unit": "ns/iter",
            "extra": "iterations: 598367\ncpu: 1166.2446291322965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1128.4994206392012,
            "unit": "ns/iter",
            "extra": "iterations: 609292\ncpu: 1128.476986403885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 992.0435393964028,
            "unit": "ns/iter",
            "extra": "iterations: 695531\ncpu: 992.0363003230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6998.900191593587,
            "unit": "ns/iter",
            "extra": "iterations: 100212\ncpu: 6998.6398834470865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18843.81688018345,
            "unit": "ns/iter",
            "extra": "iterations: 37156\ncpu: 18843.416944773486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4632.024432730142,
            "unit": "ns/iter",
            "extra": "iterations: 153851\ncpu: 4632.002391924659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4513.184716442928,
            "unit": "ns/iter",
            "extra": "iterations: 155736\ncpu: 4513.156238763064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4534.248823251876,
            "unit": "ns/iter",
            "extra": "iterations: 154451\ncpu: 4534.124738590184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9595.869595048187,
            "unit": "ns/iter",
            "extra": "iterations: 72873\ncpu: 9595.593704115365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8552.117008265379,
            "unit": "ns/iter",
            "extra": "iterations: 80943\ncpu: 8551.992142618728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3123.603353424466,
            "unit": "ns/iter",
            "extra": "iterations: 224308\ncpu: 3123.580077393634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15501.73080751274,
            "unit": "ns/iter",
            "extra": "iterations: 45213\ncpu: 15500.962112666735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12351.388715343246,
            "unit": "ns/iter",
            "extra": "iterations: 56661\ncpu: 12351.313954924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12325.844168881797,
            "unit": "ns/iter",
            "extra": "iterations: 56773\ncpu: 12325.239110140395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12914.778515001199,
            "unit": "ns/iter",
            "extra": "iterations: 54559\ncpu: 12914.690518521315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28169.484394455747,
            "unit": "ns/iter",
            "extra": "iterations: 24895\ncpu: 28168.628238601956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99783.5233524359,
            "unit": "ns/iter",
            "extra": "iterations: 6980\ncpu: 99782.83667621783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84912.40910751486,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 84909.7528308785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84858.14355230793,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 84851.89781021906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85172.70142066633,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 85172.1285817475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54813.42814628813,
            "unit": "ns/iter",
            "extra": "iterations: 12769\ncpu: 54810.36886208816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84597.54586265355,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84597.00315457421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3040.8808112329057,
            "unit": "ns/iter",
            "extra": "iterations: 227555\ncpu: 3040.816066445492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15161.468912981521,
            "unit": "ns/iter",
            "extra": "iterations: 46209\ncpu: 15161.076846501663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12140.821239306879,
            "unit": "ns/iter",
            "extra": "iterations: 57742\ncpu: 12140.746770115347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11954.373917961364,
            "unit": "ns/iter",
            "extra": "iterations: 58339\ncpu: 11953.845626424836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12730.605237773912,
            "unit": "ns/iter",
            "extra": "iterations: 54947\ncpu: 12730.520319580619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27408.179863149326,
            "unit": "ns/iter",
            "extra": "iterations: 25575\ncpu: 27406.815249266805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97526.71195500728,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 97526.11814346009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82413.67121674943,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82413.06189691674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82533.7130135314,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 82532.35573497978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82461.74537038308,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 82461.14672364743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55277.73604861455,
            "unit": "ns/iter",
            "extra": "iterations: 12669\ncpu: 55275.13615912805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84226.4478587033,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 84225.9496733598 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}