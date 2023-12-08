window.BENCHMARK_DATA = {
  "lastUpdate": 1702079204033,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Release c++-17": [
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
        "date": 1702079203072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1407.4451950809034,
            "unit": "ns/iter",
            "extra": "iterations: 499280\ncpu: 1407.3511857074188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1169.359095575561,
            "unit": "ns/iter",
            "extra": "iterations: 599055\ncpu: 1169.2914673944795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1161.11792529685,
            "unit": "ns/iter",
            "extra": "iterations: 601474\ncpu: 1161.0028031136844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1174.0670145587462,
            "unit": "ns/iter",
            "extra": "iterations: 599228\ncpu: 1174.05228060104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2820.4803927953244,
            "unit": "ns/iter",
            "extra": "iterations: 245726\ncpu: 2820.3234496960035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7768.298480449394,
            "unit": "ns/iter",
            "extra": "iterations: 106084\ncpu: 7767.756683382974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44605.3018617761,
            "unit": "ns/iter",
            "extra": "iterations: 18101\ncpu: 44603.73460029836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39062.27152922798,
            "unit": "ns/iter",
            "extra": "iterations: 22992\ncpu: 39057.28949199722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36112.18630362227,
            "unit": "ns/iter",
            "extra": "iterations: 21889\ncpu: 36109.8771072228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 35872.40358335862,
            "unit": "ns/iter",
            "extra": "iterations: 23051\ncpu: 35870.01431608176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82338.10997204037,
            "unit": "ns/iter",
            "extra": "iterations: 10730\ncpu: 82334.00745573173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 661573.2249999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661552.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 535997.3459999878,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535988.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 538651.3299999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538634.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 543233.1950000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543220.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 388222.76106592943,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 388212.8274616083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 539778.3920000165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539777.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 705.7908208420099,
            "unit": "ns/iter",
            "extra": "iterations: 999961\ncpu: 705.7727251362811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 616.7390998884827,
            "unit": "ns/iter",
            "extra": "iterations: 1134415\ncpu: 616.7176914973812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 620.1214903495065,
            "unit": "ns/iter",
            "extra": "iterations: 1139679\ncpu: 620.1018005947299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 619.3288779340091,
            "unit": "ns/iter",
            "extra": "iterations: 1131511\ncpu: 619.3212438942253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1626.256005816199,
            "unit": "ns/iter",
            "extra": "iterations: 442904\ncpu: 1626.2345790509908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5130.266909999932,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5130.1810000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30065.58276125162,
            "unit": "ns/iter",
            "extra": "iterations: 27531\ncpu: 30064.712505902462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23783.517887812206,
            "unit": "ns/iter",
            "extra": "iterations: 34353\ncpu: 23782.155852472846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23440.793683079813,
            "unit": "ns/iter",
            "extra": "iterations: 35397\ncpu: 23439.7321806933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 23943.237737567324,
            "unit": "ns/iter",
            "extra": "iterations: 35148\ncpu: 23941.934107203873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58453.277354216814,
            "unit": "ns/iter",
            "extra": "iterations: 14559\ncpu: 58451.954117727946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 552408.3134138847,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 552389.6376350928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 460385.77112861886,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 460372.9658792655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 455685.64562336897,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 455669.12466843496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 461018.751171251,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 461007.39198334253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 276218.0982933129,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 276213.4007585331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 456195.0424305818,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 456182.8706128853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 621.2964547812451,
            "unit": "ns/iter",
            "extra": "iterations: 1129211\ncpu: 621.2847731734859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 487.2458956321749,
            "unit": "ns/iter",
            "extra": "iterations: 1427260\ncpu: 487.231128175665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 484.6592047839249,
            "unit": "ns/iter",
            "extra": "iterations: 1445167\ncpu: 484.65256956462315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 498.94773420484256,
            "unit": "ns/iter",
            "extra": "iterations: 1412396\ncpu: 498.9316735533116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1243.6614559775564,
            "unit": "ns/iter",
            "extra": "iterations: 588086\ncpu: 1243.6502484330545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2924.8690604249764,
            "unit": "ns/iter",
            "extra": "iterations: 274241\ncpu: 2924.838372088779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14463.272465864742,
            "unit": "ns/iter",
            "extra": "iterations: 56686\ncpu: 14463.154923614315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11707.137366476938,
            "unit": "ns/iter",
            "extra": "iterations: 70119\ncpu: 11706.45616737269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11545.4618815786,
            "unit": "ns/iter",
            "extra": "iterations: 71068\ncpu: 11544.855631226403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11621.511947812765,
            "unit": "ns/iter",
            "extra": "iterations: 70515\ncpu: 11620.726086648194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40704.43299926921,
            "unit": "ns/iter",
            "extra": "iterations: 20455\ncpu: 40703.94524566107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 288528.7164129701,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 288513.93117140874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 222379.20275440917,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 222366.69217036504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 222120.79832146355,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 222102.1871820949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 223029.58917683712,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 223016.10772357712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 121108.07318428099,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 121100.72212192764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 215863.5679921395,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 215849.55817378504 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}