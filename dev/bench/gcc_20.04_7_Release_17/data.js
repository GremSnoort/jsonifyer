window.BENCHMARK_DATA = {
  "lastUpdate": 1702079197097,
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
      }
    ]
  }
}