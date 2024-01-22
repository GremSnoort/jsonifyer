window.BENCHMARK_DATA = {
  "lastUpdate": 1705955068089,
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
        "date": 1702492935683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1388.883619628637,
            "unit": "ns/iter",
            "extra": "iterations: 507809\ncpu: 1388.806618236384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15870.574073708976,
            "unit": "ns/iter",
            "extra": "iterations: 50875\ncpu: 15870.254545454547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33724.40761997783,
            "unit": "ns/iter",
            "extra": "iterations: 24567\ncpu: 33720.03093580819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50383.0990187281,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 50379.744275944126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55750.25329999335,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55747.14000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70362.26621405655,
            "unit": "ns/iter",
            "extra": "iterations: 12520\ncpu: 70360.68690095849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84153.5494239542,
            "unit": "ns/iter",
            "extra": "iterations: 10329\ncpu: 84145.96766385899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96595.85973015125,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 96586.04594627439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112575.62570417997,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 112562.8324380978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1187.6186589632464,
            "unit": "ns/iter",
            "extra": "iterations: 590558\ncpu: 1187.522817403199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.9573915363877,
            "unit": "ns/iter",
            "extra": "iterations: 719458\ncpu: 971.8711863652929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 917.107852798816,
            "unit": "ns/iter",
            "extra": "iterations: 764097\ncpu: 917.00503993603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 944.7665722501907,
            "unit": "ns/iter",
            "extra": "iterations: 741043\ncpu: 944.7285785035427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1838.7515378666847,
            "unit": "ns/iter",
            "extra": "iterations: 381535\ncpu: 1838.4855910991143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5160.336819999429,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5160.125000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29504.710790799556,
            "unit": "ns/iter",
            "extra": "iterations: 27959\ncpu: 29503.7841124504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23144.917067846596,
            "unit": "ns/iter",
            "extra": "iterations: 35728\ncpu: 23143.86755485896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22389.032136566166,
            "unit": "ns/iter",
            "extra": "iterations: 36905\ncpu: 22388.42704240615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23131.833690444328,
            "unit": "ns/iter",
            "extra": "iterations: 35470\ncpu: 23131.198195658308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70390.3130881104,
            "unit": "ns/iter",
            "extra": "iterations: 12859\ncpu: 70386.42196127225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552626.3470000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552560.200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554448.7268074211,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 554397.0569417784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552108.8341869432,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 552098.2074263763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555151.1238825559,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 555140.9961685843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324503.5955749028,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 324489.3362350386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551780.9197219182,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 551766.5613147912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2314397.2074998943,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2314140.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085752.0331360293,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1085698.224852069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3223812.356401584,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3223516.262975783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8146.464853076388,
            "unit": "ns/iter",
            "extra": "iterations: 101787\ncpu: 8146.300608132667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44000.638496658954,
            "unit": "ns/iter",
            "extra": "iterations: 18838\ncpu: 43995.493152139265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34753.36192188529,
            "unit": "ns/iter",
            "extra": "iterations: 23914\ncpu: 34749.71564773763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33544.80275839852,
            "unit": "ns/iter",
            "extra": "iterations: 24797\ncpu: 33541.58567568634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34727.51341554733,
            "unit": "ns/iter",
            "extra": "iterations: 24002\ncpu: 34723.86467794352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84223.80405858094,
            "unit": "ns/iter",
            "extra": "iterations: 10447\ncpu: 84215.03780989784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594426.4030000567,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594346.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593646.0471634195,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 593603.6910457942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581700.5351351431,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 581636.2837837806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583560.4146179557,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 583498.4717608007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334897.32771823456,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 334869.56355283456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 570948.2328947202,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 570890.5263157897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2480774.1706666397,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2480534.6666666805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1094661.0142857102,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1094559.166666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5253.61557999986,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5253.574999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28729.886036207692,
            "unit": "ns/iter",
            "extra": "iterations: 28667\ncpu: 28726.56713294051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22719.679302292134,
            "unit": "ns/iter",
            "extra": "iterations: 36405\ncpu: 22717.70910589196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21973.421058224165,
            "unit": "ns/iter",
            "extra": "iterations: 37648\ncpu: 21971.238844028823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22601.752017566436,
            "unit": "ns/iter",
            "extra": "iterations: 36430\ncpu: 22601.570134504556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68590.81911695053,
            "unit": "ns/iter",
            "extra": "iterations: 12638\ncpu: 68586.27947460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577817.1719999819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577790.8000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 572727.2652259504,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 572711.2639161763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571183.1749025065,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 571157.4772431729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572203.5789473328,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 572182.7160493799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328907.5737889863,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 328888.5467517848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562871.6937459984,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 562836.6860090281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 534.740693433047,
            "unit": "ns/iter",
            "extra": "iterations: 1318397\ncpu: 534.713822922834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3178.9052187623643,
            "unit": "ns/iter",
            "extra": "iterations: 220033\ncpu: 3178.8063608640578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2321.111231675007,
            "unit": "ns/iter",
            "extra": "iterations: 301362\ncpu: 2321.008620861302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2527.6670559059826,
            "unit": "ns/iter",
            "extra": "iterations: 276608\ncpu: 2527.648513419731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1960.347915284791,
            "unit": "ns/iter",
            "extra": "iterations: 357291\ncpu: 1960.2511678156009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17878.89669085923,
            "unit": "ns/iter",
            "extra": "iterations: 39406\ncpu: 17877.110084758577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30529.53921483199,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30525.992339832777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7213.292683928055,
            "unit": "ns/iter",
            "extra": "iterations: 97361\ncpu: 7212.418730292514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7193.604337541009,
            "unit": "ns/iter",
            "extra": "iterations: 97659\ncpu: 7192.972485894712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7197.271897679045,
            "unit": "ns/iter",
            "extra": "iterations: 97419\ncpu: 7196.791180365112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14513.85596716329,
            "unit": "ns/iter",
            "extra": "iterations: 48239\ncpu: 14513.339828769203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13774.509836449331,
            "unit": "ns/iter",
            "extra": "iterations: 51238\ncpu: 13774.220305241992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5202.037582258156,
            "unit": "ns/iter",
            "extra": "iterations: 134638\ncpu: 5201.9972073262625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26273.354886938287,
            "unit": "ns/iter",
            "extra": "iterations: 26755\ncpu: 26272.726593160165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20919.31219278335,
            "unit": "ns/iter",
            "extra": "iterations: 33364\ncpu: 20917.761659273667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20986.640581447868,
            "unit": "ns/iter",
            "extra": "iterations: 33365\ncpu: 20985.301963134927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21245.505305648116,
            "unit": "ns/iter",
            "extra": "iterations: 32701\ncpu: 21244.784563162968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48454.330796369,
            "unit": "ns/iter",
            "extra": "iterations: 14453\ncpu: 48451.78855600891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154425.93368584468,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 154421.3483146068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130030.13407820681,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130021.32216015008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130227.31375067263,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 130209.76684413425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130598.13550792265,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130597.09226467983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81863.08606557288,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 81859.29742388648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131309.90074487575,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 131293.57541899342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4855.519246095928,
            "unit": "ns/iter",
            "extra": "iterations: 143042\ncpu: 4855.364158778503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24980.02265360871,
            "unit": "ns/iter",
            "extra": "iterations: 28075\ncpu: 24978.610863757673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19858.375049775466,
            "unit": "ns/iter",
            "extra": "iterations: 35158\ncpu: 19857.210307753765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19725.71337651544,
            "unit": "ns/iter",
            "extra": "iterations: 35510\ncpu: 19725.19008729926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20371.080629219276,
            "unit": "ns/iter",
            "extra": "iterations: 34392\ncpu: 20370.664689462727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46755.934537694775,
            "unit": "ns/iter",
            "extra": "iterations: 15001\ncpu: 46754.86300913277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151380.9922796452,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 151376.0025734499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127686.60776098829,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127683.11167790211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126336.7217909333,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126328.94024192118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126780.42402316688,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 126779.30535456033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80932.53939464569,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 80930.73012939052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126130.23988440054,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 126124.18713873043 ns\nthreads: 1"
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
        "date": 1702503989778,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1394.0973504374658,
            "unit": "ns/iter",
            "extra": "iterations: 450414\ncpu: 1393.9966342076405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15830.01975781927,
            "unit": "ns/iter",
            "extra": "iterations: 52688\ncpu: 15829.323565138171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33688.964449355924,
            "unit": "ns/iter",
            "extra": "iterations: 24444\ncpu: 33686.65112092948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50286.30505157904,
            "unit": "ns/iter",
            "extra": "iterations: 16866\ncpu: 50285.26028696787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55729.67069999777,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55726.94999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70351.0409211194,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 70348.27088181015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83681.93908629048,
            "unit": "ns/iter",
            "extra": "iterations: 10441\ncpu: 83679.61881045876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97526.17710115426,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 97523.20675105485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112892.21832384137,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 112886.13795842703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1166.0216603786064,
            "unit": "ns/iter",
            "extra": "iterations: 599020\ncpu: 1165.9859437080547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.7311364172906,
            "unit": "ns/iter",
            "extra": "iterations: 715943\ncpu: 971.6913217951702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 915.6822301755475,
            "unit": "ns/iter",
            "extra": "iterations: 761375\ncpu: 915.6649482843541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 936.3051209217625,
            "unit": "ns/iter",
            "extra": "iterations: 747756\ncpu: 936.3046234333142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1847.7247706177493,
            "unit": "ns/iter",
            "extra": "iterations: 378844\ncpu: 1847.6586668919142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5337.73113000052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5337.4349999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28853.927219081135,
            "unit": "ns/iter",
            "extra": "iterations: 28469\ncpu: 28852.850468931112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22679.029792675392,
            "unit": "ns/iter",
            "extra": "iterations: 35982\ncpu: 22678.59485298204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22601.40472939873,
            "unit": "ns/iter",
            "extra": "iterations: 36622\ncpu: 22600.980285074576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23254.10739754205,
            "unit": "ns/iter",
            "extra": "iterations: 34917\ncpu: 23253.690179568683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71015.89066058691,
            "unit": "ns/iter",
            "extra": "iterations: 12731\ncpu: 71008.34969758856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 572207.4220000196,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572130.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555447.8709055621,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 555391.7790622987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 570032.554499377,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 569957.4144486677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554225.0748082093,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 554176.0869565234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 317430.30809015903,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 317402.51200591144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561964.4166666891,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 561939.0977443608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2332539.5929647363,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2332418.090452261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1084918.9487484316,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1084857.2109654357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3235158.8257839177,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3234886.411149835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8199.341951609662,
            "unit": "ns/iter",
            "extra": "iterations: 102418\ncpu: 8199.342888945284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43884.131860525544,
            "unit": "ns/iter",
            "extra": "iterations: 18785\ncpu: 43882.778812882476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34772.12234042812,
            "unit": "ns/iter",
            "extra": "iterations: 23876\ncpu: 34771.431563075785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34146.62573940076,
            "unit": "ns/iter",
            "extra": "iterations: 24344\ncpu: 34145.8798882682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34310.85283893377,
            "unit": "ns/iter",
            "extra": "iterations: 24164\ncpu: 34310.06042046002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82749.57630447502,
            "unit": "ns/iter",
            "extra": "iterations: 10694\ncpu: 82746.97026369916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600387.60000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600387.5999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 581887.6190476528,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 581857.7551020447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 572144.986111101,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 572118.0555555564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 572683.1310935819,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 572674.374176547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334456.12403994094,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 334446.2365591386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 566691.9767441517,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 566677.1317829454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2468858.140957461,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2468854.787234035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1100068.0847255753,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1100000.7159904588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5228.826910000635,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5228.837000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28334.177173422093,
            "unit": "ns/iter",
            "extra": "iterations: 28791\ncpu: 28333.572991559937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22557.581014326715,
            "unit": "ns/iter",
            "extra": "iterations: 36438\ncpu: 22555.56012953514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21781.6587272149,
            "unit": "ns/iter",
            "extra": "iterations: 37744\ncpu: 21779.53582026289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22082.516519069537,
            "unit": "ns/iter",
            "extra": "iterations: 36473\ncpu: 22080.305979765842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68965.28417976997,
            "unit": "ns/iter",
            "extra": "iterations: 12661\ncpu: 68958.02069346819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566558.3410000182,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566361.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 564559.5262820553,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 564550.0641025619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 563413.6222929729,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 563413.2484076436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569367.7880331379,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 569352.7052832589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327767.6213775156,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 327757.3579224683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567405.3369986628,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567390.4269081482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.7399641035773,
            "unit": "ns/iter",
            "extra": "iterations: 1295948\ncpu: 540.7215412964099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3157.0468181265437,
            "unit": "ns/iter",
            "extra": "iterations: 221709\ncpu: 3156.9548371964906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.36617239932,
            "unit": "ns/iter",
            "extra": "iterations: 302333\ncpu: 2308.308057671506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2536.261644113337,
            "unit": "ns/iter",
            "extra": "iterations: 276234\ncpu: 2536.2178442914364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1972.0631043072449,
            "unit": "ns/iter",
            "extra": "iterations: 354952\ncpu: 1972.0114268971593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18136.950798423444,
            "unit": "ns/iter",
            "extra": "iterations: 38576\ncpu: 18136.09757362096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30347.89570685252,
            "unit": "ns/iter",
            "extra": "iterations: 23060\ncpu: 30346.431049436218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7342.182947912686,
            "unit": "ns/iter",
            "extra": "iterations: 95437\ncpu: 7341.845405869831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7364.562685073389,
            "unit": "ns/iter",
            "extra": "iterations: 94895\ncpu: 7364.570314558192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7405.007704699254,
            "unit": "ns/iter",
            "extra": "iterations: 94358\ncpu: 7404.654613281276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14611.171094825319,
            "unit": "ns/iter",
            "extra": "iterations: 48026\ncpu: 14610.994044892179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13982.88362765613,
            "unit": "ns/iter",
            "extra": "iterations: 50115\ncpu: 13982.186969968947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5122.947601536159,
            "unit": "ns/iter",
            "extra": "iterations: 134336\ncpu: 5122.771260123879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26047.867531985758,
            "unit": "ns/iter",
            "extra": "iterations: 26965\ncpu: 26047.190802892885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20590.192949575143,
            "unit": "ns/iter",
            "extra": "iterations: 33615\ncpu: 20589.891417521838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20700.231434473902,
            "unit": "ns/iter",
            "extra": "iterations: 33880\ncpu: 20699.365407320045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21161.500271182846,
            "unit": "ns/iter",
            "extra": "iterations: 33188\ncpu: 21160.82017596721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48729.77077223536,
            "unit": "ns/iter",
            "extra": "iterations: 14322\ncpu: 48727.503142019756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156524.94610517134,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 156521.47065240884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130204.58703326233,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130204.62567341582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130992.47273066387,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130988.17706387625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129326.20424107218,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 129323.38169642973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81900.59263615691,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 81894.61239854201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130594.10003718923,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130582.27965786442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4881.1081079191135,
            "unit": "ns/iter",
            "extra": "iterations: 142922\ncpu: 4880.72445109926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24774.922360360633,
            "unit": "ns/iter",
            "extra": "iterations: 28233\ncpu: 24773.148443311016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19740.26445745784,
            "unit": "ns/iter",
            "extra": "iterations: 35518\ncpu: 19737.955402894055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19468.767424411042,
            "unit": "ns/iter",
            "extra": "iterations: 35984\ncpu: 19466.65462427749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20135.513139256553,
            "unit": "ns/iter",
            "extra": "iterations: 34591\ncpu: 20133.283223959905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47158.5421412289,
            "unit": "ns/iter",
            "extra": "iterations: 14926\ncpu: 47153.71164411093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151572.10115291888,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 151552.81705459888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127236.994912799,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 127218.4956395333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126190.1288233309,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 126178.48146815461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126983.25550741528,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 126966.14301191663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81189.91903162324,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81187.6983667321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126233.83224989341,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 126218.6348862402 ns\nthreads: 1"
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
        "date": 1705575638612,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1390.8397241199636,
            "unit": "ns/iter",
            "extra": "iterations: 507032\ncpu: 1390.7437794853188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15919.659245577102,
            "unit": "ns/iter",
            "extra": "iterations: 51430\ncpu: 15918.973361851058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33636.530499226246,
            "unit": "ns/iter",
            "extra": "iterations: 24558\ncpu: 33635.20237804382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49538.73779104877,
            "unit": "ns/iter",
            "extra": "iterations: 16750\ncpu: 49535.85671641792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55735.08558021481,
            "unit": "ns/iter",
            "extra": "iterations: 13426\ncpu: 55733.06271413671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69850.11598100454,
            "unit": "ns/iter",
            "extra": "iterations: 12640\ncpu: 69846.64556962025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82947.27608842868,
            "unit": "ns/iter",
            "extra": "iterations: 10359\ncpu: 82942.55236991982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96107.21391438368,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 96099.72348191572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113261.2916453729,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 113252.98926928986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1168.4960911053015,
            "unit": "ns/iter",
            "extra": "iterations: 599658\ncpu: 1168.4201661613793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 979.6789763242386,
            "unit": "ns/iter",
            "extra": "iterations: 712882\ncpu: 979.655819616712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 914.194286580688,
            "unit": "ns/iter",
            "extra": "iterations: 765076\ncpu: 914.1801598795419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 948.396782321249,
            "unit": "ns/iter",
            "extra": "iterations: 736618\ncpu: 948.3447322764299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1834.3069531966214,
            "unit": "ns/iter",
            "extra": "iterations: 381019\ncpu: 1834.2153540899517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5342.231320000792,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5341.748000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29620.038817331948,
            "unit": "ns/iter",
            "extra": "iterations: 28106\ncpu: 29618.761118622413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23652.97263880998,
            "unit": "ns/iter",
            "extra": "iterations: 34940\ncpu: 23651.259301659953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22595.537064298565,
            "unit": "ns/iter",
            "extra": "iterations: 36005\ncpu: 22594.559089015376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23162.107608385726,
            "unit": "ns/iter",
            "extra": "iterations: 34830\ncpu: 23160.221073786943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71591.85408419307,
            "unit": "ns/iter",
            "extra": "iterations: 12377\ncpu: 71588.90684333864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561691.7749999857,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561688.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558608.1232258361,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 558586.9677419338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553684.1793721414,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 553671.3645099285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555586.1171925347,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 555561.3650998059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323039.1286245349,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 323027.47211895965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 548877.0134014094,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 548861.7740906173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2321321.349127356,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2321279.052369083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1082212.2051282488,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1082162.354312356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3201674.7758007925,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3201580.7829181403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8205.66314143299,
            "unit": "ns/iter",
            "extra": "iterations: 102310\ncpu: 8205.4823575408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43323.65957780758,
            "unit": "ns/iter",
            "extra": "iterations: 19091\ncpu: 43322.32465559692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34683.92277410108,
            "unit": "ns/iter",
            "extra": "iterations: 23878\ncpu: 34682.733059720296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34174.82901128051,
            "unit": "ns/iter",
            "extra": "iterations: 24294\ncpu: 34173.93183502101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33216.18344444917,
            "unit": "ns/iter",
            "extra": "iterations: 24149\ncpu: 33215.58242577344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84000.29680015352,
            "unit": "ns/iter",
            "extra": "iterations: 10438\ncpu: 83998.05518298585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 591496.699000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591493.1999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 571839.5697211327,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 571824.6347941555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 561558.9105744074,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 561539.0992167101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 571895.3470857869,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 571884.4793713152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332056.2105062748,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 332046.783403121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580999.7369109831,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 580981.8717277469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2473890.766755883,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2473746.1126005338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1098537.464370494,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1098501.6627078408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5345.178679999663,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5344.921000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29257.45973485654,
            "unit": "ns/iter",
            "extra": "iterations: 28362\ncpu: 29256.907129257248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23262.505270518148,
            "unit": "ns/iter",
            "extra": "iterations: 35765\ncpu: 23260.841604921032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22431.957247667648,
            "unit": "ns/iter",
            "extra": "iterations: 37074\ncpu: 22431.348114581608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22452.263663140868,
            "unit": "ns/iter",
            "extra": "iterations: 36668\ncpu: 22450.771790116713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70095.43392646144,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 70092.7560300511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579923.8050000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579889.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574744.6717305258,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 574726.3540290613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570117.003253108,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 570096.9420949938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573727.2765818981,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 573698.564905414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332008.5464939018,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 332002.74390243756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565472.9492518246,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 565455.6929082597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.8114675973687,
            "unit": "ns/iter",
            "extra": "iterations: 1312533\ncpu: 541.7939206099967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3178.4400660240094,
            "unit": "ns/iter",
            "extra": "iterations: 220526\ncpu: 3178.2760309442056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2501.2776632130285,
            "unit": "ns/iter",
            "extra": "iterations: 279803\ncpu: 2501.228364241976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2551.08366245509,
            "unit": "ns/iter",
            "extra": "iterations: 274974\ncpu: 2550.9910027857277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.820383428733,
            "unit": "ns/iter",
            "extra": "iterations: 360067\ncpu: 1951.7562009292838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17779.914728682437,
            "unit": "ns/iter",
            "extra": "iterations: 39345\ncpu: 17778.383530308707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30787.156552757824,
            "unit": "ns/iter",
            "extra": "iterations: 22708\ncpu: 30786.018143385885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7312.658260207552,
            "unit": "ns/iter",
            "extra": "iterations: 95839\ncpu: 7312.454220098232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7208.580660134346,
            "unit": "ns/iter",
            "extra": "iterations: 96950\ncpu: 7208.543579164527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7262.145291601018,
            "unit": "ns/iter",
            "extra": "iterations: 96296\ncpu: 7261.902882778123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14581.642309388792,
            "unit": "ns/iter",
            "extra": "iterations: 47597\ncpu: 14580.677353614667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13685.696440078564,
            "unit": "ns/iter",
            "extra": "iterations: 51209\ncpu: 13685.3131285517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5120.196971028678,
            "unit": "ns/iter",
            "extra": "iterations: 136548\ncpu: 5119.985646073142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25578.884336463256,
            "unit": "ns/iter",
            "extra": "iterations: 27165\ncpu: 25578.729983434587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20681.60368200056,
            "unit": "ns/iter",
            "extra": "iterations: 33786\ncpu: 20680.8707748773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20694.691329583467,
            "unit": "ns/iter",
            "extra": "iterations: 33424\ncpu: 20693.770943034942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21113.395369194746,
            "unit": "ns/iter",
            "extra": "iterations: 33126\ncpu: 21112.956589989637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48644.93506855333,
            "unit": "ns/iter",
            "extra": "iterations: 14369\ncpu: 48644.68647783444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154884.46187945365,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 154878.65691489418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130989.9388098697,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 130987.38772454932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130336.8203125144,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130334.46800595324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130044.59293681917,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 130038.69888475839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82233.53156846778,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 82229.69427199113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129530.93339517665,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129520.46382189197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4876.400914846131,
            "unit": "ns/iter",
            "extra": "iterations: 143412\ncpu: 4876.3067246813625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24792.08786344155,
            "unit": "ns/iter",
            "extra": "iterations: 28237\ncpu: 24791.03304175386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19957.224134974706,
            "unit": "ns/iter",
            "extra": "iterations: 35028\ncpu: 19956.549046477146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19552.337976273186,
            "unit": "ns/iter",
            "extra": "iterations: 35825\ncpu: 19551.268667131906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19910.319397042644,
            "unit": "ns/iter",
            "extra": "iterations: 35160\ncpu: 19910.196245733645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46495.62220596354,
            "unit": "ns/iter",
            "extra": "iterations: 15032\ncpu: 46493.55375199557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151506.89601721434,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 151503.65984929944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126875.8415589013,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 126867.23729739389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125587.38955463358,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 125585.11894115609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125758.7402154359,
            "unit": "ns/iter",
            "extra": "iterations: 5570\ncpu: 125755.81687612181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80180.96140631991,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80175.40082455422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126006.29886914259,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 126003.89517142552 ns\nthreads: 1"
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
        "date": 1705773440983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1340.0604471689587,
            "unit": "ns/iter",
            "extra": "iterations: 514168\ncpu: 1340.0345801372316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15812.482084060919,
            "unit": "ns/iter",
            "extra": "iterations: 51630\ncpu: 15811.628897927563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34017.54146261032,
            "unit": "ns/iter",
            "extra": "iterations: 24299\ncpu: 34016.9760072431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50710.43819210278,
            "unit": "ns/iter",
            "extra": "iterations: 16616\ncpu: 50709.23808377466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56040.33569999274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56039.41000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71091.41622010195,
            "unit": "ns/iter",
            "extra": "iterations: 12503\ncpu: 71087.37103095256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83193.99577207991,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 83190.72739502262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96586.80827402415,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 96583.19617437718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112557.10132442431,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 112552.05091937764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1164.9345240273337,
            "unit": "ns/iter",
            "extra": "iterations: 601610\ncpu: 1164.874918967438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 968.3859119389533,
            "unit": "ns/iter",
            "extra": "iterations: 723634\ncpu: 968.3917560534752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 905.4662373822126,
            "unit": "ns/iter",
            "extra": "iterations: 769653\ncpu: 905.4719464485929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 930.0377872492394,
            "unit": "ns/iter",
            "extra": "iterations: 753614\ncpu: 929.9790078209799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1833.4625856574376,
            "unit": "ns/iter",
            "extra": "iterations: 381899\ncpu: 1833.3666754822616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5326.988730000721,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5326.857000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29726.547469268047,
            "unit": "ns/iter",
            "extra": "iterations: 27660\ncpu: 29725.560375994246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23473.427647765257,
            "unit": "ns/iter",
            "extra": "iterations: 34954\ncpu: 23472.589689305958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22661.692685753133,
            "unit": "ns/iter",
            "extra": "iterations: 36217\ncpu: 22660.598613910595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23684.820388069475,
            "unit": "ns/iter",
            "extra": "iterations: 34942\ncpu: 23683.91334210982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71061.93268691907,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 71058.95504447482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551812.6069999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551816.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554893.6067839778,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 554866.457286431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553741.0572687283,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 553716.4254247956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 570164.8107594504,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 570093.3544303784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320414.9542435144,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 320401.918819188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565541.0557742298,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 565533.1364829399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2330560.430000048,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2330489.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1086726.643610754,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1086672.6846424367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3223870.479166872,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3223710.763888881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8218.092330682828,
            "unit": "ns/iter",
            "extra": "iterations: 102382\ncpu: 8217.814654919786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44822.130220865125,
            "unit": "ns/iter",
            "extra": "iterations: 18699\ncpu: 44822.42900689877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34058.1776412071,
            "unit": "ns/iter",
            "extra": "iterations: 23919\ncpu: 34057.23901500888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32445.904015673765,
            "unit": "ns/iter",
            "extra": "iterations: 25525\ncpu: 32444.544564152842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33100.388595059725,
            "unit": "ns/iter",
            "extra": "iterations: 25147\ncpu: 33099.51087604864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82071.26203004002,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 82068.37271596635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601167.3550000296,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601157.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596051.057455562,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 596023.0506155982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 580572.4708249107,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580556.8075117364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583455.9085446799,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 583453.6048064063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334504.65525198303,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 334497.4990380927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585635.928242228,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 585620.276497695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2493416.9839144577,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2493277.4798927545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1074301.5977011744,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1074257.2413793078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5274.209809999775,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5273.877999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28829.655295601155,
            "unit": "ns/iter",
            "extra": "iterations: 28552\ncpu: 28828.45685065848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22960.696124762133,
            "unit": "ns/iter",
            "extra": "iterations: 35972\ncpu: 22959.69365061727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22060.02965399341,
            "unit": "ns/iter",
            "extra": "iterations: 37398\ncpu: 22058.63415155894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22144.166329819178,
            "unit": "ns/iter",
            "extra": "iterations: 36614\ncpu: 22143.368656797913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69309.25963727932,
            "unit": "ns/iter",
            "extra": "iterations: 12737\ncpu: 69307.4742875088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579371.4909999608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579336.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578258.5617161243,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 578213.2013201327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573971.4717105029,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573951.5789473702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 577059.975561418,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 577040.2245706758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329638.6838565047,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 329618.23617339245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568526.2845052108,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568501.8880208364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.2680912341228,
            "unit": "ns/iter",
            "extra": "iterations: 1315955\ncpu: 532.2464673944054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3174.4091432682085,
            "unit": "ns/iter",
            "extra": "iterations: 219637\ncpu: 3174.258890806199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2610.4461457848342,
            "unit": "ns/iter",
            "extra": "iterations: 291992\ncpu: 2610.30918655307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2557.98690858327,
            "unit": "ns/iter",
            "extra": "iterations: 282246\ncpu: 2557.869376359612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1967.704274004763,
            "unit": "ns/iter",
            "extra": "iterations: 351731\ncpu: 1967.6372000193319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17771.435547073113,
            "unit": "ns/iter",
            "extra": "iterations: 39300\ncpu: 17770.590330788793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31287.126941500475,
            "unit": "ns/iter",
            "extra": "iterations: 22341\ncpu: 31285.390089969558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7427.81119891233,
            "unit": "ns/iter",
            "extra": "iterations: 94152\ncpu: 7427.460914266374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7288.391948732068,
            "unit": "ns/iter",
            "extra": "iterations: 95811\ncpu: 7288.3656365135275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7334.564810158947,
            "unit": "ns/iter",
            "extra": "iterations: 95448\ncpu: 7334.611516218262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14628.210933415656,
            "unit": "ns/iter",
            "extra": "iterations: 47835\ncpu: 14627.415072645692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13867.769281058823,
            "unit": "ns/iter",
            "extra": "iterations: 50477\ncpu: 13866.919587138758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.180621410639,
            "unit": "ns/iter",
            "extra": "iterations: 135820\ncpu: 5164.978648210846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25581.770794280994,
            "unit": "ns/iter",
            "extra": "iterations: 27207\ncpu: 25580.83581431281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20660.472218132996,
            "unit": "ns/iter",
            "extra": "iterations: 33961\ncpu: 20659.217926444944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20678.61159248778,
            "unit": "ns/iter",
            "extra": "iterations: 33815\ncpu: 20677.252698506538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20970.390707023987,
            "unit": "ns/iter",
            "extra": "iterations: 33337\ncpu: 20970.099289078124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49513.55296026797,
            "unit": "ns/iter",
            "extra": "iterations: 14171\ncpu: 49511.82697057354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155630.68649013687,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 155623.3168761239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130544.60652377448,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130542.57222740108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131092.98466141193,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131090.98391320417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129635.26490188342,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129629.80377637956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81663.71167074659,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81659.48466829845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129392.26100629488,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 129385.27561968053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4911.8764963749245,
            "unit": "ns/iter",
            "extra": "iterations: 142344\ncpu: 4911.609200247281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25216.371457525715,
            "unit": "ns/iter",
            "extra": "iterations: 27629\ncpu: 25215.186941257452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20217.058050861986,
            "unit": "ns/iter",
            "extra": "iterations: 34487\ncpu: 20216.35108881617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19986.896337427574,
            "unit": "ns/iter",
            "extra": "iterations: 34757\ncpu: 19985.97980262945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20448.803608908715,
            "unit": "ns/iter",
            "extra": "iterations: 34304\ncpu: 20447.393889925374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46872.83921567984,
            "unit": "ns/iter",
            "extra": "iterations: 14790\ncpu: 46870.797836375474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151292.66225883382,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 151285.75764144756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127164.16515755514,
            "unit": "ns/iter",
            "extra": "iterations: 5522\ncpu: 127157.64215863727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126176.30665224716,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 126170.48855237041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127047.49519491347,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 127046.74524025447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80953.12773850135,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 80949.5885012164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126237.49160194962,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 126232.9239660457 ns\nthreads: 1"
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
        "date": 1705774894260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1457.6508414564066,
            "unit": "ns/iter",
            "extra": "iterations: 517971\ncpu: 1457.5454996515252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16185.077447761885,
            "unit": "ns/iter",
            "extra": "iterations: 50873\ncpu: 16183.824425530245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34107.64825425562,
            "unit": "ns/iter",
            "extra": "iterations: 24259\ncpu: 34106.97473102766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50634.63851088507,
            "unit": "ns/iter",
            "extra": "iterations: 16681\ncpu: 50633.69702056235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57234.64909999621,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57234.36 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70536.91117967098,
            "unit": "ns/iter",
            "extra": "iterations: 12317\ncpu: 70535.87724283511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83912.82693242593,
            "unit": "ns/iter",
            "extra": "iterations: 10285\ncpu: 83912.29946524059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96257.91689999,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 96254.67577556278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112506.83652352705,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 112504.33264355926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1169.8280855466817,
            "unit": "ns/iter",
            "extra": "iterations: 599205\ncpu: 1169.7964803364443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 972.4821500948962,
            "unit": "ns/iter",
            "extra": "iterations: 713029\ncpu: 972.4528735857879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 917.383966117607,
            "unit": "ns/iter",
            "extra": "iterations: 763583\ncpu: 917.3658921165093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 931.961202610342,
            "unit": "ns/iter",
            "extra": "iterations: 745179\ncpu: 931.9021335813297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1810.5714304151113,
            "unit": "ns/iter",
            "extra": "iterations: 387454\ncpu: 1810.4603385176044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5004.003340000054,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5003.6680000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28305.365310508227,
            "unit": "ns/iter",
            "extra": "iterations: 29323\ncpu: 28304.092350714443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22185.84480210524,
            "unit": "ns/iter",
            "extra": "iterations: 37217\ncpu: 22185.068651422724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20844.406058595298,
            "unit": "ns/iter",
            "extra": "iterations: 39184\ncpu: 20843.242139648817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22488.314003165593,
            "unit": "ns/iter",
            "extra": "iterations: 37920\ncpu: 22487.341772151845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71925.22211523287,
            "unit": "ns/iter",
            "extra": "iterations: 12462\ncpu: 71920.39800995024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559611.1680000605,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559597.8000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565426.1179487846,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 565383.8461538472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556404.2092731725,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 556385.213032582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 547781.4665415466,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 547743.7773608497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 317263.25901640375,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 317246.5209471766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 550257.6245306373,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 550238.1101376722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2316180.668329121,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2316040.6483790525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1072233.3636363836,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1072191.1421911428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3191471.6517243157,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3191299.6551724127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8138.854464032503,
            "unit": "ns/iter",
            "extra": "iterations: 102497\ncpu: 8138.454784042455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44323.59149436082,
            "unit": "ns/iter",
            "extra": "iterations: 18717\ncpu: 44321.00229737666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35099.577030460365,
            "unit": "ns/iter",
            "extra": "iterations: 23640\ncpu: 35097.3138747884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34324.86318520954,
            "unit": "ns/iter",
            "extra": "iterations: 24281\ncpu: 34323.22391993748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34699.28853061667,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 34697.180686659354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82440.01582069162,
            "unit": "ns/iter",
            "extra": "iterations: 10619\ncpu: 82436.67011959672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597370.5989999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597335.2000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591483.0441683804,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 591454.3823326457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587350.581805878,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 587314.6639511182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596484.136394332,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 596457.798784603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338161.86390075437,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 338145.9480418765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 565901.0770804875,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 565865.1432469318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2465324.4840423926,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2465210.638297873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1094819.4071005613,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1094739.881656808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5334.488020000663,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5334.380999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29026.799370850655,
            "unit": "ns/iter",
            "extra": "iterations: 28610\ncpu: 29026.53617616207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22954.05557863296,
            "unit": "ns/iter",
            "extra": "iterations: 36111\ncpu: 22953.158317410267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22426.56354296814,
            "unit": "ns/iter",
            "extra": "iterations: 36794\ncpu: 22426.11567103339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22429.54653990707,
            "unit": "ns/iter",
            "extra": "iterations: 36184\ncpu: 22428.93544107896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69164.42192454485,
            "unit": "ns/iter",
            "extra": "iterations: 12616\ncpu: 69161.73113506677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 574835.2080000815,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574802.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579498.8856015487,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 579457.98816568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571429.9705882544,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 571425.3836317121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575779.6040312718,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 575762.1586475923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329633.09152796544,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 329611.4599092302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565391.4203084748,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 565380.5912596444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 530.9593866042427,
            "unit": "ns/iter",
            "extra": "iterations: 1323061\ncpu: 530.9230640159466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3106.52093908072,
            "unit": "ns/iter",
            "extra": "iterations: 226562\ncpu: 3106.468428068249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2348.931678792863,
            "unit": "ns/iter",
            "extra": "iterations: 297565\ncpu: 2348.84210172567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2481.0236439746195,
            "unit": "ns/iter",
            "extra": "iterations: 281890\ncpu: 2480.9347617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1933.940967457734,
            "unit": "ns/iter",
            "extra": "iterations: 362207\ncpu: 1933.9005044076844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17767.03150560335,
            "unit": "ns/iter",
            "extra": "iterations: 39612\ncpu: 17765.967383621217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29525.800338195622,
            "unit": "ns/iter",
            "extra": "iterations: 23655\ncpu: 29525.119425068813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7310.022507089436,
            "unit": "ns/iter",
            "extra": "iterations: 94859\ncpu: 7309.700713690816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7394.019073167501,
            "unit": "ns/iter",
            "extra": "iterations: 95055\ncpu: 7393.778338856537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7221.153211197823,
            "unit": "ns/iter",
            "extra": "iterations: 97160\ncpu: 7221.028200905783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14479.054008403464,
            "unit": "ns/iter",
            "extra": "iterations: 48548\ncpu: 14478.79830271078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13794.76664228063,
            "unit": "ns/iter",
            "extra": "iterations: 50579\ncpu: 13794.458174340982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5106.675125773207,
            "unit": "ns/iter",
            "extra": "iterations: 134766\ncpu: 5106.510544202489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25640.276274193206,
            "unit": "ns/iter",
            "extra": "iterations: 25938\ncpu: 25639.760197393894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20387.64046724739,
            "unit": "ns/iter",
            "extra": "iterations: 34072\ncpu: 20386.56374735838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20544.790988625657,
            "unit": "ns/iter",
            "extra": "iterations: 34290\ncpu: 20543.52289297181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20820.825122641527,
            "unit": "ns/iter",
            "extra": "iterations: 33635\ncpu: 20819.369704177236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48395.083506008225,
            "unit": "ns/iter",
            "extra": "iterations: 14478\ncpu: 48392.35391628604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154161.6039603979,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 154153.02530253047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131191.06408593018,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 131190.0351917008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128612.00624081831,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128609.0491923646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128963.16359955134,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128959.58778064155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 80940.91794159265,
            "unit": "ns/iter",
            "extra": "iterations: 8628\ncpu: 80934.13305517001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129996.1687441811,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 129991.98139534709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4929.772581769095,
            "unit": "ns/iter",
            "extra": "iterations: 142139\ncpu: 4929.619597717787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24970.15579735953,
            "unit": "ns/iter",
            "extra": "iterations: 28030\ncpu: 24969.447021049233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20018.194337306446,
            "unit": "ns/iter",
            "extra": "iterations: 35001\ncpu: 20016.8623753607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19543.837227525724,
            "unit": "ns/iter",
            "extra": "iterations: 35737\ncpu: 19542.728824467533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20159.467397609376,
            "unit": "ns/iter",
            "extra": "iterations: 34476\ncpu: 20158.11289012657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46530.760048071075,
            "unit": "ns/iter",
            "extra": "iterations: 14978\ncpu: 46528.895713713464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151382.33767078962,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 151372.97766211155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127167.67314326177,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 127162.97439622377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126073.0660445044,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 126066.67264895927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125418.09227736222,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 125415.55276831934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80933.52010601162,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 80932.86092867794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126034.96833961447,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 126026.9832703735 ns\nthreads: 1"
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
        "date": 1705778455214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1321.3370193491614,
            "unit": "ns/iter",
            "extra": "iterations: 527670\ncpu: 1321.3171110732087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15900.622093259992,
            "unit": "ns/iter",
            "extra": "iterations: 49110\ncpu: 15899.916513948281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34067.37388954985,
            "unit": "ns/iter",
            "extra": "iterations: 24427\ncpu: 34065.96798624472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50152.77781086099,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 50150.95878989995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55822.0790000064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55819.61 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70268.22407599047,
            "unit": "ns/iter",
            "extra": "iterations: 12527\ncpu: 70264.97964396903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83716.51272902933,
            "unit": "ns/iter",
            "extra": "iterations: 10370\ncpu: 83711.09932497588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96680.6161434989,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 96675.56053811655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111603.97492529619,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 111601.01338183707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1151.0228791031655,
            "unit": "ns/iter",
            "extra": "iterations: 596658\ncpu: 1150.954650737941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 969.5630955611643,
            "unit": "ns/iter",
            "extra": "iterations: 722428\ncpu: 969.5096258727514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 926.5981701703457,
            "unit": "ns/iter",
            "extra": "iterations: 771110\ncpu: 926.5496492069883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 939.9213003282897,
            "unit": "ns/iter",
            "extra": "iterations: 739444\ncpu: 939.8759067623791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1836.6234976826752,
            "unit": "ns/iter",
            "extra": "iterations: 381910\ncpu: 1836.5900343012768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5439.724310000429,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5439.428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29405.103770892598,
            "unit": "ns/iter",
            "extra": "iterations: 28004\ncpu: 29403.192401085544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23462.966529351306,
            "unit": "ns/iter",
            "extra": "iterations: 34956\ncpu: 23461.151161460104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22612.465756816866,
            "unit": "ns/iter",
            "extra": "iterations: 36343\ncpu: 22611.396967779223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23361.021704156934,
            "unit": "ns/iter",
            "extra": "iterations: 35431\ncpu: 23359.318111258486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72215.55704912961,
            "unit": "ns/iter",
            "extra": "iterations: 12498\ncpu: 72210.89774363898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 539826.809000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539801.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 547166.8748419526,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 547147.8508217455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 547797.0870406276,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 547763.2495164399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553248.9870718019,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 553223.9172592105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323581.08777084906,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 323569.22511935356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552449.7724665245,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 552412.1096239627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2330775.28606962,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2330646.7661691555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089776.8244364895,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1089721.9454329796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3206182.044827356,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3206127.9310344793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7982.5481480768885,
            "unit": "ns/iter",
            "extra": "iterations: 104729\ncpu: 7982.196908210703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43989.38676439006,
            "unit": "ns/iter",
            "extra": "iterations: 18828\ncpu: 43986.950286807005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34972.90697967805,
            "unit": "ns/iter",
            "extra": "iterations: 23769\ncpu: 34971.75312381676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32304.019539019562,
            "unit": "ns/iter",
            "extra": "iterations: 25641\ncpu: 32301.587301587126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33085.65165810921,
            "unit": "ns/iter",
            "extra": "iterations: 25119\ncpu: 33084.020064493045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83029.59877010262,
            "unit": "ns/iter",
            "extra": "iterations: 10570\ncpu: 83023.00851466427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 585196.5530000598,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585162.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590378.4603825272,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 590343.9207650273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 570098.9986746745,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 570075.4804506298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582364.3105298677,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582328.3031522465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336694.47113522206,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 336673.2274312272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574176.0173333053,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 574142.2666666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2478527.6373331724,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2478422.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1122000.1852300263,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1121959.079903151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5343.910249999908,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5343.309000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28738.52894107874,
            "unit": "ns/iter",
            "extra": "iterations: 28869\ncpu: 28736.54785409963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22918.187460311754,
            "unit": "ns/iter",
            "extra": "iterations: 36221\ncpu: 22917.285552579964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22235.684979433892,
            "unit": "ns/iter",
            "extra": "iterations: 37442\ncpu: 22234.96073927687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22772.086976012608,
            "unit": "ns/iter",
            "extra": "iterations: 35688\ncpu: 22765.671934543694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69038.9228830257,
            "unit": "ns/iter",
            "extra": "iterations: 12695\ncpu: 69034.57266640438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573757.6209999133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573718.300000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569124.1352593747,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 569081.6808929743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 561780.9479365008,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 561731.6825396842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 562783.1951684934,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 562745.8359821966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328268.2126610991,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 328245.22365428467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558443.184635219,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 558398.644286635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 543.4920083622872,
            "unit": "ns/iter",
            "extra": "iterations: 1291037\ncpu: 543.442287091698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3136.0738281319263,
            "unit": "ns/iter",
            "extra": "iterations: 229804\ncpu: 3135.856207898898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2604.9066122395666,
            "unit": "ns/iter",
            "extra": "iterations: 276578\ncpu: 2604.7527279827073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2534.1520576205057,
            "unit": "ns/iter",
            "extra": "iterations: 276290\ncpu: 2533.9154511563797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1947.6348245192814,
            "unit": "ns/iter",
            "extra": "iterations: 359356\ncpu: 1947.4668573781835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17362.87023108392,
            "unit": "ns/iter",
            "extra": "iterations: 40418\ncpu: 17361.596318471948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30766.42093012827,
            "unit": "ns/iter",
            "extra": "iterations: 22771\ncpu: 30765.161828641918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7296.79018201558,
            "unit": "ns/iter",
            "extra": "iterations: 95926\ncpu: 7296.593207263947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7200.813437898487,
            "unit": "ns/iter",
            "extra": "iterations: 97292\ncpu: 7200.2898491139385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7438.847278885897,
            "unit": "ns/iter",
            "extra": "iterations: 96817\ncpu: 7438.477746676738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14499.780799237617,
            "unit": "ns/iter",
            "extra": "iterations: 48321\ncpu: 14499.052171933308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13758.705580523914,
            "unit": "ns/iter",
            "extra": "iterations: 53400\ncpu: 13758.305243445537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5081.900549543321,
            "unit": "ns/iter",
            "extra": "iterations: 137023\ncpu: 5081.770943564229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25633.194293873566,
            "unit": "ns/iter",
            "extra": "iterations: 27304\ncpu: 25630.75739818341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20558.666774101537,
            "unit": "ns/iter",
            "extra": "iterations: 34130\ncpu: 20558.356284793466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20485.7545641318,
            "unit": "ns/iter",
            "extra": "iterations: 34070\ncpu: 20484.85471088931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20856.359869661763,
            "unit": "ns/iter",
            "extra": "iterations: 33451\ncpu: 20856.064093748984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48542.69444637813,
            "unit": "ns/iter",
            "extra": "iterations: 14351\ncpu: 48538.25517385562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155738.04707970363,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 155735.97601598792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128480.79892513438,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 128474.59229058569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128043.4547955196,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 128039.18943700612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129148.14494092467,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129141.39586410714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82038.97629385589,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82034.80812111282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 127634.92861034929,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 127627.62942779454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4848.85666359318,
            "unit": "ns/iter",
            "extra": "iterations: 144269\ncpu: 4848.723565006975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24735.39550505298,
            "unit": "ns/iter",
            "extra": "iterations: 27987\ncpu: 24735.03412298609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19892.284270427106,
            "unit": "ns/iter",
            "extra": "iterations: 35322\ncpu: 19890.52998131469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19635.78101780592,
            "unit": "ns/iter",
            "extra": "iterations: 35665\ncpu: 19634.190382727997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20071.025409127364,
            "unit": "ns/iter",
            "extra": "iterations: 34830\ncpu: 20069.819121447035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46802.644911128555,
            "unit": "ns/iter",
            "extra": "iterations: 14571\ncpu: 46799.05977626783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 149973.92753936775,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 149951.47724822015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 124336.30782887716,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 124327.94248180548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 123368.14592879046,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 123366.23193514215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 123400.40755115541,
            "unit": "ns/iter",
            "extra": "iterations: 5668\ncpu: 123398.46506704255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80050.89033435861,
            "unit": "ns/iter",
            "extra": "iterations: 8763\ncpu: 80041.2758187825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 123416.69610435287,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 123411.51066455146 ns\nthreads: 1"
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
        "date": 1705953616076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1458.142962202152,
            "unit": "ns/iter",
            "extra": "iterations: 480001\ncpu: 1458.075712342266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16233.090203070451,
            "unit": "ns/iter",
            "extra": "iterations: 50475\ncpu: 16232.794452699356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33876.300232482026,
            "unit": "ns/iter",
            "extra": "iterations: 24088\ncpu: 33873.98289604785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50203.51696129822,
            "unit": "ns/iter",
            "extra": "iterations: 16744\ncpu: 50201.3497372193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55971.944300000585,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55967.590000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70312.76190858727,
            "unit": "ns/iter",
            "extra": "iterations: 12449\ncpu: 70309.59916459155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82852.85817169669,
            "unit": "ns/iter",
            "extra": "iterations: 10414\ncpu: 82846.74476666022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96204.06725604362,
            "unit": "ns/iter",
            "extra": "iterations: 8936\ncpu: 96199.73142345561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111459.61610389811,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 111456.05194805203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1172.9717250598187,
            "unit": "ns/iter",
            "extra": "iterations: 596217\ncpu: 1172.9680636412572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 985.8422778562564,
            "unit": "ns/iter",
            "extra": "iterations: 715708\ncpu: 985.8123704080443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 923.712423455249,
            "unit": "ns/iter",
            "extra": "iterations: 759523\ncpu: 923.6306207975284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 946.4827675528694,
            "unit": "ns/iter",
            "extra": "iterations: 741218\ncpu: 946.4396439374104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1852.9712066285208,
            "unit": "ns/iter",
            "extra": "iterations: 378733\ncpu: 1852.847520548774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5329.543100000365,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5329.468999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29441.492285059063,
            "unit": "ns/iter",
            "extra": "iterations: 27868\ncpu: 29441.086550882734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23306.487964861775,
            "unit": "ns/iter",
            "extra": "iterations: 34607\ncpu: 23305.753171323693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22445.76806239817,
            "unit": "ns/iter",
            "extra": "iterations: 36540\ncpu: 22445.897646414884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22261.938538442424,
            "unit": "ns/iter",
            "extra": "iterations: 35209\ncpu: 22261.518361782488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71320.75642643224,
            "unit": "ns/iter",
            "extra": "iterations: 12682\ncpu: 71319.84702728284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 548107.271000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548073.7000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553477.2204773428,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 553473.5552763827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 551155.7276215301,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 551146.8030690547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556889.6677336486,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 556835.5953905259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323728.41109053284,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 323711.1275415891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 549690.2106273802,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 549667.3495518573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2311147.0496276133,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2311038.461538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1053055.6902049512,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 1053017.3120728945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3307168.4714282616,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3307088.928571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8073.307750957746,
            "unit": "ns/iter",
            "extra": "iterations: 103613\ncpu: 8073.170355071283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43469.42657747775,
            "unit": "ns/iter",
            "extra": "iterations: 18986\ncpu: 43464.17886864015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34245.40457281289,
            "unit": "ns/iter",
            "extra": "iterations: 23924\ncpu: 34243.70088613943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32825.55255754879,
            "unit": "ns/iter",
            "extra": "iterations: 25239\ncpu: 32823.40029319712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33354.92852537982,
            "unit": "ns/iter",
            "extra": "iterations: 24820\ncpu: 33354.20628525383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83271.47470816909,
            "unit": "ns/iter",
            "extra": "iterations: 10537\ncpu: 83268.81465312705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 593728.0399999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593704.6999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596201.4201910181,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 596176.9440654832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586866.761133578,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 586824.493927127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585989.985762754,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 585963.1864406825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337540.6660209164,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 337521.34831460635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571134.2258916424,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 571115.0594451764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2472242.7116402616,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472100 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1073476.6874999532,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1073416.203703702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5266.296470000498,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5266.1310000000585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28220.37035380171,
            "unit": "ns/iter",
            "extra": "iterations: 29056\ncpu: 28220.54308920698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23018.487601915625,
            "unit": "ns/iter",
            "extra": "iterations: 35691\ncpu: 23017.45818273505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21933.75583262161,
            "unit": "ns/iter",
            "extra": "iterations: 37376\ncpu: 21933.374357876743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22637.522004789258,
            "unit": "ns/iter",
            "extra": "iterations: 36333\ncpu: 22637.31593867823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69297.56048418807,
            "unit": "ns/iter",
            "extra": "iterations: 12805\ncpu: 69298.0242092933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584768.3859999507,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584723.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579261.239287998,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 579257.1522742242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569259.3473683946,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 569255.3289473695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 558063.958142555,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 558039.4375408797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326910.553113586,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 326908.35164835333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 553835.0439770457,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 553811.0898661576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 529.6003482537524,
            "unit": "ns/iter",
            "extra": "iterations: 1322599\ncpu: 529.5685237929283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3112.8959672554593,
            "unit": "ns/iter",
            "extra": "iterations: 225256\ncpu: 3112.705543914479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2586.2105726027366,
            "unit": "ns/iter",
            "extra": "iterations: 270624\ncpu: 2586.101010996802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2400.5946315474716,
            "unit": "ns/iter",
            "extra": "iterations: 290363\ncpu: 2400.413620192657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.1094235947699,
            "unit": "ns/iter",
            "extra": "iterations: 363980\ncpu: 1921.0099456014027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17820.586717296745,
            "unit": "ns/iter",
            "extra": "iterations: 38712\ncpu: 17820.166873320944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31363.739976888417,
            "unit": "ns/iter",
            "extra": "iterations: 22498\ncpu: 31363.5345364033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7416.400144303084,
            "unit": "ns/iter",
            "extra": "iterations: 94246\ncpu: 7416.1555928103035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7331.875100624393,
            "unit": "ns/iter",
            "extra": "iterations: 95653\ncpu: 7331.505546088571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7364.4407463339885,
            "unit": "ns/iter",
            "extra": "iterations: 94703\ncpu: 7363.543921523116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14468.946965623096,
            "unit": "ns/iter",
            "extra": "iterations: 48346\ncpu: 14468.669590038597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13772.622115838356,
            "unit": "ns/iter",
            "extra": "iterations: 50968\ncpu: 13772.571024956922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5178.706367207353,
            "unit": "ns/iter",
            "extra": "iterations: 134910\ncpu: 5178.575346527224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25848.830804530233,
            "unit": "ns/iter",
            "extra": "iterations: 27022\ncpu: 25849.026718969963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20813.412854093556,
            "unit": "ns/iter",
            "extra": "iterations: 33748\ncpu: 20812.76520090076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20703.483673954288,
            "unit": "ns/iter",
            "extra": "iterations: 33566\ncpu: 20703.622713460205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21023.350085562637,
            "unit": "ns/iter",
            "extra": "iterations: 33309\ncpu: 21022.594493980552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48749.00814366277,
            "unit": "ns/iter",
            "extra": "iterations: 14367\ncpu: 48748.743648638345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159251.09677418385,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 159247.10128581047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133686.41431011888,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 133687.32207250153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131562.66497174493,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131556.53483992282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132043.79161156842,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 132042.73568864656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83719.23327759627,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83717.98853320527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131899.65433721256,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131894.51746151102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5031.37399631647,
            "unit": "ns/iter",
            "extra": "iterations: 138988\ncpu: 5031.336518260649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25266.0049980248,
            "unit": "ns/iter",
            "extra": "iterations: 27811\ncpu: 25265.549602675088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20201.663506560024,
            "unit": "ns/iter",
            "extra": "iterations: 34598\ncpu: 20201.803572460904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20037.96541902691,
            "unit": "ns/iter",
            "extra": "iterations: 34759\ncpu: 20037.265168733364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20679.73994971234,
            "unit": "ns/iter",
            "extra": "iterations: 33805\ncpu: 20679.624315929508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46651.02480165036,
            "unit": "ns/iter",
            "extra": "iterations: 14999\ncpu: 46650.19667977787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153904.34433445407,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 153903.08030803048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128785.38880679233,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 128775.04617657758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127815.72301239903,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127813.16557257691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128522.95564516964,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128523.77199413656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83302.54875876398,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83299.84558736256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128374.16917430706,
            "unit": "ns/iter",
            "extra": "iterations: 5450\ncpu: 128373.08256880513 ns\nthreads: 1"
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
        "date": 1705955064978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1336.0670388936073,
            "unit": "ns/iter",
            "extra": "iterations: 525844\ncpu: 1336.0222803721256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16047.886184876768,
            "unit": "ns/iter",
            "extra": "iterations: 51364\ncpu: 16047.439841133868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33977.55428383348,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 33975.952077071925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50695.833303406995,
            "unit": "ns/iter",
            "extra": "iterations: 16707\ncpu: 50693.92470222061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56771.33439999694,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56769.31000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70569.94903225605,
            "unit": "ns/iter",
            "extra": "iterations: 12400\ncpu: 70565.17741935483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83878.32046443758,
            "unit": "ns/iter",
            "extra": "iterations: 10335\ncpu: 83876.05224963714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96592.26199754917,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 96586.95022825962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112617.01336653098,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 112614.44109553129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1159.1174614696704,
            "unit": "ns/iter",
            "extra": "iterations: 600631\ncpu: 1159.022594571376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 963.7997818999322,
            "unit": "ns/iter",
            "extra": "iterations: 723521\ncpu: 963.7724406064217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 909.3055724751371,
            "unit": "ns/iter",
            "extra": "iterations: 769981\ncpu: 909.2593193858032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.0836558351424,
            "unit": "ns/iter",
            "extra": "iterations: 744957\ncpu: 942.9812727446015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1840.3899519081283,
            "unit": "ns/iter",
            "extra": "iterations: 380729\ncpu: 1840.2929642869328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5360.995319999802,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5360.753999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29531.738036184815,
            "unit": "ns/iter",
            "extra": "iterations: 27416\ncpu: 29530.960023344076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23352.731993588168,
            "unit": "ns/iter",
            "extra": "iterations: 34932\ncpu: 23351.577350280575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22822.47242816048,
            "unit": "ns/iter",
            "extra": "iterations: 36958\ncpu: 22821.602900589805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23235.81406089487,
            "unit": "ns/iter",
            "extra": "iterations: 35076\ncpu: 23234.542137073728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71285.65439410701,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 71282.89578997911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557423.2709999478,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557415.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557491.8710292674,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 557475.3494282088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 544116.6142034685,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 544085.7325655787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551239.3297331384,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 551222.4269377385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319060.7469925002,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 319050.71428571525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 547476.6075000303,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 547434.8750000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2308633.5447763177,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2308526.1194029823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1088711.120750238,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1088669.0504103163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3189643.510416889,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3189482.2916666623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8069.795391122324,
            "unit": "ns/iter",
            "extra": "iterations: 102845\ncpu: 8069.411249939228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43866.73170219311,
            "unit": "ns/iter",
            "extra": "iterations: 19046\ncpu: 43865.3470544997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33601.94818674614,
            "unit": "ns/iter",
            "extra": "iterations: 23990\ncpu: 33600.82951229683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32363.635187428896,
            "unit": "ns/iter",
            "extra": "iterations: 25583\ncpu: 32362.838603760385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32898.28434224942,
            "unit": "ns/iter",
            "extra": "iterations: 25093\ncpu: 32896.584704897774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83143.99046075145,
            "unit": "ns/iter",
            "extra": "iterations: 10483\ncpu: 83143.39406658418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 583129.8330000436,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583103.1000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 581376.9542396157,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 581362.3822341836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582087.7778519446,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 582067.0446964632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 576387.3461021113,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 576352.8225806456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334230.8301232263,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 334217.8351309706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 567900.7689811881,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 567879.0395846857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2455142.0536192805,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2455011.528150132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1102925.1048291165,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1102860.5418139023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5288.804360000086,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5288.577000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28912.682695669784,
            "unit": "ns/iter",
            "extra": "iterations: 28594\ncpu: 28911.236623067885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22632.52655024481,
            "unit": "ns/iter",
            "extra": "iterations: 36591\ncpu: 22631.332841409087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21909.080934490896,
            "unit": "ns/iter",
            "extra": "iterations: 37796\ncpu: 21908.289236956214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22469.994083482474,
            "unit": "ns/iter",
            "extra": "iterations: 36846\ncpu: 22469.570645389038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70249.22884815904,
            "unit": "ns/iter",
            "extra": "iterations: 12493\ncpu: 70246.10581925868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572709.486000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572713.1000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578104.7537853842,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 578076.4318630649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568739.9278752352,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 568707.2124756353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571194.3379629725,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 571177.5793650768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327020.09962686436,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 327008.32089552085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 553994.8552035658,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 553960.5042016803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 530.9385508373538,
            "unit": "ns/iter",
            "extra": "iterations: 1316926\ncpu: 530.9173788048834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3122.412536241137,
            "unit": "ns/iter",
            "extra": "iterations: 223847\ncpu: 3122.3344516567345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2307.93719697994,
            "unit": "ns/iter",
            "extra": "iterations: 301960\ncpu: 2307.825870976297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2511.003100953463,
            "unit": "ns/iter",
            "extra": "iterations: 277979\ncpu: 2510.870245594102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1942.7366891443644,
            "unit": "ns/iter",
            "extra": "iterations: 359913\ncpu: 1942.7017084684271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17761.995560740997,
            "unit": "ns/iter",
            "extra": "iterations: 39421\ncpu: 17761.847746125262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31006.970112409905,
            "unit": "ns/iter",
            "extra": "iterations: 22685\ncpu: 31006.546175887197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7273.269100258916,
            "unit": "ns/iter",
            "extra": "iterations: 96072\ncpu: 7272.9848446998085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7189.215628009333,
            "unit": "ns/iter",
            "extra": "iterations: 97594\ncpu: 7188.734963215003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7223.165183755839,
            "unit": "ns/iter",
            "extra": "iterations: 96432\ncpu: 7222.945702671242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14464.097342940811,
            "unit": "ns/iter",
            "extra": "iterations: 48437\ncpu: 14463.294588847239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13664.054582963701,
            "unit": "ns/iter",
            "extra": "iterations: 50895\ncpu: 13664.114353079818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5141.564034964956,
            "unit": "ns/iter",
            "extra": "iterations: 135793\ncpu: 5141.352647043699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26096.55911786227,
            "unit": "ns/iter",
            "extra": "iterations: 26980\ncpu: 26095.56338028168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20781.53920814099,
            "unit": "ns/iter",
            "extra": "iterations: 33794\ncpu: 20780.46102858495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20646.916435548515,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 20646.165440732737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20914.97506982925,
            "unit": "ns/iter",
            "extra": "iterations: 33654\ncpu: 20914.51536221529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48588.431153125086,
            "unit": "ns/iter",
            "extra": "iterations: 14387\ncpu: 48585.34093278668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 151174.3635774503,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151164.54957874416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128032.49488490977,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 128024.38801607364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 126682.1981900393,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 126675.6742081437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130042.02975206086,
            "unit": "ns/iter",
            "extra": "iterations: 5445\ncpu: 130032.43342516008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81980.36036034895,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81978.44857844857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129531.86357738513,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 129528.6376274332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4932.558548183044,
            "unit": "ns/iter",
            "extra": "iterations: 141533\ncpu: 4932.463807027339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24882.784754003107,
            "unit": "ns/iter",
            "extra": "iterations: 27968\ncpu: 24881.600400457795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19932.152232687324,
            "unit": "ns/iter",
            "extra": "iterations: 35137\ncpu: 19932.074451433058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19605.790538455287,
            "unit": "ns/iter",
            "extra": "iterations: 35639\ncpu: 19605.61744156698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19984.513824483212,
            "unit": "ns/iter",
            "extra": "iterations: 34504\ncpu: 19984.584396011942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46138.31953992548,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46136.50846113211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 148866.84734608262,
            "unit": "ns/iter",
            "extra": "iterations: 4710\ncpu: 148861.27388534992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 124891.24736937348,
            "unit": "ns/iter",
            "extra": "iterations: 5607\ncpu: 124884.01997503242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 123795.6137286019,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 123790.41821069324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124904.74424414881,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 124899.01838300987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80329.47539290787,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 80324.90535734649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 124539.07402057828,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 124537.31720527018 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}