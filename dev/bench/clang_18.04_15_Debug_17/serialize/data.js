window.BENCHMARK_DATA = {
  "lastUpdate": 1705962759789,
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772742449,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8290.414359144259,
            "unit": "ns/iter",
            "extra": "iterations: 84434\ncpu: 8290.44342326551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70321.11434511872,
            "unit": "ns/iter",
            "extra": "iterations: 12025\ncpu: 70321.1392931393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133560.14066809256,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 133557.53907447134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195877.52501126836,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 195877.827850383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258758.14891076184,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 258759.1763652641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317002.26810671407,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 316999.19525624736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 382405.8781019072,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 382399.3034392683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 438991.757207862,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 438978.4016186142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 499726.47528738104,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 499701.26436781604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6071.146080698038,
            "unit": "ns/iter",
            "extra": "iterations: 115046\ncpu: 6070.930758131522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5180.936082184322,
            "unit": "ns/iter",
            "extra": "iterations: 135111\ncpu: 5180.752122329043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5143.666865319842,
            "unit": "ns/iter",
            "extra": "iterations: 135915\ncpu: 5143.73321561271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5185.996528576136,
            "unit": "ns/iter",
            "extra": "iterations: 134815\ncpu: 5185.9956236323815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8829.178804690626,
            "unit": "ns/iter",
            "extra": "iterations: 79310\ncpu: 8828.87025595763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30695.18757467079,
            "unit": "ns/iter",
            "extra": "iterations: 26784\ncpu: 30693.914277180374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127358.62485102228,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 127355.7806912993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101241.96294103183,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 101238.29031494213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101563.28408143515,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 101560.56673413506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102282.8434876578,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 102278.93979371572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283320.48730469093,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 283309.1145833325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2016269.262473026,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2016239.2624728864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1640297.2869718643,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1640291.5492957775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1674104.8285198812,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1674079.7833935008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1688585.3794964314,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1688562.769784177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1018785.059668592,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1018781.3259668493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1616174.8958332113,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1616177.2569444436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6816734.989999985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6816651.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3884207.730290628,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3884182.5726140994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8474050.96153842,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8473555.384615384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30424.328600483834,
            "unit": "ns/iter",
            "extra": "iterations: 27045\ncpu: 30424.204104270735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128511.95110976785,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 128511.0077984405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102774.82687214029,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 102774.51240067439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101934.6735961634,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 101934.12186379962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101941.23851441142,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 101940.15434703947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287051.57646674104,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 287050.4284772576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2015878.936819177,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2015884.7494553279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1670700.342857044,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1670703.0357142827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1700783.0457038288,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1700778.244972573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1690981.5253623151,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1690979.7101449282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1020422.8524229027,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1020415.6387665129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1631859.9859894775,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1631861.471103336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6903078.179999512,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6902958.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3924212.016666691,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3924006.249999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32385.40934983323,
            "unit": "ns/iter",
            "extra": "iterations: 25455\ncpu: 32383.979571793465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135811.31297468263,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 135806.8512658237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102532.48111738119,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 102528.65363865289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100078.61887456193,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 100072.86049238016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101732.28332741234,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 101727.46770944416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 280013.3079150659,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 280004.3436293426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2004009.6516130914,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2003874.6236559167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1655408.9429590008,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1655359.3582887764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1683046.9117117852,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1682988.8288288207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1671499.2751797321,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1671444.6043165447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1020956.028058445,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1020908.3052749786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1623372.4083769668,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1623322.6876090814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3082.1910700419185,
            "unit": "ns/iter",
            "extra": "iterations: 226608\ncpu: 3082.2323130692694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16096.322056087649,
            "unit": "ns/iter",
            "extra": "iterations: 43539\ncpu: 16096.332024162257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12238.762989623097,
            "unit": "ns/iter",
            "extra": "iterations: 57238\ncpu: 12238.21412348437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11948.062033978451,
            "unit": "ns/iter",
            "extra": "iterations: 58742\ncpu: 11947.567328317082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10310.851543647508,
            "unit": "ns/iter",
            "extra": "iterations: 68377\ncpu: 10310.32803428055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66102.49119171353,
            "unit": "ns/iter",
            "extra": "iterations: 10615\ncpu: 66099.15214319345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133505.6846829569,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 133504.6027501913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35731.50642173637,
            "unit": "ns/iter",
            "extra": "iterations: 19543\ncpu: 35731.45883436535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36073.75186730224,
            "unit": "ns/iter",
            "extra": "iterations: 19413\ncpu: 36072.10116931941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35783.37954673051,
            "unit": "ns/iter",
            "extra": "iterations: 19547\ncpu: 35782.41162326679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72359.07098573683,
            "unit": "ns/iter",
            "extra": "iterations: 9678\ncpu: 72360.0227319689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63347.02524341543,
            "unit": "ns/iter",
            "extra": "iterations: 11092\ncpu: 63346.375766318735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19084.902638241318,
            "unit": "ns/iter",
            "extra": "iterations: 36729\ncpu: 19084.222276675035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91654.7764889806,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 91648.66414700952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73206.14614583812,
            "unit": "ns/iter",
            "extra": "iterations: 9600\ncpu: 73202.97916666589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74613.60551827561,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 74611.42004900325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74356.6197662122,
            "unit": "ns/iter",
            "extra": "iterations: 9410\ncpu: 74355.96174282671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142814.95775509605,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 142807.44897959317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 573222.041632608,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 573200.1632653042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 489004.3516331077,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 488985.2675469033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 498623.0362473979,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 498622.5302061134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 494015.8045166013,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 493989.69654199557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 327460.9418875041,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 327449.93026499357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 481250.11942345183,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481227.5909402955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18844.696703888392,
            "unit": "ns/iter",
            "extra": "iterations: 37165\ncpu: 18844.229786089276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92052.43171690643,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 92047.32634338218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72825.96024496287,
            "unit": "ns/iter",
            "extra": "iterations: 9634\ncpu: 72826.81129333543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74389.6145789207,
            "unit": "ns/iter",
            "extra": "iterations: 9452\ncpu: 74389.72704189591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74439.14111016964,
            "unit": "ns/iter",
            "extra": "iterations: 9404\ncpu: 74436.16546150546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144525.64119463027,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 144518.06385169894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 576458.2616898749,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 576423.4618539761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 489337.40195394866,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 489317.72505233943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 499019.16904417035,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 498997.3609129822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 491737.36655058793,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 491743.48432056204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 325177.6482341705,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 325175.7434944225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 481625.23956194904,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 481625.8726899303 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774143800,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8501.50997240962,
            "unit": "ns/iter",
            "extra": "iterations: 82277\ncpu: 8500.551794547688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71757.99881436219,
            "unit": "ns/iter",
            "extra": "iterations: 11808\ncpu: 71754.19207317074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137023.7867670183,
            "unit": "ns/iter",
            "extra": "iterations: 6378\ncpu: 137014.92630918784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202394.31544715178,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 202385.76074332173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268246.9411583745,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 268230.0677757239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 330002.7581699288,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 329989.15801614744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 395395.02495461603,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 395364.92740471865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458726.0052826065,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 458708.557844691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536095.5050989869,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 536069.5260947812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6051.536955038817,
            "unit": "ns/iter",
            "extra": "iterations: 115857\ncpu: 6050.891184822668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5199.943667614107,
            "unit": "ns/iter",
            "extra": "iterations: 134807\ncpu: 5199.4829645344835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5104.558783414189,
            "unit": "ns/iter",
            "extra": "iterations: 137105\ncpu: 5104.579701688499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5097.0846272722765,
            "unit": "ns/iter",
            "extra": "iterations: 137178\ncpu: 5096.678767732438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8669.65551578429,
            "unit": "ns/iter",
            "extra": "iterations: 80741\ncpu: 8669.137117449629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29726.679557610874,
            "unit": "ns/iter",
            "extra": "iterations: 27668\ncpu: 29723.760300708418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126764.99465954033,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 126759.7834149236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97541.73352769455,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 97536.41982507285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 95176.4243744505,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 95170.78865058119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98164.81385979471,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 98157.20041441233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 297299.03931623,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 297282.29059829103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2068583.9242760206,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2068437.6391982145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1702297.8939670313,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1702218.2815356508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1688394.2359346538,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688270.7803992752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1708591.2389706483,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1708525.7352941197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1019516.6918033042,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1019456.9398907115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1652600.0639430853,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1652521.3143872134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6800576.839999621,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6799728.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3788238.455284477,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788068.6991869947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8637089.634920891,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8636480.158730175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28892.61454660939,
            "unit": "ns/iter",
            "extra": "iterations: 28364\ncpu: 28892.271893950045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124141.11536779617,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 124132.94974508384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101185.02343563017,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 101180.90649536041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100135.73192593837,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 100129.26052600538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104114.39044019142,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 104108.98670893823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 299154.67172074615,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 299127.7503526081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2086987.8968609567,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2086973.0941704076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1734573.9146568426,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1734562.3376623339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1715910.7187499455,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1715858.455882343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1718571.8782287634,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1718558.1180811771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1024224.8973510856,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1024228.807947024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1666986.136445195,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1666952.9622980137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6855537.189999268,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6855320.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3899272.661088031,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3899207.531380761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29433.609831141064,
            "unit": "ns/iter",
            "extra": "iterations: 27952\ncpu: 29432.83128219814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123676.24196351257,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 123673.54474370122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96918.17683898997,
            "unit": "ns/iter",
            "extra": "iterations: 8782\ncpu: 96915.45206103414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 95808.55920161396,
            "unit": "ns/iter",
            "extra": "iterations: 8868\ncpu: 95806.73207036578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97884.4385297784,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 97882.79755732199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 291455.5401141311,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 291453.20577375084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2070708.7666667374,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2070658.6666666737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1715047.6850829332,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1714991.1602210035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1706535.184981616,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1706541.758241758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1707142.7237567499,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1707116.5745856385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1015060.9661203086,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1015024.8087431642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1663462.892665661,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1663436.8515205684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3037.179146590435,
            "unit": "ns/iter",
            "extra": "iterations: 230370\ncpu: 3037.1910405000444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15295.13945915006,
            "unit": "ns/iter",
            "extra": "iterations: 45447\ncpu: 15294.776332871304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11878.73135517269,
            "unit": "ns/iter",
            "extra": "iterations: 59011\ncpu: 11878.243039433313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12521.024125280197,
            "unit": "ns/iter",
            "extra": "iterations: 55875\ncpu: 12520.880536912808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10272.288050719835,
            "unit": "ns/iter",
            "extra": "iterations: 68297\ncpu: 10272.33260611737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70795.37362413584,
            "unit": "ns/iter",
            "extra": "iterations: 9812\ncpu: 70795.61761108832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 136546.58630083693,
            "unit": "ns/iter",
            "extra": "iterations: 5139\ncpu: 136543.02393461688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36016.59368062427,
            "unit": "ns/iter",
            "extra": "iterations: 19369\ncpu: 36015.82425525345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35621.72707379131,
            "unit": "ns/iter",
            "extra": "iterations: 19650\ncpu: 35620.905852417476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35675.399539637685,
            "unit": "ns/iter",
            "extra": "iterations: 19550\ncpu: 35674.557544757066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68740.34961186882,
            "unit": "ns/iter",
            "extra": "iterations: 10177\ncpu: 68739.48118306021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63948.27960616366,
            "unit": "ns/iter",
            "extra": "iterations: 10969\ncpu: 63946.06618652636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20125.88650447625,
            "unit": "ns/iter",
            "extra": "iterations: 34856\ncpu: 20125.24959834726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93268.09916033718,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 93268.46594695402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75352.86136803887,
            "unit": "ns/iter",
            "extra": "iterations: 9298\ncpu: 75352.34459023531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75363.16450777273,
            "unit": "ns/iter",
            "extra": "iterations: 9264\ncpu: 75361.45293609693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75980.36988383732,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 75977.78742807444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138921.43633480044,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 138916.83855612855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 593694.7238742907,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 593696.091758705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 508531.00145237776,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 508525.41757443355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 508739.9439999816,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 508726.25454545335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 505939.75832132244,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 505903.9797395117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333906.33349234273,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 333897.8530534369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 494626.5530409945,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494621.35785007436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19231.374883287976,
            "unit": "ns/iter",
            "extra": "iterations: 36414\ncpu: 19230.87548744999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93073.9132809455,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 93070.68069801525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74663.65484077053,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 74663.14383415226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74475.45995106782,
            "unit": "ns/iter",
            "extra": "iterations: 9401\ncpu: 74475.72598659719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75237.66788479032,
            "unit": "ns/iter",
            "extra": "iterations: 9304\ncpu: 75235.16766981994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139765.54340900405,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 139762.10673038644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 594867.1249999674,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 594846.0664335584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 508135.0714285605,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 508129.2274052453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 504832.1587643603,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 504819.2528735674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 499277.54767022276,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 499264.1577060905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 330467.084802297,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 330460.21915197617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 492674.5533569055,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 492660.84805654053 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777712968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8552.283471114784,
            "unit": "ns/iter",
            "extra": "iterations: 81772\ncpu: 8552.030034730717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75265.57005860962,
            "unit": "ns/iter",
            "extra": "iterations: 11262\ncpu: 75263.44343811047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143807.00263374796,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 143804.29629629626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212678.22075700594,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 212675.72649572644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280801.7527401803,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 280801.16054158617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344710.16067145986,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 344692.12629896094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 414027.60834520386,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 414010.43148411554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 477739.3879121294,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 477708.29670329695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 544571.0438047524,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 544533.4167709638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6074.687856419564,
            "unit": "ns/iter",
            "extra": "iterations: 115559\ncpu: 6074.032312498378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5202.685320923587,
            "unit": "ns/iter",
            "extra": "iterations: 134518\ncpu: 5202.217547094064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5151.255017909251,
            "unit": "ns/iter",
            "extra": "iterations: 135963\ncpu: 5151.103609070124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5130.718552056135,
            "unit": "ns/iter",
            "extra": "iterations: 136718\ncpu: 5130.355183662723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8744.241996656769,
            "unit": "ns/iter",
            "extra": "iterations: 80154\ncpu: 8743.505002869488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30450.943304733413,
            "unit": "ns/iter",
            "extra": "iterations: 26810\ncpu: 30449.056322267803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125265.12607491085,
            "unit": "ns/iter",
            "extra": "iterations: 6861\ncpu: 125256.87217606779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96850.36115222478,
            "unit": "ns/iter",
            "extra": "iterations: 8783\ncpu: 96846.89741546157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99986.185237592,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 99978.12757929467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100560.1140971301,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100551.21404997645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 290780.4359145746,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 290757.40987984074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2125913.1418764913,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2125809.839816935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1729412.0428304821,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729272.6256983217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1751818.4718045446,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751694.1729323305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1724841.2717190266,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1724726.802218114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1038573.6595505191,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1038528.0898876436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1694451.2705666446,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1694317.7330895797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6973817.179999742,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6973117.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3936854.738396567,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3936592.405063294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8656584.825396907,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8655967.46031744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30677.804910662937,
            "unit": "ns/iter",
            "extra": "iterations: 26921\ncpu: 30677.54541064599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125558.04946268644,
            "unit": "ns/iter",
            "extra": "iterations: 6793\ncpu: 125553.42264095401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 99498.16369152152,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 99496.1964764905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 104271.74987780326,
            "unit": "ns/iter",
            "extra": "iterations: 8184\ncpu: 104271.61534701899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100694.49781298543,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 100692.55231114791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 296938.856850701,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 296931.86775732815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2132675.6032111677,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2132671.330275222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1748263.796261726,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1748245.4205607516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1778228.604606452,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1778178.5028790804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1746617.98116768,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1746597.5517890777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1041442.3236283273,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 1041430.0111982086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1709802.862132397,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1709769.8529411866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7061401.37000034,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7061172.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4038454.2183403233,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4038382.969432306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32005.509850677317,
            "unit": "ns/iter",
            "extra": "iterations: 25582\ncpu: 32005.484324915877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133260.25462171773,
            "unit": "ns/iter",
            "extra": "iterations: 6437\ncpu: 133258.86282429675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98483.24893544606,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 98480.29692714935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100814.60063672494,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 100812.08583893381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99734.99207644325,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 99734.91027732454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286918.14902739244,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286913.97955819126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2130330.783908077,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2130253.333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1759321.1167607403,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1759288.700564965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1767310.2670455575,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767307.5757575838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1727586.0389610867,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1727552.8756957327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1039877.2413020052,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1039856.2289562305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1706337.8846152967,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1706317.7655677637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3045.8806297599167,
            "unit": "ns/iter",
            "extra": "iterations: 230183\ncpu: 3045.878713892864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15828.276040374076,
            "unit": "ns/iter",
            "extra": "iterations: 44287\ncpu: 15827.863707182603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12594.148925843787,
            "unit": "ns/iter",
            "extra": "iterations: 55625\ncpu: 12593.725842696565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12586.175900674036,
            "unit": "ns/iter",
            "extra": "iterations: 55736\ncpu: 12586.062867805387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10196.235555103265,
            "unit": "ns/iter",
            "extra": "iterations: 68744\ncpu: 10196.107296636847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67921.32337775905,
            "unit": "ns/iter",
            "extra": "iterations: 10279\ncpu: 67919.87547426732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143251.38242524967,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 143247.31667349456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37138.37015020767,
            "unit": "ns/iter",
            "extra": "iterations: 18841\ncpu: 37138.33660633743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37385.32233923451,
            "unit": "ns/iter",
            "extra": "iterations: 18707\ncpu: 37385.25151012971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37038.43275907429,
            "unit": "ns/iter",
            "extra": "iterations: 18865\ncpu: 37037.736549164794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74219.79821863888,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 74218.84211642467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66666.47789293429,
            "unit": "ns/iter",
            "extra": "iterations: 10517\ncpu: 66665.04706665354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20752.05677709721,
            "unit": "ns/iter",
            "extra": "iterations: 33746\ncpu: 20751.49943697032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93679.54501800599,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 93679.36507936366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76281.54884932585,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 76279.73295701396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76409.67580059278,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 76407.63728403089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77149.58649418771,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 77147.55536066611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141380.1709384452,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141376.87184661897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609925.4342907277,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609924.5430809435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 520096.7662721875,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 520084.09763313713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516196.61139893875,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 516189.93338268576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 509279.7543604417,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 509267.0784883689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337526.68175252026,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 337517.7660086636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503947.5140187027,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503946.7289719701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20052.51549287654,
            "unit": "ns/iter",
            "extra": "iterations: 34887\ncpu: 20051.878923381024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96231.84448710002,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 96228.55183763031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76032.2961559255,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 76032.18191662176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77557.83483084495,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 77556.74986134305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77764.97706371706,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 77764.81994459759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141268.18994751456,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 141264.95761001384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610930.8304195616,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 610909.4405594345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 518169.57824147644,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 518168.4798807775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515255.5485294135,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515244.41176471085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511520.8752734797,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511520.20423048316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337789.5812831937,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 337782.39266763144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502780.94612069795,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 502768.4626436822 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705952910977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8093.086523486914,
            "unit": "ns/iter",
            "extra": "iterations: 86046\ncpu: 8092.587685656509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69756.28258551512,
            "unit": "ns/iter",
            "extra": "iterations: 12191\ncpu: 69752.57156919039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133247.61878622565,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 133243.0466605673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196674.44994352106,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 196667.5028248588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258957.70310631883,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 258944.29510155314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 319853.5802514844,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 319839.34911242593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 383768.6659331141,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 383731.38204225333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 445692.43120205496,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 445688.0818414325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 507757.590803262,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 507741.1525029103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6095.645292327489,
            "unit": "ns/iter",
            "extra": "iterations: 114717\ncpu: 6095.30148103594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5197.543942922399,
            "unit": "ns/iter",
            "extra": "iterations: 134834\ncpu: 5197.595561950243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5138.6093396342385,
            "unit": "ns/iter",
            "extra": "iterations: 135637\ncpu: 5138.659805215398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5175.793482606403,
            "unit": "ns/iter",
            "extra": "iterations: 135054\ncpu: 5175.675655663656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8699.89172579213,
            "unit": "ns/iter",
            "extra": "iterations: 80056\ncpu: 8699.856350554619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31022.03913770497,
            "unit": "ns/iter",
            "extra": "iterations: 26905\ncpu: 31021.445827913063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123992.64303390529,
            "unit": "ns/iter",
            "extra": "iterations: 6869\ncpu: 123991.45436016882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98849.37483998854,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 98847.79471662975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98393.82372016428,
            "unit": "ns/iter",
            "extra": "iterations: 8634\ncpu: 98391.82302524905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101641.38772077078,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 101637.71476631025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270974.4444096415,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 270970.81114939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1990789.1526883603,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1990646.4516129051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1640077.718584145,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1640056.8141592904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1669533.9028775205,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1669497.4820143864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1652799.054867082,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1652774.5132743383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1000580.9257265318,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 1000565.5543595256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1614428.828125014,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1614428.124999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6639780.95999937,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6639276.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3783653.36032384,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3783376.5182186267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8366438.800000581,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8365724.615384615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29551.534852885015,
            "unit": "ns/iter",
            "extra": "iterations: 27903\ncpu: 29549.087911694096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126908.4265142586,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 126902.07838479812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105923.49839623853,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 105916.40759930912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101395.93446920568,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101391.77886333845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100948.1276140743,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 100945.94819391664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 277299.30355428637,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 277291.8027537643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2011139.1753246044,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2011155.1948051958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1652670.5978647126,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1652605.1601423526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1689805.330922262,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1689779.7468354402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1663470.3178571695,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663415.3571428533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 992220.3867521123,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 992220.4059829059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1614597.8003473023,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1614592.7083333314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6705415.459999813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6705464.000000063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3688727.1388884922,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3688558.7301587374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30057.87921358569,
            "unit": "ns/iter",
            "extra": "iterations: 27263\ncpu: 30057.755932949283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126629.64677468852,
            "unit": "ns/iter",
            "extra": "iterations: 6418\ncpu: 126628.56029915795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98900.88559792918,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 98900.66641984464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100310.24072165832,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 100307.19072164952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97657.25231568168,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 97656.74941336304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271539.8322211714,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 271532.4118207812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2052919.4051722903,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2052875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1661369.2589286545,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1661316.6071428536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1681786.9748201424,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1681783.273381294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1665077.106115151,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1665036.8705036019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 996455.4490889015,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 996454.9839228312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1620652.1567943217,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1620571.9512195066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3057.044565749202,
            "unit": "ns/iter",
            "extra": "iterations: 228808\ncpu: 3056.946872486984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15938.79301762806,
            "unit": "ns/iter",
            "extra": "iterations: 43796\ncpu: 15938.654214996825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12167.444806212683,
            "unit": "ns/iter",
            "extra": "iterations: 57434\ncpu: 12167.24414110109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12529.788870074908,
            "unit": "ns/iter",
            "extra": "iterations: 57287\ncpu: 12529.043238430992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10339.287583200565,
            "unit": "ns/iter",
            "extra": "iterations: 60998\ncpu: 10338.268467818581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65336.716475095716,
            "unit": "ns/iter",
            "extra": "iterations: 10701\ncpu: 65331.11858704784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132602.79190314614,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 132591.22209610304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34761.08061229974,
            "unit": "ns/iter",
            "extra": "iterations: 20121\ncpu: 34759.58451369204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35112.29748708587,
            "unit": "ns/iter",
            "extra": "iterations: 19937\ncpu: 35110.322515924934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35553.220893263,
            "unit": "ns/iter",
            "extra": "iterations: 19815\ncpu: 35551.450921019605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70527.19548570011,
            "unit": "ns/iter",
            "extra": "iterations: 9924\ncpu: 70523.23659814653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62377.149955484056,
            "unit": "ns/iter",
            "extra": "iterations: 11230\ncpu: 62377.65805877086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19616.275850483067,
            "unit": "ns/iter",
            "extra": "iterations: 35715\ncpu: 19616.183676326484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91874.39976460932,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 91869.42591866186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73882.2577036786,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 73879.2211903758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74261.36434764689,
            "unit": "ns/iter",
            "extra": "iterations: 9458\ncpu: 74255.22309156258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74255.03845746271,
            "unit": "ns/iter",
            "extra": "iterations: 9439\ncpu: 74255.60970441744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138218.19395613635,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 138218.13154256207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 574346.0800654336,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 574311.6830065331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 486064.211257778,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486068.4503127218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494579.5767869406,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 494559.8726114617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 490252.95118551055,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 490190.3068340359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324201.0815192194,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324181.056044466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 478459.6757493033,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 478432.56130790815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19225.42167320278,
            "unit": "ns/iter",
            "extra": "iterations: 36469\ncpu: 19224.579780087104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92943.61217736172,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 92936.5850430181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74102.605465871,
            "unit": "ns/iter",
            "extra": "iterations: 9477\ncpu: 74099.8311702017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74313.15625663553,
            "unit": "ns/iter",
            "extra": "iterations: 9414\ncpu: 74313.77735287939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74447.81324152902,
            "unit": "ns/iter",
            "extra": "iterations: 9440\ncpu: 74443.50635593131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139807.86536547358,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 139802.80820553724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 575649.2789170966,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 575604.9220672712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 490196.5659186518,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 490174.0532959243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 492457.24753869005,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 492460.9704641305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 487627.9197488154,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 487593.3705512927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319977.0201650282,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 319962.3739688416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 478600.2703071708,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 478566.2116040942 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954326989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8152.543103448987,
            "unit": "ns/iter",
            "extra": "iterations: 85492\ncpu: 8152.265709072195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74532.30105886859,
            "unit": "ns/iter",
            "extra": "iterations: 11805\ncpu: 74529.48750529437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137796.27367095737,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 137795.40736080531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203222.52961840524,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 203219.29290564277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267065.1071867233,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 267054.29975429986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329968.5899581806,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 329952.68162799574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394783.02189782454,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 394766.3777372265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 464351.3520976852,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 464312.2676579925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 524412.2793764852,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 524396.2829736215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6021.590602470247,
            "unit": "ns/iter",
            "extra": "iterations: 116520\ncpu: 6021.315653964983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5097.556369687507,
            "unit": "ns/iter",
            "extra": "iterations: 137024\ncpu: 5097.525980850074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5089.308556328568,
            "unit": "ns/iter",
            "extra": "iterations: 137372\ncpu: 5089.010861019716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5137.644836511803,
            "unit": "ns/iter",
            "extra": "iterations: 135974\ncpu: 5137.333607895636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8719.884163493307,
            "unit": "ns/iter",
            "extra": "iterations: 80346\ncpu: 8719.834217011421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30414.317209068224,
            "unit": "ns/iter",
            "extra": "iterations: 27102\ncpu: 30413.86982510511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126869.29994072438,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 126867.64967397744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98166.00034433231,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 98163.96189601763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98583.01812095522,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 98578.67036011053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100300.0434166979,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 100293.67626238783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 260108.25933672336,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 260098.83477741267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2048743.179203138,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2048682.7433628293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1687584.7554350304,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1687470.2898550725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1728449.977736597,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1728361.224489797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1697284.517303937,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1697175.4098360653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1031874.363433566,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1031799.8885172817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1649268.0959144991,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1649168.5612788657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6906483.549998939,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6906103.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3856809.2520657326,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856597.933884296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8657279.56692905,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8656731.49606299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29559.262114860994,
            "unit": "ns/iter",
            "extra": "iterations: 27652\ncpu: 29557.460581513114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122283.62539961126,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 122277.25951758197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100331.72656251113,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100326.90577651473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98616.48375117755,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 98607.62534818922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 108494.08061639841,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 108486.97147223628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 267414.5795140283,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 267402.64533989574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2085824.448430473,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2085745.515695064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1721326.442592457,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1721257.7777777833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1786633.8279773444,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1786526.8431001839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1725053.7740740885,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724991.666666661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1035011.3273740623,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1034956.8715083823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1680540.6148282015,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1680483.5443037958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6933967.150000626,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6933366.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3858295.290456226,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3858158.9211618504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29763.04047430122,
            "unit": "ns/iter",
            "extra": "iterations: 27746\ncpu: 29761.96568874789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126703.26072168251,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 126700.66548358428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98671.89241315844,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 98666.95712791917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99576.66795231377,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 99573.88966806937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102544.97698238403,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 102541.58833453854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 257241.65182542955,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 257236.36093796368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2060843.3622222343,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2060718.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1713173.7647062552,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1713154.9632352998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1741298.3955223998,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1741222.574626861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1713356.7904411627,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1713275.9191176426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1023521.1620727703,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 1023473.098125687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1670321.3913823995,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1670286.5350089758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3075.231096602207,
            "unit": "ns/iter",
            "extra": "iterations: 226983\ncpu: 3074.844371604925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15552.14046718748,
            "unit": "ns/iter",
            "extra": "iterations: 44950\ncpu: 15550.963292547229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12240.884272217187,
            "unit": "ns/iter",
            "extra": "iterations: 57160\ncpu: 12240.81000699788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11961.730722509723,
            "unit": "ns/iter",
            "extra": "iterations: 58449\ncpu: 11961.049804102717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9904.553915540291,
            "unit": "ns/iter",
            "extra": "iterations: 70731\ncpu: 9903.947349818347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62288.17052126948,
            "unit": "ns/iter",
            "extra": "iterations: 11242\ncpu: 62284.21988969935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137409.59354839826,
            "unit": "ns/iter",
            "extra": "iterations: 5115\ncpu: 137398.45552297184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36295.53760935849,
            "unit": "ns/iter",
            "extra": "iterations: 19317\ncpu: 36285.4532277267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36691.51279496619,
            "unit": "ns/iter",
            "extra": "iterations: 19070\ncpu: 36690.66072364935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36508.744507652664,
            "unit": "ns/iter",
            "extra": "iterations: 19163\ncpu: 36508.04675677072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72636.475966545,
            "unit": "ns/iter",
            "extra": "iterations: 9570\ncpu: 72633.98119122356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64633.79624317805,
            "unit": "ns/iter",
            "extra": "iterations: 10807\ncpu: 64630.942907375145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19681.202907461935,
            "unit": "ns/iter",
            "extra": "iterations: 35770\ncpu: 19680.623427452865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94447.24673399336,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 94443.12457912469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75832.5101752078,
            "unit": "ns/iter",
            "extra": "iterations: 9189\ncpu: 75831.35270432035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77157.40859976345,
            "unit": "ns/iter",
            "extra": "iterations: 9070\ncpu: 77152.63506063898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76990.19444139153,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 76987.80621773122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141468.17456552837,
            "unit": "ns/iter",
            "extra": "iterations: 5064\ncpu: 141464.31674565477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 594758.8276740134,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 594733.7011884557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 504362.6385890279,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504349.5320374369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 513956.6698813084,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 513920.17804154416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511755.451353301,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 511728.8222384775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 331563.2116202768,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 331552.14926783694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495354.3173485046,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 495338.7870239766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19431.21395335959,
            "unit": "ns/iter",
            "extra": "iterations: 36106\ncpu: 19429.978396942184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96352.52218851548,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96347.65711135602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76906.61798617398,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 76904.3153618088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76617.02597829925,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 76614.47988600156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75787.6683886565,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 75785.70015387962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141181.8793138368,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141175.58022199967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 589837.90656575,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 589820.7912457933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 500532.3190000581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500517.79999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 507097.868840618,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 507083.69565217476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 502266.0588657872,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 502263.46015793097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 330099.95956747443,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 330089.6567936072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 492695.74683552637,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 492697.1870604708 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705956313158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8376.047483960572,
            "unit": "ns/iter",
            "extra": "iterations: 83544\ncpu: 8375.27171310926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72070.24974437788,
            "unit": "ns/iter",
            "extra": "iterations: 11736\ncpu: 72066.6496250852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139234.76654557305,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 139229.52140262205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202171.4396089862,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 202161.20549220397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273467.84896164044,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 273453.9962240403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329892.6041984417,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 329878.12977099244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394222.36787332495,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 394202.57918552007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456996.40839892067,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 456974.54068241426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519982.1285117372,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 519954.15421398665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6259.932381120199,
            "unit": "ns/iter",
            "extra": "iterations: 112720\ncpu: 6259.515613910575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5327.843810190246,
            "unit": "ns/iter",
            "extra": "iterations: 131353\ncpu: 5327.542576111707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5249.541387591327,
            "unit": "ns/iter",
            "extra": "iterations: 134074\ncpu: 5249.336187478548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5228.549853450185,
            "unit": "ns/iter",
            "extra": "iterations: 134083\ncpu: 5228.223563016935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8975.859751643056,
            "unit": "ns/iter",
            "extra": "iterations: 78033\ncpu: 8975.406558763616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30669.9869985613,
            "unit": "ns/iter",
            "extra": "iterations: 26997\ncpu: 30668.370559691823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124531.93123082085,
            "unit": "ns/iter",
            "extra": "iterations: 6849\ncpu: 124526.19360490575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97156.7696257273,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 97151.27795527164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97770.30296047655,
            "unit": "ns/iter",
            "extra": "iterations: 8681\ncpu: 97764.58933302607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97976.00635029534,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 97972.30111996293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278921.7690331137,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 278907.1635078696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2073335.79820675,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2073249.1031390117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1703446.5402931068,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1703341.391941393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1738576.5222225355,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1738529.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1710856.4025734803,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1710828.308823533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1016638.4148471269,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 1016611.2445414864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1695785.4390681295,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1694940.6810035878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6757258.3700007275,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6757059.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3771894.5806448706,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3771751.2096774285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8531918.46093715,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8531446.093749978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30313.96881120164,
            "unit": "ns/iter",
            "extra": "iterations: 27061\ncpu: 30313.10372861306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126234.13956918922,
            "unit": "ns/iter",
            "extra": "iterations: 6778\ncpu: 126228.13514311016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100660.380783755,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 100657.61331444724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99976.93796054993,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 99971.47611124342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103233.18227140595,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 103231.33511673115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 289161.97804391535,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 289147.1057884226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2091760.426966492,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2091725.3932584263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1725143.0648145657,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725055.5555555595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1748043.42481224,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1748039.4736842136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1816812.9499071946,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1816758.6270871977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1016225.1369114019,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 1016198.0284775486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1675736.7405405291,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675668.8288288251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6838629.930000479,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6838440.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3826252.918367702,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3826146.9387755217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30134.29496534923,
            "unit": "ns/iter",
            "extra": "iterations: 27271\ncpu: 30133.291775145728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 128768.9270062012,
            "unit": "ns/iter",
            "extra": "iterations: 6617\ncpu: 128765.39217167936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98606.49546615746,
            "unit": "ns/iter",
            "extra": "iterations: 8602\ncpu: 98603.77819111822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98269.19588943281,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 98263.49280074297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 96420.1897179131,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 96416.82211101004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278103.7467866291,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 278091.7737789196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2091397.3258430315,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2091329.8876404574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1747558.4219331397,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1747490.8921933025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1767477.6515152093,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767407.0075757569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1736285.8129630424,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1736213.8888888927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1015546.4994536015,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1015501.3114754052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1730758.3567565638,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1730738.558558558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3152.7714376845975,
            "unit": "ns/iter",
            "extra": "iterations: 222587\ncpu: 3152.533166806673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16115.734199539113,
            "unit": "ns/iter",
            "extra": "iterations: 43100\ncpu: 16115.354988399202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12010.813239781835,
            "unit": "ns/iter",
            "extra": "iterations: 58294\ncpu: 12010.411020002091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12435.31604235371,
            "unit": "ns/iter",
            "extra": "iterations: 56195\ncpu: 12435.031586440044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10894.017283361552,
            "unit": "ns/iter",
            "extra": "iterations: 67348\ncpu: 10893.631585199279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66445.37000853327,
            "unit": "ns/iter",
            "extra": "iterations: 10543\ncpu: 66442.47367921889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139455.38163872666,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 139450.58242843056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36493.40023001404,
            "unit": "ns/iter",
            "extra": "iterations: 19129\ncpu: 36492.80150556765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36837.30519548043,
            "unit": "ns/iter",
            "extra": "iterations: 19132\ncpu: 36837.45557181663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36756.604386975865,
            "unit": "ns/iter",
            "extra": "iterations: 19102\ncpu: 36755.32404983717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71889.69222883023,
            "unit": "ns/iter",
            "extra": "iterations: 9754\ncpu: 71890.04510969896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65440.17971579587,
            "unit": "ns/iter",
            "extra": "iterations: 10767\ncpu: 65435.59022940428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19426.349202389225,
            "unit": "ns/iter",
            "extra": "iterations: 36045\ncpu: 19425.88985989726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93261.83280214418,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 93258.45949535213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74515.11171170347,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 74510.90620031912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76547.19195792593,
            "unit": "ns/iter",
            "extra": "iterations: 9127\ncpu: 76547.56217815385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75998.2873401273,
            "unit": "ns/iter",
            "extra": "iterations: 9226\ncpu: 75994.77563407857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 137666.5475815721,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 137660.77467558018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 594265.011864274,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 594243.3050847499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 502917.49064742995,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 502895.539568348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 513987.78874271805,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 513984.94152047054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 508383.4971056128,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 508352.96671490656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329467.51969622466,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 329459.4684385408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 493372.495380352,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 493347.90334044286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19182.796936322582,
            "unit": "ns/iter",
            "extra": "iterations: 36688\ncpu: 19182.648277365846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93445.93568186049,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93445.15612489956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74499.84658787085,
            "unit": "ns/iter",
            "extra": "iterations: 9393\ncpu: 74499.27605663786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75746.65820460497,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75745.79237333997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75939.4671445645,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75938.80742912926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138733.08644903084,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 138733.7289812051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 593874.016074431,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 593837.8172588777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 502758.3679312988,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 502742.2333571887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 507246.05499271606,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507219.2474674346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 504382.40873306635,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 504361.4173228408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 325235.7213115075,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 325225.199063237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 493785.91197173076,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 493746.3380281695 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957770391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8435.108870531565,
            "unit": "ns/iter",
            "extra": "iterations: 83163\ncpu: 8434.97829563628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74381.65242888566,
            "unit": "ns/iter",
            "extra": "iterations: 11425\ncpu: 74379.52735229758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141634.3275390379,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 141629.727989699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208894.74291161992,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 208885.89468668093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 274962.01423598675,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 274951.4394179058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338014.1758970252,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 338005.26521060866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 402792.16118576715,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 402772.99675775855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469143.0561858339,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 469125.5537547276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 537819.4279530224,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 537813.3580705008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6336.01708883589,
            "unit": "ns/iter",
            "extra": "iterations: 110540\ncpu: 6335.891080151978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5308.02194968885,
            "unit": "ns/iter",
            "extra": "iterations: 132257\ncpu: 5308.000332685603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5280.375942119155,
            "unit": "ns/iter",
            "extra": "iterations: 132547\ncpu: 5280.35112073453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5301.736813497658,
            "unit": "ns/iter",
            "extra": "iterations: 132465\ncpu: 5301.500773789305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8829.2014084331,
            "unit": "ns/iter",
            "extra": "iterations: 79237\ncpu: 8829.0457740702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33673.475662908866,
            "unit": "ns/iter",
            "extra": "iterations: 24551\ncpu: 33672.71394240564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140003.43692809634,
            "unit": "ns/iter",
            "extra": "iterations: 6120\ncpu: 140002.49999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109329.81044167501,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 109328.2486596886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111292.24795320665,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 111290.9031838856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110636.7917259303,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 110635.34583063972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281174.7071240099,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 281171.40501319175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2165850.614485896,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2165809.112149533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1758533.4242425282,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1758514.3939393968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1766092.4253307786,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1766058.9792060547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1736117.5977652867,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1736100.9310986968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1062760.9749143969,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1062737.2862029662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1715033.895220502,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1715028.6764705863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7226843.170000166,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7226466.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3896401.7833331847,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3896337.916666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8708956.825396325,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8708686.50793651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32178.6507942696,
            "unit": "ns/iter",
            "extra": "iterations: 25684\ncpu: 32178.27441208543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139063.98656958778,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 139061.310679612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107743.64946372304,
            "unit": "ns/iter",
            "extra": "iterations: 7925\ncpu: 107740.73186119915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111808.7524481073,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 111807.10275492881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109598.80686806346,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 109598.48954299005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284450.83891075844,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 284444.2585301832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2168930.4702701177,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2168857.5675675664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1778455.3219046628,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1778363.9999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1795684.4923077144,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1795603.0769230854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1770015.986691947,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769950.7604562729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1052516.7167235438,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1052475.5403868018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1730632.7063196474,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1730568.4014869882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7046170.680000614,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7045740.99999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3962509.5381354946,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3962273.7288135653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32081.311118019552,
            "unit": "ns/iter",
            "extra": "iterations: 25733\ncpu: 32080.942758325808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138167.93953564102,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 138163.9793614962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108269.36449659265,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 108264.1811758761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109406.20040953199,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109400.78065011476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108119.18349317762,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 108114.18475517437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278523.1438223961,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 278515.5727155739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2161118.751740299,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2161021.1136891064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1784498.7257142619,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1784434.8571428608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1774109.5916030714,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774023.8549618346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1748085.0486890632,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1748037.0786516857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1056809.262202041,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1056781.27128263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1729496.4925649783,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1729492.0074349511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3038.792707656263,
            "unit": "ns/iter",
            "extra": "iterations: 230790\ncpu: 3038.742146540146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16745.36136885278,
            "unit": "ns/iter",
            "extra": "iterations: 41816\ncpu: 16745.312798928557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12649.48209843074,
            "unit": "ns/iter",
            "extra": "iterations: 55470\ncpu: 12649.159906255672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12239.995263893605,
            "unit": "ns/iter",
            "extra": "iterations: 57220\ncpu: 12239.956308982803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10511.264209531219,
            "unit": "ns/iter",
            "extra": "iterations: 66663\ncpu: 10510.961102860641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65911.8784291562,
            "unit": "ns/iter",
            "extra": "iterations: 10644\ncpu: 65910.92634348013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137195.84081154966,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 137194.3815840803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37200.09652058395,
            "unit": "ns/iter",
            "extra": "iterations: 18825\ncpu: 37199.32536520564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36930.4255946159,
            "unit": "ns/iter",
            "extra": "iterations: 19004\ncpu: 36929.52010103134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36706.59814260657,
            "unit": "ns/iter",
            "extra": "iterations: 19059\ncpu: 36705.949944908105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70696.82476518345,
            "unit": "ns/iter",
            "extra": "iterations: 9901\ncpu: 70695.8590041418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66465.75740318529,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66464.9107820795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19708.459417729027,
            "unit": "ns/iter",
            "extra": "iterations: 35619\ncpu: 19708.377551307032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96632.15175365323,
            "unit": "ns/iter",
            "extra": "iterations: 7242\ncpu: 96629.88124827293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78070.90424701141,
            "unit": "ns/iter",
            "extra": "iterations: 8971\ncpu: 78070.60528369129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78075.14327192206,
            "unit": "ns/iter",
            "extra": "iterations: 8955\ncpu: 78073.1434952542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78104.03086213564,
            "unit": "ns/iter",
            "extra": "iterations: 8943\ncpu: 78101.87856423939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139118.27456820296,
            "unit": "ns/iter",
            "extra": "iterations: 5037\ncpu: 139116.81556481935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 616970.1324562052,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 616954.2105263129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518165.0977777752,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518157.25925925554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 515922.37592318916,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 515920.16248153796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 515415.74022145994,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 515398.89298892557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334812.7198276105,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 334808.76436781423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504923.4542177209,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 504900.4325883186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18950.460473666386,
            "unit": "ns/iter",
            "extra": "iterations: 36988\ncpu: 18950.375797555895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96213.36506189652,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 96211.10041265529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77873.94362543538,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 77871.51786767296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77276.60602064729,
            "unit": "ns/iter",
            "extra": "iterations: 9102\ncpu: 77276.33487145654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78168.13743864043,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 78165.14948683645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141384.33770424814,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 141383.76033891432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 615893.3873238916,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 615878.2570422632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519465.2281481164,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 519450.5925925973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513403.8414096872,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 513401.61527165846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511131.27332354867,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 511111.370262389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335146.18729095603,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 335144.6249402732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 504400.1728837543,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 504385.36585366155 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705959264210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8295.519706102512,
            "unit": "ns/iter",
            "extra": "iterations: 84111\ncpu: 8295.517827632535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76023.00926573042,
            "unit": "ns/iter",
            "extra": "iterations: 11440\ncpu: 76019.7465034965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141711.0591284739,
            "unit": "ns/iter",
            "extra": "iterations: 6173\ncpu: 141712.74906852425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209955.09816689897,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 209940.73806078153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 277005.6934143627,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 277004.85933503846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 341603.19944923447,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 341593.2336742723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 408404.8823529242,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 408399.7176470588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 474830.9874453626,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 474831.00436681276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 541399.3942963788,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 541383.6949783011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6079.947402164872,
            "unit": "ns/iter",
            "extra": "iterations: 115423\ncpu: 6079.872295816259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5244.7119586742065,
            "unit": "ns/iter",
            "extra": "iterations: 133769\ncpu: 5244.434809260743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5165.136712007421,
            "unit": "ns/iter",
            "extra": "iterations: 136740\ncpu: 5164.977329237978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5150.773078457963,
            "unit": "ns/iter",
            "extra": "iterations: 135386\ncpu: 5150.8383436987615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8851.685257567227,
            "unit": "ns/iter",
            "extra": "iterations: 79824\ncpu: 8851.14877731009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33117.07560054046,
            "unit": "ns/iter",
            "extra": "iterations: 24894\ncpu: 33117.46605607775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126993.70897743318,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 126987.51486325824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98957.38598119933,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 98952.81420447973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103271.05973395718,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 103265.76783555008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101202.47288942231,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 101197.87158145085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283397.2145894184,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 283372.22767418966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2142609.9953812254,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2142424.018475754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1752978.0527304655,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752812.8060263644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1765779.2903224078,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1765777.0398481959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1748436.821092303,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1748415.2542372877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1044655.2530932487,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1044649.0438695152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1703476.2605504477,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1703463.853211008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6998421.5499994205,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6998351.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3909612.807530918,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3909487.0292887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8963678.885245334,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8963294.262295075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28510.349811350938,
            "unit": "ns/iter",
            "extra": "iterations: 28624\ncpu: 28510.23616545556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140547.23265372112,
            "unit": "ns/iter",
            "extra": "iterations: 6082\ncpu: 140538.09602104552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109227.89734759362,
            "unit": "ns/iter",
            "extra": "iterations: 7842\ncpu: 109226.93190512652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102202.84129857585,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 102203.00506879092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109486.4999999808,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 109484.67452588418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 295047.6160652991,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 295036.07896528253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2149666.041570661,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2149669.9769053017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1768508.2952378988,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768484.9523809562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1780440.9007631522,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780463.1679389263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1761533.983018932,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1761410.9433962256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1037937.1513451156,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1037936.8834080768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1713137.190825848,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1713065.321100913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7011544.730000879,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7011485.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3965747.7805908434,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3965374.6835442903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29853.1035122877,
            "unit": "ns/iter",
            "extra": "iterations: 27475\ncpu: 29852.7716105548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132640.94118556872,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 132634.5766909147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99958.2335238405,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 99959.41910649724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99515.87475126608,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 99511.04998244121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97826.33782857114,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 97826.4799999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 280448.5661835463,
            "unit": "ns/iter",
            "extra": "iterations: 3105\ncpu: 280438.45410627994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2133399.6267281054,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2133426.0368663617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1765080.108159177,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1764989.5635673737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1769213.0342205092,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769206.8441064688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1752834.618867571,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752779.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1035727.5514539647,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 1035711.856823268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1711468.712706967,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1711410.8655616979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3064.0977959071,
            "unit": "ns/iter",
            "extra": "iterations: 227985\ncpu: 3064.0888654955193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15593.73799077874,
            "unit": "ns/iter",
            "extra": "iterations: 44903\ncpu: 15593.514909916948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12165.730709809144,
            "unit": "ns/iter",
            "extra": "iterations: 57607\ncpu: 12165.597930807015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12644.543640494014,
            "unit": "ns/iter",
            "extra": "iterations: 55476\ncpu: 12643.727017088524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10389.862069989746,
            "unit": "ns/iter",
            "extra": "iterations: 67324\ncpu: 10389.826807676302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68939.37180243757,
            "unit": "ns/iter",
            "extra": "iterations: 10164\ncpu: 68937.44588744595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142324.66795368423,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 142321.96707986182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36893.87819937263,
            "unit": "ns/iter",
            "extra": "iterations: 18949\ncpu: 36892.796453638686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36884.65477069193,
            "unit": "ns/iter",
            "extra": "iterations: 18970\ncpu: 36883.93252503976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37003.022899150965,
            "unit": "ns/iter",
            "extra": "iterations: 18909\ncpu: 37001.59712306327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73199.87785460643,
            "unit": "ns/iter",
            "extra": "iterations: 9546\ncpu: 73200.7961449832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65660.52209401786,
            "unit": "ns/iter",
            "extra": "iterations: 10659\ncpu: 65659.2363261088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20374.541665451114,
            "unit": "ns/iter",
            "extra": "iterations: 34405\ncpu: 20374.396163348556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97839.57603687358,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97836.79653679604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78439.73197720152,
            "unit": "ns/iter",
            "extra": "iterations: 8947\ncpu: 78435.12909355134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78819.83752525969,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 78816.23624522856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78149.83847284435,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 78144.71930418994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141236.76985089004,
            "unit": "ns/iter",
            "extra": "iterations: 4962\ncpu: 141221.8661829925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 613344.0376532191,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 613305.2539404514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 525969.202238793,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 525904.0298507521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 521119.98075508815,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 521116.06217617006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 524181.48355751345,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 524148.5799701059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340443.87536371825,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 340413.33656643826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 509133.54081630544,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 509120.55393586744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19933.949068534406,
            "unit": "ns/iter",
            "extra": "iterations: 35106\ncpu: 19932.829146014887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98570.88534230854,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 98567.14265714801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78849.34440439154,
            "unit": "ns/iter",
            "extra": "iterations: 8882\ncpu: 78841.47714478598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78016.25039054322,
            "unit": "ns/iter",
            "extra": "iterations: 8962\ncpu: 78012.19593840637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77881.468844037,
            "unit": "ns/iter",
            "extra": "iterations: 8971\ncpu: 77881.03890313098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142872.40297596785,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 142863.37138198034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 613758.6956138843,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 613722.543859658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 523401.46856296534,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 523333.45808383275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 517936.2736686009,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517884.24556213344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 519508.434493048,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 519489.5632864482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 343825.44428081287,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 343805.940108004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 509676.4315866133,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509649.6360989796 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705961317224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8620.75339377696,
            "unit": "ns/iter",
            "extra": "iterations: 81178\ncpu: 8620.18527187169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72170.99982929854,
            "unit": "ns/iter",
            "extra": "iterations: 11716\ncpu: 72169.28132468418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137256.41221613955,
            "unit": "ns/iter",
            "extra": "iterations: 6385\ncpu: 137243.97807361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203157.2749590713,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 203148.07107785824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267778.1593576269,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 267754.7251389749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327576.2772917219,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 327555.6485355648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393829.20820189605,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 393808.5624155026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 457078.71428571857,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 457069.8471270433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 521457.25748502085,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 521412.0359281436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5997.450321731672,
            "unit": "ns/iter",
            "extra": "iterations: 117023\ncpu: 5997.0851883817695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5136.748720434842,
            "unit": "ns/iter",
            "extra": "iterations: 136179\ncpu: 5136.641479229544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5040.990441129653,
            "unit": "ns/iter",
            "extra": "iterations: 139347\ncpu: 5040.632378163861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5066.804469232977,
            "unit": "ns/iter",
            "extra": "iterations: 137697\ncpu: 5066.5642679216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8835.571538665805,
            "unit": "ns/iter",
            "extra": "iterations: 79153\ncpu: 8834.831276136088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31350.655500932982,
            "unit": "ns/iter",
            "extra": "iterations: 26241\ncpu: 31348.919629587315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124935.51791720901,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 124928.87231241773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99443.08357651377,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 99438.43819306634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101772.76717557113,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 101766.22137404565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101467.61355770867,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 101461.34383577995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 294516.9536626977,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 294497.4446337314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2012826.8782608083,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2012726.5217391301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1647281.6998224498,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1647152.0426287742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1650842.943562497,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1650768.6067019417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1646204.711504354,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646110.4424778777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 996737.490238635,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 996683.297180041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1611920.1043477955,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1611728.5217391273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6664166.840000689,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6663417.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3746780.95617521,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3746568.1274900483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8402568.415384883,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8402194.615384618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30171.065774516785,
            "unit": "ns/iter",
            "extra": "iterations: 27275\ncpu: 30168.553620531602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127897.01686566373,
            "unit": "ns/iter",
            "extra": "iterations: 6700\ncpu: 127891.08955223889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100859.32825779582,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 100853.19877242707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101843.98099536829,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101838.04489844386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104432.71377918344,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 104421.88531605367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 300348.37925111473,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 300332.0508416347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2035774.3135964742,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2035581.5789473683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1674371.2599279555,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1674281.2274368291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1684788.198198279,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1684679.099099102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1663816.1017857962,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663744.4642857118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 998640.6418554223,
            "unit": "ns/iter",
            "extra": "iterations: 927\ncpu: 998562.6752966527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1629934.984154962,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1629838.3802816921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6713546.510000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6712878.999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3752253.0766125326,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3752056.854838707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31716.316050684334,
            "unit": "ns/iter",
            "extra": "iterations: 26597\ncpu: 31714.42643907207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126990.94647383271,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 126980.46816758618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100656.29219472766,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 100651.91282719414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102158.99197027911,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 102153.2478427618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104652.97580259058,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 104647.16099664626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 292236.2150067253,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 292223.5195154787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2026093.6140351063,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2025895.3947368367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1674934.005405408,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1674891.1711711695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1675645.7849462216,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1674300.1792114624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1651035.0743364086,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650958.9380530918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1003457.331891843,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1003368.9729729722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1626169.0840630585,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1626103.1523642733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3038.9742469274,
            "unit": "ns/iter",
            "extra": "iterations: 231817\ncpu: 3038.78576635882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15811.895371644774,
            "unit": "ns/iter",
            "extra": "iterations: 44357\ncpu: 15811.100840904439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12202.787664922505,
            "unit": "ns/iter",
            "extra": "iterations: 57527\ncpu: 12201.859996175728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12220.715879287343,
            "unit": "ns/iter",
            "extra": "iterations: 57194\ncpu: 12220.465433437148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10131.748809610133,
            "unit": "ns/iter",
            "extra": "iterations: 69095\ncpu: 10131.03987263915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68041.73878344623,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68036.21411192235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133436.71072178372,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133425.57608074558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35594.4604814454,
            "unit": "ns/iter",
            "extra": "iterations: 19649\ncpu: 35591.984324901765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35196.98627795971,
            "unit": "ns/iter",
            "extra": "iterations: 19895\ncpu: 35193.239507413986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35692.80030604576,
            "unit": "ns/iter",
            "extra": "iterations: 19605\ncpu: 35691.49196633517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71541.63247165125,
            "unit": "ns/iter",
            "extra": "iterations: 9787\ncpu: 71534.70930826581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62991.98522788956,
            "unit": "ns/iter",
            "extra": "iterations: 11102\ncpu: 62986.90326067326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19504.449329399315,
            "unit": "ns/iter",
            "extra": "iterations: 35938\ncpu: 19503.62290611638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92603.50878827853,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 92595.85885485973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74834.97613187089,
            "unit": "ns/iter",
            "extra": "iterations: 9343\ncpu: 74832.06678796983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75948.77917844342,
            "unit": "ns/iter",
            "extra": "iterations: 9202\ncpu: 75942.61030210754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75399.5775556304,
            "unit": "ns/iter",
            "extra": "iterations: 9303\ncpu: 75394.73288186632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138512.6755097987,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138509.02791526218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 587037.0143339537,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 586996.5430016821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 499546.82437273534,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 499528.74551971076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 498979.097004315,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 498928.887303853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 501275.07686785393,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 501257.25574712164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324695.63353460573,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 324672.6428239697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 488018.7484320964,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 488002.85714286036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19238.49957423541,
            "unit": "ns/iter",
            "extra": "iterations: 36405\ncpu: 19236.97843702794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93139.19544364254,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 93133.04023447796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75175.29369427988,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 75171.28585239961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75853.37722342239,
            "unit": "ns/iter",
            "extra": "iterations: 9220\ncpu: 75849.58785249437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75499.64251051185,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 75493.27078615193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138476.48548290067,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 138472.4076634381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 589565.0794314423,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 589527.5919732507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 499951.0664760233,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 499926.23302359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 495592.795615238,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495546.5346534667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 495729.5230660509,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 495703.1227821205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 325094.81496979954,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 325087.1222687165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 487587.5135888265,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487552.75261323724 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705962759236,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8265.239994333446,
            "unit": "ns/iter",
            "extra": "iterations: 84702\ncpu: 8265.123609832117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71703.68398268973,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 71699.28698752228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135804.15774646692,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 135797.8090766823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203349.50991238817,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 203334.43983402496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263800.7596448271,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 263797.0912431107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325790.1274584071,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 325770.53706505283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388475.31654037314,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 388465.18056174775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 451077.7202906001,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 451055.9937727039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 514581.7658190621,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 514553.1046717925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6128.894715646455,
            "unit": "ns/iter",
            "extra": "iterations: 114224\ncpu: 6128.592064714947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5280.638216099797,
            "unit": "ns/iter",
            "extra": "iterations: 132698\ncpu: 5280.313945952475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5214.433289023073,
            "unit": "ns/iter",
            "extra": "iterations: 133906\ncpu: 5214.100936477827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5236.830389852645,
            "unit": "ns/iter",
            "extra": "iterations: 134025\ncpu: 5236.773736243248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8553.362399648604,
            "unit": "ns/iter",
            "extra": "iterations: 81962\ncpu: 8552.736634049932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32384.909471952553,
            "unit": "ns/iter",
            "extra": "iterations: 25528\ncpu: 32383.429959260448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134444.44378420472,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 134437.13838936665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99453.8148793033,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 99448.73491179218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99536.50529377857,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 99531.76265270473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101781.44989872297,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101777.7076134876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270261.7602120513,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270245.49423136865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2025963.5742357853,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2025889.5196506563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1654794.320855682,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1654723.3511586413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1698604.3388277015,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1698524.7252747288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1683697.568840676,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1683666.123188404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1008653.3656148037,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 1008632.2089227402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1634042.8295255331,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1633936.028119506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6758532.740000192,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6758322.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3805386.004064826,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3805147.5609756107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8513152.674419144,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8512829.457364328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29657.478451717416,
            "unit": "ns/iter",
            "extra": "iterations: 27566\ncpu: 29655.887687731214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136641.0257394042,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 136633.5571542763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105945.97799208216,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 105941.1968348167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102766.2010569283,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 102764.19649291423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105260.08626039374,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 105255.2562988699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286306.93241016037,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286294.8236069913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2026816.403930083,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2026730.1310043712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1674276.528028853,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1674218.6256781307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1716881.916820617,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716810.166358595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1698347.4090908533,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1698276.7272727208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1005105.4571118706,
            "unit": "ns/iter",
            "extra": "iterations: 921\ncpu: 1005060.3691639528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1638479.89045942,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1638431.9787985827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6797530.989999814,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6797087.000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3741603.943774727,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3741474.6987951854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29072.638184386316,
            "unit": "ns/iter",
            "extra": "iterations: 28310\ncpu: 29071.858000706467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129878.98807886837,
            "unit": "ns/iter",
            "extra": "iterations: 6543\ncpu: 129874.91976157679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99543.18977591641,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 99541.32819794549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102845.61931201225,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 102841.81050090573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103652.4794687404,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 103649.22627025703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 267077.74112930184,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 267074.4214748527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2031934.8235293417,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2031894.9891067627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1677353.5776173498,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1677321.8411552336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1717378.243542567,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1717376.014760147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1703474.3339417696,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1703425.182481758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1004214.9007550754,
            "unit": "ns/iter",
            "extra": "iterations: 927\ncpu: 1004193.8511326856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1633364.6883803224,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1633298.7676056307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3127.1633971161828,
            "unit": "ns/iter",
            "extra": "iterations: 223884\ncpu: 3127.160493827184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15726.021450779413,
            "unit": "ns/iter",
            "extra": "iterations: 44707\ncpu: 15725.35620820014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11835.988191108529,
            "unit": "ns/iter",
            "extra": "iterations: 59108\ncpu: 11835.979901197728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12826.001394444147,
            "unit": "ns/iter",
            "extra": "iterations: 54502\ncpu: 12825.79721845066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10190.778248465098,
            "unit": "ns/iter",
            "extra": "iterations: 68694\ncpu: 10190.361603633492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64337.64910509635,
            "unit": "ns/iter",
            "extra": "iterations: 10895\ncpu: 64334.52960073444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133592.06454683197,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133589.01370906254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35377.24441749635,
            "unit": "ns/iter",
            "extra": "iterations: 19794\ncpu: 35375.13893098913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35460.645166200935,
            "unit": "ns/iter",
            "extra": "iterations: 19705\ncpu: 35459.40116721628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35828.45400593591,
            "unit": "ns/iter",
            "extra": "iterations: 19546\ncpu: 35827.44295508038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71011.92398493989,
            "unit": "ns/iter",
            "extra": "iterations: 9827\ncpu: 71010.08446117809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63161.17579640713,
            "unit": "ns/iter",
            "extra": "iterations: 11081\ncpu: 63161.068495623054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19436.500387789463,
            "unit": "ns/iter",
            "extra": "iterations: 36102\ncpu: 19436.466123760772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90616.20991328997,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90616.07350847819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72657.61782712306,
            "unit": "ns/iter",
            "extra": "iterations: 9637\ncpu: 72656.58399917012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74716.78145695721,
            "unit": "ns/iter",
            "extra": "iterations: 9362\ncpu: 74715.05020294806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73640.43113583451,
            "unit": "ns/iter",
            "extra": "iterations: 9526\ncpu: 73639.4184337606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 136209.0268586948,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 136207.16231996714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 571119.4233576814,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 571112.9764801293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 487920.9157967928,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 487913.5699373687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 497344.41631199257,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 497332.9787234041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 497066.7275959523,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497050.7823613017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 327847.04969524324,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 327842.1472105058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 480913.7115384519,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480908.99725274765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19286.630572544655,
            "unit": "ns/iter",
            "extra": "iterations: 36294\ncpu: 19286.17126797815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90647.34272360512,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 90643.96988186344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72237.66666666782,
            "unit": "ns/iter",
            "extra": "iterations: 9705\ncpu: 72237.59917568298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73013.27890233844,
            "unit": "ns/iter",
            "extra": "iterations: 9584\ncpu: 73010.80968280433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73223.7745344141,
            "unit": "ns/iter",
            "extra": "iterations: 9558\ncpu: 73223.7811257588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137522.9685966519,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 137518.78312070787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 573614.0179886114,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 573592.0686835622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 487772.4376306437,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487752.9616724782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 495005.9766454655,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495005.5201698513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 495279.3248587934,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 495255.0847457604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 326371.5712290827,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 326371.13594040775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 481388.7804542267,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 481370.1995870584 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}