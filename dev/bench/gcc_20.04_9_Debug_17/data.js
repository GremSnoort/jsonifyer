window.BENCHMARK_DATA = {
  "lastUpdate": 1702083167233,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702079203358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10981.434672581867,
            "unit": "ns/iter",
            "extra": "iterations: 64016\ncpu: 10981.342164458885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8945.561206408878,
            "unit": "ns/iter",
            "extra": "iterations: 77884\ncpu: 8945.136356632942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 8981.713641271088,
            "unit": "ns/iter",
            "extra": "iterations: 77808\ncpu: 8981.611145383507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 8968.535926457007,
            "unit": "ns/iter",
            "extra": "iterations: 78104\ncpu: 8968.333247977052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17348.937161300462,
            "unit": "ns/iter",
            "extra": "iterations: 41519\ncpu: 17348.392302319415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50109.19439999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50108.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271352.379124363,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 271346.6370558376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221474.74709976808,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221471.77107501932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216951.0522407063,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 216947.45198463512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219076.2671461643,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219067.58284099674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 453267.6022668658,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 453269.24265842326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3938111.126582382,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937971.7299578055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195976.931972869,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3195939.455782313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3169687.6326532066,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169493.8775510187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3148554.5945945494,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148421.6216216222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1865551.9176707414,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865483.9357429738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3189373.9867108786,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3189149.501661131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4846.999598787768,
            "unit": "ns/iter",
            "extra": "iterations: 144562\ncpu: 4847.0061288582065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3938.9083669391093,
            "unit": "ns/iter",
            "extra": "iterations: 177054\ncpu: 3938.7926847176655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3944.666191501259,
            "unit": "ns/iter",
            "extra": "iterations: 177482\ncpu: 3944.5836760911047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 3992.955144637647,
            "unit": "ns/iter",
            "extra": "iterations: 175542\ncpu: 3992.8359025190634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8841.604052153094,
            "unit": "ns/iter",
            "extra": "iterations: 84597\ncpu: 8841.340709481416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33278.85021760154,
            "unit": "ns/iter",
            "extra": "iterations: 24816\ncpu: 33277.7361379755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148876.93339145192,
            "unit": "ns/iter",
            "extra": "iterations: 5735\ncpu: 148871.33391455948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120935.09873949813,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 120927.92717086842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117816.00123915402,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 117812.98361558572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119312.92768045093,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 119309.09600560625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264884.17129771627,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 264876.9160305349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2183969.9440559316,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2182074.1258741273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1799366.5598455367,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799310.617760616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1787038.3378119497,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786958.73320537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777679.2566539547,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1777587.8326996164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072823.9571759726,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1072802.6620370366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735576.3962616895,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1735531.7757009421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.505232953421,
            "unit": "ns/iter",
            "extra": "iterations: 120582\ncpu: 5790.224079879236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4748.181862645061,
            "unit": "ns/iter",
            "extra": "iterations: 147210\ncpu: 4748.036138849277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4751.629220792293,
            "unit": "ns/iter",
            "extra": "iterations: 147573\ncpu: 4751.558211868015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4737.748721110544,
            "unit": "ns/iter",
            "extra": "iterations: 147589\ncpu: 4737.6084938579315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8447.397503408436,
            "unit": "ns/iter",
            "extra": "iterations: 85076\ncpu: 8446.966241948408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25342.121857283644,
            "unit": "ns/iter",
            "extra": "iterations: 32456\ncpu: 25341.38217894989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123378.9419039398,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 123374.76272648858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99396.58310023304,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99395.11655011647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99367.467076279,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99365.96336656623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99271.47022635076,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99269.33255948944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186981.9271579026,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 186978.2947368426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761868.2419658909,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761801.512287332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1393707.5172413583,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393672.5637181362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384175.8897168513,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384130.5514157948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384930.90922619,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384868.303571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 829290.4464438299,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 829253.8131962331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1348640.4912790349,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1348592.151162794 ns\nthreads: 1"
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079203358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10981.434672581867,
            "unit": "ns/iter",
            "extra": "iterations: 64016\ncpu: 10981.342164458885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8945.561206408878,
            "unit": "ns/iter",
            "extra": "iterations: 77884\ncpu: 8945.136356632942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 8981.713641271088,
            "unit": "ns/iter",
            "extra": "iterations: 77808\ncpu: 8981.611145383507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 8968.535926457007,
            "unit": "ns/iter",
            "extra": "iterations: 78104\ncpu: 8968.333247977052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17348.937161300462,
            "unit": "ns/iter",
            "extra": "iterations: 41519\ncpu: 17348.392302319415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50109.19439999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50108.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271352.379124363,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 271346.6370558376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221474.74709976808,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221471.77107501932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216951.0522407063,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 216947.45198463512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219076.2671461643,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219067.58284099674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 453267.6022668658,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 453269.24265842326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3938111.126582382,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937971.7299578055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195976.931972869,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3195939.455782313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3169687.6326532066,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169493.8775510187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3148554.5945945494,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148421.6216216222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1865551.9176707414,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865483.9357429738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3189373.9867108786,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3189149.501661131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4846.999598787768,
            "unit": "ns/iter",
            "extra": "iterations: 144562\ncpu: 4847.0061288582065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3938.9083669391093,
            "unit": "ns/iter",
            "extra": "iterations: 177054\ncpu: 3938.7926847176655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3944.666191501259,
            "unit": "ns/iter",
            "extra": "iterations: 177482\ncpu: 3944.5836760911047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 3992.955144637647,
            "unit": "ns/iter",
            "extra": "iterations: 175542\ncpu: 3992.8359025190634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8841.604052153094,
            "unit": "ns/iter",
            "extra": "iterations: 84597\ncpu: 8841.340709481416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33278.85021760154,
            "unit": "ns/iter",
            "extra": "iterations: 24816\ncpu: 33277.7361379755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148876.93339145192,
            "unit": "ns/iter",
            "extra": "iterations: 5735\ncpu: 148871.33391455948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120935.09873949813,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 120927.92717086842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117816.00123915402,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 117812.98361558572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119312.92768045093,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 119309.09600560625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264884.17129771627,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 264876.9160305349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2183969.9440559316,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2182074.1258741273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1799366.5598455367,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799310.617760616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1787038.3378119497,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786958.73320537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777679.2566539547,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1777587.8326996164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072823.9571759726,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1072802.6620370366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735576.3962616895,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1735531.7757009421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.505232953421,
            "unit": "ns/iter",
            "extra": "iterations: 120582\ncpu: 5790.224079879236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4748.181862645061,
            "unit": "ns/iter",
            "extra": "iterations: 147210\ncpu: 4748.036138849277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4751.629220792293,
            "unit": "ns/iter",
            "extra": "iterations: 147573\ncpu: 4751.558211868015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4737.748721110544,
            "unit": "ns/iter",
            "extra": "iterations: 147589\ncpu: 4737.6084938579315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8447.397503408436,
            "unit": "ns/iter",
            "extra": "iterations: 85076\ncpu: 8446.966241948408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25342.121857283644,
            "unit": "ns/iter",
            "extra": "iterations: 32456\ncpu: 25341.38217894989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123378.9419039398,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 123374.76272648858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99396.58310023304,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99395.11655011647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99367.467076279,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99365.96336656623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99271.47022635076,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99269.33255948944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186981.9271579026,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 186978.2947368426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761868.2419658909,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761801.512287332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1393707.5172413583,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393672.5637181362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384175.8897168513,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384130.5514157948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384930.90922619,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384868.303571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 829290.4464438299,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 829253.8131962331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1348640.4912790349,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1348592.151162794 ns\nthreads: 1"
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079203358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10981.434672581867,
            "unit": "ns/iter",
            "extra": "iterations: 64016\ncpu: 10981.342164458885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8945.561206408878,
            "unit": "ns/iter",
            "extra": "iterations: 77884\ncpu: 8945.136356632942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 8981.713641271088,
            "unit": "ns/iter",
            "extra": "iterations: 77808\ncpu: 8981.611145383507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 8968.535926457007,
            "unit": "ns/iter",
            "extra": "iterations: 78104\ncpu: 8968.333247977052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17348.937161300462,
            "unit": "ns/iter",
            "extra": "iterations: 41519\ncpu: 17348.392302319415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50109.19439999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50108.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271352.379124363,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 271346.6370558376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221474.74709976808,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221471.77107501932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216951.0522407063,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 216947.45198463512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219076.2671461643,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219067.58284099674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 453267.6022668658,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 453269.24265842326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3938111.126582382,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937971.7299578055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195976.931972869,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3195939.455782313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3169687.6326532066,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169493.8775510187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3148554.5945945494,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148421.6216216222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1865551.9176707414,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865483.9357429738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3189373.9867108786,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3189149.501661131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4846.999598787768,
            "unit": "ns/iter",
            "extra": "iterations: 144562\ncpu: 4847.0061288582065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3938.9083669391093,
            "unit": "ns/iter",
            "extra": "iterations: 177054\ncpu: 3938.7926847176655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3944.666191501259,
            "unit": "ns/iter",
            "extra": "iterations: 177482\ncpu: 3944.5836760911047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 3992.955144637647,
            "unit": "ns/iter",
            "extra": "iterations: 175542\ncpu: 3992.8359025190634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8841.604052153094,
            "unit": "ns/iter",
            "extra": "iterations: 84597\ncpu: 8841.340709481416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33278.85021760154,
            "unit": "ns/iter",
            "extra": "iterations: 24816\ncpu: 33277.7361379755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148876.93339145192,
            "unit": "ns/iter",
            "extra": "iterations: 5735\ncpu: 148871.33391455948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120935.09873949813,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 120927.92717086842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117816.00123915402,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 117812.98361558572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119312.92768045093,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 119309.09600560625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264884.17129771627,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 264876.9160305349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2183969.9440559316,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2182074.1258741273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1799366.5598455367,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799310.617760616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1787038.3378119497,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786958.73320537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777679.2566539547,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1777587.8326996164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072823.9571759726,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1072802.6620370366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735576.3962616895,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1735531.7757009421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.505232953421,
            "unit": "ns/iter",
            "extra": "iterations: 120582\ncpu: 5790.224079879236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4748.181862645061,
            "unit": "ns/iter",
            "extra": "iterations: 147210\ncpu: 4748.036138849277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4751.629220792293,
            "unit": "ns/iter",
            "extra": "iterations: 147573\ncpu: 4751.558211868015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4737.748721110544,
            "unit": "ns/iter",
            "extra": "iterations: 147589\ncpu: 4737.6084938579315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8447.397503408436,
            "unit": "ns/iter",
            "extra": "iterations: 85076\ncpu: 8446.966241948408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25342.121857283644,
            "unit": "ns/iter",
            "extra": "iterations: 32456\ncpu: 25341.38217894989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123378.9419039398,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 123374.76272648858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99396.58310023304,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99395.11655011647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99367.467076279,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99365.96336656623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99271.47022635076,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99269.33255948944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186981.9271579026,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 186978.2947368426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761868.2419658909,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761801.512287332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1393707.5172413583,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393672.5637181362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384175.8897168513,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384130.5514157948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384930.90922619,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384868.303571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 829290.4464438299,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 829253.8131962331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1348640.4912790349,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1348592.151162794 ns\nthreads: 1"
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079203358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10981.434672581867,
            "unit": "ns/iter",
            "extra": "iterations: 64016\ncpu: 10981.342164458885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8945.561206408878,
            "unit": "ns/iter",
            "extra": "iterations: 77884\ncpu: 8945.136356632942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 8981.713641271088,
            "unit": "ns/iter",
            "extra": "iterations: 77808\ncpu: 8981.611145383507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 8968.535926457007,
            "unit": "ns/iter",
            "extra": "iterations: 78104\ncpu: 8968.333247977052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17348.937161300462,
            "unit": "ns/iter",
            "extra": "iterations: 41519\ncpu: 17348.392302319415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50109.19439999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50108.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271352.379124363,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 271346.6370558376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221474.74709976808,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221471.77107501932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216951.0522407063,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 216947.45198463512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219076.2671461643,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219067.58284099674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 453267.6022668658,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 453269.24265842326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3938111.126582382,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937971.7299578055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195976.931972869,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3195939.455782313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3169687.6326532066,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169493.8775510187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3148554.5945945494,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148421.6216216222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1865551.9176707414,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865483.9357429738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3189373.9867108786,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3189149.501661131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4846.999598787768,
            "unit": "ns/iter",
            "extra": "iterations: 144562\ncpu: 4847.0061288582065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3938.9083669391093,
            "unit": "ns/iter",
            "extra": "iterations: 177054\ncpu: 3938.7926847176655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3944.666191501259,
            "unit": "ns/iter",
            "extra": "iterations: 177482\ncpu: 3944.5836760911047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 3992.955144637647,
            "unit": "ns/iter",
            "extra": "iterations: 175542\ncpu: 3992.8359025190634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8841.604052153094,
            "unit": "ns/iter",
            "extra": "iterations: 84597\ncpu: 8841.340709481416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33278.85021760154,
            "unit": "ns/iter",
            "extra": "iterations: 24816\ncpu: 33277.7361379755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148876.93339145192,
            "unit": "ns/iter",
            "extra": "iterations: 5735\ncpu: 148871.33391455948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120935.09873949813,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 120927.92717086842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117816.00123915402,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 117812.98361558572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119312.92768045093,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 119309.09600560625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264884.17129771627,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 264876.9160305349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2183969.9440559316,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2182074.1258741273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1799366.5598455367,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799310.617760616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1787038.3378119497,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786958.73320537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777679.2566539547,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1777587.8326996164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072823.9571759726,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1072802.6620370366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735576.3962616895,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1735531.7757009421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.505232953421,
            "unit": "ns/iter",
            "extra": "iterations: 120582\ncpu: 5790.224079879236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4748.181862645061,
            "unit": "ns/iter",
            "extra": "iterations: 147210\ncpu: 4748.036138849277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4751.629220792293,
            "unit": "ns/iter",
            "extra": "iterations: 147573\ncpu: 4751.558211868015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4737.748721110544,
            "unit": "ns/iter",
            "extra": "iterations: 147589\ncpu: 4737.6084938579315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8447.397503408436,
            "unit": "ns/iter",
            "extra": "iterations: 85076\ncpu: 8446.966241948408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25342.121857283644,
            "unit": "ns/iter",
            "extra": "iterations: 32456\ncpu: 25341.38217894989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123378.9419039398,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 123374.76272648858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99396.58310023304,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99395.11655011647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99367.467076279,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99365.96336656623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99271.47022635076,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99269.33255948944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186981.9271579026,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 186978.2947368426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761868.2419658909,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761801.512287332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1393707.5172413583,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393672.5637181362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384175.8897168513,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384130.5514157948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384930.90922619,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384868.303571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 829290.4464438299,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 829253.8131962331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1348640.4912790349,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1348592.151162794 ns\nthreads: 1"
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
        "date": 1702083166794,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13799.01994365971,
            "unit": "ns/iter",
            "extra": "iterations: 48988\ncpu: 13798.081162733732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119500.08168736067,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 119497.12189616253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 226042.17419523385,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 226033.30737279338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337999.93501530454,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 337994.7247706422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 438315.0412474862,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 438234.9094567407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 540692.7303860737,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 540678.9539227893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 520689.77400000446,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520664.40000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 602715.9989999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602692.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 695521.2918838424,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 695494.489947878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10923.589860536566,
            "unit": "ns/iter",
            "extra": "iterations: 64461\ncpu: 10923.23885760382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9104.72105074615,
            "unit": "ns/iter",
            "extra": "iterations: 78154\ncpu: 9104.704813573204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9017.1486753048,
            "unit": "ns/iter",
            "extra": "iterations: 77565\ncpu: 9016.996067814092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 8960.684894000833,
            "unit": "ns/iter",
            "extra": "iterations: 78161\ncpu: 8960.674761070113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14799.51319431299,
            "unit": "ns/iter",
            "extra": "iterations: 47331\ncpu: 14798.833745325472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59798.7396659693,
            "unit": "ns/iter",
            "extra": "iterations: 14370\ncpu: 59798.75434933888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248299.73037037268,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 248289.80740740764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197161.4472078806,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 197151.03237916483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195426.45494252926,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 195417.97701149405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194150.7765324693,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 194141.62854528826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 498573.0407839095,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 498560.80508474563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3713395.907173048,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3713172.573839659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3014580.3064515935,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3014489.3548387056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3011698.2459548446,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3008596.4401294426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3003708.6205787375,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3003513.8263665545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1726098.9126393504,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1726046.8401487006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2928917.481132067,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2928687.421383641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6503.161642315498,
            "unit": "ns/iter",
            "extra": "iterations: 108140\ncpu: 6503.0035139633865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68207.64010592471,
            "unit": "ns/iter",
            "extra": "iterations: 12462\ncpu: 68205.0553683198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 131664.20807594588,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 131658.79162272144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 193973.4181371531,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 193967.03149430404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 256072.8656277592,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 256070.39106145207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317695.5516234969,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 317678.5479751928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 379567.8097731318,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379555.80279232137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442020.87188612256,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 441986.0701575997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 502814.00000000384,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 502791.36939010327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5197.932030000061,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5197.593999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3948.5181970552135,
            "unit": "ns/iter",
            "extra": "iterations: 177199\ncpu: 3948.350159989592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3943.138255710002,
            "unit": "ns/iter",
            "extra": "iterations: 176622\ncpu: 3943.0931594025833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4003.7940010539855,
            "unit": "ns/iter",
            "extra": "iterations: 174564\ncpu: 4003.7917325450717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7254.247544591578,
            "unit": "ns/iter",
            "extra": "iterations: 96318\ncpu: 7253.997176021075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32866.362386965615,
            "unit": "ns/iter",
            "extra": "iterations: 25103\ncpu: 32866.32673385645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131035.98262607925,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 131029.87392373985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106749.3970680335,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 106749.5050745517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104218.2945565712,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 104210.85015290524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106592.18761749694,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 106588.48226594756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 272846.1348314536,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 272832.303370786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2090709.9955256884,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2090608.2774049232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1731988.4282868095,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1731856.3745019995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1708248.17614682,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1708213.9449541303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1722214.4148148657,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1722145.7407407411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1017953.7197382731,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 1017944.1657579059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1672500.4991023452,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672296.0502692976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6983.618462797373,
            "unit": "ns/iter",
            "extra": "iterations: 100234\ncpu: 6983.6143424387055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50321.56060000261,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50319.40000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93158.52828140534,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 93154.84746498725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135270.39940411045,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 135264.63854477077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177815.96687924583,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 177812.69286154985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220079.67555894612,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 220071.77337398374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262007.06696832424,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 262002.3831070889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304781.35283811105,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 304763.0693763152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347259.3463686989,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 347258.85873902653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5721.827205159896,
            "unit": "ns/iter",
            "extra": "iterations: 122168\ncpu: 5721.615316613243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4689.691620906709,
            "unit": "ns/iter",
            "extra": "iterations: 148966\ncpu: 4689.6936213632125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4734.123439319706,
            "unit": "ns/iter",
            "extra": "iterations: 147692\ncpu: 4733.932779026596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4692.310169491267,
            "unit": "ns/iter",
            "extra": "iterations: 148680\ncpu: 4692.204062415968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7236.889695465595,
            "unit": "ns/iter",
            "extra": "iterations: 96705\ncpu: 7236.710614756173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23388.17394794179,
            "unit": "ns/iter",
            "extra": "iterations: 34884\ncpu: 23387.507166609197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115118.333019504,
            "unit": "ns/iter",
            "extra": "iterations: 7435\ncpu: 115112.11835911105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89875.6591768181,
            "unit": "ns/iter",
            "extra": "iterations: 9524\ncpu: 89874.82150357013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88948.91275865362,
            "unit": "ns/iter",
            "extra": "iterations: 9617\ncpu: 88945.54434854932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87843.90541933052,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 87843.82855965485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 190798.7797517103,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 190786.49400685052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1636837.5905096794,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1636819.5079085962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1301066.0461538457,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1301009.230769225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1297837.6820083493,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297744.6304044647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1281025.1668965663,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1280956.8275862022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 712589.4171778843,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 712532.8987729969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1247567.7087248082,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1247508.4563758385 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}