window.BENCHMARK_DATA = {
  "lastUpdate": 1702335684822,
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
        "date": 1702309493409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17092.843263996863,
            "unit": "ns/iter",
            "extra": "iterations: 41152\ncpu: 17092.437791601868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160411.831416187,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 160407.16575523294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 304434.54921699973,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 304430.2759134973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 445349.24653313577,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 445329.8407806883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 592047.1701982055,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 592040.1913875601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 595013.8329999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594983.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 709437.624135284,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 709411.6833205228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 852838.9716311928,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 852784.8404255314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 937190.5035247019,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 937161.9335347448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13839.596022692918,
            "unit": "ns/iter",
            "extra": "iterations: 50587\ncpu: 13838.776760827908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11158.650546295634,
            "unit": "ns/iter",
            "extra": "iterations: 62695\ncpu: 11157.974320121248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11125.739387784006,
            "unit": "ns/iter",
            "extra": "iterations: 63017\ncpu: 11125.435993462077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11219.00043219411,
            "unit": "ns/iter",
            "extra": "iterations: 62472\ncpu: 11218.42585478295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19018.724462984854,
            "unit": "ns/iter",
            "extra": "iterations: 36917\ncpu: 19018.043177939708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69464.98021817238,
            "unit": "ns/iter",
            "extra": "iterations: 12284\ncpu: 69458.59654835558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 350428.41711010435,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 350409.8649201804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 277821.5314025338,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 277817.21444842144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 278080.4817589586,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 278071.95439739426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 277314.70840091346,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 277303.3084657801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 569497.178000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569479.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5044385.119564973,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 5044208.69565218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4066337.47368402,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4066149.561403508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4045132.308695666,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4044982.173913054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4057856.5633187806,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4057688.646288204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2350036.3863636013,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2349933.8383838325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8774.014313696196,
            "unit": "ns/iter",
            "extra": "iterations: 79644\ncpu: 8773.761990859304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103244.37117639654,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 103238.95538628942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 199598.33737697345,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 199584.3671320674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 294627.7009155666,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 294615.93760596786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 390135.95944117603,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 390117.39522307354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 485089.08347245125,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 485065.7206455199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 580618.069906787,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 580601.3981358194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 549164.1689999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549122.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 617398.9339999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617349.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6980.729175349782,
            "unit": "ns/iter",
            "extra": "iterations: 100770\ncpu: 6980.623201349664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5649.684548386851,
            "unit": "ns/iter",
            "extra": "iterations: 124000\ncpu: 5649.479838709684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5677.569153109834,
            "unit": "ns/iter",
            "extra": "iterations: 123617\ncpu: 5677.410064958699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5648.86210761318,
            "unit": "ns/iter",
            "extra": "iterations: 110637\ncpu: 5648.684436490538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9614.342001402865,
            "unit": "ns/iter",
            "extra": "iterations: 72719\ncpu: 9614.213616798852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51630.76628974645,
            "unit": "ns/iter",
            "extra": "iterations: 16007\ncpu: 51628.99356531542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216666.6247787612,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 216663.61567635904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172864.17042707172,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 172860.63658339973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 171655.80917100268,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 171628.63436123263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 172534.6546516355,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 172526.56061216348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 392421.2511312138,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 392412.35294117656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3265581.1118882257,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3265429.7202797304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2661949.1310541634,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2661847.0085470024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2642825.756373942,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2642812.181303104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2648628.4318182645,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2648495.1704545426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1574346.489899015,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1574307.7441077393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2587709.3130193404,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2587634.6260387907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7747.310651446575,
            "unit": "ns/iter",
            "extra": "iterations: 89969\ncpu: 7747.062877213261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55025.83830000277,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55025.719999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101499.10711317022,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 101494.45434033893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147114.732023905,
            "unit": "ns/iter",
            "extra": "iterations: 5855\ncpu: 147107.44662681493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195731.15041470193,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 195724.5460659043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240018.4304820372,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 240015.1016996394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287684.11339522596,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 287606.0013262597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334776.6150885306,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 334764.126250961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380595.31730767887,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 380589.59790209564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6499.782296961321,
            "unit": "ns/iter",
            "extra": "iterations: 107812\ncpu: 6499.5677661114005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5311.448650370848,
            "unit": "ns/iter",
            "extra": "iterations: 131851\ncpu: 5311.362826220549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5232.3748996961485,
            "unit": "ns/iter",
            "extra": "iterations: 133345\ncpu: 5232.190183358917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5303.680277979512,
            "unit": "ns/iter",
            "extra": "iterations: 132096\ncpu: 5303.5655886627355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8996.614973606922,
            "unit": "ns/iter",
            "extra": "iterations: 77483\ncpu: 8996.467612250422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29835.311544215725,
            "unit": "ns/iter",
            "extra": "iterations: 27399\ncpu: 29834.68374758216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131943.10627124098,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 131941.18010503528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103512.67534197395,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 103504.92676431399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104540.5407389228,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 104534.64643993031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100837.02838221264,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 100834.81551561081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329345.6023537935,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 329325.28530670307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1787248.7332053753,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1787138.9635316578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1414283.4908537234,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414216.61585366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1421614.1109422045,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1421504.4072948198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1406695.3071104076,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1406600.151285927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773187.3182957793,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 773111.111111114 ns\nthreads: 1"
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
        "date": 1702310493850,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17540.15471633757,
            "unit": "ns/iter",
            "extra": "iterations: 41017\ncpu: 17539.017968159544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 162906.37387473736,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 162902.26010342845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 309176.2104329278,
            "unit": "ns/iter",
            "extra": "iterations: 2818\ncpu: 309173.95315826836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 453452.64507635636,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 453451.44813059503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 531487.6980000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531486.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606728.6189999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606710.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 728950.5995334362,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 728931.804043546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 838936.2599999893,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 838917.727272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 961706.6509240378,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 961670.0205338806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13688.639740324981,
            "unit": "ns/iter",
            "extra": "iterations: 51449\ncpu: 13687.597426577773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11655.849961932077,
            "unit": "ns/iter",
            "extra": "iterations: 61731\ncpu: 11654.651633701053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11348.360136547697,
            "unit": "ns/iter",
            "extra": "iterations: 61224\ncpu: 11347.62674768063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11324.922895687843,
            "unit": "ns/iter",
            "extra": "iterations: 61968\ncpu: 11324.168925897233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19024.507180015127,
            "unit": "ns/iter",
            "extra": "iterations: 36908\ncpu: 19023.28492467757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70411.0416219352,
            "unit": "ns/iter",
            "extra": "iterations: 12109\ncpu: 70406.84614749349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359771.96926315676,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 359754.44210526283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 284157.81183860847,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 284139.31878306944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 282976.69014550693,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 282957.4404761904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 277428.96919585037,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 277412.0298313879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 570310.7559999693,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570260.3999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5318010.497267829,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 5317701.639344267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4104697.6475769896,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4104493.3920704783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4095865.6696033766,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4095803.0837004515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4122350.1415927266,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4122184.070796454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377598.783163262,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2377527.5510204113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8683.678208298863,
            "unit": "ns/iter",
            "extra": "iterations: 80058\ncpu: 8683.591895875505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103713.54741750061,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 103713.37259231959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 202190.41634241826,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 202187.43419546864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 298810.4218481552,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 298800.68704912445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 394155.7619047574,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 394133.3786848069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 489512.4737732826,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 489504.85053581436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 583955.8967828491,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 583924.7319034808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 543816.659000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543792.5999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 621776.7850000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621730.2000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6915.2829924182015,
            "unit": "ns/iter",
            "extra": "iterations: 101296\ncpu: 6915.015400410715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5684.905283291275,
            "unit": "ns/iter",
            "extra": "iterations: 123389\ncpu: 5684.561832902408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5670.777461628832,
            "unit": "ns/iter",
            "extra": "iterations: 123008\ncpu: 5670.769380853275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5621.69607361668,
            "unit": "ns/iter",
            "extra": "iterations: 124211\ncpu: 5621.319367849859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9526.487715338537,
            "unit": "ns/iter",
            "extra": "iterations: 73547\ncpu: 9525.765836811855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52160.532277326376,
            "unit": "ns/iter",
            "extra": "iterations: 15909\ncpu: 52157.13746935698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 223068.78453181658,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 223056.59596482004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176802.77195876275,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 176788.90721649464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175381.61932050955,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 175371.98117069175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174920.59926544895,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 174908.97775964142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 394545.50792931946,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 394527.91119166254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3241968.1701389733,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3241754.8611111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2651549.502840825,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2651385.5113636395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2643951.1643060045,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2643795.750708224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2658976.928571357,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2658765.4285714277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1575334.8168066875,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1575227.899159667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2578028.7430938594,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2577785.9116022033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7944.738774955589,
            "unit": "ns/iter",
            "extra": "iterations: 88307\ncpu: 7944.236583736247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57680.4611,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57674.92000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106446.86278896188,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 106439.52274422116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154861.93597122998,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 154852.17625899226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204416.38392857238,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 204396.405075187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252603.86384838875,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 252586.90962099246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 301095.0829573143,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 301076.98715723486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 349915.0885311983,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 349892.47484909464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 397803.87785911263,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 397793.0009149114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6568.1290117393155,
            "unit": "ns/iter",
            "extra": "iterations: 106905\ncpu: 6567.791964828601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5422.235699940096,
            "unit": "ns/iter",
            "extra": "iterations: 130454\ncpu: 5422.023088598278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5461.994115247042,
            "unit": "ns/iter",
            "extra": "iterations: 127448\ncpu: 5461.921724938814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5338.0263053345425,
            "unit": "ns/iter",
            "extra": "iterations: 130886\ncpu: 5337.894809223264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9397.695012125228,
            "unit": "ns/iter",
            "extra": "iterations: 76285\ncpu: 9397.31401979417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30212.59909743142,
            "unit": "ns/iter",
            "extra": "iterations: 27034\ncpu: 30210.723533328422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133733.02425285737,
            "unit": "ns/iter",
            "extra": "iterations: 6391\ncpu: 133728.9313096542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104419.4156449247,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 104411.243256498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103947.9889213543,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 103939.11614316971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100524.24428739697,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 100502.74440518214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331222.53791130683,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 331196.70958511916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1849907.3300198559,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1849770.3777336064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1454618.1962323724,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1454540.5023547788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1458632.0579937384,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1458507.993730413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1441970.7484471938,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1441918.6335403856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 801311.0747826294,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 801265.2173912997 ns\nthreads: 1"
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
        "date": 1702310776091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18879.80444420377,
            "unit": "ns/iter",
            "extra": "iterations: 36992\ncpu: 18878.46831747405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 176985.57998738842,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 176970.02312381755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 341965.96376253536,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 341933.8858905165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 497206.8394781502,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 496864.6057855929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 528504.6379999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528435.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 669284.0979270817,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 669235.096497498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 798733.5834782342,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 798682.6956521738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 932730.4433300047,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 932688.7662988963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1069725.1106043775,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1069613.2269099192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 15512.377697524103,
            "unit": "ns/iter",
            "extra": "iterations: 45412\ncpu: 15511.631286884534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 13107.631862790582,
            "unit": "ns/iter",
            "extra": "iterations: 54515\ncpu: 13107.33926442264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12762.906841392452,
            "unit": "ns/iter",
            "extra": "iterations: 54638\ncpu: 12761.788498846934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12780.719947520642,
            "unit": "ns/iter",
            "extra": "iterations: 54879\ncpu: 12779.493066564644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21240.41027363786,
            "unit": "ns/iter",
            "extra": "iterations: 32744\ncpu: 21239.381260689006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 78084.52576283221,
            "unit": "ns/iter",
            "extra": "iterations: 10946\ncpu: 78080.04750593826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 393521.8267824466,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 393495.5210237661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 313415.0857247962,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 313390.7652685797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 312911.1324990942,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 312883.7320574164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 309349.09233007143,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 309313.37695383397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 637539.1929999524,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637484.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5576318.108433933,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5575890.361445796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4599306.252427288,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4598980.582524265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4514101.825242665,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4513707.7669902975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4510023.135265862,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4509830.434782616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2631443.7570620463,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2631424.011299437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9894.769689306402,
            "unit": "ns/iter",
            "extra": "iterations: 71968\ncpu: 9894.679579813244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 114719.83052434123,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 114720.6928838952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 221897.01117603196,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 221885.09017018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 328869.5105980142,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 328872.2937168801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 435900.5697791181,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 435882.42971887434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 541778.0124069282,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 541773.6972704694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 517877.8119999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517856.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 605729.2729999517,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605734.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 687560.8841870537,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 687545.6570155914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7724.73349403479,
            "unit": "ns/iter",
            "extra": "iterations: 90437\ncpu: 7724.795161272477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6349.794250095856,
            "unit": "ns/iter",
            "extra": "iterations: 109254\ncpu: 6349.847145184613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6318.570145578322,
            "unit": "ns/iter",
            "extra": "iterations: 110456\ncpu: 6318.306837111623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6324.430891950835,
            "unit": "ns/iter",
            "extra": "iterations: 110320\ncpu: 6324.4806018854315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10599.937790579315,
            "unit": "ns/iter",
            "extra": "iterations: 63881\ncpu: 10600.028177392322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57272.282775284766,
            "unit": "ns/iter",
            "extra": "iterations: 14485\ncpu: 57272.70969968933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 243556.22894290846,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 243544.65799887085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 199692.79415098878,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 199694.37769213403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 198156.06974102865,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 198148.38709677555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 195280.6552667606,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 195282.26174190722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 441011.43985727814,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 440995.8715596329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3592015.1500000395,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3591992.307692302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2943474.9018987617,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2943472.468354425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2913096.526479788,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2912986.915887839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2952390.2302839058,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2952359.936908504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1732642.3333333582,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1732552.962962962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2859156.3181817727,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2859090.606060603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8576.557442334844,
            "unit": "ns/iter",
            "extra": "iterations: 80855\ncpu: 8575.969327809042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61089.15689404926,
            "unit": "ns/iter",
            "extra": "iterations: 13780\ncpu: 61089.71698113244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113905.78849452747,
            "unit": "ns/iter",
            "extra": "iterations: 7579\ncpu: 113903.10067291165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166306.32179265554,
            "unit": "ns/iter",
            "extra": "iterations: 5199\ncpu: 166307.75149067174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 217908.16210840133,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 217862.15813028347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267721.51858735946,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 267718.4944237914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 319536.6299963206,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 319514.96149614744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 373157.6003423226,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 373146.85494223266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 423495.0447906374,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 423492.4050632895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7027.803599162107,
            "unit": "ns/iter",
            "extra": "iterations: 99801\ncpu: 7027.754230919526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5821.737652234474,
            "unit": "ns/iter",
            "extra": "iterations: 119799\ncpu: 5821.639579629213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5937.139326220391,
            "unit": "ns/iter",
            "extra": "iterations: 119030\ncpu: 5937.193144585426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5887.739715503376,
            "unit": "ns/iter",
            "extra": "iterations: 118455\ncpu: 5887.185851167189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10193.526994557596,
            "unit": "ns/iter",
            "extra": "iterations: 69088\ncpu: 10193.40985409918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32928.83131755454,
            "unit": "ns/iter",
            "extra": "iterations: 24887\ncpu: 32927.67710049371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145821.93701997583,
            "unit": "ns/iter",
            "extra": "iterations: 5859\ncpu: 145820.9592080562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114509.45758355065,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 114504.87078879715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113274.5378432688,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 113273.7441393175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111095.80568226504,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 111095.98592466941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364101.0426877559,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 364102.964426874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1939172.4070981396,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1939030.271398732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1560022.9331103477,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560012.8762541958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1566324.3372287094,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1566233.8898163806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1548793.5906822106,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1548778.2029950025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 861316.2234637272,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 861252.23463687 ns\nthreads: 1"
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
        "date": 1702335684305,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16252.080724877296,
            "unit": "ns/iter",
            "extra": "iterations: 43097\ncpu: 16251.681091491288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 156296.83238792708,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 156288.6733760293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 296100.744138647,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 296085.0832483861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 434043.58708707045,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 434020.9709709708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 579793.0355497065,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 579748.5845951287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576819.5010000454,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576804.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 690880.6848072588,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 690828.1934996216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 801184.3497835494,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 801141.6450216456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 913294.875984284,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 913237.9921259849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13906.940507583968,
            "unit": "ns/iter",
            "extra": "iterations: 53469\ncpu: 13906.461688080928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10959.55330123251,
            "unit": "ns/iter",
            "extra": "iterations: 64173\ncpu: 10958.819129540463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10870.099237826013,
            "unit": "ns/iter",
            "extra": "iterations: 64421\ncpu: 10869.690007916677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10901.978244642434,
            "unit": "ns/iter",
            "extra": "iterations: 64306\ncpu: 10901.388672907655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18394.3836659653,
            "unit": "ns/iter",
            "extra": "iterations: 38080\ncpu: 18393.631827731053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68253.16011584652,
            "unit": "ns/iter",
            "extra": "iterations: 12085\ncpu: 68247.58791890778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 381569.9204401193,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 381555.5226407105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 289875.3500170215,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 289857.06503234606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287302.34427326365,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 287290.4554588083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 290487.78042146494,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 290465.0917743036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 543716.862999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543686.300000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4782977.180412348,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4782778.865979377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3925719.6428571516,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3924692.436974789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3892041.665272,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3891576.1506276163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3895105.8702927544,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3894649.790794986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254857.4019371048,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2254602.6634382536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8281.954400208633,
            "unit": "ns/iter",
            "extra": "iterations: 84496\ncpu: 8280.98371520545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100048.52084309055,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100041.80327868856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193261.90377777646,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 193244.15555555577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284378.5349065822,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284354.96558505326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 374877.5181503713,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 374843.38807260187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465822.684858219,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 465790.1016586408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 564968.2761341395,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 564923.0769230776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521244.4310000137,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521218.4999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 597682.6090000031,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597631.3999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6566.284819854923,
            "unit": "ns/iter",
            "extra": "iterations: 106692\ncpu: 6565.786563191211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5395.69267733003,
            "unit": "ns/iter",
            "extra": "iterations: 129857\ncpu: 5395.213966132007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5286.565427950911,
            "unit": "ns/iter",
            "extra": "iterations: 132153\ncpu: 5286.318131256923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5328.10554845971,
            "unit": "ns/iter",
            "extra": "iterations: 131532\ncpu: 5327.426025605941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9273.781204150286,
            "unit": "ns/iter",
            "extra": "iterations: 75655\ncpu: 9273.425418015959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 49955.72935197047,
            "unit": "ns/iter",
            "extra": "iterations: 16527\ncpu: 49954.43819204949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212136.41584401694,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 212128.75123395983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 169906.25777073685,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 169900.4157592545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 169284.7582395856,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 169274.63982632608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 172129.470812432,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 172123.3701103312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 373107.7797849422,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373088.2150537634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3011967.038960887,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3011850.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2499867.831550863,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2499633.689839572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2470866.1352786086,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2470606.6312997397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2475496.1856763475,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2475250.9283819613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1454358.2562500213,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1454175.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2415377.2051948053,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2415131.6883116937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7492.697164728102,
            "unit": "ns/iter",
            "extra": "iterations: 93536\ncpu: 7492.055465275337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54848.70760000149,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54843.599999999526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101199.71517720651,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 101192.35841281057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147250.71469936025,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 147229.85862714952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193995.1729138778,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 193978.0008924592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239594.3657253571,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 239565.75304540343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286057.810873144,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 286033.44316309644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332582.1544622387,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 332559.2677345546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377998.5947826093,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 377968.17391304177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6186.521659979668,
            "unit": "ns/iter",
            "extra": "iterations: 113158\ncpu: 6185.986850244751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5112.33681717128,
            "unit": "ns/iter",
            "extra": "iterations: 137205\ncpu: 5111.936153930266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5100.464945644332,
            "unit": "ns/iter",
            "extra": "iterations: 137244\ncpu: 5099.919122147453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5142.490272287894,
            "unit": "ns/iter",
            "extra": "iterations: 136363\ncpu: 5142.204996956689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8702.175602552277,
            "unit": "ns/iter",
            "extra": "iterations: 80574\ncpu: 8701.202621192873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29377.923592494106,
            "unit": "ns/iter",
            "extra": "iterations: 27602\ncpu: 29375.298891384686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146706.01552901024,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 146692.01365187598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116881.18403487558,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 116873.05544203805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116672.37535816764,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 116662.20493928232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115611.38029315542,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 115602.15798045545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326144.53769019607,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 326106.74273859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1766328.9201521291,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1766259.5057034171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1418248.1234756634,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418186.7378048946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1408798.139393949,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1408747.2727272722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1408432.4522003538,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1408299.6965098518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790030.416239342,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 789979.7435897336 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}