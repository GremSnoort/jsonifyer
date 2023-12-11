window.BENCHMARK_DATA = {
  "lastUpdate": 1702285135210,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Release c++-17": [
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084760573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1627.9892312923068,
            "unit": "ns/iter",
            "extra": "iterations: 423542\ncpu: 1627.8701994135176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20479.381092688218,
            "unit": "ns/iter",
            "extra": "iterations: 40048\ncpu: 20478.203655613263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42490.90008236364,
            "unit": "ns/iter",
            "extra": "iterations: 19426\ncpu: 42488.371255019025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52844.22549999874,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52841.439999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69760.21618164383,
            "unit": "ns/iter",
            "extra": "iterations: 12508\ncpu: 69754.98880716342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 86295.88582245739,
            "unit": "ns/iter",
            "extra": "iterations: 10037\ncpu: 86290.97339842585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 103502.99889394056,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 103502.40875015364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 119113.09669745104,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 119112.34256926953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 140475.10946316313,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 140472.6745123326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1442.606557849521,
            "unit": "ns/iter",
            "extra": "iterations: 485769\ncpu: 1442.6093472411762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1181.2271896024752,
            "unit": "ns/iter",
            "extra": "iterations: 592756\ncpu: 1178.685496224416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1137.9283945532416,
            "unit": "ns/iter",
            "extra": "iterations: 621503\ncpu: 1137.8450305147355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1150.6001099965767,
            "unit": "ns/iter",
            "extra": "iterations: 609110\ncpu: 1150.5557288502876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2157.9748491999044,
            "unit": "ns/iter",
            "extra": "iterations: 324602\ncpu: 2157.786766563361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7580.942862410589,
            "unit": "ns/iter",
            "extra": "iterations: 108475\ncpu: 7580.6932472919925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 40091.645712910424,
            "unit": "ns/iter",
            "extra": "iterations: 20760\ncpu: 40088.877649325615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32391.90667968739,
            "unit": "ns/iter",
            "extra": "iterations: 25600\ncpu: 32390.445312499985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31512.580426022203,
            "unit": "ns/iter",
            "extra": "iterations: 26055\ncpu: 31511.137977355607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31237.17253331278,
            "unit": "ns/iter",
            "extra": "iterations: 25966\ncpu: 31235.261495802235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76934.79261923049,
            "unit": "ns/iter",
            "extra": "iterations: 11679\ncpu: 76930.31081428203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 669986.147000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669975.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 542013.9340000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542005.4999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 528791.2110000263,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528783.1000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 531971.2980000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531919.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 378369.92217899533,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 378343.53653264197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 531869.4869999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531859.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 880.9959117809658,
            "unit": "ns/iter",
            "extra": "iterations: 795701\ncpu: 880.9487483363743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13857.045775883638,
            "unit": "ns/iter",
            "extra": "iterations: 59835\ncpu: 13856.243001587678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29738.25783758372,
            "unit": "ns/iter",
            "extra": "iterations: 27719\ncpu: 29736.462354341806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44325.504707998625,
            "unit": "ns/iter",
            "extra": "iterations: 18904\ncpu: 44324.899492171004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58401.87118692102,
            "unit": "ns/iter",
            "extra": "iterations: 14129\ncpu: 58397.03446811534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61058.92509999933,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61058.24999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72508.32591414893,
            "unit": "ns/iter",
            "extra": "iterations: 11951\ncpu: 72506.6437954983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85549.40062384389,
            "unit": "ns/iter",
            "extra": "iterations: 10259\ncpu: 85544.62423238128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97272.5959584697,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 97267.17650999226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 726.8324776904296,
            "unit": "ns/iter",
            "extra": "iterations: 959902\ncpu: 726.7933601555166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 584.7558337463607,
            "unit": "ns/iter",
            "extra": "iterations: 1198458\ncpu: 584.7306288580837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 583.7837532602184,
            "unit": "ns/iter",
            "extra": "iterations: 1196240\ncpu: 583.7378786865512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 600.6130308170777,
            "unit": "ns/iter",
            "extra": "iterations: 1171331\ncpu: 600.6087092376099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1118.7480265184995,
            "unit": "ns/iter",
            "extra": "iterations: 626431\ncpu: 1118.7195397418086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5068.623429999946,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5068.266999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26678.928295447833,
            "unit": "ns/iter",
            "extra": "iterations: 31058\ncpu: 26677.986348122977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21341.615323059374,
            "unit": "ns/iter",
            "extra": "iterations: 38739\ncpu: 21339.755801646876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20174.58725694019,
            "unit": "ns/iter",
            "extra": "iterations: 40885\ncpu: 20173.865720924623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20711.50301886796,
            "unit": "ns/iter",
            "extra": "iterations: 39750\ncpu: 20709.786163522014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55226.04626055031,
            "unit": "ns/iter",
            "extra": "iterations: 15283\ncpu: 55223.13681868714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 562348.6282958227,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 562319.2926045011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 459838.9204188601,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 459799.0575916252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 455541.1159420331,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 455516.04554865096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 457524.5876235041,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 457516.74466978735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265631.84675715974,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 265613.48416289594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 456342.75507020036,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 456322.56890275737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 656.3505742637643,
            "unit": "ns/iter",
            "extra": "iterations: 1062665\ncpu: 656.2951635745997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6179.566585096926,
            "unit": "ns/iter",
            "extra": "iterations: 132402\ncpu: 6179.529765411356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11877.664879777936,
            "unit": "ns/iter",
            "extra": "iterations: 69954\ncpu: 11877.440889727539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17717.654371127228,
            "unit": "ns/iter",
            "extra": "iterations: 47768\ncpu: 17717.421704907105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23186.92670418268,
            "unit": "ns/iter",
            "extra": "iterations: 36073\ncpu: 23186.399800404655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28916.105864432,
            "unit": "ns/iter",
            "extra": "iterations: 28886\ncpu: 28914.944956033836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34909.171318179164,
            "unit": "ns/iter",
            "extra": "iterations: 24329\ncpu: 34906.49841752629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40482.63525003627,
            "unit": "ns/iter",
            "extra": "iterations: 20817\ncpu: 40480.81375798632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45967.331126913974,
            "unit": "ns/iter",
            "extra": "iterations: 18280\ncpu: 45964.824945295506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 636.25241775733,
            "unit": "ns/iter",
            "extra": "iterations: 1105053\ncpu: 636.2133761910052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.0882488311877,
            "unit": "ns/iter",
            "extra": "iterations: 1362273\ncpu: 512.0422998914305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 496.3392988299577,
            "unit": "ns/iter",
            "extra": "iterations: 1405080\ncpu: 496.31252313035804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 496.51729346581806,
            "unit": "ns/iter",
            "extra": "iterations: 1402177\ncpu: 496.5071456741893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 950.1331241717131,
            "unit": "ns/iter",
            "extra": "iterations: 734998\ncpu: 950.0850342449902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2709.41222354836,
            "unit": "ns/iter",
            "extra": "iterations: 295757\ncpu: 2709.2701102594356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13031.98599929994,
            "unit": "ns/iter",
            "extra": "iterations: 62854\ncpu: 13031.374295987534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10842.342495375131,
            "unit": "ns/iter",
            "extra": "iterations: 76766\ncpu: 10841.539223093496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10726.008309447936,
            "unit": "ns/iter",
            "extra": "iterations: 76058\ncpu: 10725.54497883198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10381.099532017466,
            "unit": "ns/iter",
            "extra": "iterations: 78849\ncpu: 10380.285101903646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34747.077210669886,
            "unit": "ns/iter",
            "extra": "iterations: 23805\ncpu: 34745.48624238606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276614.6000646596,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 276594.827028774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214385.37347900428,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 214373.33002235048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211870.37379956877,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 211853.92760404042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212478.9180610246,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 212465.5019685042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109741.34860883589,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 109735.18821603915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207405.2693491112,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 207391.14792899578 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702085007700,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1633.3400299387163,
            "unit": "ns/iter",
            "extra": "iterations: 433553\ncpu: 1633.3361780451294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20362.122892163217,
            "unit": "ns/iter",
            "extra": "iterations: 40385\ncpu: 20361.805125665473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42325.93451646013,
            "unit": "ns/iter",
            "extra": "iterations: 19440\ncpu: 42322.91666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52534.565999999926,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52534.090000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 74377.85568489824,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 74373.70435337267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 87372.67966663126,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 87367.33625387323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 103671.47254736598,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 103659.26149390619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 118204.94609769747,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 118202.54070746774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 137529.07386182787,
            "unit": "ns/iter",
            "extra": "iterations: 6282\ncpu: 137527.5549188158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1417.211627996406,
            "unit": "ns/iter",
            "extra": "iterations: 494221\ncpu: 1417.1722771796449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1125.9618670539842,
            "unit": "ns/iter",
            "extra": "iterations: 621064\ncpu: 1125.9295338322634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1137.080043395096,
            "unit": "ns/iter",
            "extra": "iterations: 623112\ncpu: 1137.0580248815618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1129.559458514732,
            "unit": "ns/iter",
            "extra": "iterations: 620811\ncpu: 1129.5363645296238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2186.0043166992186,
            "unit": "ns/iter",
            "extra": "iterations: 320847\ncpu: 2185.9596630169544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7417.674903919141,
            "unit": "ns/iter",
            "extra": "iterations: 109543\ncpu: 7417.351177163311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 40200.500485861485,
            "unit": "ns/iter",
            "extra": "iterations: 20582\ncpu: 40197.95452336992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32500.81497537009,
            "unit": "ns/iter",
            "extra": "iterations: 25375\ncpu: 32500.673891625636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32080.476151824685,
            "unit": "ns/iter",
            "extra": "iterations: 25872\ncpu: 32079.10868893003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31551.48178776084,
            "unit": "ns/iter",
            "extra": "iterations: 25999\ncpu: 31550.18269933469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73944.9258856031,
            "unit": "ns/iter",
            "extra": "iterations: 11941\ncpu: 73940.30650699287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 673502.3719999731,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 673494.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549711.4599999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549658.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545815.8929999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545776.6999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536462.0940000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536448.6999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 377850.6051835771,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 377825.74514038773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 533764.395999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533711.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 881.9425981188699,
            "unit": "ns/iter",
            "extra": "iterations: 794521\ncpu: 881.9014223664313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13805.10606161712,
            "unit": "ns/iter",
            "extra": "iterations: 59918\ncpu: 13804.592943689699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29699.06083554667,
            "unit": "ns/iter",
            "extra": "iterations: 27862\ncpu: 29698.015217859433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43905.323773103715,
            "unit": "ns/iter",
            "extra": "iterations: 18828\ncpu: 43903.50541746331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58782.97514875914,
            "unit": "ns/iter",
            "extra": "iterations: 14285\ncpu: 58780.091004550304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61192.490000001955,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61189.27999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72900.22929615295,
            "unit": "ns/iter",
            "extra": "iterations: 11906\ncpu: 72895.60725684515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85440.39109932313,
            "unit": "ns/iter",
            "extra": "iterations: 10179\ncpu: 85436.33952254622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96995.22968749731,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 96991.27232142874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 743.1396150296213,
            "unit": "ns/iter",
            "extra": "iterations: 952333\ncpu: 743.1017301721139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 587.6535871994815,
            "unit": "ns/iter",
            "extra": "iterations: 1187765\ncpu: 587.6481458874449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 583.0296011568095,
            "unit": "ns/iter",
            "extra": "iterations: 1204007\ncpu: 582.9822417976002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.9899772829913,
            "unit": "ns/iter",
            "extra": "iterations: 1160364\ncpu: 593.9534490901104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1114.0019571623388,
            "unit": "ns/iter",
            "extra": "iterations: 627439\ncpu: 1113.9720355285497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5261.352008102264,
            "unit": "ns/iter",
            "extra": "iterations: 149096\ncpu: 5261.247786660929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24990.900518509494,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 24990.56433136374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19997.01555793992,
            "unit": "ns/iter",
            "extra": "iterations: 41008\ncpu: 19996.839641045655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18464.417613380494,
            "unit": "ns/iter",
            "extra": "iterations: 44364\ncpu: 18464.191686953465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18950.70246775071,
            "unit": "ns/iter",
            "extra": "iterations: 42792\ncpu: 18950.364554122265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55175.750462717995,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 55174.84135378109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 555014.8474999971,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 555008.6249999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457049.7139896389,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 457036.8911917108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 445383.35273280926,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 445376.7206477743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 449217.90046176605,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 449205.13083632506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 263784.62939585344,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 263784.1298467093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 445295.73333333776,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 445286.8193384233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 644.2259232174471,
            "unit": "ns/iter",
            "extra": "iterations: 1088476\ncpu: 644.2239424663453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6235.035069682428,
            "unit": "ns/iter",
            "extra": "iterations: 131310\ncpu: 6234.6607265250195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12103.568848198174,
            "unit": "ns/iter",
            "extra": "iterations: 68484\ncpu: 12102.99339991814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17991.14748325047,
            "unit": "ns/iter",
            "extra": "iterations: 46568\ncpu: 17990.240079024228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23598.716085737582,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 23597.714981453584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29490.28295797291,
            "unit": "ns/iter",
            "extra": "iterations: 28506\ncpu: 29489.13562057129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35082.06048927425,
            "unit": "ns/iter",
            "extra": "iterations: 23872\ncpu: 35080.206936997136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41127.68444226972,
            "unit": "ns/iter",
            "extra": "iterations: 20440\ncpu: 41125.57240704476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46834.804390107754,
            "unit": "ns/iter",
            "extra": "iterations: 17995\ncpu: 46833.11475409832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 637.6171710729151,
            "unit": "ns/iter",
            "extra": "iterations: 1099081\ncpu: 637.5853099089142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 508.33867023961585,
            "unit": "ns/iter",
            "extra": "iterations: 1377015\ncpu: 508.30978602266237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 496.3937886339733,
            "unit": "ns/iter",
            "extra": "iterations: 1410028\ncpu: 496.3648239609411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 501.40640797727644,
            "unit": "ns/iter",
            "extra": "iterations: 1396166\ncpu: 501.38214223809706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 971.7271257142468,
            "unit": "ns/iter",
            "extra": "iterations: 723498\ncpu: 971.6932182258889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2722.4495247194827,
            "unit": "ns/iter",
            "extra": "iterations: 295194\ncpu: 2722.334126032393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12841.337732735863,
            "unit": "ns/iter",
            "extra": "iterations: 63645\ncpu: 12840.65362557931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10652.684153273805,
            "unit": "ns/iter",
            "extra": "iterations: 77221\ncpu: 10652.304424962207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10403.14893914377,
            "unit": "ns/iter",
            "extra": "iterations: 78710\ncpu: 10402.800152458272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10070.33411375349,
            "unit": "ns/iter",
            "extra": "iterations: 81580\ncpu: 10070.253738661308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34570.18750517677,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 34568.547518435655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275858.2341711623,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 275845.84791600495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214531.235469442,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 214522.03179334642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213090.20822051686,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 213078.5626384434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213601.040089648,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 213594.6215139461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111618.83123969033,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 111613.46275853206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206637.23316796115,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 206627.45098039374 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702085598678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1636.661812589024,
            "unit": "ns/iter",
            "extra": "iterations: 427819\ncpu: 1636.5196496649287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20122.46447586713,
            "unit": "ns/iter",
            "extra": "iterations: 40381\ncpu: 20121.15351279067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41340.93024535027,
            "unit": "ns/iter",
            "extra": "iterations: 18178\ncpu: 41339.333259984596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51524.66220000065,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51522.74000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 68686.35862835417,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 68685.14843625971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 85620.9722739284,
            "unit": "ns/iter",
            "extra": "iterations: 10207\ncpu: 85615.74409718816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 103340.6293431546,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 103338.03560466538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 123413.04439833875,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 123410.48409405247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134683.64953927996,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 134680.52475402152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1431.3824555463602,
            "unit": "ns/iter",
            "extra": "iterations: 466666\ncpu: 1431.369330527613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1137.6424157982847,
            "unit": "ns/iter",
            "extra": "iterations: 615813\ncpu: 1137.6344766999077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1110.41111997131,
            "unit": "ns/iter",
            "extra": "iterations: 629534\ncpu: 1110.3582967718967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1131.2591441832435,
            "unit": "ns/iter",
            "extra": "iterations: 617305\ncpu: 1131.2122856610579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2169.4799418058446,
            "unit": "ns/iter",
            "extra": "iterations: 324431\ncpu: 2169.3814709445132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7680.056043503786,
            "unit": "ns/iter",
            "extra": "iterations: 107024\ncpu: 7679.728845866353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 40392.58160975539,
            "unit": "ns/iter",
            "extra": "iterations: 20500\ncpu: 40390.556097560955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32460.44955280197,
            "unit": "ns/iter",
            "extra": "iterations: 25492\ncpu: 32459.61478110783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31855.327781220694,
            "unit": "ns/iter",
            "extra": "iterations: 25816\ncpu: 31852.90904865199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31323.88039111598,
            "unit": "ns/iter",
            "extra": "iterations: 26386\ncpu: 31323.01978321828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76644.94859893447,
            "unit": "ns/iter",
            "extra": "iterations: 11634\ncpu: 76639.61664088028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 664023.2080000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663997.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 540741.526999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540715.4999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 534094.7610000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534054.7000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 535033.9260000397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535008.1000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 375572.3478448168,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 375555.5172413787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 530192.5180000353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530190.300000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 907.8624080915009,
            "unit": "ns/iter",
            "extra": "iterations: 793724\ncpu: 907.8621787926326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13620.632783010982,
            "unit": "ns/iter",
            "extra": "iterations: 60934\ncpu: 13619.475169855894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28986.641254034726,
            "unit": "ns/iter",
            "extra": "iterations: 28516\ncpu: 28986.435685229317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43232.79181614712,
            "unit": "ns/iter",
            "extra": "iterations: 19233\ncpu: 43230.95200956688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 57896.21124431398,
            "unit": "ns/iter",
            "extra": "iterations: 14514\ncpu: 57894.32961278774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60369.51049999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60367.24999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72186.05483549244,
            "unit": "ns/iter",
            "extra": "iterations: 12036\ncpu: 72184.0146227981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84038.47994574813,
            "unit": "ns/iter",
            "extra": "iterations: 10322\ncpu: 84033.92753342378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96058.45148885006,
            "unit": "ns/iter",
            "extra": "iterations: 9101\ncpu: 96054.9829689044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 725.6287415671524,
            "unit": "ns/iter",
            "extra": "iterations: 966607\ncpu: 725.6183743755282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 574.8602286790236,
            "unit": "ns/iter",
            "extra": "iterations: 1216902\ncpu: 574.8497413924865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 578.0165305867101,
            "unit": "ns/iter",
            "extra": "iterations: 1213992\ncpu: 578.0057034972222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 592.3403413211362,
            "unit": "ns/iter",
            "extra": "iterations: 1190023\ncpu: 592.3153586107169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1115.8370566403796,
            "unit": "ns/iter",
            "extra": "iterations: 629145\ncpu: 1115.8486517416502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5092.2796399999015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5092.213000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26761.95044154398,
            "unit": "ns/iter",
            "extra": "iterations: 30348\ncpu: 26760.989192039022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21445.619646446423,
            "unit": "ns/iter",
            "extra": "iterations: 38806\ncpu: 21444.8152347576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21044.13663341325,
            "unit": "ns/iter",
            "extra": "iterations: 39595\ncpu: 21043.705013259187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21262.48992107674,
            "unit": "ns/iter",
            "extra": "iterations: 38645\ncpu: 21261.622460861807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55350.27233401094,
            "unit": "ns/iter",
            "extra": "iterations: 15257\ncpu: 55349.229861702814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 557460.9471337481,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 557426.2420382157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 462376.9244491337,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 462360.1783840511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 457172.33176841435,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 457172.2483046435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 458894.7226277462,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 458854.22314911324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267056.2790131039,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 267053.3049040515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 454649.55964730977,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 454637.811203318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 668.1892601193343,
            "unit": "ns/iter",
            "extra": "iterations: 1048615\ncpu: 668.1647697200626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6184.450896186977,
            "unit": "ns/iter",
            "extra": "iterations: 132729\ncpu: 6184.1782880907895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11876.419663553146,
            "unit": "ns/iter",
            "extra": "iterations: 70323\ncpu: 11876.406012257781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17703.42155332421,
            "unit": "ns/iter",
            "extra": "iterations: 47408\ncpu: 17702.16841039485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23127.247286886195,
            "unit": "ns/iter",
            "extra": "iterations: 36213\ncpu: 23127.225029685473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28565.516594169992,
            "unit": "ns/iter",
            "extra": "iterations: 29197\ncpu: 28563.982600952357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34170.9071218792,
            "unit": "ns/iter",
            "extra": "iterations: 24516\ncpu: 34158.998205253825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39748.89292307577,
            "unit": "ns/iter",
            "extra": "iterations: 21125\ncpu: 39747.9337278107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45064.438259653325,
            "unit": "ns/iter",
            "extra": "iterations: 18594\ncpu: 45061.56286974295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 632.238346704232,
            "unit": "ns/iter",
            "extra": "iterations: 1105138\ncpu: 632.2214058334796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.7077207416772,
            "unit": "ns/iter",
            "extra": "iterations: 1365646\ncpu: 512.6857911933237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 500.5653080000343,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.5569999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 502.95260012665705,
            "unit": "ns/iter",
            "extra": "iterations: 1395932\ncpu: 502.93689090873033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 950.7140238662705,
            "unit": "ns/iter",
            "extra": "iterations: 734341\ncpu: 950.6681500828589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2710.8226970325404,
            "unit": "ns/iter",
            "extra": "iterations: 294761\ncpu: 2710.702908458028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13063.632109546961,
            "unit": "ns/iter",
            "extra": "iterations: 62293\ncpu: 13063.199717464253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10699.232138873636,
            "unit": "ns/iter",
            "extra": "iterations: 76213\ncpu: 10698.757429834795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10574.772765647775,
            "unit": "ns/iter",
            "extra": "iterations: 76991\ncpu: 10574.24893818755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10234.021634824132,
            "unit": "ns/iter",
            "extra": "iterations: 80657\ncpu: 10233.569312024914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34110.1128171442,
            "unit": "ns/iter",
            "extra": "iterations: 24358\ncpu: 34109.220789883875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281510.07154632354,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 281498.9119683488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212659.16980664423,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 212628.45810609855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210979.89067525088,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 210969.42864209745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213064.11119365602,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 213055.1758296203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110050.71753327899,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 110044.08440090422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205261.9917647007,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 205247.29411764542 ns\nthreads: 1"
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
          "id": "08a1871a28562639bf0f45a39f33526d4fa6ea0d",
          "message": "rm typeid -> tuple_name set",
          "timestamp": "2023-12-11T00:33:38+03:00",
          "tree_id": "fbafa482ecf5561fe3f71808e32dcdc5e65d7018",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/08a1871a28562639bf0f45a39f33526d4fa6ea0d"
        },
        "date": 1702244247018,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1918.6386948122972,
            "unit": "ns/iter",
            "extra": "iterations: 375854\ncpu: 1918.5627929994093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26887.592482139422,
            "unit": "ns/iter",
            "extra": "iterations: 30514\ncpu: 26886.111293176906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54554.44468489765,
            "unit": "ns/iter",
            "extra": "iterations: 15249\ncpu: 54552.29195357071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68219.87870746152,
            "unit": "ns/iter",
            "extra": "iterations: 12812\ncpu: 68216.28161098967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97939.81653854217,
            "unit": "ns/iter",
            "extra": "iterations: 9626\ncpu: 97935.2482858924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 125462.58870404212,
            "unit": "ns/iter",
            "extra": "iterations: 7153\ncpu: 125453.57192786252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 144098.44959308748,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 144091.3801694071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 165589.52297970292,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 165578.9735733437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186440.85306122253,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 186435.230934479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1592.671812479854,
            "unit": "ns/iter",
            "extra": "iterations: 440358\ncpu: 1592.5583275425915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1305.867708657213,
            "unit": "ns/iter",
            "extra": "iterations: 504931\ncpu: 1305.8104968797709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1290.7686035351878,
            "unit": "ns/iter",
            "extra": "iterations: 543902\ncpu: 1290.7336248074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1293.1223377232411,
            "unit": "ns/iter",
            "extra": "iterations: 541313\ncpu: 1293.1230175517687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2452.035020866094,
            "unit": "ns/iter",
            "extra": "iterations: 286829\ncpu: 2452.040065683734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9321.453745145373,
            "unit": "ns/iter",
            "extra": "iterations: 87807\ncpu: 9321.108795426348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49633.04589600776,
            "unit": "ns/iter",
            "extra": "iterations: 16886\ncpu: 49633.25239843659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39727.28412470037,
            "unit": "ns/iter",
            "extra": "iterations: 20850\ncpu: 39726.69064748194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 39094.91327977328,
            "unit": "ns/iter",
            "extra": "iterations: 21160\ncpu: 39094.669187145635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38666.03985405562,
            "unit": "ns/iter",
            "extra": "iterations: 21378\ncpu: 38665.455140798986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 91399.2499217717,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 91397.41316365913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 857967.5635864475,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 857957.2735590101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 702135.0811220679,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 702122.4412433658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 702665.5233506358,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 702643.14306894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 690841.5368577644,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 690792.1072226348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 485839.3147632187,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 485835.5988857945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1030.0380698987342,
            "unit": "ns/iter",
            "extra": "iterations: 678410\ncpu: 1030.0107604545956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20367.393074403975,
            "unit": "ns/iter",
            "extra": "iterations: 40603\ncpu: 20366.768465384353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43128.74487133723,
            "unit": "ns/iter",
            "extra": "iterations: 19547\ncpu: 43127.64618611551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53945.29260000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53945.56000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71925.54950944023,
            "unit": "ns/iter",
            "extra": "iterations: 12129\ncpu: 71922.35963393522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89686.06040405984,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 89683.36580863521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 107344.04010397328,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 107338.92808515868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124451.2693737462,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 124448.62739491007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 141681.19595696547,
            "unit": "ns/iter",
            "extra": "iterations: 6134\ncpu: 141673.93218128447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 862.0547426333158,
            "unit": "ns/iter",
            "extra": "iterations: 813936\ncpu: 862.0206011283404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 724.7347125063561,
            "unit": "ns/iter",
            "extra": "iterations: 964056\ncpu: 724.7283352834223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 708.8392148215248,
            "unit": "ns/iter",
            "extra": "iterations: 988667\ncpu: 708.818742812289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 709.9153673531315,
            "unit": "ns/iter",
            "extra": "iterations: 975451\ncpu: 709.8976780996665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1368.0995829059264,
            "unit": "ns/iter",
            "extra": "iterations: 511875\ncpu: 1368.0193406593494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5974.182401711691,
            "unit": "ns/iter",
            "extra": "iterations: 138343\ncpu: 5974.043500574622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36276.396645609224,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 36276.04443476357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28537.574357037713,
            "unit": "ns/iter",
            "extra": "iterations: 29123\ncpu: 28537.173368128366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28065.81229980691,
            "unit": "ns/iter",
            "extra": "iterations: 29659\ncpu: 28065.548400148484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28143.598774624916,
            "unit": "ns/iter",
            "extra": "iterations: 29542\ncpu: 28142.95917676532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59076.72650000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59076.00999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 636453.9899999499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636423.0999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 532470.8179999788,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532472.4999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 516733.9530000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516686.10000000114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 514030.96500001766,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514008.4000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 372473.98169432266,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372471.0089399748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 524544.5709999786,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524492.0000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 677.3248207297377,
            "unit": "ns/iter",
            "extra": "iterations: 1036424\ncpu: 677.3073568346539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6238.42487176774,
            "unit": "ns/iter",
            "extra": "iterations: 131402\ncpu: 6238.182828267432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11822.247113628611,
            "unit": "ns/iter",
            "extra": "iterations: 69551\ncpu: 11821.691995801702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17676.533919545574,
            "unit": "ns/iter",
            "extra": "iterations: 47878\ncpu: 17676.120556414142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23732.80645437511,
            "unit": "ns/iter",
            "extra": "iterations: 35046\ncpu: 23732.00935912789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29690.33061021514,
            "unit": "ns/iter",
            "extra": "iterations: 28154\ncpu: 29689.06372096333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34941.481734293346,
            "unit": "ns/iter",
            "extra": "iterations: 23733\ncpu: 34939.40504782365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40771.269273906495,
            "unit": "ns/iter",
            "extra": "iterations: 20507\ncpu: 40770.54176622646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46360.560231252406,
            "unit": "ns/iter",
            "extra": "iterations: 17989\ncpu: 46359.81433098031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.978916723107,
            "unit": "ns/iter",
            "extra": "iterations: 1065157\ncpu: 656.9728218469153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 516.2334891372211,
            "unit": "ns/iter",
            "extra": "iterations: 1356834\ncpu: 516.223944859872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.5745425147006,
            "unit": "ns/iter",
            "extra": "iterations: 1361847\ncpu: 513.5712748935854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 514.4365087184403,
            "unit": "ns/iter",
            "extra": "iterations: 1360108\ncpu: 514.432750928602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 953.2035844702673,
            "unit": "ns/iter",
            "extra": "iterations: 731991\ncpu: 953.1905446924884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2831.805340503859,
            "unit": "ns/iter",
            "extra": "iterations: 283007\ncpu: 2831.786139565435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13042.94194250221,
            "unit": "ns/iter",
            "extra": "iterations: 62507\ncpu: 13042.57923112611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10701.371065391539,
            "unit": "ns/iter",
            "extra": "iterations: 76310\ncpu: 10701.25933691528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10676.08521680481,
            "unit": "ns/iter",
            "extra": "iterations: 77074\ncpu: 10675.679217375471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10591.72644670717,
            "unit": "ns/iter",
            "extra": "iterations: 77590\ncpu: 10591.001417708354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34489.25205129043,
            "unit": "ns/iter",
            "extra": "iterations: 24253\ncpu: 34487.82418669863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 287980.1914535545,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 287962.5841184414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 226732.3141442987,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 226727.87184162388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 223011.16670988372,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 223006.0668913681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220681.22428716478,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 220674.05804480897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113184.40939162382,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 113182.77338176257 ns\nthreads: 1"
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
          "id": "ee321988d93ff16926e7194dec34c10291baefc2",
          "message": "add delta",
          "timestamp": "2023-12-11T11:53:54+03:00",
          "tree_id": "290f299ec6b77fff1939bc5ef8e8a991dcfff337",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/ee321988d93ff16926e7194dec34c10291baefc2"
        },
        "date": 1702285134504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1794.794829649313,
            "unit": "ns/iter",
            "extra": "iterations: 386937\ncpu: 1794.6712255483453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26571.979675452545,
            "unit": "ns/iter",
            "extra": "iterations: 30997\ncpu: 26570.86169629319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54308.74848623039,
            "unit": "ns/iter",
            "extra": "iterations: 15359\ncpu: 54307.68930268899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67703.54395986158,
            "unit": "ns/iter",
            "extra": "iterations: 12955\ncpu: 67699.51370127362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 104930.90461950962,
            "unit": "ns/iter",
            "extra": "iterations: 9698\ncpu: 104923.74716436374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119937.86727880062,
            "unit": "ns/iter",
            "extra": "iterations: 7188\ncpu: 119929.14579855316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142032.5723716782,
            "unit": "ns/iter",
            "extra": "iterations: 6059\ncpu: 142028.78362766127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162381.81689609392,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 162373.26041863102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185827.6589644868,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 185815.40436456972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1626.3689801505425,
            "unit": "ns/iter",
            "extra": "iterations: 436888\ncpu: 1626.2724084891306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1346.7034444896312,
            "unit": "ns/iter",
            "extra": "iterations: 520948\ncpu: 1346.6643503766197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1371.2700592082435,
            "unit": "ns/iter",
            "extra": "iterations: 516820\ncpu: 1370.7201733679044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1248.1369712510214,
            "unit": "ns/iter",
            "extra": "iterations: 561585\ncpu: 1248.042771797682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2368.8478475843563,
            "unit": "ns/iter",
            "extra": "iterations: 296295\ncpu: 2368.7480382726635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9422.015912333702,
            "unit": "ns/iter",
            "extra": "iterations: 87605\ncpu: 9421.811540437182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47478.12849194118,
            "unit": "ns/iter",
            "extra": "iterations: 17433\ncpu: 47475.850398669194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38968.18729127954,
            "unit": "ns/iter",
            "extra": "iterations: 21560\ncpu: 38966.145640074064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40465.663904367946,
            "unit": "ns/iter",
            "extra": "iterations: 20997\ncpu: 40463.10425298855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38779.9719013721,
            "unit": "ns/iter",
            "extra": "iterations: 21211\ncpu: 38779.279619065586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 90836.99325095963,
            "unit": "ns/iter",
            "extra": "iterations: 9631\ncpu: 90833.07029384276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 851502.4774368231,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 851491.2454873652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 701291.2228782419,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 701248.7084870859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 695698.5711094537,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 695659.5681310501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 692135.6696629185,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692095.9550561801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 485349.68409343204,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 485307.7864293659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1085.5481713226002,
            "unit": "ns/iter",
            "extra": "iterations: 645986\ncpu: 1085.5160947760521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20588.02679253589,
            "unit": "ns/iter",
            "extra": "iterations: 40571\ncpu: 20588.013605777534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42321.2135639232,
            "unit": "ns/iter",
            "extra": "iterations: 19891\ncpu: 42319.49625458758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52968.18040000062,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52964.24000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70515.21197212137,
            "unit": "ns/iter",
            "extra": "iterations: 12195\ncpu: 70510.21730217306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88380.3233840865,
            "unit": "ns/iter",
            "extra": "iterations: 9917\ncpu: 88378.77382272869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105414.64560339636,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 105407.2528805338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123479.39160543006,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 123475.08479366862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139701.21790133542,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 139693.81327334128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 857.9675439724388,
            "unit": "ns/iter",
            "extra": "iterations: 816705\ncpu: 857.9598508641417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 706.8189424489403,
            "unit": "ns/iter",
            "extra": "iterations: 990685\ncpu: 706.8065025714567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 713.2681414970382,
            "unit": "ns/iter",
            "extra": "iterations: 978282\ncpu: 713.2401495683314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 715.6210163502135,
            "unit": "ns/iter",
            "extra": "iterations: 974546\ncpu: 715.6069595483431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1337.9189198488882,
            "unit": "ns/iter",
            "extra": "iterations: 523112\ncpu: 1337.8536527550539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5997.310285793449,
            "unit": "ns/iter",
            "extra": "iterations: 137267\ncpu: 5997.112197396325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35966.59904493036,
            "unit": "ns/iter",
            "extra": "iterations: 23035\ncpu: 35964.905578467595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28649.09738281396,
            "unit": "ns/iter",
            "extra": "iterations: 28886\ncpu: 28647.94710240268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28212.405335068048,
            "unit": "ns/iter",
            "extra": "iterations: 29203\ncpu: 28210.700955381253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28382.098035855066,
            "unit": "ns/iter",
            "extra": "iterations: 29173\ncpu: 28382.08617557329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 61011.9807999979,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61007.91000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 623067.0529999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623038.1999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 525311.4749999668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525291.100000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 511185.62900001055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511159.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 510291.41899999784,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510266.20000000374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 368458.49727233895,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 368452.91649181803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 527181.0049999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527137.4999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 666.8578836923034,
            "unit": "ns/iter",
            "extra": "iterations: 928296\ncpu: 666.8418263140184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6246.646622659747,
            "unit": "ns/iter",
            "extra": "iterations: 131494\ncpu: 6246.275115214359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11911.00694715845,
            "unit": "ns/iter",
            "extra": "iterations: 69093\ncpu: 11910.439552487293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17601.153793332167,
            "unit": "ns/iter",
            "extra": "iterations: 48058\ncpu: 17600.88434807936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23420.515176947556,
            "unit": "ns/iter",
            "extra": "iterations: 35745\ncpu: 23418.59281018324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28998.242510010095,
            "unit": "ns/iter",
            "extra": "iterations: 28972\ncpu: 28997.073036034846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34840.14150115104,
            "unit": "ns/iter",
            "extra": "iterations: 23915\ncpu: 34839.293330545865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40083.358786711484,
            "unit": "ns/iter",
            "extra": "iterations: 20770\ncpu: 40081.150698122154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45782.11438141744,
            "unit": "ns/iter",
            "extra": "iterations: 18211\ncpu: 45781.19268573942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 658.1018825629038,
            "unit": "ns/iter",
            "extra": "iterations: 962677\ncpu: 658.0750345131355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 516.3824573827181,
            "unit": "ns/iter",
            "extra": "iterations: 1355670\ncpu: 516.3665198757787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 511.51969949636265,
            "unit": "ns/iter",
            "extra": "iterations: 1365441\ncpu: 511.511518989107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 507.94285679026643,
            "unit": "ns/iter",
            "extra": "iterations: 1377644\ncpu: 507.91597829337655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 986.4029431801276,
            "unit": "ns/iter",
            "extra": "iterations: 707534\ncpu: 986.3763437516787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2838.9959588238157,
            "unit": "ns/iter",
            "extra": "iterations: 282591\ncpu: 2838.8982663991505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13377.830756806428,
            "unit": "ns/iter",
            "extra": "iterations: 60676\ncpu: 13377.516645790725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10755.78556173759,
            "unit": "ns/iter",
            "extra": "iterations: 75854\ncpu: 10755.162549107474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10892.880237615778,
            "unit": "ns/iter",
            "extra": "iterations: 75416\ncpu: 10892.429988331485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10363.128035067273,
            "unit": "ns/iter",
            "extra": "iterations: 78705\ncpu: 10362.846070770716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34177.04536073749,
            "unit": "ns/iter",
            "extra": "iterations: 24228\ncpu: 34176.37031533724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 289366.14417989715,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 289350.231481479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 231572.21443405416,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 231564.30425753022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 226743.3946618371,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 226722.59652759696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 224402.04422730597,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 224396.68295191426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116252.9587293298,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 116243.11938549615 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}