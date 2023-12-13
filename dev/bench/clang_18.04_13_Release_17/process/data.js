window.BENCHMARK_DATA = {
  "lastUpdate": 1702503991930,
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
      }
    ]
  }
}