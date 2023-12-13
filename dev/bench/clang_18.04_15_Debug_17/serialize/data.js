window.BENCHMARK_DATA = {
  "lastUpdate": 1702489609785,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489606271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8311.75416306143,
            "unit": "ns/iter",
            "extra": "iterations: 84373\ncpu: 8311.565311177746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70553.88389078333,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 70552.1703045896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134696.83138099767,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 134696.67077681873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198475.6273885286,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 198474.09008189256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 261577.81551931574,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261580.34420289844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321663.8974167221,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 321662.63571695995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387028.6709363905,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 387010.42402826867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448721.1464672101,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448715.57503868017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513625.73474176513,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 513613.0281690145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6133.740142929373,
            "unit": "ns/iter",
            "extra": "iterations: 114182\ncpu: 6133.539437039114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5211.778836483521,
            "unit": "ns/iter",
            "extra": "iterations: 134231\ncpu: 5211.739464058225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5166.327415312898,
            "unit": "ns/iter",
            "extra": "iterations: 135293\ncpu: 5166.2879823789835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5165.250544838344,
            "unit": "ns/iter",
            "extra": "iterations: 135820\ncpu: 5165.158297747016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8751.410143260577,
            "unit": "ns/iter",
            "extra": "iterations: 79994\ncpu: 8751.22884216316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30606.29626761338,
            "unit": "ns/iter",
            "extra": "iterations: 27114\ncpu: 30605.277716308887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127389.85396777798,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 127383.5322195706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99441.8601869194,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 99437.55763239888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101791.37764818128,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 101788.30040466522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100392.5768686548,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 100388.67012497077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 293500.4960764185,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293500.06823609676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2049730.5663716018,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2049646.9026548686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1672617.1330936057,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1672599.6402877704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1691341.504537205,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691243.9201451892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1675123.4954627727,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1675084.210526312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1020512.2676212182,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1020506.1674008835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1639618.1760563557,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1639576.232394366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6747396.060000028,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6746909.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3910552.5833330527,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910453.750000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8435786.807692345,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8435449.230769238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31334.19762920883,
            "unit": "ns/iter",
            "extra": "iterations: 26236\ncpu: 31332.322000304957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135817.4563460735,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 135809.30122009193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104620.01456547715,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 104615.91187270494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106593.04060151012,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 106588.49624060138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104783.24981559231,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 104780.23112859602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 303792.97500000003,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 303776.1267605642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2049318.8807947682,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2049278.8079470252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1688539.3702359463,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688485.480943734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1703501.6952554774,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1703477.9197080294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1689141.1639344802,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1689047.5409836082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1016110.4190372038,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1016066.3019693698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1653884.989399302,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1653871.7314487672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6796291.819999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6796244.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3816871.387755095,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3816786.1224489943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28468.11174656019,
            "unit": "ns/iter",
            "extra": "iterations: 28851\ncpu: 28467.401476551815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125024.65228203432,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 125019.57284961891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100450.20162526002,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 100448.45130137757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101406.91467900133,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101400.52213124468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99779.41992507484,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 99775.89557480719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 288266.19786808913,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288252.46502331883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2038873.1644738044,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2038777.1929824501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1679949.801801773,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679851.1711711753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1704492.1261426504,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1704465.4478976335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1700940.0288808197,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1700880.505415167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1010599.7832244091,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1010543.8997821364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1646514.676106128,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646465.3097345121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3068.461695778913,
            "unit": "ns/iter",
            "extra": "iterations: 226881\ncpu: 3068.315548679707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15974.208678014616,
            "unit": "ns/iter",
            "extra": "iterations: 43881\ncpu: 15973.681092044426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12429.888630513793,
            "unit": "ns/iter",
            "extra": "iterations: 56335\ncpu: 12429.216295375898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12779.173751635974,
            "unit": "ns/iter",
            "extra": "iterations: 54952\ncpu: 12778.641359732163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10329.352419792627,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 10329.28782814831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68219.42326033862,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68214.63746958601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129081.93595422844,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129075.28608342471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35662.35541063562,
            "unit": "ns/iter",
            "extra": "iterations: 19628\ncpu: 35659.49663745683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35806.04264042969,
            "unit": "ns/iter",
            "extra": "iterations: 19512\ncpu: 35804.69967199704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35490.092600098564,
            "unit": "ns/iter",
            "extra": "iterations: 19730\ncpu: 35489.61986822102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71673.59025344053,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 71670.77065732454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63235.032115474336,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 63231.19530897602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19336.822712237827,
            "unit": "ns/iter",
            "extra": "iterations: 36280\ncpu: 19336.174200661597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92023.23543339391,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92021.99131921571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74781.20070384459,
            "unit": "ns/iter",
            "extra": "iterations: 9377\ncpu: 74779.17244321218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74267.78086974895,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 74265.00899375734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74214.47214231866,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 74209.06572920021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141133.4884142593,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 141128.22889381446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 580270.5301901872,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 580258.4780810579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493245.5438596375,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 493225.7543859614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494076.86953463266,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 494034.2031029637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 491676.7089761963,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491674.61430575827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324224.63918479456,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324208.29087540857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481153.0308854173,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481137.6115305464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19052.877146666233,
            "unit": "ns/iter",
            "extra": "iterations: 36743\ncpu: 19052.548784802355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91550.87932611218,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 91549.37965260597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74913.32365544951,
            "unit": "ns/iter",
            "extra": "iterations: 9334\ncpu: 74909.35290336411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73475.74423217634,
            "unit": "ns/iter",
            "extra": "iterations: 9579\ncpu: 73473.24355360573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74533.68336353709,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 74531.2693168499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141882.70697674298,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141879.71688574314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 581487.926910372,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 581482.1428571504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493255.45460942714,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493229.3455313205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 490809.0919298047,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490781.9649122801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 488432.10202650446,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488418.02935009665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324148.9112344166,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 324143.4119278781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495711.4468814355,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 495698.83481836505 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489606271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8311.75416306143,
            "unit": "ns/iter",
            "extra": "iterations: 84373\ncpu: 8311.565311177746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70553.88389078333,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 70552.1703045896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134696.83138099767,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 134696.67077681873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198475.6273885286,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 198474.09008189256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 261577.81551931574,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261580.34420289844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321663.8974167221,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 321662.63571695995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387028.6709363905,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 387010.42402826867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448721.1464672101,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448715.57503868017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513625.73474176513,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 513613.0281690145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6133.740142929373,
            "unit": "ns/iter",
            "extra": "iterations: 114182\ncpu: 6133.539437039114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5211.778836483521,
            "unit": "ns/iter",
            "extra": "iterations: 134231\ncpu: 5211.739464058225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5166.327415312898,
            "unit": "ns/iter",
            "extra": "iterations: 135293\ncpu: 5166.2879823789835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5165.250544838344,
            "unit": "ns/iter",
            "extra": "iterations: 135820\ncpu: 5165.158297747016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8751.410143260577,
            "unit": "ns/iter",
            "extra": "iterations: 79994\ncpu: 8751.22884216316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30606.29626761338,
            "unit": "ns/iter",
            "extra": "iterations: 27114\ncpu: 30605.277716308887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127389.85396777798,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 127383.5322195706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99441.8601869194,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 99437.55763239888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101791.37764818128,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 101788.30040466522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100392.5768686548,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 100388.67012497077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 293500.4960764185,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293500.06823609676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2049730.5663716018,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2049646.9026548686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1672617.1330936057,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1672599.6402877704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1691341.504537205,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691243.9201451892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1675123.4954627727,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1675084.210526312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1020512.2676212182,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1020506.1674008835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1639618.1760563557,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1639576.232394366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6747396.060000028,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6746909.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3910552.5833330527,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910453.750000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8435786.807692345,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8435449.230769238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31334.19762920883,
            "unit": "ns/iter",
            "extra": "iterations: 26236\ncpu: 31332.322000304957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135817.4563460735,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 135809.30122009193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104620.01456547715,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 104615.91187270494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106593.04060151012,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 106588.49624060138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104783.24981559231,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 104780.23112859602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 303792.97500000003,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 303776.1267605642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2049318.8807947682,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2049278.8079470252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1688539.3702359463,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688485.480943734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1703501.6952554774,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1703477.9197080294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1689141.1639344802,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1689047.5409836082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1016110.4190372038,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1016066.3019693698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1653884.989399302,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1653871.7314487672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6796291.819999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6796244.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3816871.387755095,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3816786.1224489943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28468.11174656019,
            "unit": "ns/iter",
            "extra": "iterations: 28851\ncpu: 28467.401476551815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125024.65228203432,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 125019.57284961891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100450.20162526002,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 100448.45130137757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101406.91467900133,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101400.52213124468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99779.41992507484,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 99775.89557480719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 288266.19786808913,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288252.46502331883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2038873.1644738044,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2038777.1929824501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1679949.801801773,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679851.1711711753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1704492.1261426504,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1704465.4478976335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1700940.0288808197,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1700880.505415167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1010599.7832244091,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1010543.8997821364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1646514.676106128,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646465.3097345121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3068.461695778913,
            "unit": "ns/iter",
            "extra": "iterations: 226881\ncpu: 3068.315548679707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15974.208678014616,
            "unit": "ns/iter",
            "extra": "iterations: 43881\ncpu: 15973.681092044426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12429.888630513793,
            "unit": "ns/iter",
            "extra": "iterations: 56335\ncpu: 12429.216295375898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12779.173751635974,
            "unit": "ns/iter",
            "extra": "iterations: 54952\ncpu: 12778.641359732163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10329.352419792627,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 10329.28782814831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68219.42326033862,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68214.63746958601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129081.93595422844,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129075.28608342471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35662.35541063562,
            "unit": "ns/iter",
            "extra": "iterations: 19628\ncpu: 35659.49663745683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35806.04264042969,
            "unit": "ns/iter",
            "extra": "iterations: 19512\ncpu: 35804.69967199704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35490.092600098564,
            "unit": "ns/iter",
            "extra": "iterations: 19730\ncpu: 35489.61986822102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71673.59025344053,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 71670.77065732454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63235.032115474336,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 63231.19530897602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19336.822712237827,
            "unit": "ns/iter",
            "extra": "iterations: 36280\ncpu: 19336.174200661597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92023.23543339391,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92021.99131921571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74781.20070384459,
            "unit": "ns/iter",
            "extra": "iterations: 9377\ncpu: 74779.17244321218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74267.78086974895,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 74265.00899375734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74214.47214231866,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 74209.06572920021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141133.4884142593,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 141128.22889381446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 580270.5301901872,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 580258.4780810579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493245.5438596375,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 493225.7543859614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494076.86953463266,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 494034.2031029637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 491676.7089761963,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491674.61430575827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324224.63918479456,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324208.29087540857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481153.0308854173,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481137.6115305464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19052.877146666233,
            "unit": "ns/iter",
            "extra": "iterations: 36743\ncpu: 19052.548784802355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91550.87932611218,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 91549.37965260597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74913.32365544951,
            "unit": "ns/iter",
            "extra": "iterations: 9334\ncpu: 74909.35290336411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73475.74423217634,
            "unit": "ns/iter",
            "extra": "iterations: 9579\ncpu: 73473.24355360573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74533.68336353709,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 74531.2693168499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141882.70697674298,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141879.71688574314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 581487.926910372,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 581482.1428571504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493255.45460942714,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493229.3455313205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 490809.0919298047,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490781.9649122801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 488432.10202650446,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488418.02935009665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324148.9112344166,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 324143.4119278781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495711.4468814355,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 495698.83481836505 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489606271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8311.75416306143,
            "unit": "ns/iter",
            "extra": "iterations: 84373\ncpu: 8311.565311177746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70553.88389078333,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 70552.1703045896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134696.83138099767,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 134696.67077681873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198475.6273885286,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 198474.09008189256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 261577.81551931574,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261580.34420289844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321663.8974167221,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 321662.63571695995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387028.6709363905,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 387010.42402826867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448721.1464672101,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448715.57503868017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513625.73474176513,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 513613.0281690145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6133.740142929373,
            "unit": "ns/iter",
            "extra": "iterations: 114182\ncpu: 6133.539437039114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5211.778836483521,
            "unit": "ns/iter",
            "extra": "iterations: 134231\ncpu: 5211.739464058225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5166.327415312898,
            "unit": "ns/iter",
            "extra": "iterations: 135293\ncpu: 5166.2879823789835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5165.250544838344,
            "unit": "ns/iter",
            "extra": "iterations: 135820\ncpu: 5165.158297747016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8751.410143260577,
            "unit": "ns/iter",
            "extra": "iterations: 79994\ncpu: 8751.22884216316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30606.29626761338,
            "unit": "ns/iter",
            "extra": "iterations: 27114\ncpu: 30605.277716308887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127389.85396777798,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 127383.5322195706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99441.8601869194,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 99437.55763239888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101791.37764818128,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 101788.30040466522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100392.5768686548,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 100388.67012497077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 293500.4960764185,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293500.06823609676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2049730.5663716018,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2049646.9026548686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1672617.1330936057,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1672599.6402877704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1691341.504537205,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691243.9201451892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1675123.4954627727,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1675084.210526312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1020512.2676212182,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1020506.1674008835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1639618.1760563557,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1639576.232394366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6747396.060000028,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6746909.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3910552.5833330527,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910453.750000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8435786.807692345,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8435449.230769238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31334.19762920883,
            "unit": "ns/iter",
            "extra": "iterations: 26236\ncpu: 31332.322000304957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135817.4563460735,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 135809.30122009193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104620.01456547715,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 104615.91187270494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106593.04060151012,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 106588.49624060138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104783.24981559231,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 104780.23112859602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 303792.97500000003,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 303776.1267605642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2049318.8807947682,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2049278.8079470252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1688539.3702359463,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688485.480943734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1703501.6952554774,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1703477.9197080294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1689141.1639344802,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1689047.5409836082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1016110.4190372038,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1016066.3019693698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1653884.989399302,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1653871.7314487672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6796291.819999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6796244.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3816871.387755095,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3816786.1224489943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28468.11174656019,
            "unit": "ns/iter",
            "extra": "iterations: 28851\ncpu: 28467.401476551815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125024.65228203432,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 125019.57284961891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100450.20162526002,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 100448.45130137757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101406.91467900133,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101400.52213124468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99779.41992507484,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 99775.89557480719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 288266.19786808913,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288252.46502331883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2038873.1644738044,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2038777.1929824501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1679949.801801773,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679851.1711711753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1704492.1261426504,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1704465.4478976335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1700940.0288808197,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1700880.505415167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1010599.7832244091,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1010543.8997821364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1646514.676106128,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646465.3097345121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3068.461695778913,
            "unit": "ns/iter",
            "extra": "iterations: 226881\ncpu: 3068.315548679707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15974.208678014616,
            "unit": "ns/iter",
            "extra": "iterations: 43881\ncpu: 15973.681092044426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12429.888630513793,
            "unit": "ns/iter",
            "extra": "iterations: 56335\ncpu: 12429.216295375898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12779.173751635974,
            "unit": "ns/iter",
            "extra": "iterations: 54952\ncpu: 12778.641359732163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10329.352419792627,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 10329.28782814831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68219.42326033862,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68214.63746958601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129081.93595422844,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129075.28608342471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35662.35541063562,
            "unit": "ns/iter",
            "extra": "iterations: 19628\ncpu: 35659.49663745683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35806.04264042969,
            "unit": "ns/iter",
            "extra": "iterations: 19512\ncpu: 35804.69967199704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35490.092600098564,
            "unit": "ns/iter",
            "extra": "iterations: 19730\ncpu: 35489.61986822102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71673.59025344053,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 71670.77065732454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63235.032115474336,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 63231.19530897602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19336.822712237827,
            "unit": "ns/iter",
            "extra": "iterations: 36280\ncpu: 19336.174200661597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92023.23543339391,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92021.99131921571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74781.20070384459,
            "unit": "ns/iter",
            "extra": "iterations: 9377\ncpu: 74779.17244321218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74267.78086974895,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 74265.00899375734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74214.47214231866,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 74209.06572920021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141133.4884142593,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 141128.22889381446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 580270.5301901872,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 580258.4780810579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493245.5438596375,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 493225.7543859614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494076.86953463266,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 494034.2031029637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 491676.7089761963,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491674.61430575827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324224.63918479456,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324208.29087540857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481153.0308854173,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481137.6115305464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19052.877146666233,
            "unit": "ns/iter",
            "extra": "iterations: 36743\ncpu: 19052.548784802355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91550.87932611218,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 91549.37965260597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74913.32365544951,
            "unit": "ns/iter",
            "extra": "iterations: 9334\ncpu: 74909.35290336411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73475.74423217634,
            "unit": "ns/iter",
            "extra": "iterations: 9579\ncpu: 73473.24355360573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74533.68336353709,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 74531.2693168499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141882.70697674298,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141879.71688574314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 581487.926910372,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 581482.1428571504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493255.45460942714,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493229.3455313205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 490809.0919298047,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490781.9649122801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 488432.10202650446,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488418.02935009665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324148.9112344166,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 324143.4119278781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495711.4468814355,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 495698.83481836505 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}