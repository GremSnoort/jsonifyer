window.BENCHMARK_DATA = {
  "lastUpdate": 1702083163582,
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
        "date": 1702083162644,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14341.491412887272,
            "unit": "ns/iter",
            "extra": "iterations: 49551\ncpu: 14341.381606829329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123396.56296296231,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 123395.8074074074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 231142.40498939744,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 231140.8174097665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337480.5821944417,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 337474.2288168683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446941.92291879543,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 446933.14491264115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565150.0420918387,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 565124.4260204079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536637.2020000085,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536610.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 620903.6230000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620885.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 709841.0361260445,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 709835.664873175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11428.480739296538,
            "unit": "ns/iter",
            "extra": "iterations: 61031\ncpu: 11428.131605249775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9260.636510715527,
            "unit": "ns/iter",
            "extra": "iterations: 75408\ncpu: 9260.47766815191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9325.549378688107,
            "unit": "ns/iter",
            "extra": "iterations: 75083\ncpu: 9324.81387264762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9351.01683695129,
            "unit": "ns/iter",
            "extra": "iterations: 73113\ncpu: 9350.739266614712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15197.896452916184,
            "unit": "ns/iter",
            "extra": "iterations: 46066\ncpu: 15197.455824252136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55220.14981096582,
            "unit": "ns/iter",
            "extra": "iterations: 14812\ncpu: 55218.78206859302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 260002.13846622748,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 259982.10590383448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202101.07999999882,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 202095.16666666683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201360.06637733258,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 201343.2473832014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198895.0128384676,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 198895.611577964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 489294.3189129263,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 489276.2063227956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3896839.424999854,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3896775.8333333437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3360226.257525049,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3359615.7190635405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3153387.6401384478,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3153268.1660899664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3138374.5685618585,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3138357.859531766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1787015.5163776528,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1787008.0924855475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3053850.9409836004,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3048154.7540983604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6909.905066027502,
            "unit": "ns/iter",
            "extra": "iterations: 101776\ncpu: 6909.797005187867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70607.48963687565,
            "unit": "ns/iter",
            "extra": "iterations: 12062\ncpu: 70606.3671032996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135487.664555006,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 135485.13597033347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199773.8623621338,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 199765.94669117607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263558.8869065625,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 263555.5488358034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328792.5013162919,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 328789.281684843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391116.18124436354,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 391108.7466185745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455032.3420639053,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 455019.69617601106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519609.98035716393,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 519611.1904761912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5153.608811946138,
            "unit": "ns/iter",
            "extra": "iterations: 135339\ncpu: 5153.521157981087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4171.303202216766,
            "unit": "ns/iter",
            "extra": "iterations: 167103\ncpu: 4171.206381692732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4189.647664011023,
            "unit": "ns/iter",
            "extra": "iterations: 166696\ncpu: 4189.546239861785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4200.697172029816,
            "unit": "ns/iter",
            "extra": "iterations: 166692\ncpu: 4200.649101336612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7506.062388133241,
            "unit": "ns/iter",
            "extra": "iterations: 93303\ncpu: 7505.959079557975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31874.805370943333,
            "unit": "ns/iter",
            "extra": "iterations: 25880\ncpu: 31873.952859350706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136760.72918676125,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 136756.04307296686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109730.70175438531,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 109731.0371517033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114429.032412189,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 114427.37603305782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110976.70255141848,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 110972.81957823456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291451.0187856445,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 291448.4736665525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2182812.7238979046,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2182729.698375868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1787502.0038462053,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1787390.9615384666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1805409.6511628742,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1805291.8604651205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1784415.9174663457,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1784343.570057579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1053229.2581736487,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1053193.3483652826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1740866.7388060587,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1740783.9552238805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6942.277995109474,
            "unit": "ns/iter",
            "extra": "iterations: 98160\ncpu: 6941.950896495482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51146.199599998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51145.46000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94509.740312639,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 94506.15367679427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137646.66501359612,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 137642.12126059862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180929.78740321845,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 180920.5691567278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224430.6083139682,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 224421.40459592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267087.05543577997,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267072.9904527268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309548.3492176368,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 309545.44807965925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 352593.65803319344,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 352577.78227438475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5904.874934175909,
            "unit": "ns/iter",
            "extra": "iterations: 117738\ncpu: 5904.889670284879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4866.1957962547285,
            "unit": "ns/iter",
            "extra": "iterations: 145299\ncpu: 4866.0279836750815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4839.654464143419,
            "unit": "ns/iter",
            "extra": "iterations: 144451\ncpu: 4839.431364268879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4961.686522957366,
            "unit": "ns/iter",
            "extra": "iterations: 144505\ncpu: 4961.468461298971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7200.914299826946,
            "unit": "ns/iter",
            "extra": "iterations: 97176\ncpu: 7200.602000493969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22636.765522017005,
            "unit": "ns/iter",
            "extra": "iterations: 36110\ncpu: 22635.702021600686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122499.16619196704,
            "unit": "ns/iter",
            "extra": "iterations: 7022\ncpu: 122494.85901452602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91841.59614105024,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 91838.10157462755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93616.53102518007,
            "unit": "ns/iter",
            "extra": "iterations: 8896\ncpu: 93615.07419064696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90443.65613767617,
            "unit": "ns/iter",
            "extra": "iterations: 9181\ncpu: 90439.08071016232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 194270.55102485509,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 194260.94635848163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1712490.431734318,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1712391.3284132783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1326196.8359486766,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1326146.3623395164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1343752.163294811,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343712.8612716773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316978.9773692135,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1316933.6633663287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 730136.7248215622,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 730088.8977002339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1290512.3217752562,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290460.7489597914 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}