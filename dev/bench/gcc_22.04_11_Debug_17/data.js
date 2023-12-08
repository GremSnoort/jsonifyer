window.BENCHMARK_DATA = {
  "lastUpdate": 1702079200999,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Debug c++-17": [
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
        "date": 1702079200034,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11350.185336048537,
            "unit": "ns/iter",
            "extra": "iterations: 62848\ncpu: 11349.322174134419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9022.087831561643,
            "unit": "ns/iter",
            "extra": "iterations: 77512\ncpu: 9021.203168541644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9038.350327336488,
            "unit": "ns/iter",
            "extra": "iterations: 77596\ncpu: 9037.630805711631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9093.163250975465,
            "unit": "ns/iter",
            "extra": "iterations: 76900\ncpu: 9092.482444733418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17630.018429683216,
            "unit": "ns/iter",
            "extra": "iterations: 40858\ncpu: 17624.33060844877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55694.72117558284,
            "unit": "ns/iter",
            "extra": "iterations: 14597\ncpu: 55688.55929300538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263306.5127078802,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 263292.53216190776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210104.6871481014,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 210082.76621787038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 208993.15650405962,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 208976.95630081277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 210209.88294726625,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 210195.66288812214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 475988.7998915401,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 475969.52277657285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3812037.7459016317,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3811781.9672131143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3075807.188118743,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3075498.019801979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3073154.331125875,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3073065.562913909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3057270.4276315332,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3057159.539473684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1868849.5263157783,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1868718.323586747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3000354.3516128715,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3000272.2580645108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4989.57913311858,
            "unit": "ns/iter",
            "extra": "iterations: 139973\ncpu: 4989.262929279223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4100.586407664831,
            "unit": "ns/iter",
            "extra": "iterations: 171067\ncpu: 4100.507988098241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4089.6122116260135,
            "unit": "ns/iter",
            "extra": "iterations: 171132\ncpu: 4089.462520159889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4360.765960745017,
            "unit": "ns/iter",
            "extra": "iterations: 167724\ncpu: 4360.458252843963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8967.60782415507,
            "unit": "ns/iter",
            "extra": "iterations: 80571\ncpu: 8967.268620223156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32697.256782408796,
            "unit": "ns/iter",
            "extra": "iterations: 25286\ncpu: 32695.20287906356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144965.92561284636,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 144957.954353339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116512.71411109647,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 116508.04020100477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115572.41906693524,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115568.2217714673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117098.66680428866,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 117092.85714285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 290386.9929316716,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 290377.28037697735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2126360.418181796,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2126284.5454545435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1743311.3700934602,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1743202.2429906584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1746299.355263088,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1746222.18045113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1733365.5307262442,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733283.2402234697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1047835.9312288491,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1047806.9898534389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1699814.6320582598,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1699712.9326047383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5659.497777525879,
            "unit": "ns/iter",
            "extra": "iterations: 123511\ncpu: 5659.285407777411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4642.628308628852,
            "unit": "ns/iter",
            "extra": "iterations: 151120\ncpu: 4642.366331392265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4705.834223952064,
            "unit": "ns/iter",
            "extra": "iterations: 148773\ncpu: 4705.857245602373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4658.460239151011,
            "unit": "ns/iter",
            "extra": "iterations: 150198\ncpu: 4658.408900251677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8405.054904891396,
            "unit": "ns/iter",
            "extra": "iterations: 85639\ncpu: 8404.929996847242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23225.54583286247,
            "unit": "ns/iter",
            "extra": "iterations: 35324\ncpu: 23225.464273581845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 114745.95439957216,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 114742.49799411569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93160.96857329758,
            "unit": "ns/iter",
            "extra": "iterations: 9196\ncpu: 93156.83993040503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93344.96696927164,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 93342.58995953154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92886.52802775559,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 92882.8472297519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182608.0865818623,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 182602.9544521957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1686116.2028985135,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1686019.9275362226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1325418.4743589237,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1325371.509971516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320773.7130681674,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1320689.488636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319475.8739377104,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1319400.424929174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 752926.9171405539,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 752890.3330625517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1287272.8515950402,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1287211.789181689 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}