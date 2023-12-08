window.BENCHMARK_DATA = {
  "lastUpdate": 1702079212040,
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
      }
    ]
  }
}