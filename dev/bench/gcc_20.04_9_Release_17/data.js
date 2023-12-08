window.BENCHMARK_DATA = {
  "lastUpdate": 1702079190552,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702079189731,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1300.507377803331,
            "unit": "ns/iter",
            "extra": "iterations: 528206\ncpu: 1300.4793584321271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 997.2488146770777,
            "unit": "ns/iter",
            "extra": "iterations: 698122\ncpu: 997.2163891125043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1017.5055334338041,
            "unit": "ns/iter",
            "extra": "iterations: 703180\ncpu: 1017.4527148098641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1004.3661334554221,
            "unit": "ns/iter",
            "extra": "iterations: 696847\ncpu: 1004.3597805544108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2603.65722359901,
            "unit": "ns/iter",
            "extra": "iterations: 273181\ncpu: 2603.495118620986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6377.215017880149,
            "unit": "ns/iter",
            "extra": "iterations: 129752\ncpu: 6377.092453295516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34360.388665311024,
            "unit": "ns/iter",
            "extra": "iterations: 24103\ncpu: 34358.39936937311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31273.109065103927,
            "unit": "ns/iter",
            "extra": "iterations: 27479\ncpu: 31272.076858692104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30716.824571921312,
            "unit": "ns/iter",
            "extra": "iterations: 26689\ncpu: 30715.80801079094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31231.791274396975,
            "unit": "ns/iter",
            "extra": "iterations: 26130\ncpu: 31230.631458094107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64541.43724516194,
            "unit": "ns/iter",
            "extra": "iterations: 13489\ncpu: 64536.3481355179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647952.1789999865,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647908.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 510857.0669999892,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510849.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512479.9330000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512363.6999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507325.32300000347,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507327.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 374766.664950669,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374745.4740454737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515208.1150000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515182.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.897513589631,
            "unit": "ns/iter",
            "extra": "iterations: 1113533\ncpu: 627.8887109766839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 488.1046612834992,
            "unit": "ns/iter",
            "extra": "iterations: 1433854\ncpu: 488.0945340320566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 512.5724846316532,
            "unit": "ns/iter",
            "extra": "iterations: 1447293\ncpu: 512.5526068322027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.82390284621647,
            "unit": "ns/iter",
            "extra": "iterations: 1435168\ncpu: 482.82019944703313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1382.5486032093083,
            "unit": "ns/iter",
            "extra": "iterations: 524667\ncpu: 1382.4864151928764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4691.802271728695,
            "unit": "ns/iter",
            "extra": "iterations: 168418\ncpu: 4691.696255744639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25564.51616770108,
            "unit": "ns/iter",
            "extra": "iterations: 32534\ncpu: 25562.159586893682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20379.02730317441,
            "unit": "ns/iter",
            "extra": "iterations: 41204\ncpu: 20358.161828948625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20449.632184756327,
            "unit": "ns/iter",
            "extra": "iterations: 40659\ncpu: 20448.446838338346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21021.840436577822,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21021.074223201344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45617.99327832142,
            "unit": "ns/iter",
            "extra": "iterations: 18299\ncpu: 45615.192086999334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 537980.6740196211,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 537947.5490196081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 426885.02710551454,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 426874.9757986437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 422462.40922619705,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 422435.4662698407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 428599.6356551394,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 428587.43302484154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257818.13881598355,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 257812.0443277918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 430957.86080947786,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 430937.1174728527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.5633540053644,
            "unit": "ns/iter",
            "extra": "iterations: 1284828\ncpu: 548.5552151727666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.1175342574554,
            "unit": "ns/iter",
            "extra": "iterations: 1662996\ncpu: 420.10046927353073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 427.1108881218841,
            "unit": "ns/iter",
            "extra": "iterations: 1636352\ncpu: 427.1022371714607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 433.47573773449176,
            "unit": "ns/iter",
            "extra": "iterations: 1629753\ncpu: 433.41438856072443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1096.5773817304403,
            "unit": "ns/iter",
            "extra": "iterations: 657946\ncpu: 1096.5352779711372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2408.363661175926,
            "unit": "ns/iter",
            "extra": "iterations: 333412\ncpu: 2408.2390555828833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9051.870442548878,
            "unit": "ns/iter",
            "extra": "iterations: 89798\ncpu: 9051.399808458942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9849.066359805298,
            "unit": "ns/iter",
            "extra": "iterations: 82339\ncpu: 9848.588153851775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10679.692867031581,
            "unit": "ns/iter",
            "extra": "iterations: 77289\ncpu: 10679.473146243394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10553.478689074933,
            "unit": "ns/iter",
            "extra": "iterations: 77472\ncpu: 10553.295384138786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31217.60069822486,
            "unit": "ns/iter",
            "extra": "iterations: 26639\ncpu: 31215.773865385476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276905.0754296545,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 276891.0566518141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212102.83467250798,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 212090.55271487747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210705.8730620121,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 210693.8226744182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211611.63720029156,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 211605.01332041665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112290.6390562885,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 112286.93422233593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201456.3426203109,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 201460.05065622836 ns\nthreads: 1"
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
        "date": 1702079189731,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1300.507377803331,
            "unit": "ns/iter",
            "extra": "iterations: 528206\ncpu: 1300.4793584321271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 997.2488146770777,
            "unit": "ns/iter",
            "extra": "iterations: 698122\ncpu: 997.2163891125043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1017.5055334338041,
            "unit": "ns/iter",
            "extra": "iterations: 703180\ncpu: 1017.4527148098641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1004.3661334554221,
            "unit": "ns/iter",
            "extra": "iterations: 696847\ncpu: 1004.3597805544108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2603.65722359901,
            "unit": "ns/iter",
            "extra": "iterations: 273181\ncpu: 2603.495118620986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6377.215017880149,
            "unit": "ns/iter",
            "extra": "iterations: 129752\ncpu: 6377.092453295516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34360.388665311024,
            "unit": "ns/iter",
            "extra": "iterations: 24103\ncpu: 34358.39936937311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31273.109065103927,
            "unit": "ns/iter",
            "extra": "iterations: 27479\ncpu: 31272.076858692104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30716.824571921312,
            "unit": "ns/iter",
            "extra": "iterations: 26689\ncpu: 30715.80801079094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31231.791274396975,
            "unit": "ns/iter",
            "extra": "iterations: 26130\ncpu: 31230.631458094107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64541.43724516194,
            "unit": "ns/iter",
            "extra": "iterations: 13489\ncpu: 64536.3481355179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647952.1789999865,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647908.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 510857.0669999892,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510849.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512479.9330000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512363.6999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507325.32300000347,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507327.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 374766.664950669,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374745.4740454737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515208.1150000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515182.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.897513589631,
            "unit": "ns/iter",
            "extra": "iterations: 1113533\ncpu: 627.8887109766839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 488.1046612834992,
            "unit": "ns/iter",
            "extra": "iterations: 1433854\ncpu: 488.0945340320566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 512.5724846316532,
            "unit": "ns/iter",
            "extra": "iterations: 1447293\ncpu: 512.5526068322027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.82390284621647,
            "unit": "ns/iter",
            "extra": "iterations: 1435168\ncpu: 482.82019944703313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1382.5486032093083,
            "unit": "ns/iter",
            "extra": "iterations: 524667\ncpu: 1382.4864151928764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4691.802271728695,
            "unit": "ns/iter",
            "extra": "iterations: 168418\ncpu: 4691.696255744639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25564.51616770108,
            "unit": "ns/iter",
            "extra": "iterations: 32534\ncpu: 25562.159586893682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20379.02730317441,
            "unit": "ns/iter",
            "extra": "iterations: 41204\ncpu: 20358.161828948625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20449.632184756327,
            "unit": "ns/iter",
            "extra": "iterations: 40659\ncpu: 20448.446838338346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21021.840436577822,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21021.074223201344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45617.99327832142,
            "unit": "ns/iter",
            "extra": "iterations: 18299\ncpu: 45615.192086999334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 537980.6740196211,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 537947.5490196081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 426885.02710551454,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 426874.9757986437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 422462.40922619705,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 422435.4662698407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 428599.6356551394,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 428587.43302484154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257818.13881598355,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 257812.0443277918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 430957.86080947786,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 430937.1174728527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.5633540053644,
            "unit": "ns/iter",
            "extra": "iterations: 1284828\ncpu: 548.5552151727666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.1175342574554,
            "unit": "ns/iter",
            "extra": "iterations: 1662996\ncpu: 420.10046927353073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 427.1108881218841,
            "unit": "ns/iter",
            "extra": "iterations: 1636352\ncpu: 427.1022371714607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 433.47573773449176,
            "unit": "ns/iter",
            "extra": "iterations: 1629753\ncpu: 433.41438856072443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1096.5773817304403,
            "unit": "ns/iter",
            "extra": "iterations: 657946\ncpu: 1096.5352779711372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2408.363661175926,
            "unit": "ns/iter",
            "extra": "iterations: 333412\ncpu: 2408.2390555828833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9051.870442548878,
            "unit": "ns/iter",
            "extra": "iterations: 89798\ncpu: 9051.399808458942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9849.066359805298,
            "unit": "ns/iter",
            "extra": "iterations: 82339\ncpu: 9848.588153851775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10679.692867031581,
            "unit": "ns/iter",
            "extra": "iterations: 77289\ncpu: 10679.473146243394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10553.478689074933,
            "unit": "ns/iter",
            "extra": "iterations: 77472\ncpu: 10553.295384138786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31217.60069822486,
            "unit": "ns/iter",
            "extra": "iterations: 26639\ncpu: 31215.773865385476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276905.0754296545,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 276891.0566518141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212102.83467250798,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 212090.55271487747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210705.8730620121,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 210693.8226744182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211611.63720029156,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 211605.01332041665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112290.6390562885,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 112286.93422233593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201456.3426203109,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 201460.05065622836 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}