window.BENCHMARK_DATA = {
  "lastUpdate": 1702310517446,
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
        "date": 1702085603792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14745.980369515019,
            "unit": "ns/iter",
            "extra": "iterations: 47630\ncpu: 14745.593113583878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124870.9802126483,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 124868.20732427643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239322.23757805664,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 239318.92478957368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344551.0714285718,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 344529.2098962492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 455567.8713513402,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 455546.4324324324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563461.1196359048,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 563453.9011703512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 549184.7540000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549147.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630604.6160000277,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630597.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 720171.8322932792,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 720152.8081123244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11911.757422892528,
            "unit": "ns/iter",
            "extra": "iterations: 59074\ncpu: 11911.436503368674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9837.50736317999,
            "unit": "ns/iter",
            "extra": "iterations: 71097\ncpu: 9837.375697990079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9785.798245123984,
            "unit": "ns/iter",
            "extra": "iterations: 71572\ncpu: 9785.540434806917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9895.910555140978,
            "unit": "ns/iter",
            "extra": "iterations: 71027\ncpu: 9895.833978627837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16839.845157898602,
            "unit": "ns/iter",
            "extra": "iterations: 39931\ncpu: 16839.613332999445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52177.15830000316,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52174.57999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 280523.412807897,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 280521.83908045973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221964.83437337546,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 221954.39417576743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 220917.51957480918,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 220905.70391495948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231178.4609674927,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 231174.96800614233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 589811.0655307886,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 589784.4692005245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3906594.778242575,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3906520.920502092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3167142.602040708,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167063.6054421784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3236682.2559726173,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3236595.2218429986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3215546.0580203175,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3215388.7372013684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1828433.9115913655,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828302.7504911562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3075151.109271513,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3074998.6754966886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7021.563192280738,
            "unit": "ns/iter",
            "extra": "iterations: 99490\ncpu: 7021.066438838073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71152.81239558586,
            "unit": "ns/iter",
            "extra": "iterations: 11972\ncpu: 71149.09789508834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136729.2596304448,
            "unit": "ns/iter",
            "extra": "iterations: 6386\ncpu: 136725.227059192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200755.68391866444,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 200745.33271719032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265951.60926547454,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 265939.71350198024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329517.5232866301,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 329512.1544869381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392926.4891501007,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 392914.3761301995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 457474.70813650073,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 457464.8818897649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527448.3365326875,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 527439.1721655636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5222.977071270697,
            "unit": "ns/iter",
            "extra": "iterations: 134024\ncpu: 5222.945144153307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4339.664948805662,
            "unit": "ns/iter",
            "extra": "iterations: 161053\ncpu: 4339.685693529466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4350.442696517399,
            "unit": "ns/iter",
            "extra": "iterations: 160889\ncpu: 4350.275655886971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4356.161202304572,
            "unit": "ns/iter",
            "extra": "iterations: 160891\ncpu: 4356.065286436166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7676.850566891232,
            "unit": "ns/iter",
            "extra": "iterations: 91111\ncpu: 7676.407898058345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32122.27062346815,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 32120.827661312145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135872.91775374275,
            "unit": "ns/iter",
            "extra": "iterations: 6286\ncpu: 135865.57429207736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109355.10459608078,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 109347.50992190445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108183.44718130917,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108178.0345352974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108649.35129283098,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 108644.89873901385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269785.74520123034,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 269771.2383900933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2135057.013729951,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2134938.2151029804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1762157.1096407885,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761979.584120979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1765948.3931947032,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1765844.9905482007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1760399.3156900108,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1760317.2022684363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1045843.3213885912,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 1045782.1948488246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1715032.6477064416,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1714903.1192660546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7341.87096300156,
            "unit": "ns/iter",
            "extra": "iterations: 95275\ncpu: 7341.628968774586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54280.56590000097,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54276.02999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99645.50179919165,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99638.79280325017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144536.30800268918,
            "unit": "ns/iter",
            "extra": "iterations: 5948\ncpu: 144532.16207128347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189941.80008757644,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 189932.45018611755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234487.85644372078,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 234473.92604676468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279633.8430232503,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 279618.47545219545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324554.5429745963,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 324539.4245142008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368993.31292516994,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368986.30952380993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6294.614805903648,
            "unit": "ns/iter",
            "extra": "iterations: 111388\ncpu: 6294.331525837607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5211.731333971998,
            "unit": "ns/iter",
            "extra": "iterations: 134643\ncpu: 5211.376009150161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5200.77904123722,
            "unit": "ns/iter",
            "extra": "iterations: 134903\ncpu: 5200.58708850065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5238.240810436947,
            "unit": "ns/iter",
            "extra": "iterations: 134446\ncpu: 5237.926751260683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8697.860229919714,
            "unit": "ns/iter",
            "extra": "iterations: 80289\ncpu: 8697.780517879235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28925.05523175226,
            "unit": "ns/iter",
            "extra": "iterations: 28824\ncpu: 28920.961698584477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141412.4323165716,
            "unit": "ns/iter",
            "extra": "iterations: 6065\ncpu: 141409.7609233297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111772.10612191372,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111766.46651873097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111618.35329419124,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 111613.6333985652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108574.82483510762,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 108567.88432267855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 318406.12093183934,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 318397.80746830965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1746978.5939849908,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1746849.9999999932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1390376.9013452556,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1390308.5201793553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1396034.8601503733,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1395912.1804511358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1380178.5275707932,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1380101.341281682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 775864.9840470054,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 775819.8152812716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1338515.625180878,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1338460.636758333 ns\nthreads: 1"
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
        "date": 1702244235532,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16182.958038411127,
            "unit": "ns/iter",
            "extra": "iterations: 43373\ncpu: 16181.405482673556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153469.10214762672,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 153456.34362028513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 292064.50419040554,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 292050.5196111297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424582.17405233404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 424577.36252002127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 567000.5380645101,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 566989.1612903225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 568344.0470000107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568336.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 678369.5894428247,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 678344.428152493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 787381.7809036775,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 787334.0153452691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 903677.2009661833,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 903614.9758454106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13098.355880538093,
            "unit": "ns/iter",
            "extra": "iterations: 53473\ncpu: 13097.374375853233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10854.703004305453,
            "unit": "ns/iter",
            "extra": "iterations: 64341\ncpu: 10854.416313081845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10747.02675329041,
            "unit": "ns/iter",
            "extra": "iterations: 65263\ncpu: 10746.867290807984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10894.44955473403,
            "unit": "ns/iter",
            "extra": "iterations: 64119\ncpu: 10893.825543130726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18460.965321614243,
            "unit": "ns/iter",
            "extra": "iterations: 37545\ncpu: 18459.98934611795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69497.48440039043,
            "unit": "ns/iter",
            "extra": "iterations: 12308\ncpu: 69492.80955476113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 353063.3447563929,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 353045.210569777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285956.459946598,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 285941.2883845121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 279435.43044189893,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 279423.56792144064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284217.7946339867,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 284216.72739317606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568633.9630000248,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568588.0999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4802506.494845467,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4802332.474226796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3928805.2217572597,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3928610.04184101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3877937.174999957,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3877763.333333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3920440.0000000186,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3920394.5378151294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2264790.2420538063,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2264762.836185818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8284.094776189952,
            "unit": "ns/iter",
            "extra": "iterations: 84536\ncpu: 8284.139301599316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98273.92320956332,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 98271.69789631022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192440.99586686774,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 192441.78812268894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283176.9944948174,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 283169.98056994757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371753.2105038514,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371746.49871904287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462665.12095489795,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 462666.8965517242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 551829.6257124768,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 551812.3495883468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514303.06299999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514305.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 586859.5459999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586862.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6627.12855978931,
            "unit": "ns/iter",
            "extra": "iterations: 105554\ncpu: 6626.823237395066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5421.715720439413,
            "unit": "ns/iter",
            "extra": "iterations: 128845\ncpu: 5421.400908067831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5361.014354212967,
            "unit": "ns/iter",
            "extra": "iterations: 131181\ncpu: 5360.9691952340445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5488.403860750045,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5488.3794082895465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9547.387296172315,
            "unit": "ns/iter",
            "extra": "iterations: 73285\ncpu: 9547.43262604899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52201.00953695553,
            "unit": "ns/iter",
            "extra": "iterations: 15938\ncpu: 52200.169406450295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216519.31947262245,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 216517.67241379234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178068.23537951242,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 178068.8718374111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174765.88438010184,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 174762.90783034294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 180933.50684932002,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 180933.3192834562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 379521.38203227,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 379513.73746183945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3053856.2442997172,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3053704.5602605892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2503725.5415549194,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2503565.415549596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2478071.0398936076,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477873.670212763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2489635.736559137,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2489585.7526881592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1495214.69565216,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1495184.541062799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2433873.364583302,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433841.9270833465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7336.945350904811,
            "unit": "ns/iter",
            "extra": "iterations: 95610\ncpu: 7336.899905867598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53577.602100000375,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53573.16999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98326.80395311535,
            "unit": "ns/iter",
            "extra": "iterations: 8702\ncpu: 98321.14456446786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143985.094099951,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 143939.0105298349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190131.989294295,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 190119.16102250243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235210.58206522375,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 235198.91304347874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279824.47651441675,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 279805.08584386157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325858.2554306993,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 325839.36329588015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370351.64185453183,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 370334.19821352634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6199.035546475841,
            "unit": "ns/iter",
            "extra": "iterations: 112585\ncpu: 6198.8657458809175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5098.735603008339,
            "unit": "ns/iter",
            "extra": "iterations: 137494\ncpu: 5098.764309715306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5109.828764477399,
            "unit": "ns/iter",
            "extra": "iterations: 137197\ncpu: 5109.712311493705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5150.843780502701,
            "unit": "ns/iter",
            "extra": "iterations: 136257\ncpu: 5150.772437379373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8752.832122184112,
            "unit": "ns/iter",
            "extra": "iterations: 79814\ncpu: 8752.874182474252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28991.74745533481,
            "unit": "ns/iter",
            "extra": "iterations: 28098\ncpu: 28991.11324649445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134189.7402821326,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 134190.25078369828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105329.9045448985,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 105327.44180317775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105550.40907409799,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 105550.84453211544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102140.07898837625,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102137.37264772932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330770.8041606822,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 330771.95121951145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1757159.7161654446,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1757102.8195488637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1405699.9036144482,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1405690.2108433752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1393697.6832578976,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1393628.8084464585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1379410.9762611946,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1379334.5697329342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 768710.5095435744,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 768671.7842323629 ns\nthreads: 1"
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
        "date": 1702285098535,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16324.302965319503,
            "unit": "ns/iter",
            "extra": "iterations: 43368\ncpu: 16323.519645821803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 154184.60296242347,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 154180.8526011561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 292346.86333109776,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 292330.7253190061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425625.5558838023,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 425624.3229935993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 572479.7082520949,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 572429.30474334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 582331.7990000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582318.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 682758.6897058947,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 682728.5294117646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 788409.743415461,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 788397.7060322866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 898234.7432170489,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 898205.717054263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13416.769536597745,
            "unit": "ns/iter",
            "extra": "iterations: 53323\ncpu: 13416.46569022749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10942.243312539995,
            "unit": "ns/iter",
            "extra": "iterations: 63963\ncpu: 10941.974266372747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10885.176211299391,
            "unit": "ns/iter",
            "extra": "iterations: 56943\ncpu: 10885.157086911448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10860.068327412833,
            "unit": "ns/iter",
            "extra": "iterations: 64469\ncpu: 10859.811692441326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18503.82855108418,
            "unit": "ns/iter",
            "extra": "iterations: 37918\ncpu: 18502.874624189033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69963.7832374672,
            "unit": "ns/iter",
            "extra": "iterations: 12170\ncpu: 69963.03204601487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 353438.38059701707,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 353430.3067993365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.3910486704,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 288087.161058477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 280480.5280419795,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 280476.8776648075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 274264.2699228717,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 274256.16966581024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 563120.9059999946,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563108.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4811659.6082474375,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4811587.113402066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3963965.0041842274,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3963809.205020926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3879304.8166667176,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3879066.6666666567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3893661.2887027403,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3893414.2259414243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2273598.755501188,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2273424.9388753087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8511.97217050274,
            "unit": "ns/iter",
            "extra": "iterations: 80562\ncpu: 8511.491770313522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98176.5267376599,
            "unit": "ns/iter",
            "extra": "iterations: 8733\ncpu: 98171.49891217217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 189145.10259739644,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 189136.55844155894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 280168.78394066455,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 280150.4353434377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369962.10945485445,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369942.75979556976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 459037.16701900517,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 459018.2875264275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 548556.5447618986,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 548510.2222222225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512187.2060000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512171.10000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584690.3110000312,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584654.1999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6685.335366552478,
            "unit": "ns/iter",
            "extra": "iterations: 104760\ncpu: 6684.9761359297145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5505.665746920794,
            "unit": "ns/iter",
            "extra": "iterations: 127209\ncpu: 5505.389555770455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5382.484868512033,
            "unit": "ns/iter",
            "extra": "iterations: 130126\ncpu: 5382.3540260977425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5449.326559948604,
            "unit": "ns/iter",
            "extra": "iterations: 128001\ncpu: 5449.002742166088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9504.770321425236,
            "unit": "ns/iter",
            "extra": "iterations: 73703\ncpu: 9504.29154851229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51365.901094118046,
            "unit": "ns/iter",
            "extra": "iterations: 16086\ncpu: 51363.4216088527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214774.98573930288,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 214767.67575681917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172527.81964572752,
            "unit": "ns/iter",
            "extra": "iterations: 4968\ncpu: 172517.16988727901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172406.78961143707,
            "unit": "ns/iter",
            "extra": "iterations: 4967\ncpu: 172400.98651097165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 173464.36310247143,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 173456.80437423973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387495.46201965533,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 387485.0759606784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3039867.547231189,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3039688.2736156373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2498864.9892762396,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2498684.986595173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2472581.341269883,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472439.1534391507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2494515.19571041,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2494354.6916889977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509326.6495176365,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1509246.463022508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2420785.568831109,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2420623.116883125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7389.140801709821,
            "unit": "ns/iter",
            "extra": "iterations: 94523\ncpu: 7388.67259820362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54631.28220000044,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54626.62999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100611.50746619758,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 100603.35097001778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146451.61217568276,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 146444.76852636904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192848.5082258829,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 192844.10849266427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237553.09163236522,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 237547.8737997256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283711.82601572736,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 283707.56880733755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330183.0779467658,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 330175.55133079895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375623.3499999964,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 375622.45689655084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6259.1732412858155,
            "unit": "ns/iter",
            "extra": "iterations: 111971\ncpu: 6258.883996749117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5198.048737435184,
            "unit": "ns/iter",
            "extra": "iterations: 135399\ncpu: 5197.999246670927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5156.248252724012,
            "unit": "ns/iter",
            "extra": "iterations: 136212\ncpu: 5156.131618359645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5153.713161891317,
            "unit": "ns/iter",
            "extra": "iterations: 135634\ncpu: 5153.437928542998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8729.007081639567,
            "unit": "ns/iter",
            "extra": "iterations: 79925\ncpu: 8729.003440725775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30448.60720131085,
            "unit": "ns/iter",
            "extra": "iterations: 26884\ncpu: 30446.82710906128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137081.99342948783,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 137081.77884615326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106398.78608760882,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 106396.11747137812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108982.57362664865,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 108982.33723296024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100912.47319209442,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 100907.43283228777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327127.00638751365,
            "unit": "ns/iter",
            "extra": "iterations: 2818\ncpu: 327126.4726756575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1772082.3422053377,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1771988.4030418207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1408581.5948406856,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1408498.3308042618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1405388.4166666346,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1405290.1515151549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1396814.465465468,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1396727.0270270174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773574.4278565474,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 773537.5312760599 ns\nthreads: 1"
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
        "date": 1702309505247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17256.634360063144,
            "unit": "ns/iter",
            "extra": "iterations: 37660\ncpu: 17256.189591078066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160688.91781338357,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 160684.0339302545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 304414.508747385,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 304404.79356193147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 446175.4236295973,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 446185.2048962213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 595488.4037940394,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 595481.1653116532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 597677.1210000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597672.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 711689.9708141155,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 711682.8725038407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 834561.3685152389,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 834549.8211091235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 941104.4208925372,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 941087.2210953357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13632.894417688858,
            "unit": "ns/iter",
            "extra": "iterations: 51287\ncpu: 13632.91477372435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11426.789991194595,
            "unit": "ns/iter",
            "extra": "iterations: 61326\ncpu: 11426.732544108529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11444.429416860992,
            "unit": "ns/iter",
            "extra": "iterations: 61169\ncpu: 11444.69093822032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11463.685755903665,
            "unit": "ns/iter",
            "extra": "iterations: 61099\ncpu: 11463.943763400372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19534.68187801649,
            "unit": "ns/iter",
            "extra": "iterations: 36464\ncpu: 19534.63141728831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69237.11576033877,
            "unit": "ns/iter",
            "extra": "iterations: 12284\ncpu: 69230.91012699448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 353783.04502270464,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 353776.1255679469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 284959.9529372449,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 284952.5367156209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 282468.3694858951,
            "unit": "ns/iter",
            "extra": "iterations: 3015\ncpu: 282456.91542288597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282676.48782091984,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 282652.3699802499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 589354.1650000316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589332.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4961190.712766012,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 4960940.425531915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4080724.7205238002,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4080644.978165935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4056536.7739129276,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4056476.086956513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4022955.688311685,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4022756.2770562763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2334568.02518893,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2334598.74055416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8963.602231534047,
            "unit": "ns/iter",
            "extra": "iterations: 77794\ncpu: 8963.48561585728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102267.7097893764,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 102269.05217807583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197677.29297492467,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 197675.4009487242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291700.2654569956,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 291704.0658602159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 385287.95202130545,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 385281.9191470459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 479237.2900385463,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 479247.05558612925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 573806.9375000221,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573814.3421052599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 535797.6980000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535809.7999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 610710.5709999701,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610708.9000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6855.160779561201,
            "unit": "ns/iter",
            "extra": "iterations: 102314\ncpu: 6855.248548585729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5807.161391880725,
            "unit": "ns/iter",
            "extra": "iterations: 120700\ncpu: 5807.284175642093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5658.621890910102,
            "unit": "ns/iter",
            "extra": "iterations: 123348\ncpu: 5658.604922657859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5715.992860406759,
            "unit": "ns/iter",
            "extra": "iterations: 122556\ncpu: 5716.11508208495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9863.547699641524,
            "unit": "ns/iter",
            "extra": "iterations: 70902\ncpu: 9863.38467180057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51324.46493023456,
            "unit": "ns/iter",
            "extra": "iterations: 16125\ncpu: 51325.606201550094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214521.62399598083,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 214518.92570281136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176139.07791410672,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 176142.8629856843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172624.6023321303,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 172623.86409328584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174269.8158162282,
            "unit": "ns/iter",
            "extra": "iterations: 4919\ncpu: 174273.59219353533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 418962.52654439793,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 418964.7683397668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3147714.1342281736,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3147681.879194618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2622370.8974358626,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2622363.5327635263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2588456.338889008,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2588418.8888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2572857.4638888645,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2572852.77777779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1528216.7553366171,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1528181.7733990133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2515294.6810810654,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515317.29729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7796.483886740244,
            "unit": "ns/iter",
            "extra": "iterations: 89988\ncpu: 7796.348402009106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57029.70129999585,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57030.350000000144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105077.63256555056,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 105076.66013232002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152800.41053377796,
            "unit": "ns/iter",
            "extra": "iterations: 5639\ncpu: 152802.5004433411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201463.4270132348,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201464.35367834772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250245.60477835088,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 250247.98503166487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297434.1258573537,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 297426.5089163236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346228.9852589618,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 346229.00398406433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 403507.75898134353,
            "unit": "ns/iter",
            "extra": "iterations: 2199\ncpu: 403501.27330604923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6493.982845489521,
            "unit": "ns/iter",
            "extra": "iterations: 108368\ncpu: 6494.1191126531585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5399.793523412974,
            "unit": "ns/iter",
            "extra": "iterations: 130717\ncpu: 5399.614434235776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5396.821225923166,
            "unit": "ns/iter",
            "extra": "iterations: 130416\ncpu: 5396.7695681511705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5361.05749401575,
            "unit": "ns/iter",
            "extra": "iterations: 130344\ncpu: 5361.0047259559515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9010.485167501512,
            "unit": "ns/iter",
            "extra": "iterations: 77701\ncpu: 9010.243111414262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29558.33357400816,
            "unit": "ns/iter",
            "extra": "iterations: 27700\ncpu: 29558.620938628246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139699.99966980168,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 139676.93577678563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108283.22415104072,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 108280.15712113491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108096.2799191244,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 108089.33400732871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104138.8801219477,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 104136.3170731696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330190.15480871237,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 330173.507329281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1837028.8624753745,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1837019.8428290794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1459895.1098901802,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1459791.5227629452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1454124.9312499894,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1454078.4374999837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1445245.219284586,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1445160.1866251912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 805658.8121739285,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 805634.6956521773 ns\nthreads: 1"
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
        "date": 1702310514990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17192.053588938503,
            "unit": "ns/iter",
            "extra": "iterations: 40792\ncpu: 17191.910178466365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160819.92124645459,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 160813.71104815867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 305427.1159929738,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 305407.59226713545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 446292.2563176816,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 446275.9669932955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 593623.9532203387,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 593588.5423728812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 607700.7449999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607698.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 714320.7501927442,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 712805.628373169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 825782.4368845159,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 825773.858549686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 941017.1900909926,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 940964.6107178971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13633.726068692033,
            "unit": "ns/iter",
            "extra": "iterations: 51418\ncpu: 13633.128476409029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11252.022375021814,
            "unit": "ns/iter",
            "extra": "iterations: 62391\ncpu: 11251.786315333915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11314.335622747636,
            "unit": "ns/iter",
            "extra": "iterations: 61879\ncpu: 11314.059697150897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11274.711095344632,
            "unit": "ns/iter",
            "extra": "iterations: 62017\ncpu: 11274.653723978896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19249.00526113823,
            "unit": "ns/iter",
            "extra": "iterations: 36494\ncpu: 19248.37233517839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68565.38846432373,
            "unit": "ns/iter",
            "extra": "iterations: 12431\ncpu: 68564.2587080686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 356935.115978315,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 356915.6028368796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290449.3092953975,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 290438.5709560042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 280132.3394435325,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 280117.7414075287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 280338.4103913138,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 280332.5221966456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591349.952999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591338.099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5003245.166666674,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 5003115.053763436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4199118.763157808,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4198947.368421042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4087091.9824561025,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4086976.7543859608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4057974.0305676647,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4057838.864628818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2367738.6505102254,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2367610.459183674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8951.881436834445,
            "unit": "ns/iter",
            "extra": "iterations: 78144\ncpu: 8951.737817362819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102034.0657706936,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 102026.43910561381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197775.7670033689,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 197769.00112233398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 294272.45903290977,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 294246.9442578911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 385387.300132813,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 385376.9809650288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 480172.15448048,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 480153.3260032974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 572194.1189224706,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 572154.8620236521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 534716.5420000124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534702.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 611271.0840000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611260.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6889.045418279498,
            "unit": "ns/iter",
            "extra": "iterations: 101523\ncpu: 6888.7542724309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5717.00762324516,
            "unit": "ns/iter",
            "extra": "iterations: 122520\ncpu: 5716.961312438814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5725.230942924147,
            "unit": "ns/iter",
            "extra": "iterations: 123117\ncpu: 5724.963246342915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5743.15675879409,
            "unit": "ns/iter",
            "extra": "iterations: 122041\ncpu: 5742.871657885427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9965.729868061864,
            "unit": "ns/iter",
            "extra": "iterations: 70336\ncpu: 9965.479981801662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50071.46255907025,
            "unit": "ns/iter",
            "extra": "iterations: 16506\ncpu: 50068.44177874703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 213978.6324850284,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 213967.86427145725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172383.83390376036,
            "unit": "ns/iter",
            "extra": "iterations: 4967\ncpu: 172376.90759009426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 170428.06339713308,
            "unit": "ns/iter",
            "extra": "iterations: 5016\ncpu: 170418.879585326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 173127.55533158127,
            "unit": "ns/iter",
            "extra": "iterations: 4961\ncpu: 173120.31848417714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 410211.1932733305,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 410194.03126480244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3118285.642140519,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3118180.9364548516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2591398.547222291,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2591228.3333333423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2579949.0747922543,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2579914.6814404423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2565713.56509693,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2565591.412742379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1536823.4710743588,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1536751.5702479295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2506274.798387035,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2506202.150537626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7802.43685090216,
            "unit": "ns/iter",
            "extra": "iterations: 89740\ncpu: 7802.282148428809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57675.424200004956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57673.17000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106680.6083167303,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 106679.0836653389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154743.16376681568,
            "unit": "ns/iter",
            "extra": "iterations: 5575\ncpu: 154737.20179372144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204037.84985768987,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 204030.83491461098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252140.38540145446,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 252118.59854014695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 301350.11257360637,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 301344.2674056095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 350065.5433293056,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 350052.075775898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 398640.30077945744,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 398627.2810637318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6520.21859823399,
            "unit": "ns/iter",
            "extra": "iterations: 107279\ncpu: 6519.972221963283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5311.331309338162,
            "unit": "ns/iter",
            "extra": "iterations: 132082\ncpu: 5311.150648839388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5402.544255148516,
            "unit": "ns/iter",
            "extra": "iterations: 129838\ncpu: 5402.528535559693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5408.280358926336,
            "unit": "ns/iter",
            "extra": "iterations: 129163\ncpu: 5408.078939015008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9082.272438350208,
            "unit": "ns/iter",
            "extra": "iterations: 77089\ncpu: 9082.083046868005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29723.18644438709,
            "unit": "ns/iter",
            "extra": "iterations: 27413\ncpu: 29722.04063765338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142674.17229336526,
            "unit": "ns/iter",
            "extra": "iterations: 6013\ncpu: 142668.66788624687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109875.4289435996,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 109872.09847596742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109539.20211950432,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 109535.15066394376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106846.04293403379,
            "unit": "ns/iter",
            "extra": "iterations: 7989\ncpu: 106842.04531230357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 339946.02442635084,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 339934.6780162842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1880650.1494949395,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1880583.0303030363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1488951.065600031,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1488890.0799999875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1500243.9049918824,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1500211.111111095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1480580.7400319425,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1480530.4625199458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 822118.3785461033,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 822074.3794326315 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}