window.BENCHMARK_DATA = {
  "lastUpdate": 1702083218703,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702079208463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11326.879783895101,
            "unit": "ns/iter",
            "extra": "iterations: 61822\ncpu: 11326.207498948595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9247.87648787973,
            "unit": "ns/iter",
            "extra": "iterations: 75863\ncpu: 9247.394645611166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9272.7948982022,
            "unit": "ns/iter",
            "extra": "iterations: 75738\ncpu: 9272.29528110064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9177.533621789411,
            "unit": "ns/iter",
            "extra": "iterations: 76037\ncpu: 9177.090100871943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17483.288460136457,
            "unit": "ns/iter",
            "extra": "iterations: 41153\ncpu: 17482.01346195902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56071.142329021015,
            "unit": "ns/iter",
            "extra": "iterations: 14607\ncpu: 56067.28965564454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263963.21525633713,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 263949.4441012971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215544.5585335121,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 215528.34386852075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 218872.12686378867,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 218870.63431892873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 215672.21397821914,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 215666.2952646236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 463640.75922024413,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 463630.7165437296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3906204.4747901047,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3906212.184873948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3135525.1919191736,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3135406.3973063943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3154058.248299339,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3153921.0884353733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3147088.2060811827,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3147017.229729726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1872153.5171025295,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872143.2595573422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3117092.848993255,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3116991.6107382616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4943.862373648133,
            "unit": "ns/iter",
            "extra": "iterations: 141470\ncpu: 4943.704672368695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4047.234423887952,
            "unit": "ns/iter",
            "extra": "iterations: 172909\ncpu: 4047.247396029126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4091.7407832296476,
            "unit": "ns/iter",
            "extra": "iterations: 172593\ncpu: 4091.5964146865726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4052.0893166628657,
            "unit": "ns/iter",
            "extra": "iterations: 172521\ncpu: 4052.0330858272414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8625.73402140414,
            "unit": "ns/iter",
            "extra": "iterations: 84003\ncpu: 8625.544325797899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33232.6155866899,
            "unit": "ns/iter",
            "extra": "iterations: 25124\ncpu: 33232.68189778697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145789.70047814876,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 145784.90437158465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 119481.003789476,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 119478.76491228079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119512.3726123586,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 119509.78932584256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 120195.95329206983,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 120196.27180641523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281647.67781746486,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 281639.94803507684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2187881.4871194344,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2187841.686182668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1773756.1216730191,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1773700.7604562677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1791233.9519231052,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1791216.3461538455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1777075.761904793,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1777026.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066729.1536697173,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1066718.8073394499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1741488.8227611668,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1741459.1417910473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5868.502716752983,
            "unit": "ns/iter",
            "extra": "iterations: 119260\ncpu: 5868.412711722316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4846.0615389958175,
            "unit": "ns/iter",
            "extra": "iterations: 144055\ncpu: 4845.972718753278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4822.582861600545,
            "unit": "ns/iter",
            "extra": "iterations: 144856\ncpu: 4822.368421052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4781.774573331004,
            "unit": "ns/iter",
            "extra": "iterations: 145839\ncpu: 4781.788821920065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8623.98673587086,
            "unit": "ns/iter",
            "extra": "iterations: 83232\ncpu: 8623.659169550174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22767.88894517583,
            "unit": "ns/iter",
            "extra": "iterations: 35532\ncpu: 22767.662951705453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118202.30770294357,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 118199.14258055581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95773.18756302692,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 95772.36974789888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95912.92268737382,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 95908.44024307918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96113.29605557844,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 96108.79650380988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 178605.53007217383,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 178597.29350441063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1735568.1266293868,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735443.2029795174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362882.8885631135,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1362779.4721407606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1367818.2470414075,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1367753.84615385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1350365.411678839,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1350280.729927004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 804703.2954739778,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 804661.4859094811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1361326.575182461,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1360966.8613138655 ns\nthreads: 1"
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
        "date": 1702083217742,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14566.43492333885,
            "unit": "ns/iter",
            "extra": "iterations: 46960\ncpu: 14565.78790459966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120807.67967526015,
            "unit": "ns/iter",
            "extra": "iterations: 7021\ncpu: 120804.50078336417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229160.88193530502,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 229143.51827504614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334807.1817829447,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 334807.40310077526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 445351.21399388375,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 445324.9233912155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 552638.7202268353,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 552611.4681789541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 527866.6410000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527820.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 612477.508999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612468.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 697776.6902050269,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 697739.4836750191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11103.745437247318,
            "unit": "ns/iter",
            "extra": "iterations: 63065\ncpu: 11103.304527075241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9096.346043577838,
            "unit": "ns/iter",
            "extra": "iterations: 76736\ncpu: 9095.702147623006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9059.829720161892,
            "unit": "ns/iter",
            "extra": "iterations: 77402\ncpu: 9059.078576780972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9088.659070784726,
            "unit": "ns/iter",
            "extra": "iterations: 76796\ncpu: 9088.469451533925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14572.718723988653,
            "unit": "ns/iter",
            "extra": "iterations: 48056\ncpu: 14572.419677043445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54856.46464170027,
            "unit": "ns/iter",
            "extra": "iterations: 14848\ncpu: 54855.87284482764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249257.16814420655,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 249254.669030733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196329.3486766289,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 196329.41311852718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198960.54963617216,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 198958.6538461533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195048.71271478184,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 195046.6666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468687.6147323642,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 468675.6226815049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3806710.3632651735,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3806548.571428567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3227167.3973509786,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3227036.4238410657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3101335.4000000013,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3101155.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3101923.3521594536,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3101765.780730899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1753039.7857142857,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752914.0977443592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2993231.5659164363,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993088.424437305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6526.380602587002,
            "unit": "ns/iter",
            "extra": "iterations: 107138\ncpu: 6526.353861375074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68780.86862079974,
            "unit": "ns/iter",
            "extra": "iterations: 12384\ncpu: 68780.24063307475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133143.5470293258,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 133139.08220635148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195729.13034669333,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 195724.29085997274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258556.970326402,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 258551.63204747767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 322518.1191806452,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 322504.3575419002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 385511.4962505489,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 385505.11689457373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 447477.51262235496,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 447449.71664090845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 509473.6775701077,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 509444.5093457941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4899.577540406682,
            "unit": "ns/iter",
            "extra": "iterations: 142674\ncpu: 4899.453299129494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4118.181574797347,
            "unit": "ns/iter",
            "extra": "iterations: 169952\ncpu: 4117.526125023516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4053.176661461565,
            "unit": "ns/iter",
            "extra": "iterations: 172273\ncpu: 4053.102343373597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4080.0083468258404,
            "unit": "ns/iter",
            "extra": "iterations: 171083\ncpu: 4079.8571453622144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7109.5171834943085,
            "unit": "ns/iter",
            "extra": "iterations: 98292\ncpu: 7109.374109795369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31546.754101502374,
            "unit": "ns/iter",
            "extra": "iterations: 26088\ncpu: 31545.595676173154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134022.13755698557,
            "unit": "ns/iter",
            "extra": "iterations: 6361\ncpu: 134022.22920924294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107486.87938430533,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 107483.33333333359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108168.28555118771,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108168.36229861758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108010.57793278244,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 108000.78630310715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278311.6148908874,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 278311.6816431325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2158314.6689814287,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2158143.7499999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1759064.122641464,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1758976.0377358422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1830728.5657142745,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1830390.666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1766889.6685714095,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1766782.2857142873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1035390.9445061077,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 1035375.5826859105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1712583.9484345666,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1712536.0957642747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6922.7104699692,
            "unit": "ns/iter",
            "extra": "iterations: 101347\ncpu: 6922.642012097108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51041.38369999873,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51040.03000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94044.151422316,
            "unit": "ns/iter",
            "extra": "iterations: 9140\ncpu: 94042.45076586396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137473.96658179598,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 137472.75620623838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180769.74632506896,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 180764.30071398572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224638.03673047072,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 224635.61821003456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267614.19395621325,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 267609.2198581552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310976.76441102684,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 310970.81990690983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354618.52113822656,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 354602.52032520296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5702.809799165065,
            "unit": "ns/iter",
            "extra": "iterations: 122439\ncpu: 5702.817729644953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4720.969397243014,
            "unit": "ns/iter",
            "extra": "iterations: 148418\ncpu: 4720.688865231937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4700.15677681736,
            "unit": "ns/iter",
            "extra": "iterations: 149008\ncpu: 4699.958391495732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4658.201829791927,
            "unit": "ns/iter",
            "extra": "iterations: 150181\ncpu: 4658.157157030553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7113.166852928278,
            "unit": "ns/iter",
            "extra": "iterations: 98428\ncpu: 7113.1720648595865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22868.83980527782,
            "unit": "ns/iter",
            "extra": "iterations: 35538\ncpu: 22868.639203106395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 113232.93778131112,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 113231.7977230598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 87722.50107858104,
            "unit": "ns/iter",
            "extra": "iterations: 9735\ncpu: 87721.74627632293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88473.46071132885,
            "unit": "ns/iter",
            "extra": "iterations: 9672\ncpu: 88470.17162944707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85572.59631188396,
            "unit": "ns/iter",
            "extra": "iterations: 9978\ncpu: 85571.2367207857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184881.4207582256,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 184877.3979697543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1665168.9821746622,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1665121.5686274602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1315859.3107344536,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1315839.1242937916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1323719.2855113377,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1323691.6193181833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1318412.4957626928,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1318377.9661016942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 714814.3989239115,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 714805.0730207504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1267926.1035422767,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1267900.27247956 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}