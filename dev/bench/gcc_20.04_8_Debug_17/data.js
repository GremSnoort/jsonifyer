window.BENCHMARK_DATA = {
  "lastUpdate": 1702079198231,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Debug c++-17": [
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
        "date": 1702079197789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12185.148041625287,
            "unit": "ns/iter",
            "extra": "iterations: 57369\ncpu: 12184.71648451254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10122.907667713669,
            "unit": "ns/iter",
            "extra": "iterations: 69434\ncpu: 10121.67093930927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10067.464850590102,
            "unit": "ns/iter",
            "extra": "iterations: 69674\ncpu: 10067.08958865574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10584.233201128221,
            "unit": "ns/iter",
            "extra": "iterations: 69841\ncpu: 10583.979324465568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21009.714060146292,
            "unit": "ns/iter",
            "extra": "iterations: 27866\ncpu: 21009.459556448735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50775.37110000208,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50775.96 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 276386.913057545,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 276369.7155785391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222752.84121620376,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 222744.67255717254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 220094.52059827102,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 219568.03988454462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229751.38859832345,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 229742.0763598327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591799.4042132857,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 591777.2876892686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4118383.7079646145,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4118327.8761061938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3332820.9321429166,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332717.8571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3353105.1798561965,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3352916.906474819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3355560.974545452,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3355354.1818181872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1965501.2658227056,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1965379.5358649765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3254278.9265732667,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3254090.559440565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5537.314431721674,
            "unit": "ns/iter",
            "extra": "iterations: 126021\ncpu: 5537.023194546952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4565.226211134759,
            "unit": "ns/iter",
            "extra": "iterations: 153286\ncpu: 4564.942656211277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4554.562881253844,
            "unit": "ns/iter",
            "extra": "iterations: 153933\ncpu: 4554.400940668992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4563.00164917538,
            "unit": "ns/iter",
            "extra": "iterations: 153410\ncpu: 4562.832931360403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9554.353138908982,
            "unit": "ns/iter",
            "extra": "iterations: 75265\ncpu: 9553.840430478971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31317.05128205104,
            "unit": "ns/iter",
            "extra": "iterations: 26286\ncpu: 31314.193867457958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140827.95857497182,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 140824.39105219545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112896.73992284088,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 112887.86750033271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111606.91935907364,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 111602.28526398762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114027.54079595597,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 114020.79062957576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 279514.76841769356,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 279504.9967969257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2303286.312807865,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2303134.482758616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1873857.2580645268,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1873758.6693548362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1874891.1391129706,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1874841.129032256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1889144.313765206,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1889099.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1122681.4096385553,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1122587.951807236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1824855.5929550277,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1824729.9412915856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6452.702210316095,
            "unit": "ns/iter",
            "extra": "iterations: 108627\ncpu: 6452.45473040775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5387.693543553904,
            "unit": "ns/iter",
            "extra": "iterations: 130149\ncpu: 5387.451305811031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5340.128491363992,
            "unit": "ns/iter",
            "extra": "iterations: 130787\ncpu: 5339.761597100623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5345.469339730458,
            "unit": "ns/iter",
            "extra": "iterations: 131310\ncpu: 5345.292056964453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 11201.002298392654,
            "unit": "ns/iter",
            "extra": "iterations: 65263\ncpu: 11200.190000459696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28010.78249255086,
            "unit": "ns/iter",
            "extra": "iterations: 29199\ncpu: 28009.287989314656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135347.15042843556,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 135342.93874960224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109650.14598070318,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 109641.4276527327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109326.47831109066,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 109323.58829568775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110363.7010309251,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 110358.71134020631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 311026.6158495733,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 311014.03626595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1830362.7445972657,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1830230.0589390993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1462825.256692929,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1462732.1259842492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1469869.3910970462,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1469786.327503975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1464276.8091482557,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1464175.3943217662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 835260.7415832592,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 835206.3694267513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1419798.5460122223,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1419732.5153374267 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}