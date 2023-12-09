window.BENCHMARK_DATA = {
  "lastUpdate": 1702083165821,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Release c++-17": [
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
        "date": 1702079196310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1391.1406263729646,
            "unit": "ns/iter",
            "extra": "iterations: 398325\ncpu: 1391.121320529718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1146.800776574245,
            "unit": "ns/iter",
            "extra": "iterations: 609858\ncpu: 1146.707102309062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1136.025096115397,
            "unit": "ns/iter",
            "extra": "iterations: 617227\ncpu: 1135.9460943866686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1121.1605518041724,
            "unit": "ns/iter",
            "extra": "iterations: 613696\ncpu: 1121.089920742518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2697.8676870383724,
            "unit": "ns/iter",
            "extra": "iterations: 270359\ncpu: 2697.681231251779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7602.390544124378,
            "unit": "ns/iter",
            "extra": "iterations: 109350\ncpu: 7602.331047096477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44568.72370631291,
            "unit": "ns/iter",
            "extra": "iterations: 18455\ncpu: 44565.91709563805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 35950.806872911875,
            "unit": "ns/iter",
            "extra": "iterations: 23047\ncpu: 35949.27322428083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 35164.9197879711,
            "unit": "ns/iter",
            "extra": "iterations: 22827\ncpu: 35163.27156437557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 34817.294115181154,
            "unit": "ns/iter",
            "extra": "iterations: 23858\ncpu: 34815.18987341772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74543.78192156601,
            "unit": "ns/iter",
            "extra": "iterations: 11959\ncpu: 74539.40128773314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 692967.8077203133,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 692925.8557902398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 578591.5510000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577958.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562215.7349999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562217.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556768.6539999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556720.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 410361.4957786111,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 410329.8780487801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 576329.0240000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576292.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 749.7271193956992,
            "unit": "ns/iter",
            "extra": "iterations: 929062\ncpu: 749.666545397402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 597.3832531477177,
            "unit": "ns/iter",
            "extra": "iterations: 1172280\ncpu: 597.3842426724017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.8365518803481,
            "unit": "ns/iter",
            "extra": "iterations: 1178741\ncpu: 593.8061881278403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.3686080912489,
            "unit": "ns/iter",
            "extra": "iterations: 1179323\ncpu: 593.3129431037977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1438.9278951098763,
            "unit": "ns/iter",
            "extra": "iterations: 493850\ncpu: 1438.8674698795146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5093.649400000118,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5093.589999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29579.22314782063,
            "unit": "ns/iter",
            "extra": "iterations: 28210\ncpu: 29579.28394186453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23710.678799398138,
            "unit": "ns/iter",
            "extra": "iterations: 35249\ncpu: 23710.09106641316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23636.37831223566,
            "unit": "ns/iter",
            "extra": "iterations: 35550\ncpu: 23635.313642756708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 23687.656708356728,
            "unit": "ns/iter",
            "extra": "iterations: 35180\ncpu: 23686.18817509948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52938.09883940918,
            "unit": "ns/iter",
            "extra": "iterations: 15854\ncpu: 52936.281064715724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 576415.4592984627,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 576395.3011250832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 477766.9143780377,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 477752.3424878823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 477946.70591486234,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 477928.35820895527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 475946.7156600744,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 475927.20470336644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 284344.8026494557,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 284342.96875000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 474388.5420711974,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 474376.32146709686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 629.4347039880763,
            "unit": "ns/iter",
            "extra": "iterations: 1115428\ncpu: 629.4311241962771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 492.7544786738344,
            "unit": "ns/iter",
            "extra": "iterations: 1418891\ncpu: 492.7332684469794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 492.86190970529293,
            "unit": "ns/iter",
            "extra": "iterations: 1416030\ncpu: 492.8291067279654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 485.9894101592752,
            "unit": "ns/iter",
            "extra": "iterations: 1439965\ncpu: 485.9692423079699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1086.9644024051854,
            "unit": "ns/iter",
            "extra": "iterations: 661393\ncpu: 1086.8556213930283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2837.98181682764,
            "unit": "ns/iter",
            "extra": "iterations: 281964\ncpu: 2837.878594430494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14057.272196341946,
            "unit": "ns/iter",
            "extra": "iterations: 58388\ncpu: 14056.36945947793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11356.198942635674,
            "unit": "ns/iter",
            "extra": "iterations: 72066\ncpu: 11355.812727222263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11200.755865845293,
            "unit": "ns/iter",
            "extra": "iterations: 73050\ncpu: 11199.67282683099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11298.581998140626,
            "unit": "ns/iter",
            "extra": "iterations: 73148\ncpu: 11298.207743205543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33441.06953305909,
            "unit": "ns/iter",
            "extra": "iterations: 24607\ncpu: 33438.862925183785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 294931.584976202,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 294917.3691366407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 226890.04962131204,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 226871.454687907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 227505.5560723546,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 227495.32299741526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 226037.17303719278,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 226021.79752066158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 122921.6662436539,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 122916.80767061512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 218131.9564459934,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 218115.9532105524 ns\nthreads: 1"
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
        "date": 1702079196310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1391.1406263729646,
            "unit": "ns/iter",
            "extra": "iterations: 398325\ncpu: 1391.121320529718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1146.800776574245,
            "unit": "ns/iter",
            "extra": "iterations: 609858\ncpu: 1146.707102309062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1136.025096115397,
            "unit": "ns/iter",
            "extra": "iterations: 617227\ncpu: 1135.9460943866686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1121.1605518041724,
            "unit": "ns/iter",
            "extra": "iterations: 613696\ncpu: 1121.089920742518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2697.8676870383724,
            "unit": "ns/iter",
            "extra": "iterations: 270359\ncpu: 2697.681231251779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7602.390544124378,
            "unit": "ns/iter",
            "extra": "iterations: 109350\ncpu: 7602.331047096477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44568.72370631291,
            "unit": "ns/iter",
            "extra": "iterations: 18455\ncpu: 44565.91709563805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 35950.806872911875,
            "unit": "ns/iter",
            "extra": "iterations: 23047\ncpu: 35949.27322428083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 35164.9197879711,
            "unit": "ns/iter",
            "extra": "iterations: 22827\ncpu: 35163.27156437557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 34817.294115181154,
            "unit": "ns/iter",
            "extra": "iterations: 23858\ncpu: 34815.18987341772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74543.78192156601,
            "unit": "ns/iter",
            "extra": "iterations: 11959\ncpu: 74539.40128773314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 692967.8077203133,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 692925.8557902398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 578591.5510000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577958.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562215.7349999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562217.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556768.6539999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556720.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 410361.4957786111,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 410329.8780487801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 576329.0240000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576292.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 749.7271193956992,
            "unit": "ns/iter",
            "extra": "iterations: 929062\ncpu: 749.666545397402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 597.3832531477177,
            "unit": "ns/iter",
            "extra": "iterations: 1172280\ncpu: 597.3842426724017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.8365518803481,
            "unit": "ns/iter",
            "extra": "iterations: 1178741\ncpu: 593.8061881278403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.3686080912489,
            "unit": "ns/iter",
            "extra": "iterations: 1179323\ncpu: 593.3129431037977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1438.9278951098763,
            "unit": "ns/iter",
            "extra": "iterations: 493850\ncpu: 1438.8674698795146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5093.649400000118,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5093.589999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29579.22314782063,
            "unit": "ns/iter",
            "extra": "iterations: 28210\ncpu: 29579.28394186453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23710.678799398138,
            "unit": "ns/iter",
            "extra": "iterations: 35249\ncpu: 23710.09106641316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23636.37831223566,
            "unit": "ns/iter",
            "extra": "iterations: 35550\ncpu: 23635.313642756708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 23687.656708356728,
            "unit": "ns/iter",
            "extra": "iterations: 35180\ncpu: 23686.18817509948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52938.09883940918,
            "unit": "ns/iter",
            "extra": "iterations: 15854\ncpu: 52936.281064715724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 576415.4592984627,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 576395.3011250832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 477766.9143780377,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 477752.3424878823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 477946.70591486234,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 477928.35820895527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 475946.7156600744,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 475927.20470336644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 284344.8026494557,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 284342.96875000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 474388.5420711974,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 474376.32146709686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 629.4347039880763,
            "unit": "ns/iter",
            "extra": "iterations: 1115428\ncpu: 629.4311241962771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 492.7544786738344,
            "unit": "ns/iter",
            "extra": "iterations: 1418891\ncpu: 492.7332684469794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 492.86190970529293,
            "unit": "ns/iter",
            "extra": "iterations: 1416030\ncpu: 492.8291067279654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 485.9894101592752,
            "unit": "ns/iter",
            "extra": "iterations: 1439965\ncpu: 485.9692423079699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1086.9644024051854,
            "unit": "ns/iter",
            "extra": "iterations: 661393\ncpu: 1086.8556213930283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2837.98181682764,
            "unit": "ns/iter",
            "extra": "iterations: 281964\ncpu: 2837.878594430494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14057.272196341946,
            "unit": "ns/iter",
            "extra": "iterations: 58388\ncpu: 14056.36945947793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11356.198942635674,
            "unit": "ns/iter",
            "extra": "iterations: 72066\ncpu: 11355.812727222263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11200.755865845293,
            "unit": "ns/iter",
            "extra": "iterations: 73050\ncpu: 11199.67282683099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11298.581998140626,
            "unit": "ns/iter",
            "extra": "iterations: 73148\ncpu: 11298.207743205543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33441.06953305909,
            "unit": "ns/iter",
            "extra": "iterations: 24607\ncpu: 33438.862925183785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 294931.584976202,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 294917.3691366407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 226890.04962131204,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 226871.454687907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 227505.5560723546,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 227495.32299741526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 226037.17303719278,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 226021.79752066158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 122921.6662436539,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 122916.80767061512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 218131.9564459934,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 218115.9532105524 ns\nthreads: 1"
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
        "date": 1702083165344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1644.2360961881263,
            "unit": "ns/iter",
            "extra": "iterations: 417889\ncpu: 1644.2026471144252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 21016.784505453736,
            "unit": "ns/iter",
            "extra": "iterations: 39885\ncpu: 21015.196189043505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42364.28872697303,
            "unit": "ns/iter",
            "extra": "iterations: 19489\ncpu: 42360.475139822454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52706.16550000113,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52702.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70477.56032960623,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 70476.52736904062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 87808.0706848224,
            "unit": "ns/iter",
            "extra": "iterations: 9988\ncpu: 87805.38646375654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 104474.41043056281,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 104474.3117040631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 126893.150211461,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 126891.54149044759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138532.6413881799,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 138531.89267352165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1426.9040559036916,
            "unit": "ns/iter",
            "extra": "iterations: 491703\ncpu: 1426.8666247714575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1168.7297179950162,
            "unit": "ns/iter",
            "extra": "iterations: 601124\ncpu: 1168.7255873996037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1157.7181119747336,
            "unit": "ns/iter",
            "extra": "iterations: 604208\ncpu: 1157.7268093106998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1156.520758236354,
            "unit": "ns/iter",
            "extra": "iterations: 603664\ncpu: 1156.5299570622074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2244.4796509545677,
            "unit": "ns/iter",
            "extra": "iterations: 320875\ncpu: 2244.46965329178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7178.853731871084,
            "unit": "ns/iter",
            "extra": "iterations: 113080\ncpu: 7178.051821719126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38654.796468926834,
            "unit": "ns/iter",
            "extra": "iterations: 21240\ncpu: 38653.39453860643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30915.480753294545,
            "unit": "ns/iter",
            "extra": "iterations: 26550\ncpu: 30913.039548022618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30617.026920208227,
            "unit": "ns/iter",
            "extra": "iterations: 26820\ncpu: 30614.634601044047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30157.31728989252,
            "unit": "ns/iter",
            "extra": "iterations: 27010\ncpu: 30156.519807478773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74747.0799527683,
            "unit": "ns/iter",
            "extra": "iterations: 11857\ncpu: 74741.23302690395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 676320.4186551218,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 676285.683297179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554783.8490000459,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554746.1000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 542029.9859999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542006.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 552913.6639999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552897.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 405676.8325253563,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 405666.5050683116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 545110.4730000225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545034.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 873.9939214108313,
            "unit": "ns/iter",
            "extra": "iterations: 797718\ncpu: 873.9478111312515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13730.985928876908,
            "unit": "ns/iter",
            "extra": "iterations: 59981\ncpu: 13730.012837398512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29785.103680253982,
            "unit": "ns/iter",
            "extra": "iterations: 27797\ncpu: 29784.163758679006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44200.530623132196,
            "unit": "ns/iter",
            "extra": "iterations: 18744\ncpu: 44197.49786598382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59145.2522897006,
            "unit": "ns/iter",
            "extra": "iterations: 14194\ncpu: 59144.42722277022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61563.77789999965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61563.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73416.4628939349,
            "unit": "ns/iter",
            "extra": "iterations: 11804\ncpu: 73416.71467299231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85629.96224176901,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 85630.24612039122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97944.62568703877,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 97944.9691531125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 725.9293311502861,
            "unit": "ns/iter",
            "extra": "iterations: 969904\ncpu: 725.9338037578955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 586.1420625327409,
            "unit": "ns/iter",
            "extra": "iterations: 1186386\ncpu: 586.1459929567632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 591.5661251296629,
            "unit": "ns/iter",
            "extra": "iterations: 1186561\ncpu: 591.5621700022149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.3867491793441,
            "unit": "ns/iter",
            "extra": "iterations: 1177678\ncpu: 593.3861378067693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1186.3910758951006,
            "unit": "ns/iter",
            "extra": "iterations: 607299\ncpu: 1186.306580448841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5312.909706426629,
            "unit": "ns/iter",
            "extra": "iterations: 151240\ncpu: 5312.900687648767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23604.04157393148,
            "unit": "ns/iter",
            "extra": "iterations: 35046\ncpu: 23604.15453974776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18979.163096554366,
            "unit": "ns/iter",
            "extra": "iterations: 43416\ncpu: 18979.072231435443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19638.546219086424,
            "unit": "ns/iter",
            "extra": "iterations: 42093\ncpu: 19638.251015608294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19329.746695674166,
            "unit": "ns/iter",
            "extra": "iterations: 42747\ncpu: 19329.564647811552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52312.23099085243,
            "unit": "ns/iter",
            "extra": "iterations: 15966\ncpu: 52312.58298885148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 577207.3071381849,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 577185.8546168945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 472766.96417113766,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 472733.7967914443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 468006.73757351533,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 467996.3655799063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 475243.2182112065,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 475220.4202586194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 275965.5662114986,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 275956.3035884399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 463926.9037746006,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 463923.391812867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 669.8221177807682,
            "unit": "ns/iter",
            "extra": "iterations: 1045349\ncpu: 669.8185964687377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6236.379821396392,
            "unit": "ns/iter",
            "extra": "iterations: 131912\ncpu: 6236.362878282504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12018.142149527976,
            "unit": "ns/iter",
            "extra": "iterations: 68843\ncpu: 12017.36414740786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18063.864934676498,
            "unit": "ns/iter",
            "extra": "iterations: 46844\ncpu: 18063.1286824353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23360.036389692843,
            "unit": "ns/iter",
            "extra": "iterations: 35587\ncpu: 23358.791131593065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29069.65158636904,
            "unit": "ns/iter",
            "extra": "iterations: 28934\ncpu: 29068.704638141906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34864.59916736037,
            "unit": "ns/iter",
            "extra": "iterations: 24020\ncpu: 34862.46044962539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40926.999313322354,
            "unit": "ns/iter",
            "extra": "iterations: 20388\ncpu: 40926.133019423054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46361.390461502895,
            "unit": "ns/iter",
            "extra": "iterations: 18158\ncpu: 46361.63123692061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 644.2565845267967,
            "unit": "ns/iter",
            "extra": "iterations: 1084816\ncpu: 644.2605013200396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 513.5075430308036,
            "unit": "ns/iter",
            "extra": "iterations: 1364836\ncpu: 513.5063113810037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 516.9448391729691,
            "unit": "ns/iter",
            "extra": "iterations: 1361836\ncpu: 516.9480759797834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 506.8343093105915,
            "unit": "ns/iter",
            "extra": "iterations: 1388352\ncpu: 506.82507029917525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 950.4793068261362,
            "unit": "ns/iter",
            "extra": "iterations: 732053\ncpu: 950.4859620819786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2916.2695264188324,
            "unit": "ns/iter",
            "extra": "iterations: 274103\ncpu: 2916.195371812777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15274.295554234199,
            "unit": "ns/iter",
            "extra": "iterations: 53804\ncpu: 15274.25470225259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11960.75623755734,
            "unit": "ns/iter",
            "extra": "iterations: 68817\ncpu: 11960.826539953894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11367.385238062196,
            "unit": "ns/iter",
            "extra": "iterations: 72145\ncpu: 11367.458590338825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10988.177916257238,
            "unit": "ns/iter",
            "extra": "iterations: 74299\ncpu: 10988.034832231757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33871.86165649244,
            "unit": "ns/iter",
            "extra": "iterations: 24244\ncpu: 33871.82395644305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282222.4671942077,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 282215.85888559086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220282.1563300939,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 220281.08662224156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221238.7675771468,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 221230.3743045008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218381.5580334578,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 218379.87835783118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113878.31932115131,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 113877.55874673613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210648.51243060624,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 210649.6258749706 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}