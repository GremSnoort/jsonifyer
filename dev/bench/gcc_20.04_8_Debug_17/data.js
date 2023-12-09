window.BENCHMARK_DATA = {
  "lastUpdate": 1702084765740,
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
      }
    ]
  }
}