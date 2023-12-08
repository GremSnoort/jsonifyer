window.BENCHMARK_DATA = {
  "lastUpdate": 1702079189760,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Debug c++-17": [
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
        "date": 1702079189383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11265.154274799463,
            "unit": "ns/iter",
            "extra": "iterations: 63348\ncpu: 11264.881290648484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9066.340695598281,
            "unit": "ns/iter",
            "extra": "iterations: 77286\ncpu: 9066.270734673808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9603.404801227578,
            "unit": "ns/iter",
            "extra": "iterations: 76897\ncpu: 9603.150968178214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9132.038412408481,
            "unit": "ns/iter",
            "extra": "iterations: 76720\ncpu: 9131.603232533893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17705.15172329792,
            "unit": "ns/iter",
            "extra": "iterations: 41055\ncpu: 17704.07014979905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54297.84589859265,
            "unit": "ns/iter",
            "extra": "iterations: 15068\ncpu: 54297.19272630744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262429.7178308849,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 262421.9362745099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210365.25086249065,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 210363.10990635783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 212540.76590456945,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 212533.59840954278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219260.92777364247,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 219252.469595433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459465.4939947811,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 459449.08616187965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3906963.753138014,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3906738.4937238498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3130932.2281879266,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130897.651006713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3192950.098305138,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3192839.6610169513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3151628.7932203785,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151468.474576276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1850188.280876494,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850164.5418326727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3073127.8145695543,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072979.801324497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4910.551299359883,
            "unit": "ns/iter",
            "extra": "iterations: 142955\ncpu: 4910.543877443953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4080.9638000293717,
            "unit": "ns/iter",
            "extra": "iterations: 170525\ncpu: 4080.9640815129646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3998.9148425016874,
            "unit": "ns/iter",
            "extra": "iterations: 175240\ncpu: 3998.7742524537784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4025.2551967420536,
            "unit": "ns/iter",
            "extra": "iterations: 174340\ncpu: 4025.0797292646403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8767.079934668367,
            "unit": "ns/iter",
            "extra": "iterations: 82655\ncpu: 8766.96146633597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31373.231447352788,
            "unit": "ns/iter",
            "extra": "iterations: 26317\ncpu: 31372.876847665004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146071.15236962982,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 146063.54679802974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116273.26432557526,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116270.83163195869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117742.38269734269,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 117738.00799008098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117416.18727672077,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 117415.49876339649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277528.54583068035,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 277521.0375556969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2203086.3270588405,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2203049.647058823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786174.3078394015,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786094.4550669242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1790985.5625000137,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1790916.6015624977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1793792.812260527,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1793708.0459770123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1077419.0391254213,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1077397.698504022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1752576.9288389245,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1752472.2846441986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5811.40790657368,
            "unit": "ns/iter",
            "extra": "iterations: 121165\ncpu: 5811.259852267544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4751.303171876145,
            "unit": "ns/iter",
            "extra": "iterations: 147263\ncpu: 4751.067817442237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4800.077760891585,
            "unit": "ns/iter",
            "extra": "iterations: 146076\ncpu: 4800.026698430931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4773.532959948702,
            "unit": "ns/iter",
            "extra": "iterations: 146587\ncpu: 4773.4505788371625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8526.889286639473,
            "unit": "ns/iter",
            "extra": "iterations: 84922\ncpu: 8526.879960434231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22586.186565293105,
            "unit": "ns/iter",
            "extra": "iterations: 35907\ncpu: 22585.8913303813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116637.13796864293,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 116633.3060668036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94667.45001108544,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 94663.31190423414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94729.87725911925,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 94728.60627563995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94864.21490352385,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 94859.29252605901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 179942.62344189637,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 179936.02734217848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1707629.9724770715,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1707544.0366972436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1353303.2620087469,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353266.6666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1358062.6125730993,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1357989.1812865455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1351771.464337706,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1351732.896652111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 776631.8783557089,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 776604.1946308721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1314855.3404255542,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1314801.7021276632 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}