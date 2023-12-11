window.BENCHMARK_DATA = {
  "lastUpdate": 1702335666604,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702084737538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1545.2417598325994,
            "unit": "ns/iter",
            "extra": "iterations: 455907\ncpu: 1545.2017626401876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18243.44558575505,
            "unit": "ns/iter",
            "extra": "iterations: 45659\ncpu: 18243.22258481351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38804.565318026354,
            "unit": "ns/iter",
            "extra": "iterations: 21602\ncpu: 38802.78677900193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51093.02129999946,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51091.82000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64496.21514954076,
            "unit": "ns/iter",
            "extra": "iterations: 13809\ncpu: 64493.66355275542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79683.69439883265,
            "unit": "ns/iter",
            "extra": "iterations: 10962\ncpu: 79680.36854588584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100140.12466577641,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 100137.61140819971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108874.93939393695,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 108872.62455059067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 127486.02361976138,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 127481.26358498767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1294.0181310888777,
            "unit": "ns/iter",
            "extra": "iterations: 538688\ncpu: 1294.0015370678411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1037.2600147034732,
            "unit": "ns/iter",
            "extra": "iterations: 676031\ncpu: 1037.2465168017445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1026.5278792412896,
            "unit": "ns/iter",
            "extra": "iterations: 681690\ncpu: 1026.50178233508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1052.337882031612,
            "unit": "ns/iter",
            "extra": "iterations: 660482\ncpu: 1052.323303284569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2046.9040947393953,
            "unit": "ns/iter",
            "extra": "iterations: 342244\ncpu: 2046.8741599560544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6327.008455577191,
            "unit": "ns/iter",
            "extra": "iterations: 128909\ncpu: 6326.925971033827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31290.578745974683,
            "unit": "ns/iter",
            "extra": "iterations: 26395\ncpu: 31289.050956620616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27281.942864691606,
            "unit": "ns/iter",
            "extra": "iterations: 30279\ncpu: 27281.396347303387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28346.12408710724,
            "unit": "ns/iter",
            "extra": "iterations: 30124\ncpu: 28345.74757668305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27244.307160128817,
            "unit": "ns/iter",
            "extra": "iterations: 29776\ncpu: 27243.951504567456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63844.40161763712,
            "unit": "ns/iter",
            "extra": "iterations: 13971\ncpu: 63841.52888125392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 624441.7959999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624431.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 609354.1782246805,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 609340.8460471549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 634289.6447091844,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 634269.9369306231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603895.1032078054,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 603883.4728033462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348177.84093567246,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 348169.0448343073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 615671.6967383837,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 615642.3317140865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 816.8240763858433,
            "unit": "ns/iter",
            "extra": "iterations: 857122\ncpu: 816.7993587843965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12283.649766950834,
            "unit": "ns/iter",
            "extra": "iterations: 68226\ncpu: 12283.141324421755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26350.024414373558,
            "unit": "ns/iter",
            "extra": "iterations: 31334\ncpu: 26348.069190017213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39677.645001901095,
            "unit": "ns/iter",
            "extra": "iterations: 21048\ncpu: 39677.484796655175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53186.73003922631,
            "unit": "ns/iter",
            "extra": "iterations: 15806\ncpu: 53184.4679235732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55405.066000000144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55404.89999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66093.00955486356,
            "unit": "ns/iter",
            "extra": "iterations: 13187\ncpu: 66089.33040115294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76808.7208022716,
            "unit": "ns/iter",
            "extra": "iterations: 11268\ncpu: 76805.4135605257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88208.30459654586,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 88201.6258530712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 602.3585277103982,
            "unit": "ns/iter",
            "extra": "iterations: 1162217\ncpu: 602.3293412503916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.78012094157765,
            "unit": "ns/iter",
            "extra": "iterations: 1422009\ncpu: 482.76965898246743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.19286647128683,
            "unit": "ns/iter",
            "extra": "iterations: 1464801\ncpu: 478.18720768213575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 505.10356022191723,
            "unit": "ns/iter",
            "extra": "iterations: 1381515\ncpu: 505.0849972674943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1076.3916565542236,
            "unit": "ns/iter",
            "extra": "iterations: 650187\ncpu: 1076.3694137225198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4582.738810962738,
            "unit": "ns/iter",
            "extra": "iterations: 174881\ncpu: 4582.654490768037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22416.66172692613,
            "unit": "ns/iter",
            "extra": "iterations: 36979\ncpu: 22416.42013034428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17896.07681534144,
            "unit": "ns/iter",
            "extra": "iterations: 46410\ncpu: 17895.636716224973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16646.037429081516,
            "unit": "ns/iter",
            "extra": "iterations: 49881\ncpu: 16645.83709227966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18121.05660955395,
            "unit": "ns/iter",
            "extra": "iterations: 45699\ncpu: 18120.591260202662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44816.46691117913,
            "unit": "ns/iter",
            "extra": "iterations: 18813\ncpu: 44814.48998033265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 522891.08793820196,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 522861.2002376704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 410833.6959174142,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 410800.8446738626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 412101.2932761117,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 412084.4539818777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 409348.25683317444,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 409320.40527803876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245999.6290909098,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 245985.9300699282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413430.1234626311,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 413412.58278145693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 613.1341472996203,
            "unit": "ns/iter",
            "extra": "iterations: 1145502\ncpu: 613.1024651201005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5585.67045000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5585.357000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10713.07893355192,
            "unit": "ns/iter",
            "extra": "iterations: 78091\ncpu: 10712.55458375486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16263.774952684906,
            "unit": "ns/iter",
            "extra": "iterations: 52309\ncpu: 16262.723431914304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20983.11910626367,
            "unit": "ns/iter",
            "extra": "iterations: 39788\ncpu: 20982.208203478458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26543.447075913205,
            "unit": "ns/iter",
            "extra": "iterations: 31668\ncpu: 26540.801439939398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31957.028923405975,
            "unit": "ns/iter",
            "extra": "iterations: 26138\ncpu: 31956.565154181862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36668.88629187818,
            "unit": "ns/iter",
            "extra": "iterations: 22804\ncpu: 36666.76460270118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42099.04925863302,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 42096.33794407417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 553.8963696005292,
            "unit": "ns/iter",
            "extra": "iterations: 1268180\ncpu: 553.8669589490426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.81258047017747,
            "unit": "ns/iter",
            "extra": "iterations: 1589098\ncpu: 433.77979205813614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 440.8594529546187,
            "unit": "ns/iter",
            "extra": "iterations: 1583854\ncpu: 440.8361503017326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 430.6816038575033,
            "unit": "ns/iter",
            "extra": "iterations: 1630070\ncpu: 430.64291717533047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 912.6099266968231,
            "unit": "ns/iter",
            "extra": "iterations: 765451\ncpu: 912.5655332607761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2369.8932938377934,
            "unit": "ns/iter",
            "extra": "iterations: 337928\ncpu: 2369.716034184807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8867.521931464651,
            "unit": "ns/iter",
            "extra": "iterations: 93587\ncpu: 8867.18133928864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9162.84174853309,
            "unit": "ns/iter",
            "extra": "iterations: 88966\ncpu: 9162.331677269918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9793.472910784072,
            "unit": "ns/iter",
            "extra": "iterations: 83225\ncpu: 9793.011715229813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9645.36387363443,
            "unit": "ns/iter",
            "extra": "iterations: 84675\ncpu: 9644.929436079123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31194.330485084814,
            "unit": "ns/iter",
            "extra": "iterations: 26449\ncpu: 31190.415516654662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 257335.13899500426,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 257327.97531589994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196213.17049851778,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 196209.17368541012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201107.9557705612,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 201100.59894033792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195448.84787018364,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 195441.8976786094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103460.55763313775,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 103453.39644970359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192176.10622388727,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192167.09918627626 ns\nthreads: 1"
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
        "date": 1702084973891,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1539.609239091036,
            "unit": "ns/iter",
            "extra": "iterations: 455153\ncpu: 1539.5671345679366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17899.5668554433,
            "unit": "ns/iter",
            "extra": "iterations: 45733\ncpu: 17898.314127653994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37794.81441934832,
            "unit": "ns/iter",
            "extra": "iterations: 21915\ncpu: 37793.388090349086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57007.84674536331,
            "unit": "ns/iter",
            "extra": "iterations: 14825\ncpu: 57004.82293423271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62411.42529999877,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62407.699999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78935.00890392692,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 78930.16650342804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93180.62962556198,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93177.67651257273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107261.57365510093,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 107254.55002513829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125864.91837606883,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 125860.92592592601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1338.0467028517396,
            "unit": "ns/iter",
            "extra": "iterations: 530974\ncpu: 1337.9447957903756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1058.545387667475,
            "unit": "ns/iter",
            "extra": "iterations: 663352\ncpu: 1058.4825251148704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1048.4550811957172,
            "unit": "ns/iter",
            "extra": "iterations: 667215\ncpu: 1048.3996912539433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1036.737875204678,
            "unit": "ns/iter",
            "extra": "iterations: 673599\ncpu: 1036.6976494917587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2032.4842012813058,
            "unit": "ns/iter",
            "extra": "iterations: 343857\ncpu: 2032.4094027459093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6369.007106207517,
            "unit": "ns/iter",
            "extra": "iterations: 127072\ncpu: 6368.631169730543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31895.825897714967,
            "unit": "ns/iter",
            "extra": "iterations: 23894\ncpu: 31894.45885996487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27156.627684338313,
            "unit": "ns/iter",
            "extra": "iterations: 30501\ncpu: 27155.473591029742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27794.00466130118,
            "unit": "ns/iter",
            "extra": "iterations: 29820\ncpu: 27792.890677397798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27902.158508869386,
            "unit": "ns/iter",
            "extra": "iterations: 29481\ncpu: 27900.18656083579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64486.54695810556,
            "unit": "ns/iter",
            "extra": "iterations: 13725\ncpu: 64482.95810564676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 642223.3099999914,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642185.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 601527.8158995814,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 601495.397489538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 604745.0508002783,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 604729.3667362563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604440.391092554,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 604413.2915796802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 345194.85917721334,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 345173.06170885987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 604314.1107266399,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 604291.5570934268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 856.469368797091,
            "unit": "ns/iter",
            "extra": "iterations: 817059\ncpu: 856.4396206393905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12139.35739935161,
            "unit": "ns/iter",
            "extra": "iterations: 68506\ncpu: 12138.81995737601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26478.537215592725,
            "unit": "ns/iter",
            "extra": "iterations: 31425\ncpu: 26476.976929196557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39559.60517907294,
            "unit": "ns/iter",
            "extra": "iterations: 20969\ncpu: 39558.60079164481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52520.26849987304,
            "unit": "ns/iter",
            "extra": "iterations: 15892\ncpu: 52518.66347847951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54825.12680000013,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54824.23999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65269.66972339092,
            "unit": "ns/iter",
            "extra": "iterations: 13304\ncpu: 65266.07787131718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 75938.50919004665,
            "unit": "ns/iter",
            "extra": "iterations: 11371\ncpu: 75933.7085568553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87220.01732722364,
            "unit": "ns/iter",
            "extra": "iterations: 10042\ncpu: 87214.65843457515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 605.8026281714126,
            "unit": "ns/iter",
            "extra": "iterations: 1154567\ncpu: 605.7782701220499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.76693500000147,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.7468000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.5636850616262,
            "unit": "ns/iter",
            "extra": "iterations: 1394495\ncpu: 501.5456491418059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 518.5349990513973,
            "unit": "ns/iter",
            "extra": "iterations: 1359894\ncpu: 518.5127664362079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1062.1975222746692,
            "unit": "ns/iter",
            "extra": "iterations: 659718\ncpu: 1062.1391261114586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4540.81228746965,
            "unit": "ns/iter",
            "extra": "iterations: 174975\ncpu: 4540.595513644831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22476.203435041898,
            "unit": "ns/iter",
            "extra": "iterations: 36739\ncpu: 22474.969378589445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17882.915946822308,
            "unit": "ns/iter",
            "extra": "iterations: 45959\ncpu: 17881.999173175976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17820.61932769505,
            "unit": "ns/iter",
            "extra": "iterations: 46586\ncpu: 17819.840724681213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18251.031681631568,
            "unit": "ns/iter",
            "extra": "iterations: 45105\ncpu: 18250.35140228349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44985.70374972866,
            "unit": "ns/iter",
            "extra": "iterations: 18508\ncpu: 44982.74800086464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 518865.11722912674,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 518848.2534043819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 408564.0416666686,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 408542.59259259293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410384.0956321849,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 410358.8045977036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 411193.33349011274,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 411169.04985888815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 244085.56310412075,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 244077.76857221825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 410796.87109004764,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 410782.79620853165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 611.972824507426,
            "unit": "ns/iter",
            "extra": "iterations: 1145775\ncpu: 611.9587178983703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5570.267270000216,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5570.020000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10534.508345437658,
            "unit": "ns/iter",
            "extra": "iterations: 78486\ncpu: 10533.950003822385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15756.251025688432,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 15755.584919608198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20582.796524222107,
            "unit": "ns/iter",
            "extra": "iterations: 40624\ncpu: 20582.052481291823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25752.013703691617,
            "unit": "ns/iter",
            "extra": "iterations: 32473\ncpu: 25750.75909216887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30851.331976464273,
            "unit": "ns/iter",
            "extra": "iterations: 27023\ncpu: 30850.064759649293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36308.115229373805,
            "unit": "ns/iter",
            "extra": "iterations: 23041\ncpu: 36306.84432099295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41423.12088452146,
            "unit": "ns/iter",
            "extra": "iterations: 20350\ncpu: 41420.8009828013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 555.5417263130942,
            "unit": "ns/iter",
            "extra": "iterations: 1259505\ncpu: 555.5049801310852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.17977309884907,
            "unit": "ns/iter",
            "extra": "iterations: 1622028\ncpu: 430.1576791522684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 435.9909382346003,
            "unit": "ns/iter",
            "extra": "iterations: 1599909\ncpu: 435.97217091722405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 423.6730330367565,
            "unit": "ns/iter",
            "extra": "iterations: 1644108\ncpu: 423.64984538728584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.3893702405986,
            "unit": "ns/iter",
            "extra": "iterations: 792906\ncpu: 881.3510050371731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2361.886217868135,
            "unit": "ns/iter",
            "extra": "iterations: 337865\ncpu: 2361.7589865774876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9469.404824073674,
            "unit": "ns/iter",
            "extra": "iterations: 85405\ncpu: 9469.114220478828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9228.38764349624,
            "unit": "ns/iter",
            "extra": "iterations: 88504\ncpu: 9228.095905269827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10158.756044502545,
            "unit": "ns/iter",
            "extra": "iterations: 80445\ncpu: 10158.490894399867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9670.858635693547,
            "unit": "ns/iter",
            "extra": "iterations: 84116\ncpu: 9670.3255028769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30345.675159469116,
            "unit": "ns/iter",
            "extra": "iterations: 27278\ncpu: 30345.142605763183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259159.77665577584,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 259147.52004752227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199775.98293127646,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 199767.29631315602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199007.8337134965,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 198993.95529197337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198513.51187513326,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 198506.33340873008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103513.09328930489,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 103505.75539568241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189545.57965658908,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 189538.4916322531 ns\nthreads: 1"
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
        "date": 1702085594206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1491.0879116462017,
            "unit": "ns/iter",
            "extra": "iterations: 472645\ncpu: 1491.1002972632737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18009.637521371507,
            "unit": "ns/iter",
            "extra": "iterations: 45622\ncpu: 18009.418701503662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37858.32599825769,
            "unit": "ns/iter",
            "extra": "iterations: 21813\ncpu: 37851.235501765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56021.21098012792,
            "unit": "ns/iter",
            "extra": "iterations: 14845\ncpu: 56020.80835298081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62998.30829999848,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62994.690000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78528.91800213348,
            "unit": "ns/iter",
            "extra": "iterations: 11232\ncpu: 78525.84579772079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 95318.8421520692,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 95316.8297020899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106850.10252808925,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 106848.83810010213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128741.28266550189,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 128739.28571428581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1272.2040372236058,
            "unit": "ns/iter",
            "extra": "iterations: 550081\ncpu: 1272.1810060700152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1024.1454735563975,
            "unit": "ns/iter",
            "extra": "iterations: 683815\ncpu: 1024.0851692343695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1017.5040659041637,
            "unit": "ns/iter",
            "extra": "iterations: 687301\ncpu: 1017.4783682840558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1022.8006655588649,
            "unit": "ns/iter",
            "extra": "iterations: 684237\ncpu: 1022.7609731715779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2021.1762285133866,
            "unit": "ns/iter",
            "extra": "iterations: 346028\ncpu: 2021.1245910735586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6446.620756470739,
            "unit": "ns/iter",
            "extra": "iterations: 126958\ncpu: 6446.270420138944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32011.094637224945,
            "unit": "ns/iter",
            "extra": "iterations: 26311\ncpu: 31961.761240545762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27580.870480442816,
            "unit": "ns/iter",
            "extra": "iterations: 30451\ncpu: 27579.567173491854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27492.72980239316,
            "unit": "ns/iter",
            "extra": "iterations: 29756\ncpu: 27491.504234440086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27619.294215099308,
            "unit": "ns/iter",
            "extra": "iterations: 29577\ncpu: 27617.86861412594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66773.19639379634,
            "unit": "ns/iter",
            "extra": "iterations: 13865\ncpu: 66772.31878831584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 623785.698000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623771.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 606640.7006280685,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 606623.3775296584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 608921.2608089217,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 608913.3891213397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 609960.4837799662,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 609958.6741889986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 346114.8004750665,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 346105.9778305623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 615760.1927119929,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 615740.4344779263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 810.6379491526692,
            "unit": "ns/iter",
            "extra": "iterations: 861205\ncpu: 810.6067661009882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12229.778111562644,
            "unit": "ns/iter",
            "extra": "iterations: 67908\ncpu: 12229.382399717268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26913.067848508606,
            "unit": "ns/iter",
            "extra": "iterations: 31025\ncpu: 26912.067687348863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40077.44795796417,
            "unit": "ns/iter",
            "extra": "iterations: 20935\ncpu: 40076.22163840466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52954.23928798681,
            "unit": "ns/iter",
            "extra": "iterations: 15730\ncpu: 52952.30133502842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55601.82819999682,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55601.69999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66561.33450114558,
            "unit": "ns/iter",
            "extra": "iterations: 13130\ncpu: 66557.82178217864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76518.90817866771,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 76515.88668857122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 86735.93031809058,
            "unit": "ns/iter",
            "extra": "iterations: 10060\ncpu: 86734.10536779289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 586.4348400344703,
            "unit": "ns/iter",
            "extra": "iterations: 1183380\ncpu: 586.4299717757622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 480.95241037168245,
            "unit": "ns/iter",
            "extra": "iterations: 1451913\ncpu: 480.93473920269327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 484.6855480930654,
            "unit": "ns/iter",
            "extra": "iterations: 1446342\ncpu: 484.682391854758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.3980166821134,
            "unit": "ns/iter",
            "extra": "iterations: 1398263\ncpu: 501.3924419082829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1068.8865419221345,
            "unit": "ns/iter",
            "extra": "iterations: 655740\ncpu: 1068.8864488974364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4495.352120570692,
            "unit": "ns/iter",
            "extra": "iterations: 176627\ncpu: 4495.291773058477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21614.03786579382,
            "unit": "ns/iter",
            "extra": "iterations: 38478\ncpu: 21613.727324704916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17182.623046713317,
            "unit": "ns/iter",
            "extra": "iterations: 48380\ncpu: 17182.579578338253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16643.53914629965,
            "unit": "ns/iter",
            "extra": "iterations: 49877\ncpu: 16643.28648475242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17469.60818725701,
            "unit": "ns/iter",
            "extra": "iterations: 47464\ncpu: 17469.204028316264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44455.83892262773,
            "unit": "ns/iter",
            "extra": "iterations: 18935\ncpu: 44455.00396091882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 522581.95532041887,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 522568.6654908891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 412367.824675317,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 412359.78664192907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410205.82259571046,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 410194.4911297853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 410844.6164574397,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 410837.33147373283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241753.92922060186,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 241755.0261635906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 412556.3585171477,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 412545.65931487695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 611.7790749930857,
            "unit": "ns/iter",
            "extra": "iterations: 1145959\ncpu: 611.773021547891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5588.094810000258,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.0900000000365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10844.648103834043,
            "unit": "ns/iter",
            "extra": "iterations: 76892\ncpu: 10843.689850699682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16046.081033920564,
            "unit": "ns/iter",
            "extra": "iterations: 52151\ncpu: 16045.717244156374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21154.601080673372,
            "unit": "ns/iter",
            "extra": "iterations: 39790\ncpu: 21153.420457401277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26229.26416876512,
            "unit": "ns/iter",
            "extra": "iterations: 31760\ncpu: 26228.444584382894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31497.592900386684,
            "unit": "ns/iter",
            "extra": "iterations: 26593\ncpu: 31496.232091151865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36566.44280796466,
            "unit": "ns/iter",
            "extra": "iterations: 22949\ncpu: 36565.445117434225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41697.276858471014,
            "unit": "ns/iter",
            "extra": "iterations: 20003\ncpu: 41696.08558716207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 559.1824070138636,
            "unit": "ns/iter",
            "extra": "iterations: 1265834\ncpu: 559.1819306480982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.79167443342493,
            "unit": "ns/iter",
            "extra": "iterations: 1630880\ncpu: 431.78032718532006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 434.46047879556664,
            "unit": "ns/iter",
            "extra": "iterations: 1601811\ncpu: 434.4425153779008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.0239648352283,
            "unit": "ns/iter",
            "extra": "iterations: 1642782\ncpu: 425.010865714381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 887.9076998894004,
            "unit": "ns/iter",
            "extra": "iterations: 789349\ncpu: 887.8284510400327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2361.325167979806,
            "unit": "ns/iter",
            "extra": "iterations: 338136\ncpu: 2361.246066671394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9180.816377883175,
            "unit": "ns/iter",
            "extra": "iterations: 90610\ncpu: 9180.360887319173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9527.960405145941,
            "unit": "ns/iter",
            "extra": "iterations: 85895\ncpu: 9527.53012398856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9991.66921941922,
            "unit": "ns/iter",
            "extra": "iterations: 82003\ncpu: 9991.532017121352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9596.46788947827,
            "unit": "ns/iter",
            "extra": "iterations: 85268\ncpu: 9596.471126331087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31274.582567770874,
            "unit": "ns/iter",
            "extra": "iterations: 26560\ncpu: 31273.181475903988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263615.3068592071,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 263608.3333333348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201716.39012003632,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201706.5327793157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197787.5162930459,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 197780.44834758446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199867.1212121169,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 199853.5657325148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104371.92324094074,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 104368.21843165199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191321.65507373807,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 191311.99647809574 ns\nthreads: 1"
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
        "date": 1702244241936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1642.6880499662634,
            "unit": "ns/iter",
            "extra": "iterations: 419003\ncpu: 1642.703274200901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24723.80806768427,
            "unit": "ns/iter",
            "extra": "iterations: 33095\ncpu: 24722.607644659314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50785.00254653333,
            "unit": "ns/iter",
            "extra": "iterations: 16493\ncpu: 50782.356151094406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63287.15357502448,
            "unit": "ns/iter",
            "extra": "iterations: 13902\ncpu: 63282.520500647355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 94688.86701705787,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 94682.66560888532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113675.15839618705,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 113673.90498875207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134474.74867642467,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 134471.62877608216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163583.84260759785,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 163582.8921303798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174470.36573609125,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 174460.11247238406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1444.6875928846682,
            "unit": "ns/iter",
            "extra": "iterations: 483126\ncpu: 1444.6504638541478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1158.1784286211048,
            "unit": "ns/iter",
            "extra": "iterations: 606461\ncpu: 1158.1895620658224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1138.9308800307456,
            "unit": "ns/iter",
            "extra": "iterations: 604138\ncpu: 1138.9048528647452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1156.5283243150309,
            "unit": "ns/iter",
            "extra": "iterations: 606546\ncpu: 1156.514922198813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2315.7541895004697,
            "unit": "ns/iter",
            "extra": "iterations: 314775\ncpu: 2315.3230084981337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7051.61049007489,
            "unit": "ns/iter",
            "extra": "iterations: 116472\ncpu: 7051.500789889405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44699.11835325128,
            "unit": "ns/iter",
            "extra": "iterations: 18242\ncpu: 44697.03979826767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34939.89127459347,
            "unit": "ns/iter",
            "extra": "iterations: 23380\ncpu: 34939.478186484135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34794.31373852794,
            "unit": "ns/iter",
            "extra": "iterations: 22557\ncpu: 34793.75803519971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 35800.63601667172,
            "unit": "ns/iter",
            "extra": "iterations: 22795\ncpu: 35799.89032682608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79523.16051378664,
            "unit": "ns/iter",
            "extra": "iterations: 11133\ncpu: 79522.62642594083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 792021.4434931042,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 791995.7191780821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 658122.9999999892,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658082.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 653803.728000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653784.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 652468.7730000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652438.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 459733.2476390164,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 459725.0786988469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 995.5366108622961,
            "unit": "ns/iter",
            "extra": "iterations: 703111\ncpu: 995.5292976500166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18822.600867384757,
            "unit": "ns/iter",
            "extra": "iterations: 44271\ncpu: 18822.76433782837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40073.82835501132,
            "unit": "ns/iter",
            "extra": "iterations: 20991\ncpu: 40073.25520461164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50143.23510000054,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50143.719999999805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67116.06666666783,
            "unit": "ns/iter",
            "extra": "iterations: 13125\ncpu: 67116.00761904768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82706.3496407135,
            "unit": "ns/iter",
            "extra": "iterations: 10159\ncpu: 82703.92755192451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98807.68494392557,
            "unit": "ns/iter",
            "extra": "iterations: 8827\ncpu: 98807.13719270426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115216.0139823224,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 115211.87178472533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 131533.59000602437,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 131532.93196869383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 920.820886383016,
            "unit": "ns/iter",
            "extra": "iterations: 762650\ncpu: 920.7918442273706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 655.0462884373787,
            "unit": "ns/iter",
            "extra": "iterations: 1069792\ncpu: 655.0530383476455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 673.2412437637963,
            "unit": "ns/iter",
            "extra": "iterations: 1037689\ncpu: 673.2481504574132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 658.7219553773426,
            "unit": "ns/iter",
            "extra": "iterations: 1067620\ncpu: 658.721548865702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1366.8157528207578,
            "unit": "ns/iter",
            "extra": "iterations: 512632\ncpu: 1366.810304467915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5275.94941000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5275.785999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29679.775158755474,
            "unit": "ns/iter",
            "extra": "iterations: 27873\ncpu: 29680.045205037117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24631.280326651628,
            "unit": "ns/iter",
            "extra": "iterations: 33675\ncpu: 24629.9599109131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24025.027838128168,
            "unit": "ns/iter",
            "extra": "iterations: 34521\ncpu: 24023.950638741666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 24609.027229933556,
            "unit": "ns/iter",
            "extra": "iterations: 33566\ncpu: 24607.120300303995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52894.06950000171,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52889.48000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 590617.334000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590623.7000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 617420.2106383243,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 617377.6595744685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 612774.1701828266,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 612720.8860759482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 607227.5116279325,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 607219.7322057792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357997.9585365861,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 357996.9512195134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 609269.9525802038,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 609238.0055788019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 607.5984663044364,
            "unit": "ns/iter",
            "extra": "iterations: 1153684\ncpu: 607.5969676271826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5562.684550000085,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5562.530999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10713.618313690475,
            "unit": "ns/iter",
            "extra": "iterations: 77210\ncpu: 10713.355782929657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16226.4077254851,
            "unit": "ns/iter",
            "extra": "iterations: 52631\ncpu: 16226.41029051319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21356.593022038523,
            "unit": "ns/iter",
            "extra": "iterations: 38206\ncpu: 21356.064492488073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26874.88513855483,
            "unit": "ns/iter",
            "extra": "iterations: 31612\ncpu: 26874.78805516894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31957.54176519971,
            "unit": "ns/iter",
            "extra": "iterations: 26218\ncpu: 31957.82668395781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37034.93587637209,
            "unit": "ns/iter",
            "extra": "iterations: 22519\ncpu: 37034.23775478506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42307.672034843185,
            "unit": "ns/iter",
            "extra": "iterations: 19746\ncpu: 42307.46986731505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 589.5358238970532,
            "unit": "ns/iter",
            "extra": "iterations: 1188941\ncpu: 589.5272347408333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 460.8119033635335,
            "unit": "ns/iter",
            "extra": "iterations: 1515370\ncpu: 460.8095712598268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 466.12252628019695,
            "unit": "ns/iter",
            "extra": "iterations: 1502747\ncpu: 466.10846669466054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 460.22691457348685,
            "unit": "ns/iter",
            "extra": "iterations: 1525627\ncpu: 460.2248124869309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 930.8884912682677,
            "unit": "ns/iter",
            "extra": "iterations: 754488\ncpu: 930.8777608126354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2367.3892553191135,
            "unit": "ns/iter",
            "extra": "iterations: 338400\ncpu: 2367.3844562647837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13032.187416118244,
            "unit": "ns/iter",
            "extra": "iterations: 62588\ncpu: 13031.661021282102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10179.101217770358,
            "unit": "ns/iter",
            "extra": "iterations: 79818\ncpu: 10179.057355483721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10009.206242107708,
            "unit": "ns/iter",
            "extra": "iterations: 80774\ncpu: 10009.028895436633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9766.668365195976,
            "unit": "ns/iter",
            "extra": "iterations: 83013\ncpu: 9766.752195439305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30528.117126092187,
            "unit": "ns/iter",
            "extra": "iterations: 27099\ncpu: 30527.23347725015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 265846.93798449455,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 265837.3333333313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207199.40517860992,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 207189.4749460555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208598.113078378,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 208591.24173748624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206534.2271330608,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 206524.8404632462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106187.30987624373,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 106185.79228342675 ns\nthreads: 1"
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
        "date": 1702285097667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1798.1067335789892,
            "unit": "ns/iter",
            "extra": "iterations: 380199\ncpu: 1798.0744294435283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24857.619371282613,
            "unit": "ns/iter",
            "extra": "iterations: 27071\ncpu: 24856.828340290347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51794.54453864111,
            "unit": "ns/iter",
            "extra": "iterations: 16278\ncpu: 51793.30998894215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63626.269586092065,
            "unit": "ns/iter",
            "extra": "iterations: 13747\ncpu: 63623.66334472976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92171.76593066072,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 92170.51133062174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 116119.952939629,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 116116.8204587398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135316.5794743432,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 135313.42302878588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154611.9524676743,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 154605.9551994172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 175956.03273688492,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 175953.63969093122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1479.3966828446494,
            "unit": "ns/iter",
            "extra": "iterations: 472453\ncpu: 1479.3551951199408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1167.0978380316499,
            "unit": "ns/iter",
            "extra": "iterations: 599685\ncpu: 1167.0537031941765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1159.8598693268523,
            "unit": "ns/iter",
            "extra": "iterations: 605021\ncpu: 1159.8091636488648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1180.7108691811723,
            "unit": "ns/iter",
            "extra": "iterations: 594295\ncpu: 1180.6688597413745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2249.9724597678833,
            "unit": "ns/iter",
            "extra": "iterations: 309765\ncpu: 2249.9530289090153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7337.452830528199,
            "unit": "ns/iter",
            "extra": "iterations: 111110\ncpu: 7337.102871028714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44674.20869518364,
            "unit": "ns/iter",
            "extra": "iterations: 18539\ncpu: 44673.515292087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38038.180813007646,
            "unit": "ns/iter",
            "extra": "iterations: 21525\ncpu: 38037.10569105693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34370.68281482791,
            "unit": "ns/iter",
            "extra": "iterations: 24172\ncpu: 34369.68806883993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 34949.24446879381,
            "unit": "ns/iter",
            "extra": "iterations: 23729\ncpu: 34947.63791141634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79624.33778625797,
            "unit": "ns/iter",
            "extra": "iterations: 11004\ncpu: 79623.82769901834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 812887.8226643737,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 812861.0726643578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 656651.8110000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656651.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 643850.2710000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643824.8999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 648121.2449999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648099.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 465757.72331385186,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 465740.2018056309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 963.404032686098,
            "unit": "ns/iter",
            "extra": "iterations: 732911\ncpu: 963.3812290987582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19754.73149938261,
            "unit": "ns/iter",
            "extra": "iterations: 42931\ncpu: 19754.345344855737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40610.07378451087,
            "unit": "ns/iter",
            "extra": "iterations: 20465\ncpu: 40609.523576838496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51049.109199999526,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51049.10999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68027.74738567194,
            "unit": "ns/iter",
            "extra": "iterations: 12814\ncpu: 68025.89355392563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84970.50087378483,
            "unit": "ns/iter",
            "extra": "iterations: 10300\ncpu: 84968.85436893185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 101628.7938744614,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 101624.57202748329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 117477.43396993045,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 117470.49979683092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 133777.75401806462,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 133775.47834073237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 808.9064951640481,
            "unit": "ns/iter",
            "extra": "iterations: 864982\ncpu: 808.8894335373499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 645.2461811647936,
            "unit": "ns/iter",
            "extra": "iterations: 1086326\ncpu: 645.2113822185966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 655.8337592170728,
            "unit": "ns/iter",
            "extra": "iterations: 1067584\ncpu: 655.8167788202135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 654.2139120663144,
            "unit": "ns/iter",
            "extra": "iterations: 1067850\ncpu: 654.2095799971845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1315.6180349886665,
            "unit": "ns/iter",
            "extra": "iterations: 522684\ncpu: 1315.5841770553486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5240.523989999986,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5240.420000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29456.818253231377,
            "unit": "ns/iter",
            "extra": "iterations: 28006\ncpu: 29455.727344140527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23425.774020137367,
            "unit": "ns/iter",
            "extra": "iterations: 35158\ncpu: 23425.453666306363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24330.488680140104,
            "unit": "ns/iter",
            "extra": "iterations: 33746\ncpu: 24329.784270728345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 24090.542804568515,
            "unit": "ns/iter",
            "extra": "iterations: 34237\ncpu: 24089.9553115052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53142.03429999793,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53138.94000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 605479.1599999873,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605453.2999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 502586.46099999285,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502580.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 614250.7787857646,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 614228.9602233078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 606138.1006378364,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 606114.6704464878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358630.2757637399,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 358623.6252545818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 613239.1082220728,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 613221.9255094876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.4423085023518,
            "unit": "ns/iter",
            "extra": "iterations: 1139544\ncpu: 614.4342824849241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5707.97779000003,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5707.817000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10899.617473121581,
            "unit": "ns/iter",
            "extra": "iterations: 75247\ncpu: 10899.374061424362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16888.525933589914,
            "unit": "ns/iter",
            "extra": "iterations: 52191\ncpu: 16887.66453986316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21602.85900002604,
            "unit": "ns/iter",
            "extra": "iterations: 38461\ncpu: 21602.483034762638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27013.516356700176,
            "unit": "ns/iter",
            "extra": "iterations: 31455\ncpu: 27011.37815927513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32496.267106126004,
            "unit": "ns/iter",
            "extra": "iterations: 25941\ncpu: 32495.06958097243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37725.86937727934,
            "unit": "ns/iter",
            "extra": "iterations: 22209\ncpu: 37724.69269215176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42355.6225721254,
            "unit": "ns/iter",
            "extra": "iterations: 19307\ncpu: 42354.39995856431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 585.720777750767,
            "unit": "ns/iter",
            "extra": "iterations: 1197093\ncpu: 585.7009438698632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 462.94456164698227,
            "unit": "ns/iter",
            "extra": "iterations: 1513050\ncpu: 462.9333465516681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 461.0410706234531,
            "unit": "ns/iter",
            "extra": "iterations: 1510447\ncpu: 461.03093984760994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 453.95423844882305,
            "unit": "ns/iter",
            "extra": "iterations: 1543501\ncpu: 453.9285040955571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 904.5976704365871,
            "unit": "ns/iter",
            "extra": "iterations: 772076\ncpu: 904.5694983395417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2332.8916928302565,
            "unit": "ns/iter",
            "extra": "iterations: 337937\ncpu: 2332.8632259859073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13277.23261641951,
            "unit": "ns/iter",
            "extra": "iterations: 63048\ncpu: 13276.99847735065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10313.803267692507,
            "unit": "ns/iter",
            "extra": "iterations: 79016\ncpu: 10313.537764503477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9967.917041839693,
            "unit": "ns/iter",
            "extra": "iterations: 81740\ncpu: 9967.429655003782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10016.036175806512,
            "unit": "ns/iter",
            "extra": "iterations: 81021\ncpu: 10015.829229459028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30830.81479289893,
            "unit": "ns/iter",
            "extra": "iterations: 27040\ncpu: 30829.674556213322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266785.173507462,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 266776.8034825854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207010.46928165862,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 207001.8431001873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 207447.36017049197,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 207443.7366800837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207795.34483578772,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 207787.26796763524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106112.9511661825,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 106111.44314868844 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "85d3fc64843f115b47e5a722ba83cd4466299644",
          "message": "Simple Inheritance V1",
          "timestamp": "2023-12-11T18:41:15+03:00",
          "tree_id": "8007add2e1aa04b15f12fdb3fdfca620b2eec68e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/85d3fc64843f115b47e5a722ba83cd4466299644"
        },
        "date": 1702309477690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1650.8530253233043,
            "unit": "ns/iter",
            "extra": "iterations: 422930\ncpu: 1650.7715224741683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24958.223429951773,
            "unit": "ns/iter",
            "extra": "iterations: 33120\ncpu: 24957.980072463768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50788.89008581425,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 50788.351287201025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63561.707105971225,
            "unit": "ns/iter",
            "extra": "iterations: 13749\ncpu: 63560.14255582226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92321.04805558118,
            "unit": "ns/iter",
            "extra": "iterations: 10363\ncpu: 92319.29943066681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114202.29583772308,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 114201.48840885141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135876.3827939982,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 135874.99605367015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157624.52748858632,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 157624.34703196335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174846.6737098774,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 174846.58675335243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1411.121727880818,
            "unit": "ns/iter",
            "extra": "iterations: 495474\ncpu: 1411.124902618502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1130.3336862938556,
            "unit": "ns/iter",
            "extra": "iterations: 620466\ncpu: 1130.295294182113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1144.1866780234293,
            "unit": "ns/iter",
            "extra": "iterations: 612852\ncpu: 1144.152584963417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1126.1968024565565,
            "unit": "ns/iter",
            "extra": "iterations: 619413\ncpu: 1126.163480585653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2315.1984815090727,
            "unit": "ns/iter",
            "extra": "iterations: 308069\ncpu: 2315.170627359454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7472.174439269811,
            "unit": "ns/iter",
            "extra": "iterations: 109723\ncpu: 7471.817212434951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38596.1744467419,
            "unit": "ns/iter",
            "extra": "iterations: 22729\ncpu: 38595.42434774957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32521.40431394125,
            "unit": "ns/iter",
            "extra": "iterations: 25406\ncpu: 32520.40856490592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31997.17975308633,
            "unit": "ns/iter",
            "extra": "iterations: 26325\ncpu: 31996.717948717975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32582.915412640934,
            "unit": "ns/iter",
            "extra": "iterations: 25252\ncpu: 32581.886583240994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 77184.88688021044,
            "unit": "ns/iter",
            "extra": "iterations: 11395\ncpu: 77182.53620008794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 792467.5830479439,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 792438.6986301366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 651023.6580000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650977.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 650059.046999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650043.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 641817.1490000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641805.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 450569.367472979,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 450564.69377251674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 937.6436105390067,
            "unit": "ns/iter",
            "extra": "iterations: 746714\ncpu: 937.6409174061282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18781.535186015706,
            "unit": "ns/iter",
            "extra": "iterations: 44620\ncpu: 18781.205737337557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39776.205045676164,
            "unit": "ns/iter",
            "extra": "iterations: 21127\ncpu: 39775.59047664122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59828.110690566915,
            "unit": "ns/iter",
            "extra": "iterations: 14003\ncpu: 59826.965650217804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66657.40643878507,
            "unit": "ns/iter",
            "extra": "iterations: 13077\ncpu: 66656.47319721639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83278.11076280253,
            "unit": "ns/iter",
            "extra": "iterations: 10527\ncpu: 83275.66258193219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99630.85444774694,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 99629.21335467612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116505.62683993886,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 116503.2886885026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 132602.53438024392,
            "unit": "ns/iter",
            "extra": "iterations: 6559\ncpu: 132601.84479341324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 780.2925711690285,
            "unit": "ns/iter",
            "extra": "iterations: 898284\ncpu: 780.291644958612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 639.2688065943006,
            "unit": "ns/iter",
            "extra": "iterations: 1094523\ncpu: 639.2673338065998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 634.6888169999361,
            "unit": "ns/iter",
            "extra": "iterations: 1101699\ncpu: 634.6796175724965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 642.4354978458482,
            "unit": "ns/iter",
            "extra": "iterations: 1086049\ncpu: 642.4210141531354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1289.9773099802842,
            "unit": "ns/iter",
            "extra": "iterations: 542970\ncpu: 1289.977899331455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5324.437920000094,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5324.4289999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27283.96260082308,
            "unit": "ns/iter",
            "extra": "iterations: 30375\ncpu: 27283.65761316879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23112.120944615894,
            "unit": "ns/iter",
            "extra": "iterations: 35570\ncpu: 23112.01574360409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22436.014525020528,
            "unit": "ns/iter",
            "extra": "iterations: 37728\ncpu: 22435.991836301848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22759.146714945593,
            "unit": "ns/iter",
            "extra": "iterations: 36179\ncpu: 22759.443323475098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50377.145799998856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50376.82000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 586837.8030000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586836.1999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 611025.8723252452,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 611014.479315267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610629.0049575004,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 610622.5212464567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 607777.2980226143,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 607770.9039548055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 344951.30893987423,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 344933.06962025276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 608180.6039188466,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 608178.0965710249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 637.1362815728846,
            "unit": "ns/iter",
            "extra": "iterations: 1100589\ncpu: 637.1275744169691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5865.393689999792,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5865.434000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11032.207079216949,
            "unit": "ns/iter",
            "extra": "iterations: 74189\ncpu: 11032.033050721791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16648.062491595796,
            "unit": "ns/iter",
            "extra": "iterations: 52055\ncpu: 16647.85323215834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21981.53948867499,
            "unit": "ns/iter",
            "extra": "iterations: 37745\ncpu: 21980.598754802108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27344.456356828814,
            "unit": "ns/iter",
            "extra": "iterations: 30715\ncpu: 27344.170600683676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33082.96601903523,
            "unit": "ns/iter",
            "extra": "iterations: 25426\ncpu: 33082.07346810332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38223.9503197011,
            "unit": "ns/iter",
            "extra": "iterations: 21739\ncpu: 38224.61014766074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43706.12156130026,
            "unit": "ns/iter",
            "extra": "iterations: 19266\ncpu: 43706.46735181151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 580.0039198616861,
            "unit": "ns/iter",
            "extra": "iterations: 1208461\ncpu: 580.0212832685543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 448.2924957232648,
            "unit": "ns/iter",
            "extra": "iterations: 1561363\ncpu: 448.29607208573503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.7845648052621,
            "unit": "ns/iter",
            "extra": "iterations: 1559773\ncpu: 448.78203430883974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 451.0174752790075,
            "unit": "ns/iter",
            "extra": "iterations: 1552021\ncpu: 451.0254049397522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 907.9451722251208,
            "unit": "ns/iter",
            "extra": "iterations: 773203\ncpu: 907.9450028000425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2338.530896594472,
            "unit": "ns/iter",
            "extra": "iterations: 342206\ncpu: 2338.549879312435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8980.926290061017,
            "unit": "ns/iter",
            "extra": "iterations: 91236\ncpu: 8980.9537901706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9033.95113372001,
            "unit": "ns/iter",
            "extra": "iterations: 89837\ncpu: 9033.856874116456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9178.071607078751,
            "unit": "ns/iter",
            "extra": "iterations: 88832\ncpu: 9178.137382925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9651.980983544026,
            "unit": "ns/iter",
            "extra": "iterations: 84348\ncpu: 9651.899274434463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30539.67068213753,
            "unit": "ns/iter",
            "extra": "iterations: 27062\ncpu: 30539.867711181967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269543.07547171024,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 269537.5157232695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209339.350168357,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 209339.3458393472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210844.02123552133,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 210840.6129343622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208448.2790364954,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 208445.8860004765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106018.98691543401,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 106016.19820692988 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "825d4b8b89216ec0a9dcc887895418d7e677e406",
          "message": "set(CMAKE_VERBOSE_MAKEFILE OFF)",
          "timestamp": "2023-12-11T18:58:08+03:00",
          "tree_id": "455cf7a424831f799b54c049bdff16a090b6030a",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/825d4b8b89216ec0a9dcc887895418d7e677e406"
        },
        "date": 1702310542910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1719.3571519631091,
            "unit": "ns/iter",
            "extra": "iterations: 400051\ncpu: 1719.2550449817647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24928.246156165544,
            "unit": "ns/iter",
            "extra": "iterations: 33170\ncpu: 24927.34700030148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50755.92900127722,
            "unit": "ns/iter",
            "extra": "iterations: 16451\ncpu: 50753.27943590056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63322.17060062494,
            "unit": "ns/iter",
            "extra": "iterations: 13769\ncpu: 63320.40816326529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91862.58873834884,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 91856.63495724031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114735.87347420868,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 114732.23520147003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135026.40527458227,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 135020.4473376732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157604.86872166544,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 157597.73345421595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174024.25065064826,
            "unit": "ns/iter",
            "extra": "iterations: 4995\ncpu: 174012.072072072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1433.624619480558,
            "unit": "ns/iter",
            "extra": "iterations: 489791\ncpu: 1433.5522702540493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1132.6580847708456,
            "unit": "ns/iter",
            "extra": "iterations: 614433\ncpu: 1132.6523803246232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1130.3897339081,
            "unit": "ns/iter",
            "extra": "iterations: 617080\ncpu: 1130.3740195760683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1121.860837213501,
            "unit": "ns/iter",
            "extra": "iterations: 624118\ncpu: 1121.8279235657365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2256.492750964181,
            "unit": "ns/iter",
            "extra": "iterations: 310662\ncpu: 2256.3976282905537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7700.9996745646795,
            "unit": "ns/iter",
            "extra": "iterations: 110621\ncpu: 7700.222380922262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36189.5724083719,
            "unit": "ns/iter",
            "extra": "iterations: 22891\ncpu: 36187.903542877175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32878.19485716477,
            "unit": "ns/iter",
            "extra": "iterations: 25239\ncpu: 32876.861206862384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31275.2093835108,
            "unit": "ns/iter",
            "extra": "iterations: 26067\ncpu: 31275.14481911997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32647.006246046647,
            "unit": "ns/iter",
            "extra": "iterations: 25296\ncpu: 32644.805502846353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80749.55898654174,
            "unit": "ns/iter",
            "extra": "iterations: 11367\ncpu: 80738.34784903658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 795656.8219761834,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 795629.8126064723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 657663.7080000296,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657661.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 651911.8429999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651871.4999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 649251.416000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649222.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 449305.75141533226,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 449281.47195059125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 932.6147949019182,
            "unit": "ns/iter",
            "extra": "iterations: 752908\ncpu: 932.5711773550021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18806.792746230945,
            "unit": "ns/iter",
            "extra": "iterations: 44115\ncpu: 18806.161169670177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39528.42924863612,
            "unit": "ns/iter",
            "extra": "iterations: 21095\ncpu: 39526.69352927223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59391.02669868797,
            "unit": "ns/iter",
            "extra": "iterations: 14158\ncpu: 59388.28224325492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65986.60393724618,
            "unit": "ns/iter",
            "extra": "iterations: 13258\ncpu: 65983.58726806438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82297.97859557209,
            "unit": "ns/iter",
            "extra": "iterations: 10652\ncpu: 82293.20315433716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99268.94263407962,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 99264.44897035522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115353.90284580212,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 115346.9490403703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 131869.83078783585,
            "unit": "ns/iter",
            "extra": "iterations: 6613\ncpu: 131863.4659004996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 792.1453040656115,
            "unit": "ns/iter",
            "extra": "iterations: 880698\ncpu: 792.1112572073511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 647.5863746959016,
            "unit": "ns/iter",
            "extra": "iterations: 1082574\ncpu: 647.5623837261954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 645.409282711925,
            "unit": "ns/iter",
            "extra": "iterations: 1101036\ncpu: 645.4013311099762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 636.3189069815617,
            "unit": "ns/iter",
            "extra": "iterations: 1097621\ncpu: 636.2791892647831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1289.8590201394165,
            "unit": "ns/iter",
            "extra": "iterations: 544404\ncpu: 1289.8033445749859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5320.465770000169,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5320.200999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27068.55244755356,
            "unit": "ns/iter",
            "extra": "iterations: 30459\ncpu: 27067.067205095253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23051.476084042482,
            "unit": "ns/iter",
            "extra": "iterations: 35792\ncpu: 23050.374385337636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21797.16418146845,
            "unit": "ns/iter",
            "extra": "iterations: 37891\ncpu: 21795.898762238983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22819.583337919215,
            "unit": "ns/iter",
            "extra": "iterations: 36346\ncpu: 22818.508226489776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50343.26250000163,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50342.90999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 601968.9959999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601932.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 613333.5761871034,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 613320.5527994301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 611888.4130434612,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 611860.1683029456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 603562.438990181,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 603529.4530154278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 349064.5005954875,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 349051.2107979337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606736.4765241757,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 606685.8444288692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 630.8795466713567,
            "unit": "ns/iter",
            "extra": "iterations: 1111335\ncpu: 630.8456046106708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5846.604435832764,
            "unit": "ns/iter",
            "extra": "iterations: 139861\ncpu: 5846.537633793581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11338.430146046363,
            "unit": "ns/iter",
            "extra": "iterations: 72580\ncpu: 11338.170294847037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16876.966251540158,
            "unit": "ns/iter",
            "extra": "iterations: 49543\ncpu: 16876.529479442117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22192.347225916004,
            "unit": "ns/iter",
            "extra": "iterations: 37598\ncpu: 22192.286823767154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27768.25569119222,
            "unit": "ns/iter",
            "extra": "iterations: 30310\ncpu: 27767.52226987798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33638.65747875296,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 33637.32623719108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38642.34115099434,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 38642.53789798645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43987.890651437054,
            "unit": "ns/iter",
            "extra": "iterations: 18912\ncpu: 43986.69098984759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 583.142364583873,
            "unit": "ns/iter",
            "extra": "iterations: 1206817\ncpu: 583.0918855137129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 457.8028385347627,
            "unit": "ns/iter",
            "extra": "iterations: 1547559\ncpu: 457.78829757056167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.1679239745114,
            "unit": "ns/iter",
            "extra": "iterations: 1543377\ncpu: 453.1606341159669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 451.84068193738153,
            "unit": "ns/iter",
            "extra": "iterations: 1546711\ncpu: 451.832113432956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 898.0951303555233,
            "unit": "ns/iter",
            "extra": "iterations: 779215\ncpu: 898.0609972857285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2342.0988963528885,
            "unit": "ns/iter",
            "extra": "iterations: 342682\ncpu: 2341.9721491061955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8676.7360524134,
            "unit": "ns/iter",
            "extra": "iterations: 94174\ncpu: 8676.366088304547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9092.497818597212,
            "unit": "ns/iter",
            "extra": "iterations: 89392\ncpu: 9091.037229282343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9154.694664441455,
            "unit": "ns/iter",
            "extra": "iterations: 89269\ncpu: 9154.139734958508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9486.85703956828,
            "unit": "ns/iter",
            "extra": "iterations: 85751\ncpu: 9486.73951324186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30232.15628663477,
            "unit": "ns/iter",
            "extra": "iterations: 27296\ncpu: 30231.891119578035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271777.04875747504,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 271762.59830135247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210587.63278058448,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 210580.0288392235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211246.99565006627,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 211236.7085548586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208547.17832419352,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 208535.80806874964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105907.06620672374,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 105904.24836601272 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "2f550c1607320f8cf14031a2e95845f60ee8b88b",
          "message": "Upd",
          "timestamp": "2023-12-11T19:02:05+03:00",
          "tree_id": "337d408608d901b7b5b76fdd59c6fa5b12dc6c2e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2f550c1607320f8cf14031a2e95845f60ee8b88b"
        },
        "date": 1702310757031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1682.6213719349905,
            "unit": "ns/iter",
            "extra": "iterations: 423125\ncpu: 1682.4633382570166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24716.628724422284,
            "unit": "ns/iter",
            "extra": "iterations: 33428\ncpu: 24714.67033624506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50682.50390291401,
            "unit": "ns/iter",
            "extra": "iterations: 16398\ncpu: 50678.479082814985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63202.020033268425,
            "unit": "ns/iter",
            "extra": "iterations: 13827\ncpu: 63198.02560208292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91223.1834490718,
            "unit": "ns/iter",
            "extra": "iterations: 10368\ncpu: 91215.11381172834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113098.08367107014,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 113092.1950581776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134387.21344119168,
            "unit": "ns/iter",
            "extra": "iterations: 6428\ncpu: 134377.90914747978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157859.81355318177,
            "unit": "ns/iter",
            "extra": "iterations: 5519\ncpu: 157855.78909222689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174186.18055555027,
            "unit": "ns/iter",
            "extra": "iterations: 4968\ncpu: 174176.93236714977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1372.9800159004494,
            "unit": "ns/iter",
            "extra": "iterations: 506903\ncpu: 1372.9496570349754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1118.8757028513837,
            "unit": "ns/iter",
            "extra": "iterations: 626555\ncpu: 1118.8379312271072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1121.8212670733997,
            "unit": "ns/iter",
            "extra": "iterations: 624289\ncpu: 1121.8008005907514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1133.7336455188085,
            "unit": "ns/iter",
            "extra": "iterations: 616941\ncpu: 1133.7370996578281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2234.2457073828873,
            "unit": "ns/iter",
            "extra": "iterations: 312921\ncpu: 2234.200644891202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7692.37252702058,
            "unit": "ns/iter",
            "extra": "iterations: 116762\ncpu: 7692.309141672808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36039.34140892111,
            "unit": "ns/iter",
            "extra": "iterations: 22826\ncpu: 36038.56128975732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32484.49956692762,
            "unit": "ns/iter",
            "extra": "iterations: 25400\ncpu: 32484.090551181136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32023.50351367723,
            "unit": "ns/iter",
            "extra": "iterations: 26468\ncpu: 32023.20538008157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32411.67034139364,
            "unit": "ns/iter",
            "extra": "iterations: 25308\ncpu: 32410.802908171467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 78710.31180420986,
            "unit": "ns/iter",
            "extra": "iterations: 11318\ncpu: 78708.87082523428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 800137.8173321737,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 800088.5301614276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 656007.3070000384,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655974.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 654264.0740000252,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654255.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 644034.2820000069,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643990.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 447167.0178662469,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 447144.2062276671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 927.4243767823028,
            "unit": "ns/iter",
            "extra": "iterations: 749016\ncpu: 927.3235818727513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18863.76176078997,
            "unit": "ns/iter",
            "extra": "iterations: 44321\ncpu: 18862.597865571614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39692.09017248024,
            "unit": "ns/iter",
            "extra": "iterations: 21104\ncpu: 39688.32922668688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59789.701658243604,
            "unit": "ns/iter",
            "extra": "iterations: 14051\ncpu: 59783.09728844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66283.25937688688,
            "unit": "ns/iter",
            "extra": "iterations: 13224\ncpu: 66277.59376890493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83510.09514323172,
            "unit": "ns/iter",
            "extra": "iterations: 10542\ncpu: 83505.76740656423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99932.90580126393,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 99926.72027570348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116292.97372633046,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 116289.06375033317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 132190.78210590154,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 132172.51978088892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 758.4495694162953,
            "unit": "ns/iter",
            "extra": "iterations: 914108\ncpu: 758.441453307493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 616.2239403566572,
            "unit": "ns/iter",
            "extra": "iterations: 1122406\ncpu: 616.1617988499727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 609.4010099999902,
            "unit": "ns/iter",
            "extra": "iterations: 1149505\ncpu: 609.3712511037367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 613.1385116596792,
            "unit": "ns/iter",
            "extra": "iterations: 1131717\ncpu: 613.1000064503761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1276.7471258465275,
            "unit": "ns/iter",
            "extra": "iterations: 545204\ncpu: 1276.664147731864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5335.993219999864,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5335.711999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27200.25732274879,
            "unit": "ns/iter",
            "extra": "iterations: 29224\ncpu: 27197.7860662468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23016.490675695266,
            "unit": "ns/iter",
            "extra": "iterations: 35445\ncpu: 23014.975313866387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21722.775505312686,
            "unit": "ns/iter",
            "extra": "iterations: 37551\ncpu: 21720.449521983614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22645.54758620671,
            "unit": "ns/iter",
            "extra": "iterations: 34800\ncpu: 22644.298850574727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50193.888699999436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50189.41000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 597817.5059999558,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597765.5999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 610253.9338078251,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 610211.601423488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 607642.9658298567,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 607593.1659693164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 599290.6165622915,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 599244.9547668741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 341601.7467911399,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 341580.863477244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 603693.9882677878,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 603653.8992408535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 639.1309888422591,
            "unit": "ns/iter",
            "extra": "iterations: 1096727\ncpu: 639.0794609779796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5836.034769999969,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5835.784000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11237.659593086617,
            "unit": "ns/iter",
            "extra": "iterations: 73136\ncpu: 11237.527346313713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16814.596290559522,
            "unit": "ns/iter",
            "extra": "iterations: 50358\ncpu: 16813.85479963457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22288.70388011763,
            "unit": "ns/iter",
            "extra": "iterations: 37370\ncpu: 22288.442601016803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27880.679644348496,
            "unit": "ns/iter",
            "extra": "iterations: 29692\ncpu: 27879.90704566869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33203.27837438551,
            "unit": "ns/iter",
            "extra": "iterations: 25049\ncpu: 33202.894327118716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38448.55494606041,
            "unit": "ns/iter",
            "extra": "iterations: 21876\ncpu: 38448.13494240247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44212.91012585506,
            "unit": "ns/iter",
            "extra": "iterations: 19149\ncpu: 44211.90140477304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.949972206337,
            "unit": "ns/iter",
            "extra": "iterations: 1228697\ncpu: 568.9432789369529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 446.3012484291392,
            "unit": "ns/iter",
            "extra": "iterations: 1575580\ncpu: 446.2846063037095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 444.83703132422016,
            "unit": "ns/iter",
            "extra": "iterations: 1570222\ncpu: 444.8318772759538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 443.05376307123595,
            "unit": "ns/iter",
            "extra": "iterations: 1570911\ncpu: 443.033755572407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 896.7767992147459,
            "unit": "ns/iter",
            "extra": "iterations: 780396\ncpu: 896.7652320104252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2277.071687299802,
            "unit": "ns/iter",
            "extra": "iterations: 347579\ncpu: 2276.7733378598687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8862.840333161996,
            "unit": "ns/iter",
            "extra": "iterations: 93288\ncpu: 8862.629705857205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9227.026172276213,
            "unit": "ns/iter",
            "extra": "iterations: 88567\ncpu: 9226.676979010128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9282.568477645551,
            "unit": "ns/iter",
            "extra": "iterations: 88350\ncpu: 9282.448217317615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9525.368379202628,
            "unit": "ns/iter",
            "extra": "iterations: 84261\ncpu: 9525.18840270112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31082.803784449694,
            "unit": "ns/iter",
            "extra": "iterations: 26741\ncpu: 31082.01263976647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268740.865217388,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 268727.8881987598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207170.3420046019,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 207148.20198928812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208207.44518430633,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 208173.48394767914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208312.68814126303,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 208292.05440229014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105443.52669815287,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 105427.42462767905 ns\nthreads: 1"
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
          "id": "a4f22929864476e2c359efd42cd068b198aa88a8",
          "message": "Add more tests",
          "timestamp": "2023-12-12T01:57:35+03:00",
          "tree_id": "dacbda4737ce1572c6cafd7ff0a0aacf9b7c236d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a4f22929864476e2c359efd42cd068b198aa88a8"
        },
        "date": 1702335664270,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1665.6059015033463,
            "unit": "ns/iter",
            "extra": "iterations: 419588\ncpu: 1665.4975833436613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24746.41445060651,
            "unit": "ns/iter",
            "extra": "iterations: 33355\ncpu: 24744.125318542952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50366.892022562795,
            "unit": "ns/iter",
            "extra": "iterations: 16133\ncpu: 50364.29058451621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63134.538312106015,
            "unit": "ns/iter",
            "extra": "iterations: 13899\ncpu: 63130.7504136988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90982.30200764771,
            "unit": "ns/iter",
            "extra": "iterations: 10460\ncpu: 90978.63288718932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113487.9356740519,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 113479.14319402592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135048.40621583676,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 135043.26097141966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155923.62850425934,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 155912.3711340206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 173352.25707256634,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 173344.52644526426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1408.03332232914,
            "unit": "ns/iter",
            "extra": "iterations: 496784\ncpu: 1407.8810911784585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1149.503685024929,
            "unit": "ns/iter",
            "extra": "iterations: 605559\ncpu: 1149.4462141591491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1165.6113492785535,
            "unit": "ns/iter",
            "extra": "iterations: 596919\ncpu: 1165.5765690152257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1138.231338432134,
            "unit": "ns/iter",
            "extra": "iterations: 615302\ncpu: 1138.2176557202786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2245.1508882946773,
            "unit": "ns/iter",
            "extra": "iterations: 311946\ncpu: 2245.1629448686635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7535.888366745208,
            "unit": "ns/iter",
            "extra": "iterations: 109591\ncpu: 7535.246507468679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 35890.77976425289,
            "unit": "ns/iter",
            "extra": "iterations: 22821\ncpu: 35890.98199027208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32263.886597937828,
            "unit": "ns/iter",
            "extra": "iterations: 23377\ncpu: 32264.04157933008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30905.513234246624,
            "unit": "ns/iter",
            "extra": "iterations: 26711\ncpu: 30905.125229306257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32072.4304773082,
            "unit": "ns/iter",
            "extra": "iterations: 25560\ncpu: 32072.578247261248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76454.89272631991,
            "unit": "ns/iter",
            "extra": "iterations: 11466\ncpu: 76452.93912436765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 798026.4760683983,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 798011.0256410267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 658329.5240000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658314.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 656394.8749999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656374.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 645244.2270000346,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645248.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 447076.63394681155,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 447074.53987730114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 944.7869020756385,
            "unit": "ns/iter",
            "extra": "iterations: 743217\ncpu: 944.7811339084011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18702.03302447673,
            "unit": "ns/iter",
            "extra": "iterations: 44573\ncpu: 18701.453794898258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39680.55776309611,
            "unit": "ns/iter",
            "extra": "iterations: 21190\ncpu: 39680.22180273715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50026.89169999712,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50027.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65601.3743794184,
            "unit": "ns/iter",
            "extra": "iterations: 13294\ncpu: 65600.26327666608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82354.1214567283,
            "unit": "ns/iter",
            "extra": "iterations: 10654\ncpu: 82353.72629998131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98639.3755226575,
            "unit": "ns/iter",
            "extra": "iterations: 8849\ncpu: 98637.36015368951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114466.00588466048,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 114464.57434287941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 131317.7847264009,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 131317.1226698741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 776.7995205457394,
            "unit": "ns/iter",
            "extra": "iterations: 899773\ncpu: 776.7907016547532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 641.3803964239028,
            "unit": "ns/iter",
            "extra": "iterations: 1095494\ncpu: 641.3691905204412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 652.9595234760868,
            "unit": "ns/iter",
            "extra": "iterations: 1071090\ncpu: 652.962869600127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 639.4699494601277,
            "unit": "ns/iter",
            "extra": "iterations: 1095571\ncpu: 639.46526514484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1305.6566839008976,
            "unit": "ns/iter",
            "extra": "iterations: 533820\ncpu: 1305.6520924656218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5439.536929999917,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5439.568999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27081.934193165693,
            "unit": "ns/iter",
            "extra": "iterations: 30316\ncpu: 27081.521308879637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23170.572202722353,
            "unit": "ns/iter",
            "extra": "iterations: 35615\ncpu: 23170.105292713895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21775.068472096995,
            "unit": "ns/iter",
            "extra": "iterations: 37738\ncpu: 21774.487254226526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22663.886993192184,
            "unit": "ns/iter",
            "extra": "iterations: 36281\ncpu: 22663.801990022304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59277.24194464149,
            "unit": "ns/iter",
            "extra": "iterations: 14090\ncpu: 59274.96806245576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 590050.5820000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590042.5999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 612344.0541696647,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 612317.034925161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 613445.1512604987,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 613408.0532212886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 602634.2105997014,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 602607.9497907977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 343249.5827788833,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 343242.34833659313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 604752.1389271026,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 604712.7922971104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 655.0404212043844,
            "unit": "ns/iter",
            "extra": "iterations: 1054595\ncpu: 654.9833822462675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5821.768939999855,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5821.810999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11191.061077156912,
            "unit": "ns/iter",
            "extra": "iterations: 73137\ncpu: 11190.389269453157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17231.601994914414,
            "unit": "ns/iter",
            "extra": "iterations: 51130\ncpu: 17230.913358106834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22101.784992440964,
            "unit": "ns/iter",
            "extra": "iterations: 37701\ncpu: 22100.448263971688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27621.195645650634,
            "unit": "ns/iter",
            "extra": "iterations: 29993\ncpu: 27621.044910479297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33113.51756430908,
            "unit": "ns/iter",
            "extra": "iterations: 25307\ncpu: 33112.119176512475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38471.216592838486,
            "unit": "ns/iter",
            "extra": "iterations: 21672\ncpu: 38469.855112587604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43204.161577738836,
            "unit": "ns/iter",
            "extra": "iterations: 19192\ncpu: 43203.67861608984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 577.3658527945232,
            "unit": "ns/iter",
            "extra": "iterations: 1213868\ncpu: 577.3509145969736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.07466080448523,
            "unit": "ns/iter",
            "extra": "iterations: 1548001\ncpu: 451.0690884566617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.00258184264413,
            "unit": "ns/iter",
            "extra": "iterations: 1562450\ncpu: 447.98604755352034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 443.8809409918405,
            "unit": "ns/iter",
            "extra": "iterations: 1557463\ncpu: 443.8771900199208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 895.3352660782115,
            "unit": "ns/iter",
            "extra": "iterations: 785239\ncpu: 895.2996476232097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2293.5067036590685,
            "unit": "ns/iter",
            "extra": "iterations: 344215\ncpu: 2293.481690222673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8744.561890769965,
            "unit": "ns/iter",
            "extra": "iterations: 93253\ncpu: 8744.32350701855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9093.155093687912,
            "unit": "ns/iter",
            "extra": "iterations: 90887\ncpu: 9093.096922552086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9161.46470238835,
            "unit": "ns/iter",
            "extra": "iterations: 89227\ncpu: 9161.222499915913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9578.73508112798,
            "unit": "ns/iter",
            "extra": "iterations: 84373\ncpu: 9578.788237943441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30315.23814580207,
            "unit": "ns/iter",
            "extra": "iterations: 27311\ncpu: 30313.265717109873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 270841.92563539266,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 270823.78412299906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210113.84800384982,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 210106.73400673503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209962.50095739664,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 209959.5260890365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208634.58531935108,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 208627.21639656738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105382.99239497335,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 105381.60309029432 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}