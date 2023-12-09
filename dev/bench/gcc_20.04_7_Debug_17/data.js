window.BENCHMARK_DATA = {
  "lastUpdate": 1702084994946,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Debug c++-17": [
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
        "date": 1702084755912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14615.277167200606,
            "unit": "ns/iter",
            "extra": "iterations: 47769\ncpu: 14611.182984780928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125536.94777875488,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 125532.61253309796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235572.88814015893,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 235570.59299191379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342294.3737133803,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 342284.87727632636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451995.29225907935,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 451984.2022116902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561933.1254040016,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561897.8668390433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 556777.5310000229,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556722.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625149.6050000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625114.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716120.7782945799,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 716111.2403100767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11683.495184684609,
            "unit": "ns/iter",
            "extra": "iterations: 59913\ncpu: 11683.29410979253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9537.944953627812,
            "unit": "ns/iter",
            "extra": "iterations: 73320\ncpu: 9537.759138025083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9521.985473964342,
            "unit": "ns/iter",
            "extra": "iterations: 73592\ncpu: 9521.67898684638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9956.549860281828,
            "unit": "ns/iter",
            "extra": "iterations: 73004\ncpu: 9929.175113692407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16520.628492542775,
            "unit": "ns/iter",
            "extra": "iterations: 42376\ncpu: 16520.152916745334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51050.99909999922,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51048.599999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277874.7992866433,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 277875.486381323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 218997.1147119351,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 218986.49691358037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 219326.96119249574,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 219319.37805191474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224647.22324159247,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 224625.68807339398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 590603.272312694,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 590477.459283388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3844274.7148759593,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3844082.2314049606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3123672.3926176014,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3123530.2013422805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3182766.593333402,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3182657.3333333265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3112842.174377195,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3112666.1921708183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1810814.6003898978,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1810758.0896686215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3032411.29641695,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3032264.8208469027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6947.619891576479,
            "unit": "ns/iter",
            "extra": "iterations: 100716\ncpu: 6947.301322530697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69893.67081205976,
            "unit": "ns/iter",
            "extra": "iterations: 12142\ncpu: 69890.68522483943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134385.3760147035,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 134382.30969520574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196790.86634899242,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 196780.84864987564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260650.65487256,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 260635.8920539729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 323493.43712798203,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 323482.5520833333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 385921.5425011038,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 385911.214953271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 448941.0866426097,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448941.98040227103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 511972.16911335784,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 511953.08279506885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5095.416117173558,
            "unit": "ns/iter",
            "extra": "iterations: 137096\ncpu: 5095.3682091381315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4255.266540907343,
            "unit": "ns/iter",
            "extra": "iterations: 164335\ncpu: 4255.035750144523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4244.549328128924,
            "unit": "ns/iter",
            "extra": "iterations: 164987\ncpu: 4244.393800723699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4366.312232331572,
            "unit": "ns/iter",
            "extra": "iterations: 163215\ncpu: 4366.1366908678965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7640.53672452217,
            "unit": "ns/iter",
            "extra": "iterations: 91492\ncpu: 7640.1980501027165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32250.645972433664,
            "unit": "ns/iter",
            "extra": "iterations: 25611\ncpu: 32249.40455273113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135521.50453893613,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 135517.37537824467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109883.65686528689,
            "unit": "ns/iter",
            "extra": "iterations: 7720\ncpu: 109877.66839378167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109081.18623689197,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 109078.56229214645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110409.45700657983,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 110403.4162691771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273503.8850031478,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 273496.0302457466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2104327.952702642,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2104213.288288286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1745384.5213357334,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1745326.159554739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1707747.6507353557,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1707650.3676470648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1728819.7546468663,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1728722.1189591119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1023620.0454042348,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 1023563.3444075277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1670912.0954954883,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670829.5495495424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7497.1029625097135,
            "unit": "ns/iter",
            "extra": "iterations: 93063\ncpu: 7496.758110097509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54154.59300000407,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54152.58999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99955.93603560979,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 99950.3280224927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144939.49940888787,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 144935.4500928889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190034.1915034092,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 190024.82940788034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235389.9057833237,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 235384.65924518218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280049.42192046274,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 280033.074684772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326467.0603448334,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 326451.16191903985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371235.6837606643,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 371228.16239316436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6283.175299592469,
            "unit": "ns/iter",
            "extra": "iterations: 111318\ncpu: 6282.845541601564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5063.830537301225,
            "unit": "ns/iter",
            "extra": "iterations: 138172\ncpu: 5063.607677387645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5196.667192794505,
            "unit": "ns/iter",
            "extra": "iterations: 133681\ncpu: 5196.559720528715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5151.579469905799,
            "unit": "ns/iter",
            "extra": "iterations: 135674\ncpu: 5151.520556628406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8734.854958213631,
            "unit": "ns/iter",
            "extra": "iterations: 80170\ncpu: 8734.512910066094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27405.065384105877,
            "unit": "ns/iter",
            "extra": "iterations: 30252\ncpu: 27402.932037551094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140933.72264213036,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 140926.71705553762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108588.4341772196,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 108584.94936708802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109002.28021908067,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 108997.79645904928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106038.63157895145,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 106034.01191658326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 315384.8601140729,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 315372.05635692435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1750205.7255640046,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1750131.3909774383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1383379.7741456747,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1383306.8350668848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1375027.1999999683,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1374939.8518518563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371953.7071005479,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1371884.0236686422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 786303.5448392724,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 786238.4940778367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1337407.204610969,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1337355.3314121093 ns\nthreads: 1"
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
        "date": 1702084994309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14587.106848566402,
            "unit": "ns/iter",
            "extra": "iterations: 47572\ncpu: 14585.588161103173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125015.07011612607,
            "unit": "ns/iter",
            "extra": "iterations: 6803\ncpu: 125001.57283551375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234931.1712051748,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 234908.76246966835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343237.7655445468,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 343191.2475247525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452576.5399477835,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 452545.95300261123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559970.1655927864,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559909.2783505155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538870.4609999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538851.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625343.2139999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625303.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 709550.9067796685,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 709535.9013867492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11701.606773431226,
            "unit": "ns/iter",
            "extra": "iterations: 57135\ncpu: 11701.345935066069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9704.996855777821,
            "unit": "ns/iter",
            "extra": "iterations: 72832\ncpu: 9704.252251757463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9538.32460782983,
            "unit": "ns/iter",
            "extra": "iterations: 73310\ncpu: 9538.079388896476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9666.970634547808,
            "unit": "ns/iter",
            "extra": "iterations: 72398\ncpu: 9665.68689742812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16698.72933174222,
            "unit": "ns/iter",
            "extra": "iterations: 41900\ncpu: 16696.651551312665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52513.39140000084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52506.65000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 279082.6541996829,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 279037.87638668803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 213621.96742671536,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 213594.38737158597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 210398.07648373448,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 210393.12143034465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 209227.53611793462,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 209216.83046683006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580777.1776913096,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 580762.9701686113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4032897.3076923783,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4032072.22222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3111508.599999979,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111076.6666666716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3093125.3720930717,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092811.2956810677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3101990.180000011,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3101581.3333333377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1791657.7263969083,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791468.5934489444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3020352.4019607264,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3019973.8562091417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6923.922851099209,
            "unit": "ns/iter",
            "extra": "iterations: 101168\ncpu: 6923.278111655868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70122.8755756587,
            "unit": "ns/iter",
            "extra": "iterations: 12160\ncpu: 70111.29934210538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135135.95985850645,
            "unit": "ns/iter",
            "extra": "iterations: 6502\ncpu: 135120.91664103384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198701.5111009385,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 198675.18883039575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262206.717824778,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 262183.4138972808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 323701.73172569415,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 323646.2697814629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 386977.3713776183,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386966.74097191275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449229.8725388624,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 449217.72020725574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 514459.66666667146,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 514442.97472075257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5235.512912980045,
            "unit": "ns/iter",
            "extra": "iterations: 133935\ncpu: 5235.476910441652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4338.771832714529,
            "unit": "ns/iter",
            "extra": "iterations: 161329\ncpu: 4338.475413595817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4323.2323236685315,
            "unit": "ns/iter",
            "extra": "iterations: 162067\ncpu: 4323.200281365084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4332.3312354326445,
            "unit": "ns/iter",
            "extra": "iterations: 161749\ncpu: 4332.1967987437565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7680.184571428724,
            "unit": "ns/iter",
            "extra": "iterations: 91000\ncpu: 7680.12307692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32313.237691402366,
            "unit": "ns/iter",
            "extra": "iterations: 25470\ncpu: 32312.575579112738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135798.608980503,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 135797.41131351926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109291.67904712861,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109288.72950819675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107943.25012671316,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 107942.4227065381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108593.71248408013,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 108591.21019108266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269675.3737969696,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 269673.3623098407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2103561.7020315505,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2103434.5372460615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1735464.804104448,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735450.5597014974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1722414.9643527505,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1722379.7373358295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1734455.7238805976,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734417.1641791095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1022403.9342105209,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 1022356.798245612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1680195.351351309,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1680152.612612606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7300.227850746747,
            "unit": "ns/iter",
            "extra": "iterations: 95703\ncpu: 7300.001044899286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53545.91010000149,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53545.54999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98793.33899666926,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 98789.65675582558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143197.96606786427,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 143194.4444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188128.59787094887,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 188104.77949163615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232844.47415186724,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 232821.97092084045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276975.68273220473,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 276941.36610277614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321725.68627449253,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 321700.591934886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366101.3254736884,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 366069.3473684211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6122.886999178357,
            "unit": "ns/iter",
            "extra": "iterations: 114362\ncpu: 6122.394676553453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5075.770186694555,
            "unit": "ns/iter",
            "extra": "iterations: 138408\ncpu: 5075.035402577914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5024.10010765033,
            "unit": "ns/iter",
            "extra": "iterations: 139340\ncpu: 5023.608439787636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5082.405969238022,
            "unit": "ns/iter",
            "extra": "iterations: 137572\ncpu: 5082.196231791295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8681.887160895138,
            "unit": "ns/iter",
            "extra": "iterations: 79990\ncpu: 8681.450181272683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26955.112240169005,
            "unit": "ns/iter",
            "extra": "iterations: 30212\ncpu: 26953.9487620811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133435.31201248043,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 133428.09672386936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106771.5772165947,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 106770.76453447939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103957.30642403477,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 103954.97068881146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100489.80294048195,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 100488.91391984922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 310009.2388758775,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 309999.7658079637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1734204.2485981404,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1734154.5794392629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376229.2603550411,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1376091.2721893375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1369068.5315711987,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1368961.3803230477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1359336.5349853686,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1359156.2682215874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767638.9105219601,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 767601.8227009175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1324022.8168812457,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1323864.6638054452 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}