window.BENCHMARK_DATA = {
  "lastUpdate": 1705954348909,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 20.04 Debug c++-17": [
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
        "date": 1702489556932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7870.454440689495,
            "unit": "ns/iter",
            "extra": "iterations: 89378\ncpu: 7869.747588892123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72819.29210997262,
            "unit": "ns/iter",
            "extra": "iterations: 11749\ncpu: 72815.29491871649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139140.03985391717,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 139134.45538266114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204920.2273907887,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 204903.94332939776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270397.5056391029,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 270374.90601503756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334487.4659706036,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 334463.4570765663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398638.44388460123,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 398611.91021530016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462493.85577433935,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 462440.81958488555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534005.4521791742,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 533954.7820823251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6085.998192562229,
            "unit": "ns/iter",
            "extra": "iterations: 115080\ncpu: 6085.829857490429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5145.568332537755,
            "unit": "ns/iter",
            "extra": "iterations: 136165\ncpu: 5145.324422575552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5239.467499158403,
            "unit": "ns/iter",
            "extra": "iterations: 133735\ncpu: 5239.060829251881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5165.783190941793,
            "unit": "ns/iter",
            "extra": "iterations: 135308\ncpu: 5165.419635202646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9340.292997623897,
            "unit": "ns/iter",
            "extra": "iterations: 74946\ncpu: 9340.104875510382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31783.083882218692,
            "unit": "ns/iter",
            "extra": "iterations: 25810\ncpu: 31781.181712514564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 129614.99999999866,
            "unit": "ns/iter",
            "extra": "iterations: 6587\ncpu: 129607.37816912115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106495.67514651919,
            "unit": "ns/iter",
            "extra": "iterations: 8019\ncpu: 106491.49519890248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109168.44808602301,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 109164.74203046982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106437.11390827292,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 106432.34047856425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 295967.6607629535,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 295946.2534059946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2195738.3862560117,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2195608.293838861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1800281.3520310177,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800160.3481624771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1817086.7671232303,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1816985.7142857153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1810292.1320387926,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810133.3980582524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066029.913990829,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1065978.669724767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1748952.5113207817,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748856.9811320812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7206156.780000583,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7205446.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4007648.2532186736,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007207.296137345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8973013.18852468,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8972502.459016392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30851.695732143817,
            "unit": "ns/iter",
            "extra": "iterations: 26641\ncpu: 30850.0656882249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130394.78329779046,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 130388.41816519336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110192.88805874602,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 110186.26819528484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109880.62905917,
            "unit": "ns/iter",
            "extra": "iterations: 7791\ncpu: 109874.89410858709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109574.19038362692,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 109565.35769828933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 299696.6266851199,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 299677.1171793999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2197066.854761856,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2196923.0952380872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1814558.7933722744,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814495.516569204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1836328.2407044643,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1836280.821917804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1827382.2671903737,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1827297.2495088417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1061073.6321303837,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1061016.5308498235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1760987.7721281655,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1760895.103578146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7236286.739999969,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7235890.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4195330.124999888,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4194680.357142845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30636.224091471857,
            "unit": "ns/iter",
            "extra": "iterations: 27462\ncpu: 30634.236399388086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129943.49430177784,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 129935.93678772206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106671.9736051903,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 106664.84863647731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108450.16563015926,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 108440.63967508567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107166.35934754738,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 107159.623588456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 296100.1324684085,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 296081.8026630258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2185910.142857072,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2185794.6135831345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1797885.0580270886,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1797702.707930359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1804772.5755814312,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1804745.930232558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1815472.9042967332,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1815430.8593749946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1058235.1710377042,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1058175.1425313556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1750005.4924526783,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1749946.2264150865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3267.8660354103354,
            "unit": "ns/iter",
            "extra": "iterations: 214176\ncpu: 3267.8750186762154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16573.86664301658,
            "unit": "ns/iter",
            "extra": "iterations: 42285\ncpu: 16573.666784911893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12967.765311000423,
            "unit": "ns/iter",
            "extra": "iterations: 56479\ncpu: 12967.207280582224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12359.993359589742,
            "unit": "ns/iter",
            "extra": "iterations: 56623\ncpu: 12359.214453490687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10249.497218970379,
            "unit": "ns/iter",
            "extra": "iterations: 68320\ncpu: 10248.84806791574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68049.73745624072,
            "unit": "ns/iter",
            "extra": "iterations: 10284\ncpu: 68047.84130688383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145331.2170300949,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 145331.42263759152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36899.127918622056,
            "unit": "ns/iter",
            "extra": "iterations: 18973\ncpu: 36897.36467611897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37536.03463063826,
            "unit": "ns/iter",
            "extra": "iterations: 18654\ncpu: 37534.164254315554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37240.04885699069,
            "unit": "ns/iter",
            "extra": "iterations: 18810\ncpu: 37238.4157363105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75182.8429796361,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75178.83172561658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67190.62351134111,
            "unit": "ns/iter",
            "extra": "iterations: 10412\ncpu: 67190.69343065712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20846.850577793357,
            "unit": "ns/iter",
            "extra": "iterations: 33576\ncpu: 20845.660590898216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99538.4262761312,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 99532.09156832231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80796.29141209372,
            "unit": "ns/iter",
            "extra": "iterations: 8675\ncpu: 80791.0662824207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81441.94650540226,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81437.92301430534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80925.57132948512,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 80923.35260115527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154778.5900044106,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 154766.7624944737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 614516.6848112361,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 614480.3336259851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 526702.5792637038,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 526658.8279489103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 525692.5229150648,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 525685.1990984202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 529369.9788199546,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529359.6066565783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340741.1484907689,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 340725.4138266786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 513540.0556775907,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 513533.0402930403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20695.467782478212,
            "unit": "ns/iter",
            "extra": "iterations: 33817\ncpu: 20694.003016234317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97628.78646050235,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 97623.86126201393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79899.8978427103,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 79896.48441958612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81250.39428167936,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 81248.81750794247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82230.31424220881,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 82228.613258373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156164.61414860922,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 156158.4467752744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 620484.6504424777,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 620456.0176991131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 528129.107924542,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528105.7358490563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 527033.0668669655,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 527013.1480090135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 533791.4248665085,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 533764.5308924452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341672.221404039,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 341654.88463427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 516204.3517699621,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516177.2123893839 ns\nthreads: 1"
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
        "date": 1702492191446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7913.036125016803,
            "unit": "ns/iter",
            "extra": "iterations: 88692\ncpu: 7912.852342939611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72616.67841296628,
            "unit": "ns/iter",
            "extra": "iterations: 11720\ncpu: 72615.61433447099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139486.9453734687,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 139482.33795190314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204895.52132925278,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 204896.2526514259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271150.0371875175,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 271142.2812500002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333782.8351393205,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 333769.85294117633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398815.01973379916,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 398797.2464433227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462834.58001065144,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 462821.7437533225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527192.0817191222,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527172.3365617434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6127.879859146391,
            "unit": "ns/iter",
            "extra": "iterations: 115581\ncpu: 6127.657659996024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5172.568185014044,
            "unit": "ns/iter",
            "extra": "iterations: 135125\ncpu: 5172.339685476405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5188.478542851328,
            "unit": "ns/iter",
            "extra": "iterations: 135223\ncpu: 5188.198753170693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5121.3314343378515,
            "unit": "ns/iter",
            "extra": "iterations: 136739\ncpu: 5121.307746875435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9257.071841519357,
            "unit": "ns/iter",
            "extra": "iterations: 75416\ncpu: 9256.958735546836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30564.21106145588,
            "unit": "ns/iter",
            "extra": "iterations: 26850\ncpu: 30562.823091247672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126421.47081538159,
            "unit": "ns/iter",
            "extra": "iterations: 6733\ncpu: 126415.69879697032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101873.68444232759,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 101870.56302821077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99309.91117076974,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 99307.71565308725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100168.58999881624,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 100165.54094086961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253733.91958760665,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 253721.23711340202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2194148.7868851963,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2194051.522248242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1795839.2011604044,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795834.042553191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1816416.3613281215,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1816307.0312499988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1821289.473477534,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1821279.9607072657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1071416.341040413,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1071387.2832369923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1749579.5803403226,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1749534.9716446127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7276077.839999288,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7275920.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4055870.205127996,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4055728.20512821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9129000.76470574,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9128826.05042017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29908.90188802616,
            "unit": "ns/iter",
            "extra": "iterations: 27489\ncpu: 29907.82131034225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131778.93150685725,
            "unit": "ns/iter",
            "extra": "iterations: 6497\ncpu: 131776.85085424024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105202.23358383232,
            "unit": "ns/iter",
            "extra": "iterations: 8117\ncpu: 105197.69619317436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101358.73325415853,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 101356.35391923973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101447.59688249834,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 101444.40047961602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260341.4091593827,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 260336.9689665576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2204699.8581561265,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2204656.0283687934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1826837.414538304,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1826816.502946949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1821816.3614931945,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1821737.7210216105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1825649.9099805034,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1825608.6105675073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1074414.9445085868,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1074379.306358376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1764814.0588234123,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1764776.6603415601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7305848.379999134,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7305515.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4191719.5624999893,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4191497.321428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29196.138647068045,
            "unit": "ns/iter",
            "extra": "iterations: 28028\ncpu: 29196.27872127871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126646.73949083434,
            "unit": "ns/iter",
            "extra": "iterations: 6756\ncpu: 126641.94789816444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102696.17906137886,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 102692.57521058919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99651.0201641386,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 99646.02579132415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101219.03836441084,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 101215.11725796756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255223.81227863423,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 255208.97284533514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2185138.65186924,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2185035.0467289723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1806398.2213592664,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806407.1844660314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800733.502912549,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1800628.3495145654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1807691.750000081,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1807674.418604641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1068791.7598152566,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1068757.8521939937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1750232.7849055256,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1750200.9433962323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3185.972434499344,
            "unit": "ns/iter",
            "extra": "iterations: 220493\ncpu: 3185.807259187363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15859.534002810264,
            "unit": "ns/iter",
            "extra": "iterations: 44114\ncpu: 15858.94273926658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12829.878808965132,
            "unit": "ns/iter",
            "extra": "iterations: 54608\ncpu: 12829.484690887895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12837.070132965588,
            "unit": "ns/iter",
            "extra": "iterations: 54525\ncpu: 12836.951856946376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10439.502783788766,
            "unit": "ns/iter",
            "extra": "iterations: 66995\ncpu: 10439.192477050561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61824.156037751505,
            "unit": "ns/iter",
            "extra": "iterations: 11337\ncpu: 61821.01967010666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143319.91302571422,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 143306.9416088198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36767.54610040752,
            "unit": "ns/iter",
            "extra": "iterations: 19002\ncpu: 36765.193137564434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37316.3040493787,
            "unit": "ns/iter",
            "extra": "iterations: 18793\ncpu: 37315.34613951992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37062.174708990875,
            "unit": "ns/iter",
            "extra": "iterations: 18900\ncpu: 37060.13227513276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75018.13344051434,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75009.26045016026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67319.8360091728,
            "unit": "ns/iter",
            "extra": "iterations: 10464\ncpu: 67315.87347094729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20668.197029203897,
            "unit": "ns/iter",
            "extra": "iterations: 33863\ncpu: 20667.19723592124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99656.63350859743,
            "unit": "ns/iter",
            "extra": "iterations: 7037\ncpu: 99654.45502344599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80301.93759320225,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 80298.77251347929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81002.39831389285,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 80999.28398198423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81219.76473995285,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81214.13181976225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155393.06320691027,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 155388.51186515883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 615981.9031689866,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 615977.2887324041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 521161.8312267964,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521140.9665427484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 529660.9878879734,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 529628.6903860739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 527937.4166037705,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 527911.1698113205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 351502.896281779,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 351493.8845401152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 513038.51244508306,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 513013.689604679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20546.22660865897,
            "unit": "ns/iter",
            "extra": "iterations: 34019\ncpu: 20545.941973603287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97913.90458869621,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 97913.43033016387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80691.72479186492,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 80687.70814061073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81379.38285249486,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 81377.21033038582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81758.08325548227,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 81754.75245212378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153660.51654612334,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 153653.53933815667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 614979.1550660867,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 614969.0748898644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519618.3514115554,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 519589.8959881181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 525966.6415662628,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 525952.4096385622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526860.354935959,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 526836.6239638296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 345564.29723045055,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 345550.5440158245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 512160.51063829684,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 512162.6559060887 ns\nthreads: 1"
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
        "date": 1702503235286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7866.147066092667,
            "unit": "ns/iter",
            "extra": "iterations: 89028\ncpu: 7866.163454194188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71300.02184139841,
            "unit": "ns/iter",
            "extra": "iterations: 11904\ncpu: 71294.79166666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136815.3165602201,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 136804.9540426858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199703.72697899575,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 199704.01569351493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264982.91909972345,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 264971.13746958645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325735.12438748113,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 325721.59819072747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389903.97081275954,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 389876.2460709473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 452912.218522348,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 452880.80124869954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 515681.95665081724,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 515672.0902612824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6042.756449047664,
            "unit": "ns/iter",
            "extra": "iterations: 115676\ncpu: 6042.599156264043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5104.013376858921,
            "unit": "ns/iter",
            "extra": "iterations: 137850\ncpu: 5103.610446137107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5075.960190368673,
            "unit": "ns/iter",
            "extra": "iterations: 138258\ncpu: 5070.08057399934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5103.332972411256,
            "unit": "ns/iter",
            "extra": "iterations: 138534\ncpu: 5103.044739919441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9148.99665742673,
            "unit": "ns/iter",
            "extra": "iterations: 73596\ncpu: 9148.702375129098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32024.01339181508,
            "unit": "ns/iter",
            "extra": "iterations: 25762\ncpu: 32022.971818958114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133078.07245923838,
            "unit": "ns/iter",
            "extra": "iterations: 6376\ncpu: 133074.639272271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107075.89182420891,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 107071.90434455972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107257.98467145368,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 107249.0136951875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105879.91353101734,
            "unit": "ns/iter",
            "extra": "iterations: 8026\ncpu: 105874.27111886363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268096.7375076952,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 268080.0431832201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2145936.0554271275,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2145856.3510392616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1782214.5506690927,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782123.518164436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1733794.4135339225,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1733663.1578947364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1771606.8931299248,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1771503.2442748079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1050507.66704156,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1050454.668166482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1705556.1397060282,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1705494.3014705873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7083061.719999932,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7082915.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3988008.354700764,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3987968.376068379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9004857.131147025,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 9004492.622950837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31212.407076279225,
            "unit": "ns/iter",
            "extra": "iterations: 26285\ncpu: 31212.12098154837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136796.17342055633,
            "unit": "ns/iter",
            "extra": "iterations: 6268\ncpu: 136789.51818761948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 108144.00671480621,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 108141.82186747737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107433.58097395599,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 107429.54574053151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107684.81324235583,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 107685.05180692494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 282498.7849007329,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 282490.13992840855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2173054.0932402657,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2173058.7412587353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1789057.1153845242,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1789025.0000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1746556.3445693478,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1746539.5131086116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1762390.478260874,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1762339.6975425335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1053248.7324263053,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 1053250.453514738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1718045.1402214034,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1718006.6420664222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7108588.039999404,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7108479.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3947817.941176223,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3947690.756302528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30245.156420435134,
            "unit": "ns/iter",
            "extra": "iterations: 26953\ncpu: 30245.30849998134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138916.56278317227,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 138915.06472491892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107858.17662632468,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 107857.24911749864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107639.48044763564,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107636.20017603485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107766.48043916786,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 107765.38364462351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274296.0344174188,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 274284.49636880134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2145347.554023149,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2145328.045977012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1790884.280769179,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1790827.6923076864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1734382.0167910515,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734341.9776119415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1757858.5757576094,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1757844.696969699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1046947.5298088103,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1046916.5354330684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1708439.1596330984,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1708421.4678899103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3204.945066556637,
            "unit": "ns/iter",
            "extra": "iterations: 218610\ncpu: 3204.8511047070047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16250.60354521129,
            "unit": "ns/iter",
            "extra": "iterations: 43044\ncpu: 16250.339187807911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11884.795050007984,
            "unit": "ns/iter",
            "extra": "iterations: 58990\ncpu: 11884.375317850556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12900.185687369767,
            "unit": "ns/iter",
            "extra": "iterations: 54134\ncpu: 12899.645324564957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10378.835705064395,
            "unit": "ns/iter",
            "extra": "iterations: 67391\ncpu: 10378.859194847997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63038.529348314834,
            "unit": "ns/iter",
            "extra": "iterations: 11125\ncpu: 63036.42247191006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140724.6487844118,
            "unit": "ns/iter",
            "extra": "iterations: 4977\ncpu: 140715.81273859736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36649.675781867976,
            "unit": "ns/iter",
            "extra": "iterations: 19089\ncpu: 36647.84430824047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36579.37952689741,
            "unit": "ns/iter",
            "extra": "iterations: 19108\ncpu: 36578.39124973866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36748.63050669463,
            "unit": "ns/iter",
            "extra": "iterations: 19045\ncpu: 36746.62641113132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73766.89694858385,
            "unit": "ns/iter",
            "extra": "iterations: 9471\ncpu: 73765.63192904602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65710.58163361055,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 65707.67929316731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20328.802328281665,
            "unit": "ns/iter",
            "extra": "iterations: 34446\ncpu: 20328.281948557033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96109.83625891051,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 96110.07953922126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78434.79001566466,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78432.26997985346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76520.77652345927,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 76519.09250328846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78945.99156451093,
            "unit": "ns/iter",
            "extra": "iterations: 8891\ncpu: 78942.61612866976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155780.11187416926,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 155778.35622507945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 610520.1825327469,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 610521.7467248888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 521887.682887241,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 521868.1265206826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 519248.2651851707,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 519234.51851851924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 521725.04626864527,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 521701.41791044845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340181.2078678877,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 340170.85964060115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506939.9840694784,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 506940.8399710442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20683.40010213405,
            "unit": "ns/iter",
            "extra": "iterations: 33289\ncpu: 20682.853194749143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96534.62568909426,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96533.55843439852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78167.5176378716,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 78164.84706407638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76960.62541254122,
            "unit": "ns/iter",
            "extra": "iterations: 9090\ncpu: 76959.53795379566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78312.74726134012,
            "unit": "ns/iter",
            "extra": "iterations: 8946\ncpu: 78312.88844176246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154777.5413716843,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 154770.97345132843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609638.0583623442,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 609630.9233449419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 524526.3243848406,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 524499.4034302714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514152.9046221411,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 514147.9823917741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 519778.4677538867,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519779.98517420504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341612.69535452715,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 341608.3129584413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 506578.24708453665,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 506570.26239066396 ns\nthreads: 1"
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
        "date": 1705574934327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7939.347819223507,
            "unit": "ns/iter",
            "extra": "iterations: 88684\ncpu: 7939.120923729197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75002.71550360041,
            "unit": "ns/iter",
            "extra": "iterations: 11378\ncpu: 74998.66408859202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143711.02434242543,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 143705.99575232808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211403.59532504395,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 211389.84660336006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 279250.76445881394,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 279243.78029079165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344204.4455089775,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 344186.86626746505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 420868.9867486874,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 420856.5546616183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479544.06504958624,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 479537.26571113616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546498.6545453928,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 546458.4952978056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6114.261676353348,
            "unit": "ns/iter",
            "extra": "iterations: 114248\ncpu: 6114.035256634686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5187.775167585897,
            "unit": "ns/iter",
            "extra": "iterations: 134856\ncpu: 5187.607522097639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5134.9555353502865,
            "unit": "ns/iter",
            "extra": "iterations: 136378\ncpu: 5134.880992535455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5158.015066619595,
            "unit": "ns/iter",
            "extra": "iterations: 135996\ncpu: 5157.6877261096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9229.661629005212,
            "unit": "ns/iter",
            "extra": "iterations: 75101\ncpu: 9229.111463229532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32292.59748057615,
            "unit": "ns/iter",
            "extra": "iterations: 25482\ncpu: 32290.915155796214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131332.9145404194,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131325.20750076877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103277.35748031455,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 103272.11387038177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108339.87284262823,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 108333.1472081216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104365.21005013192,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 104358.5157109671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 293866.4396728291,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 293846.0463531018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2229512.9354066183,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2229390.9090909064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1830261.5196851217,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1830143.8976377966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767180.9064886353,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1767034.7328244261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1843181.460317499,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843081.5476190457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1088129.5849940388,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1088082.063305979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1763328.8804553899,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1763245.730550283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7400997.7999992315,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7400532.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4031001.5560348136,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030827.586206906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9282490.41880315,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9281982.05128205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30795.139427585877,
            "unit": "ns/iter",
            "extra": "iterations: 26659\ncpu: 30793.503132150418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131536.24395502065,
            "unit": "ns/iter",
            "extra": "iterations: 6493\ncpu: 131528.29200677664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106155.57507152502,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 106149.81962930737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107773.50479796987,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 107771.47727272722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104743.07580427444,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 104741.00825835056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 289887.89599461,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 289875.69841804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2250441.3927709907,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2250359.759036145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1854298.8687871727,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1854211.9284294224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1802260.7142856272,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1802161.0038610068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1858470.4459999558,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858367.8000000105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1091189.450819584,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1091135.5971896988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1783823.4760994746,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1783736.5200764814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7449612.000000344,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7448891.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4192996.1973096905,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4192737.2197309444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29618.81843281324,
            "unit": "ns/iter",
            "extra": "iterations: 27527\ncpu: 29617.20129327548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133261.8524335269,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 133255.55901104116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105180.921486589,
            "unit": "ns/iter",
            "extra": "iterations: 8126\ncpu: 105175.07999015538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105886.97049343235,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 105881.04388792455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104543.36649022138,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 104537.92933645145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 293252.25909552485,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 293238.0482828986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2246153.2884613816,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2246057.932692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1844142.7405940713,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1844050.2970296922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1781405.29501926,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781302.2988505813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1855764.417821702,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1855669.702970295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1079025.9317130018,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1079007.8703703666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1769312.6628572436,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1769247.2380952446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3175.0833929555165,
            "unit": "ns/iter",
            "extra": "iterations: 220834\ncpu: 3174.9341134064653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16338.540298855836,
            "unit": "ns/iter",
            "extra": "iterations: 42830\ncpu: 16338.234882091914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12129.937707021896,
            "unit": "ns/iter",
            "extra": "iterations: 57663\ncpu: 12129.743509702941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12608.368330063011,
            "unit": "ns/iter",
            "extra": "iterations: 55529\ncpu: 12607.62304381485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10499.209377016066,
            "unit": "ns/iter",
            "extra": "iterations: 66631\ncpu: 10498.760336780244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67393.34999037824,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 67390.65087617925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147955.3191534275,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 147952.59259259218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37764.8395921006,
            "unit": "ns/iter",
            "extra": "iterations: 18534\ncpu: 37762.792705298256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37233.09790247322,
            "unit": "ns/iter",
            "extra": "iterations: 18784\ncpu: 37232.41588586081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37857.40321449381,
            "unit": "ns/iter",
            "extra": "iterations: 18541\ncpu: 37855.299066932486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75754.97177463362,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75753.00097328785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67950.18028169677,
            "unit": "ns/iter",
            "extra": "iterations: 10295\ncpu: 67949.05293831919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20828.04513000648,
            "unit": "ns/iter",
            "extra": "iterations: 33614\ncpu: 20827.49449634066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102111.31175804148,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 102108.21085358923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80499.34699516826,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80494.4278148736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78596.92353402448,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 78594.92095526286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79869.83392226108,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 79866.76165507738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157072.66561939102,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 157069.1427289066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 631202.8987341367,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 631184.9005424883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 536140.4506503572,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 536106.8859984754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 534959.0060883433,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 534945.2054794605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 539810.8446153261,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 539790.3076923045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 348579.69487309165,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 348577.40169238654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 522104.15355802164,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 522087.3408239612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20831.83158113889,
            "unit": "ns/iter",
            "extra": "iterations: 33577\ncpu: 20831.009321857222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100758.90732198418,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 100755.57797636116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80047.9971343379,
            "unit": "ns/iter",
            "extra": "iterations: 8724\ncpu: 80043.69555249756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79046.2421980989,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 79044.78742650489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81219.95374038113,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81218.43393148424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155967.296081929,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155962.1772039161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 631129.3642921426,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 631117.2227231788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537190.4508447935,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537161.1367127548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 530204.0113378365,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 530199.8488284224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 537358.7715384405,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537348.538461537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350406.0431943876,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 350395.8312405785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522443.89063666225,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 522428.2397003736 ns\nthreads: 1"
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
        "date": 1705772710060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7997.384642032198,
            "unit": "ns/iter",
            "extra": "iterations: 86600\ncpu: 7997.163972286374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73863.56448532923,
            "unit": "ns/iter",
            "extra": "iterations: 11522\ncpu: 73860.04165943412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141679.51959195803,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 141673.47797927464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209021.55609050818,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 209009.075589793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275229.1946394223,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 275229.3554562859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 339042.058800436,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 339038.4163073306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405852.1859273164,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 405847.11090400745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 472247.0459707968,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 472236.39805300144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540147.4488286122,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 540148.0271270035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6106.499197627952,
            "unit": "ns/iter",
            "extra": "iterations: 114660\ncpu: 6106.39194139194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5149.007764089445,
            "unit": "ns/iter",
            "extra": "iterations: 135882\ncpu: 5148.844585743504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5180.78189693488,
            "unit": "ns/iter",
            "extra": "iterations: 135060\ncpu: 5180.613060861838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5188.153006719597,
            "unit": "ns/iter",
            "extra": "iterations: 134981\ncpu: 5188.11017846956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9178.998805600762,
            "unit": "ns/iter",
            "extra": "iterations: 76189\ncpu: 9178.999593117112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31049.896782486925,
            "unit": "ns/iter",
            "extra": "iterations: 26449\ncpu: 31049.351582290477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127169.13146936258,
            "unit": "ns/iter",
            "extra": "iterations: 6724\ncpu: 127167.17727543117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103073.12569494132,
            "unit": "ns/iter",
            "extra": "iterations: 8274\ncpu: 103070.36499879134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101319.38414852376,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 101318.24348446963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101774.76575178272,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 101772.4701670644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285678.0660098286,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 285673.43185549974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2215856.771971362,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2215844.893111636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1818385.0802348948,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1818353.620352253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1818063.7347740282,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1818013.948919452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1832778.2176470465,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1832730.3921568638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1058019.1601830262,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1057989.8169336377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1765468.7017206848,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1765445.6978967476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7229264.329999979,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7228929.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4133124.321586141,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4133029.955947141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9109738.394958368,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9109015.126050401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30863.27687382395,
            "unit": "ns/iter",
            "extra": "iterations: 26550\ncpu: 30861.935969868195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129745.55751673313,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 129737.67498478398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105803.38150863237,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 105800.55921461378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103493.68504991542,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 103490.68663257804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105604.86410599605,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 105601.75033426553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 288785.02662227553,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 288771.84692179604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2239208.612980821,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2239104.0865384648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1838239.9644268765,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1838149.4071146294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1833510.8162056224,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1833437.1541501947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1852738.6482213459,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1852663.8339920994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1073037.6045977399,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1072985.8620689616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1781778.5602293664,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781711.0898661537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7267458.960000114,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7266340.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4100589.6327434666,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4100528.7610619348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29350.247688407548,
            "unit": "ns/iter",
            "extra": "iterations: 28011\ncpu: 29348.816536360693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 128111.53428528593,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 128107.5264019045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 103201.60498306244,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 103199.44363812316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101111.98814605328,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 101110.71597913693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102275.30212459686,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 102274.33681430858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285140.73833004996,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 285141.42011834274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2227455.545454486,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2227404.306220097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1828502.3214990357,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1828434.5167652967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1818750.248543597,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1818709.3203883474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1841221.3505976829,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1841188.4462151374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1068083.5166093684,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1068041.924398627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1777631.2715106863,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777563.288718929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3222.342101635104,
            "unit": "ns/iter",
            "extra": "iterations: 217602\ncpu: 3222.1326090752655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16569.48343964052,
            "unit": "ns/iter",
            "extra": "iterations: 42330\ncpu: 16568.929836995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12958.64608772718,
            "unit": "ns/iter",
            "extra": "iterations: 54214\ncpu: 12957.973955066956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12626.617229393529,
            "unit": "ns/iter",
            "extra": "iterations: 57251\ncpu: 12625.486017711433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10506.536742888442,
            "unit": "ns/iter",
            "extra": "iterations: 66734\ncpu: 10506.338598015991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66239.24619456934,
            "unit": "ns/iter",
            "extra": "iterations: 10577\ncpu: 66236.08773754361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146707.81181664567,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 146696.82506307878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38083.34032722685,
            "unit": "ns/iter",
            "extra": "iterations: 18397\ncpu: 38081.18715007907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38095.280911709175,
            "unit": "ns/iter",
            "extra": "iterations: 18383\ncpu: 38094.848501332315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38233.572497250716,
            "unit": "ns/iter",
            "extra": "iterations: 18180\ncpu: 38232.997799779536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72194.94863083633,
            "unit": "ns/iter",
            "extra": "iterations: 9714\ncpu: 72190.59089973212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68324.21236639353,
            "unit": "ns/iter",
            "extra": "iterations: 10011\ncpu: 68320.79712316455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21480.872293925288,
            "unit": "ns/iter",
            "extra": "iterations: 33859\ncpu: 21479.783809327255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98551.25903022711,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98546.00140548105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79996.25920857633,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 79995.96305165932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80380.29262408591,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 80379.19347426572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80589.51230166754,
            "unit": "ns/iter",
            "extra": "iterations: 8698\ncpu: 80585.76684295254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153477.7502743213,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 153473.18411235345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 634163.0225835834,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 634133.3333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 538858.3484965296,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 538856.206630678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 533993.4867121857,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 533973.2725892166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 537469.867488384,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 537444.1448382033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344832.42391306104,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 344824.99999999657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 521801.12425590085,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 521789.28571428295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20390.06717201137,
            "unit": "ns/iter",
            "extra": "iterations: 34300\ncpu: 20389.90087463561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96888.68427638512,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 96885.70832754175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78754.26016901874,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 78754.1408450704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78055.4251784178,
            "unit": "ns/iter",
            "extra": "iterations: 8968\ncpu: 78053.60169491386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79738.54105118729,
            "unit": "ns/iter",
            "extra": "iterations: 8733\ncpu: 79737.38692316644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155847.3263672663,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 155845.2423299256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 631143.3501350522,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 631091.0891089169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 536296.0886850348,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 536284.2507645331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 530698.8177676758,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 530668.9445709971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 542542.4464285506,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 542515.9937888199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 346122.10841582017,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 346102.8712871284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 524408.0569714971,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 524374.4377811018 ns\nthreads: 1"
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
        "date": 1705774364328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7801.402211549696,
            "unit": "ns/iter",
            "extra": "iterations: 89530\ncpu: 7801.369373394393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71006.7454954999,
            "unit": "ns/iter",
            "extra": "iterations: 11988\ncpu: 71002.65265265266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136283.0374181331,
            "unit": "ns/iter",
            "extra": "iterations: 6414\ncpu: 136278.3598378547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201210.7945709775,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 201203.1285944329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265587.1778326659,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 265581.8153751156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326335.2451832211,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 326323.6116358141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390579.6274157285,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 390562.96629213484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 451121.3629745181,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 451109.51638065564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517119.73443982773,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 517091.4641375218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5986.360086063976,
            "unit": "ns/iter",
            "extra": "iterations: 117122\ncpu: 5985.960793019233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5083.27729122959,
            "unit": "ns/iter",
            "extra": "iterations: 137819\ncpu: 5083.17430833195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5241.645020001909,
            "unit": "ns/iter",
            "extra": "iterations: 136988\ncpu: 5241.513855228197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5143.8720421325415,
            "unit": "ns/iter",
            "extra": "iterations: 135951\ncpu: 5143.848151172125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9353.643636171098,
            "unit": "ns/iter",
            "extra": "iterations: 75277\ncpu: 9353.19287431751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31089.270767948383,
            "unit": "ns/iter",
            "extra": "iterations: 26447\ncpu: 31026.78186561803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125877.01001915878,
            "unit": "ns/iter",
            "extra": "iterations: 6787\ncpu: 125872.47679387066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102169.40984974884,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 102166.67064154512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99348.98082768326,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 99345.46411035779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100881.60042634471,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 100875.26054002826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273511.0336160631,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 273499.1517436383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2124267.9155250504,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2124155.9360730583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1759450.33965833,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1759380.2656546491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1737963.8517825324,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1737880.6754221374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1761366.7750472967,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761316.2570888482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1036171.5497206637,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1036124.1340782123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1695328.8165137114,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1695261.6513761454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7025864.830000047,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7025569.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3955091.624472424,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3954964.978902953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8963991.704918304,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8963281.96721311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29250.0067688716,
            "unit": "ns/iter",
            "extra": "iterations: 27331\ncpu: 29244.33427243798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127154.63430613952,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 127149.86599166144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102982.29833654939,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 102978.83317261346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101698.96046344636,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 101696.28523650253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101350.20877422809,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 101347.05742480079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273048.27901857556,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 273031.51934570476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2150723.4120368967,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2150643.5185185117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1769391.5483869982,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769344.5920303543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1754959.0600375535,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1754860.0375234543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1765803.5509434051,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1765717.1698113284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1037601.075977643,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1037546.0335195491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1709733.8793417315,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1709683.9122486352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7080462.369999623,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7080121.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4022858.038626623,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4022636.0515021654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29165.536900827843,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 29164.271754965608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125545.39503087327,
            "unit": "ns/iter",
            "extra": "iterations: 6802\ncpu: 125539.54719200163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102649.37916413562,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 102642.82253179867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98972.65261442088,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 98969.62850821018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99975.18075835804,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 99970.74894017894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274940.22007598524,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 274928.6257124778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2120481.511467815,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2120311.2385321166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1760232.1184210894,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1760180.263157895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1736223.7301292971,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1736147.5046210682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1758767.949248057,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1758715.413533839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1029456.7406180787,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1029405.5187637985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1697061.2276867034,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1697021.1293260562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3222.635754148654,
            "unit": "ns/iter",
            "extra": "iterations: 216277\ncpu: 3222.5345274809865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15733.597404313148,
            "unit": "ns/iter",
            "extra": "iterations: 45383\ncpu: 15733.087279377738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12345.20263408479,
            "unit": "ns/iter",
            "extra": "iterations: 56718\ncpu: 12344.05479741873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12178.522798359514,
            "unit": "ns/iter",
            "extra": "iterations: 57548\ncpu: 12178.3380829915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10382.186719527168,
            "unit": "ns/iter",
            "extra": "iterations: 67347\ncpu: 10382.012561806803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64391.06991076813,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64387.70122343882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133741.57284705056,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133737.40691235437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36512.80499765319,
            "unit": "ns/iter",
            "extra": "iterations: 19169\ncpu: 36511.17429182515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36788.433104318065,
            "unit": "ns/iter",
            "extra": "iterations: 19067\ncpu: 36787.20826558962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37023.363929404695,
            "unit": "ns/iter",
            "extra": "iterations: 18924\ncpu: 37022.331430987346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69965.16711536093,
            "unit": "ns/iter",
            "extra": "iterations: 10029\ncpu: 69960.97317778398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65731.55320344452,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65729.10266017278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20893.017816641273,
            "unit": "ns/iter",
            "extra": "iterations: 33508\ncpu: 20892.562970036633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99815.65298878074,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 99812.16811018006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80579.66574743798,
            "unit": "ns/iter",
            "extra": "iterations: 8703\ncpu: 80576.76663219582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79301.97428927047,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 79296.31894891891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80600.46469774526,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 80596.5851407478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158419.20004518965,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 158418.39963833452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 613415.8825591494,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 613383.9614373319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 520487.2633531335,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 520460.2373887222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 521948.44981409935,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521898.2156133914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 525978.6800296581,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 525893.1700074166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340328.52938319236,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 340327.05196696945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 510410.9231327125,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 510395.7215373452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21190.444847934148,
            "unit": "ns/iter",
            "extra": "iterations: 33045\ncpu: 21189.711000151383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99063.95842793678,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 99057.76106696908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79703.6996808782,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 79699.53271028145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80326.80731315969,
            "unit": "ns/iter",
            "extra": "iterations: 8724\ncpu: 80323.96836313522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81008.63363015796,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 81005.72452873844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158143.98012646794,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 158138.7082204158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 611892.8671329028,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 611838.9860139858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 521004.94913985603,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 520968.8107703767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 516330.72693727806,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516326.19926199643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 524354.4120300844,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 524336.8421052612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340288.9183673012,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 340287.0262390684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 507590.7133526944,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507548.91146590054 ns\nthreads: 1"
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
        "date": 1705777703040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8314.447228423633,
            "unit": "ns/iter",
            "extra": "iterations: 84212\ncpu: 8314.303187194224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78391.8044079654,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 78387.31095536704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150125.44109021826,
            "unit": "ns/iter",
            "extra": "iterations: 5797\ncpu: 150121.5973779541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220781.77644658298,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 220778.66428753512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290580.0924932982,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 290572.75469168904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 360822.7626556257,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 360814.4398340248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 426893.49679965357,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 426869.1777449534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 501052.2125576218,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 501037.9032258066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 570067.0816993515,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 570037.9084967324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6330.012581003792,
            "unit": "ns/iter",
            "extra": "iterations: 110643\ncpu: 6329.928689569156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5364.624431922883,
            "unit": "ns/iter",
            "extra": "iterations: 130264\ncpu: 5364.33703862924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5356.293110688295,
            "unit": "ns/iter",
            "extra": "iterations: 130971\ncpu: 5356.148307640627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5326.719407061963,
            "unit": "ns/iter",
            "extra": "iterations: 131076\ncpu: 5326.563978150086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9475.146112727472,
            "unit": "ns/iter",
            "extra": "iterations: 73895\ncpu: 9474.601799851129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32803.7435189657,
            "unit": "ns/iter",
            "extra": "iterations: 24996\ncpu: 32801.9483117299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132906.39060068075,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 132901.4783691255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109020.73033564344,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 109017.93492185499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111779.22517078384,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 111775.82764056779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110414.4193797559,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 110412.30214901567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273272.45408488146,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 273267.9544015197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2282635.8869779096,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2282562.6535626575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1885292.8542509223,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1885243.522267206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1896069.4928425138,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1896012.2699386524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1913740.5112935957,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1913700.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1104855.6343194623,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1104804.7337278107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1833952.6876227583,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833891.7485265234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7541453.1900003115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7541072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4289839.3073390825,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4289719.266055046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9480459.307018178,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9479992.982456116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33013.64507266475,
            "unit": "ns/iter",
            "extra": "iterations: 25115\ncpu: 33013.167429822766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137370.35821610014,
            "unit": "ns/iter",
            "extra": "iterations: 6256\ncpu: 137364.57800511507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111424.71193041766,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 111421.73179280774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111145.40983819045,
            "unit": "ns/iter",
            "extra": "iterations: 7725\ncpu: 111139.58576051833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111557.62150928754,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 111554.13690089647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 274827.7312817377,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 274814.6573604058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2308900.1066996534,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2308821.0918114167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1912894.7679670386,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1912841.478439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1916651.1889116701,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1916587.6796714577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1924708.3946280247,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924634.0909090855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1116364.3201440063,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1116350.359712223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1852227.5358565415,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852156.573705185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7591605.779999781,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7591296.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4216386.434388998,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4216296.380090493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32723.353391556135,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 32723.05299676974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137797.52093397465,
            "unit": "ns/iter",
            "extra": "iterations: 6210\ncpu: 137797.39130434862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108307.62718743045,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 108307.73522698425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111126.81537263232,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 111125.27914827244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110474.74702226503,
            "unit": "ns/iter",
            "extra": "iterations: 7724\ncpu: 110473.01916105652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 287307.2960745206,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 287305.58882235416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2329227.334999757,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2329233.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1916719.8854805126,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1916719.6319018467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1910552.6721650395,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1910520.8247422732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1940246.3076923348,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1940231.3929313822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1124283.5374396006,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1124275.7246376784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1857195.0600000946,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1857196.7999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3254.461441413262,
            "unit": "ns/iter",
            "extra": "iterations: 215594\ncpu: 3254.3656131432417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16510.72248758652,
            "unit": "ns/iter",
            "extra": "iterations: 42290\ncpu: 16510.78505556879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12183.275260961822,
            "unit": "ns/iter",
            "extra": "iterations: 57767\ncpu: 12183.457683452505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13233.424055060872,
            "unit": "ns/iter",
            "extra": "iterations: 52887\ncpu: 13233.628301851168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10607.127240496591,
            "unit": "ns/iter",
            "extra": "iterations: 66001\ncpu: 10606.958985469957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65112.922210850214,
            "unit": "ns/iter",
            "extra": "iterations: 10747\ncpu: 65111.88238578168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154694.88940499717,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 154692.50165892454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39261.80835063688,
            "unit": "ns/iter",
            "extra": "iterations: 17819\ncpu: 39261.13137662079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39522.35242564453,
            "unit": "ns/iter",
            "extra": "iterations: 17686\ncpu: 39520.51340043037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39899.335763930096,
            "unit": "ns/iter",
            "extra": "iterations: 17554\ncpu: 39898.62139683264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78919.87061082163,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 78919.98419329291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70886.60119651505,
            "unit": "ns/iter",
            "extra": "iterations: 9862\ncpu: 70885.93591563543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22066.490304883144,
            "unit": "ns/iter",
            "extra": "iterations: 31717\ncpu: 22066.52268499553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103116.05868544838,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 103114.86208920325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83202.31907307336,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83203.3392751041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83631.80871121807,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83631.84964200354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84259.88226097357,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84259.25435959111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161788.03234748816,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 161788.26247689393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 664963.1032197054,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 664955.1136363536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 565171.6950926016,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 565167.9806918764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 561190.7612179269,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 561186.2179487131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 566087.6273241809,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 566080.8407437372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 368514.12565723126,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 368509.0431125188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 551404.8817966365,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551392.1985815573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21615.669428205427,
            "unit": "ns/iter",
            "extra": "iterations: 31987\ncpu: 21615.70638071711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103482.56280441693,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 103483.74907749234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83796.63097377184,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 83796.38280033438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84491.67237016033,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84490.42053259342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84517.89483238016,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84515.97482754511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 160765.82212532515,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 160765.48083543894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 663345.4697542363,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 663351.9848771283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 560990.2690152751,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560988.150520412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 559153.5064308626,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 559113.826366555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 569488.1244914043,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 569471.9283970748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 367341.790441164,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 367341.07142857224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 549267.6314960999,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 549260.8661417242 ns\nthreads: 1"
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
        "date": 1705952868899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7968.409962208599,
            "unit": "ns/iter",
            "extra": "iterations: 87852\ncpu: 7967.952920821382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75241.40031784667,
            "unit": "ns/iter",
            "extra": "iterations: 11326\ncpu: 75237.74501147801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144175.95434242926,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 144169.42928039702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211627.23807194372,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 211617.9838512357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 279738.7281522164,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 279725.57239600143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345648.1726618504,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 345635.2917665867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 413267.6319543399,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 413251.5929624345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479657.1050604982,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 479643.1243124318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 547953.8787688115,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 547930.6532663321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6074.350391854112,
            "unit": "ns/iter",
            "extra": "iterations: 115094\ncpu: 6074.195005821331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5150.558123956245,
            "unit": "ns/iter",
            "extra": "iterations: 129869\ncpu: 5150.407718547147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5123.828219737444,
            "unit": "ns/iter",
            "extra": "iterations: 136727\ncpu: 5123.770725606503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5147.083190501697,
            "unit": "ns/iter",
            "extra": "iterations: 135941\ncpu: 5146.990238412245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9266.686573479945,
            "unit": "ns/iter",
            "extra": "iterations: 75619\ncpu: 9266.598341686611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31135.814229399046,
            "unit": "ns/iter",
            "extra": "iterations: 26382\ncpu: 31135.607611250114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126453.88656583434,
            "unit": "ns/iter",
            "extra": "iterations: 6744\ncpu: 126452.92111506531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102495.55116026405,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 102494.90200793583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102537.36572459782,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 102536.21166566455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101873.19412469694,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 101871.64268585127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280308.5884441579,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 280300.4519044548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2259050.3155338387,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2259040.04854369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1886693.9514170114,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1886669.2307692282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1765735.6704761523,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1765713.5238095208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1814210.3540855153,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1814217.509727626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1091891.5784544179,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1091887.7049180306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1776074.9254302052,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1776067.4952198833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7365903.490000392,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7365506.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4208635.089686149,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4208480.7174887955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9363893.948717365,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9363063.247863228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30519.34434505069,
            "unit": "ns/iter",
            "extra": "iterations: 26941\ncpu: 30518.143350283877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130519.35330989248,
            "unit": "ns/iter",
            "extra": "iterations: 6541\ncpu: 130509.37165571032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105708.64943671074,
            "unit": "ns/iter",
            "extra": "iterations: 7545\ncpu: 105701.15308151134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103931.74899475972,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 103931.1075910814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102026.89830915003,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 102022.17292241269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284069.57944848033,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 284065.5942219308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2269688.997561078,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2269616.585365848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1895400.5163935716,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1895331.147540993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1789236.2509652355,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1789153.6679536644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1846936.3486053997,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1846888.8446215172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1085686.4498834822,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1085679.6037295996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1789558.7803468164,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1789549.325626205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7406491.220000362,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7406125.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4120330.417778051,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4120226.222222243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28885.106286478,
            "unit": "ns/iter",
            "extra": "iterations: 28442\ncpu: 28883.26067083897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126159.07228380858,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 126153.39246119697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101344.44705181468,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 101338.52293031495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99881.57131089458,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 99876.77100494232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103498.57175841817,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 103493.34062462067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283350.0633201984,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 283334.48162729543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2250182.226505906,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2250054.939759036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1876124.9879761469,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1876086.9739479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1782255.5287356689,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1782151.9157088108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1845938.2648221047,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1845891.3043478287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1075541.5983796697,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1075479.1666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1782671.0555555965,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1782659.5785440714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3223.268980666359,
            "unit": "ns/iter",
            "extra": "iterations: 218064\ncpu: 3223.078087167097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16542.275747115156,
            "unit": "ns/iter",
            "extra": "iterations: 42296\ncpu: 16542.152922262077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12949.963724686619,
            "unit": "ns/iter",
            "extra": "iterations: 53728\ncpu: 12949.707787373452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12582.241033101667,
            "unit": "ns/iter",
            "extra": "iterations: 55677\ncpu: 12581.803976507337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10528.504733095615,
            "unit": "ns/iter",
            "extra": "iterations: 66447\ncpu: 10528.126175749061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65517.36770628354,
            "unit": "ns/iter",
            "extra": "iterations: 10677\ncpu: 65512.7844900254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148722.60765141918,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 148712.96493092447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38582.58869234487,
            "unit": "ns/iter",
            "extra": "iterations: 18147\ncpu: 38580.75714994213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37792.85276376024,
            "unit": "ns/iter",
            "extra": "iterations: 18236\ncpu: 37792.61351173467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38478.663657877856,
            "unit": "ns/iter",
            "extra": "iterations: 18169\ncpu: 38478.35323903348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70160.20096220664,
            "unit": "ns/iter",
            "extra": "iterations: 9977\ncpu: 70158.0234539437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58908.35386686965,
            "unit": "ns/iter",
            "extra": "iterations: 11883\ncpu: 58906.02541445703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21504.90459081942,
            "unit": "ns/iter",
            "extra": "iterations: 32565\ncpu: 21504.639950867822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102620.52083945855,
            "unit": "ns/iter",
            "extra": "iterations: 6814\ncpu: 102619.43058409046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83366.62241009301,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 83365.00357227802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79869.59503375528,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 79867.50200251721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82473.02314049078,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 82471.66469893823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158800.6582651992,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 158801.6575840128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 645308.1069123726,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 645271.9815668263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 554591.8230647176,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 554577.883096372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 530453.952815805,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 530438.4322678896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 545127.8431677591,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 545119.642857145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 354673.570704492,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 354670.7551951363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 530320.3023431493,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 530310.2040816356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21451.421839643077,
            "unit": "ns/iter",
            "extra": "iterations: 32702\ncpu: 21451.330193872305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102017.49817916968,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 102015.9213401326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83401.10512546134,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 83400.49946485808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79858.0571167429,
            "unit": "ns/iter",
            "extra": "iterations: 8754\ncpu: 79858.51039524919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82895.94189349125,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82894.7928994071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 161421.89080857811,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 161421.10112877112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 643351.8720074024,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 643341.2523020172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 552702.0863023705,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 552698.2581155937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 528849.7081122582,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 528853.4495830208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 546232.1233411392,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546221.4676034346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 352830.368686829,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 352823.737373734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 528859.8138658633,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 528845.9683496588 ns\nthreads: 1"
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
        "date": 1705954347799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7853.466135323525,
            "unit": "ns/iter",
            "extra": "iterations: 88706\ncpu: 7853.423669199377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72476.35359349853,
            "unit": "ns/iter",
            "extra": "iterations: 11813\ncpu: 72475.93329382883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137545.2536209105,
            "unit": "ns/iter",
            "extra": "iterations: 6352\ncpu: 137541.2625944584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202649.04159888005,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202650.1742970021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266727.03617809457,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 266721.45949288795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329198.8143621117,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 329192.8189457602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392910.6925157838,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 392898.2416591524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455200.7133890829,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 455189.90585774113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 520518.1563245828,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 520515.99045346107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5940.774956522284,
            "unit": "ns/iter",
            "extra": "iterations: 117875\ncpu: 5940.711770943801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4994.7882407339575,
            "unit": "ns/iter",
            "extra": "iterations: 140570\ncpu: 4994.8495411538715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5040.36101501119,
            "unit": "ns/iter",
            "extra": "iterations: 139033\ncpu: 5040.3580444930385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5013.233870909929,
            "unit": "ns/iter",
            "extra": "iterations: 139577\ncpu: 5013.11749070405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9243.815660815138,
            "unit": "ns/iter",
            "extra": "iterations: 75475\ncpu: 9243.818482941386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30834.659977452175,
            "unit": "ns/iter",
            "extra": "iterations: 26610\ncpu: 30833.389703119123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126429.52683720978,
            "unit": "ns/iter",
            "extra": "iterations: 6763\ncpu: 126429.02558036351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101107.21589561335,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 101106.85646500601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102136.51947741551,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102135.10727556054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101287.8786361537,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 101287.35097758706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 275525.35996181454,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 275524.72947167506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2115119.5284735584,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2115102.9612756283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1742399.5928705512,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742389.1181988746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1739796.1385767362,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1739772.2846441942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767649.1631878505,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767654.6489563538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1045059.8637387255,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 1045046.7342342349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1695339.9288320353,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1695344.3430656919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7041027.22000016,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7040459.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3951405.759493305,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3951192.4050632906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8977440.735536732,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8976978.512396688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30027.56795406321,
            "unit": "ns/iter",
            "extra": "iterations: 27342\ncpu: 30026.94389583785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127476.03989876728,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 127476.46270656529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103677.18597598936,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 103675.80977799318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102576.90714457155,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 102577.13495309078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103673.64992704515,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 103673.89348248986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278796.19053749373,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 278794.528484068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2132300.960739101,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2132259.8152424917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1763387.222641575,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1763374.5283018805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1767334.0056603593,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1767275.2830188642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1776820.2110266495,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1776827.1863117833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1052564.8659090982,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1052561.2499999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1712368.631675898,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1712343.2780847142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7092610.88000062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7092371.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3857555.5702481857,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3857402.479338848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29003.885340665714,
            "unit": "ns/iter",
            "extra": "iterations: 28371\ncpu: 29001.529731063427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124913.10945272523,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 124909.58443078704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100579.94985808621,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 100574.47965941354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100014.09445488041,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 100009.16353383465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100672.91076923125,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 100671.57396449706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 276531.6424474016,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 276520.17208413064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2092365.5191011399,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2092256.8539325832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1736691.3970315296,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1736643.228200376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1743950.9439253218,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1743884.6728971866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1760451.0284090827,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1760400.1893939436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1035704.7955056494,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1035650.449438208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1685283.0815217705,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1685233.6956521801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3206.7087278148497,
            "unit": "ns/iter",
            "extra": "iterations: 217374\ncpu: 3206.7082539770117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15752.109986732024,
            "unit": "ns/iter",
            "extra": "iterations: 44469\ncpu: 15751.858598124443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12728.364131328486,
            "unit": "ns/iter",
            "extra": "iterations: 54733\ncpu: 12728.101876381726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11406.815198758324,
            "unit": "ns/iter",
            "extra": "iterations: 61255\ncpu: 11406.809240062032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10416.429346935965,
            "unit": "ns/iter",
            "extra": "iterations: 67237\ncpu: 10416.376399898885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64846.960363031416,
            "unit": "ns/iter",
            "extra": "iterations: 10798\ncpu: 64847.1198370068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140549.94377509586,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140547.71084337396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37149.5212044109,
            "unit": "ns/iter",
            "extra": "iterations: 18864\ncpu: 37149.71374045813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37159.10926959121,
            "unit": "ns/iter",
            "extra": "iterations: 18825\ncpu: 37158.65604249604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37136.298221465535,
            "unit": "ns/iter",
            "extra": "iterations: 18892\ncpu: 37135.676476815555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74691.61891574343,
            "unit": "ns/iter",
            "extra": "iterations: 9389\ncpu: 74691.5432953462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66252.12137100897,
            "unit": "ns/iter",
            "extra": "iterations: 10299\ncpu: 66250.85930672925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20149.712009698786,
            "unit": "ns/iter",
            "extra": "iterations: 34647\ncpu: 20148.783444454093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93976.97420047667,
            "unit": "ns/iter",
            "extra": "iterations: 7442\ncpu: 93975.88013974813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77423.01843267448,
            "unit": "ns/iter",
            "extra": "iterations: 9060\ncpu: 77423.11258278207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77424.0284072079,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77424.0963855422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78029.15308394592,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 78029.30305054673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158782.51740506853,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 158782.3915009046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 602398.8521066067,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 602390.0257953547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 514293.213126846,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 514293.73156342254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 519795.4164200806,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519788.46153847117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517971.39836184593,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 517957.93000744405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344322.0384236765,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 344321.379310346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503730.16715115274,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 503691.06104650366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19959.56916702257,
            "unit": "ns/iter",
            "extra": "iterations: 34995\ncpu: 19958.634090584594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92923.5401874093,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 92922.64748581166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75958.18313827328,
            "unit": "ns/iter",
            "extra": "iterations: 9228\ncpu: 75959.12440398798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76645.12471258659,
            "unit": "ns/iter",
            "extra": "iterations: 9133\ncpu: 76645.02354100574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77890.36975533879,
            "unit": "ns/iter",
            "extra": "iterations: 9033\ncpu: 77885.15443374211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157391.78940249552,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 157391.74746336017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 601709.2435456463,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 601701.2908778072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513614.40882352425,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 513616.76470588404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513720.4467303161,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 513717.8545187431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521963.370149241,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 521957.9104477634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 346188.29269491363,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 346178.82527146867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505497.81687090424,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 505489.04109589255 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}