window.BENCHMARK_DATA = {
  "lastUpdate": 1702397893664,
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
      }
    ]
  }
}