window.BENCHMARK_DATA = {
  "lastUpdate": 1702079227508,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702079226395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1448.6811119475656,
            "unit": "ns/iter",
            "extra": "iterations: 499448\ncpu: 1448.6851484038377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1170.8291747661938,
            "unit": "ns/iter",
            "extra": "iterations: 620406\ncpu: 1170.781230355606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1096.1030467971946,
            "unit": "ns/iter",
            "extra": "iterations: 638244\ncpu: 1096.0862930164642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1098.3322886572705,
            "unit": "ns/iter",
            "extra": "iterations: 636561\ncpu: 1098.2878310169808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2877.924098128755,
            "unit": "ns/iter",
            "extra": "iterations: 244658\ncpu: 2877.8543926624106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7301.383766662412,
            "unit": "ns/iter",
            "extra": "iterations: 113655\ncpu: 7301.101579340986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41913.267086419975,
            "unit": "ns/iter",
            "extra": "iterations: 19694\ncpu: 41885.00558545753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33520.218718168435,
            "unit": "ns/iter",
            "extra": "iterations: 24543\ncpu: 33518.81188118809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34044.773998926765,
            "unit": "ns/iter",
            "extra": "iterations: 24199\ncpu: 34043.74974172484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 33928.17848380718,
            "unit": "ns/iter",
            "extra": "iterations: 24456\ncpu: 33927.96450768733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80902.16202091023,
            "unit": "ns/iter",
            "extra": "iterations: 10906\ncpu: 80898.77131854025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 672585.2600000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672550.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 536888.3340000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536826.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 541875.4130000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541860.7000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 541455.190000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541422.5000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 395574.00315457315,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 395554.93465525005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 550814.000999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550786.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 714.0685072830915,
            "unit": "ns/iter",
            "extra": "iterations: 977064\ncpu: 714.052508331082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 568.9333094507998,
            "unit": "ns/iter",
            "extra": "iterations: 1236607\ncpu: 568.929013017071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 563.4427139972074,
            "unit": "ns/iter",
            "extra": "iterations: 1235904\ncpu: 563.4277419605417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 569.950118603948,
            "unit": "ns/iter",
            "extra": "iterations: 1225507\ncpu: 569.9461528983513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1531.8036398941235,
            "unit": "ns/iter",
            "extra": "iterations: 485124\ncpu: 1531.8077439994684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5382.753915307263,
            "unit": "ns/iter",
            "extra": "iterations: 147498\ncpu: 5382.788919171777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 28629.646032347475,
            "unit": "ns/iter",
            "extra": "iterations: 28997\ncpu: 28629.05817843229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22710.25415702757,
            "unit": "ns/iter",
            "extra": "iterations: 36745\ncpu: 22710.306164103895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22042.102085591952,
            "unit": "ns/iter",
            "extra": "iterations: 37831\ncpu: 22041.167296661435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22493.218897045685,
            "unit": "ns/iter",
            "extra": "iterations: 37191\ncpu: 22492.654136753536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56163.561775926704,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 56159.41727367325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 550830.1799746408,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 550811.2167300365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 456855.9340944549,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 456848.365334718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 456165.48412696406,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 456144.28571428615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 459536.8677002604,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 459531.52454780415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 275015.2890282186,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 274991.0658307213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 452691.7162935835,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 452676.3144195743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 635.8837762031948,
            "unit": "ns/iter",
            "extra": "iterations: 1095619\ncpu: 635.8500537139264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 521.4083954231772,
            "unit": "ns/iter",
            "extra": "iterations: 1342946\ncpu: 521.3914036752044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 486.8743954282526,
            "unit": "ns/iter",
            "extra": "iterations: 1441723\ncpu: 486.85246749895686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 499.1721407136116,
            "unit": "ns/iter",
            "extra": "iterations: 1399239\ncpu: 499.16075809779085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1202.9480408653758,
            "unit": "ns/iter",
            "extra": "iterations: 625761\ncpu: 1202.9143714613122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2708.7532840056406,
            "unit": "ns/iter",
            "extra": "iterations: 295980\ncpu: 2708.7593756334895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13220.673600098145,
            "unit": "ns/iter",
            "extra": "iterations: 64951\ncpu: 13220.105926005712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10973.567356992786,
            "unit": "ns/iter",
            "extra": "iterations: 74699\ncpu: 10973.441411531618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11157.387169801028,
            "unit": "ns/iter",
            "extra": "iterations: 73327\ncpu: 11157.015833185636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10618.34084692269,
            "unit": "ns/iter",
            "extra": "iterations: 76040\ncpu: 10618.36664913204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40359.062018526674,
            "unit": "ns/iter",
            "extra": "iterations: 20510\ncpu: 40357.454900048644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 300069.81852357794,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 300051.7088175005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 233158.21721748536,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 233144.80277185526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 228852.6120189684,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 228844.359515023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 225795.52213306096,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 225783.45845198105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116353.43558282603,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 116348.42624699995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214321.35243693998,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 214309.84570169094 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}