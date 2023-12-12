window.BENCHMARK_DATA = {
  "lastUpdate": 1702394256152,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392448041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8575.886156068414,
            "unit": "ns/iter",
            "extra": "iterations: 81682\ncpu: 8575.054479567101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62893.97995976531,
            "unit": "ns/iter",
            "extra": "iterations: 13423\ncpu: 62891.77531103329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115952.92117693568,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 115944.12201376708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 175546.11672542596,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 175538.73873873876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 221787.60655738052,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 221766.3934426228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 276141.895374805,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 276133.7161084529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 327266.6609977166,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327262.4716553288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 381680.47848989157,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 381657.6382791917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 434732.44073709566,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 434706.3247011952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7239.066448723903,
            "unit": "ns/iter",
            "extra": "iterations: 96661\ncpu: 7238.653645213674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5931.245546042702,
            "unit": "ns/iter",
            "extra": "iterations: 118434\ncpu: 5931.101710657422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5813.203485720008,
            "unit": "ns/iter",
            "extra": "iterations: 120549\ncpu: 5812.924205095013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5931.425380693813,
            "unit": "ns/iter",
            "extra": "iterations: 118468\ncpu: 5930.918053820442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9812.236143801703,
            "unit": "ns/iter",
            "extra": "iterations: 71376\ncpu: 9811.807890607482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32975.60335285659,
            "unit": "ns/iter",
            "extra": "iterations: 24755\ncpu: 32973.51646132094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153446.66206773042,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 153439.43737681446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118228.0732788452,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 118220.21055547881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118623.25284800565,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 118615.37927201977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113001.98128483984,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 112996.25696840984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 383318.98330620525,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 383299.9185667749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2057943.23281597,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2057798.8913525466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1625231.033216721,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1625158.0419580457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1606270.2478337125,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1606168.8041594482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1634210.4007029415,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1634133.5676625622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 877448.5123105941,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 877385.0378787892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1574875.064406793,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574820.1694915248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40276.63291263024,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 40274.23931122197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178390.94126193173,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 178383.02200083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145831.4010531608,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 145823.47545439072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146170.8911529815,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 146164.13652572577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140354.64729884552,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 140348.08225885464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344755.2692763527,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 344735.3894820085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2085981.5707864799,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2085842.0224719108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1662135.701067718,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1662037.5444839823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1643444.7654320833,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1643377.9541446287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1649593.3309734752,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649475.0442477835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 906686.5243664712,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 906650.3898635423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1592256.1969179467,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1592046.9178082154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5595850.479999172,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5595276.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3363503.525362,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3363224.6376811536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31365.449017057406,
            "unit": "ns/iter",
            "extra": "iterations: 26146\ncpu: 31364.1780769524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144125.00134385444,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 144112.6322862425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113079.93554764912,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 113072.74284961117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114642.48051775918,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 114632.65278889793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110025.01746275995,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 110020.1592193116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298611.6973865399,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 298572.76478679455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2057951.2422906223,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2057844.7136563836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1613082.4062498857,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1612963.1944444464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1596205.0667809146,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1596105.136986308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1614915.6245672966,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1614779.4117647093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 876510.8937969591,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 876462.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1555393.0583333417,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1555317.6666666602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3233.398116533164,
            "unit": "ns/iter",
            "extra": "iterations: 216728\ncpu: 3233.2998043630832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20813.338555003756,
            "unit": "ns/iter",
            "extra": "iterations: 33578\ncpu: 20813.077014712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16102.42257271935,
            "unit": "ns/iter",
            "extra": "iterations: 43557\ncpu: 16102.396859287677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16809.200326672948,
            "unit": "ns/iter",
            "extra": "iterations: 41632\ncpu: 16807.227613374398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12345.960678121728,
            "unit": "ns/iter",
            "extra": "iterations: 56686\ncpu: 12345.094026743893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109935.1056580131,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 109924.4295092217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141606.38341757865,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141600.72800808895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34412.03513088062,
            "unit": "ns/iter",
            "extra": "iterations: 20324\ncpu: 34409.59948828938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33908.487007017924,
            "unit": "ns/iter",
            "extra": "iterations: 20665\ncpu: 33907.11347689331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34199.06904785248,
            "unit": "ns/iter",
            "extra": "iterations: 20522\ncpu: 34196.25280187134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64762.87047494938,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 64760.087028978676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56939.58378730186,
            "unit": "ns/iter",
            "extra": "iterations: 12299\ncpu: 56939.42596959132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23809.216467055747,
            "unit": "ns/iter",
            "extra": "iterations: 29307\ncpu: 23808.74876309396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119610.69258435091,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 119609.00839184789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96895.69043333673,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96885.86459919732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97507.33867371718,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 97499.83282251318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97169.04827299625,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 97162.60230267583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174258.60815514033,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174246.39482844603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605402.4477096543,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 605393.6905790954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 493902.29922368197,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 493867.889908253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493531.82278480526,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 493486.9198312211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 491355.03302877164,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 491324.52565003675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 310474.59920107655,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310434.84243231424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 483750.3176795715,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483725.7596685116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24376.796442274514,
            "unit": "ns/iter",
            "extra": "iterations: 28670\ncpu: 24375.79351238268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117164.61993978258,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 117162.42890598782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96204.45931758972,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 96200.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97366.33793007929,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 97363.0310628212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96509.65087694973,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96507.89946140067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168797.96772638257,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168791.5462427748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 600037.9897260325,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600006.8493150764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491238.71739129885,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491218.7938288948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 489966.4612700587,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 489958.68806699215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 494961.17638784274,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 494947.8566409008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 310028.78609391325,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 310015.67759078747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 483958.05955674953,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483944.04432132863 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392448041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8575.886156068414,
            "unit": "ns/iter",
            "extra": "iterations: 81682\ncpu: 8575.054479567101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62893.97995976531,
            "unit": "ns/iter",
            "extra": "iterations: 13423\ncpu: 62891.77531103329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115952.92117693568,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 115944.12201376708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 175546.11672542596,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 175538.73873873876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 221787.60655738052,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 221766.3934426228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 276141.895374805,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 276133.7161084529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 327266.6609977166,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327262.4716553288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 381680.47848989157,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 381657.6382791917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 434732.44073709566,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 434706.3247011952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7239.066448723903,
            "unit": "ns/iter",
            "extra": "iterations: 96661\ncpu: 7238.653645213674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5931.245546042702,
            "unit": "ns/iter",
            "extra": "iterations: 118434\ncpu: 5931.101710657422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5813.203485720008,
            "unit": "ns/iter",
            "extra": "iterations: 120549\ncpu: 5812.924205095013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5931.425380693813,
            "unit": "ns/iter",
            "extra": "iterations: 118468\ncpu: 5930.918053820442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9812.236143801703,
            "unit": "ns/iter",
            "extra": "iterations: 71376\ncpu: 9811.807890607482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32975.60335285659,
            "unit": "ns/iter",
            "extra": "iterations: 24755\ncpu: 32973.51646132094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153446.66206773042,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 153439.43737681446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118228.0732788452,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 118220.21055547881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118623.25284800565,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 118615.37927201977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113001.98128483984,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 112996.25696840984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 383318.98330620525,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 383299.9185667749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2057943.23281597,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2057798.8913525466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1625231.033216721,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1625158.0419580457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1606270.2478337125,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1606168.8041594482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1634210.4007029415,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1634133.5676625622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 877448.5123105941,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 877385.0378787892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1574875.064406793,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574820.1694915248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40276.63291263024,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 40274.23931122197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178390.94126193173,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 178383.02200083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145831.4010531608,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 145823.47545439072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146170.8911529815,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 146164.13652572577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140354.64729884552,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 140348.08225885464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344755.2692763527,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 344735.3894820085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2085981.5707864799,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2085842.0224719108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1662135.701067718,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1662037.5444839823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1643444.7654320833,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1643377.9541446287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1649593.3309734752,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649475.0442477835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 906686.5243664712,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 906650.3898635423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1592256.1969179467,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1592046.9178082154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5595850.479999172,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5595276.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3363503.525362,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3363224.6376811536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31365.449017057406,
            "unit": "ns/iter",
            "extra": "iterations: 26146\ncpu: 31364.1780769524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144125.00134385444,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 144112.6322862425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113079.93554764912,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 113072.74284961117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114642.48051775918,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 114632.65278889793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110025.01746275995,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 110020.1592193116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298611.6973865399,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 298572.76478679455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2057951.2422906223,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2057844.7136563836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1613082.4062498857,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1612963.1944444464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1596205.0667809146,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1596105.136986308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1614915.6245672966,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1614779.4117647093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 876510.8937969591,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 876462.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1555393.0583333417,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1555317.6666666602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3233.398116533164,
            "unit": "ns/iter",
            "extra": "iterations: 216728\ncpu: 3233.2998043630832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20813.338555003756,
            "unit": "ns/iter",
            "extra": "iterations: 33578\ncpu: 20813.077014712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16102.42257271935,
            "unit": "ns/iter",
            "extra": "iterations: 43557\ncpu: 16102.396859287677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16809.200326672948,
            "unit": "ns/iter",
            "extra": "iterations: 41632\ncpu: 16807.227613374398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12345.960678121728,
            "unit": "ns/iter",
            "extra": "iterations: 56686\ncpu: 12345.094026743893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109935.1056580131,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 109924.4295092217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141606.38341757865,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141600.72800808895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34412.03513088062,
            "unit": "ns/iter",
            "extra": "iterations: 20324\ncpu: 34409.59948828938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33908.487007017924,
            "unit": "ns/iter",
            "extra": "iterations: 20665\ncpu: 33907.11347689331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34199.06904785248,
            "unit": "ns/iter",
            "extra": "iterations: 20522\ncpu: 34196.25280187134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64762.87047494938,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 64760.087028978676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56939.58378730186,
            "unit": "ns/iter",
            "extra": "iterations: 12299\ncpu: 56939.42596959132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23809.216467055747,
            "unit": "ns/iter",
            "extra": "iterations: 29307\ncpu: 23808.74876309396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119610.69258435091,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 119609.00839184789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96895.69043333673,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96885.86459919732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97507.33867371718,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 97499.83282251318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97169.04827299625,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 97162.60230267583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174258.60815514033,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174246.39482844603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605402.4477096543,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 605393.6905790954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 493902.29922368197,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 493867.889908253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493531.82278480526,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 493486.9198312211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 491355.03302877164,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 491324.52565003675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 310474.59920107655,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310434.84243231424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 483750.3176795715,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483725.7596685116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24376.796442274514,
            "unit": "ns/iter",
            "extra": "iterations: 28670\ncpu: 24375.79351238268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117164.61993978258,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 117162.42890598782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96204.45931758972,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 96200.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97366.33793007929,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 97363.0310628212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96509.65087694973,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96507.89946140067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168797.96772638257,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168791.5462427748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 600037.9897260325,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600006.8493150764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491238.71739129885,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491218.7938288948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 489966.4612700587,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 489958.68806699215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 494961.17638784274,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 494947.8566409008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 310028.78609391325,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 310015.67759078747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 483958.05955674953,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483944.04432132863 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394255023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8262.968334843901,
            "unit": "ns/iter",
            "extra": "iterations: 84983\ncpu: 8262.740783450809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60392.80439999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60391.08000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110766.2844582343,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110763.65399534522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161912.96238067956,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 161912.31517873847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213056.83998030992,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 213054.0620384046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264157.3696711374,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 264146.1936662607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 315726.5773008526,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 315718.406693343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363887.3224592289,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 363878.6700125471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416744.73840265593,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 416729.89000478294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6904.946409558624,
            "unit": "ns/iter",
            "extra": "iterations: 101436\ncpu: 6904.742892069877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5698.831450132856,
            "unit": "ns/iter",
            "extra": "iterations: 122575\ncpu: 5698.441770344698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5692.990477040815,
            "unit": "ns/iter",
            "extra": "iterations: 123281\ncpu: 5692.709338827547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5753.875680596157,
            "unit": "ns/iter",
            "extra": "iterations: 121952\ncpu: 5753.640776699041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9655.817821945027,
            "unit": "ns/iter",
            "extra": "iterations: 72753\ncpu: 9655.742031256454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 35487.75611872697,
            "unit": "ns/iter",
            "extra": "iterations: 23044\ncpu: 35487.19840305502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 165728.06071152847,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 165725.05800464033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 125533.21303772656,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 125532.31537219184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 125455.78146083973,
            "unit": "ns/iter",
            "extra": "iterations: 6818\ncpu: 125454.03344089173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120399.37665479771,
            "unit": "ns/iter",
            "extra": "iterations: 7025\ncpu: 120390.3345195728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376491.53793931176,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 376471.8450479246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2012186.2056277709,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2012078.1385281365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1580395.2823129445,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1580303.9115646256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1554397.9581939706,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1554313.0434782598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1552316.0450749828,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1552247.7462437407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 871053.8579491575,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 871000.5644402626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1518528.7442622972,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1518415.5737704895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39530.80429766564,
            "unit": "ns/iter",
            "extra": "iterations: 20802\ncpu: 39528.458802038294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201977.4456419919,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 201962.83973758217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 154247.50957237303,
            "unit": "ns/iter",
            "extra": "iterations: 5589\ncpu: 154237.41277509442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152441.95311394354,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 152430.4493984432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 147551.17015797537,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 147543.32074175822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 349484.47701613227,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 349469.87903225824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2040285.155701869,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2040200.6578947394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1616333.1406250987,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1616280.3819444398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1593491.552315447,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1593473.0703258973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1587669.6609879825,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587632.1976149888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 882764.9657143324,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 882715.1428571411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1552928.328881585,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1552758.0968280453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5537176.500000669,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5537045.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3295716.9293286237,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3295506.713780914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31882.67377241014,
            "unit": "ns/iter",
            "extra": "iterations: 25660\ncpu: 31880.600155884684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 156589.45414927826,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 156580.82440530133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116842.11985273394,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 116835.3558767384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 121472.7668885511,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 121465.27404050392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 115761.33183551645,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 115754.6160130717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298148.2993784376,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 298128.6602209942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2006390.617204136,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2006296.7741935416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1557661.3906510808,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1557561.1018363892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1533841.2101807508,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1533741.379310338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1538521.240527331,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1538427.8418451399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 865388.6567441965,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 865344.651162789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1506323.6752827007,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1506216.6397415164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3220.531817825984,
            "unit": "ns/iter",
            "extra": "iterations: 217221\ncpu: 3220.5182740158525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21089.513168637284,
            "unit": "ns/iter",
            "extra": "iterations: 33071\ncpu: 21089.071996613264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15521.37643932665,
            "unit": "ns/iter",
            "extra": "iterations: 45160\ncpu: 15521.432683790868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14888.339924230104,
            "unit": "ns/iter",
            "extra": "iterations: 46984\ncpu: 14887.927805210262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12235.331610560348,
            "unit": "ns/iter",
            "extra": "iterations: 57272\ncpu: 12234.903617823631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 112299.22931063159,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 112295.67732604865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138033.18079652629,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 138030.77681387996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33472.69514293649,
            "unit": "ns/iter",
            "extra": "iterations: 20918\ncpu: 33472.03843579687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32978.12266426716,
            "unit": "ns/iter",
            "extra": "iterations: 21139\ncpu: 32977.401958465445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33000.9257615117,
            "unit": "ns/iter",
            "extra": "iterations: 21175\ncpu: 33000.198347107296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67710.32746955502,
            "unit": "ns/iter",
            "extra": "iterations: 10346\ncpu: 67709.97486951466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62353.169927080795,
            "unit": "ns/iter",
            "extra": "iterations: 11246\ncpu: 62349.60874977783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24197.694237755277,
            "unit": "ns/iter",
            "extra": "iterations: 28895\ncpu: 24195.964699775523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120988.89910158035,
            "unit": "ns/iter",
            "extra": "iterations: 5788\ncpu: 120978.09260539072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96901.00166274047,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 96894.0834141608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97198.68122818421,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97197.0132588983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95982.87626886304,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 95980.67215363368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174081.25490682162,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 174072.0496894392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 594531.3226079677,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 594492.3793395417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491841.3738580673,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 491821.78496134974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483412.7897648792,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483405.25587828644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 477457.48873724026,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477447.9863481297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304449.39659684483,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 304441.8848167556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474679.2754613797,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 474672.6589200228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 25275.029526990133,
            "unit": "ns/iter",
            "extra": "iterations: 27568\ncpu: 25274.376088218283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118134.8715828504,
            "unit": "ns/iter",
            "extra": "iterations: 5926\ncpu: 118132.73709078661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96906.51182617649,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96904.84048404761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97516.17044981211,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 97514.48266258284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96486.93427035035,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96485.68278903104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168900.12879883582,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 168896.38205499336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 588183.4151260713,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 588170.4201680638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 481007.13420514896,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 480999.7935306275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 475412.2735273893,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 475413.947190252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 473834.0271186475,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473824.4067796632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306787.4551002328,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 306783.7401918062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470302.73687751335,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470304.30686406244 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}