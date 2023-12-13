window.BENCHMARK_DATA = {
  "lastUpdate": 1702489557490,
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
      }
    ]
  }
}