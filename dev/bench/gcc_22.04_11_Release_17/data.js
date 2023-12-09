window.BENCHMARK_DATA = {
  "lastUpdate": 1702083174931,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Release c++-17": [
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
        "date": 1702079193322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1204.7238326738507,
            "unit": "ns/iter",
            "extra": "iterations: 585826\ncpu: 1204.6867158507816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 967.8361862175447,
            "unit": "ns/iter",
            "extra": "iterations: 724121\ncpu: 967.8146331897572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 968.5726246378916,
            "unit": "ns/iter",
            "extra": "iterations: 727026\ncpu: 968.5430782392923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 962.5239510699806,
            "unit": "ns/iter",
            "extra": "iterations: 729696\ncpu: 962.456009077753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2529.802115930095,
            "unit": "ns/iter",
            "extra": "iterations: 280255\ncpu: 2529.712940001069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5771.428859999901,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5771.226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29573.821956520915,
            "unit": "ns/iter",
            "extra": "iterations: 27600\ncpu: 29573.39855072463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26361.525056548817,
            "unit": "ns/iter",
            "extra": "iterations: 31389\ncpu: 26360.533945012587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25609.08455017917,
            "unit": "ns/iter",
            "extra": "iterations: 32324\ncpu: 25608.216804850872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27102.444535434344,
            "unit": "ns/iter",
            "extra": "iterations: 31750\ncpu: 27101.562204724407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 62492.207000002505,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62488.809999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 640175.4590000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640121.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 503687.8349999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503677.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 509665.56200000923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509621.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 509274.51000001153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509255.59999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 380389.2005076222,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 380389.1285956005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 512186.11499996315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512147.6000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 639.384970239833,
            "unit": "ns/iter",
            "extra": "iterations: 1108361\ncpu: 639.3421457449339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.3239473332534,
            "unit": "ns/iter",
            "extra": "iterations: 1354251\ncpu: 519.3020348517373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 508.0638511388382,
            "unit": "ns/iter",
            "extra": "iterations: 1378143\ncpu: 508.04989032342763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 505.6440655703941,
            "unit": "ns/iter",
            "extra": "iterations: 1385626\ncpu: 505.58527337102464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1387.8798556230054,
            "unit": "ns/iter",
            "extra": "iterations: 538036\ncpu: 1387.7762826279304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3997.617447328167,
            "unit": "ns/iter",
            "extra": "iterations: 198208\ncpu: 3997.1408823054585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21950.521808481608,
            "unit": "ns/iter",
            "extra": "iterations: 36362\ncpu: 21943.666464990914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17228.67237629736,
            "unit": "ns/iter",
            "extra": "iterations: 48281\ncpu: 17228.32170004766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17001.807711168738,
            "unit": "ns/iter",
            "extra": "iterations: 48942\ncpu: 17001.352621470312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17586.07438401718,
            "unit": "ns/iter",
            "extra": "iterations: 47201\ncpu: 17585.5935255609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43861.767411976514,
            "unit": "ns/iter",
            "extra": "iterations: 19455\ncpu: 43858.80236443082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 546723.2206686657,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 546706.4437689984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434986.68003960315,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 434971.1738484403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 428586.80734408245,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 428578.26961770596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 432731.2035661116,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 432689.4502228825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 260452.28437133695,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 260426.20446533512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 440645.87687686994,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 440607.60760760825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 524.7200839307756,
            "unit": "ns/iter",
            "extra": "iterations: 1335386\ncpu: 524.675786626487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.5543485826855,
            "unit": "ns/iter",
            "extra": "iterations: 1680881\ncpu: 404.5402976177366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 400.75504065974036,
            "unit": "ns/iter",
            "extra": "iterations: 1746200\ncpu: 400.73771618371387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.0810439576354,
            "unit": "ns/iter",
            "extra": "iterations: 1721066\ncpu: 408.05582121777746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1084.5128039509598,
            "unit": "ns/iter",
            "extra": "iterations: 651791\ncpu: 1084.478306696479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2374.395578894045,
            "unit": "ns/iter",
            "extra": "iterations: 336115\ncpu: 2374.327536706202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8216.16612057997,
            "unit": "ns/iter",
            "extra": "iterations: 99801\ncpu: 8215.851544573712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9141.522354216186,
            "unit": "ns/iter",
            "extra": "iterations: 90408\ncpu: 9141.302760817633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9293.18388082597,
            "unit": "ns/iter",
            "extra": "iterations: 88677\ncpu: 9292.810988193034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9089.544176972286,
            "unit": "ns/iter",
            "extra": "iterations: 90726\ncpu: 9089.22910742234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30113.274936800033,
            "unit": "ns/iter",
            "extra": "iterations: 27690\ncpu: 30112.928855182356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282450.1934754543,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 282441.0206718362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215912.53984888084,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 215904.36266146705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211260.79729729696,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 211252.34073359024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210055.95458961203,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 210043.6619718313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110674.7902204172,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 110670.62325817096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 199996.6760595667,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 199987.51431844218 ns\nthreads: 1"
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
        "date": 1702079193322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1204.7238326738507,
            "unit": "ns/iter",
            "extra": "iterations: 585826\ncpu: 1204.6867158507816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 967.8361862175447,
            "unit": "ns/iter",
            "extra": "iterations: 724121\ncpu: 967.8146331897572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 968.5726246378916,
            "unit": "ns/iter",
            "extra": "iterations: 727026\ncpu: 968.5430782392923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 962.5239510699806,
            "unit": "ns/iter",
            "extra": "iterations: 729696\ncpu: 962.456009077753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2529.802115930095,
            "unit": "ns/iter",
            "extra": "iterations: 280255\ncpu: 2529.712940001069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5771.428859999901,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5771.226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29573.821956520915,
            "unit": "ns/iter",
            "extra": "iterations: 27600\ncpu: 29573.39855072463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26361.525056548817,
            "unit": "ns/iter",
            "extra": "iterations: 31389\ncpu: 26360.533945012587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25609.08455017917,
            "unit": "ns/iter",
            "extra": "iterations: 32324\ncpu: 25608.216804850872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27102.444535434344,
            "unit": "ns/iter",
            "extra": "iterations: 31750\ncpu: 27101.562204724407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 62492.207000002505,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62488.809999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 640175.4590000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640121.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 503687.8349999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503677.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 509665.56200000923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509621.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 509274.51000001153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509255.59999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 380389.2005076222,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 380389.1285956005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 512186.11499996315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512147.6000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 639.384970239833,
            "unit": "ns/iter",
            "extra": "iterations: 1108361\ncpu: 639.3421457449339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.3239473332534,
            "unit": "ns/iter",
            "extra": "iterations: 1354251\ncpu: 519.3020348517373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 508.0638511388382,
            "unit": "ns/iter",
            "extra": "iterations: 1378143\ncpu: 508.04989032342763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 505.6440655703941,
            "unit": "ns/iter",
            "extra": "iterations: 1385626\ncpu: 505.58527337102464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1387.8798556230054,
            "unit": "ns/iter",
            "extra": "iterations: 538036\ncpu: 1387.7762826279304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3997.617447328167,
            "unit": "ns/iter",
            "extra": "iterations: 198208\ncpu: 3997.1408823054585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21950.521808481608,
            "unit": "ns/iter",
            "extra": "iterations: 36362\ncpu: 21943.666464990914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17228.67237629736,
            "unit": "ns/iter",
            "extra": "iterations: 48281\ncpu: 17228.32170004766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17001.807711168738,
            "unit": "ns/iter",
            "extra": "iterations: 48942\ncpu: 17001.352621470312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17586.07438401718,
            "unit": "ns/iter",
            "extra": "iterations: 47201\ncpu: 17585.5935255609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43861.767411976514,
            "unit": "ns/iter",
            "extra": "iterations: 19455\ncpu: 43858.80236443082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 546723.2206686657,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 546706.4437689984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434986.68003960315,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 434971.1738484403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 428586.80734408245,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 428578.26961770596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 432731.2035661116,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 432689.4502228825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 260452.28437133695,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 260426.20446533512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 440645.87687686994,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 440607.60760760825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 524.7200839307756,
            "unit": "ns/iter",
            "extra": "iterations: 1335386\ncpu: 524.675786626487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.5543485826855,
            "unit": "ns/iter",
            "extra": "iterations: 1680881\ncpu: 404.5402976177366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 400.75504065974036,
            "unit": "ns/iter",
            "extra": "iterations: 1746200\ncpu: 400.73771618371387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.0810439576354,
            "unit": "ns/iter",
            "extra": "iterations: 1721066\ncpu: 408.05582121777746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1084.5128039509598,
            "unit": "ns/iter",
            "extra": "iterations: 651791\ncpu: 1084.478306696479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2374.395578894045,
            "unit": "ns/iter",
            "extra": "iterations: 336115\ncpu: 2374.327536706202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8216.16612057997,
            "unit": "ns/iter",
            "extra": "iterations: 99801\ncpu: 8215.851544573712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9141.522354216186,
            "unit": "ns/iter",
            "extra": "iterations: 90408\ncpu: 9141.302760817633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9293.18388082597,
            "unit": "ns/iter",
            "extra": "iterations: 88677\ncpu: 9292.810988193034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9089.544176972286,
            "unit": "ns/iter",
            "extra": "iterations: 90726\ncpu: 9089.22910742234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30113.274936800033,
            "unit": "ns/iter",
            "extra": "iterations: 27690\ncpu: 30112.928855182356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282450.1934754543,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 282441.0206718362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215912.53984888084,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 215904.36266146705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211260.79729729696,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 211252.34073359024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210055.95458961203,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 210043.6619718313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110674.7902204172,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 110670.62325817096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 199996.6760595667,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 199987.51431844218 ns\nthreads: 1"
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
        "date": 1702083173968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1471.8089848734858,
            "unit": "ns/iter",
            "extra": "iterations: 467853\ncpu: 1471.6449397567185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17761.79526583495,
            "unit": "ns/iter",
            "extra": "iterations: 46006\ncpu: 17760.974655479717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37617.79216043753,
            "unit": "ns/iter",
            "extra": "iterations: 21940\ncpu: 37615.79762989974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56160.83081962868,
            "unit": "ns/iter",
            "extra": "iterations: 14653\ncpu: 56158.51361495942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65344.258999999736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 65338.290000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77658.86384387976,
            "unit": "ns/iter",
            "extra": "iterations: 11171\ncpu: 77657.62241518215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93979.58868049063,
            "unit": "ns/iter",
            "extra": "iterations: 9117\ncpu: 93974.71756060109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108028.39666793265,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 108024.57077451357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 127694.30049892995,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 127688.48182466147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1253.6080369343417,
            "unit": "ns/iter",
            "extra": "iterations: 558397\ncpu: 1253.5609969251266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1014.014944037719,
            "unit": "ns/iter",
            "extra": "iterations: 706101\ncpu: 1013.999980172806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 991.952443742834,
            "unit": "ns/iter",
            "extra": "iterations: 703777\ncpu: 991.9336664881082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 990.9984818772704,
            "unit": "ns/iter",
            "extra": "iterations: 706794\ncpu: 991.0065733438593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2039.4645258329147,
            "unit": "ns/iter",
            "extra": "iterations: 343729\ncpu: 2038.1312021970812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6703.835804636749,
            "unit": "ns/iter",
            "extra": "iterations: 139535\ncpu: 6703.766796861005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28236.520016327115,
            "unit": "ns/iter",
            "extra": "iterations: 29401\ncpu: 28235.21989047994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24676.22660360612,
            "unit": "ns/iter",
            "extra": "iterations: 33830\ncpu: 24675.583801359702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26258.338715867576,
            "unit": "ns/iter",
            "extra": "iterations: 33875\ncpu: 26255.790405904012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24445.99617481408,
            "unit": "ns/iter",
            "extra": "iterations: 33201\ncpu: 24445.061895726056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58596.903199998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58593.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 619319.6670000134,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619291.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 675178.9675141316,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 675107.4858757078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 616247.5088464118,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 616237.0842179741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 614460.9829666456,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 614443.2931156837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 347350.0448412851,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 347337.6984126987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 624286.9879858675,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 624230.5300353362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 769.9114010702717,
            "unit": "ns/iter",
            "extra": "iterations: 911546\ncpu: 769.8960886230625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12547.640072959517,
            "unit": "ns/iter",
            "extra": "iterations: 65241\ncpu: 12547.215707913716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26752.15523407672,
            "unit": "ns/iter",
            "extra": "iterations: 31037\ncpu: 26751.47726906595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40329.0852330452,
            "unit": "ns/iter",
            "extra": "iterations: 20661\ncpu: 40327.33168772088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53536.662517643315,
            "unit": "ns/iter",
            "extra": "iterations: 15586\ncpu: 53534.74913383813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55735.93839999944,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55735.139999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66444.34181957223,
            "unit": "ns/iter",
            "extra": "iterations: 13080\ncpu: 66442.26299694218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78567.35576323884,
            "unit": "ns/iter",
            "extra": "iterations: 11235\ncpu: 78563.79172229646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88515.07338889864,
            "unit": "ns/iter",
            "extra": "iterations: 9838\ncpu: 88512.40089449055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 586.1382976406599,
            "unit": "ns/iter",
            "extra": "iterations: 1193802\ncpu: 585.7968071757288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 469.4896958943094,
            "unit": "ns/iter",
            "extra": "iterations: 1495763\ncpu: 469.4380727428038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 506.4956209467349,
            "unit": "ns/iter",
            "extra": "iterations: 1490619\ncpu: 506.4475228076403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.3593800908833,
            "unit": "ns/iter",
            "extra": "iterations: 1448664\ncpu: 475.34107287818176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1030.4732231071462,
            "unit": "ns/iter",
            "extra": "iterations: 679149\ncpu: 1030.4401537806905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4125.5546350981585,
            "unit": "ns/iter",
            "extra": "iterations: 192175\ncpu: 4125.351892806061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19174.26275062313,
            "unit": "ns/iter",
            "extra": "iterations: 43292\ncpu: 19173.422341310095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15211.429805019558,
            "unit": "ns/iter",
            "extra": "iterations: 54313\ncpu: 15210.964225875923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15232.87948455107,
            "unit": "ns/iter",
            "extra": "iterations: 54632\ncpu: 15232.243007761052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15818.097310693041,
            "unit": "ns/iter",
            "extra": "iterations: 51649\ncpu: 15815.860907277947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43002.94940658635,
            "unit": "ns/iter",
            "extra": "iterations: 19548\ncpu: 43003.25864538566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 498015.6549019436,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 498015.1260504229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 420638.24703085946,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 420634.8218527292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 419757.8426858612,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 419739.5683453245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 418303.11237014504,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 418291.1709159613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245122.4901416184,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 245111.4412663142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 414236.27920227795,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 414219.8955365617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 591.5753859291458,
            "unit": "ns/iter",
            "extra": "iterations: 1173402\ncpu: 591.5453527435583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5378.003120000017,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5377.863000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10559.45190003822,
            "unit": "ns/iter",
            "extra": "iterations: 80551\ncpu: 10559.218383384437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15914.60744205268,
            "unit": "ns/iter",
            "extra": "iterations: 53238\ncpu: 15914.12524888233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20616.835115489193,
            "unit": "ns/iter",
            "extra": "iterations: 40307\ncpu: 20616.48348922018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25709.89158147557,
            "unit": "ns/iter",
            "extra": "iterations: 32476\ncpu: 25709.881142997827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31308.93746293181,
            "unit": "ns/iter",
            "extra": "iterations: 26976\ncpu: 31308.952402135237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36251.10185105064,
            "unit": "ns/iter",
            "extra": "iterations: 23122\ncpu: 36251.08554623306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41535.69637012162,
            "unit": "ns/iter",
            "extra": "iterations: 20469\ncpu: 41534.369045874206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.063886809288,
            "unit": "ns/iter",
            "extra": "iterations: 1163417\ncpu: 541.0352435970946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.6952495095729,
            "unit": "ns/iter",
            "extra": "iterations: 1704624\ncpu: 410.6699189968017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.43612792296614,
            "unit": "ns/iter",
            "extra": "iterations: 1683169\ncpu: 411.4208971291712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.9985584504795,
            "unit": "ns/iter",
            "extra": "iterations: 1720371\ncpu: 411.9972378051052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 922.1953346560367,
            "unit": "ns/iter",
            "extra": "iterations: 760587\ncpu: 922.184970292673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2480.6293698918184,
            "unit": "ns/iter",
            "extra": "iterations: 322405\ncpu: 2480.4516058993822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8631.577655926138,
            "unit": "ns/iter",
            "extra": "iterations: 94468\ncpu: 8631.476267095717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9151.657147818896,
            "unit": "ns/iter",
            "extra": "iterations: 92133\ncpu: 9151.665527009924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9068.103579211389,
            "unit": "ns/iter",
            "extra": "iterations: 90858\ncpu: 9068.096370160125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8929.854015075458,
            "unit": "ns/iter",
            "extra": "iterations: 91804\ncpu: 8929.803712256506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 25958.216887365877,
            "unit": "ns/iter",
            "extra": "iterations: 32095\ncpu: 25958.22402243346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263577.4264138956,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 263572.2686375314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199364.5009345769,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 199364.48598130795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202333.0115348431,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 202330.296610168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 204292.35585690415,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 204288.35632452797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102532.2334584709,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 102531.82778038444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198997.76102192383,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 198997.8069183804 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}