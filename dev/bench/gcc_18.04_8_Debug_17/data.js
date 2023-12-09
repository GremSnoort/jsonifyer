window.BENCHMARK_DATA = {
  "lastUpdate": 1702083168800,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Debug c++-17": [
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079211611,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12111.229176862882,
            "unit": "ns/iter",
            "extra": "iterations: 55167\ncpu: 12110.818061522286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9673.856607620133,
            "unit": "ns/iter",
            "extra": "iterations: 72598\ncpu: 9673.57778451197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9666.961328028166,
            "unit": "ns/iter",
            "extra": "iterations: 72378\ncpu: 9666.574097101324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9619.633478821945,
            "unit": "ns/iter",
            "extra": "iterations: 72858\ncpu: 9619.388399352167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20379.382775788672,
            "unit": "ns/iter",
            "extra": "iterations: 35752\ncpu: 20378.69210114119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51831.697099999015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51828.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293627.07095926226,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 293600.32851511176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 224058.87028737084,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 224053.51964144493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 222476.0226917079,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 222473.8132498696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223568.8279118576,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 223564.50682056637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 605445.8483827563,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 605424.7304582213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3956238.894958023,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3956114.705882357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3175071.583617808,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175017.7474402743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3191360.2191780857,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3191277.3972602747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3184660.2534246487,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3184559.246575347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1910667.907216488,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1910627.2164948448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3114150.138047062,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3114069.023569018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5361.599775639134,
            "unit": "ns/iter",
            "extra": "iterations: 131039\ncpu: 5361.519089736647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4367.974127560978,
            "unit": "ns/iter",
            "extra": "iterations: 160441\ncpu: 4367.86731571107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4396.2107978984595,
            "unit": "ns/iter",
            "extra": "iterations: 159494\ncpu: 4395.945929000462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4387.25213806601,
            "unit": "ns/iter",
            "extra": "iterations: 159373\ncpu: 4387.006582043382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9216.726728451908,
            "unit": "ns/iter",
            "extra": "iterations: 78336\ncpu: 9216.056474673185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31246.33021299195,
            "unit": "ns/iter",
            "extra": "iterations: 26386\ncpu: 31245.30053816429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140559.1378740315,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 140549.13208794847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112291.342909858,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 112287.07169214544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109735.91243638308,
            "unit": "ns/iter",
            "extra": "iterations: 7663\ncpu: 109730.27534908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112086.28422579858,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 112081.61434977566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281862.8073424346,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 281848.7004548403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2179698.5804195786,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2179588.34498834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1778424.2606177346,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1778270.0772200783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1801756.2235067228,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1801645.0867052064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1774600.8761904854,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774493.9047619011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081063.2674418634,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1081013.2558139495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1741657.9514018695,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1741541.1214953298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6129.5514848373705,
            "unit": "ns/iter",
            "extra": "iterations: 114558\ncpu: 6129.234972677609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5077.758905482716,
            "unit": "ns/iter",
            "extra": "iterations: 137668\ncpu: 5077.449370950378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5042.28467845662,
            "unit": "ns/iter",
            "extra": "iterations: 139157\ncpu: 5042.03238069231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5023.439628748946,
            "unit": "ns/iter",
            "extra": "iterations: 139636\ncpu: 5023.451688676268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10966.346908668267,
            "unit": "ns/iter",
            "extra": "iterations: 67107\ncpu: 10966.171934373408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27893.732420340744,
            "unit": "ns/iter",
            "extra": "iterations: 29281\ncpu: 27893.784365288033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136460.8804641528,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 136457.2722937531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109932.34459286014,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 109930.69612124354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109894.48920863513,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 109891.63669064718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109765.72322794335,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 109762.97807241205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 320935.0048543699,
            "unit": "ns/iter",
            "extra": "iterations: 2884\ncpu: 320930.99861303705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1743959.6308851212,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1743922.9755178944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1391757.046546543,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1391716.9669669706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400352.9803328335,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1400322.9954614178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394064.575301173,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1394032.8313253073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 821425.2927046319,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 821408.0071174387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1353974.5915080525,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1353916.544655933 ns\nthreads: 1"
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
          "id": "d661ce52eef5dbad84699818ef2a482adbf7e5f8",
          "message": "Add more BMs and Fixes",
          "timestamp": "2023-12-09T03:49:20+03:00",
          "tree_id": "613bf928395c34e1ed6771def2c6aa8cfc3bb289",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d661ce52eef5dbad84699818ef2a482adbf7e5f8"
        },
        "date": 1702083168381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15925.825437841168,
            "unit": "ns/iter",
            "extra": "iterations: 45279\ncpu: 15924.554429205595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129837.58567998509,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 129830.86662300807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248215.40695067027,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 248193.58183856506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 358806.5885737749,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 358784.01150842576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 467041.8180839637,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 467001.6684607103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 611672.8017356417,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 611627.1028037382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 564033.4060000214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564035.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 646041.4720000074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645961.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 734250.5091926376,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 734202.9576338934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12236.678170369209,
            "unit": "ns/iter",
            "extra": "iterations: 57170\ncpu: 12235.760013993364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10165.011019643696,
            "unit": "ns/iter",
            "extra": "iterations: 68877\ncpu: 10164.561464639866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10157.052489593558,
            "unit": "ns/iter",
            "extra": "iterations: 68947\ncpu: 10156.913281216002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10265.631767585171,
            "unit": "ns/iter",
            "extra": "iterations: 68636\ncpu: 10264.788157818066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16594.065875965116,
            "unit": "ns/iter",
            "extra": "iterations: 41988\ncpu: 16592.847956559024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51619.274999998765,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51615.11000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282589.287462785,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 282568.01190869976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221442.53267377763,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 221431.9448060403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 219443.0393417329,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 219427.82206222633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 216644.37944358695,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 216632.99845440526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 606102.4323056187,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 606057.8418230559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3955782.368644053,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3955533.4745762567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195488.8586206944,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3195253.7931034453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3195053.841924399,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3194827.8350515505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3178896.9862542567,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3178656.013745713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1825301.1735700122,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1825191.1242603515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3104067.419463037,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3103871.8120805398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7188.215108742639,
            "unit": "ns/iter",
            "extra": "iterations: 97202\ncpu: 7187.814036748238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71493.76087893167,
            "unit": "ns/iter",
            "extra": "iterations: 11605\ncpu: 71488.30676432587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136585.34339975155,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 136576.63449564143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200596.05761221578,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 200578.32022211995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264990.9911396309,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 264974.24381301535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 330726.86936765787,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 330702.83983339736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393624.1217745633,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 393621.50294250983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 459611.25460284774,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 459582.37769595016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 521137.13900538685,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 521101.0185739929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5497.166381680998,
            "unit": "ns/iter",
            "extra": "iterations: 126907\ncpu: 5496.740920516593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4562.6504455956165,
            "unit": "ns/iter",
            "extra": "iterations: 153278\ncpu: 4562.281605970843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4683.4974273359885,
            "unit": "ns/iter",
            "extra": "iterations: 153343\ncpu: 4683.50299655024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4537.62103061545,
            "unit": "ns/iter",
            "extra": "iterations: 154432\ncpu: 4537.453377538321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7653.872881078061,
            "unit": "ns/iter",
            "extra": "iterations: 91497\ncpu: 7653.815972108358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32473.702980879618,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 32473.381893036712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139326.90329419784,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 139321.29810828465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110070.01896949478,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110064.00922840275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107790.59647987467,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 107783.65471722504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108011.56787932786,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 108004.65204715396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286870.52585078945,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 286859.2277486916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2151637.609195381,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2151452.8735632333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1764978.2932330512,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1764887.4060150322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1756840.4161959165,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1756701.1299434989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1755828.4600760115,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1755723.7642585577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1036983.141425402,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1036901.0022271724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1701140.8339483272,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1701079.3357933569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7730.341323180344,
            "unit": "ns/iter",
            "extra": "iterations: 90615\ncpu: 7729.661755779916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56505.94399999704,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56506.079999999776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103972.11672305428,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 103963.73852102482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150947.50341924798,
            "unit": "ns/iter",
            "extra": "iterations: 5703\ncpu: 150939.45291951645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198897.60508823607,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 198886.24799450056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246197.14700028763,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 246184.75973841405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 294546.92265943973,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 294525.5088195384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 342524.8878394476,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 342503.0303030285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 388363.53695457976,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 388331.7898486221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6360.49979976327,
            "unit": "ns/iter",
            "extra": "iterations: 109870\ncpu: 6360.191134977717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5340.468769759244,
            "unit": "ns/iter",
            "extra": "iterations: 131267\ncpu: 5340.387911660995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5289.272405365832,
            "unit": "ns/iter",
            "extra": "iterations: 132167\ncpu: 5288.8777077485065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5365.74374195718,
            "unit": "ns/iter",
            "extra": "iterations: 130552\ncpu: 5365.493443225693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8734.876681586384,
            "unit": "ns/iter",
            "extra": "iterations: 80207\ncpu: 8734.255114890251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27491.179791127222,
            "unit": "ns/iter",
            "extra": "iterations: 29779\ncpu: 27490.16085160684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143316.6856522464,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 143307.28244529795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112773.14487027693,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 112768.61583036902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113785.57629374109,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 113778.7415192236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108290.92466971754,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 108285.91209349713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 319190.1787538397,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 319170.85461355466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1801909.3294347383,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1801829.434697837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1456427.8024883221,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1456306.0653188042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1435587.270479135,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435529.0571870331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1418639.526717533,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1418555.5725190884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 781221.8067510816,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 781179.409282706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1382124.2708332585,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1382037.7976190397 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}