window.BENCHMARK_DATA = {
  "lastUpdate": 1702079207457,
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
      }
    ]
  }
}