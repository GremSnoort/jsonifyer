window.BENCHMARK_DATA = {
  "lastUpdate": 1702083146292,
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
        "date": 1702083145924,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1533.701810191567,
            "unit": "ns/iter",
            "extra": "iterations: 460559\ncpu: 1533.6391211549444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18083.42263015728,
            "unit": "ns/iter",
            "extra": "iterations: 45541\ncpu: 18083.263432950534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37970.73032567677,
            "unit": "ns/iter",
            "extra": "iterations: 21678\ncpu: 37969.44367561582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56372.14671083547,
            "unit": "ns/iter",
            "extra": "iterations: 14791\ncpu: 56372.36833209386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 63007.22255452774,
            "unit": "ns/iter",
            "extra": "iterations: 13709\ncpu: 63000.92639871615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79028.81385672718,
            "unit": "ns/iter",
            "extra": "iterations: 11056\ncpu: 79024.15882778584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 94810.5541492445,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 94805.26084085403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109667.45896959667,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 109662.65163408012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126578.12076240762,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 126570.4204859594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1405.4890127614933,
            "unit": "ns/iter",
            "extra": "iterations: 520786\ncpu: 1405.314658996208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1043.0723712148556,
            "unit": "ns/iter",
            "extra": "iterations: 673486\ncpu: 1043.0129208328003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1046.332284983804,
            "unit": "ns/iter",
            "extra": "iterations: 669624\ncpu: 1046.3216670848112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1060.6034101726007,
            "unit": "ns/iter",
            "extra": "iterations: 659732\ncpu: 1060.6085501385396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2054.6000309481324,
            "unit": "ns/iter",
            "extra": "iterations: 342509\ncpu: 2054.5725805745246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6498.378180066312,
            "unit": "ns/iter",
            "extra": "iterations: 126609\ncpu: 6498.417174134538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32500.41606319974,
            "unit": "ns/iter",
            "extra": "iterations: 25823\ncpu: 32500.224605971463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27327.152254078064,
            "unit": "ns/iter",
            "extra": "iterations: 30101\ncpu: 27327.327995747622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27081.234865086873,
            "unit": "ns/iter",
            "extra": "iterations: 30575\ncpu: 27080.716271463552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27732.02587457403,
            "unit": "ns/iter",
            "extra": "iterations: 29643\ncpu: 27731.879364436834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64122.81359777767,
            "unit": "ns/iter",
            "extra": "iterations: 13664\ncpu: 64121.5895784541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 650742.1029999704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650746.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 614694.0181437412,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 614634.4033496166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 606067.7425605822,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 606037.0242214529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 608460.8525155265,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 608429.4279807034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 347080.9952286312,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 347067.35586480994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 616423.1094077025,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 616409.5470383267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 813.8034843350713,
            "unit": "ns/iter",
            "extra": "iterations: 863809\ncpu: 813.7992310800172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12268.863564575171,
            "unit": "ns/iter",
            "extra": "iterations: 67116\ncpu: 12268.788366410346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26618.262298225945,
            "unit": "ns/iter",
            "extra": "iterations: 31285\ncpu: 26618.130094294425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39823.5542741183,
            "unit": "ns/iter",
            "extra": "iterations: 20203\ncpu: 39821.8779389199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53300.15918600482,
            "unit": "ns/iter",
            "extra": "iterations: 15774\ncpu: 53300.56421960166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55099.799300001,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55097.19000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65739.07334145113,
            "unit": "ns/iter",
            "extra": "iterations: 13144\ncpu: 65739.38679245267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76672.21985690435,
            "unit": "ns/iter",
            "extra": "iterations: 11321\ncpu: 76671.56611606768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87482.33676247815,
            "unit": "ns/iter",
            "extra": "iterations: 9915\ncpu: 87481.99697428153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.4165037791311,
            "unit": "ns/iter",
            "extra": "iterations: 1175658\ncpu: 594.4198908185856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.3321009867263,
            "unit": "ns/iter",
            "extra": "iterations: 1430604\ncpu: 489.3277944141116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.02624924695687,
            "unit": "ns/iter",
            "extra": "iterations: 1439127\ncpu: 486.0131176748101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 504.12972507535954,
            "unit": "ns/iter",
            "extra": "iterations: 1388999\ncpu: 504.1263528627415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1049.1838865821253,
            "unit": "ns/iter",
            "extra": "iterations: 668325\ncpu: 1049.1600643399538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4520.035062363274,
            "unit": "ns/iter",
            "extra": "iterations: 175744\ncpu: 4520.0581527676295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22207.21558691053,
            "unit": "ns/iter",
            "extra": "iterations: 37493\ncpu: 22207.054650201346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17824.05191960767,
            "unit": "ns/iter",
            "extra": "iterations: 46572\ncpu: 17824.151850897495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17723.27158465296,
            "unit": "ns/iter",
            "extra": "iterations: 46862\ncpu: 17723.18296274169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18090.38240829819,
            "unit": "ns/iter",
            "extra": "iterations: 45692\ncpu: 18090.479733870226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45169.61736420852,
            "unit": "ns/iter",
            "extra": "iterations: 18613\ncpu: 45168.82823832798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 540264.0643240156,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 540266.2894580092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 410818.54664179916,
            "unit": "ns/iter",
            "extra": "iterations: 2144\ncpu: 410806.43656716455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 415875.0159250789,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 415868.61826698075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416514.67630332604,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 416512.1327014202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242408.56002216885,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 242397.75436650944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413237.5850661731,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 413239.1776937631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 619.3452304147814,
            "unit": "ns/iter",
            "extra": "iterations: 1126859\ncpu: 619.3269965452646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5657.13431000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5657.160999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10759.835804859833,
            "unit": "ns/iter",
            "extra": "iterations: 75392\ncpu: 10759.680072156172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15969.809492041832,
            "unit": "ns/iter",
            "extra": "iterations: 52465\ncpu: 15969.543505193998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21016.776901812107,
            "unit": "ns/iter",
            "extra": "iterations: 39068\ncpu: 21016.4405651683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26047.947661961378,
            "unit": "ns/iter",
            "extra": "iterations: 31736\ncpu: 26047.89198386686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31352.971762745758,
            "unit": "ns/iter",
            "extra": "iterations: 26419\ncpu: 31351.39861463334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36458.922654120615,
            "unit": "ns/iter",
            "extra": "iterations: 22742\ncpu: 36458.20508310615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41678.71065663236,
            "unit": "ns/iter",
            "extra": "iterations: 20194\ncpu: 41677.027830048726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 551.6569138455925,
            "unit": "ns/iter",
            "extra": "iterations: 1253586\ncpu: 551.6550121012895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.5802461444336,
            "unit": "ns/iter",
            "extra": "iterations: 1621162\ncpu: 429.5690375175391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.2454342299513,
            "unit": "ns/iter",
            "extra": "iterations: 1619004\ncpu: 430.2477325565585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.09888875409723,
            "unit": "ns/iter",
            "extra": "iterations: 1648600\ncpu: 424.08182700472753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 878.588962577116,
            "unit": "ns/iter",
            "extra": "iterations: 796599\ncpu: 878.5784315571514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2338.2194160744657,
            "unit": "ns/iter",
            "extra": "iterations: 336721\ncpu: 2338.147902863223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9004.300802109525,
            "unit": "ns/iter",
            "extra": "iterations: 89514\ncpu: 9004.345688942536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9288.857665652922,
            "unit": "ns/iter",
            "extra": "iterations: 87442\ncpu: 9288.545550193221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10319.942696500864,
            "unit": "ns/iter",
            "extra": "iterations: 78791\ncpu: 10319.999746163883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9826.081982365587,
            "unit": "ns/iter",
            "extra": "iterations: 82225\ncpu: 9825.842505320654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31454.123998938903,
            "unit": "ns/iter",
            "extra": "iterations: 26347\ncpu: 31454.287015599934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254823.7607983274,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 254808.78760798348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198297.33717446125,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 198296.31251440334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197714.55997243687,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 197703.99816176572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199267.99172223636,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 199266.13014486182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103763.65594355395,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 103759.31595312097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192231.74661637246,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 192229.57621477667 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}