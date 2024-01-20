window.BENCHMARK_DATA = {
  "lastUpdate": 1705773461314,
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
      }
    ]
  }
}