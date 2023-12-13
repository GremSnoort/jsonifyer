window.BENCHMARK_DATA = {
  "lastUpdate": 1702490325101,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 18.04 Release c++-17": [
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
        "date": 1702490322884,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1398.5273474964472,
            "unit": "ns/iter",
            "extra": "iterations: 503611\ncpu: 1398.5304133547522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16365.412885484862,
            "unit": "ns/iter",
            "extra": "iterations: 50910\ncpu: 16364.580632488707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33779.73807073382,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 33777.442463666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50288.67045791017,
            "unit": "ns/iter",
            "extra": "iterations: 16881\ncpu: 50286.48184349269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55805.9442000058,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55805.18000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70057.9245675842,
            "unit": "ns/iter",
            "extra": "iterations: 12488\ncpu: 70054.66848174242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83429.3522508605,
            "unit": "ns/iter",
            "extra": "iterations: 10396\ncpu: 83423.48980377072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97213.79325316646,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 97208.24983299937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114411.0589388417,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 114405.4626241506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1167.9258419774244,
            "unit": "ns/iter",
            "extra": "iterations: 600016\ncpu: 1167.8293578837925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 969.8487314590072,
            "unit": "ns/iter",
            "extra": "iterations: 722523\ncpu: 969.7746646127522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 910.1473187848547,
            "unit": "ns/iter",
            "extra": "iterations: 770024\ncpu: 910.0734522560323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.8094234115223,
            "unit": "ns/iter",
            "extra": "iterations: 746078\ncpu: 941.8114459882198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1836.9933963699793,
            "unit": "ns/iter",
            "extra": "iterations: 381154\ncpu: 1836.9703584377958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5387.832849999086,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5387.409000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29190.060037789848,
            "unit": "ns/iter",
            "extra": "iterations: 28049\ncpu: 29188.206353167727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23454.294652756103,
            "unit": "ns/iter",
            "extra": "iterations: 35177\ncpu: 23452.929470961135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21602.961609169615,
            "unit": "ns/iter",
            "extra": "iterations: 36988\ncpu: 21602.63599005081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22705.2556217099,
            "unit": "ns/iter",
            "extra": "iterations: 37622\ncpu: 22703.838179788476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72478.72248568473,
            "unit": "ns/iter",
            "extra": "iterations: 12230\ncpu: 72473.83483237925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552998.0920000526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552918.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 546315.9798534347,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 546295.0549450549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548981.7478260956,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 548977.5776397528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 545073.5735661184,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 545039.6508728178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328723.1239638344,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 328708.8168801813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 546460.8480050968,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 546447.8150728313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2325041.68592979,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2324912.5628140704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1072157.5123384637,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1072098.472385429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3207289.0517242583,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3207065.517241368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8372.396284739165,
            "unit": "ns/iter",
            "extra": "iterations: 102873\ncpu: 8372.271635900559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43549.84238528794,
            "unit": "ns/iter",
            "extra": "iterations: 18983\ncpu: 43546.88405415388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34565.47910197346,
            "unit": "ns/iter",
            "extra": "iterations: 23830\ncpu: 34564.34746118334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33361.48245363685,
            "unit": "ns/iter",
            "extra": "iterations: 24535\ncpu: 33359.36824943962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34650.53750623189,
            "unit": "ns/iter",
            "extra": "iterations: 24076\ncpu: 34648.72902475494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84480.77523160035,
            "unit": "ns/iter",
            "extra": "iterations: 10255\ncpu: 84475.75816674762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 592877.8670000838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592850.7000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 582526.808228314,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 582507.166556072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583362.9539692859,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 583347.4983322192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 578475.1523178604,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 578458.1456953625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334478.03350019804,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 334474.2010011569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575732.1573403261,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 575736.537195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2461266.162666713,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2461225.0666666566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1095551.2435293712,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1095534.3529411803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5332.799220000197,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5332.725999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28963.976131311836,
            "unit": "ns/iter",
            "extra": "iterations: 28573\ncpu: 28962.89154096533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22882.86851134336,
            "unit": "ns/iter",
            "extra": "iterations: 36140\ncpu: 22882.482014388523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22075.73082795418,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 22074.28280609665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22724.69807233505,
            "unit": "ns/iter",
            "extra": "iterations: 36469\ncpu: 22723.42811703087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70135.0658587189,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 70131.33471535664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 563024.4049999646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562969.900000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569039.7977893733,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 569016.644993497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569457.1096690446,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 569436.1453601579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 562837.95393475,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 562790.3390914926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 325113.27703707176,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 325098.48148148146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567708.79364051,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 567697.2096041543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 529.545613178258,
            "unit": "ns/iter",
            "extra": "iterations: 1322666\ncpu: 529.5307356505703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2969.8995219442672,
            "unit": "ns/iter",
            "extra": "iterations: 220058\ncpu: 2969.910659916952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2501.8729367577316,
            "unit": "ns/iter",
            "extra": "iterations: 280081\ncpu: 2501.8462516200643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2452.63596155811,
            "unit": "ns/iter",
            "extra": "iterations: 283753\ncpu: 2452.49107498423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1962.5565837193844,
            "unit": "ns/iter",
            "extra": "iterations: 357055\ncpu: 1962.4514430550068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17893.309989015564,
            "unit": "ns/iter",
            "extra": "iterations: 39153\ncpu: 17892.059356881877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29540.5467650324,
            "unit": "ns/iter",
            "extra": "iterations: 23586\ncpu: 29540.053421521276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7278.2555437893925,
            "unit": "ns/iter",
            "extra": "iterations: 96324\ncpu: 7278.11656492673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7190.095430700545,
            "unit": "ns/iter",
            "extra": "iterations: 97411\ncpu: 7189.720873412656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7237.76552265639,
            "unit": "ns/iter",
            "extra": "iterations: 96794\ncpu: 7237.54984813103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14463.747030237066,
            "unit": "ns/iter",
            "extra": "iterations: 48152\ncpu: 14463.694135238315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13700.473824796334,
            "unit": "ns/iter",
            "extra": "iterations: 51289\ncpu: 13699.996100528204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5173.472979453454,
            "unit": "ns/iter",
            "extra": "iterations: 135545\ncpu: 5172.983879892346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26043.531239507658,
            "unit": "ns/iter",
            "extra": "iterations: 26809\ncpu: 26041.76582490924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20953.47791357774,
            "unit": "ns/iter",
            "extra": "iterations: 33301\ncpu: 20951.74619380796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20954.288607820123,
            "unit": "ns/iter",
            "extra": "iterations: 33523\ncpu: 20953.190346926054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21268.26559386435,
            "unit": "ns/iter",
            "extra": "iterations: 33122\ncpu: 21266.381860998612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49609.31048415266,
            "unit": "ns/iter",
            "extra": "iterations: 14107\ncpu: 49605.500815198364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155164.5308614394,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 155151.9760213131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130407.90971705338,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130402.62472077359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129361.68641563978,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129359.68992247875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128869.88860007675,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 128867.45265503302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 80803.94295067426,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 80799.31026420393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128061.56875687242,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128055.09717638494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4918.808298969818,
            "unit": "ns/iter",
            "extra": "iterations: 142837\ncpu: 4918.771046717526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24848.378172963476,
            "unit": "ns/iter",
            "extra": "iterations: 27104\ncpu: 24847.409976387175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19921.141793799492,
            "unit": "ns/iter",
            "extra": "iterations: 35199\ncpu: 19920.53183329066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19677.05641586808,
            "unit": "ns/iter",
            "extra": "iterations: 35646\ncpu: 19676.317118330517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20068.38435850761,
            "unit": "ns/iter",
            "extra": "iterations: 33539\ncpu: 20068.123676913623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46505.25834388524,
            "unit": "ns/iter",
            "extra": "iterations: 15011\ncpu: 46503.54406768392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 147810.0599744666,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 147800.40408336898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127268.2173754531,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 127254.82752326982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 124056.99873691765,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 124052.3637675917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 123725.1809523897,
            "unit": "ns/iter",
            "extra": "iterations: 5670\ncpu: 123723.95061728364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80245.4916475972,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 80243.46681922144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 124139.9398099153,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 124137.39880323861 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}