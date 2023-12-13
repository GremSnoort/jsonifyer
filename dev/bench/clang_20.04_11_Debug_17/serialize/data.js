window.BENCHMARK_DATA = {
  "lastUpdate": 1702503236464,
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
      }
    ]
  }
}