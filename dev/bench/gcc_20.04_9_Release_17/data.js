window.BENCHMARK_DATA = {
  "lastUpdate": 1702085594812,
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
      }
    ]
  }
}