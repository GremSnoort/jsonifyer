window.BENCHMARK_DATA = {
  "lastUpdate": 1702079193800,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Debug c++-17": [
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
        "date": 1702079193301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11510.985425535357,
            "unit": "ns/iter",
            "extra": "iterations: 61546\ncpu: 11510.853670425373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9208.433622519715,
            "unit": "ns/iter",
            "extra": "iterations: 76306\ncpu: 9207.695331952926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9190.463347382376,
            "unit": "ns/iter",
            "extra": "iterations: 76161\ncpu: 9190.172135344865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9259.132805372881,
            "unit": "ns/iter",
            "extra": "iterations: 75637\ncpu: 9258.871980644391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18002.27165589253,
            "unit": "ns/iter",
            "extra": "iterations: 40220\ncpu: 18002.016409746408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55119.812899320976,
            "unit": "ns/iter",
            "extra": "iterations: 14869\ncpu: 55117.60710202438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248353.12074483107,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 248339.13296479482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201312.7737053669,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201308.84369827382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199942.17825269946,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 199938.9149835604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201485.71519886603,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 201476.5151515154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 472979.68800431065,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 472971.00591715955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3904305.5565217775,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3904137.826086949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3150332.2533783037,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150127.702702705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3119193.2173912707,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3119070.23411371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3137388.9256756045,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3137270.6081081075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1881888.4254032592,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1881815.7258064507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3069308.7450331305,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3069121.523178817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5126.9707143902815,
            "unit": "ns/iter",
            "extra": "iterations: 136620\ncpu: 5126.747181964569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4195.741627110041,
            "unit": "ns/iter",
            "extra": "iterations: 166639\ncpu: 4195.599469511928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4135.091623469301,
            "unit": "ns/iter",
            "extra": "iterations: 169378\ncpu: 4135.079526266684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4220.719455059291,
            "unit": "ns/iter",
            "extra": "iterations: 166697\ncpu: 4220.62604605963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8995.732097282851,
            "unit": "ns/iter",
            "extra": "iterations: 79932\ncpu: 8995.683831256558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31695.807155758554,
            "unit": "ns/iter",
            "extra": "iterations: 26021\ncpu: 31694.715806463977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139219.4972981824,
            "unit": "ns/iter",
            "extra": "iterations: 6107\ncpu: 139216.03078434637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113156.60951621302,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 113151.10313662964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111708.91518971029,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 111705.13325456248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114111.49499933294,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 114106.32084277939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285687.69111842214,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 285680.131578947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2243670.0887290174,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2243589.9280575593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1833136.4695481674,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833081.9253438062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1807658.4526112175,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1807572.5338491385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1805292.7461240327,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1805225.1937984456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1094854.479905456,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1094813.0023640713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1772053.8614800775,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1771972.675521827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5717.864061884113,
            "unit": "ns/iter",
            "extra": "iterations: 121776\ncpu: 5717.622520036757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4767.277778530868,
            "unit": "ns/iter",
            "extra": "iterations: 147524\ncpu: 4766.989100078624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4740.3941867906715,
            "unit": "ns/iter",
            "extra": "iterations: 148455\ncpu: 4740.2162271395455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4772.533653650392,
            "unit": "ns/iter",
            "extra": "iterations: 147354\ncpu: 4772.418800982664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8562.274087522239,
            "unit": "ns/iter",
            "extra": "iterations: 84276\ncpu: 8561.966633442515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22988.75498543269,
            "unit": "ns/iter",
            "extra": "iterations: 35353\ncpu: 22987.607840918838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 108077.96954314734,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 108074.61928933985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 87683.39066532077,
            "unit": "ns/iter",
            "extra": "iterations: 8913\ncpu: 87679.70380343271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 87907.39031427042,
            "unit": "ns/iter",
            "extra": "iterations: 9705\ncpu: 87901.6383307571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87227.78426162348,
            "unit": "ns/iter",
            "extra": "iterations: 9785\ncpu: 87222.94328053136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186073.35069806402,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 186067.43071473294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1673779.2302158433,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1673675.7194244612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1325463.9942857288,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1325419.2857142854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1323871.8662873271,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1323795.0213371231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1325914.1999999916,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1325859.7142857148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 769124.1861042238,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 769093.0521091761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1284780.9639389585,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1284721.0818307926 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}