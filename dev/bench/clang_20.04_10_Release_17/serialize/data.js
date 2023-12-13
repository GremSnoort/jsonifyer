window.BENCHMARK_DATA = {
  "lastUpdate": 1702490330456,
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
      }
    ]
  }
}