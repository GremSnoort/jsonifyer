window.BENCHMARK_DATA = {
  "lastUpdate": 1702392479735,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 20.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392478333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8004.334908629004,
            "unit": "ns/iter",
            "extra": "iterations: 87391\ncpu: 8003.944342094724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93196.29231941586,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 93189.90426457788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181928.79283361146,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 181922.73476112026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 271522.2621236463,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 271507.1949286847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355081.8076923105,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 355065.5500413563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 436170.5954660275,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 436150.73047858954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 522955.7599039533,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 522927.0108043215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 611302.0727650147,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 611270.963270963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559862.4450000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559822.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5983.375695787872,
            "unit": "ns/iter",
            "extra": "iterations: 116235\ncpu: 5983.322579257539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5025.757851713684,
            "unit": "ns/iter",
            "extra": "iterations: 139460\ncpu: 5025.673311343748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5052.9209627964,
            "unit": "ns/iter",
            "extra": "iterations: 138264\ncpu: 5052.704246947869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5020.813159158861,
            "unit": "ns/iter",
            "extra": "iterations: 139477\ncpu: 5020.581171089142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8992.2707454927,
            "unit": "ns/iter",
            "extra": "iterations: 78029\ncpu: 8991.800484435274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 41414.81982797402,
            "unit": "ns/iter",
            "extra": "iterations: 19881\ncpu: 41413.37457874356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 168266.3786350279,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 168258.83283877367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 135765.64005088646,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 135762.0168601876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 130287.21821487247,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130282.05788755872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 135270.2758135138,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 135264.50250312893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357321.2349298384,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 357303.05532617646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2858750.3323263805,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2858594.2598187295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2356924.2810124336,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356822.53164557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2369784.037220821,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2369687.0967741897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2366074.857142874,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2366008.163265306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1408779.969604903,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1408722.0364741618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2296137.8574938453,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2296019.901719906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9995886.981132442,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 9995204.716981154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5664869.9757578,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5664738.787878795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12007193.636364378,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12006784.090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 38544.904666351635,
            "unit": "ns/iter",
            "extra": "iterations: 21430\ncpu: 38543.87774148385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 168742.9769429611,
            "unit": "ns/iter",
            "extra": "iterations: 5031\ncpu: 168739.33611608023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 134970.9751235934,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 134966.8633391802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 135748.7625279368,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 135745.4516437916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 140173.26207010756,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 140170.28769841214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375074.3432900107,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375066.2337662361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2877801.2738460414,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2877688.615384605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2422260.0283505856,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2422223.453608249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2415229.09793812,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2415143.814432996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2408664.337628952,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2408584.0206185626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1426727.864823365,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426681.2596006165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2309956.5459056823,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2309894.5409429385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10160455.472728038,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 10160100.909090953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5614877.634730781,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5614676.646706602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 38886.88418278496,
            "unit": "ns/iter",
            "extra": "iterations: 21249\ncpu: 38885.97581062668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 165294.05545860287,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 165287.51211944956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 133814.83986155887,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 133812.01824760187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 132308.93506291503,
            "unit": "ns/iter",
            "extra": "iterations: 6437\ncpu: 132303.85272642458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 135109.85327385116,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 135106.22909033034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 359792.7935645561,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 359778.68783953204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2835696.5987839676,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2835574.164133737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2376816.597468204,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2376750.632911396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2388321.73027973,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2388256.74300255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2382564.5419847737,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2382475.0636132187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1424954.6728110763,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1424875.7296466979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2307295.4543208033,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2307209.382716051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2714.6005776164766,
            "unit": "ns/iter",
            "extra": "iterations: 257264\ncpu: 2714.4462497667946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19013.356393674258,
            "unit": "ns/iter",
            "extra": "iterations: 36802\ncpu: 19012.618879408717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14219.871646693406,
            "unit": "ns/iter",
            "extra": "iterations: 49317\ncpu: 14219.145527911125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13570.773252999372,
            "unit": "ns/iter",
            "extra": "iterations: 51617\ncpu: 13570.523277214857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11650.631351207527,
            "unit": "ns/iter",
            "extra": "iterations: 60087\ncpu: 11650.416895501508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82769.9977480103,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82766.40986132494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 173388.01954961446,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 173380.6731007206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45382.8436406019,
            "unit": "ns/iter",
            "extra": "iterations: 15426\ncpu: 45380.3772851028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45572.611103875926,
            "unit": "ns/iter",
            "extra": "iterations: 15346\ncpu: 45571.62778574154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45705.33213632996,
            "unit": "ns/iter",
            "extra": "iterations: 15316\ncpu: 45702.91851658407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98566.7297563845,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 98564.06139980238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85683.1522165153,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85679.6105804553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23683.55569142937,
            "unit": "ns/iter",
            "extra": "iterations: 29439\ncpu: 23682.676041984865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 113221.82386270192,
            "unit": "ns/iter",
            "extra": "iterations: 6177\ncpu: 113215.00728508983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 92910.42952482819,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 92907.18099305868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92827.26549614346,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 92822.82521947438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 94616.17414284276,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 94614.70388941624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 176053.80912335112,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 176050.5351681977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 766058.6048565912,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 766027.5938189917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 645810.9511070619,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 645768.4501845004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 670713.6679353095,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 670668.886774493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 668116.7039847851,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 668104.8387096656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 422669.1211749781,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 422656.6707466385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 645471.4468864807,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 645454.6703296694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23375.527821459884,
            "unit": "ns/iter",
            "extra": "iterations: 29887\ncpu: 23374.959012279596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115348.44635762146,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 115345.49668874322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94045.5355021677,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 94042.69708423312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92731.34565275851,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 92727.95798989557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95083.8522527408,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 95083.16871871214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 180183.02133674687,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 180177.5835475569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 760022.9804983056,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 760006.0671722622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 651954.0000000173,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 651932.3062558427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 660205.9029218486,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 660185.391140437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 670375.3419293397,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 670369.8185291429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 427559.21819295053,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 427546.52735095174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 637239.1765240765,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 637224.8407643274 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392478333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8004.334908629004,
            "unit": "ns/iter",
            "extra": "iterations: 87391\ncpu: 8003.944342094724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93196.29231941586,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 93189.90426457788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181928.79283361146,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 181922.73476112026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 271522.2621236463,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 271507.1949286847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355081.8076923105,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 355065.5500413563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 436170.5954660275,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 436150.73047858954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 522955.7599039533,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 522927.0108043215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 611302.0727650147,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 611270.963270963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559862.4450000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559822.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5983.375695787872,
            "unit": "ns/iter",
            "extra": "iterations: 116235\ncpu: 5983.322579257539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5025.757851713684,
            "unit": "ns/iter",
            "extra": "iterations: 139460\ncpu: 5025.673311343748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5052.9209627964,
            "unit": "ns/iter",
            "extra": "iterations: 138264\ncpu: 5052.704246947869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5020.813159158861,
            "unit": "ns/iter",
            "extra": "iterations: 139477\ncpu: 5020.581171089142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8992.2707454927,
            "unit": "ns/iter",
            "extra": "iterations: 78029\ncpu: 8991.800484435274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 41414.81982797402,
            "unit": "ns/iter",
            "extra": "iterations: 19881\ncpu: 41413.37457874356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 168266.3786350279,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 168258.83283877367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 135765.64005088646,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 135762.0168601876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 130287.21821487247,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130282.05788755872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 135270.2758135138,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 135264.50250312893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357321.2349298384,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 357303.05532617646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2858750.3323263805,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2858594.2598187295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2356924.2810124336,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356822.53164557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2369784.037220821,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2369687.0967741897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2366074.857142874,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2366008.163265306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1408779.969604903,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1408722.0364741618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2296137.8574938453,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2296019.901719906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9995886.981132442,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 9995204.716981154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5664869.9757578,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5664738.787878795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12007193.636364378,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12006784.090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 38544.904666351635,
            "unit": "ns/iter",
            "extra": "iterations: 21430\ncpu: 38543.87774148385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 168742.9769429611,
            "unit": "ns/iter",
            "extra": "iterations: 5031\ncpu: 168739.33611608023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 134970.9751235934,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 134966.8633391802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 135748.7625279368,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 135745.4516437916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 140173.26207010756,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 140170.28769841214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375074.3432900107,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375066.2337662361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2877801.2738460414,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2877688.615384605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2422260.0283505856,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2422223.453608249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2415229.09793812,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2415143.814432996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2408664.337628952,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2408584.0206185626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1426727.864823365,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426681.2596006165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2309956.5459056823,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2309894.5409429385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10160455.472728038,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 10160100.909090953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5614877.634730781,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5614676.646706602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 38886.88418278496,
            "unit": "ns/iter",
            "extra": "iterations: 21249\ncpu: 38885.97581062668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 165294.05545860287,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 165287.51211944956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 133814.83986155887,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 133812.01824760187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 132308.93506291503,
            "unit": "ns/iter",
            "extra": "iterations: 6437\ncpu: 132303.85272642458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 135109.85327385116,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 135106.22909033034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 359792.7935645561,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 359778.68783953204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2835696.5987839676,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2835574.164133737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2376816.597468204,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2376750.632911396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2388321.73027973,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2388256.74300255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2382564.5419847737,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2382475.0636132187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1424954.6728110763,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1424875.7296466979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2307295.4543208033,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2307209.382716051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2714.6005776164766,
            "unit": "ns/iter",
            "extra": "iterations: 257264\ncpu: 2714.4462497667946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19013.356393674258,
            "unit": "ns/iter",
            "extra": "iterations: 36802\ncpu: 19012.618879408717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14219.871646693406,
            "unit": "ns/iter",
            "extra": "iterations: 49317\ncpu: 14219.145527911125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13570.773252999372,
            "unit": "ns/iter",
            "extra": "iterations: 51617\ncpu: 13570.523277214857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11650.631351207527,
            "unit": "ns/iter",
            "extra": "iterations: 60087\ncpu: 11650.416895501508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82769.9977480103,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82766.40986132494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 173388.01954961446,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 173380.6731007206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45382.8436406019,
            "unit": "ns/iter",
            "extra": "iterations: 15426\ncpu: 45380.3772851028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45572.611103875926,
            "unit": "ns/iter",
            "extra": "iterations: 15346\ncpu: 45571.62778574154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45705.33213632996,
            "unit": "ns/iter",
            "extra": "iterations: 15316\ncpu: 45702.91851658407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98566.7297563845,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 98564.06139980238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85683.1522165153,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85679.6105804553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23683.55569142937,
            "unit": "ns/iter",
            "extra": "iterations: 29439\ncpu: 23682.676041984865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 113221.82386270192,
            "unit": "ns/iter",
            "extra": "iterations: 6177\ncpu: 113215.00728508983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 92910.42952482819,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 92907.18099305868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92827.26549614346,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 92822.82521947438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 94616.17414284276,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 94614.70388941624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 176053.80912335112,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 176050.5351681977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 766058.6048565912,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 766027.5938189917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 645810.9511070619,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 645768.4501845004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 670713.6679353095,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 670668.886774493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 668116.7039847851,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 668104.8387096656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 422669.1211749781,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 422656.6707466385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 645471.4468864807,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 645454.6703296694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23375.527821459884,
            "unit": "ns/iter",
            "extra": "iterations: 29887\ncpu: 23374.959012279596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115348.44635762146,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 115345.49668874322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94045.5355021677,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 94042.69708423312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92731.34565275851,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 92727.95798989557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95083.8522527408,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 95083.16871871214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 180183.02133674687,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 180177.5835475569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 760022.9804983056,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 760006.0671722622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 651954.0000000173,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 651932.3062558427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 660205.9029218486,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 660185.391140437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 670375.3419293397,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 670369.8185291429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 427559.21819295053,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 427546.52735095174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 637239.1765240765,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 637224.8407643274 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}