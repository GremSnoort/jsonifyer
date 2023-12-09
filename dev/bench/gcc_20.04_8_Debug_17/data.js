window.BENCHMARK_DATA = {
  "lastUpdate": 1702084990999,
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
      }
    ]
  }
}