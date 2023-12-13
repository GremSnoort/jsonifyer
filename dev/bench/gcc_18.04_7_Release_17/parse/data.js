window.BENCHMARK_DATA = {
  "lastUpdate": 1702488570038,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 18.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397893337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 704.9243359896475,
            "unit": "ns/iter",
            "extra": "iterations: 990233\ncpu: 704.8753172233203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6265.610880586738,
            "unit": "ns/iter",
            "extra": "iterations: 130379\ncpu: 6265.3341412344025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12199.36160629366,
            "unit": "ns/iter",
            "extra": "iterations: 68381\ncpu: 12198.979248621692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18141.572159584088,
            "unit": "ns/iter",
            "extra": "iterations: 46120\ncpu: 18140.828274067648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24226.029615970816,
            "unit": "ns/iter",
            "extra": "iterations: 34711\ncpu: 24223.96070409956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30014.311929254232,
            "unit": "ns/iter",
            "extra": "iterations: 27705\ncpu: 30012.35156109004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36087.89685096977,
            "unit": "ns/iter",
            "extra": "iterations: 23277\ncpu: 36086.213859174284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42698.55928571394,
            "unit": "ns/iter",
            "extra": "iterations: 19600\ncpu: 42696.25 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48090.80300933962,
            "unit": "ns/iter",
            "extra": "iterations: 17346\ncpu: 48088.71786002539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 692.7006689427932,
            "unit": "ns/iter",
            "extra": "iterations: 1007560\ncpu: 692.6566159831672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 533.2175701920452,
            "unit": "ns/iter",
            "extra": "iterations: 1311972\ncpu: 533.1782995368816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 536.378989264161,
            "unit": "ns/iter",
            "extra": "iterations: 1295195\ncpu: 536.346110045205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 500.0206219174434,
            "unit": "ns/iter",
            "extra": "iterations: 1398803\ncpu: 499.9969974328058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 933.1628693784111,
            "unit": "ns/iter",
            "extra": "iterations: 745137\ncpu: 933.1061267927922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3027.0357878979034,
            "unit": "ns/iter",
            "extra": "iterations: 265872\ncpu: 3026.8335890955054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14526.023922850842,
            "unit": "ns/iter",
            "extra": "iterations: 56306\ncpu: 14525.331225801883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11624.865441051557,
            "unit": "ns/iter",
            "extra": "iterations: 70876\ncpu: 11624.099836333897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11490.353765931295,
            "unit": "ns/iter",
            "extra": "iterations: 72107\ncpu: 11489.883090407302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11834.625786468994,
            "unit": "ns/iter",
            "extra": "iterations: 71999\ncpu: 11833.847692329058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40309.05733359531,
            "unit": "ns/iter",
            "extra": "iterations: 20372\ncpu: 40306.97035146277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272093.45329154155,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 272057.74294670834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219630.4471813104,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 219624.02234636858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219343.20953575056,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 219326.54956085343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215314.7323769475,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215307.1481573094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116009.80835217901,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 116002.00824577721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207659.845036906,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 207649.4644132351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5464.368540000351,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5464.263000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29446.596633716934,
            "unit": "ns/iter",
            "extra": "iterations: 28934\ncpu: 29445.932121379643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22418.092440863787,
            "unit": "ns/iter",
            "extra": "iterations: 36737\ncpu: 22417.01826496454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22222.890681197012,
            "unit": "ns/iter",
            "extra": "iterations: 37258\ncpu: 22222.48644586398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21807.740978705504,
            "unit": "ns/iter",
            "extra": "iterations: 38132\ncpu: 21806.739746145002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55204.87871838594,
            "unit": "ns/iter",
            "extra": "iterations: 15262\ncpu: 55204.658629275444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295177.3162335305,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 295152.7168410379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228205.5765907254,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 228197.61717727297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227483.044167317,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 227468.69316705593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225610.50038951423,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 225595.50766034776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125851.14502383409,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 125842.94381048663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220415.5061884391,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 220406.92093963118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 888794.3489681324,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 888733.0206378974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 497049.18217488535,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 496989.46188340493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3039.656644654766,
            "unit": "ns/iter",
            "extra": "iterations: 262888\ncpu: 3039.473844374782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14240.867811915932,
            "unit": "ns/iter",
            "extra": "iterations: 57804\ncpu: 14239.742924365184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11072.358809622234,
            "unit": "ns/iter",
            "extra": "iterations: 74867\ncpu: 11071.998343729501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10826.1714009963,
            "unit": "ns/iter",
            "extra": "iterations: 76674\ncpu: 10825.704932571682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10141.516098311318,
            "unit": "ns/iter",
            "extra": "iterations: 81903\ncpu: 10141.34769178172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39619.634900467165,
            "unit": "ns/iter",
            "extra": "iterations: 21249\ncpu: 39617.66200762409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285648.8783257569,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 285643.2511356242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215152.21022727495,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 215139.84683794464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213521.39497219675,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 213513.99564902094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210196.4165663471,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 210182.3260293766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109865.1333166947,
            "unit": "ns/iter",
            "extra": "iterations: 8011\ncpu: 109861.67769317185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204717.90683661558,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 204702.87369640803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.68958127580046,
            "unit": "ns/iter",
            "extra": "iterations: 2902937\ncpu: 241.6783760722336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1666.9578140644917,
            "unit": "ns/iter",
            "extra": "iterations: 418457\ncpu: 1666.9003027790131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1175.267587122495,
            "unit": "ns/iter",
            "extra": "iterations: 596516\ncpu: 1175.2273199712997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1334.6726332143319,
            "unit": "ns/iter",
            "extra": "iterations: 525206\ncpu: 1334.5873809514792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 961.7663639717941,
            "unit": "ns/iter",
            "extra": "iterations: 729117\ncpu: 961.7323419972312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11597.578872907767,
            "unit": "ns/iter",
            "extra": "iterations: 63615\ncpu: 11596.928397390555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14793.805308425788,
            "unit": "ns/iter",
            "extra": "iterations: 47321\ncpu: 14793.174277804797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3366.0488409369127,
            "unit": "ns/iter",
            "extra": "iterations: 209005\ncpu: 3365.851056194806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3381.046321252409,
            "unit": "ns/iter",
            "extra": "iterations: 209256\ncpu: 3380.888003211375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3334.5570240634374,
            "unit": "ns/iter",
            "extra": "iterations: 210569\ncpu: 3334.366882114642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5928.072168302036,
            "unit": "ns/iter",
            "extra": "iterations: 113748\ncpu: 5927.738509688104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5794.022319066238,
            "unit": "ns/iter",
            "extra": "iterations: 120928\ncpu: 5793.789693040478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1982.5884495625926,
            "unit": "ns/iter",
            "extra": "iterations: 353597\ncpu: 1982.4209481415294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10381.538203772958,
            "unit": "ns/iter",
            "extra": "iterations: 67742\ncpu: 10381.140208437877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.358441279499,
            "unit": "ns/iter",
            "extra": "iterations: 83838\ncpu: 8368.955604856894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8284.97438508823,
            "unit": "ns/iter",
            "extra": "iterations: 84443\ncpu: 8284.486576744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8142.904958388874,
            "unit": "ns/iter",
            "extra": "iterations: 85794\ncpu: 8142.870130778319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18407.889851129166,
            "unit": "ns/iter",
            "extra": "iterations: 38221\ncpu: 18406.6298631641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60600.97951421959,
            "unit": "ns/iter",
            "extra": "iterations: 11569\ncpu: 60599.18748379381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49149.01567310532,
            "unit": "ns/iter",
            "extra": "iterations: 14292\ncpu: 49145.44500419753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48483.780928197615,
            "unit": "ns/iter",
            "extra": "iterations: 14178\ncpu: 48482.88192975061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47836.35417379964,
            "unit": "ns/iter",
            "extra": "iterations: 14603\ncpu: 47832.91789358407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28170.847815668614,
            "unit": "ns/iter",
            "extra": "iterations: 25042\ncpu: 28168.64068365122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47961.98916917957,
            "unit": "ns/iter",
            "extra": "iterations: 14588\ncpu: 47960.24814916373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2046.4004856003883,
            "unit": "ns/iter",
            "extra": "iterations: 341433\ncpu: 2046.2802365325185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10835.245986765969,
            "unit": "ns/iter",
            "extra": "iterations: 65284\ncpu: 10834.795662030547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8459.224255654673,
            "unit": "ns/iter",
            "extra": "iterations: 82455\ncpu: 8459.015220423275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8420.642234066829,
            "unit": "ns/iter",
            "extra": "iterations: 83113\ncpu: 8420.296463850405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8332.422364512637,
            "unit": "ns/iter",
            "extra": "iterations: 84491\ncpu: 8332.043649619454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18109.77013222649,
            "unit": "ns/iter",
            "extra": "iterations: 38570\ncpu: 18108.31993777552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59690.06984478899,
            "unit": "ns/iter",
            "extra": "iterations: 11726\ncpu: 59687.847518335584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48584.14581745265,
            "unit": "ns/iter",
            "extra": "iterations: 14429\ncpu: 48581.14907477991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48835.29545613197,
            "unit": "ns/iter",
            "extra": "iterations: 14327\ncpu: 48835.11551615799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47844.00225548302,
            "unit": "ns/iter",
            "extra": "iterations: 14631\ncpu: 47841.726471191236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27786.572028307444,
            "unit": "ns/iter",
            "extra": "iterations: 25011\ncpu: 27785.914197752863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46821.50157180245,
            "unit": "ns/iter",
            "extra": "iterations: 14951\ncpu: 46819.30974516755 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409078824,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 715.9093464280984,
            "unit": "ns/iter",
            "extra": "iterations: 974843\ncpu: 715.8871736269327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6483.665458705219,
            "unit": "ns/iter",
            "extra": "iterations: 125004\ncpu: 6483.371732104572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12400.247715540867,
            "unit": "ns/iter",
            "extra": "iterations: 67412\ncpu: 12398.72722957337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18639.03646629019,
            "unit": "ns/iter",
            "extra": "iterations: 45165\ncpu: 18637.70397431639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24562.24608357046,
            "unit": "ns/iter",
            "extra": "iterations: 34151\ncpu: 24560.624871892487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30319.121996506074,
            "unit": "ns/iter",
            "extra": "iterations: 27468\ncpu: 30317.398427260818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36345.84958892265,
            "unit": "ns/iter",
            "extra": "iterations: 23110\ncpu: 36344.13673734315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41846.47551030727,
            "unit": "ns/iter",
            "extra": "iterations: 19743\ncpu: 41843.797801752524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47965.98135826441,
            "unit": "ns/iter",
            "extra": "iterations: 17434\ncpu: 47961.87908684185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 639.8188639865333,
            "unit": "ns/iter",
            "extra": "iterations: 1096237\ncpu: 639.7609276096329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 498.9853014805362,
            "unit": "ns/iter",
            "extra": "iterations: 1408101\ncpu: 498.9485839439072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 495.6025689999904,
            "unit": "ns/iter",
            "extra": "iterations: 1413624\ncpu: 495.5833375777442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 492.62416495031204,
            "unit": "ns/iter",
            "extra": "iterations: 1419676\ncpu: 492.6128919556294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 938.2918533032372,
            "unit": "ns/iter",
            "extra": "iterations: 744093\ncpu: 938.2464288738109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2883.6396899258875,
            "unit": "ns/iter",
            "extra": "iterations: 277869\ncpu: 2883.5929880627255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14616.764094533477,
            "unit": "ns/iter",
            "extra": "iterations: 56192\ncpu: 14615.336702733459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11485.12611219614,
            "unit": "ns/iter",
            "extra": "iterations: 71143\ncpu: 11484.577541008935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11346.200172923252,
            "unit": "ns/iter",
            "extra": "iterations: 71708\ncpu: 11345.276677637097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11019.44349657168,
            "unit": "ns/iter",
            "extra": "iterations: 74084\ncpu: 11018.856973165623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40530.52163000211,
            "unit": "ns/iter",
            "extra": "iterations: 20319\ncpu: 40526.97967419666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268963.00433705014,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 268956.3816604704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 223710.90865138738,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 223692.90076335915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 222273.98524173404,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 222263.10432569997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220953.80826404638,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 220927.6140085662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112665.99370907288,
            "unit": "ns/iter",
            "extra": "iterations: 7789\ncpu: 112656.66966234468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 212208.5794734204,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 212179.32715748428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5399.785729999849,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5399.805999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28630.95419821583,
            "unit": "ns/iter",
            "extra": "iterations: 29715\ncpu: 28628.406528689244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22370.813101861324,
            "unit": "ns/iter",
            "extra": "iterations: 37384\ncpu: 22370.48469933666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21989.59275585562,
            "unit": "ns/iter",
            "extra": "iterations: 37658\ncpu: 21988.084869084887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21494.447315539404,
            "unit": "ns/iter",
            "extra": "iterations: 38816\ncpu: 21493.945795548254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54321.97911412826,
            "unit": "ns/iter",
            "extra": "iterations: 15465\ncpu: 54316.5017782085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 300497.0471600655,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 300477.3838209995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234103.91241268232,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 234085.3842020428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 232440.63687299943,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 232422.33191035193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 232749.84865294088,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 232733.62387744326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 132363.894744318,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 132350.8380681818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219631.2541561769,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 219623.2745591935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 883267.2820276478,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 883188.5714285696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 489182.55997786345,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 488095.8540630201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3030.603710917339,
            "unit": "ns/iter",
            "extra": "iterations: 261337\ncpu: 3030.5310767323585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14197.039588404547,
            "unit": "ns/iter",
            "extra": "iterations: 57921\ncpu: 14196.736934790493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11192.238666900796,
            "unit": "ns/iter",
            "extra": "iterations: 74053\ncpu: 11191.992221787112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11064.600459978921,
            "unit": "ns/iter",
            "extra": "iterations: 74786\ncpu: 11064.479982884477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10766.629114322028,
            "unit": "ns/iter",
            "extra": "iterations: 76258\ncpu: 10766.433685646154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39307.37740621102,
            "unit": "ns/iter",
            "extra": "iterations: 21351\ncpu: 39306.88492342268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285091.2152553322,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 285081.8034906261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 219179.31270115907,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 219174.7957415201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 218123.0192402609,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 218115.219536261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215074.35291273973,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 215069.2047377337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108496.12496915812,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 108491.78386380471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207360.10543427878,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 207355.45750116045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 235.34959464106933,
            "unit": "ns/iter",
            "extra": "iterations: 2974771\ncpu: 235.34577955748415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1620.575511341779,
            "unit": "ns/iter",
            "extra": "iterations: 430485\ncpu: 1620.5602982682396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1166.8017922701777,
            "unit": "ns/iter",
            "extra": "iterations: 599240\ncpu: 1166.7742473800045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1322.7998395977554,
            "unit": "ns/iter",
            "extra": "iterations: 528671\ncpu: 1322.7801411463788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 974.9808940208932,
            "unit": "ns/iter",
            "extra": "iterations: 716896\ncpu: 974.9084943980658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10705.804666162825,
            "unit": "ns/iter",
            "extra": "iterations: 64807\ncpu: 10705.311154659226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13585.477354825842,
            "unit": "ns/iter",
            "extra": "iterations: 51490\ncpu: 13584.608661876118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3174.3036039858152,
            "unit": "ns/iter",
            "extra": "iterations: 221588\ncpu: 3174.1633120927045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3099.9530493016114,
            "unit": "ns/iter",
            "extra": "iterations: 224576\ncpu: 3099.681176973503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3117.7883241360473,
            "unit": "ns/iter",
            "extra": "iterations: 223795\ncpu: 3117.6415916352134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5885.824052287283,
            "unit": "ns/iter",
            "extra": "iterations: 118575\ncpu: 5885.2498418721525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6011.216529337833,
            "unit": "ns/iter",
            "extra": "iterations: 116266\ncpu: 6010.550805910531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2076.521971464723,
            "unit": "ns/iter",
            "extra": "iterations: 336846\ncpu: 2076.376445022355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10708.2570757931,
            "unit": "ns/iter",
            "extra": "iterations: 66035\ncpu: 10707.412735670301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8503.47556788392,
            "unit": "ns/iter",
            "extra": "iterations: 81839\ncpu: 8503.059665929488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8455.27739589042,
            "unit": "ns/iter",
            "extra": "iterations: 82485\ncpu: 8455.302176153138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8318.163976990334,
            "unit": "ns/iter",
            "extra": "iterations: 83963\ncpu: 8317.980539046894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18058.684780081436,
            "unit": "ns/iter",
            "extra": "iterations: 38719\ncpu: 18058.304708282543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60905.19404393954,
            "unit": "ns/iter",
            "extra": "iterations: 11652\ncpu: 60904.55715756877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49447.5591397846,
            "unit": "ns/iter",
            "extra": "iterations: 14322\ncpu: 49446.23655913965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49288.89120516724,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 49288.29227205759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48515.38331276706,
            "unit": "ns/iter",
            "extra": "iterations: 14586\ncpu: 48512.77252159649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27870.06207307601,
            "unit": "ns/iter",
            "extra": "iterations: 25180\ncpu: 27870.14297061154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48257.85879501202,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 48253.70498615023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2067.362692213141,
            "unit": "ns/iter",
            "extra": "iterations: 337581\ncpu: 2067.3417639025865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10866.201408033809,
            "unit": "ns/iter",
            "extra": "iterations: 64203\ncpu: 10865.012538355119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8534.900008487068,
            "unit": "ns/iter",
            "extra": "iterations: 82477\ncpu: 8534.30532148349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8577.393665268259,
            "unit": "ns/iter",
            "extra": "iterations: 82024\ncpu: 8576.888471666773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8530.742526495542,
            "unit": "ns/iter",
            "extra": "iterations: 82090\ncpu: 8529.551711536064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18157.770092924424,
            "unit": "ns/iter",
            "extra": "iterations: 38633\ncpu: 18157.35511091557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59733.886814969344,
            "unit": "ns/iter",
            "extra": "iterations: 11733\ncpu: 59729.43833631648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49371.779155802375,
            "unit": "ns/iter",
            "extra": "iterations: 14191\ncpu: 49368.487069269155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48759.24286213247,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 48752.35602094287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48389.83111784313,
            "unit": "ns/iter",
            "extra": "iterations: 14519\ncpu: 48386.514222743215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27979.42333996204,
            "unit": "ns/iter",
            "extra": "iterations: 25150\ncpu: 27977.856858846666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47658.77092237365,
            "unit": "ns/iter",
            "extra": "iterations: 14506\ncpu: 47656.05266786188 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412516706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 701.9230893307155,
            "unit": "ns/iter",
            "extra": "iterations: 998145\ncpu: 701.9211637587725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6157.917634635741,
            "unit": "ns/iter",
            "extra": "iterations: 132580\ncpu: 6157.799818977221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12052.242649103287,
            "unit": "ns/iter",
            "extra": "iterations: 68325\ncpu: 12052.080497621657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17904.679957424774,
            "unit": "ns/iter",
            "extra": "iterations: 46975\ncpu: 17904.43640234167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23348.635958144405,
            "unit": "ns/iter",
            "extra": "iterations: 35647\ncpu: 23348.56509664206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29423.466105263764,
            "unit": "ns/iter",
            "extra": "iterations: 28500\ncpu: 29422.9649122807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34884.20277835258,
            "unit": "ns/iter",
            "extra": "iterations: 24115\ncpu: 34883.823346464844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40435.19041875868,
            "unit": "ns/iter",
            "extra": "iterations: 20728\ncpu: 40432.96989579316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45181.302397317304,
            "unit": "ns/iter",
            "extra": "iterations: 18479\ncpu: 45179.18177390557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 672.7715529063155,
            "unit": "ns/iter",
            "extra": "iterations: 1039129\ncpu: 672.7397657076262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 533.6118889466094,
            "unit": "ns/iter",
            "extra": "iterations: 1311117\ncpu: 533.5966965572101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 530.4956153152688,
            "unit": "ns/iter",
            "extra": "iterations: 1312181\ncpu: 530.488248191369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 537.4796564995316,
            "unit": "ns/iter",
            "extra": "iterations: 1299678\ncpu: 537.4573548217328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1084.937114360191,
            "unit": "ns/iter",
            "extra": "iterations: 649894\ncpu: 1084.8864584070625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2927.20720684401,
            "unit": "ns/iter",
            "extra": "iterations: 272713\ncpu: 2927.0570159838408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15041.7016779927,
            "unit": "ns/iter",
            "extra": "iterations: 54887\ncpu: 15040.559695374139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11425.015821272687,
            "unit": "ns/iter",
            "extra": "iterations: 71170\ncpu: 11424.418996768318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11420.97655660259,
            "unit": "ns/iter",
            "extra": "iterations: 71534\ncpu: 11420.30363183939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11354.537405322752,
            "unit": "ns/iter",
            "extra": "iterations: 71955\ncpu: 11353.919810992964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46765.514457695135,
            "unit": "ns/iter",
            "extra": "iterations: 17776\ncpu: 46762.184968496935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262101.20596288284,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 262091.39032552525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212923.01534340263,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 212913.39503166114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216000.9657639302,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 215976.5968318856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 222188.87415562614,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 222185.4891168381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112070.47999999675,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 112065.50482315115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205069.57289127668,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 205065.87030716726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5375.4741000000195,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5375.456000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28150.176149095114,
            "unit": "ns/iter",
            "extra": "iterations: 29458\ncpu: 28149.382171226785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22165.270485239245,
            "unit": "ns/iter",
            "extra": "iterations: 37466\ncpu: 22164.01003576583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21894.403916865616,
            "unit": "ns/iter",
            "extra": "iterations: 37530\ncpu: 21893.322675193136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21560.997464292574,
            "unit": "ns/iter",
            "extra": "iterations: 38648\ncpu: 21560.215276340314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50216.076100002734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50214.06000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 300716.1015146583,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 300710.4415082175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226829.17892750993,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 226816.86876852607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 237477.95593870318,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 237465.54460864887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233279.43623618223,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 233264.43785386838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121648.418884837,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 121643.54160829353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212552.6894550924,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 212538.06760847566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 859894.8182648367,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 859865.2968036532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477344.6885964785,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 477323.84868421085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3013.7206474087793,
            "unit": "ns/iter",
            "extra": "iterations: 266663\ncpu: 3013.682438133531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14473.196779995513,
            "unit": "ns/iter",
            "extra": "iterations: 56708\ncpu: 14473.121958101156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11268.423128094792,
            "unit": "ns/iter",
            "extra": "iterations: 72907\ncpu: 11268.228016514173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10949.54087048863,
            "unit": "ns/iter",
            "extra": "iterations: 75360\ncpu: 10949.055201698522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10393.504310345035,
            "unit": "ns/iter",
            "extra": "iterations: 79808\ncpu: 10392.966870489163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 45611.54403946059,
            "unit": "ns/iter",
            "extra": "iterations: 18245\ncpu: 45609.95341189356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292843.9443346301,
            "unit": "ns/iter",
            "extra": "iterations: 3036\ncpu: 292826.2516469041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 224058.52377298946,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 224052.172801636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 225332.3660860138,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 225325.96624931908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 220051.24587294355,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 220047.6988494253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110572.708092493,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 110570.99773812549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 211453.46869753007,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 211450.39577836366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 253.76844637841756,
            "unit": "ns/iter",
            "extra": "iterations: 2738627\ncpu: 253.76708839867385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1746.4216272505569,
            "unit": "ns/iter",
            "extra": "iterations: 398525\ncpu: 1746.3970892666634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1223.3638910229122,
            "unit": "ns/iter",
            "extra": "iterations: 570102\ncpu: 1223.3160031011964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1271.4860691175186,
            "unit": "ns/iter",
            "extra": "iterations: 544725\ncpu: 1271.4626646472955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1021.224450448419,
            "unit": "ns/iter",
            "extra": "iterations: 686196\ncpu: 1021.2309602504232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 12286.176758720887,
            "unit": "ns/iter",
            "extra": "iterations: 56959\ncpu: 12285.996945171006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14268.55655885833,
            "unit": "ns/iter",
            "extra": "iterations: 48728\ncpu: 14268.478082416585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3323.311857443154,
            "unit": "ns/iter",
            "extra": "iterations: 210779\ncpu: 3323.2504186849633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3310.5294234113303,
            "unit": "ns/iter",
            "extra": "iterations: 207080\ncpu: 3310.4814564419685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3292.27335594407,
            "unit": "ns/iter",
            "extra": "iterations: 211991\ncpu: 3292.290238736538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5722.787192215011,
            "unit": "ns/iter",
            "extra": "iterations: 122082\ncpu: 5722.7470061106405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6198.805499558336,
            "unit": "ns/iter",
            "extra": "iterations: 113100\ncpu: 6198.674624226308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2010.8838572958105,
            "unit": "ns/iter",
            "extra": "iterations: 346367\ncpu: 2010.8454327346512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10365.837375662966,
            "unit": "ns/iter",
            "extra": "iterations: 67659\ncpu: 10365.895150682127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8127.3467972068265,
            "unit": "ns/iter",
            "extra": "iterations: 86206\ncpu: 8127.389044846153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8171.61372057081,
            "unit": "ns/iter",
            "extra": "iterations: 85288\ncpu: 8171.527061251333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8058.012141458339,
            "unit": "ns/iter",
            "extra": "iterations: 86810\ncpu: 8057.820527589075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19765.9604312494,
            "unit": "ns/iter",
            "extra": "iterations: 35432\ncpu: 19765.562203657857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61598.94005113924,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61598.6335184703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49931.75705815813,
            "unit": "ns/iter",
            "extra": "iterations: 14168\ncpu: 49931.4088085824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49853.99439159961,
            "unit": "ns/iter",
            "extra": "iterations: 14086\ncpu: 49852.93198920984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47598.58710029784,
            "unit": "ns/iter",
            "extra": "iterations: 14667\ncpu: 47598.34321947203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26996.649378318438,
            "unit": "ns/iter",
            "extra": "iterations: 25817\ncpu: 26996.785064105297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45987.82960020702,
            "unit": "ns/iter",
            "extra": "iterations: 15358\ncpu: 45987.628597473464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2058.446321542004,
            "unit": "ns/iter",
            "extra": "iterations: 340360\ncpu: 2058.41638265365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10561.062440585005,
            "unit": "ns/iter",
            "extra": "iterations: 66271\ncpu: 10560.954263554115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8351.549701777805,
            "unit": "ns/iter",
            "extra": "iterations: 84333\ncpu: 8351.511270795507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8409.644811633205,
            "unit": "ns/iter",
            "extra": "iterations: 83215\ncpu: 8409.59682749496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8356.769598071205,
            "unit": "ns/iter",
            "extra": "iterations: 83771\ncpu: 8356.669969321214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19907.487843718256,
            "unit": "ns/iter",
            "extra": "iterations: 35167\ncpu: 19907.36201552584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61075.407498253335,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 61075.75332866055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49074.60302881285,
            "unit": "ns/iter",
            "extra": "iterations: 14263\ncpu: 49074.85802425901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48738.069191146664,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48736.95531115157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48680.76967463578,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 48679.9012791989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27992.50364469463,
            "unit": "ns/iter",
            "extra": "iterations: 25105\ncpu: 27991.69089822763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47976.113303148224,
            "unit": "ns/iter",
            "extra": "iterations: 14801\ncpu: 47975.650293898674 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415981516,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 695.6429272277796,
            "unit": "ns/iter",
            "extra": "iterations: 1023248\ncpu: 695.6361507669696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6315.443833778951,
            "unit": "ns/iter",
            "extra": "iterations: 129731\ncpu: 6315.290100284435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12066.783194580343,
            "unit": "ns/iter",
            "extra": "iterations: 68347\ncpu: 12066.10238927824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17974.236681789083,
            "unit": "ns/iter",
            "extra": "iterations: 46290\ncpu: 17973.538561244328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24190.358432180547,
            "unit": "ns/iter",
            "extra": "iterations: 34902\ncpu: 24188.971978683174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29695.58957366135,
            "unit": "ns/iter",
            "extra": "iterations: 28217\ncpu: 29695.148314845646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35606.2190004613,
            "unit": "ns/iter",
            "extra": "iterations: 23831\ncpu: 35604.76690025599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41322.46709911935,
            "unit": "ns/iter",
            "extra": "iterations: 20349\ncpu: 41319.48990122366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47477.09103602148,
            "unit": "ns/iter",
            "extra": "iterations: 17905\ncpu: 47475.62133482271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 684.5579890391169,
            "unit": "ns/iter",
            "extra": "iterations: 1026375\ncpu: 684.5042016806738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 540.6082217728282,
            "unit": "ns/iter",
            "extra": "iterations: 1296606\ncpu: 540.5839553418693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 537.849589168615,
            "unit": "ns/iter",
            "extra": "iterations: 1301994\ncpu: 537.8385000238104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 539.691445114619,
            "unit": "ns/iter",
            "extra": "iterations: 1292548\ncpu: 539.6553938422396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1103.367794088647,
            "unit": "ns/iter",
            "extra": "iterations: 635225\ncpu: 1103.3383446810171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2915.014051904419,
            "unit": "ns/iter",
            "extra": "iterations: 275621\ncpu: 2914.8501021330067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14713.14335752709,
            "unit": "ns/iter",
            "extra": "iterations: 55386\ncpu: 14712.465243924455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11699.558922704053,
            "unit": "ns/iter",
            "extra": "iterations: 69693\ncpu: 11698.682794541764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11450.445799076519,
            "unit": "ns/iter",
            "extra": "iterations: 71032\ncpu: 11450.060536096436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11349.16050107639,
            "unit": "ns/iter",
            "extra": "iterations: 71526\ncpu: 11348.473282442716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46484.633450764755,
            "unit": "ns/iter",
            "extra": "iterations: 17883\ncpu: 46482.6371414192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268979.2566913873,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 268955.3047404062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215448.46632522563,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 215440.35851472503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 228709.9803562099,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 228699.79046621226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 205558.37531935764,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 205549.744506898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115170.02904564311,
            "unit": "ns/iter",
            "extra": "iterations: 7712\ncpu: 115163.32987551852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208537.14950981011,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 208531.86274509784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5360.317109999642,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5359.782000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27808.63533351374,
            "unit": "ns/iter",
            "extra": "iterations: 29564\ncpu: 27807.509132729072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22057.701161591427,
            "unit": "ns/iter",
            "extra": "iterations: 37793\ncpu: 22056.35964332021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21918.193343644994,
            "unit": "ns/iter",
            "extra": "iterations: 37498\ncpu: 21917.072910555282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21552.390794784063,
            "unit": "ns/iter",
            "extra": "iterations: 38652\ncpu: 21551.109903756613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51674.37509999786,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51671.16999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301083.4123140765,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 301059.87547561387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235390.11654136208,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 235381.33727175245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235108.05925325165,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 235093.66883116824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233310.91385767228,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 233300 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122894.64700070447,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 122886.83133380374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214467.30143295001,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 214459.7748208804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 885402.9230055776,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 885350.7421150297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 495602.6754189796,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 495576.2569832406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2990.0200704355757,
            "unit": "ns/iter",
            "extra": "iterations: 266910\ncpu: 2989.9059608107636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14627.488146194477,
            "unit": "ns/iter",
            "extra": "iterations: 57239\ncpu: 14627.144080085292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11147.26660639801,
            "unit": "ns/iter",
            "extra": "iterations: 74113\ncpu: 11146.653083804473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11233.829673301436,
            "unit": "ns/iter",
            "extra": "iterations: 73952\ncpu: 11233.381112072697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10961.766001806263,
            "unit": "ns/iter",
            "extra": "iterations: 75304\ncpu: 10961.26633379369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 46546.90014985899,
            "unit": "ns/iter",
            "extra": "iterations: 18017\ncpu: 46546.90570017186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292977.00099435303,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 292968.7106397096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 233558.7574607904,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 233549.1148204343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 222530.58723727026,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 222522.99316282693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 220748.43097390293,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 220741.18975903554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110626.48341352113,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 110622.14484679716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 212285.15818664152,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 212268.36267181227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 257.86114792406664,
            "unit": "ns/iter",
            "extra": "iterations: 2708890\ncpu: 257.8513339412069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1758.944097664102,
            "unit": "ns/iter",
            "extra": "iterations: 398427\ncpu: 1758.8920931563346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1227.0385429548035,
            "unit": "ns/iter",
            "extra": "iterations: 572556\ncpu: 1226.979544358979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1383.037449594715,
            "unit": "ns/iter",
            "extra": "iterations: 506147\ncpu: 1383.0132352853952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 996.2820108801027,
            "unit": "ns/iter",
            "extra": "iterations: 688594\ncpu: 996.1896269790325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11697.823206928575,
            "unit": "ns/iter",
            "extra": "iterations: 59465\ncpu: 11697.82897502728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12639.622849158484,
            "unit": "ns/iter",
            "extra": "iterations: 52247\ncpu: 12639.29220816506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3299.5399613526088,
            "unit": "ns/iter",
            "extra": "iterations: 212693\ncpu: 3299.498337980102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3269.790744250717,
            "unit": "ns/iter",
            "extra": "iterations: 214202\ncpu: 3269.614662794938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3272.3960817124776,
            "unit": "ns/iter",
            "extra": "iterations: 215145\ncpu: 3272.3414441423215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5974.70497640495,
            "unit": "ns/iter",
            "extra": "iterations: 116550\ncpu: 5974.6014586014935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5520.301149624625,
            "unit": "ns/iter",
            "extra": "iterations: 126824\ncpu: 5520.117643348238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2023.3738963553849,
            "unit": "ns/iter",
            "extra": "iterations: 347032\ncpu: 2023.2701883399836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10348.717277255366,
            "unit": "ns/iter",
            "extra": "iterations: 67667\ncpu: 10348.313062497331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8182.351230399132,
            "unit": "ns/iter",
            "extra": "iterations: 85582\ncpu: 8182.354934448899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8306.445002725208,
            "unit": "ns/iter",
            "extra": "iterations: 84386\ncpu: 8306.306733344378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8132.869966070002,
            "unit": "ns/iter",
            "extra": "iterations: 85470\ncpu: 8132.688662688662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19795.529058740278,
            "unit": "ns/iter",
            "extra": "iterations: 35325\ncpu: 19794.794055201637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62198.94427161918,
            "unit": "ns/iter",
            "extra": "iterations: 11251\ncpu: 62196.31143898211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49882.319911313796,
            "unit": "ns/iter",
            "extra": "iterations: 13982\ncpu: 49882.29151766628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47322.209735449775,
            "unit": "ns/iter",
            "extra": "iterations: 14175\ncpu: 47320.96649029951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48299.97019197256,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 48298.492146596815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27663.103286383277,
            "unit": "ns/iter",
            "extra": "iterations: 25347\ncpu: 27661.91659762502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48436.22751469083,
            "unit": "ns/iter",
            "extra": "iterations: 14465\ncpu: 48435.312824058485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2054.441513852432,
            "unit": "ns/iter",
            "extra": "iterations: 340773\ncpu: 2054.3796016703245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10658.456523727342,
            "unit": "ns/iter",
            "extra": "iterations: 65622\ncpu: 10657.901313583832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8546.768634125216,
            "unit": "ns/iter",
            "extra": "iterations: 82255\ncpu: 8546.402042428997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8610.14654940407,
            "unit": "ns/iter",
            "extra": "iterations: 81754\ncpu: 8610.149962081365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8574.751806670287,
            "unit": "ns/iter",
            "extra": "iterations: 82057\ncpu: 8574.45921737329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19918.127787720503,
            "unit": "ns/iter",
            "extra": "iterations: 35199\ncpu: 19917.750504275627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57142.70012380752,
            "unit": "ns/iter",
            "extra": "iterations: 11308\ncpu: 57140.263530243334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49017.92072829124,
            "unit": "ns/iter",
            "extra": "iterations: 14280\ncpu: 49015.763305321685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48434.67533826305,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 48431.81057330192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48248.503551967944,
            "unit": "ns/iter",
            "extra": "iterations: 14499\ncpu: 48247.61018001256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28240.551721429707,
            "unit": "ns/iter",
            "extra": "iterations: 25473\ncpu: 28239.751894162662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48963.834658185384,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 48962.32805695804 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418337124,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 696.6455921179712,
            "unit": "ns/iter",
            "extra": "iterations: 1010508\ncpu: 696.5978497943609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.1987205926125,
            "unit": "ns/iter",
            "extra": "iterations: 133343\ncpu: 6138.9709246079665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11900.619278908633,
            "unit": "ns/iter",
            "extra": "iterations: 69589\ncpu: 11900.063228383799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17667.82638067907,
            "unit": "ns/iter",
            "extra": "iterations: 47368\ncpu: 17667.093818611713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23115.020110859783,
            "unit": "ns/iter",
            "extra": "iterations: 35901\ncpu: 23114.0776022952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29045.742438352427,
            "unit": "ns/iter",
            "extra": "iterations: 28995\ncpu: 29044.228315226777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34630.87197588994,
            "unit": "ns/iter",
            "extra": "iterations: 24222\ncpu: 34627.97869705228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40382.41616563057,
            "unit": "ns/iter",
            "extra": "iterations: 20624\ncpu: 40380.50814584948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46223.0182075866,
            "unit": "ns/iter",
            "extra": "iterations: 18344\ncpu: 46221.86000872227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 682.5978995261772,
            "unit": "ns/iter",
            "extra": "iterations: 1023769\ncpu: 682.5666727552785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 541.26023894214,
            "unit": "ns/iter",
            "extra": "iterations: 1294372\ncpu: 541.2323505143812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 536.8758804479559,
            "unit": "ns/iter",
            "extra": "iterations: 1307715\ncpu: 536.8533663680539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 541.1781104391605,
            "unit": "ns/iter",
            "extra": "iterations: 1298217\ncpu: 541.1743953437675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1090.4717073904092,
            "unit": "ns/iter",
            "extra": "iterations: 638612\ncpu: 1090.4521055038117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3011.8296421400773,
            "unit": "ns/iter",
            "extra": "iterations: 266445\ncpu: 3011.7810429919878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15141.506064253068,
            "unit": "ns/iter",
            "extra": "iterations: 54005\ncpu: 15140.781409128778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11312.30957339892,
            "unit": "ns/iter",
            "extra": "iterations: 68659\ncpu: 11311.943081023632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11622.228430578973,
            "unit": "ns/iter",
            "extra": "iterations: 70389\ncpu: 11621.986389918917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11083.78495165418,
            "unit": "ns/iter",
            "extra": "iterations: 73430\ncpu: 11083.671523900292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46756.46065388916,
            "unit": "ns/iter",
            "extra": "iterations: 17740\ncpu: 46755.901916572795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 287357.42426208593,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 287351.76775867655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 227574.7345387877,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 227568.23899371034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 220372.50927397597,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 220366.79915209324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 217079.10658064534,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 217076.361290323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113518.57848988204,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 113515.81473793501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214324.90504450965,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 214319.3125618204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5594.741680000084,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5594.562999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27763.72923221148,
            "unit": "ns/iter",
            "extra": "iterations: 29878\ncpu: 27763.57185889279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22106.357067648783,
            "unit": "ns/iter",
            "extra": "iterations: 37990\ncpu: 22105.601474072042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21970.197878917257,
            "unit": "ns/iter",
            "extra": "iterations: 37528\ncpu: 21969.83852057129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21556.588279960393,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 21556.052473095777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51808.50270000405,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51808.82999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301166.147220299,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 301162.01098146825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232682.58862966005,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 232677.92973987575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228676.98061911503,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 228672.62449528894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228851.42056075236,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228840.10680907895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124327.38191458875,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 124323.51676698241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211299.57926829348,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 211281.0180275709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 878870.3225208395,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 878813.8090824834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475355.03104923223,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 475323.2869379003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2975.828491106946,
            "unit": "ns/iter",
            "extra": "iterations: 269986\ncpu: 2975.681702014178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14338.633834052638,
            "unit": "ns/iter",
            "extra": "iterations: 57717\ncpu: 14337.987074865301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11137.48488520823,
            "unit": "ns/iter",
            "extra": "iterations: 74265\ncpu: 11136.999932673594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11273.28863160182,
            "unit": "ns/iter",
            "extra": "iterations: 73502\ncpu: 11273.1966477103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10974.69468602938,
            "unit": "ns/iter",
            "extra": "iterations: 75198\ncpu: 10974.624325115043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 45290.44246873369,
            "unit": "ns/iter",
            "extra": "iterations: 18390\ncpu: 45288.06960304519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289146.3169672738,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 289132.4983299915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 234520.6069626572,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 234503.45610494548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 229079.10531777423,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 229072.1660181578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 227133.65542974765,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 227126.68553782816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 113716.24092196392,
            "unit": "ns/iter",
            "extra": "iterations: 7766\ncpu: 113714.73087818695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 217149.41420846395,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 217143.75614552584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 255.24646215795056,
            "unit": "ns/iter",
            "extra": "iterations: 2743127\ncpu: 255.2446532734371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1749.5399313546948,
            "unit": "ns/iter",
            "extra": "iterations: 399736\ncpu: 1749.519182660564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1297.7019675110146,
            "unit": "ns/iter",
            "extra": "iterations: 539260\ncpu: 1297.6540073433953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1392.0296045691775,
            "unit": "ns/iter",
            "extra": "iterations: 521406\ncpu: 1391.9876257657133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1032.7740177833193,
            "unit": "ns/iter",
            "extra": "iterations: 677040\ncpu: 1032.723768167316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11684.199923674109,
            "unit": "ns/iter",
            "extra": "iterations: 60268\ncpu: 11683.488750248907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13849.232210706525,
            "unit": "ns/iter",
            "extra": "iterations: 50269\ncpu: 13848.940699039205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3219.7456592350723,
            "unit": "ns/iter",
            "extra": "iterations: 217358\ncpu: 3219.6394887696842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3307.3429029099148,
            "unit": "ns/iter",
            "extra": "iterations: 224740\ncpu: 3307.3240188662444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3241.8193579878175,
            "unit": "ns/iter",
            "extra": "iterations: 215105\ncpu: 3241.75495688152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6001.750795663418,
            "unit": "ns/iter",
            "extra": "iterations: 115941\ncpu: 6001.496450780992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6174.3818714172,
            "unit": "ns/iter",
            "extra": "iterations: 113732\ncpu: 6174.057433264151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2037.5313439904385,
            "unit": "ns/iter",
            "extra": "iterations: 342123\ncpu: 2037.4771646454617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10297.877248817573,
            "unit": "ns/iter",
            "extra": "iterations: 67869\ncpu: 10297.287421355883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8266.246817297304,
            "unit": "ns/iter",
            "extra": "iterations: 84755\ncpu: 8266.039761665961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.267870967968,
            "unit": "ns/iter",
            "extra": "iterations: 85250\ncpu: 8204.159530791885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8100.0314783390695,
            "unit": "ns/iter",
            "extra": "iterations: 86631\ncpu: 8099.609839433921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19630.30665166603,
            "unit": "ns/iter",
            "extra": "iterations: 35555\ncpu: 19629.821403459548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60191.79182542253,
            "unit": "ns/iter",
            "extra": "iterations: 11548\ncpu: 60188.01524073386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49241.95180387476,
            "unit": "ns/iter",
            "extra": "iterations: 14358\ncpu: 49240.78562473872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49129.19724610062,
            "unit": "ns/iter",
            "extra": "iterations: 14307\ncpu: 49127.51799818288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48374.76495636848,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 48374.47120418847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27759.440892162587,
            "unit": "ns/iter",
            "extra": "iterations: 25242\ncpu: 27758.945408446343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46573.29547028643,
            "unit": "ns/iter",
            "extra": "iterations: 14438\ncpu: 46571.048621692564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2070.1628796274003,
            "unit": "ns/iter",
            "extra": "iterations: 338391\ncpu: 2070.111202721118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10604.083631164325,
            "unit": "ns/iter",
            "extra": "iterations: 65753\ncpu: 10603.61200249419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8407.552790666545,
            "unit": "ns/iter",
            "extra": "iterations: 82543\ncpu: 8407.493064221071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8503.017836788918,
            "unit": "ns/iter",
            "extra": "iterations: 82470\ncpu: 8502.939250636553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8384.981933599553,
            "unit": "ns/iter",
            "extra": "iterations: 80813\ncpu: 8384.69676908422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19923.22301727606,
            "unit": "ns/iter",
            "extra": "iterations: 35078\ncpu: 19922.926050516307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61182.375449052095,
            "unit": "ns/iter",
            "extra": "iterations: 11413\ncpu: 61179.943923595776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49560.47263261672,
            "unit": "ns/iter",
            "extra": "iterations: 14214\ncpu: 49560.09568031448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48851.54847567203,
            "unit": "ns/iter",
            "extra": "iterations: 14203\ncpu: 48850.637189325964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48016.80203855087,
            "unit": "ns/iter",
            "extra": "iterations: 14422\ncpu: 48015.88545278139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27934.6032346077,
            "unit": "ns/iter",
            "extra": "iterations: 25660\ncpu: 27934.111457521514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48710.438104384935,
            "unit": "ns/iter",
            "extra": "iterations: 14581\ncpu: 48708.565941979425 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420955092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 693.8355167323615,
            "unit": "ns/iter",
            "extra": "iterations: 1029740\ncpu: 693.8203818439606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6239.051949635325,
            "unit": "ns/iter",
            "extra": "iterations: 131204\ncpu: 6238.874576994604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12081.970996565578,
            "unit": "ns/iter",
            "extra": "iterations: 68716\ncpu: 12081.79317771698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17787.26945865341,
            "unit": "ns/iter",
            "extra": "iterations: 46920\ncpu: 17786.873401534525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23374.951376068504,
            "unit": "ns/iter",
            "extra": "iterations: 35209\ncpu: 23374.537760231757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30241.67104341648,
            "unit": "ns/iter",
            "extra": "iterations: 28560\ncpu: 30239.99299719888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34982.03733366656,
            "unit": "ns/iter",
            "extra": "iterations: 23973\ncpu: 34979.73553581113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41112.81820420749,
            "unit": "ns/iter",
            "extra": "iterations: 20303\ncpu: 41111.28404669261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46647.274496755024,
            "unit": "ns/iter",
            "extra": "iterations: 18033\ncpu: 46646.309543614494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 679.0879796847282,
            "unit": "ns/iter",
            "extra": "iterations: 1029374\ncpu: 679.070677907154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 549.448449363557,
            "unit": "ns/iter",
            "extra": "iterations: 1289664\ncpu: 549.4230280134983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 531.0362251640053,
            "unit": "ns/iter",
            "extra": "iterations: 1314473\ncpu: 531.0176017308848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 531.1646028949973,
            "unit": "ns/iter",
            "extra": "iterations: 1305700\ncpu: 531.1567741441381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1092.106328120542,
            "unit": "ns/iter",
            "extra": "iterations: 647317\ncpu: 1092.073280942723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2920.1508544875514,
            "unit": "ns/iter",
            "extra": "iterations: 274609\ncpu: 2920.072175347493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14402.895779210023,
            "unit": "ns/iter",
            "extra": "iterations: 56198\ncpu: 14402.629986832286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11506.09646002902,
            "unit": "ns/iter",
            "extra": "iterations: 71978\ncpu: 11505.451665786786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11568.165741387058,
            "unit": "ns/iter",
            "extra": "iterations: 71690\ncpu: 11567.847677500335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11644.221916636518,
            "unit": "ns/iter",
            "extra": "iterations: 70175\ncpu: 11643.894549340926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46791.860544219424,
            "unit": "ns/iter",
            "extra": "iterations: 17640\ncpu: 46791.26984126984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271991.58702967805,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 271980.6668706032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199773.18693239312,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 199772.4520686175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 204413.63204899224,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 204411.0742536359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211333.74809547662,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 211332.35144743545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111162.21085489032,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 111157.37036565202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202235.63428303928,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 202231.50397010733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5408.108789999914,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5407.808999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28207.073370309266,
            "unit": "ns/iter",
            "extra": "iterations: 29208\ncpu: 28206.268830457382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22162.001653598116,
            "unit": "ns/iter",
            "extra": "iterations: 37494\ncpu: 22161.143116231884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22473.231641175684,
            "unit": "ns/iter",
            "extra": "iterations: 36876\ncpu: 22472.781755071057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21947.93414486026,
            "unit": "ns/iter",
            "extra": "iterations: 37871\ncpu: 21947.265717831517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52106.70810000124,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52103.830000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 289264.38114894193,
            "unit": "ns/iter",
            "extra": "iterations: 2907\ncpu: 289254.1795665635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229292.7228013828,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 229286.55439722096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 223850.4919312859,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 223843.80530973437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227365.584705259,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 227359.13436006353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120826.77836074399,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 120821.82359614287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211867.37835763447,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 211859.58045535957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 860888.9564814919,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 860867.0370370398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 483658.9454545586,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 483653.93939394155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2989.83232067911,
            "unit": "ns/iter",
            "extra": "iterations: 271399\ncpu: 2989.752725691694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14273.22419799328,
            "unit": "ns/iter",
            "extra": "iterations: 57699\ncpu: 14272.767292327366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10738.303184286158,
            "unit": "ns/iter",
            "extra": "iterations: 74585\ncpu: 10737.890996849244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10841.903221131784,
            "unit": "ns/iter",
            "extra": "iterations: 75905\ncpu: 10841.897108227364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10232.619575000257,
            "unit": "ns/iter",
            "extra": "iterations: 80000\ncpu: 10232.262500000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 45023.553687635365,
            "unit": "ns/iter",
            "extra": "iterations: 18440\ncpu: 45022.93383947953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 291483.36026200844,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 291478.3842794751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 227245.8460350059,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 227239.8558187433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 219730.64914953156,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 219722.56917999414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212998.98548141567,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 212992.9190015292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 111001.11212006626,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 110997.78030016407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 209911.3668610328,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 209902.7453838684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 256.3143602330141,
            "unit": "ns/iter",
            "extra": "iterations: 2725297\ncpu: 256.30505592601617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1734.0513424505248,
            "unit": "ns/iter",
            "extra": "iterations: 402026\ncpu: 1734.00998940367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1236.1800127040206,
            "unit": "ns/iter",
            "extra": "iterations: 568321\ncpu: 1236.1686441289323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1237.842656374809,
            "unit": "ns/iter",
            "extra": "iterations: 563550\ncpu: 1237.8454440599785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1028.7433222368343,
            "unit": "ns/iter",
            "extra": "iterations: 679494\ncpu: 1028.7059194047324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11702.188890550387,
            "unit": "ns/iter",
            "extra": "iterations: 60183\ncpu: 11701.736370735924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14067.034388338638,
            "unit": "ns/iter",
            "extra": "iterations: 49668\ncpu: 14066.662639929196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3310.8986013325243,
            "unit": "ns/iter",
            "extra": "iterations: 211344\ncpu: 3310.773430994016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3279.093968259644,
            "unit": "ns/iter",
            "extra": "iterations: 212476\ncpu: 3278.9218547035953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3194.601581708924,
            "unit": "ns/iter",
            "extra": "iterations: 212302\ncpu: 3194.5177153300706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6075.809019855918,
            "unit": "ns/iter",
            "extra": "iterations: 115279\ncpu: 6075.600933387665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6218.16019374165,
            "unit": "ns/iter",
            "extra": "iterations: 112108\ncpu: 6218.10486316764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2045.3580558263025,
            "unit": "ns/iter",
            "extra": "iterations: 342994\ncpu: 2045.3614348939093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10252.984358066353,
            "unit": "ns/iter",
            "extra": "iterations: 68278\ncpu: 10252.579161662667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8225.903104565596,
            "unit": "ns/iter",
            "extra": "iterations: 84875\ncpu: 8225.690721649635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8113.713862931595,
            "unit": "ns/iter",
            "extra": "iterations: 85826\ncpu: 8113.499405774477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8109.8935919638925,
            "unit": "ns/iter",
            "extra": "iterations: 86610\ncpu: 8109.541623369126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19714.61415524926,
            "unit": "ns/iter",
            "extra": "iterations: 35478\ncpu: 19714.456846496643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61243.727160714465,
            "unit": "ns/iter",
            "extra": "iterations: 11362\ncpu: 61242.26368597058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47731.49237228738,
            "unit": "ns/iter",
            "extra": "iterations: 14290\ncpu: 47731.12666200152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49206.9418497193,
            "unit": "ns/iter",
            "extra": "iterations: 14067\ncpu: 49205.66574251777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49596.64965356858,
            "unit": "ns/iter",
            "extra": "iterations: 14577\ncpu: 49594.861768539115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27602.724335192215,
            "unit": "ns/iter",
            "extra": "iterations: 25872\ncpu: 27602.01762523196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48729.88381934743,
            "unit": "ns/iter",
            "extra": "iterations: 15123\ncpu: 48728.57898565121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2080.675192694505,
            "unit": "ns/iter",
            "extra": "iterations: 337711\ncpu: 2080.6491349111925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10552.348214016709,
            "unit": "ns/iter",
            "extra": "iterations: 66238\ncpu: 10551.936954618166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8344.845102724492,
            "unit": "ns/iter",
            "extra": "iterations: 83281\ncpu: 8344.467525606176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8429.710373995884,
            "unit": "ns/iter",
            "extra": "iterations: 82755\ncpu: 8429.444746540923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8293.304824640349,
            "unit": "ns/iter",
            "extra": "iterations: 83343\ncpu: 8293.235184718615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19957.255902061024,
            "unit": "ns/iter",
            "extra": "iterations: 35369\ncpu: 19957.287455116155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57018.20637119739,
            "unit": "ns/iter",
            "extra": "iterations: 12274\ncpu: 57016.75085546584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45566.62779139597,
            "unit": "ns/iter",
            "extra": "iterations: 15091\ncpu: 45566.72188721775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48256.49409032328,
            "unit": "ns/iter",
            "extra": "iterations: 14637\ncpu: 48256.001912959735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48322.4010057848,
            "unit": "ns/iter",
            "extra": "iterations: 14516\ncpu: 48321.11463213013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28136.451304551156,
            "unit": "ns/iter",
            "extra": "iterations: 25526\ncpu: 28135.066207004755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45536.072987669344,
            "unit": "ns/iter",
            "extra": "iterations: 14523\ncpu: 45535.27508090618 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453329365,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 701.4320540565509,
            "unit": "ns/iter",
            "extra": "iterations: 986078\ncpu: 701.3978610211362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6199.579130461108,
            "unit": "ns/iter",
            "extra": "iterations: 131081\ncpu: 6199.139463385234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11824.47108218305,
            "unit": "ns/iter",
            "extra": "iterations: 69905\ncpu: 11823.835204920964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17800.266900115374,
            "unit": "ns/iter",
            "extra": "iterations: 46834\ncpu: 17799.429901353717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23427.662556307005,
            "unit": "ns/iter",
            "extra": "iterations: 35520\ncpu: 23426.18524774775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29237.958813780657,
            "unit": "ns/iter",
            "extra": "iterations: 28359\ncpu: 29236.887760499303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34938.17346262284,
            "unit": "ns/iter",
            "extra": "iterations: 24132\ncpu: 34935.92739930383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40616.44518982819,
            "unit": "ns/iter",
            "extra": "iterations: 20571\ncpu: 40613.98084682322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46027.16380007388,
            "unit": "ns/iter",
            "extra": "iterations: 18547\ncpu: 46024.21955033157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 682.150258210249,
            "unit": "ns/iter",
            "extra": "iterations: 1027651\ncpu: 682.1110474275795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 538.4346204286861,
            "unit": "ns/iter",
            "extra": "iterations: 1302364\ncpu: 538.3957941097887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 544.6039352339777,
            "unit": "ns/iter",
            "extra": "iterations: 1285921\ncpu: 544.5893643544199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 533.4977543567675,
            "unit": "ns/iter",
            "extra": "iterations: 1293616\ncpu: 533.4737665582363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1093.9497091980734,
            "unit": "ns/iter",
            "extra": "iterations: 638407\ncpu: 1093.8949604249328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2905.8431467217,
            "unit": "ns/iter",
            "extra": "iterations: 273402\ncpu: 2905.69344774361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 17599.793776511156,
            "unit": "ns/iter",
            "extra": "iterations: 56817\ncpu: 17599.049580231265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11439.678040344252,
            "unit": "ns/iter",
            "extra": "iterations: 70543\ncpu: 11439.509235501773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11490.687174008188,
            "unit": "ns/iter",
            "extra": "iterations: 71129\ncpu: 11490.302127121153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11393.149990894754,
            "unit": "ns/iter",
            "extra": "iterations: 71391\ncpu: 11392.906668907857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46177.28253301469,
            "unit": "ns/iter",
            "extra": "iterations: 18097\ncpu: 46175.32187655418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 288914.1951219528,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 288899.62476547755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209954.7041123449,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 209945.81243731195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 207733.0422085886,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 207725.619631902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 204895.9344587784,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 204891.18669314813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112033.21028096412,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 112028.23484943924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204418.40235814007,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 204412.33112257437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5350.990279999905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5350.801999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27956.771593485064,
            "unit": "ns/iter",
            "extra": "iterations: 29106\ncpu: 27956.122448979626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22007.82941676916,
            "unit": "ns/iter",
            "extra": "iterations: 37618\ncpu: 22007.352862991098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22248.624193505,
            "unit": "ns/iter",
            "extra": "iterations: 37043\ncpu: 22247.74991226416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21838.091424391067,
            "unit": "ns/iter",
            "extra": "iterations: 38283\ncpu: 21837.308988323708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50886.25370000272,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50883.43999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 302522.5595818916,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 302512.96167247463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235668.85444234588,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 235656.4137186075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 237824.34721842944,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 237820.77281447072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226184.22878624077,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 225714.09774436158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121192.54894216672,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 121187.99717912538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221777.25410043824,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 221765.68256371462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 862258.5971479703,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 862208.645276296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 471731.12145111064,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 471716.5089379586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2905.4522911186446,
            "unit": "ns/iter",
            "extra": "iterations: 278292\ncpu: 2905.3842726345156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14304.29645905081,
            "unit": "ns/iter",
            "extra": "iterations: 58939\ncpu: 14303.70213271348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10941.960341551132,
            "unit": "ns/iter",
            "extra": "iterations: 75772\ncpu: 10941.70669904445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11067.906494569743,
            "unit": "ns/iter",
            "extra": "iterations: 75771\ncpu: 11067.5350727851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10576.072403287519,
            "unit": "ns/iter",
            "extra": "iterations: 78118\ncpu: 10575.498604674985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 45513.94808877304,
            "unit": "ns/iter",
            "extra": "iterations: 18339\ncpu: 45512.69971099867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 290497.3479118877,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 290487.99736928754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 230919.6476578473,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 230908.3248472514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 221477.99392865918,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 221473.51378699602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 216553.96809786433,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 216551.04341568725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106040.86541118003,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 106040.18832391767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 209008.22440192013,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 209005.5023923431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 263.4320048583993,
            "unit": "ns/iter",
            "extra": "iterations: 2693891\ncpu: 263.42602577461554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1719.7144026541855,
            "unit": "ns/iter",
            "extra": "iterations: 415354\ncpu: 1719.6863398450482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1348.2880210759088,
            "unit": "ns/iter",
            "extra": "iterations: 510914\ncpu: 1348.2803368081518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1330.5469984898427,
            "unit": "ns/iter",
            "extra": "iterations: 521804\ncpu: 1330.5273627645606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1012.0669476513233,
            "unit": "ns/iter",
            "extra": "iterations: 687582\ncpu: 1012.0440907411759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11803.285806594415,
            "unit": "ns/iter",
            "extra": "iterations: 58809\ncpu: 11803.070958526747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14099.501312071088,
            "unit": "ns/iter",
            "extra": "iterations: 49540\ncpu: 14099.305611626947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3268.107591069838,
            "unit": "ns/iter",
            "extra": "iterations: 214423\ncpu: 3268.087378686055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3266.939976441308,
            "unit": "ns/iter",
            "extra": "iterations: 215632\ncpu: 3266.8592787712323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3294.655744265627,
            "unit": "ns/iter",
            "extra": "iterations: 222387\ncpu: 3294.598155467701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5629.644645685098,
            "unit": "ns/iter",
            "extra": "iterations: 123125\ncpu: 5629.561015228453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6182.510764953005,
            "unit": "ns/iter",
            "extra": "iterations: 112216\ncpu: 6182.476652170858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1997.0425222829456,
            "unit": "ns/iter",
            "extra": "iterations: 350381\ncpu: 1997.0332295415562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10179.893386661714,
            "unit": "ns/iter",
            "extra": "iterations: 68256\ncpu: 10179.617909048184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8036.884584379006,
            "unit": "ns/iter",
            "extra": "iterations: 88073\ncpu: 8036.752466703775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8058.047624835615,
            "unit": "ns/iter",
            "extra": "iterations: 90499\ncpu: 8058.002850860276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7855.360702502091,
            "unit": "ns/iter",
            "extra": "iterations: 87288\ncpu: 7855.316882045749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19284.551860986634,
            "unit": "ns/iter",
            "extra": "iterations: 35277\ncpu: 19284.26170025804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61164.811017396234,
            "unit": "ns/iter",
            "extra": "iterations: 11382\ncpu: 61162.97662976626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47930.46862390454,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 47930.19340475882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47905.233748644736,
            "unit": "ns/iter",
            "extra": "iterations: 14768\ncpu: 47904.95666305541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47557.98296934371,
            "unit": "ns/iter",
            "extra": "iterations: 14973\ncpu: 47557.283109597345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27184.411227608667,
            "unit": "ns/iter",
            "extra": "iterations: 25847\ncpu: 27183.93237126208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47573.8106119783,
            "unit": "ns/iter",
            "extra": "iterations: 15360\ncpu: 47573.561197916664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2020.164896565636,
            "unit": "ns/iter",
            "extra": "iterations: 340941\ncpu: 2020.153340314012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10155.481294010242,
            "unit": "ns/iter",
            "extra": "iterations: 67171\ncpu: 10155.3274478571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8290.263809745797,
            "unit": "ns/iter",
            "extra": "iterations: 85990\ncpu: 8290.069775555377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8293.770856481386,
            "unit": "ns/iter",
            "extra": "iterations: 84602\ncpu: 8293.392591191674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8357.440260226693,
            "unit": "ns/iter",
            "extra": "iterations: 82851\ncpu: 8357.359597349507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19189.295265319277,
            "unit": "ns/iter",
            "extra": "iterations: 36032\ncpu: 19189.19571492017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59123.811560113834,
            "unit": "ns/iter",
            "extra": "iterations: 11903\ncpu: 59122.43972107768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48121.99526196322,
            "unit": "ns/iter",
            "extra": "iterations: 14563\ncpu: 48120.78555242747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47505.03081886184,
            "unit": "ns/iter",
            "extra": "iterations: 14569\ncpu: 47504.77040291056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48680.92218115571,
            "unit": "ns/iter",
            "extra": "iterations: 14341\ncpu: 48680.663830974074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27089.50572926776,
            "unit": "ns/iter",
            "extra": "iterations: 25745\ncpu: 27088.89493105462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47145.13234116472,
            "unit": "ns/iter",
            "extra": "iterations: 14984\ncpu: 47144.84116390883 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702486183601,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 697.8055712175286,
            "unit": "ns/iter",
            "extra": "iterations: 998525\ncpu: 697.7808267194112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6281.325813960615,
            "unit": "ns/iter",
            "extra": "iterations: 130596\ncpu: 6280.995589451439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12312.930534541018,
            "unit": "ns/iter",
            "extra": "iterations: 68077\ncpu: 12312.685635383468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18101.259396059344,
            "unit": "ns/iter",
            "extra": "iterations: 46296\ncpu: 18101.071366856744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24200.604658528475,
            "unit": "ns/iter",
            "extra": "iterations: 34732\ncpu: 24200.359898652525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29830.35801987243,
            "unit": "ns/iter",
            "extra": "iterations: 28180\ncpu: 29829.19091554294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35515.808634129935,
            "unit": "ns/iter",
            "extra": "iterations: 23604\ncpu: 35514.87036095578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41350.07220900283,
            "unit": "ns/iter",
            "extra": "iterations: 20593\ncpu: 41348.909823726535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46373.82375222857,
            "unit": "ns/iter",
            "extra": "iterations: 17952\ncpu: 46371.81372549023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 677.6736256924926,
            "unit": "ns/iter",
            "extra": "iterations: 1032520\ncpu: 677.6398520125514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 539.8445774397886,
            "unit": "ns/iter",
            "extra": "iterations: 1302134\ncpu: 539.8349939407151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 528.9241582966405,
            "unit": "ns/iter",
            "extra": "iterations: 1320685\ncpu: 528.9074987601138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 528.6270679403053,
            "unit": "ns/iter",
            "extra": "iterations: 1331095\ncpu: 528.6216986766528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1079.3735771780323,
            "unit": "ns/iter",
            "extra": "iterations: 640189\ncpu: 1079.3454745395484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2918.5999579315762,
            "unit": "ns/iter",
            "extra": "iterations: 275741\ncpu: 2918.5431256142547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14465.815458422021,
            "unit": "ns/iter",
            "extra": "iterations: 56280\ncpu: 14465.66453447052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11264.475398427636,
            "unit": "ns/iter",
            "extra": "iterations: 71845\ncpu: 11264.12276428424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11984.063023791708,
            "unit": "ns/iter",
            "extra": "iterations: 68133\ncpu: 11983.689254839801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11476.143247007665,
            "unit": "ns/iter",
            "extra": "iterations: 70354\ncpu: 11475.812320550327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46923.41117900101,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 46922.148676171164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263836.1719457058,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 263827.2462831283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202696.92007992,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 202688.6863136864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 222521.56480042572,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 222516.07050285148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214584.2978395071,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 214580.32407407425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114322.11047494902,
            "unit": "ns/iter",
            "extra": "iterations: 7685\ncpu: 114319.29733246574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 215201.31539365512,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 215191.3513513516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5355.636630000049,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5355.466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27824.552261356162,
            "unit": "ns/iter",
            "extra": "iterations: 29783\ncpu: 27824.272235839173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21824.94907891621,
            "unit": "ns/iter",
            "extra": "iterations: 37293\ncpu: 21824.503257984074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22257.419779803724,
            "unit": "ns/iter",
            "extra": "iterations: 36967\ncpu: 22256.677577298695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21449.731323109943,
            "unit": "ns/iter",
            "extra": "iterations: 38470\ncpu: 21448.78866649342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51460.440900001464,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51459.00999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 303425.0949057768,
            "unit": "ns/iter",
            "extra": "iterations: 2866\ncpu: 303417.0621074675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223203.68081718768,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 223194.42823029915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229496.76271644945,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 229487.06709956672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 223483.2297019429,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 223480.8324768756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120920.16329418377,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 120916.32941842372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 227733.1819848237,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 227724.87562188957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 871444.4697674544,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 871413.581395347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 489207.14592510683,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 489193.94273127546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2980.3233793101194,
            "unit": "ns/iter",
            "extra": "iterations: 270209\ncpu: 2980.26897697708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14610.445406266768,
            "unit": "ns/iter",
            "extra": "iterations: 56490\ncpu: 14610.049566294982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11375.032086004137,
            "unit": "ns/iter",
            "extra": "iterations: 72555\ncpu: 11374.502101853763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10825.722000472504,
            "unit": "ns/iter",
            "extra": "iterations: 76162\ncpu: 10825.525852787545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10556.808495822395,
            "unit": "ns/iter",
            "extra": "iterations: 77544\ncpu: 10556.364128752713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 45854.298641288166,
            "unit": "ns/iter",
            "extra": "iterations: 18179\ncpu: 45853.02821937377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281467.9892642966,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 281465.1089359006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 220832.38083657567,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 220828.11284046608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213489.36149513585,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 213485.0230414742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211773.5029359252,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 211764.59024763785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110469.0085459133,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 110467.84438775477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206163.73547288813,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 206159.8346705561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 251.16854098146624,
            "unit": "ns/iter",
            "extra": "iterations: 2789286\ncpu: 251.16338016252215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1747.8222474037168,
            "unit": "ns/iter",
            "extra": "iterations: 401530\ncpu: 1747.7839762906806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1301.772011568761,
            "unit": "ns/iter",
            "extra": "iterations: 538694\ncpu: 1301.747931107457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1334.2848328940695,
            "unit": "ns/iter",
            "extra": "iterations: 524009\ncpu: 1334.2707854254431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1024.2247348788155,
            "unit": "ns/iter",
            "extra": "iterations: 682235\ncpu: 1024.2029505962105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11871.4107073925,
            "unit": "ns/iter",
            "extra": "iterations: 59585\ncpu: 11871.064865318454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14032.750501604887,
            "unit": "ns/iter",
            "extra": "iterations: 49840\ncpu: 14032.28130016058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3284.3507303162205,
            "unit": "ns/iter",
            "extra": "iterations: 212853\ncpu: 3284.282579996519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3272.5690785155866,
            "unit": "ns/iter",
            "extra": "iterations: 213308\ncpu: 3272.3484351266657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3231.732581802443,
            "unit": "ns/iter",
            "extra": "iterations: 217689\ncpu: 3231.6359577194967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5992.19224087012,
            "unit": "ns/iter",
            "extra": "iterations: 116843\ncpu: 5991.995241477893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6119.694946839019,
            "unit": "ns/iter",
            "extra": "iterations: 114839\ncpu: 6119.630961607114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.183159614021,
            "unit": "ns/iter",
            "extra": "iterations: 345289\ncpu: 2043.1612359501755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10298.98736382218,
            "unit": "ns/iter",
            "extra": "iterations: 67742\ncpu: 10298.746715479221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8181.214999940845,
            "unit": "ns/iter",
            "extra": "iterations: 84507\ncpu: 8180.993290496643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8227.91192075988,
            "unit": "ns/iter",
            "extra": "iterations: 86320\ncpu: 8227.68072289141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8085.684960765178,
            "unit": "ns/iter",
            "extra": "iterations: 86148\ncpu: 8085.601522960495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19485.52988962891,
            "unit": "ns/iter",
            "extra": "iterations: 35698\ncpu: 19485.338114179955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58181.67474077122,
            "unit": "ns/iter",
            "extra": "iterations: 12055\ncpu: 58180.47283284966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48856.94080190519,
            "unit": "ns/iter",
            "extra": "iterations: 14291\ncpu: 48855.797354978175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49103.25029806053,
            "unit": "ns/iter",
            "extra": "iterations: 14259\ncpu: 49102.742127779435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49283.28593529944,
            "unit": "ns/iter",
            "extra": "iterations: 14220\ncpu: 49282.15893108222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28057.720437429976,
            "unit": "ns/iter",
            "extra": "iterations: 24964\ncpu: 28056.91395609659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47708.17941295288,
            "unit": "ns/iter",
            "extra": "iterations: 14854\ncpu: 47707.10246398349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2068.5259435650164,
            "unit": "ns/iter",
            "extra": "iterations: 335112\ncpu: 2068.503962854243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11139.837446081961,
            "unit": "ns/iter",
            "extra": "iterations: 65609\ncpu: 11139.59365330987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8495.239974415419,
            "unit": "ns/iter",
            "extra": "iterations: 82863\ncpu: 8495.06534882882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8459.377288402035,
            "unit": "ns/iter",
            "extra": "iterations: 82645\ncpu: 8459.186883658922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8430.581123676293,
            "unit": "ns/iter",
            "extra": "iterations: 83120\ncpu: 8430.48845043303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 22061.355152926106,
            "unit": "ns/iter",
            "extra": "iterations: 35213\ncpu: 22060.62249737318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58650.481960983554,
            "unit": "ns/iter",
            "extra": "iterations: 11586\ncpu: 58646.27999309562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48352.40984748344,
            "unit": "ns/iter",
            "extra": "iterations: 14359\ncpu: 48347.99777143247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48390.93623369277,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 48387.503469331416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47022.56663918551,
            "unit": "ns/iter",
            "extra": "iterations: 14556\ncpu: 47022.093981862985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27401.92133707006,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 27401.060848679404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47640.56944633091,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 47637.53230852945 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488569039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 689.3712702800188,
            "unit": "ns/iter",
            "extra": "iterations: 1013682\ncpu: 689.3473495632753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6176.440277125147,
            "unit": "ns/iter",
            "extra": "iterations: 131926\ncpu: 6176.255628155179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11889.489454714556,
            "unit": "ns/iter",
            "extra": "iterations: 69083\ncpu: 11889.239031310162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17696.30633930244,
            "unit": "ns/iter",
            "extra": "iterations: 46961\ncpu: 17695.834841677137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23808.179766980036,
            "unit": "ns/iter",
            "extra": "iterations: 35190\ncpu: 23807.760727479403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29292.68092461385,
            "unit": "ns/iter",
            "extra": "iterations: 28639\ncpu: 29291.67917874226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34997.69028619106,
            "unit": "ns/iter",
            "extra": "iterations: 23935\ncpu: 34996.24817213287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40813.29811192757,
            "unit": "ns/iter",
            "extra": "iterations: 20603\ncpu: 40811.46434985194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45998.7241436103,
            "unit": "ns/iter",
            "extra": "iterations: 18216\ncpu: 45996.14624505926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 671.3836058223443,
            "unit": "ns/iter",
            "extra": "iterations: 1043712\ncpu: 671.3640352894287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 526.9736468797421,
            "unit": "ns/iter",
            "extra": "iterations: 1332328\ncpu: 526.9490695984772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 538.6117545961654,
            "unit": "ns/iter",
            "extra": "iterations: 1319637\ncpu: 538.6073594480907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 539.8032658496545,
            "unit": "ns/iter",
            "extra": "iterations: 1320269\ncpu: 539.7881795300814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1082.2349593558915,
            "unit": "ns/iter",
            "extra": "iterations: 647695\ncpu: 1082.1801928376774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2921.6246867236696,
            "unit": "ns/iter",
            "extra": "iterations: 274917\ncpu: 2921.5210408959797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14590.009583878003,
            "unit": "ns/iter",
            "extra": "iterations: 56762\ncpu: 14589.29037031815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11420.633815148276,
            "unit": "ns/iter",
            "extra": "iterations: 71950\ncpu: 11420.312717164697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11707.198738988305,
            "unit": "ns/iter",
            "extra": "iterations: 69468\ncpu: 11706.732596303333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11019.202038710531,
            "unit": "ns/iter",
            "extra": "iterations: 73674\ncpu: 11018.788174932837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 46772.60995990862,
            "unit": "ns/iter",
            "extra": "iterations: 17711\ncpu: 46770.63406922243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 287598.3135922273,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 287589.57928802643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203312.74936258246,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 203304.41101478838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218648.70852957966,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 218641.57509157516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213609.75354107824,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 213599.8197270148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114990.29162262988,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 114988.41173361542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 218564.8035580042,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 218553.94637935387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5447.458930000266,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5447.308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29204.255404883465,
            "unit": "ns/iter",
            "extra": "iterations: 28539\ncpu: 29203.272714531016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22103.31140513416,
            "unit": "ns/iter",
            "extra": "iterations: 37790\ncpu: 22102.900238158316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22328.669222820048,
            "unit": "ns/iter",
            "extra": "iterations: 36774\ncpu: 22328.32164028933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21569.717283666552,
            "unit": "ns/iter",
            "extra": "iterations: 38979\ncpu: 21569.845301316098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51445.940199994315,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51446.26999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 305014.28105483635,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 305011.8667591947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235422.5517427674,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 235420.3188327484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235774.92330621456,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 235773.08943089447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 232890.67860961807,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 232887.05882353013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121016.78756621481,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 121016.71313074925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215331.9035130917,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 215329.49035131244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 860134.4802207422,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 860126.2189512415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 491142.4746235185,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 491145.17568321043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2978.9060600546186,
            "unit": "ns/iter",
            "extra": "iterations: 269321\ncpu: 2978.898786206806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14413.27702315995,
            "unit": "ns/iter",
            "extra": "iterations: 57645\ncpu: 14413.113019342614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11170.688798919844,
            "unit": "ns/iter",
            "extra": "iterations: 74100\ncpu: 11170.603238866455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11463.720676300252,
            "unit": "ns/iter",
            "extra": "iterations: 72808\ncpu: 11463.791066915806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10976.623418255358,
            "unit": "ns/iter",
            "extra": "iterations: 77051\ncpu: 10976.68816757729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 46210.25846692761,
            "unit": "ns/iter",
            "extra": "iterations: 18277\ncpu: 46208.88001313152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283905.18239595555,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 283901.84302510164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 229514.9747538419,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 229516.38475132541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 223487.08539664885,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 223486.00303183447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 221711.38583270463,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 221712.6601356446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 111378.85910478156,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 111376.98372329655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 211183.27268373762,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 211182.90639214794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 258.105531870796,
            "unit": "ns/iter",
            "extra": "iterations: 2761507\ncpu: 258.1038541636846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1726.5955239662176,
            "unit": "ns/iter",
            "extra": "iterations: 404778\ncpu: 1726.6052008755378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1353.935424907537,
            "unit": "ns/iter",
            "extra": "iterations: 520278\ncpu: 1353.9219417311508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1352.474314182646,
            "unit": "ns/iter",
            "extra": "iterations: 518068\ncpu: 1352.4822996209014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1029.467366447822,
            "unit": "ns/iter",
            "extra": "iterations: 674306\ncpu: 1029.4735624479172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11821.84172795673,
            "unit": "ns/iter",
            "extra": "iterations: 59145\ncpu: 11821.773607236535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13801.589212709783,
            "unit": "ns/iter",
            "extra": "iterations: 49410\ncpu: 13801.66767860761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3452.92182389894,
            "unit": "ns/iter",
            "extra": "iterations: 206700\ncpu: 3452.940977261734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3374.665248116952,
            "unit": "ns/iter",
            "extra": "iterations: 207019\ncpu: 3374.6839662059947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3362.3814869047364,
            "unit": "ns/iter",
            "extra": "iterations: 208285\ncpu: 3362.3434236742946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6191.523010703573,
            "unit": "ns/iter",
            "extra": "iterations: 113143\ncpu: 6191.5089753674765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6049.620775970192,
            "unit": "ns/iter",
            "extra": "iterations: 109463\ncpu: 6049.54185432517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2081.412841527461,
            "unit": "ns/iter",
            "extra": "iterations: 336393\ncpu: 2081.424702654336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10507.319516458801,
            "unit": "ns/iter",
            "extra": "iterations: 66923\ncpu: 10507.315870478145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8490.380122035933,
            "unit": "ns/iter",
            "extra": "iterations: 82926\ncpu: 8490.339579866304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8413.457007733788,
            "unit": "ns/iter",
            "extra": "iterations: 82887\ncpu: 8413.430332862732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8420.452360872647,
            "unit": "ns/iter",
            "extra": "iterations: 84185\ncpu: 8420.431193205373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 20145.92134604615,
            "unit": "ns/iter",
            "extra": "iterations: 34709\ncpu: 20146.039932006126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62689.18769230195,
            "unit": "ns/iter",
            "extra": "iterations: 11050\ncpu: 62689.53846153859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48797.99090460119,
            "unit": "ns/iter",
            "extra": "iterations: 14183\ncpu: 48798.27257984922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49589.83464567003,
            "unit": "ns/iter",
            "extra": "iterations: 14224\ncpu: 49590.11529808772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49503.40054069453,
            "unit": "ns/iter",
            "extra": "iterations: 14056\ncpu: 49503.6852589641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27860.87303685911,
            "unit": "ns/iter",
            "extra": "iterations: 24960\ncpu: 27860.681089743928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 49056.52395942177,
            "unit": "ns/iter",
            "extra": "iterations: 14295\ncpu: 49055.809723680024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2130.2716299745593,
            "unit": "ns/iter",
            "extra": "iterations: 328907\ncpu: 2130.2869808182695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11074.010617099017,
            "unit": "ns/iter",
            "extra": "iterations: 64236\ncpu: 11074.076841646503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8722.352606115708,
            "unit": "ns/iter",
            "extra": "iterations: 80407\ncpu: 8722.017983508902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8673.746523615033,
            "unit": "ns/iter",
            "extra": "iterations: 80903\ncpu: 8673.798252227893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8701.84084739811,
            "unit": "ns/iter",
            "extra": "iterations: 81048\ncpu: 8701.74587898537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20252.901850779326,
            "unit": "ns/iter",
            "extra": "iterations: 34580\ncpu: 20253.042220937034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61444.12772530031,
            "unit": "ns/iter",
            "extra": "iterations: 11329\ncpu: 61443.16356253804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48714.304429589596,
            "unit": "ns/iter",
            "extra": "iterations: 14358\ncpu: 48713.91558712921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48592.327366800455,
            "unit": "ns/iter",
            "extra": "iterations: 14302\ncpu: 48592.23185568466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48439.41843432911,
            "unit": "ns/iter",
            "extra": "iterations: 14473\ncpu: 48439.68769432749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28277.788016563525,
            "unit": "ns/iter",
            "extra": "iterations: 24634\ncpu: 28277.579767800864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48091.07127797162,
            "unit": "ns/iter",
            "extra": "iterations: 14703\ncpu: 48090.5461470448 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}