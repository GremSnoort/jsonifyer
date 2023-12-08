window.BENCHMARK_DATA = {
  "lastUpdate": 1702079208867,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702079208463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11326.879783895101,
            "unit": "ns/iter",
            "extra": "iterations: 61822\ncpu: 11326.207498948595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9247.87648787973,
            "unit": "ns/iter",
            "extra": "iterations: 75863\ncpu: 9247.394645611166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9272.7948982022,
            "unit": "ns/iter",
            "extra": "iterations: 75738\ncpu: 9272.29528110064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9177.533621789411,
            "unit": "ns/iter",
            "extra": "iterations: 76037\ncpu: 9177.090100871943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17483.288460136457,
            "unit": "ns/iter",
            "extra": "iterations: 41153\ncpu: 17482.01346195902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56071.142329021015,
            "unit": "ns/iter",
            "extra": "iterations: 14607\ncpu: 56067.28965564454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263963.21525633713,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 263949.4441012971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215544.5585335121,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 215528.34386852075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 218872.12686378867,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 218870.63431892873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 215672.21397821914,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 215666.2952646236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 463640.75922024413,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 463630.7165437296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3906204.4747901047,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3906212.184873948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3135525.1919191736,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3135406.3973063943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3154058.248299339,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3153921.0884353733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3147088.2060811827,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3147017.229729726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1872153.5171025295,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872143.2595573422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3117092.848993255,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3116991.6107382616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4943.862373648133,
            "unit": "ns/iter",
            "extra": "iterations: 141470\ncpu: 4943.704672368695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4047.234423887952,
            "unit": "ns/iter",
            "extra": "iterations: 172909\ncpu: 4047.247396029126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4091.7407832296476,
            "unit": "ns/iter",
            "extra": "iterations: 172593\ncpu: 4091.5964146865726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4052.0893166628657,
            "unit": "ns/iter",
            "extra": "iterations: 172521\ncpu: 4052.0330858272414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8625.73402140414,
            "unit": "ns/iter",
            "extra": "iterations: 84003\ncpu: 8625.544325797899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33232.6155866899,
            "unit": "ns/iter",
            "extra": "iterations: 25124\ncpu: 33232.68189778697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145789.70047814876,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 145784.90437158465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 119481.003789476,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 119478.76491228079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119512.3726123586,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 119509.78932584256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 120195.95329206983,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 120196.27180641523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281647.67781746486,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 281639.94803507684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2187881.4871194344,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2187841.686182668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1773756.1216730191,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1773700.7604562677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1791233.9519231052,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1791216.3461538455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777075.761904793,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1777026.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066729.1536697173,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1066718.8073394499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1741488.8227611668,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1741459.1417910473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5868.502716752983,
            "unit": "ns/iter",
            "extra": "iterations: 119260\ncpu: 5868.412711722316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4846.0615389958175,
            "unit": "ns/iter",
            "extra": "iterations: 144055\ncpu: 4845.972718753278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4822.582861600545,
            "unit": "ns/iter",
            "extra": "iterations: 144856\ncpu: 4822.368421052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4781.774573331004,
            "unit": "ns/iter",
            "extra": "iterations: 145839\ncpu: 4781.788821920065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8623.98673587086,
            "unit": "ns/iter",
            "extra": "iterations: 83232\ncpu: 8623.659169550174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22767.88894517583,
            "unit": "ns/iter",
            "extra": "iterations: 35532\ncpu: 22767.662951705453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118202.30770294357,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 118199.14258055581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95773.18756302692,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 95772.36974789888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95912.92268737382,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 95908.44024307918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96113.29605557844,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 96108.79650380988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 178605.53007217383,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 178597.29350441063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1735568.1266293868,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735443.2029795174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362882.8885631135,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1362779.4721407606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1367818.2470414075,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1367753.84615385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1350365.411678839,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1350280.729927004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 804703.2954739778,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 804661.4859094811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1361326.575182461,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1360966.8613138655 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}