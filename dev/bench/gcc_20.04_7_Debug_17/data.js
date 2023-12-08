window.BENCHMARK_DATA = {
  "lastUpdate": 1702079206013,
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
      }
    ]
  }
}