window.BENCHMARK_DATA = {
  "lastUpdate": 1702285126261,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Debug c++-17": [
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
        "date": 1702084765321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15623.171196342275,
            "unit": "ns/iter",
            "extra": "iterations: 43307\ncpu: 15622.936245872494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130617.87315498636,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 130611.9311193112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259947.7288951737,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 259941.84135977336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363590.03459775704,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 363565.65235514793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 474782.3194520606,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 474750.35616438347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 589471.2500000133,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 589442.3441734414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571725.114000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571686.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 701523.6195261991,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 701471.9310839921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750780.3773898721,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 750738.8196176232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12201.028026711876,
            "unit": "ns/iter",
            "extra": "iterations: 57802\ncpu: 12200.380609667482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10121.618607499442,
            "unit": "ns/iter",
            "extra": "iterations: 68596\ncpu: 10121.200944661507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10093.93727725293,
            "unit": "ns/iter",
            "extra": "iterations: 69305\ncpu: 10093.753697424412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10093.062605460402,
            "unit": "ns/iter",
            "extra": "iterations: 69339\ncpu: 10092.437156578564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17095.837861546566,
            "unit": "ns/iter",
            "extra": "iterations: 41039\ncpu: 17093.827822315365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51900.628799995735,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51896.95000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277350.4975657354,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 277333.88510223967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 217556.501921589,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 217546.4258262878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 217560.76161306442,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 217547.47320061314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 217335.7955589655,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 217325.62531904082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 597267.3181216898,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 597242.8571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4013024.491379283,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4012816.379310341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3270732.764912154,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3270583.8596491166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3238060.0699301735,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3237875.8741258797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3262131.832142805,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3261979.6428571492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1863395.178356759,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863280.7615230442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3156439.716723504,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3156260.40955631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7343.301446202961,
            "unit": "ns/iter",
            "extra": "iterations: 95284\ncpu: 7342.9022711053285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74551.49464332446,
            "unit": "ns/iter",
            "extra": "iterations: 11481\ncpu: 74548.55848793665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143811.16862745027,
            "unit": "ns/iter",
            "extra": "iterations: 6120\ncpu: 143798.4477124181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 210264.52069715993,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 210257.9036552895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 277312.1751754912,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 277298.65985960385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345287.96751190326,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 345281.8541996816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 412575.93919241143,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 412557.9097387165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 482996.9994462645,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 482953.43300110655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 543879.1326658456,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 543875.4067584465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5561.788579706461,
            "unit": "ns/iter",
            "extra": "iterations: 125636\ncpu: 5561.675793562363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4601.8388244606795,
            "unit": "ns/iter",
            "extra": "iterations: 152883\ncpu: 4601.735313932892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4513.910693908246,
            "unit": "ns/iter",
            "extra": "iterations: 155107\ncpu: 4513.8704249324655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4591.376110136133,
            "unit": "ns/iter",
            "extra": "iterations: 152684\ncpu: 4591.321945979945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7762.109388372,
            "unit": "ns/iter",
            "extra": "iterations: 89973\ncpu: 7760.702655241041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33255.10202931222,
            "unit": "ns/iter",
            "extra": "iterations: 24836\ncpu: 33253.45466258666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140506.93269706145,
            "unit": "ns/iter",
            "extra": "iterations: 6077\ncpu: 140501.08606220203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113347.89187742864,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 113341.77706409768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112881.45489520297,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 112875.25868930774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114476.1499932663,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 114473.87908980748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280794.54402314255,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 280779.7557840602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2269289.41605846,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2269175.425790759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1880164.126000068,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1878930.5999999898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1826393.7086613877,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1826325.59055118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1849308.0458167824,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849234.6613545816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1083918.1023255887,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1083836.279069763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1792844.486538478,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1792749.4230769242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7656.842677465184,
            "unit": "ns/iter",
            "extra": "iterations: 90877\ncpu: 7656.3475906994845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55998.84509999811,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55998.140000000516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103324.17412217462,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 103321.74122174122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150379.4134330993,
            "unit": "ns/iter",
            "extra": "iterations: 5747\ncpu: 150376.68348703656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197499.99840402065,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 197494.91564067453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244229.52922903746,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 244217.48093758977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291041.4222520069,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 291027.51340482594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 338042.0669000198,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 338026.2932711004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 386001.2603104022,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 385976.8514412417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6264.177994423738,
            "unit": "ns/iter",
            "extra": "iterations: 111908\ncpu: 6263.871215641467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5318.558270435205,
            "unit": "ns/iter",
            "extra": "iterations: 132357\ncpu: 5317.944649697445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5281.796795940081,
            "unit": "ns/iter",
            "extra": "iterations: 133206\ncpu: 5281.632959476252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5242.695217983146,
            "unit": "ns/iter",
            "extra": "iterations: 134483\ncpu: 5242.452949443527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8892.418159686162,
            "unit": "ns/iter",
            "extra": "iterations: 78867\ncpu: 8891.683467102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27078.08376772164,
            "unit": "ns/iter",
            "extra": "iterations: 30119\ncpu: 27077.14731564798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132941.88093385386,
            "unit": "ns/iter",
            "extra": "iterations: 6425\ncpu: 132930.412451363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103901.39956463448,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 103897.5813278515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103516.91125942368,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 103509.73921641274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100850.87629727232,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 100846.66587140622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 314170.8308055241,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 314147.35422986175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1757769.679245313,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757700.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1416589.6310975216,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1416477.8963414617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1408805.7363635746,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1408759.6969696907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1405795.4568835134,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1405685.4765506734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 774974.6797658764,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 774942.9765886306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1359378.1669107017,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1359279.5021961993 ns\nthreads: 1"
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
        "date": 1702084990591,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15419.746034512918,
            "unit": "ns/iter",
            "extra": "iterations: 45896\ncpu: 15418.602928359773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129313.0567505697,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 129306.31578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251512.79870677408,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 251497.72280011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 358053.7392931353,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 358048.2744282743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470707.69625907706,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 470696.20323841396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585523.5991902846,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 585514.1025641025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563627.6580000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563620.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 734040.8029999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 733878.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 751262.9277210819,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 751241.9217687075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11983.483437825716,
            "unit": "ns/iter",
            "extra": "iterations: 58537\ncpu: 11983.188410748751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10018.31390044791,
            "unit": "ns/iter",
            "extra": "iterations: 69933\ncpu: 10018.0301145382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9935.428979168659,
            "unit": "ns/iter",
            "extra": "iterations: 70423\ncpu: 9935.1177882226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9939.643772191692,
            "unit": "ns/iter",
            "extra": "iterations: 70410\ncpu: 9939.314017895189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16853.158235901446,
            "unit": "ns/iter",
            "extra": "iterations: 41653\ncpu: 16852.82212565724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51095.93560000008,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51094.73999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 269255.3258604413,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 269241.14303757483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 214755.65316901202,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 214751.38329979862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 214562.48972947084,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 214558.2414829663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 213022.4327236188,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 213019.3936356803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599037.3528239024,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 599024.3853820596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3990827.0557940584,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3990771.6738197403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3275851.6807017224,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3275772.9824561416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3243081.975609784,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242971.0801393734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3256503.091227969,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3256393.6842105356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1852671.2111553755,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852614.34262948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3150754.2372882413,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3150716.2711864403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7390.140041646337,
            "unit": "ns/iter",
            "extra": "iterations: 95086\ncpu: 7389.925961760943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73379.83941480266,
            "unit": "ns/iter",
            "extra": "iterations: 11620\ncpu: 73378.58003442344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141361.24580103505,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 141357.62273901812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207012.5652173866,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 207007.57899738709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273220.71424080967,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 273214.64948129526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340283.6607843113,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 340273.0588235289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405297.1660430305,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 405289.19550982205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469903.0631808274,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 469880.3376906319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 535822.3952059005,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 535818.9920098343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5557.53954305805,
            "unit": "ns/iter",
            "extra": "iterations: 126318\ncpu: 5557.437578175714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4581.895417532731,
            "unit": "ns/iter",
            "extra": "iterations: 153018\ncpu: 4581.847233658782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4527.823218656454,
            "unit": "ns/iter",
            "extra": "iterations: 154841\ncpu: 4527.68517382344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4543.026333400594,
            "unit": "ns/iter",
            "extra": "iterations: 153911\ncpu: 4542.942999525714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7712.493453192781,
            "unit": "ns/iter",
            "extra": "iterations: 90884\ncpu: 7712.2826900224145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32320.51294770226,
            "unit": "ns/iter",
            "extra": "iterations: 25603\ncpu: 32320.03671444738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135433.64447614693,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 135430.81312410845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108744.88598848095,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 108741.90658989202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108150.20597204694,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 108146.7725540018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110061.06029240589,
            "unit": "ns/iter",
            "extra": "iterations: 7729\ncpu: 110058.8691939449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 284548.84300229716,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284543.78892166424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2213017.598574742,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2212972.6840855037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1815393.1359223048,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1815337.4757281537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1804230.72779923,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1804161.0038610052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1809915.809338511,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1809868.4824902718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1057260.356738359,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1057208.7202717965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1752105.5743880128,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752075.3295668534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7550.87025268905,
            "unit": "ns/iter",
            "extra": "iterations: 93158\ncpu: 7550.573219691292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55375.89820000335,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55373.75000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102444.22570681343,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 102234.14112615758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149898.0310332832,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 149895.7177531206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196104.4522134048,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 196101.1804767309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244277.05675751867,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 244267.46277044143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290605.677937738,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 290600.13391362684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337168.0555771459,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 337160.6296152365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 385470.5309187146,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385446.3780918728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6264.487338357154,
            "unit": "ns/iter",
            "extra": "iterations: 111202\ncpu: 6264.235355479225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5277.552856692475,
            "unit": "ns/iter",
            "extra": "iterations: 133266\ncpu: 5277.3745741600005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5248.970920564231,
            "unit": "ns/iter",
            "extra": "iterations: 134700\ncpu: 5248.861172977018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5252.135054394956,
            "unit": "ns/iter",
            "extra": "iterations: 133561\ncpu: 5252.0593586450905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8820.957296854773,
            "unit": "ns/iter",
            "extra": "iterations: 79315\ncpu: 8820.655613692283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27127.14793017473,
            "unit": "ns/iter",
            "extra": "iterations: 30075\ncpu: 27126.919368245974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134037.95223227903,
            "unit": "ns/iter",
            "extra": "iterations: 6406\ncpu: 134035.95067124435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104646.35687185949,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 104643.94810916546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105106.37569196794,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 105101.94365850615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102764.94167370739,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 102749.34186692482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 311462.6004029457,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 311453.02216252504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1783804.3812259713,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1783741.187739468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1456796.9435736188,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1456751.253918486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1439772.37306508,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1439742.1052631764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1437780.3209876455,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437700.1543209907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793003.7326477978,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 792989.2887746291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1381612.2574404741,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1381530.6547619125 ns\nthreads: 1"
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
        "date": 1702085611796,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15824.148879953753,
            "unit": "ns/iter",
            "extra": "iterations: 43525\ncpu: 15824.059735784034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131111.17385905515,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 131102.93387146847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247099.71931818392,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 247095.5965909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 360486.7061275441,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 360478.53272196744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 477740.23152710486,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 477709.96168582386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 500164.50399999716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500146.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 565845.8280000219,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565833.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 660744.4823359686,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 660719.6827685651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750525.0780487434,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 750498.6178861787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12415.884701293597,
            "unit": "ns/iter",
            "extra": "iterations: 56410\ncpu: 12415.389115405067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10324.59034456301,
            "unit": "ns/iter",
            "extra": "iterations: 67796\ncpu: 10324.41294471651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10243.843544251711,
            "unit": "ns/iter",
            "extra": "iterations: 68652\ncpu: 10243.790421255037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11009.165792022393,
            "unit": "ns/iter",
            "extra": "iterations: 64026\ncpu: 11008.69490519477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17143.426656210104,
            "unit": "ns/iter",
            "extra": "iterations: 40801\ncpu: 17142.771010514447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50699.22099999644,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50696.39000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 272939.3287539935,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 272933.57827476005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215641.49734378056,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 215632.73463192498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216784.1491698612,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 216774.84035759862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 214372.20373171603,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 214362.5819465459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601881.2358049206,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 601878.490313963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4046860.8787879525,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4046764.502164492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3279193.6478872285,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3279110.211267612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3270785.2342657284,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3270774.8251748276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3247999.6631578663,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3247903.157894739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1853775.9740519063,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1853744.1117764516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3164825.78231286,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164677.5510204164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7402.755028872485,
            "unit": "ns/iter",
            "extra": "iterations: 94554\ncpu: 7402.534001734451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72869.95963495782,
            "unit": "ns/iter",
            "extra": "iterations: 11396\ncpu: 72867.19901719886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140996.04187470165,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 140990.51377033337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205743.7309885885,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 205733.86406844066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271240.347066162,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 271235.4244694132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336242.3449342688,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 336238.78576952824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 401887.3464203424,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 401886.0046189392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 468110.9828049602,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 468113.27243417705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 533542.30877839,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 533528.1767955803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5543.7612236662935,
            "unit": "ns/iter",
            "extra": "iterations: 126407\ncpu: 5543.685080731308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4633.5821815846675,
            "unit": "ns/iter",
            "extra": "iterations: 151147\ncpu: 4633.466095919891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4566.701624825086,
            "unit": "ns/iter",
            "extra": "iterations: 153555\ncpu: 4566.637361206099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4572.57654829645,
            "unit": "ns/iter",
            "extra": "iterations: 152910\ncpu: 4572.345170361671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7812.156557778977,
            "unit": "ns/iter",
            "extra": "iterations: 89756\ncpu: 7812.122866437911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32166.426667703974,
            "unit": "ns/iter",
            "extra": "iterations: 25739\ncpu: 32165.71739383814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134535.39678030406,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 134534.9431818187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108888.80840163623,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 108887.53842213124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107287.40961271309,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 107283.05790336824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109609.8382851219,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 109604.92572322136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286059.3169774139,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 286056.2315996068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2214759.002380956,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2214668.095238097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1907431.0916179896,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1907331.9688109148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1798863.9187621332,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798797.485493234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1802376.8817828728,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802286.4341085374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1047816.6827354266,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1047774.3273542571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1745883.889097784,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1745784.3984962425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7815.2917717985165,
            "unit": "ns/iter",
            "extra": "iterations: 89570\ncpu: 7814.323992408222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57232.495099998465,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57231.23000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106001.93588147247,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 105997.19870517892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154039.89964221706,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 154029.71377459686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203290.50713784096,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 203281.16077697108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252785.85387069173,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 252784.83618439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 299256.5438233288,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 299245.2380952367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346992.1821086143,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 346976.99680511194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 395845.1508405376,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 395834.16628805164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6387.406644300311,
            "unit": "ns/iter",
            "extra": "iterations: 109688\ncpu: 6387.134417620891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5401.4475685590005,
            "unit": "ns/iter",
            "extra": "iterations: 129779\ncpu: 5401.360004315044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5333.24830421371,
            "unit": "ns/iter",
            "extra": "iterations: 131355\ncpu: 5333.171938639594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5393.769191190059,
            "unit": "ns/iter",
            "extra": "iterations: 130216\ncpu: 5393.491583215647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9020.5764561542,
            "unit": "ns/iter",
            "extra": "iterations: 77430\ncpu: 9020.257006328411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27055.59992667208,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 27054.563029131263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137383.17362110526,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 137383.77298161475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106974.34287857772,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 106971.85194447925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107357.96285570566,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 107353.55074288546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105342.44981095272,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 105336.15075009128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 314901.4211956608,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 314893.070652177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1828026.4468503634,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1827978.7401574822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1461683.0062991753,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1461658.2677165496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1455142.1406249432,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455107.9687499912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1449219.1065830674,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1449158.6206896463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 797313.8835794956,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 797266.3770634304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1402313.216012112,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1402154.984894263 ns\nthreads: 1"
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
        "date": 1702244255897,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16764.720235831137,
            "unit": "ns/iter",
            "extra": "iterations: 42064\ncpu: 16763.636363636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157858.85409383656,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 157589.365225391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 296700.4739190101,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 296691.45504461206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 434404.7718592863,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 434388.5929648241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 507285.6350000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507255.79999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583371.5670000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583357.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 692336.1712121292,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 692297.4242424243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 802962.1816593872,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 802919.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 915491.4257425556,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 915428.8118811885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13417.795093001709,
            "unit": "ns/iter",
            "extra": "iterations: 52741\ncpu: 13417.62765211124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11560.226633386736,
            "unit": "ns/iter",
            "extra": "iterations: 63702\ncpu: 11559.420426360237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11036.336208386292,
            "unit": "ns/iter",
            "extra": "iterations: 63651\ncpu: 11035.636517886578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10973.092354941384,
            "unit": "ns/iter",
            "extra": "iterations: 63819\ncpu: 10972.948494962307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18340.32362357636,
            "unit": "ns/iter",
            "extra": "iterations: 38106\ncpu: 18340.077678055946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69078.71667880405,
            "unit": "ns/iter",
            "extra": "iterations: 12357\ncpu: 69077.82633325244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 351219.49774496915,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 351207.54407544044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 281959.06402640283,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 281954.3894389442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 279356.14869281586,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 279349.73856209125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 277192.9613761716,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 277175.9169100938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 549979.2130000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549940.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4868904.544502622,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4868851.8324607285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4032611.5470085978,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4032545.726495721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3963240.5914894566,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3963225.9574468113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4017132.0470085107,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4017022.222222224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2325704.507499964,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2325647.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8691.061137541075,
            "unit": "ns/iter",
            "extra": "iterations: 80507\ncpu: 8690.891475275455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102319.05820860248,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 102315.93014967935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 196889.47364864984,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 196887.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290346.2394789597,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 290340.7815631262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382629.7544014073,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 382628.301056337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 477539.51853871054,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 477530.2617230103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 572326.6005222076,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 572319.8433420367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 531563.248999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531561.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 608859.1339999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608856.5999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6934.568772498895,
            "unit": "ns/iter",
            "extra": "iterations: 101116\ncpu: 6934.483167846826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5621.9384069007565,
            "unit": "ns/iter",
            "extra": "iterations: 124738\ncpu: 5621.916336641575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5569.892253206353,
            "unit": "ns/iter",
            "extra": "iterations: 125368\ncpu: 5569.867908876259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5613.123196066193,
            "unit": "ns/iter",
            "extra": "iterations: 124866\ncpu: 5613.0507904473825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9428.648457757225,
            "unit": "ns/iter",
            "extra": "iterations: 74048\ncpu: 9428.61792350909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51001.7228187093,
            "unit": "ns/iter",
            "extra": "iterations: 16206\ncpu: 51000.74663704809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 217023.15086206893,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 217021.2981744411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178529.69008522446,
            "unit": "ns/iter",
            "extra": "iterations: 4811\ncpu: 178528.20619413763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175703.6398191938,
            "unit": "ns/iter",
            "extra": "iterations: 4867\ncpu: 175702.99979453537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176089.73303167848,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 176085.93171534306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 382393.8911535062,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 382392.15091066994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3167638.0915254704,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3167586.1016949117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2643903.7331460267,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2643836.516853949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2590001.4623956042,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2589991.0863509593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2629393.690340946,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2629286.3636363717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1563702.29697986,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1563687.0805369176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2543131.465940073,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2543047.956403271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7663.4614754008935,
            "unit": "ns/iter",
            "extra": "iterations: 91487\ncpu: 7663.360914665478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53945.0305999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53944.819999999534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99512.53467068612,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 99512.11734693892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143898.58090451916,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 143897.93969849191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189972.4045017493,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 189971.61276223772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235017.1674809976,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 235003.85450597308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279492.36275774054,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 279485.5992268048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325610.8944215669,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 325594.0846125058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371125.73091684806,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 371113.7313432837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6201.912096188673,
            "unit": "ns/iter",
            "extra": "iterations: 112862\ncpu: 6201.787138275109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5145.095565625355,
            "unit": "ns/iter",
            "extra": "iterations: 135938\ncpu: 5144.957259927304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5122.954814440178,
            "unit": "ns/iter",
            "extra": "iterations: 136371\ncpu: 5122.795169060872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5130.767041713624,
            "unit": "ns/iter",
            "extra": "iterations: 136694\ncpu: 5130.571934393595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8777.79845998075,
            "unit": "ns/iter",
            "extra": "iterations: 79999\ncpu: 8777.569719621442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29821.12126524842,
            "unit": "ns/iter",
            "extra": "iterations: 27378\ncpu: 29820.136606034313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133140.054335984,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 133135.27946442462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102309.78474799349,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 102303.36406081649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102651.44771634409,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 102647.69230769167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99353.10304942427,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 99347.71585465569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326786.92796906934,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 326776.5987350696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1728492.0149531856,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1728396.0747663535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376264.0591716508,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1376187.4260355008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1371864.117994136,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371815.7817109122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1357090.6827485233,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1356992.9824561293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 760996.1695616529,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 760963.3581472349 ns\nthreads: 1"
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
        "date": 1702285125157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16920.64684006002,
            "unit": "ns/iter",
            "extra": "iterations: 41947\ncpu: 16918.180084392214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 167104.65197824925,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 167104.8190511907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 303406.17098809313,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 303397.6173791171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 445111.3916623788,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 445115.69737519283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 592969.2035158903,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 592950.7775524005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 597470.7009999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597447.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 735417.8136117863,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 735374.8646558388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 825887.8620689589,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 825874.41016334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 942370.2961460928,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 942306.186612577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13298.51999001973,
            "unit": "ns/iter",
            "extra": "iterations: 52101\ncpu: 13298.201570027424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11098.925793252105,
            "unit": "ns/iter",
            "extra": "iterations: 62811\ncpu: 11097.12311537789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11027.748040506629,
            "unit": "ns/iter",
            "extra": "iterations: 63792\ncpu: 11026.727489340356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11081.474638708252,
            "unit": "ns/iter",
            "extra": "iterations: 63522\ncpu: 11080.449293158266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18398.281553651977,
            "unit": "ns/iter",
            "extra": "iterations: 38181\ncpu: 18397.797333752394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69329.82200016409,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 69324.7379965879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 350967.80384931667,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 350936.8140868146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 281788.203825851,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 281759.8944591034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 283038.93280370836,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 283020.423700762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 275492.7234799523,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 275466.8175937905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 543384.8579999675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543370.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5003529.064516266,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 5003182.79569891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4099510.4473683783,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4099550.4385965005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4059963.1965064635,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4059735.807860257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4062021.700000089,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4061775.2173913117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2370330.0559796873,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370283.7150127287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8771.005267833894,
            "unit": "ns/iter",
            "extra": "iterations: 79919\ncpu: 8770.842978515733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103760.71395714853,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 103757.71698341586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 200448.12293748767,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 200444.38763653292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 296090.38130969007,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 296088.60845839034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 391973.4410440999,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 391948.51485148555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 488174.29602686275,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 488171.7403469515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 582986.6570662966,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 582970.2612190208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 544072.4559999808,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544065.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 621286.0750000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621226.1999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6921.780955098798,
            "unit": "ns/iter",
            "extra": "iterations: 101623\ncpu: 6921.022799956741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5640.70243236706,
            "unit": "ns/iter",
            "extra": "iterations: 124570\ncpu: 5640.763426186052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5526.865618264434,
            "unit": "ns/iter",
            "extra": "iterations: 125270\ncpu: 5526.3638540752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5800.98838735327,
            "unit": "ns/iter",
            "extra": "iterations: 125725\ncpu: 5784.430304235469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9170.04773425739,
            "unit": "ns/iter",
            "extra": "iterations: 76465\ncpu: 9169.412149349362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50832.36988573552,
            "unit": "ns/iter",
            "extra": "iterations: 16278\ncpu: 50828.33271900709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 217705.45419943912,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 217691.70261354974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 177634.09205627211,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 177635.97434836603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177313.8966515021,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 177296.81686647396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174671.84775510963,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 174670.89795918373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 363566.5841336091,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 363555.8663883081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3226774.2847221904,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226607.986111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2690960.29022985,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2690894.2528735665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2655584.4659091383,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2655500.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2667284.0600000266,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2667236.0000000186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1586578.1979522798,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586412.6279863513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2586260.775623332,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2586087.811634351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7640.318970030396,
            "unit": "ns/iter",
            "extra": "iterations: 91692\ncpu: 7639.787549622642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55233.681499998966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55232.17000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101972.93665319236,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 101969.80033277925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148275.54241071513,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 148269.38530219859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195835.15363697705,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 195827.5096306365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243050.26184467576,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 243037.53854780056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290485.7811977302,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290460.72264971567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336642.72720185004,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 336630.5533904905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 385477.78355556756,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 385445.9555555536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6358.859484608228,
            "unit": "ns/iter",
            "extra": "iterations: 110479\ncpu: 6357.190959367877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5152.163353087197,
            "unit": "ns/iter",
            "extra": "iterations: 136006\ncpu: 5151.974177609794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5134.593442502211,
            "unit": "ns/iter",
            "extra": "iterations: 136180\ncpu: 5134.412542223514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5195.991568846873,
            "unit": "ns/iter",
            "extra": "iterations: 134857\ncpu: 5196.018745782557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8929.838777566649,
            "unit": "ns/iter",
            "extra": "iterations: 78401\ncpu: 8929.25855537554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30078.458740898455,
            "unit": "ns/iter",
            "extra": "iterations: 27194\ncpu: 30078.767375156072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133465.79608634842,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 133437.9406740183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102640.9032568173,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 102632.9046989542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104166.7388023372,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 104160.83252190871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99574.91478667432,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 99566.56925774273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326887.2656028529,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 326860.5673758844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1788078.6223506364,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1787954.33526011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1414524.1796042214,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1414442.9223744248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1413907.1278539242,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1413775.0380517496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1396477.0060150279,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1396386.3157894772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 784015.4488054572,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 784022.9522184229 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}