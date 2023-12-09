window.BENCHMARK_DATA = {
  "lastUpdate": 1702083191589,
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
        "date": 1702083190572,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15462.286615139059,
            "unit": "ns/iter",
            "extra": "iterations: 45671\ncpu: 15461.082525015874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130855.84091602883,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 130850.19847328242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244605.25633802282,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 244588.56338028173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357626.3728251703,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 357615.53438276716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 484306.6103971853,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 484294.68457943917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 584500.7296021697,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 584476.6689143627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 566545.9539999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566545.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 654429.7578796579,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 654402.1489971343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 748200.7825384205,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 748162.4898949076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13082.464162938531,
            "unit": "ns/iter",
            "extra": "iterations: 57887\ncpu: 13081.70228203225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10166.444264093365,
            "unit": "ns/iter",
            "extra": "iterations: 68385\ncpu: 10165.375447832139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10030.980887978436,
            "unit": "ns/iter",
            "extra": "iterations: 69799\ncpu: 10030.427370019635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10033.916098929636,
            "unit": "ns/iter",
            "extra": "iterations: 69868\ncpu: 10033.278467968164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17112.747098084783,
            "unit": "ns/iter",
            "extra": "iterations: 41352\ncpu: 17111.2691042755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50718.59330000166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50719.340000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 269123.5200758835,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 269107.3348087256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 216051.12979798228,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 216047.37373737406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 212552.06051513235,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 212542.4356089019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 211687.01993521853,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 211683.00523299346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 614981.1696306446,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 614959.3023255818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4023575.662337618,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4023332.900432902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3248545.797909354,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3248398.257839715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3226576.52083337,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226294.097222218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3248449.7552447235,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3248372.727272732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1848472.312127264,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1848481.90854871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3153962.8225255543,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3153811.604095558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7306.618254705362,
            "unit": "ns/iter",
            "extra": "iterations: 95789\ncpu: 7306.511186044337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72597.50345239246,
            "unit": "ns/iter",
            "extra": "iterations: 11731\ncpu: 72596.68399965891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139667.44021652875,
            "unit": "ns/iter",
            "extra": "iterations: 6281\ncpu: 139659.3536061136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205239.53673517518,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 205232.8372312777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269228.59950249025,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269231.96517412993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 335978.16518718144,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 335972.558857584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399438.96747594717,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 399439.39532753365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 465344.0593265667,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 465343.50614644703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 530224.1088145884,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 530215.9878419437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5518.214475296068,
            "unit": "ns/iter",
            "extra": "iterations: 127348\ncpu: 5518.290039890697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4501.044179758222,
            "unit": "ns/iter",
            "extra": "iterations: 155320\ncpu: 4500.972830285841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4484.387826655517,
            "unit": "ns/iter",
            "extra": "iterations: 156013\ncpu: 4484.444886003074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4505.312442183375,
            "unit": "ns/iter",
            "extra": "iterations: 155664\ncpu: 4505.2677561928085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7706.680461164907,
            "unit": "ns/iter",
            "extra": "iterations: 90640\ncpu: 7706.783980582521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32042.958310712052,
            "unit": "ns/iter",
            "extra": "iterations: 25786\ncpu: 32042.631660591123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135429.84550783728,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 135431.72238947975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109535.1674598094,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 109531.04823151133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107856.92693717653,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 107858.2606497281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110427.99220070506,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 110425.50370466609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291506.547403673,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 291510.51926298154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2200144.7347417017,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2200077.934272287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1793389.7153846181,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1793370.9615384566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1801334.9210019857,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1801150.8670520224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1802521.8712273592,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1802472.6358148851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1057011.395480227,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1056995.0282485874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1746249.2443608067,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1746194.736842094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7700.742818493588,
            "unit": "ns/iter",
            "extra": "iterations: 90928\ncpu: 7700.147369347168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57235.289099998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57231.1599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105315.21395348784,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 105309.30232558136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153426.60808404218,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 153412.19729344652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201841.23969252437,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 201837.80573025913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 249480.0988472598,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 249479.94236311235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297444.0010309317,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 297433.2646048117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346479.57485990564,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 346479.5836669349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 394194.28887885454,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 394181.9168173583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6365.358756631252,
            "unit": "ns/iter",
            "extra": "iterations: 111407\ncpu: 6364.977066073038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5269.226800481197,
            "unit": "ns/iter",
            "extra": "iterations: 133020\ncpu: 5268.894903022136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5254.408668707283,
            "unit": "ns/iter",
            "extra": "iterations: 133284\ncpu: 5254.238318177646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5348.998247632662,
            "unit": "ns/iter",
            "extra": "iterations: 131251\ncpu: 5349.097530685486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8961.560616929566,
            "unit": "ns/iter",
            "extra": "iterations: 78064\ncpu: 8961.677597868495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27141.996974331363,
            "unit": "ns/iter",
            "extra": "iterations: 30076\ncpu: 27141.33860885745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133014.24087024294,
            "unit": "ns/iter",
            "extra": "iterations: 6435\ncpu: 133008.54700854613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105719.1810365713,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 105710.64422378248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103544.29951632868,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 103542.66021765332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99862.32083869897,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 99861.77814220432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323012.4562195899,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 323010.3891591368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815601.666015576,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1815567.5781250102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1453999.6880878129,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1453966.6144200542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1443239.9271317427,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443226.3565891464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1441204.524031022,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441119.5348837206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 785895.4149659703,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 785884.0986394581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1388914.8083832285,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1388853.1437125735 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}