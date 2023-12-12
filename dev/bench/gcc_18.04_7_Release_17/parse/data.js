window.BENCHMARK_DATA = {
  "lastUpdate": 1702412517812,
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
      }
    ]
  }
}