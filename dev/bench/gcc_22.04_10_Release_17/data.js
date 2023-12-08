window.BENCHMARK_DATA = {
  "lastUpdate": 1702079181043,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Release c++-17": [
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
        "date": 1702079180678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1409.7254877661692,
            "unit": "ns/iter",
            "extra": "iterations: 500291\ncpu: 1409.6501835931488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1038.556049250764,
            "unit": "ns/iter",
            "extra": "iterations: 677431\ncpu: 1038.498828662993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1043.8437306180367,
            "unit": "ns/iter",
            "extra": "iterations: 672339\ncpu: 1043.8145042902465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1054.24173319854,
            "unit": "ns/iter",
            "extra": "iterations: 661713\ncpu: 1054.1576181819007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2695.8097031802918,
            "unit": "ns/iter",
            "extra": "iterations: 263089\ncpu: 2695.5919859819296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6103.314856174987,
            "unit": "ns/iter",
            "extra": "iterations: 133426\ncpu: 6102.262677439181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33752.97253621751,
            "unit": "ns/iter",
            "extra": "iterations: 24505\ncpu: 33751.703733931885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29544.2302664659,
            "unit": "ns/iter",
            "extra": "iterations: 27846\ncpu: 29543.686705451397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29330.417301897032,
            "unit": "ns/iter",
            "extra": "iterations: 28205\ncpu: 29329.884772203524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29276.221275533306,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29275.070407472147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66819.67829399502,
            "unit": "ns/iter",
            "extra": "iterations: 13388\ncpu: 66817.54556319093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 666456.2500000101,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666433.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 533452.9950000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533417.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 538479.9549999854,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538459.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536218.5420000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536205.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 382071.2734513178,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 382054.7787610622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 540368.1439999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540356.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 816.9631832312937,
            "unit": "ns/iter",
            "extra": "iterations: 872673\ncpu: 816.930740380419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 646.0564002292141,
            "unit": "ns/iter",
            "extra": "iterations: 1083719\ncpu: 646.0396098988768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 647.411836697485,
            "unit": "ns/iter",
            "extra": "iterations: 1074472\ncpu: 647.3993738319838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 664.4753320258085,
            "unit": "ns/iter",
            "extra": "iterations: 1071754\ncpu: 664.438574523632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1401.0515919354843,
            "unit": "ns/iter",
            "extra": "iterations: 497539\ncpu: 1401.0109760239918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4293.878373308213,
            "unit": "ns/iter",
            "extra": "iterations: 183907\ncpu: 4293.614707433647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24598.53582591218,
            "unit": "ns/iter",
            "extra": "iterations: 33914\ncpu: 24596.992392522247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19118.951758840536,
            "unit": "ns/iter",
            "extra": "iterations: 43324\ncpu: 19117.94617302192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18854.342732990124,
            "unit": "ns/iter",
            "extra": "iterations: 43725\ncpu: 18854.140651801055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19417.58595948274,
            "unit": "ns/iter",
            "extra": "iterations: 42648\ncpu: 19416.861283061327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44614.35441160881,
            "unit": "ns/iter",
            "extra": "iterations: 18882\ncpu: 44613.90212901183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 560161.943203574,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 560143.5864709641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457830.00521105033,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 457802.9181865555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 461744.55858748255,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 461721.7763509893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 449276.59616380447,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 449245.72317262844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265986.61619190767,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 265972.62368815555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 454584.41155047674,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 454572.4765868875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.1834136716288,
            "unit": "ns/iter",
            "extra": "iterations: 1225443\ncpu: 567.16697553456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 476.5509677139254,
            "unit": "ns/iter",
            "extra": "iterations: 1474041\ncpu: 476.5456320414437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 475.0495587911798,
            "unit": "ns/iter",
            "extra": "iterations: 1468579\ncpu: 475.0304886560398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 468.0676904644998,
            "unit": "ns/iter",
            "extra": "iterations: 1499059\ncpu: 468.052825138969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1109.3775307257752,
            "unit": "ns/iter",
            "extra": "iterations: 638552\ncpu: 1109.3223417983172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2523.3758660253375,
            "unit": "ns/iter",
            "extra": "iterations: 317254\ncpu: 2523.205065972394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9529.128231752784,
            "unit": "ns/iter",
            "extra": "iterations: 85712\ncpu: 9528.549094642583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10177.86379556186,
            "unit": "ns/iter",
            "extra": "iterations: 79946\ncpu: 10177.322192479896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10381.071839834038,
            "unit": "ns/iter",
            "extra": "iterations: 80067\ncpu: 10380.191589543727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10377.610713970342,
            "unit": "ns/iter",
            "extra": "iterations: 79317\ncpu: 10376.905329248455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32738.58882769525,
            "unit": "ns/iter",
            "extra": "iterations: 25420\ncpu: 32736.660110149474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 291468.84355108725,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 291452.46231155767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221153.15686274623,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 221131.08496732026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 220441.41962474535,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 220427.3326572007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220513.35885771655,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 220503.15895880773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 119644.01338980903,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 119639.71854078396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 212538.08102189514,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 212526.52068126635 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}