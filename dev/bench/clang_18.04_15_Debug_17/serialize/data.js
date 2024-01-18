window.BENCHMARK_DATA = {
  "lastUpdate": 1705574910267,
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
        "date": 1702492220345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8471.06161688277,
            "unit": "ns/iter",
            "extra": "iterations: 82591\ncpu: 8470.724413071643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74067.4899140338,
            "unit": "ns/iter",
            "extra": "iterations: 11749\ncpu: 74063.9288450081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139331.16150654203,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 139322.48643472706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205521.2001416149,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 205511.56478640548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271205.3919471387,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 271198.6788298207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332301.2562111989,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 332282.8027950311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 395960.19274895795,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 395951.53740247816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458565.39905113494,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 458537.9019504481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 524259.71351347707,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 524234.77477477555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6248.76209868368,
            "unit": "ns/iter",
            "extra": "iterations: 116149\ncpu: 6248.311220931731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5370.5550133425695,
            "unit": "ns/iter",
            "extra": "iterations: 135658\ncpu: 5370.46543513836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5152.552148864056,
            "unit": "ns/iter",
            "extra": "iterations: 135909\ncpu: 5152.343111935191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5124.992552273005,
            "unit": "ns/iter",
            "extra": "iterations: 136686\ncpu: 5124.923547400609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8812.665626258062,
            "unit": "ns/iter",
            "extra": "iterations: 79456\ncpu: 8812.533981071276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32571.714772686195,
            "unit": "ns/iter",
            "extra": "iterations: 25229\ncpu: 32571.207737127876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125236.90234949016,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 125235.24229074895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97788.36589676178,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 97785.17558331373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97449.93969905244,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 97446.31745672591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100907.12337815802,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 100899.3394668553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270645.0149486154,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 270632.57552164426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2069333.6703785658,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2069187.3051224921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1685097.657608767,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1684984.420289851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1658073.1985688433,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1658054.025044721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1676682.68239552,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1676606.71506352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1009676.6579234776,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1009621.9672131166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1624750.4315788718,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1624692.280701754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6756575.189999694,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756559.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3779441.2307691537,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3779267.2064777263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8442386.519379763,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8441662.790697668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27907.714880686624,
            "unit": "ns/iter",
            "extra": "iterations: 29293\ncpu: 27906.05264056257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130627.78637817707,
            "unit": "ns/iter",
            "extra": "iterations: 6563\ncpu: 130620.63080908098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101312.2277251145,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 101304.76303317545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99302.1807481657,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 99296.22421629156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 108722.46271416909,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 108717.74929126118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 275709.60388164304,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 275694.05027044413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2070121.3340758407,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2070017.3719376286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1697770.17184653,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1697653.1992687415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1686385.343012752,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1686298.9110707822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1696413.463768199,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1696330.978260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1027225.8366013605,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1027174.4008714601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1645406.356883961,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1645376.0869565269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6823737.229999552,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6822854.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3859353.975206597,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3859069.008264447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28712.90974805004,
            "unit": "ns/iter",
            "extra": "iterations: 28498\ncpu: 28711.179731911023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127005.02220577875,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 126996.95040710538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100038.87033582461,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 100030.85354477602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98007.49374353241,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 98001.07909539643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99936.0835182734,
            "unit": "ns/iter",
            "extra": "iterations: 8561\ncpu: 99927.21644667671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 266581.74838909524,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 266565.234734581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2057285.717777783,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2057225.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1685621.1609401528,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1685600.3616636482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1662077.1978609737,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1662018.716577538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1670799.281081034,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670766.3063063156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1006263.8618063768,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 1006235.7997823774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1629088.0351493277,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1629068.7170474571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3179.175201310292,
            "unit": "ns/iter",
            "extra": "iterations: 219810\ncpu: 3179.088303534879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16122.846214127248,
            "unit": "ns/iter",
            "extra": "iterations: 43385\ncpu: 16122.553878068495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12508.59949581595,
            "unit": "ns/iter",
            "extra": "iterations: 55932\ncpu: 12508.308302939247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12469.611577413913,
            "unit": "ns/iter",
            "extra": "iterations: 57664\ncpu: 12469.45407880129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10268.03864543127,
            "unit": "ns/iter",
            "extra": "iterations: 68184\ncpu: 10267.70650005865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64951.63229825902,
            "unit": "ns/iter",
            "extra": "iterations: 10756\ncpu: 64949.44217181083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135701.1453206682,
            "unit": "ns/iter",
            "extra": "iterations: 5161\ncpu: 135696.82232125459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35767.85727440441,
            "unit": "ns/iter",
            "extra": "iterations: 19548\ncpu: 35767.70002046256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35334.54330271613,
            "unit": "ns/iter",
            "extra": "iterations: 19814\ncpu: 35334.41506005867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35444.0498481756,
            "unit": "ns/iter",
            "extra": "iterations: 19760\ncpu: 35442.920040486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71898.28499589388,
            "unit": "ns/iter",
            "extra": "iterations: 9744\ncpu: 71898.0090311978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63142.65759246643,
            "unit": "ns/iter",
            "extra": "iterations: 11057\ncpu: 63140.96047752497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19101.744388856754,
            "unit": "ns/iter",
            "extra": "iterations: 36579\ncpu: 19101.528199239743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93486.04790579528,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 93484.12953298561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75346.74131440866,
            "unit": "ns/iter",
            "extra": "iterations: 9297\ncpu: 75344.45520060201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75124.25225225363,
            "unit": "ns/iter",
            "extra": "iterations: 9324\ncpu: 75124.14199914187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75029.56304324305,
            "unit": "ns/iter",
            "extra": "iterations: 9319\ncpu: 75027.26687412758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141013.92586625178,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 141010.67687348995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 591794.1309121489,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 591764.7804054151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 498906.0014265621,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 498897.2895863073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 503279.9878049028,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 503266.6427546665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 499990.5882773675,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 499984.3459613961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 328135.0280636506,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 328121.04770814144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 487978.77560970536,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487966.8292682859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19024.236244374697,
            "unit": "ns/iter",
            "extra": "iterations: 36894\ncpu: 19023.21244646798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94574.39618816359,
            "unit": "ns/iter",
            "extra": "iterations: 7398\ncpu: 94573.26304406568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75086.0974540017,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 75085.9007274285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74915.89789371862,
            "unit": "ns/iter",
            "extra": "iterations: 9353\ncpu: 74912.97979257893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76259.98397471217,
            "unit": "ns/iter",
            "extra": "iterations: 9173\ncpu: 76258.48686362186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143528.74365794152,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 143524.18166939355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 592715.9236641125,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 592708.3969465651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 505510.12066474435,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 505508.30924855586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 497914.0573476957,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 497896.702508961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 498306.996446322,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 498305.47263681353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 324011.5760667949,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 324007.37476809206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 488617.96092115686,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 488601.9539427794 ns\nthreads: 1"
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
        "date": 1702503286736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8129.141139607757,
            "unit": "ns/iter",
            "extra": "iterations: 86170\ncpu: 8128.975281420448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70367.64863518949,
            "unit": "ns/iter",
            "extra": "iterations: 12053\ncpu: 70363.9011034597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134362.2104780789,
            "unit": "ns/iter",
            "extra": "iterations: 6547\ncpu: 134355.41469375286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198117.79234972902,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 198110.9517304189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262211.0695915271,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 262202.08774583973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337314.204638963,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 337289.3752338196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 384494.5042572964,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 384476.82119205286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448547.29665812344,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 448538.04627249326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 511664.3135642598,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 511636.05402231397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6050.854129519736,
            "unit": "ns/iter",
            "extra": "iterations: 115534\ncpu: 6050.868142711249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5205.7973221531865,
            "unit": "ns/iter",
            "extra": "iterations: 134287\ncpu: 5205.588776277676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5133.886871763504,
            "unit": "ns/iter",
            "extra": "iterations: 136553\ncpu: 5133.433904784221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5203.843674006574,
            "unit": "ns/iter",
            "extra": "iterations: 134469\ncpu: 5203.795670377568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8697.936221569349,
            "unit": "ns/iter",
            "extra": "iterations: 80372\ncpu: 8697.501617478727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31499.915207443853,
            "unit": "ns/iter",
            "extra": "iterations: 26441\ncpu: 31497.908551113836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 122246.36537912075,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 122242.40343347652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100037.70286717653,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 100030.80163838489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102618.30065986975,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102613.00539892029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101345.58237684431,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 101339.14395026301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 272979.97467553924,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 272970.4020259573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2034111.655097615,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2033932.754880697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1660170.9466191933,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1660084.5195729479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1698961.6885245906,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1698936.9763205836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1680836.4168157096,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1680736.6726296977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1031456.5055554997,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 1031401.2222222225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1633829.5140843845,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1633734.6830985912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6882495.759999756,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6881685.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3876424.7551866467,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3876237.34439834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8576508.718749488,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8576326.562499987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29515.259476060502,
            "unit": "ns/iter",
            "extra": "iterations: 27675\ncpu: 29513.92231255645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126879.21566013979,
            "unit": "ns/iter",
            "extra": "iterations: 6756\ncpu: 126876.56897572562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100875.00248109268,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100867.89933837428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99831.45552687814,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 99826.29664398017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104867.88685952763,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 104862.63790144605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278396.4756687352,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 278380.63164679456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2038221.5252748912,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2038120.6593406622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1695032.3273057512,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1694913.5623869803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1737326.7705223658,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1737216.977611934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1706223.1627058072,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1706153.1992687404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1031051.1177777294,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 1030985.888888883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1653228.2836881175,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653142.37588652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6916364.830000248,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6915709.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3921590.1416667975,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3921429.583333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32645.046577609115,
            "unit": "ns/iter",
            "extra": "iterations: 25377\ncpu: 32643.05867517836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133587.96152648577,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 133581.5887850462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101655.23371373676,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 101648.4308131242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101241.69066540695,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 101237.50444787137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102018.94003358632,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 102016.67066442849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272601.96839443437,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 272591.9405815428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2024971.6892778205,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2024956.2363238465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1685683.167869928,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1685634.8375451302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1717912.4742646515,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1717861.0294117641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1700596.6245421036,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1700497.2527472537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1022224.6817679234,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1022206.0773480688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1652880.7234043458,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1652779.2553191462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3041.968048717881,
            "unit": "ns/iter",
            "extra": "iterations: 228911\ncpu: 3041.74067650747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15577.333741374428,
            "unit": "ns/iter",
            "extra": "iterations: 44930\ncpu: 15577.217894502603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12158.061798046341,
            "unit": "ns/iter",
            "extra": "iterations: 57429\ncpu: 12157.833150498884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11966.210663576105,
            "unit": "ns/iter",
            "extra": "iterations: 58667\ncpu: 11965.716672064453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9944.857927908728,
            "unit": "ns/iter",
            "extra": "iterations: 70605\ncpu: 9944.14134976279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63875.53203494534,
            "unit": "ns/iter",
            "extra": "iterations: 10988\ncpu: 63872.43356388765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133655.60855451954,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133649.8758831393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35663.21005194283,
            "unit": "ns/iter",
            "extra": "iterations: 19638\ncpu: 35660.42876056625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35597.55018814076,
            "unit": "ns/iter",
            "extra": "iterations: 19666\ncpu: 35594.88965727665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35552.24502405785,
            "unit": "ns/iter",
            "extra": "iterations: 19745\ncpu: 35550.43808559152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72384.01732844894,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 72378.25527279908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63253.4112233812,
            "unit": "ns/iter",
            "extra": "iterations: 11084\ncpu: 63251.47961024879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19784.281794314807,
            "unit": "ns/iter",
            "extra": "iterations: 35423\ncpu: 19783.9482821894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91556.92566948784,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 91550.0457217503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73811.69367088225,
            "unit": "ns/iter",
            "extra": "iterations: 9480\ncpu: 73807.18354430456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75073.0673614116,
            "unit": "ns/iter",
            "extra": "iterations: 9308\ncpu: 75067.76966050785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74868.61553273638,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 74867.9396662389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139181.44568022166,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 139180.13902681242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 577641.2520592946,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 577598.1054365719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 495303.38472416496,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495293.77652051154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506394.3285094523,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 506351.5918958038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 499678.60984307935,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 499661.198288159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 328914.7534053657,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 328897.5575387506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 486767.1269951912,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 486727.27272727364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19456.882732994934,
            "unit": "ns/iter",
            "extra": "iterations: 36063\ncpu: 19455.860577322866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91420.84245076551,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 91418.71540738897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73556.8499475308,
            "unit": "ns/iter",
            "extra": "iterations: 9530\ncpu: 73549.48583420654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75491.59416845895,
            "unit": "ns/iter",
            "extra": "iterations: 9260\ncpu: 75485.90712743127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75338.84861544239,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75333.1429802817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140425.48598318675,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 140417.22066479735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 578980.392739289,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 578974.5874587378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 497798.6302342278,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 497753.51312988205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 503029.23962804,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 503008.7982832654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 491489.50703231076,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 491477.0042194086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 329179.7630711112,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 329171.6910032959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 486011.4622837576,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 485987.1972318358 ns\nthreads: 1"
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
        "date": 1705574909665,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8293.67634328211,
            "unit": "ns/iter",
            "extra": "iterations: 84327\ncpu: 8293.284475909259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72736.9026805497,
            "unit": "ns/iter",
            "extra": "iterations: 11714\ncpu: 72736.08502646406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138379.65550619437,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 138378.43541732786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203361.21021933726,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 203360.07932804478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270085.965612094,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 270069.1196698762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329709.2034417158,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 329694.531548757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394100.48178506433,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 394076.63934426266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458938.5345646029,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 458926.4907651718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 522368.7783783263,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 522337.5375375379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6277.643346361673,
            "unit": "ns/iter",
            "extra": "iterations: 111548\ncpu: 6277.3657976835075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5371.156931463703,
            "unit": "ns/iter",
            "extra": "iterations: 130968\ncpu: 5371.0608698308015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5294.240317579952,
            "unit": "ns/iter",
            "extra": "iterations: 132250\ncpu: 5293.997731568995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5281.74006816394,
            "unit": "ns/iter",
            "extra": "iterations: 132327\ncpu: 5281.446719112506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8956.848771194724,
            "unit": "ns/iter",
            "extra": "iterations: 78735\ncpu: 8956.471708896945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31200.35673069438,
            "unit": "ns/iter",
            "extra": "iterations: 26342\ncpu: 31199.358438994743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126133.58219278473,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 126128.96247240623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101217.90704825456,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 101213.50520340611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104574.72452093028,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104570.62126205294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102540.93649460586,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 102535.11404561836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270687.57898028655,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 270674.88270253356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2141755.372685305,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2141642.5925925914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1748198.1113208367,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748105.4716981114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1793565.423077089,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1793499.2307692354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1759825.778828121,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759762.948960305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1062983.8105022076,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1062934.4748858481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1718368.645756351,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1718297.6014760146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6984469.269999635,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6983993.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4023979.4188032183,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4023797.4358974365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8704184.6904759,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8703670.63492064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30638.925805377785,
            "unit": "ns/iter",
            "extra": "iterations: 27037\ncpu: 30637.204571513106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130183.9483389214,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 130179.25937214265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104080.86740667722,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 104079.32422542102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103485.13900692515,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 103483.34345028509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109015.79525752143,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 109014.22743498173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281433.5854533807,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 281423.907371168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2157462.085648113,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2157432.6388888927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1760396.7277882767,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1760356.3327032195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1813642.7879377163,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1813626.4591439664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1775058.7896750837,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1775002.6768642506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1052805.8878822357,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1052799.4337485854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1726297.4545455647,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1726263.8218923965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7004532.380000228,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7004556.00000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3916942.5042014876,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3916797.8991596573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29959.404390778338,
            "unit": "ns/iter",
            "extra": "iterations: 27330\ncpu: 29958.94987193545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127552.193567604,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 127549.00238236987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102419.58498684045,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 102419.9019842217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103958.0911632461,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 103954.52777440158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102344.34406413775,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 102338.05648635759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 268582.0437752194,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 268571.623719342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2132014.4050342175,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2131940.9610983846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1758237.1134215298,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1758150.8506616203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800404.108108132,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1800324.3243243173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1768348.5657142315,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768283.0476190606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1039431.0100896199,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1039388.5650224241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1724852.4658039825,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1724792.6062846514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3073.7563248244987,
            "unit": "ns/iter",
            "extra": "iterations: 227951\ncpu: 3073.5434369667055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15695.306918269407,
            "unit": "ns/iter",
            "extra": "iterations: 44621\ncpu: 15694.531722731479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12477.826547027344,
            "unit": "ns/iter",
            "extra": "iterations: 55946\ncpu: 12477.23519107706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12963.114313231585,
            "unit": "ns/iter",
            "extra": "iterations: 53992\ncpu: 12962.516669136197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10402.477087191075,
            "unit": "ns/iter",
            "extra": "iterations: 67495\ncpu: 10402.277205718941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63297.16615412369,
            "unit": "ns/iter",
            "extra": "iterations: 11056\ncpu: 63296.0202604919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141098.772305207,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 141091.44125958887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37175.303281301516,
            "unit": "ns/iter",
            "extra": "iterations: 18834\ncpu: 37174.62036742056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37260.96681380927,
            "unit": "ns/iter",
            "extra": "iterations: 18803\ncpu: 37259.931925756806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37231.90892657271,
            "unit": "ns/iter",
            "extra": "iterations: 18809\ncpu: 37231.68695837125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73676.94701916754,
            "unit": "ns/iter",
            "extra": "iterations: 9494\ncpu: 73675.92163471655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66269.47080498919,
            "unit": "ns/iter",
            "extra": "iterations: 10584\ncpu: 66266.2131519273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20371.836686425042,
            "unit": "ns/iter",
            "extra": "iterations: 34247\ncpu: 20371.518673168343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96894.88720655082,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 96894.19363800493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77622.24088888717,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 77617.99999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79109.16591473385,
            "unit": "ns/iter",
            "extra": "iterations: 8866\ncpu: 79109.44055944066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79205.372247943,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 79202.06616235778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142292.1675116578,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 142291.1782599879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 608002.7062391334,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 607994.8873483523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 519241.70740743715,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 519233.8518518501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 524657.8095594114,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 524654.1448842455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 519697.7979197844,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 519674.517087674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334958.0508393483,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 334953.0935251847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506065.17991331196,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 506056.0693641619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19672.021733024943,
            "unit": "ns/iter",
            "extra": "iterations: 35614\ncpu: 19671.89026787208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98132.93230769881,
            "unit": "ns/iter",
            "extra": "iterations: 7150\ncpu: 98133.2447552443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77986.8717463857,
            "unit": "ns/iter",
            "extra": "iterations: 8990\ncpu: 77984.84983314706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79275.62751072191,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 79274.96050552775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79486.58379856609,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 79484.53913637923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144259.2064635526,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 144258.00741045846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610366.3654514572,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 610368.1423611137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 521454.5066666721,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 521437.25925925875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 522159.903129668,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 522156.4828613988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 518772.91851850617,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518740.074074081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337502.9512783318,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 337486.73420163663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 509259.66230936925,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 509240.450254179 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}