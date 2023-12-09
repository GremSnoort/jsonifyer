window.BENCHMARK_DATA = {
  "lastUpdate": 1702083139615,
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
        "date": 1702083139022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14056.296327684102,
            "unit": "ns/iter",
            "extra": "iterations: 49560\ncpu: 14055.944309927363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122680.70659117207,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 122678.41173054586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235606.80416777584,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 235603.633449105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337895.93184488185,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 337884.8021934976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446739.75361569686,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 446730.2169421487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556259.4464968054,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 556245.2866242041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535808.4989999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535770.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621062.715999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621029.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 705751.722351101,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 705723.743232792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11121.541469382944,
            "unit": "ns/iter",
            "extra": "iterations: 62938\ncpu: 11121.228828370802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9165.155913414823,
            "unit": "ns/iter",
            "extra": "iterations: 76318\ncpu: 9164.773710002886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9186.892262372316,
            "unit": "ns/iter",
            "extra": "iterations: 76380\ncpu: 9186.491228070172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9176.951811494433,
            "unit": "ns/iter",
            "extra": "iterations: 76263\ncpu: 9176.51547932809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15426.756399280861,
            "unit": "ns/iter",
            "extra": "iterations: 46724\ncpu: 15426.13646091945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58671.859461766806,
            "unit": "ns/iter",
            "extra": "iterations: 14046\ncpu: 58670.40438559018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 261396.54404617392,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 261388.06196840823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 209182.9437500013,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 209163.62980769257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202560.6739699949,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 202557.7280304837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 205891.23498817775,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 205879.5981087473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 467994.2052099984,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 467958.7985114299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3834917.3852458913,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3834696.7213114803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3109408.1036789464,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109262.5418060296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3333754.5704698367,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3333543.624161076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3095784.4799999637,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3095633.3333333437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1740048.2846441905,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1740012.3595505592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3016257.4726688173,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3016121.543408361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6724.483481721962,
            "unit": "ns/iter",
            "extra": "iterations: 104006\ncpu: 6724.19956540969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70454.99900940926,
            "unit": "ns/iter",
            "extra": "iterations: 12114\ncpu: 70453.36800396246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135363.27877524905,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 135359.00929785174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199176.8055172386,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 199167.33333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258545.89776839264,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 258543.0639324491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321546.8791044757,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 321541.30597015016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 385644.93268378265,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 385637.99822852085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 446107.07361963624,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 446105.7770961133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 508787.93793504,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 508772.15777262166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5102.337327102626,
            "unit": "ns/iter",
            "extra": "iterations: 138883\ncpu: 5102.281776747375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4124.695645795553,
            "unit": "ns/iter",
            "extra": "iterations: 170410\ncpu: 4124.644680476465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4213.000300724629,
            "unit": "ns/iter",
            "extra": "iterations: 166265\ncpu: 4212.943794544824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4103.20982058535,
            "unit": "ns/iter",
            "extra": "iterations: 169440\ncpu: 4103.0795561850555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7474.918247852902,
            "unit": "ns/iter",
            "extra": "iterations: 95129\ncpu: 7474.702772025364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32803.81666798822,
            "unit": "ns/iter",
            "extra": "iterations: 25222\ncpu: 32803.508841487426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140404.67894131163,
            "unit": "ns/iter",
            "extra": "iterations: 6083\ncpu: 140401.38089758367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111355.85898787862,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 111353.54507116477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109167.60519282173,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 109165.26664121174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109574.71842337327,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 109572.77420979702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278497.57652733056,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 278489.16398713726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2143107.252293603,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2143013.5321100866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1787433.5416666642,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1787333.5227272708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1787128.828301912,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1787046.4150943365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1791003.1420345367,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1790942.8023032565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1028155.4295227604,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 1028116.7591564871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1783727.3887850589,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1783631.9626168213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7049.336621467537,
            "unit": "ns/iter",
            "extra": "iterations: 99043\ncpu: 7049.195803842804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51825.90069999833,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51825.98000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95032.7292061012,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 95029.82964035228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138002.12604636216,
            "unit": "ns/iter",
            "extra": "iterations: 6212\ncpu: 138000.83708950476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182421.12073272376,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 182417.31890091594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226081.0528783553,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 226078.56212555442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267925.52786377334,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 267913.8080495356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313142.0522146191,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 313128.15988476743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357958.18755118025,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 357947.50204750383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5879.661501738116,
            "unit": "ns/iter",
            "extra": "iterations: 120234\ncpu: 5879.462548031352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4813.150329424628,
            "unit": "ns/iter",
            "extra": "iterations: 146771\ncpu: 4813.080921980565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4754.087614139707,
            "unit": "ns/iter",
            "extra": "iterations: 146312\ncpu: 4753.951828968251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4772.029499890906,
            "unit": "ns/iter",
            "extra": "iterations: 146848\ncpu: 4771.968974722145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7199.415453228021,
            "unit": "ns/iter",
            "extra": "iterations: 97313\ncpu: 7199.143999260073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25088.174262245822,
            "unit": "ns/iter",
            "extra": "iterations: 32870\ncpu: 25087.846060237127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116073.85714285486,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 116070.08674437393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90094.73905688369,
            "unit": "ns/iter",
            "extra": "iterations: 9458\ncpu: 90092.11249735714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90564.8324105616,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 90560.87095400265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87751.33937770304,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 87749.5054605404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 185927.27039432514,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 185917.19173795122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1670625.205405371,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670566.8468468424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362961.630681856,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1362865.6250000072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320988.5675675871,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1320944.6657183405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1306416.035161759,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1306334.1772152027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710990.431312341,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 710968.073676132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1269489.5464480857,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1269415.437158471 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}