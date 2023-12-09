window.BENCHMARK_DATA = {
  "lastUpdate": 1702083186002,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Debug c++-17": [
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
        "date": 1702079205050,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12185.886268111239,
            "unit": "ns/iter",
            "extra": "iterations: 56387\ncpu: 12186.021600723574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10057.711547889574,
            "unit": "ns/iter",
            "extra": "iterations: 67311\ncpu: 10057.556714355751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10082.88013801582,
            "unit": "ns/iter",
            "extra": "iterations: 69847\ncpu: 10082.550431657766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10055.007922699584,
            "unit": "ns/iter",
            "extra": "iterations: 69547\ncpu: 10055.128186693892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20653.364967231566,
            "unit": "ns/iter",
            "extra": "iterations: 35247\ncpu: 20652.949187164868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58584.64915025212,
            "unit": "ns/iter",
            "extra": "iterations: 14063\ncpu: 58577.40169238429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 276785.02095422096,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 276765.6028368795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222394.62040176973,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 222377.25019566916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224682.8911970914,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 224668.06024409275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 222469.29853479844,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 222458.00627943463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 576851.0913154492,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 576812.0051085572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4079224.873362413,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4079040.611353715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3314502.348754404,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3314382.562277581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3318057.49110317,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3318026.690391457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3333908.4839857672,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3333398.220640574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1957261.9326086985,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1957202.8260869577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3224674.3944636597,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3224428.0276816622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5499.953983184453,
            "unit": "ns/iter",
            "extra": "iterations: 126193\ncpu: 5498.302599985749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4527.530808198309,
            "unit": "ns/iter",
            "extra": "iterations: 154764\ncpu: 4527.307384146175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4532.909756050283,
            "unit": "ns/iter",
            "extra": "iterations: 154581\ncpu: 4532.831978056823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4469.772884605938,
            "unit": "ns/iter",
            "extra": "iterations: 141853\ncpu: 4469.696093843627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9199.176758518204,
            "unit": "ns/iter",
            "extra": "iterations: 78859\ncpu: 9198.879011907351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31644.40494756648,
            "unit": "ns/iter",
            "extra": "iterations: 26033\ncpu: 31643.92501824601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145674.62124829626,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 145668.14461118693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117247.07202749033,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 117242.58419243958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116243.85177623603,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116242.52075677145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117593.82790954314,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 117591.87810259269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268927.44599194813,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 268922.5007737548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2280327.2756097456,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2280222.6829268304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1873631.0181086499,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873536.0160965803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1873888.3581489248,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873841.8511066406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1860293.9582505045,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1860181.1133200806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1092428.0749414645,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1092419.672131147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1812736.07003889,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1812623.1517509818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6398.530145492294,
            "unit": "ns/iter",
            "extra": "iterations: 109353\ncpu: 6398.538677493989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5271.080411765895,
            "unit": "ns/iter",
            "extra": "iterations: 132891\ncpu: 5270.97094611376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5304.710353776914,
            "unit": "ns/iter",
            "extra": "iterations: 131778\ncpu: 5304.374781830024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5292.113455807286,
            "unit": "ns/iter",
            "extra": "iterations: 132545\ncpu: 5291.820136557397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 11110.00133769109,
            "unit": "ns/iter",
            "extra": "iterations: 65785\ncpu: 11109.781865166837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26971.368165770262,
            "unit": "ns/iter",
            "extra": "iterations: 30307\ncpu: 26970.416075494202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129643.365648852,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 129637.14503816828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104653.61578170968,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 104650.52851524099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104212.62891007066,
            "unit": "ns/iter",
            "extra": "iterations: 8184\ncpu: 104211.4736070381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104133.45427872804,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 104130.90464547632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 303005.52231997706,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 302991.30009775196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795528.7922330247,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1795442.7184466005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1442323.9394410064,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442235.8695652194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1446145.297213605,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1446089.9380804952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1438779.6024653602,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1438741.6024653255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847168.0913283975,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 847175.9225092247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395600.8243243191,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1395528.3783783696 ns\nthreads: 1"
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
        "date": 1702079205050,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12185.886268111239,
            "unit": "ns/iter",
            "extra": "iterations: 56387\ncpu: 12186.021600723574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10057.711547889574,
            "unit": "ns/iter",
            "extra": "iterations: 67311\ncpu: 10057.556714355751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10082.88013801582,
            "unit": "ns/iter",
            "extra": "iterations: 69847\ncpu: 10082.550431657766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10055.007922699584,
            "unit": "ns/iter",
            "extra": "iterations: 69547\ncpu: 10055.128186693892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20653.364967231566,
            "unit": "ns/iter",
            "extra": "iterations: 35247\ncpu: 20652.949187164868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58584.64915025212,
            "unit": "ns/iter",
            "extra": "iterations: 14063\ncpu: 58577.40169238429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 276785.02095422096,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 276765.6028368795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222394.62040176973,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 222377.25019566916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224682.8911970914,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 224668.06024409275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 222469.29853479844,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 222458.00627943463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 576851.0913154492,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 576812.0051085572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4079224.873362413,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4079040.611353715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3314502.348754404,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3314382.562277581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3318057.49110317,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3318026.690391457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3333908.4839857672,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3333398.220640574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1957261.9326086985,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1957202.8260869577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3224674.3944636597,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3224428.0276816622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5499.953983184453,
            "unit": "ns/iter",
            "extra": "iterations: 126193\ncpu: 5498.302599985749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4527.530808198309,
            "unit": "ns/iter",
            "extra": "iterations: 154764\ncpu: 4527.307384146175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4532.909756050283,
            "unit": "ns/iter",
            "extra": "iterations: 154581\ncpu: 4532.831978056823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4469.772884605938,
            "unit": "ns/iter",
            "extra": "iterations: 141853\ncpu: 4469.696093843627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9199.176758518204,
            "unit": "ns/iter",
            "extra": "iterations: 78859\ncpu: 9198.879011907351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31644.40494756648,
            "unit": "ns/iter",
            "extra": "iterations: 26033\ncpu: 31643.92501824601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145674.62124829626,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 145668.14461118693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117247.07202749033,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 117242.58419243958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116243.85177623603,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116242.52075677145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117593.82790954314,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 117591.87810259269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268927.44599194813,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 268922.5007737548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2280327.2756097456,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2280222.6829268304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1873631.0181086499,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873536.0160965803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1873888.3581489248,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873841.8511066406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1860293.9582505045,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1860181.1133200806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1092428.0749414645,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1092419.672131147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1812736.07003889,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1812623.1517509818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6398.530145492294,
            "unit": "ns/iter",
            "extra": "iterations: 109353\ncpu: 6398.538677493989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5271.080411765895,
            "unit": "ns/iter",
            "extra": "iterations: 132891\ncpu: 5270.97094611376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5304.710353776914,
            "unit": "ns/iter",
            "extra": "iterations: 131778\ncpu: 5304.374781830024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5292.113455807286,
            "unit": "ns/iter",
            "extra": "iterations: 132545\ncpu: 5291.820136557397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 11110.00133769109,
            "unit": "ns/iter",
            "extra": "iterations: 65785\ncpu: 11109.781865166837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26971.368165770262,
            "unit": "ns/iter",
            "extra": "iterations: 30307\ncpu: 26970.416075494202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129643.365648852,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 129637.14503816828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104653.61578170968,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 104650.52851524099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104212.62891007066,
            "unit": "ns/iter",
            "extra": "iterations: 8184\ncpu: 104211.4736070381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104133.45427872804,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 104130.90464547632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 303005.52231997706,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 302991.30009775196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795528.7922330247,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1795442.7184466005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1442323.9394410064,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442235.8695652194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1446145.297213605,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1446089.9380804952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1438779.6024653602,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1438741.6024653255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847168.0913283975,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 847175.9225092247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395600.8243243191,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1395528.3783783696 ns\nthreads: 1"
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
        "date": 1702083185372,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14640.519256705173,
            "unit": "ns/iter",
            "extra": "iterations: 46711\ncpu: 14639.971312966967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126710.9055966613,
            "unit": "ns/iter",
            "extra": "iterations: 6218\ncpu: 126709.05435831455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232490.46365580524,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 232485.80972741853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342158.2548247471,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 342137.5344623868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446295.4874165346,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 446276.3739085774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554576.6469088627,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 554539.5793499047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536764.0459999734,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536762.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 620503.3269999943,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620440.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704297.0761538597,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 704256.0769230766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11739.64335617548,
            "unit": "ns/iter",
            "extra": "iterations: 59830\ncpu: 11738.906902891522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9684.39690664573,
            "unit": "ns/iter",
            "extra": "iterations: 72284\ncpu: 9683.704554258218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9641.036594411824,
            "unit": "ns/iter",
            "extra": "iterations: 72798\ncpu: 9640.67007335368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9696.700808290001,
            "unit": "ns/iter",
            "extra": "iterations: 72375\ncpu: 9696.022107081166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16700.834358901015,
            "unit": "ns/iter",
            "extra": "iterations: 41928\ncpu: 16700.76559816832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51686.47170000327,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51680.60000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 275425.0657051289,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 275404.7115384617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 214365.09761006507,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 214351.94968553438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 218405.1376570172,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 218390.0538323506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 214546.64271254255,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 214536.48785425047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 582909.4692158172,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 582903.6292935833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4159653.9178082,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4159400.4566210057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3136771.6722407434,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3136621.739130434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3117391.5418061414,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3117162.876254179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3096274.9302325556,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3095983.7209302373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1795668.7272727028,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795590.5222437193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3015023.778501666,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3014804.560260585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6939.193348348517,
            "unit": "ns/iter",
            "extra": "iterations: 100787\ncpu: 6939.172710766275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69871.69043506905,
            "unit": "ns/iter",
            "extra": "iterations: 12159\ncpu: 69866.48573073457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134714.96254624036,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 134710.65043156626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 197952.36540218882,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197936.3574040223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 261111.55253399903,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 261107.50927070473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 324361.66430435446,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 324341.62625885813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 386647.89047196327,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 386636.8655387381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 450091.4407656334,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 450049.92240041256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513263.0035335576,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 513213.54534746916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5490.253507399914,
            "unit": "ns/iter",
            "extra": "iterations: 132363\ncpu: 5490.066710485561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4395.93001258651,
            "unit": "ns/iter",
            "extra": "iterations: 158900\ncpu: 4395.701069855228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4388.158606598458,
            "unit": "ns/iter",
            "extra": "iterations: 159552\ncpu: 4388.141797031706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4431.260811562477,
            "unit": "ns/iter",
            "extra": "iterations: 158164\ncpu: 4430.982398017255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7715.485941603579,
            "unit": "ns/iter",
            "extra": "iterations: 90622\ncpu: 7715.4576151486035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32392.557665894125,
            "unit": "ns/iter",
            "extra": "iterations: 25483\ncpu: 32390.29941529635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141465.27309431587,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 141461.78940568457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111727.34141904431,
            "unit": "ns/iter",
            "extra": "iterations: 6596\ncpu: 111718.26864766573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109953.18281653896,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 109949.81912144698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111117.54821613319,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 111074.53464322608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 267305.9938687939,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 267304.69037400436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2106144.246606289,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2106060.407239805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1739580.1396648132,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1739525.698324032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1735635.32588455,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735613.4078212348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1729124.3717471638,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1729068.9591078092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1024959.8822882278,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 1024727.3927392698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1684480.7274368033,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1684384.6570397138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7317.952901009785,
            "unit": "ns/iter",
            "extra": "iterations: 95777\ncpu: 7317.463482882085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52656.01440000296,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52655.16999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96841.2625521839,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 96838.15863702995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140123.24584283945,
            "unit": "ns/iter",
            "extra": "iterations: 6134\ncpu: 140122.66058037168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184416.93506493018,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 184412.90185224637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227874.29436544678,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 227873.27540810814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271513.5455974788,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 271506.7924528301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315517.17192599777,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 315515.48784911144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358982.19851424056,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 358971.81180354964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6227.668116289909,
            "unit": "ns/iter",
            "extra": "iterations: 112443\ncpu: 6227.644228631383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5147.9849962488,
            "unit": "ns/iter",
            "extra": "iterations: 135966\ncpu: 5147.839901151771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5136.5817506709145,
            "unit": "ns/iter",
            "extra": "iterations: 136005\ncpu: 5136.492040733802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5139.9021042393915,
            "unit": "ns/iter",
            "extra": "iterations: 135726\ncpu: 5139.885504619532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8780.198244468535,
            "unit": "ns/iter",
            "extra": "iterations: 79634\ncpu: 8779.817665821007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27169.779893297513,
            "unit": "ns/iter",
            "extra": "iterations: 29990\ncpu: 27169.66988996356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135064.86292490188,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 135061.1541501959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105796.81809242678,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 105796.411012782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107118.456475313,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 107116.81949503793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103844.16424826832,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 103843.72637483191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 312639.01883619325,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 312631.8869828455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1727197.7142856985,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1727167.9035250426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376858.848888905,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376825.0370370399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384893.0193741252,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384874.3666169855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1360972.2913616747,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1360820.9370424608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 763692.7906018039,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 763663.973619125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1323220.5014244716,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1323105.9829059718 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}