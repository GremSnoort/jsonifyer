window.BENCHMARK_DATA = {
  "lastUpdate": 1702079195200,
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
      }
    ]
  }
}