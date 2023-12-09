window.BENCHMARK_DATA = {
  "lastUpdate": 1702083142072,
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
        "date": 1702083141636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1671.7095380682395,
            "unit": "ns/iter",
            "extra": "iterations: 422465\ncpu: 1671.6198975063023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20220.83189262406,
            "unit": "ns/iter",
            "extra": "iterations: 40605\ncpu: 20219.620736362518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42636.41944832477,
            "unit": "ns/iter",
            "extra": "iterations: 19323\ncpu: 42633.94400455415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52887.437500001506,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52884.63999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70643.89000320788,
            "unit": "ns/iter",
            "extra": "iterations: 12464\ncpu: 70641.81643132218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 87927.82888460392,
            "unit": "ns/iter",
            "extra": "iterations: 9853\ncpu: 87923.88105145641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 106853.89449369586,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 106850.1186165564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 120933.19294456193,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 120930.06479481637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 141667.0647106776,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 141663.87938060315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1443.5264692831208,
            "unit": "ns/iter",
            "extra": "iterations: 484505\ncpu: 1443.5176107573727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1248.321839001126,
            "unit": "ns/iter",
            "extra": "iterations: 579532\ncpu: 1248.2163193749434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1151.9747896940974,
            "unit": "ns/iter",
            "extra": "iterations: 606022\ncpu: 1151.9246826022802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1113.1530030611295,
            "unit": "ns/iter",
            "extra": "iterations: 625262\ncpu: 1113.115941797199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2119.2146538115335,
            "unit": "ns/iter",
            "extra": "iterations: 330658\ncpu: 2119.1034240816784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6951.601570384974,
            "unit": "ns/iter",
            "extra": "iterations: 116914\ncpu: 6951.38477855518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38676.89294255662,
            "unit": "ns/iter",
            "extra": "iterations: 21325\ncpu: 38674.98710433764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30938.12941484627,
            "unit": "ns/iter",
            "extra": "iterations: 26728\ncpu: 30937.294223286473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30465.79468214916,
            "unit": "ns/iter",
            "extra": "iterations: 27041\ncpu: 30464.257978625046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29767.932601260436,
            "unit": "ns/iter",
            "extra": "iterations: 27775\ncpu: 29765.86858685872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82253.7846210583,
            "unit": "ns/iter",
            "extra": "iterations: 10846\ncpu: 82251.2631384841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 649498.1230000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649426.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563314.4189999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563315.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545092.7770000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545067.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 533524.1390000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533489.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 373556.93570510123,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 373546.3780540072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 526659.6920000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526661.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 871.7501455668844,
            "unit": "ns/iter",
            "extra": "iterations: 810624\ncpu: 871.6973590715314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13621.504834047373,
            "unit": "ns/iter",
            "extra": "iterations: 60198\ncpu: 13621.093724043993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29425.33266398941,
            "unit": "ns/iter",
            "extra": "iterations: 28386\ncpu: 29424.001268230793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44201.80635408978,
            "unit": "ns/iter",
            "extra": "iterations: 18854\ncpu: 44201.16686114346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58847.62537574142,
            "unit": "ns/iter",
            "extra": "iterations: 14305\ncpu: 58845.95595945486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61014.83620000181,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61013.099999999904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73176.2044688012,
            "unit": "ns/iter",
            "extra": "iterations: 11860\ncpu: 73175.22765598656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85735.63949006486,
            "unit": "ns/iter",
            "extra": "iterations: 10119\ncpu: 85733.78792370793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97703.76382077942,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 97700.11145786897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 699.4457401710639,
            "unit": "ns/iter",
            "extra": "iterations: 1000897\ncpu: 699.4277133411331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 570.6901936743955,
            "unit": "ns/iter",
            "extra": "iterations: 1223445\ncpu: 570.6576102726358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 568.9641793984672,
            "unit": "ns/iter",
            "extra": "iterations: 1238896\ncpu: 568.9494517699608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 579.2509366224418,
            "unit": "ns/iter",
            "extra": "iterations: 1215004\ncpu: 579.252413983824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1118.7618014258608,
            "unit": "ns/iter",
            "extra": "iterations: 537774\ncpu: 1118.7509994904865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5001.934801924427,
            "unit": "ns/iter",
            "extra": "iterations: 157566\ncpu: 5001.945851262337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23861.42813499778,
            "unit": "ns/iter",
            "extra": "iterations: 34697\ncpu: 23860.93898607967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19137.84226759035,
            "unit": "ns/iter",
            "extra": "iterations: 43447\ncpu: 19137.68269385696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19003.74566155565,
            "unit": "ns/iter",
            "extra": "iterations: 43564\ncpu: 19003.626847855896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19045.96449260608,
            "unit": "ns/iter",
            "extra": "iterations: 44019\ncpu: 19045.99604716137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56487.3337368844,
            "unit": "ns/iter",
            "extra": "iterations: 14868\ncpu: 56485.96986817301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 538006.1689189252,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 537978.1941031924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 448286.12799593026,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 448286.8944416103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 450987.5439223562,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 450970.27579162427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 452873.2555156452,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 452850.2821959982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 261614.01626505647,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 261606.47590361387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 450344.8746828995,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 450301.9786910188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 739.7340550023182,
            "unit": "ns/iter",
            "extra": "iterations: 948542\ncpu: 739.713476050612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6617.92097039444,
            "unit": "ns/iter",
            "extra": "iterations: 121600\ncpu: 6617.763980263194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12674.476329328112,
            "unit": "ns/iter",
            "extra": "iterations: 65503\ncpu: 12674.178281910672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 19065.252070497994,
            "unit": "ns/iter",
            "extra": "iterations: 39604\ncpu: 19064.266235733627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24758.760111992,
            "unit": "ns/iter",
            "extra": "iterations: 33574\ncpu: 24758.20277595755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30767.84540276551,
            "unit": "ns/iter",
            "extra": "iterations: 27038\ncpu: 30766.743102300537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37109.981794253166,
            "unit": "ns/iter",
            "extra": "iterations: 22795\ncpu: 37109.1335819257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 43240.21353689739,
            "unit": "ns/iter",
            "extra": "iterations: 19650\ncpu: 43238.697201017734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 49008.854238274835,
            "unit": "ns/iter",
            "extra": "iterations: 17165\ncpu: 49005.70929216393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 672.3943976778959,
            "unit": "ns/iter",
            "extra": "iterations: 1048708\ncpu: 672.3771536023314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 531.5088636463398,
            "unit": "ns/iter",
            "extra": "iterations: 1317178\ncpu: 531.5100161102039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 519.6061033058845,
            "unit": "ns/iter",
            "extra": "iterations: 1350514\ncpu: 519.5790639712011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 517.7295515907809,
            "unit": "ns/iter",
            "extra": "iterations: 1351511\ncpu: 517.7164669765871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 958.5221838960579,
            "unit": "ns/iter",
            "extra": "iterations: 709118\ncpu: 958.4881500681091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3009.4126954984354,
            "unit": "ns/iter",
            "extra": "iterations: 266882\ncpu: 3009.3464527394003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15143.58179874257,
            "unit": "ns/iter",
            "extra": "iterations: 54249\ncpu: 15143.09388191504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11849.921950023974,
            "unit": "ns/iter",
            "extra": "iterations: 69353\ncpu: 11849.584012227133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11897.12850808068,
            "unit": "ns/iter",
            "extra": "iterations: 68556\ncpu: 11896.715094229537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11380.846957912843,
            "unit": "ns/iter",
            "extra": "iterations: 72516\ncpu: 11380.638755585001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40192.10731069195,
            "unit": "ns/iter",
            "extra": "iterations: 20641\ncpu: 40190.872535244926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280092.00399733445,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 280081.7788141245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215778.16442258153,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 215767.55567063845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 227317.4208378688,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 227310.47334059127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210528.2910208494,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 210516.0876536618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113930.50365439952,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 113927.21221613168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 213064.5182748575,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 213051.77875243634 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}