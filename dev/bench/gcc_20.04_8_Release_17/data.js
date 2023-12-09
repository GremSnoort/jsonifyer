window.BENCHMARK_DATA = {
  "lastUpdate": 1702084760933,
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
      }
    ]
  }
}