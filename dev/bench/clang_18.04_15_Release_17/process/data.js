window.BENCHMARK_DATA = {
  "lastUpdate": 1705963441299,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 18.04 Release c++-17": [
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
        "date": 1702490343677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1391.9946693469544,
            "unit": "ns/iter",
            "extra": "iterations: 491497\ncpu: 1391.8758405442966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16168.46229262745,
            "unit": "ns/iter",
            "extra": "iterations: 42737\ncpu: 16168.383368041743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34202.16531591286,
            "unit": "ns/iter",
            "extra": "iterations: 24184\ncpu: 34198.97039364869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51487.20852478705,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 51484.41958887547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56283.44890000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56283.26999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70998.340576213,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 70995.1070336391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85042.32052410918,
            "unit": "ns/iter",
            "extra": "iterations: 10227\ncpu: 85039.20015644861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99462.5173583652,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 99458.4643220626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113733.55784957086,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 113727.38973052696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1189.2436596431282,
            "unit": "ns/iter",
            "extra": "iterations: 589675\ncpu: 1189.1813286980137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 984.3921911536255,
            "unit": "ns/iter",
            "extra": "iterations: 710758\ncpu: 984.3645797866507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.0356305207591,
            "unit": "ns/iter",
            "extra": "iterations: 723537\ncpu: 969.0155444711203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.9908852143727,
            "unit": "ns/iter",
            "extra": "iterations: 708190\ncpu: 972.9744842485778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1864.404322778695,
            "unit": "ns/iter",
            "extra": "iterations: 375638\ncpu: 1864.363829005588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5647.081629999775,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5646.769000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31185.46329732283,
            "unit": "ns/iter",
            "extra": "iterations: 26197\ncpu: 31183.998167729074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24132.905391507757,
            "unit": "ns/iter",
            "extra": "iterations: 34035\ncpu: 24131.755545761735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23382.603358145876,
            "unit": "ns/iter",
            "extra": "iterations: 35198\ncpu: 23381.85692368878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23968.757997097306,
            "unit": "ns/iter",
            "extra": "iterations: 34450\ncpu: 23967.660377358487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70806.34626459311,
            "unit": "ns/iter",
            "extra": "iterations: 12502\ncpu: 70803.63941769314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 584686.7529999145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584652.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557113.4407766948,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 557089.7734627844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 570792.2076325737,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 570782.0181112561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563059.9120521133,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 563042.801302933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328987.2140165507,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 328972.9464958542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567930.9637774751,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567905.3040103482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2383928.178571414,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2383826.2755102045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073489.862470881,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1073442.3076923087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3270433.202127354,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3270344.680851069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8373.26829754,
            "unit": "ns/iter",
            "extra": "iterations: 100437\ncpu: 8372.964146678998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44839.13229126769,
            "unit": "ns/iter",
            "extra": "iterations: 18361\ncpu: 44837.329121507624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35052.14141799033,
            "unit": "ns/iter",
            "extra": "iterations: 23625\ncpu: 35050.85291005308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34632.52725508091,
            "unit": "ns/iter",
            "extra": "iterations: 23702\ncpu: 34630.68517424687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34433.40239278681,
            "unit": "ns/iter",
            "extra": "iterations: 23738\ncpu: 34432.20995871617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83440.67807496362,
            "unit": "ns/iter",
            "extra": "iterations: 10431\ncpu: 83437.50359505336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608444.6669999579,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608413.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592591.7236486445,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 592550.9459459453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587385.4907470685,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 587355.0376970494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583175.4097362431,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 583141.8526031103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.80379258876,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 336143.18885448703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581813.8502638343,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 581777.1108179378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2517320.1648649904,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2517157.83783785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123449.3102595864,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1123404.0791100182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5577.779999999848,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5577.455000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30613.92678314688,
            "unit": "ns/iter",
            "extra": "iterations: 26442\ncpu: 30611.576280160352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23769.933894124337,
            "unit": "ns/iter",
            "extra": "iterations: 34475\ncpu: 23768.519216823708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23641.756715647334,
            "unit": "ns/iter",
            "extra": "iterations: 34844\ncpu: 23639.860521180184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22878.625398886405,
            "unit": "ns/iter",
            "extra": "iterations: 35411\ncpu: 22877.131399847553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69915.12148255981,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 69908.04791767114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586020.0189999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585975.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 587278.4409395547,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 587220.4026845666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 582669.745999965,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 582613.7333333321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581930.8859591072,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 581902.9663810149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330288.69094340614,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 330270.49056603655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573591.6712780441,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 573576.6139657459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 518.6584914093145,
            "unit": "ns/iter",
            "extra": "iterations: 1351354\ncpu: 518.6573614315698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3319.157635172125,
            "unit": "ns/iter",
            "extra": "iterations: 216354\ncpu: 3318.894496981791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2626.173114611359,
            "unit": "ns/iter",
            "extra": "iterations: 275540\ncpu: 2626.055019234958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2607.1858565709854,
            "unit": "ns/iter",
            "extra": "iterations: 276708\ncpu: 2607.072075979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2022.6282353280133,
            "unit": "ns/iter",
            "extra": "iterations: 345560\ncpu: 2022.6198055330537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18355.63952664585,
            "unit": "ns/iter",
            "extra": "iterations: 38111\ncpu: 18355.372464642656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31716.334448925572,
            "unit": "ns/iter",
            "extra": "iterations: 21812\ncpu: 31716.156244269292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7413.951316654517,
            "unit": "ns/iter",
            "extra": "iterations: 94406\ncpu: 7413.524564116763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7369.6207950749085,
            "unit": "ns/iter",
            "extra": "iterations: 95186\ncpu: 7369.271741642577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7413.830159453571,
            "unit": "ns/iter",
            "extra": "iterations: 94259\ncpu: 7413.601884170185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14100.164700663629,
            "unit": "ns/iter",
            "extra": "iterations: 49593\ncpu: 14099.953622487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14019.342632763013,
            "unit": "ns/iter",
            "extra": "iterations: 49788\ncpu: 14019.271712059142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.288441090287,
            "unit": "ns/iter",
            "extra": "iterations: 134485\ncpu: 5165.11804290436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26059.78598061372,
            "unit": "ns/iter",
            "extra": "iterations: 26820\ncpu: 26058.77703206545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21149.44569706126,
            "unit": "ns/iter",
            "extra": "iterations: 33175\ncpu: 21148.807837226854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20960.224673031353,
            "unit": "ns/iter",
            "extra": "iterations: 33413\ncpu: 20959.497800257213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21466.75344153083,
            "unit": "ns/iter",
            "extra": "iterations: 32471\ncpu: 21465.88648332343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48505.49346518184,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48502.98734527288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160436.97709049014,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160430.8361970216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131921.91890339108,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 131914.20628834548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130503.8224995401,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130497.57869249454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131712.5232099111,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131707.31065589195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82266.11109792441,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 82264.70029673628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130556.34770487917,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130551.77476305467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4971.1087415781485,
            "unit": "ns/iter",
            "extra": "iterations: 140112\ncpu: 4970.834760762748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25758.696203929234,
            "unit": "ns/iter",
            "extra": "iterations: 27186\ncpu: 25757.39351136639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20648.46030251385,
            "unit": "ns/iter",
            "extra": "iterations: 33982\ncpu: 20648.169619210083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20321.091553196136,
            "unit": "ns/iter",
            "extra": "iterations: 34297\ncpu: 20320.33122430561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20624.587500001424,
            "unit": "ns/iter",
            "extra": "iterations: 33840\ncpu: 20623.226950354638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46983.27471411787,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 46982.27890926257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155577.67058823924,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 155565.19422863328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129414.90392771142,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 129409.95758804918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128942.91895376173,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 128937.53914164739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129647.12760849252,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129643.69344413617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82062.93460682125,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 82056.66236962304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126615.3628142611,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 126611.21360101197 ns\nthreads: 1"
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
        "date": 1702490343677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1391.9946693469544,
            "unit": "ns/iter",
            "extra": "iterations: 491497\ncpu: 1391.8758405442966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16168.46229262745,
            "unit": "ns/iter",
            "extra": "iterations: 42737\ncpu: 16168.383368041743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34202.16531591286,
            "unit": "ns/iter",
            "extra": "iterations: 24184\ncpu: 34198.97039364869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51487.20852478705,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 51484.41958887547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56283.44890000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56283.26999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70998.340576213,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 70995.1070336391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85042.32052410918,
            "unit": "ns/iter",
            "extra": "iterations: 10227\ncpu: 85039.20015644861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99462.5173583652,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 99458.4643220626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113733.55784957086,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 113727.38973052696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1189.2436596431282,
            "unit": "ns/iter",
            "extra": "iterations: 589675\ncpu: 1189.1813286980137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 984.3921911536255,
            "unit": "ns/iter",
            "extra": "iterations: 710758\ncpu: 984.3645797866507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.0356305207591,
            "unit": "ns/iter",
            "extra": "iterations: 723537\ncpu: 969.0155444711203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.9908852143727,
            "unit": "ns/iter",
            "extra": "iterations: 708190\ncpu: 972.9744842485778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1864.404322778695,
            "unit": "ns/iter",
            "extra": "iterations: 375638\ncpu: 1864.363829005588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5647.081629999775,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5646.769000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31185.46329732283,
            "unit": "ns/iter",
            "extra": "iterations: 26197\ncpu: 31183.998167729074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24132.905391507757,
            "unit": "ns/iter",
            "extra": "iterations: 34035\ncpu: 24131.755545761735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23382.603358145876,
            "unit": "ns/iter",
            "extra": "iterations: 35198\ncpu: 23381.85692368878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23968.757997097306,
            "unit": "ns/iter",
            "extra": "iterations: 34450\ncpu: 23967.660377358487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70806.34626459311,
            "unit": "ns/iter",
            "extra": "iterations: 12502\ncpu: 70803.63941769314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 584686.7529999145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584652.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557113.4407766948,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 557089.7734627844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 570792.2076325737,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 570782.0181112561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563059.9120521133,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 563042.801302933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328987.2140165507,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 328972.9464958542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567930.9637774751,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567905.3040103482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2383928.178571414,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2383826.2755102045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073489.862470881,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1073442.3076923087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3270433.202127354,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3270344.680851069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8373.26829754,
            "unit": "ns/iter",
            "extra": "iterations: 100437\ncpu: 8372.964146678998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44839.13229126769,
            "unit": "ns/iter",
            "extra": "iterations: 18361\ncpu: 44837.329121507624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35052.14141799033,
            "unit": "ns/iter",
            "extra": "iterations: 23625\ncpu: 35050.85291005308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34632.52725508091,
            "unit": "ns/iter",
            "extra": "iterations: 23702\ncpu: 34630.68517424687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34433.40239278681,
            "unit": "ns/iter",
            "extra": "iterations: 23738\ncpu: 34432.20995871617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83440.67807496362,
            "unit": "ns/iter",
            "extra": "iterations: 10431\ncpu: 83437.50359505336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608444.6669999579,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608413.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592591.7236486445,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 592550.9459459453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587385.4907470685,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 587355.0376970494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583175.4097362431,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 583141.8526031103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.80379258876,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 336143.18885448703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581813.8502638343,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 581777.1108179378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2517320.1648649904,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2517157.83783785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123449.3102595864,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1123404.0791100182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5577.779999999848,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5577.455000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30613.92678314688,
            "unit": "ns/iter",
            "extra": "iterations: 26442\ncpu: 30611.576280160352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23769.933894124337,
            "unit": "ns/iter",
            "extra": "iterations: 34475\ncpu: 23768.519216823708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23641.756715647334,
            "unit": "ns/iter",
            "extra": "iterations: 34844\ncpu: 23639.860521180184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22878.625398886405,
            "unit": "ns/iter",
            "extra": "iterations: 35411\ncpu: 22877.131399847553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69915.12148255981,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 69908.04791767114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586020.0189999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585975.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 587278.4409395547,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 587220.4026845666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 582669.745999965,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 582613.7333333321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581930.8859591072,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 581902.9663810149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330288.69094340614,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 330270.49056603655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573591.6712780441,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 573576.6139657459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 518.6584914093145,
            "unit": "ns/iter",
            "extra": "iterations: 1351354\ncpu: 518.6573614315698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3319.157635172125,
            "unit": "ns/iter",
            "extra": "iterations: 216354\ncpu: 3318.894496981791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2626.173114611359,
            "unit": "ns/iter",
            "extra": "iterations: 275540\ncpu: 2626.055019234958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2607.1858565709854,
            "unit": "ns/iter",
            "extra": "iterations: 276708\ncpu: 2607.072075979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2022.6282353280133,
            "unit": "ns/iter",
            "extra": "iterations: 345560\ncpu: 2022.6198055330537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18355.63952664585,
            "unit": "ns/iter",
            "extra": "iterations: 38111\ncpu: 18355.372464642656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31716.334448925572,
            "unit": "ns/iter",
            "extra": "iterations: 21812\ncpu: 31716.156244269292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7413.951316654517,
            "unit": "ns/iter",
            "extra": "iterations: 94406\ncpu: 7413.524564116763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7369.6207950749085,
            "unit": "ns/iter",
            "extra": "iterations: 95186\ncpu: 7369.271741642577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7413.830159453571,
            "unit": "ns/iter",
            "extra": "iterations: 94259\ncpu: 7413.601884170185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14100.164700663629,
            "unit": "ns/iter",
            "extra": "iterations: 49593\ncpu: 14099.953622487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14019.342632763013,
            "unit": "ns/iter",
            "extra": "iterations: 49788\ncpu: 14019.271712059142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.288441090287,
            "unit": "ns/iter",
            "extra": "iterations: 134485\ncpu: 5165.11804290436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26059.78598061372,
            "unit": "ns/iter",
            "extra": "iterations: 26820\ncpu: 26058.77703206545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21149.44569706126,
            "unit": "ns/iter",
            "extra": "iterations: 33175\ncpu: 21148.807837226854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20960.224673031353,
            "unit": "ns/iter",
            "extra": "iterations: 33413\ncpu: 20959.497800257213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21466.75344153083,
            "unit": "ns/iter",
            "extra": "iterations: 32471\ncpu: 21465.88648332343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48505.49346518184,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48502.98734527288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160436.97709049014,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160430.8361970216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131921.91890339108,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 131914.20628834548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130503.8224995401,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130497.57869249454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131712.5232099111,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131707.31065589195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82266.11109792441,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 82264.70029673628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130556.34770487917,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130551.77476305467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4971.1087415781485,
            "unit": "ns/iter",
            "extra": "iterations: 140112\ncpu: 4970.834760762748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25758.696203929234,
            "unit": "ns/iter",
            "extra": "iterations: 27186\ncpu: 25757.39351136639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20648.46030251385,
            "unit": "ns/iter",
            "extra": "iterations: 33982\ncpu: 20648.169619210083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20321.091553196136,
            "unit": "ns/iter",
            "extra": "iterations: 34297\ncpu: 20320.33122430561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20624.587500001424,
            "unit": "ns/iter",
            "extra": "iterations: 33840\ncpu: 20623.226950354638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46983.27471411787,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 46982.27890926257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155577.67058823924,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 155565.19422863328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129414.90392771142,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 129409.95758804918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128942.91895376173,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 128937.53914164739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129647.12760849252,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129643.69344413617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82062.93460682125,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 82056.66236962304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126615.3628142611,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 126611.21360101197 ns\nthreads: 1"
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
        "date": 1702492905792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.5568254258988,
            "unit": "ns/iter",
            "extra": "iterations: 478439\ncpu: 1448.4927023089672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17489.216855801827,
            "unit": "ns/iter",
            "extra": "iterations: 47497\ncpu: 17487.489736193867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36318.040594977094,
            "unit": "ns/iter",
            "extra": "iterations: 22589\ncpu: 36317.858249590514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57215.4123897247,
            "unit": "ns/iter",
            "extra": "iterations: 15529\ncpu: 57214.579174447834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60338.63430000111,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60337.879999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76789.15055632585,
            "unit": "ns/iter",
            "extra": "iterations: 11504\ncpu: 76788.6648122392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91236.8160907486,
            "unit": "ns/iter",
            "extra": "iterations: 9521\ncpu: 91234.53418758532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104587.40588306892,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 104586.06706209903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 123587.28468392951,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 123580.14425116677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1274.249212881825,
            "unit": "ns/iter",
            "extra": "iterations: 550108\ncpu: 1274.2388767296613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1058.0627803095435,
            "unit": "ns/iter",
            "extra": "iterations: 664890\ncpu: 1058.019973228655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1053.3377868253285,
            "unit": "ns/iter",
            "extra": "iterations: 664647\ncpu: 1053.3067929291776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1056.7141959348417,
            "unit": "ns/iter",
            "extra": "iterations: 653983\ncpu: 1056.659882596336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1919.9854946280684,
            "unit": "ns/iter",
            "extra": "iterations: 365244\ncpu: 1919.9069663019789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5650.744220000661,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5650.805999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30195.93151190768,
            "unit": "ns/iter",
            "extra": "iterations: 27085\ncpu: 30195.77625992247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23911.43371631795,
            "unit": "ns/iter",
            "extra": "iterations: 34292\ncpu: 23911.434153738468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23264.860273122587,
            "unit": "ns/iter",
            "extra": "iterations: 35369\ncpu: 23264.245525742896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23371.268291297176,
            "unit": "ns/iter",
            "extra": "iterations: 35208\ncpu: 23370.552147239287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72211.70913172512,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 72207.09532590391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560263.7179999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560263.899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562666.278698931,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 562662.8188775514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561518.6127356067,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 561494.2170240425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561439.2399219982,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 561415.6046814038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325062.1979714487,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 325050.8640120215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557501.983160619,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 557472.7331606218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2402009.1844155197,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2401949.8701298716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1087863.7322274207,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1087844.6682464466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3228624.9116609707,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3228419.081272095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8326.542704695574,
            "unit": "ns/iter",
            "extra": "iterations: 102518\ncpu: 8326.244171755197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44129.04352769041,
            "unit": "ns/iter",
            "extra": "iterations: 18471\ncpu: 44127.789507877205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34707.65366041409,
            "unit": "ns/iter",
            "extra": "iterations: 23399\ncpu: 34707.72682593275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34275.876772675874,
            "unit": "ns/iter",
            "extra": "iterations: 23834\ncpu: 34275.60208106072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34572.891140473796,
            "unit": "ns/iter",
            "extra": "iterations: 24674\ncpu: 34571.44362486834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81903.8456247626,
            "unit": "ns/iter",
            "extra": "iterations: 10468\ncpu: 81901.41383263325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 592811.2659998988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592811.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594649.579877598,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 594628.5520054399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589035.680981652,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 589006.3394683052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 578933.990534141,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 578911.3590263665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337418.06739383814,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 337413.47876899067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 583192.2514812249,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 583166.6227781434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2526724.5846994678,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2526606.83060109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1125016.8404384912,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1124967.7222898868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5469.471460000932,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5469.232000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29927.091973005812,
            "unit": "ns/iter",
            "extra": "iterations: 27856\ncpu: 29926.712377943943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23108.974071640714,
            "unit": "ns/iter",
            "extra": "iterations: 34981\ncpu: 23108.38169291895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22533.9072910283,
            "unit": "ns/iter",
            "extra": "iterations: 35962\ncpu: 22533.304599299252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22635.411198239017,
            "unit": "ns/iter",
            "extra": "iterations: 36345\ncpu: 22634.871371577952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70774.18650536216,
            "unit": "ns/iter",
            "extra": "iterations: 12316\ncpu: 70772.91328353337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 625441.5380000182,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625439.8000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 612566.6852899466,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 612552.333804809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 613116.5616631808,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 613081.60676533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 602097.8313752854,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 602092.8127159631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 343256.5867834458,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 343247.6910828026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 587268.4430811446,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 587261.0088616248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.3026385507998,
            "unit": "ns/iter",
            "extra": "iterations: 1283356\ncpu: 550.2977350010456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3295.2026622470285,
            "unit": "ns/iter",
            "extra": "iterations: 211776\ncpu: 3295.184534602584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2520.314294676527,
            "unit": "ns/iter",
            "extra": "iterations: 277348\ncpu: 2520.261188110252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2294.428797724411,
            "unit": "ns/iter",
            "extra": "iterations: 309330\ncpu: 2294.4134096272487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1971.1762584066137,
            "unit": "ns/iter",
            "extra": "iterations: 349867\ncpu: 1971.1313156142069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18952.910829040084,
            "unit": "ns/iter",
            "extra": "iterations: 37658\ncpu: 18952.70327686012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32990.37708273759,
            "unit": "ns/iter",
            "extra": "iterations: 21006\ncpu: 32989.688660382446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7733.626720364713,
            "unit": "ns/iter",
            "extra": "iterations: 88644\ncpu: 7733.424710076208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7912.121120568126,
            "unit": "ns/iter",
            "extra": "iterations: 88705\ncpu: 7912.028634237065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7897.692154938377,
            "unit": "ns/iter",
            "extra": "iterations: 88629\ncpu: 7897.597851718993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15569.100254089348,
            "unit": "ns/iter",
            "extra": "iterations: 44866\ncpu: 15568.925244060205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14778.59181399687,
            "unit": "ns/iter",
            "extra": "iterations: 47569\ncpu: 14778.319914229976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5192.503682454926,
            "unit": "ns/iter",
            "extra": "iterations: 134557\ncpu: 5192.430717093923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26452.377758430648,
            "unit": "ns/iter",
            "extra": "iterations: 26419\ncpu: 26451.5310950454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21327.459840886262,
            "unit": "ns/iter",
            "extra": "iterations: 32807\ncpu: 21327.244185692052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21278.036213816256,
            "unit": "ns/iter",
            "extra": "iterations: 32888\ncpu: 21278.01021649212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21655.457853640557,
            "unit": "ns/iter",
            "extra": "iterations: 32399\ncpu: 21655.421463625178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49314.77563786949,
            "unit": "ns/iter",
            "extra": "iterations: 14227\ncpu: 49313.59387080971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 163022.29744312094,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 163019.04761904952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136042.77986447708,
            "unit": "ns/iter",
            "extra": "iterations: 5165\ncpu: 136044.14327202376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134020.12458951725,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 134018.42766080672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137218.27454438322,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137218.34215167657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84687.44531913407,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84686.32675305726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135599.6663446637,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 135596.65765069448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4944.309770034232,
            "unit": "ns/iter",
            "extra": "iterations: 141760\ncpu: 4944.195118510142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25764.35590730505,
            "unit": "ns/iter",
            "extra": "iterations: 27229\ncpu: 25763.964890374184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20902.516106817533,
            "unit": "ns/iter",
            "extra": "iterations: 33402\ncpu: 20902.08071372967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20735.46401756893,
            "unit": "ns/iter",
            "extra": "iterations: 33697\ncpu: 20735.240525862762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20872.49710672329,
            "unit": "ns/iter",
            "extra": "iterations: 33526\ncpu: 20872.105231760153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47422.89725749645,
            "unit": "ns/iter",
            "extra": "iterations: 14804\ncpu: 47422.82491218535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162251.5995359683,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 162249.2575406045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 134074.8881868706,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134073.65498755508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131600.21976983908,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 131599.07564610345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 134679.87558906866,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 134678.7747408096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 85744.38030935638,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 85744.38988460621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 134158.77550240667,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 134156.650717701 ns\nthreads: 1"
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
        "date": 1702503971225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1390.15953416908,
            "unit": "ns/iter",
            "extra": "iterations: 504475\ncpu: 1390.055007681253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16182.42067246267,
            "unit": "ns/iter",
            "extra": "iterations: 50947\ncpu: 16181.406167193356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34078.90138271562,
            "unit": "ns/iter",
            "extra": "iterations: 24083\ncpu: 34077.11248598596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50975.08777938342,
            "unit": "ns/iter",
            "extra": "iterations: 16644\ncpu: 50973.15549146842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56378.05759999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56376.57000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72188.08727595663,
            "unit": "ns/iter",
            "extra": "iterations: 12386\ncpu: 72185.57242047472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84604.84232202401,
            "unit": "ns/iter",
            "extra": "iterations: 10198\ncpu: 84600.66679741126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98152.75768187975,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 98148.23768639857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114132.25793651008,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 114127.07671957675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1190.5224978777835,
            "unit": "ns/iter",
            "extra": "iterations: 587811\ncpu: 1190.5095345272555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 939.771390240944,
            "unit": "ns/iter",
            "extra": "iterations: 711855\ncpu: 939.682238658155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 937.7051275862862,
            "unit": "ns/iter",
            "extra": "iterations: 745926\ncpu: 937.643010164548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 952.8282370394984,
            "unit": "ns/iter",
            "extra": "iterations: 742762\ncpu: 952.7750477272654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1821.5407702598027,
            "unit": "ns/iter",
            "extra": "iterations: 383429\ncpu: 1821.4232621945648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5122.291110000106,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5122.235999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28351.54645354462,
            "unit": "ns/iter",
            "extra": "iterations: 29029\ncpu: 28350.125736332633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22340.882850997874,
            "unit": "ns/iter",
            "extra": "iterations: 36731\ncpu: 22339.468024284663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21120.93643095693,
            "unit": "ns/iter",
            "extra": "iterations: 38352\ncpu: 21119.965060492264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21215.807134283797,
            "unit": "ns/iter",
            "extra": "iterations: 38322\ncpu: 21214.85308699956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71764.5099184131,
            "unit": "ns/iter",
            "extra": "iterations: 12502\ncpu: 71760.31834906408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 554959.9469999293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554919.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552477.38363173,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 552441.6879795397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559555.4712643829,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 559533.7803320575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550638.6492443135,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 550602.3299748118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321527.1191785722,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 321505.5005500544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559961.4225080012,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 559939.3569131846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2344190.8832487594,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2344058.1218274105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1063112.2896552107,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1063034.5977011505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3251628.2323947153,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3251416.549295785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8597.24993935979,
            "unit": "ns/iter",
            "extra": "iterations: 98944\ncpu: 8596.776964747749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44542.50002675602,
            "unit": "ns/iter",
            "extra": "iterations: 18687\ncpu: 44538.732808904504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35129.03838179106,
            "unit": "ns/iter",
            "extra": "iterations: 23631\ncpu: 35127.14654479289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35202.307524537886,
            "unit": "ns/iter",
            "extra": "iterations: 23842\ncpu: 35200.415233621396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34723.7681255986,
            "unit": "ns/iter",
            "extra": "iterations: 24013\ncpu: 34722.94173989113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83338.66553261249,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 83333.62271234112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 592424.6729999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592370.1999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 579746.9451505265,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 579703.0100334442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583452.2563417369,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 583420.7610146845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579169.3246666606,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 579123.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337894.58700697665,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 337868.6001546772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580847.9590878861,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580830.1140174383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2495080.0540541667,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2494890.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1116017.9277108437,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1115928.1927710823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5519.633919999478,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5519.581000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30261.634392059732,
            "unit": "ns/iter",
            "extra": "iterations: 27297\ncpu: 30260.424222442027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23995.370154305157,
            "unit": "ns/iter",
            "extra": "iterations: 34283\ncpu: 23994.271213137697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22998.6268285803,
            "unit": "ns/iter",
            "extra": "iterations: 35410\ncpu: 22997.591075967226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22593.86020497878,
            "unit": "ns/iter",
            "extra": "iterations: 36296\ncpu: 22593.41800749402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70059.78321846413,
            "unit": "ns/iter",
            "extra": "iterations: 12478\ncpu: 70054.9126462575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586600.0319999785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586557.3000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 583091.4296148673,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 583042.56308101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 588099.8484447047,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 588093.1171409655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575160.0505913823,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 575148.0946123541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332244.71493558516,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 332232.22137983475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 572161.6128822309,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 572154.9772283677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 515.2525461244961,
            "unit": "ns/iter",
            "extra": "iterations: 1359419\ncpu: 515.2401136073572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3270.763251146176,
            "unit": "ns/iter",
            "extra": "iterations: 215321\ncpu: 3270.6884140422835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2517.8839855383794,
            "unit": "ns/iter",
            "extra": "iterations: 276319\ncpu: 2517.773660153679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2476.2718408129836,
            "unit": "ns/iter",
            "extra": "iterations: 282636\ncpu: 2476.1824396043057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1982.094019413943,
            "unit": "ns/iter",
            "extra": "iterations: 353661\ncpu: 1982.0458009223626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18002.009491070945,
            "unit": "ns/iter",
            "extra": "iterations: 38984\ncpu: 18001.444182228548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31270.816958099203,
            "unit": "ns/iter",
            "extra": "iterations: 22361\ncpu: 31270.104199275305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7318.491769460413,
            "unit": "ns/iter",
            "extra": "iterations: 95498\ncpu: 7318.052734088708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7338.449373579926,
            "unit": "ns/iter",
            "extra": "iterations: 94585\ncpu: 7337.911931067229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7268.830624571518,
            "unit": "ns/iter",
            "extra": "iterations: 96354\ncpu: 7268.216161238801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13768.399771176908,
            "unit": "ns/iter",
            "extra": "iterations: 50694\ncpu: 13767.337357478173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13851.521310955892,
            "unit": "ns/iter",
            "extra": "iterations: 50467\ncpu: 13851.160164067653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5211.991099624905,
            "unit": "ns/iter",
            "extra": "iterations: 134264\ncpu: 5211.70306262292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26453.279789013675,
            "unit": "ns/iter",
            "extra": "iterations: 26352\ncpu: 26451.82908318121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21374.542491481676,
            "unit": "ns/iter",
            "extra": "iterations: 32583\ncpu: 21373.43706840995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20952.733979067798,
            "unit": "ns/iter",
            "extra": "iterations: 33347\ncpu: 20951.584850211435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21434.82652095636,
            "unit": "ns/iter",
            "extra": "iterations: 32759\ncpu: 21434.16770963727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48920.93971854418,
            "unit": "ns/iter",
            "extra": "iterations: 14283\ncpu: 48920.31085906406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160715.24528301897,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 160711.2747353907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134381.7185099724,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134376.7089093705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133294.32711703292,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133291.4367269264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133317.26126640622,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 133314.33732648887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83545.52071641457,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83544.45373134328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133263.36755218855,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133260.15180265642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5084.2047669292715,
            "unit": "ns/iter",
            "extra": "iterations: 136482\ncpu: 5083.936343254142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26281.68966942159,
            "unit": "ns/iter",
            "extra": "iterations: 26620\ncpu: 26280.38317054843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21080.021217686113,
            "unit": "ns/iter",
            "extra": "iterations: 33227\ncpu: 21079.52267734041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20601.06270401824,
            "unit": "ns/iter",
            "extra": "iterations: 33698\ncpu: 20600.623182384494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21163.288226924516,
            "unit": "ns/iter",
            "extra": "iterations: 33033\ncpu: 21162.498107952597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47573.49497710282,
            "unit": "ns/iter",
            "extra": "iterations: 14633\ncpu: 47572.39800451007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156278.92167864685,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 156273.22710951543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130156.41198293578,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130153.06993136795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129308.74059735192,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129303.46607669558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127120.32074100732,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127118.7068652374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81990.86534860714,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 81989.79878334147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127251.50579920027,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 127248.3146067424 ns\nthreads: 1"
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
        "date": 1705575610183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1385.0861062384893,
            "unit": "ns/iter",
            "extra": "iterations: 510776\ncpu: 1384.9750184033705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16020.494761085236,
            "unit": "ns/iter",
            "extra": "iterations: 48197\ncpu: 16020.385086208686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34208.87854016952,
            "unit": "ns/iter",
            "extra": "iterations: 24222\ncpu: 34207.23309388161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50882.600179801026,
            "unit": "ns/iter",
            "extra": "iterations: 16685\ncpu: 50882.7090200779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56755.23449999673,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56753.37999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70975.03920933252,
            "unit": "ns/iter",
            "extra": "iterations: 12344\ncpu: 70970.4147764096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84359.41447559035,
            "unit": "ns/iter",
            "extra": "iterations: 10307\ncpu: 84356.57320267781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98924.64799081812,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 98920.7807118255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115789.84248650695,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 115788.52890820494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1196.0189321100565,
            "unit": "ns/iter",
            "extra": "iterations: 585566\ncpu: 1195.9956691474558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 977.0372701297165,
            "unit": "ns/iter",
            "extra": "iterations: 717089\ncpu: 976.9870964413047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 966.1444117391355,
            "unit": "ns/iter",
            "extra": "iterations: 715482\ncpu: 966.0809076957909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 932.6249323006441,
            "unit": "ns/iter",
            "extra": "iterations: 747793\ncpu: 932.6103614235484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1837.0652808990726,
            "unit": "ns/iter",
            "extra": "iterations: 382700\ncpu: 1837.0240397177952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5317.156109999814,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5317.168000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28352.18386653144,
            "unit": "ns/iter",
            "extra": "iterations: 29070\ncpu: 28351.974544203666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22741.14681455216,
            "unit": "ns/iter",
            "extra": "iterations: 37326\ncpu: 22740.57493436211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22165.15363780271,
            "unit": "ns/iter",
            "extra": "iterations: 37289\ncpu: 22164.919949582953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22139.856892635114,
            "unit": "ns/iter",
            "extra": "iterations: 36539\ncpu: 22139.74109855222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72621.94372821171,
            "unit": "ns/iter",
            "extra": "iterations: 12333\ncpu: 72620.78164274713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551143.3010000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551124.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 543610.9528763696,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 543599.5104039172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560408.5813350246,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 560392.6117952042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557068.2414680687,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 557031.2942691554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321183.7822728656,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 321172.56344244274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563051.0689001072,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 562967.8255372955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2322174.581863875,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2322024.1813601987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1071549.017301067,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1071519.8385236443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3225455.814685234,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3225373.426573423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8358.165050410169,
            "unit": "ns/iter",
            "extra": "iterations: 67646\ncpu: 8358.062560979193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45018.78353224427,
            "unit": "ns/iter",
            "extra": "iterations: 18266\ncpu: 45017.13566188559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34755.42196410496,
            "unit": "ns/iter",
            "extra": "iterations: 23848\ncpu: 34755.19540422664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34906.3139529984,
            "unit": "ns/iter",
            "extra": "iterations: 23787\ncpu: 34905.826712069684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35014.5977761867,
            "unit": "ns/iter",
            "extra": "iterations: 23743\ncpu: 35014.37055132064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83059.42569702916,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 83057.28657660248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 615033.775000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615024.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598187.5689535555,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 598174.151074155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589975.2115646752,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 589956.190476191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 602700.3710437614,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 602701.9528619569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337599.4304915719,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 337595.96774193546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573989.4450295601,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 573976.3001974946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2451035.021680382,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2451006.233062319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1086250.5133876854,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1086231.431897553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5466.678799999727,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5466.691999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29683.532310119328,
            "unit": "ns/iter",
            "extra": "iterations: 27886\ncpu: 29682.92691673258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23332.209942877245,
            "unit": "ns/iter",
            "extra": "iterations: 35362\ncpu: 23331.697867767598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22637.696060913047,
            "unit": "ns/iter",
            "extra": "iterations: 36379\ncpu: 22637.55188432891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23153.59572917781,
            "unit": "ns/iter",
            "extra": "iterations: 35684\ncpu: 23153.477749131325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70453.04419801098,
            "unit": "ns/iter",
            "extra": "iterations: 12444\ncpu: 70451.61523625831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 590624.4599999582,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590571.5000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567688.8102094585,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 567689.6596858616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 605757.8910045706,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 605729.6126066974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576421.9394347442,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 576399.8654104992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330101.70150375477,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 330086.65413533885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570247.7568448384,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 570204.889178619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 529.5975853896612,
            "unit": "ns/iter",
            "extra": "iterations: 1320710\ncpu: 529.5684139591582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3303.8142177514287,
            "unit": "ns/iter",
            "extra": "iterations: 209358\ncpu: 3303.5269729363004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2635.353667071572,
            "unit": "ns/iter",
            "extra": "iterations: 264339\ncpu: 2635.27326652517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2534.7580377882623,
            "unit": "ns/iter",
            "extra": "iterations: 279399\ncpu: 2534.7646197731638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2022.3361071714407,
            "unit": "ns/iter",
            "extra": "iterations: 346211\ncpu: 2022.3184705280942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18077.003232230934,
            "unit": "ns/iter",
            "extra": "iterations: 38673\ncpu: 18076.939983968132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31892.53307180048,
            "unit": "ns/iter",
            "extra": "iterations: 21922\ncpu: 31892.628409816545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7456.677453049171,
            "unit": "ns/iter",
            "extra": "iterations: 93822\ncpu: 7456.440920040127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7446.8683395248745,
            "unit": "ns/iter",
            "extra": "iterations: 93931\ncpu: 7446.887608989542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7441.645026522985,
            "unit": "ns/iter",
            "extra": "iterations: 94069\ncpu: 7441.033709298497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14621.035334951202,
            "unit": "ns/iter",
            "extra": "iterations: 47828\ncpu: 14620.090741825083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14082.544718048586,
            "unit": "ns/iter",
            "extra": "iterations: 49991\ncpu: 14081.504670840663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5209.8528514065965,
            "unit": "ns/iter",
            "extra": "iterations: 134986\ncpu: 5209.808424577341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26153.836130376723,
            "unit": "ns/iter",
            "extra": "iterations: 26814\ncpu: 26153.10658611177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20760.433458612184,
            "unit": "ns/iter",
            "extra": "iterations: 33791\ncpu: 20759.344204078192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20642.177134128346,
            "unit": "ns/iter",
            "extra": "iterations: 34042\ncpu: 20641.08454262371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21043.34476730263,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 21042.80202556061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48595.39305835244,
            "unit": "ns/iter",
            "extra": "iterations: 14377\ncpu: 48594.525978994425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159305.51062868955,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 159298.21347806332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133796.81418467403,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 133790.4989485758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132109.4339551456,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 132101.7712455268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133029.2801222212,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133018.9421424476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82790.68916685892,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82785.48501298022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132643.8219905251,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132640.492890995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4927.392947869807,
            "unit": "ns/iter",
            "extra": "iterations: 141319\ncpu: 4927.220685116671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25648.97673570559,
            "unit": "ns/iter",
            "extra": "iterations: 27424\ncpu: 25649.026400233237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20608.13958554241,
            "unit": "ns/iter",
            "extra": "iterations: 33972\ncpu: 20608.109619686744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20288.605533414328,
            "unit": "ns/iter",
            "extra": "iterations: 34373\ncpu: 20288.485148226795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20565.76753212308,
            "unit": "ns/iter",
            "extra": "iterations: 34009\ncpu: 20565.682613426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46750.35216081036,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 46750.5460636516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151580.0929375902,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 151578.9428076255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127483.22896601353,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 127473.85062693161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126911.79227139457,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 126912.20972423675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126959.79225737591,
            "unit": "ns/iter",
            "extra": "iterations: 5502\ncpu: 126956.1432206461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81416.7925209661,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 81417.10158434263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127147.29421367562,
            "unit": "ns/iter",
            "extra": "iterations: 5513\ncpu: 127138.12806094707 ns\nthreads: 1"
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
        "date": 1705773423014,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1456.7211122845652,
            "unit": "ns/iter",
            "extra": "iterations: 500879\ncpu: 1456.5294212773942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16094.183344119056,
            "unit": "ns/iter",
            "extra": "iterations: 50997\ncpu: 16093.878071259096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34717.43708609685,
            "unit": "ns/iter",
            "extra": "iterations: 24009\ncpu: 34717.10192011328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51119.2470133949,
            "unit": "ns/iter",
            "extra": "iterations: 16574\ncpu: 51118.93326897548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56468.42589999324,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56466.94999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71255.44448038832,
            "unit": "ns/iter",
            "extra": "iterations: 12365\ncpu: 71252.44642135063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85161.65803974919,
            "unit": "ns/iter",
            "extra": "iterations: 10162\ncpu: 85160.46053926394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98007.54966587662,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 98004.28134556572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113468.95091942682,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113467.28403227939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1187.2833520801503,
            "unit": "ns/iter",
            "extra": "iterations: 584986\ncpu: 1187.2343953530506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 987.1801430697311,
            "unit": "ns/iter",
            "extra": "iterations: 710563\ncpu: 987.1697513098751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.2063597532939,
            "unit": "ns/iter",
            "extra": "iterations: 723896\ncpu: 963.175511399428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.1445403239032,
            "unit": "ns/iter",
            "extra": "iterations: 739586\ncpu: 945.0977979572345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1817.5490802619922,
            "unit": "ns/iter",
            "extra": "iterations: 386958\ncpu: 1817.4675287757345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5661.747660000174,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5661.679999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31068.33667033505,
            "unit": "ns/iter",
            "extra": "iterations: 27270\ncpu: 31067.53575357532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24286.08253713373,
            "unit": "ns/iter",
            "extra": "iterations: 33597\ncpu: 24284.567074441147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23527.921216132494,
            "unit": "ns/iter",
            "extra": "iterations: 34766\ncpu: 23527.060921590004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23470.227101270597,
            "unit": "ns/iter",
            "extra": "iterations: 34729\ncpu: 23469.06331884018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72177.84402121259,
            "unit": "ns/iter",
            "extra": "iterations: 12444\ncpu: 72174.18836387013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 553880.1440000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553872.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551540.8244680759,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 551508.2446808509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558038.8556249716,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 557998.6874999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555825.4647058567,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 555794.640522875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320210.8844036481,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 320209.2477064215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 548882.5749525346,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 548863.0613535725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2352249.997474903,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2352238.636363632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1065481.498273916,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1065450.517836595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3244235.9964789655,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3244017.957746482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8450.187281530634,
            "unit": "ns/iter",
            "extra": "iterations: 99556\ncpu: 8449.801116959285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44042.70173194313,
            "unit": "ns/iter",
            "extra": "iterations: 18765\ncpu: 44040.346389555045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35072.32414085419,
            "unit": "ns/iter",
            "extra": "iterations: 23570\ncpu: 35072.31226134928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34347.92168225731,
            "unit": "ns/iter",
            "extra": "iterations: 24158\ncpu: 34346.10894941638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34683.74566160314,
            "unit": "ns/iter",
            "extra": "iterations: 23972\ncpu: 34682.63390622369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83450.60241541556,
            "unit": "ns/iter",
            "extra": "iterations: 10433\ncpu: 83446.72673248342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600787.7880000478,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600793.7999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596592.5165517171,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 596552.7586206933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585679.3147139201,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 585660.9673024536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592057.5795221572,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 592057.1331058058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335586.3011673027,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 335578.17120622616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585458.868124586,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 585445.2617627565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2491957.533512302,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2491918.2305629984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1117532.763855542,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1117502.8915662682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5585.655590000442,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5585.407000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30142.027963595396,
            "unit": "ns/iter",
            "extra": "iterations: 27357\ncpu: 30141.89421354656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23845.542299723988,
            "unit": "ns/iter",
            "extra": "iterations: 34752\ncpu: 23845.099562615094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23427.140934081246,
            "unit": "ns/iter",
            "extra": "iterations: 35286\ncpu: 23426.53743694368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23319.428887438036,
            "unit": "ns/iter",
            "extra": "iterations: 35261\ncpu: 23318.666515413686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70053.68819456149,
            "unit": "ns/iter",
            "extra": "iterations: 12418\ncpu: 70052.28700273823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573007.4299999615,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572983.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580387.7091029447,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 580381.9261213695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577661.4595317771,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 577647.290969901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 584040.941137126,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 584023.745819401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329554.9196496391,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 329552.3990860617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573057.2726072604,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 573039.1419141918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 522.7949707759378,
            "unit": "ns/iter",
            "extra": "iterations: 1331776\ncpu: 522.7750012014044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3278.706021411657,
            "unit": "ns/iter",
            "extra": "iterations: 213621\ncpu: 3278.5269238510896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2574.1750680675264,
            "unit": "ns/iter",
            "extra": "iterations: 272157\ncpu: 2574.0319007043686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2534.039598470764,
            "unit": "ns/iter",
            "extra": "iterations: 275945\ncpu: 2533.9342985014937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2039.1445508661413,
            "unit": "ns/iter",
            "extra": "iterations: 343706\ncpu: 2039.07292860758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18171.371952009576,
            "unit": "ns/iter",
            "extra": "iterations: 38591\ncpu: 18170.67191832295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32059.985022638255,
            "unit": "ns/iter",
            "extra": "iterations: 22968\ncpu: 32058.755660049053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7460.835455049997,
            "unit": "ns/iter",
            "extra": "iterations: 93792\ncpu: 7460.403872398505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7446.021411450833,
            "unit": "ns/iter",
            "extra": "iterations: 93875\ncpu: 7445.88015978696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7441.203393985788,
            "unit": "ns/iter",
            "extra": "iterations: 93813\ncpu: 7440.707577841008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14764.336893551383,
            "unit": "ns/iter",
            "extra": "iterations: 47469\ncpu: 14763.776359308304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14212.052750992341,
            "unit": "ns/iter",
            "extra": "iterations: 49364\ncpu: 14211.565108175955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5201.682888528957,
            "unit": "ns/iter",
            "extra": "iterations: 135003\ncpu: 5201.368858469777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26625.866245190184,
            "unit": "ns/iter",
            "extra": "iterations: 26257\ncpu: 26624.98762234847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21424.414990355603,
            "unit": "ns/iter",
            "extra": "iterations: 32661\ncpu: 21423.43467744421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21167.214701992416,
            "unit": "ns/iter",
            "extra": "iterations: 33288\ncpu: 21166.60658495554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21345.588995970975,
            "unit": "ns/iter",
            "extra": "iterations: 32788\ncpu: 21345.226912285234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48096.65175674705,
            "unit": "ns/iter",
            "extra": "iterations: 14487\ncpu: 48096.64526817104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156187.31969027017,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 156180.64159291878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130710.97028594007,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130708.78340497095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130739.1929075325,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130735.4994429999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131628.8131806123,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131626.94329703375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82667.15104104474,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82665.61580990594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131198.8657580239,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130865.25392083528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5047.872096051405,
            "unit": "ns/iter",
            "extra": "iterations: 138260\ncpu: 5047.819325907736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25434.642208222034,
            "unit": "ns/iter",
            "extra": "iterations: 27298\ncpu: 25433.7680416145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20420.363691968327,
            "unit": "ns/iter",
            "extra": "iterations: 34334\ncpu: 20420.49863109457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20245.36366794116,
            "unit": "ns/iter",
            "extra": "iterations: 34548\ncpu: 20244.95773995582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20579.136719668968,
            "unit": "ns/iter",
            "extra": "iterations: 33960\ncpu: 20579.125441696146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47040.696114742095,
            "unit": "ns/iter",
            "extra": "iterations: 14851\ncpu: 47038.21964850834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156072.62341137452,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 156072.50836120412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129902.42244898452,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129899.66604823779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129168.1430414885,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129164.055299537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129062.08830968024,
            "unit": "ns/iter",
            "extra": "iterations: 5141\ncpu: 129056.75938533401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82242.99094543897,
            "unit": "ns/iter",
            "extra": "iterations: 8504\ncpu: 82237.92333019797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128724.37191757129,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128719.28597718236 ns\nthreads: 1"
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
        "date": 1705774852522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1385.5178440696916,
            "unit": "ns/iter",
            "extra": "iterations: 509497\ncpu: 1385.4601695397619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16188.866616045565,
            "unit": "ns/iter",
            "extra": "iterations: 51363\ncpu: 16187.463738488796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34276.887761891514,
            "unit": "ns/iter",
            "extra": "iterations: 24056\ncpu: 34274.28915862985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50867.49105583633,
            "unit": "ns/iter",
            "extra": "iterations: 16603\ncpu: 50865.06655423722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56415.27530000303,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56412.640000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71013.86498335708,
            "unit": "ns/iter",
            "extra": "iterations: 12317\ncpu: 71008.92262726316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84793.81164216872,
            "unit": "ns/iter",
            "extra": "iterations: 10273\ncpu: 84788.17288036598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97443.66446469305,
            "unit": "ns/iter",
            "extra": "iterations: 8780\ncpu: 97440.5808656036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112243.0755136867,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 112240.07328883655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1202.2856380462626,
            "unit": "ns/iter",
            "extra": "iterations: 592120\ncpu: 1202.2562993987717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 956.638906919789,
            "unit": "ns/iter",
            "extra": "iterations: 731767\ncpu: 956.6289542982936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 962.2837857666653,
            "unit": "ns/iter",
            "extra": "iterations: 729205\ncpu: 962.2480646731718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 958.5330914402965,
            "unit": "ns/iter",
            "extra": "iterations: 721531\ncpu: 958.4742720686984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1851.0067634478528,
            "unit": "ns/iter",
            "extra": "iterations: 379688\ncpu: 1850.8952086976653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5308.791429999928,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5308.671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29293.949467157192,
            "unit": "ns/iter",
            "extra": "iterations: 28714\ncpu: 29292.689977014714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23028.918943633882,
            "unit": "ns/iter",
            "extra": "iterations: 36086\ncpu: 23028.10785346118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21802.027790823744,
            "unit": "ns/iter",
            "extra": "iterations: 38322\ncpu: 21801.242106361886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22010.091148231168,
            "unit": "ns/iter",
            "extra": "iterations: 38015\ncpu: 22009.36735499149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71518.78734579991,
            "unit": "ns/iter",
            "extra": "iterations: 12565\ncpu: 71514.49263828105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 575741.8919999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575672.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556523.9543114358,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 556482.2393822375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553847.4148387386,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 553810.5161290336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551544.9133710292,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 551509.1650973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325955.3617774096,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 325944.6716476596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559087.3010203935,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 559063.7755102051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2343088.405541551,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2342965.4911838733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1060180.0388127381,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1060116.0958904102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3235224.3916084482,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3235074.1258741347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8367.01949830719,
            "unit": "ns/iter",
            "extra": "iterations: 102214\ncpu: 8366.497740035606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44208.512453631134,
            "unit": "ns/iter",
            "extra": "iterations: 18870\ncpu: 44205.12453630112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35253.07548291153,
            "unit": "ns/iter",
            "extra": "iterations: 23555\ncpu: 35250.426661006095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34894.63267451632,
            "unit": "ns/iter",
            "extra": "iterations: 23780\ncpu: 34893.86459209435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34430.17887894303,
            "unit": "ns/iter",
            "extra": "iterations: 23692\ncpu: 34429.38544656412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83124.78604426986,
            "unit": "ns/iter",
            "extra": "iterations: 10390\ncpu: 83122.45428296392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 587077.0190000485,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587041.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586939.0770279338,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 586923.8582140425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583706.2749325815,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 583668.5983827494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581313.2812920731,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 581264.7375504706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336828.6988372026,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 336802.44186046574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573712.6244254783,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 573675.7058437307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2489981.428954497,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2489802.14477213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105629.37336505,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105585.7312722956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5568.899140000668,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5568.63700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30355.817768822195,
            "unit": "ns/iter",
            "extra": "iterations: 27295\ncpu: 30355.054039201455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23534.703257004967,
            "unit": "ns/iter",
            "extra": "iterations: 35155\ncpu: 23533.60546152761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23297.343995731753,
            "unit": "ns/iter",
            "extra": "iterations: 35608\ncpu: 23296.197483711407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22798.41553005133,
            "unit": "ns/iter",
            "extra": "iterations: 36072\ncpu: 22796.958860057515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70188.45636189387,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 70186.37308184186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 588952.3839999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588928.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576266.7557908897,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 576235.1422898724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576879.0673642706,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 576863.8325703051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575518.181459612,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 575486.7850098606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330808.1359333574,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 330794.50965543353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562029.801181052,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 562007.0866141714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 518.2466788424296,
            "unit": "ns/iter",
            "extra": "iterations: 1351863\ncpu: 518.2369811142063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3036.450404098954,
            "unit": "ns/iter",
            "extra": "iterations: 230513\ncpu: 3036.3181252250324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2498.106999449764,
            "unit": "ns/iter",
            "extra": "iterations: 281665\ncpu: 2497.992650844074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2382.932886133654,
            "unit": "ns/iter",
            "extra": "iterations: 294872\ncpu: 2382.810846740289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2006.267854999533,
            "unit": "ns/iter",
            "extra": "iterations: 349958\ncpu: 2006.2416061355873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18086.929766406207,
            "unit": "ns/iter",
            "extra": "iterations: 38614\ncpu: 18086.077588439446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32103.5271012621,
            "unit": "ns/iter",
            "extra": "iterations: 21844\ncpu: 32102.36678264039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7475.733626787103,
            "unit": "ns/iter",
            "extra": "iterations: 93598\ncpu: 7475.290070300593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7465.351103766098,
            "unit": "ns/iter",
            "extra": "iterations: 91369\ncpu: 7465.270496557945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7308.326784965952,
            "unit": "ns/iter",
            "extra": "iterations: 93153\ncpu: 7307.9160091462845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14561.798681173292,
            "unit": "ns/iter",
            "extra": "iterations: 48073\ncpu: 14561.007218189165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14164.074276968586,
            "unit": "ns/iter",
            "extra": "iterations: 49652\ncpu: 14163.723515668975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5147.744407582399,
            "unit": "ns/iter",
            "extra": "iterations: 135943\ncpu: 5147.477251495135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26052.99086059594,
            "unit": "ns/iter",
            "extra": "iterations: 26807\ncpu: 26052.691461185743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20923.887430093568,
            "unit": "ns/iter",
            "extra": "iterations: 33437\ncpu: 20922.469121033417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20929.69439129148,
            "unit": "ns/iter",
            "extra": "iterations: 33448\ncpu: 20929.045084908015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21183.81372996084,
            "unit": "ns/iter",
            "extra": "iterations: 32877\ncpu: 21182.50752805892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48768.613557194265,
            "unit": "ns/iter",
            "extra": "iterations: 14354\ncpu: 48768.08555106567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157498.90415043262,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 157372.66681953683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133672.04816513404,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133656.72782874614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132438.7182638847,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 132436.47013635407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132872.5144475854,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132863.28611898018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81375.23725396379,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 81370.44107185178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130892.18026956361,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130882.5346312239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4901.032678307908,
            "unit": "ns/iter",
            "extra": "iterations: 141623\ncpu: 4900.9094567972425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25753.002950394537,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 25751.10086667859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20504.629874694772,
            "unit": "ns/iter",
            "extra": "iterations: 34156\ncpu: 20503.943670219116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20196.603743746215,
            "unit": "ns/iter",
            "extra": "iterations: 34778\ncpu: 20191.39973546512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20472.146953721254,
            "unit": "ns/iter",
            "extra": "iterations: 34140\ncpu: 20471.45869947276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46637.473037082455,
            "unit": "ns/iter",
            "extra": "iterations: 14965\ncpu: 46633.939191446516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155239.01662602875,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 155234.82598093562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126953.29501984903,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126939.93143269778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126278.81295754854,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 126272.19985358788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128408.54219292682,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128403.14845323103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81637.69091331911,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 81630.66465256739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128676.12417341759,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128663.97869213822 ns\nthreads: 1"
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
        "date": 1705778442019,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1437.740758518347,
            "unit": "ns/iter",
            "extra": "iterations: 485420\ncpu: 1437.6793292406578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16751.202186793,
            "unit": "ns/iter",
            "extra": "iterations: 49113\ncpu: 16751.010933968602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35636.945429565,
            "unit": "ns/iter",
            "extra": "iterations: 23291\ncpu: 35636.181357605936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52615.3841504768,
            "unit": "ns/iter",
            "extra": "iterations: 16215\ncpu: 52614.535923527605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58495.691899997844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58494.89000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73686.50557464814,
            "unit": "ns/iter",
            "extra": "iterations: 11929\ncpu: 73685.48914410261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88226.13243297458,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 88223.63434791368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102441.74930393806,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 102439.31554524362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115727.46456904706,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 115725.42691945672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1200.0966763906044,
            "unit": "ns/iter",
            "extra": "iterations: 584124\ncpu: 1200.0703617725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 992.2227443448294,
            "unit": "ns/iter",
            "extra": "iterations: 705028\ncpu: 992.2000260982536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.0313887435958,
            "unit": "ns/iter",
            "extra": "iterations: 718952\ncpu: 963.0188107133711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 946.2453271124209,
            "unit": "ns/iter",
            "extra": "iterations: 736857\ncpu: 946.2339368425613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1850.176085781164,
            "unit": "ns/iter",
            "extra": "iterations: 379105\ncpu: 1850.146529325646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5679.778900000656,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5679.749999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30071.028687616457,
            "unit": "ns/iter",
            "extra": "iterations: 27050\ncpu: 30069.641404805934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23765.534778211953,
            "unit": "ns/iter",
            "extra": "iterations: 34605\ncpu: 23765.02239560757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23410.697911620973,
            "unit": "ns/iter",
            "extra": "iterations: 35099\ncpu: 23410.439043847407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23214.601910192516,
            "unit": "ns/iter",
            "extra": "iterations: 35075\ncpu: 23214.480399144733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72934.64392462272,
            "unit": "ns/iter",
            "extra": "iterations: 12312\ncpu: 72932.47238466555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565442.3349999434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565433.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551059.2975801382,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 551049.0516677565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557223.8132491905,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 557212.429022083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562109.6955958789,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 562102.7202072552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327052.01570092654,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 327046.61682242935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559039.1298449666,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 559023.9018087863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2330474.254408132,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2330423.92947103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1106322.8219832436,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1106301.9115890097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3267316.748252069,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3267256.9930069903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8377.067587006364,
            "unit": "ns/iter",
            "extra": "iterations: 100108\ncpu: 8376.789067806767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49041.655273906894,
            "unit": "ns/iter",
            "extra": "iterations: 16648\ncpu: 49040.70158577603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35996.77556295659,
            "unit": "ns/iter",
            "extra": "iterations: 22826\ncpu: 35996.15350915616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35106.89320885032,
            "unit": "ns/iter",
            "extra": "iterations: 23457\ncpu: 35106.70588736841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35521.51396791045,
            "unit": "ns/iter",
            "extra": "iterations: 23375\ncpu: 35521.09518716589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 86882.18924602955,
            "unit": "ns/iter",
            "extra": "iterations: 9987\ncpu: 86880.5046560527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606920.1139999905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606910.3000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 606366.6313969597,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 606353.4578146621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 599686.5124826814,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 599677.9472954202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596502.2806896648,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 596495.1724137902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 340537.2292720613,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 340535.4223433255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584428.725622084,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 584414.0551445861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2507534.070652184,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2507454.6195652187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1106828.671036852,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1106805.9594755594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5588.835659999631,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.534999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30709.62421657412,
            "unit": "ns/iter",
            "extra": "iterations: 26965\ncpu: 30708.307064713474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23865.247690847817,
            "unit": "ns/iter",
            "extra": "iterations: 34753\ncpu: 23864.2217938018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23191.679473228698,
            "unit": "ns/iter",
            "extra": "iterations: 35841\ncpu: 23191.38695906912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23250.479491994585,
            "unit": "ns/iter",
            "extra": "iterations: 35669\ncpu: 23250.08831197952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70222.52694611042,
            "unit": "ns/iter",
            "extra": "iterations: 12525\ncpu: 70221.58882235517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587643.4609999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587639.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 589890.791610276,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 589882.2733423531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567599.0033266981,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 567585.4291417178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 582752.5544619196,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 582728.0839894983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334190.7365384381,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 334185.2307692287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 577893.0504201666,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 577879.9612152571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 528.3975247822792,
            "unit": "ns/iter",
            "extra": "iterations: 1327560\ncpu: 528.3879448009864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3244.815629194085,
            "unit": "ns/iter",
            "extra": "iterations: 216070\ncpu: 3244.7734530476096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2639.9151151686356,
            "unit": "ns/iter",
            "extra": "iterations: 288968\ncpu: 2639.8836549375887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2618.009467491595,
            "unit": "ns/iter",
            "extra": "iterations: 264484\ncpu: 2617.9364347181595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2092.404361608928,
            "unit": "ns/iter",
            "extra": "iterations: 334693\ncpu: 2092.375699521663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17980.180815028092,
            "unit": "ns/iter",
            "extra": "iterations: 38968\ncpu: 17979.91942106334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31053.20778303115,
            "unit": "ns/iter",
            "extra": "iterations: 22639\ncpu: 31053.036794911866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7320.7316814371,
            "unit": "ns/iter",
            "extra": "iterations: 96132\ncpu: 7320.496816876765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7335.613973153442,
            "unit": "ns/iter",
            "extra": "iterations: 94610\ncpu: 7335.295423316827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7323.396747881369,
            "unit": "ns/iter",
            "extra": "iterations: 95015\ncpu: 7323.356312161161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14571.689925716386,
            "unit": "ns/iter",
            "extra": "iterations: 47924\ncpu: 14571.607127952637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13965.958708827751,
            "unit": "ns/iter",
            "extra": "iterations: 50156\ncpu: 13965.465746869571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5229.635257223715,
            "unit": "ns/iter",
            "extra": "iterations: 133930\ncpu: 5229.390726498902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25855.235563769667,
            "unit": "ns/iter",
            "extra": "iterations: 27050\ncpu: 25853.878003697144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20957.872965341245,
            "unit": "ns/iter",
            "extra": "iterations: 33298\ncpu: 20957.030452279174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21501.560401884017,
            "unit": "ns/iter",
            "extra": "iterations: 33542\ncpu: 21500.405461809187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20920.847596717373,
            "unit": "ns/iter",
            "extra": "iterations: 33267\ncpu: 20919.911624132124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48598.17986260696,
            "unit": "ns/iter",
            "extra": "iterations: 14411\ncpu: 48595.96835750465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155656.2737169592,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155645.96756276465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133899.37398065408,
            "unit": "ns/iter",
            "extra": "iterations: 5273\ncpu: 133892.75554712763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133238.13380280064,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 133232.56566425556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134631.4584941981,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 134626.83397683396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83040.75975188223,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83039.34152451484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133046.91265461687,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133040.875356802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5045.726509704381,
            "unit": "ns/iter",
            "extra": "iterations: 138802\ncpu: 5045.612455151861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25802.01448684667,
            "unit": "ns/iter",
            "extra": "iterations: 26990\ncpu: 25801.015190811744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20580.59935170328,
            "unit": "ns/iter",
            "extra": "iterations: 33935\ncpu: 20580.2770001474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20508.788672937528,
            "unit": "ns/iter",
            "extra": "iterations: 34113\ncpu: 20507.911939729758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21438.802568122224,
            "unit": "ns/iter",
            "extra": "iterations: 33799\ncpu: 21438.400544394925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46747.63318307177,
            "unit": "ns/iter",
            "extra": "iterations: 14863\ncpu: 46745.71755365666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152653.115812443,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 152647.35005452464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127777.59398358582,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127772.25159526082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126995.96707072358,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 126993.12466075689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127987.21195554585,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127985.1284855114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81361.63464000089,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 81354.70512969651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127368.67693139469,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 127367.27894831494 ns\nthreads: 1"
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
        "date": 1705953609785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1413.0141621277428,
            "unit": "ns/iter",
            "extra": "iterations: 496818\ncpu: 1412.9463908312503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16184.340867556148,
            "unit": "ns/iter",
            "extra": "iterations: 51985\ncpu: 16183.291334038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34597.50675870936,
            "unit": "ns/iter",
            "extra": "iterations: 24191\ncpu: 34597.354387995525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50783.7681194316,
            "unit": "ns/iter",
            "extra": "iterations: 16612\ncpu: 50781.423067661926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56416.6097999987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56415.76000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71241.52971054811,
            "unit": "ns/iter",
            "extra": "iterations: 12403\ncpu: 71239.40175763925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84384.76158358311,
            "unit": "ns/iter",
            "extra": "iterations: 10230\ncpu: 84382.99120234603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98407.07783419125,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 98402.83135927805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115129.14533280589,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 115125.9682289614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1198.20109427458,
            "unit": "ns/iter",
            "extra": "iterations: 585959\ncpu: 1198.1549903662217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 985.1137040848639,
            "unit": "ns/iter",
            "extra": "iterations: 708453\ncpu: 985.0971059477494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 965.1315393756835,
            "unit": "ns/iter",
            "extra": "iterations: 722871\ncpu: 965.0905901606225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 983.7853893847603,
            "unit": "ns/iter",
            "extra": "iterations: 704830\ncpu: 983.7705546018191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1863.7438203264746,
            "unit": "ns/iter",
            "extra": "iterations: 374858\ncpu: 1863.725730810068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5681.349200000341,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5681.130999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31471.631031290493,
            "unit": "ns/iter",
            "extra": "iterations: 25948\ncpu: 31470.121011253286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24168.689974602108,
            "unit": "ns/iter",
            "extra": "iterations: 33465\ncpu: 24167.479456148245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23147.276434406915,
            "unit": "ns/iter",
            "extra": "iterations: 35607\ncpu: 23146.628471929685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23505.744574149627,
            "unit": "ns/iter",
            "extra": "iterations: 35294\ncpu: 23504.374681248875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71728.22844247037,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 71726.65294164223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 578903.0590000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578854.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564925.575,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 564909.210526315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 547741.118286445,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 547706.7774936064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556892.8604501286,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 556860.3215434073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328493.2793783219,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 328476.00454890117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567607.8105468404,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 567587.1093750012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2376710.6827411335,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2376657.360406097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089967.0153844857,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1089934.9112426052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3249948.208480412,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3249865.724381627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8621.107233707868,
            "unit": "ns/iter",
            "extra": "iterations: 99064\ncpu: 8620.926875555198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44632.24203855556,
            "unit": "ns/iter",
            "extra": "iterations: 18778\ncpu: 44630.37597188197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35440.392051744,
            "unit": "ns/iter",
            "extra": "iterations: 23502\ncpu: 35439.826397753386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35117.80421043921,
            "unit": "ns/iter",
            "extra": "iterations: 23893\ncpu: 35116.841752814515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34709.673618746674,
            "unit": "ns/iter",
            "extra": "iterations: 23638\ncpu: 34707.91522125397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84298.56713561864,
            "unit": "ns/iter",
            "extra": "iterations: 10449\ncpu: 84294.84161163737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605663.9810000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605609.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596770.4384032806,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 596723.1245698568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591677.9628127277,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 591652.9411764704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592852.4853442361,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 592835.5828220833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338247.06640776305,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 338227.0679611648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578191.4414473171,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 578187.8947368456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2507392.34231781,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2507260.3773584785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105610.770983192,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1105566.1870503596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5452.20664999988,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5452.153999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30023.992774246904,
            "unit": "ns/iter",
            "extra": "iterations: 27402\ncpu: 30023.826727976288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24129.590196423487,
            "unit": "ns/iter",
            "extra": "iterations: 34314\ncpu: 24129.17468088839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23067.18236534885,
            "unit": "ns/iter",
            "extra": "iterations: 35555\ncpu: 23066.961046266315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23159.824637354926,
            "unit": "ns/iter",
            "extra": "iterations: 35572\ncpu: 23159.442820195527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70463.79263301977,
            "unit": "ns/iter",
            "extra": "iterations: 12461\ncpu: 70463.43792633008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 593034.7350000602,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593020.6999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573855.2587923139,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 573852.9528865315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 572841.6993464385,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 572832.2222222236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564958.020887702,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 564942.5587467338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330704.3551157815,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 330697.72218073055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 555940.4798206356,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 555936.7713004476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 525.0660121245899,
            "unit": "ns/iter",
            "extra": "iterations: 1332331\ncpu: 525.0688455046069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3248.9053894323583,
            "unit": "ns/iter",
            "extra": "iterations: 215737\ncpu: 3248.8284346217606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2396.462351364413,
            "unit": "ns/iter",
            "extra": "iterations: 290223\ncpu: 2396.4754688636126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2497.6590369598816,
            "unit": "ns/iter",
            "extra": "iterations: 279303\ncpu: 2497.643061478033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2000.2581793276229,
            "unit": "ns/iter",
            "extra": "iterations: 348959\ncpu: 2000.2687994864823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17968.880626876988,
            "unit": "ns/iter",
            "extra": "iterations: 38987\ncpu: 17967.976504988754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29743.336527046376,
            "unit": "ns/iter",
            "extra": "iterations: 23588\ncpu: 29743.51789045295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7299.730821080227,
            "unit": "ns/iter",
            "extra": "iterations: 95691\ncpu: 7298.927798852445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7247.047193746039,
            "unit": "ns/iter",
            "extra": "iterations: 96962\ncpu: 7246.622388152195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7322.762573136452,
            "unit": "ns/iter",
            "extra": "iterations: 95541\ncpu: 7322.417600820508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14564.723468919607,
            "unit": "ns/iter",
            "extra": "iterations: 48038\ncpu: 14564.640492942934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13830.847767200168,
            "unit": "ns/iter",
            "extra": "iterations: 50206\ncpu: 13830.934549655489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5097.3034910894285,
            "unit": "ns/iter",
            "extra": "iterations: 136920\ncpu: 5096.995325737693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25928.177410981014,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 25927.14020771504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20801.359843662172,
            "unit": "ns/iter",
            "extra": "iterations: 33773\ncpu: 20799.82530423708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20783.87677612635,
            "unit": "ns/iter",
            "extra": "iterations: 33711\ncpu: 20783.100471656053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21156.209866092704,
            "unit": "ns/iter",
            "extra": "iterations: 33083\ncpu: 21154.544630172863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50468.1554000058,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50465.45999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157714.53154176858,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 157711.43247551858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133433.46755725078,
            "unit": "ns/iter",
            "extra": "iterations: 5240\ncpu: 133422.3091603071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131487.91371226424,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131488.6888013499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132708.3988308426,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 132702.5268715822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82929.60120809577,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 82928.53251214087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133577.40901278588,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133570.70842085188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4949.312747084748,
            "unit": "ns/iter",
            "extra": "iterations: 141146\ncpu: 4949.244753659286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25535.934106829467,
            "unit": "ns/iter",
            "extra": "iterations: 27408\ncpu: 25534.8110040864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20346.853136081274,
            "unit": "ns/iter",
            "extra": "iterations: 34406\ncpu: 20346.320409230902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20055.72527755508,
            "unit": "ns/iter",
            "extra": "iterations: 34948\ncpu: 20054.772805310782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20434.77069708613,
            "unit": "ns/iter",
            "extra": "iterations: 34099\ncpu: 20433.707733364714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46922.662131370496,
            "unit": "ns/iter",
            "extra": "iterations: 14920\ncpu: 46919.22252010706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155146.8215473119,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 155143.69319441202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129661.66697553871,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129657.09785025996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127773.0627171415,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 127769.42768330473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128567.67684153536,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 128564.1747395364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81344.7072322674,
            "unit": "ns/iter",
            "extra": "iterations: 8628\ncpu: 81340.83217431628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127994.7600219576,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127993.28207944425 ns\nthreads: 1"
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
        "date": 1705955025198,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1370.6366895174478,
            "unit": "ns/iter",
            "extra": "iterations: 455269\ncpu: 1370.5049102838104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15996.899330045817,
            "unit": "ns/iter",
            "extra": "iterations: 50899\ncpu: 15996.406609167172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34148.84909723256,
            "unit": "ns/iter",
            "extra": "iterations: 24148\ncpu: 34148.02468113302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51037.570103789476,
            "unit": "ns/iter",
            "extra": "iterations: 16283\ncpu: 51036.492046920066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56322.30879999725,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56322.23000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71083.3294174395,
            "unit": "ns/iter",
            "extra": "iterations: 12428\ncpu: 71081.6060508529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84602.4397631395,
            "unit": "ns/iter",
            "extra": "iterations: 10301\ncpu: 84600.66013008445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97923.11797752333,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 97922.31460674151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114158.1453518949,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 114155.05514705872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1311.9073404677074,
            "unit": "ns/iter",
            "extra": "iterations: 588423\ncpu: 1311.8946744093948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 939.69324192371,
            "unit": "ns/iter",
            "extra": "iterations: 732235\ncpu: 939.6655445314681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 932.3328000641927,
            "unit": "ns/iter",
            "extra": "iterations: 747590\ncpu: 932.3314918605136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 956.8530472710202,
            "unit": "ns/iter",
            "extra": "iterations: 731589\ncpu: 956.8239817711859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1800.0911055456963,
            "unit": "ns/iter",
            "extra": "iterations: 387320\ncpu: 1800.0629970050602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5670.199340000863,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5670.140000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30516.359589416687,
            "unit": "ns/iter",
            "extra": "iterations: 27181\ncpu: 30515.73893528565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24005.123400148907,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 24005.09321489097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23966.7962427747,
            "unit": "ns/iter",
            "extra": "iterations: 34600\ncpu: 23966.260115606965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23641.9437017395,
            "unit": "ns/iter",
            "extra": "iterations: 34708\ncpu: 23641.44577618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70809.83112241371,
            "unit": "ns/iter",
            "extra": "iterations: 12589\ncpu: 70807.58598776693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 544376.2679999509,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544375.4999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563188.9484151703,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 563153.7600994406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 551833.1201526035,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 551811.3795295621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 549540.0923175976,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 549535.6358941266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324230.0473328055,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 324220.36063110345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 549815.5271565478,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 549802.1086261984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2345560.8005050835,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2345528.2828282807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074667.237209359,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1074624.4186046515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3219098.406249701,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3218989.5833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8411.495895190516,
            "unit": "ns/iter",
            "extra": "iterations: 99761\ncpu: 8411.257906396271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45615.798170629816,
            "unit": "ns/iter",
            "extra": "iterations: 18367\ncpu: 45615.832743507366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35774.81440823359,
            "unit": "ns/iter",
            "extra": "iterations: 23320\ncpu: 35772.52144082329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35483.82814923218,
            "unit": "ns/iter",
            "extra": "iterations: 23212\ncpu: 35482.26779252097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35084.14920029828,
            "unit": "ns/iter",
            "extra": "iterations: 21508\ncpu: 35082.65296633808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83142.76276849293,
            "unit": "ns/iter",
            "extra": "iterations: 10475\ncpu: 83141.57517899762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 586413.3250000805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586407.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600438.9501025635,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 600420.1640464802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 596417.1244869826,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 596404.3775649774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598984.6780249898,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 598968.4283727414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335337.5965798795,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 335329.18771861447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572714.345490665,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 572696.0875331565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2493669.293333369,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2493524.8000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1091050.0718491236,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1091002.1201413444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5422.290210000255,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5421.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30161.83497147059,
            "unit": "ns/iter",
            "extra": "iterations: 27165\ncpu: 30160.86876495482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23300.99333143483,
            "unit": "ns/iter",
            "extra": "iterations: 35090\ncpu: 23300.188087774244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22700.10601894522,
            "unit": "ns/iter",
            "extra": "iterations: 36003\ncpu: 22699.736133100087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22577.528592658764,
            "unit": "ns/iter",
            "extra": "iterations: 36338\ncpu: 22577.098354339763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69877.3100167869,
            "unit": "ns/iter",
            "extra": "iterations: 12509\ncpu: 69875.20185466444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586537.7950000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586538.6999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576581.4139999747,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 576562.2666666701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 562938.3216374764,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 562916.8291098118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571706.1387621491,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 571705.3420195441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335023.9101727732,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 334814.4337811876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560766.5443940294,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 560737.653920934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 519.2760553670963,
            "unit": "ns/iter",
            "extra": "iterations: 1346143\ncpu: 519.2673438111703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3295.989064124678,
            "unit": "ns/iter",
            "extra": "iterations: 212603\ncpu: 3295.9530204183447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2572.3664592827286,
            "unit": "ns/iter",
            "extra": "iterations: 270513\ncpu: 2572.327762436553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2541.4575295122886,
            "unit": "ns/iter",
            "extra": "iterations: 274885\ncpu: 2541.422413009078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2041.1882435678397,
            "unit": "ns/iter",
            "extra": "iterations: 342689\ncpu: 2041.1586015308226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18277.5061541651,
            "unit": "ns/iter",
            "extra": "iterations: 38348\ncpu: 18274.212475226763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30626.409466006273,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30625.760817360417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7511.794207447254,
            "unit": "ns/iter",
            "extra": "iterations: 93016\ncpu: 7511.672185430518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7481.073278113722,
            "unit": "ns/iter",
            "extra": "iterations: 93807\ncpu: 7480.760497617433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7483.253217785439,
            "unit": "ns/iter",
            "extra": "iterations: 93698\ncpu: 7483.162927703896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14661.180561364594,
            "unit": "ns/iter",
            "extra": "iterations: 47812\ncpu: 14660.886388354485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14165.103565090065,
            "unit": "ns/iter",
            "extra": "iterations: 49592\ncpu: 14164.974189385348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5236.747268054572,
            "unit": "ns/iter",
            "extra": "iterations: 134245\ncpu: 5236.677716115993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26410.423088558953,
            "unit": "ns/iter",
            "extra": "iterations: 26446\ncpu: 26409.513726083253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21300.54150390609,
            "unit": "ns/iter",
            "extra": "iterations: 32768\ncpu: 21300.45166015646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21071.881456212468,
            "unit": "ns/iter",
            "extra": "iterations: 33127\ncpu: 21071.18664533473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21264.637605491702,
            "unit": "ns/iter",
            "extra": "iterations: 32942\ncpu: 21264.291785562607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48455.40875710282,
            "unit": "ns/iter",
            "extra": "iterations: 14434\ncpu: 48453.87280033253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160299.27281126607,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 160299.02979902923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133091.93664644152,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133088.37253414234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133362.69456066552,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 133361.03081019295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133636.56476881905,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133631.9831868533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82285.12168561122,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 82284.32765151515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132036.2014374929,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132035.95611878182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4995.513633726167,
            "unit": "ns/iter",
            "extra": "iterations: 139617\ncpu: 4995.248429632484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25726.165605097565,
            "unit": "ns/iter",
            "extra": "iterations: 27161\ncpu: 25725.930562203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20596.73403848837,
            "unit": "ns/iter",
            "extra": "iterations: 34035\ncpu: 20595.980608197253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20120.787512557166,
            "unit": "ns/iter",
            "extra": "iterations: 34835\ncpu: 20120.760729151843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20503.011844928034,
            "unit": "ns/iter",
            "extra": "iterations: 34023\ncpu: 20502.357228933528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47042.21802695666,
            "unit": "ns/iter",
            "extra": "iterations: 14911\ncpu: 47042.13667762076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155640.55966161852,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155635.5075690106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129716.3329008366,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 129715.06950880513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128629.46501983555,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 128621.06022358435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128894.4938134813,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 128891.22807017312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81802.42098519819,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 81801.36252474767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128242.93543654932,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128237.76595744838 ns\nthreads: 1"
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
        "date": 1705956854564,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1392.4376006045704,
            "unit": "ns/iter",
            "extra": "iterations: 498859\ncpu: 1392.3954464087046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16249.401913390117,
            "unit": "ns/iter",
            "extra": "iterations: 49232\ncpu: 16249.254549886251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34268.434613637684,
            "unit": "ns/iter",
            "extra": "iterations: 24187\ncpu: 34266.32075081656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50979.1456234529,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 50975.68920793871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56779.17640000488,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56777.18999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71032.03864576975,
            "unit": "ns/iter",
            "extra": "iterations: 12317\ncpu: 71031.37939433301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84687.71270610999,
            "unit": "ns/iter",
            "extra": "iterations: 10310\ncpu: 84682.77400581959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97540.93100730822,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 97536.1620709061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113182.56002646733,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 113174.18927862348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1166.139657373334,
            "unit": "ns/iter",
            "extra": "iterations: 596159\ncpu: 1166.0764997257438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.8269073414785,
            "unit": "ns/iter",
            "extra": "iterations: 732053\ncpu: 952.7775994361081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 958.6948074894531,
            "unit": "ns/iter",
            "extra": "iterations: 732921\ncpu: 958.6435645860877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 977.0806990612612,
            "unit": "ns/iter",
            "extra": "iterations: 717877\ncpu: 977.0545650578016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1854.1802874698471,
            "unit": "ns/iter",
            "extra": "iterations: 375761\ncpu: 1854.1298857518464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5694.955720000507,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5694.686999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30258.848149110057,
            "unit": "ns/iter",
            "extra": "iterations: 26987\ncpu: 30257.26831437357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23881.941314895117,
            "unit": "ns/iter",
            "extra": "iterations: 34421\ncpu: 23880.721071438966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23380.090760822743,
            "unit": "ns/iter",
            "extra": "iterations: 34949\ncpu: 23378.7576182437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23001.347617578824,
            "unit": "ns/iter",
            "extra": "iterations: 35657\ncpu: 23000.243991362124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71347.90101786827,
            "unit": "ns/iter",
            "extra": "iterations: 12477\ncpu: 71342.03734872161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 547674.915000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547637.3000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561798.8752374407,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 561762.8245725152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555371.7212794044,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 555366.1227154062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 544789.7837667094,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 544755.4216867477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324708.75335320336,
            "unit": "ns/iter",
            "extra": "iterations: 2684\ncpu: 324687.4813710888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561693.953253345,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 561669.6146557179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2330198.6080400865,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2330121.1055276454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1076278.6032672154,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1076244.5740956818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3226257.4201386627,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226065.62499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8421.18898088287,
            "unit": "ns/iter",
            "extra": "iterations: 99645\ncpu: 8420.780771739688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45002.14711761876,
            "unit": "ns/iter",
            "extra": "iterations: 18509\ncpu: 44999.54076395269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34887.764197844575,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 34885.74317492427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35269.417678812824,
            "unit": "ns/iter",
            "extra": "iterations: 23712\ncpu: 35268.054149797536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34018.506513721404,
            "unit": "ns/iter",
            "extra": "iterations: 24410\ncpu: 34016.53011061061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83991.64074679883,
            "unit": "ns/iter",
            "extra": "iterations: 10391\ncpu: 83987.28707535355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606895.9599999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606849.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598226.2182070245,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 598193.3981931905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590213.6363636646,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 590175.8953168076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590303.038644086,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 590263.0508474573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337636.03442879836,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 337621.59624412993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578884.876088414,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 578850.9711989275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2493065.4611259145,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2492886.3270777417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113893.132616421,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1113817.80167264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5614.10998000042,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5614.048999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30325.174920275334,
            "unit": "ns/iter",
            "extra": "iterations: 27281\ncpu: 30324.379604853002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23755.023140874087,
            "unit": "ns/iter",
            "extra": "iterations: 35003\ncpu: 23753.34399908585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23435.178993162903,
            "unit": "ns/iter",
            "extra": "iterations: 35398\ncpu: 23432.979264365324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22952.732397499352,
            "unit": "ns/iter",
            "extra": "iterations: 35975\ncpu: 22951.58304378041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69632.399872505,
            "unit": "ns/iter",
            "extra": "iterations: 12549\ncpu: 69628.23332536418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585839.673999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585826.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 563287.1686429409,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 563241.1067193656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 563243.7483829367,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 563205.6921086685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571120.7864141609,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 571092.3579359871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329296.1432350909,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 329281.9349962202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 572038.0346858401,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 572014.1361256553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 520.2915363883425,
            "unit": "ns/iter",
            "extra": "iterations: 1343918\ncpu: 520.2570394919895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3287.3027063885625,
            "unit": "ns/iter",
            "extra": "iterations: 212645\ncpu: 3287.0351995109227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2519.644582620282,
            "unit": "ns/iter",
            "extra": "iterations: 276942\ncpu: 2519.478085664165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2583.5338822707795,
            "unit": "ns/iter",
            "extra": "iterations: 303374\ncpu: 2583.4277162841936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2019.500443248474,
            "unit": "ns/iter",
            "extra": "iterations: 346307\ncpu: 2019.3689414305938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18017.56412884681,
            "unit": "ns/iter",
            "extra": "iterations: 39023\ncpu: 18016.989980268056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31617.94880283001,
            "unit": "ns/iter",
            "extra": "iterations: 22052\ncpu: 31616.937239252606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7445.966726417674,
            "unit": "ns/iter",
            "extra": "iterations: 94279\ncpu: 7445.892510527297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7370.406456979006,
            "unit": "ns/iter",
            "extra": "iterations: 94967\ncpu: 7370.012741268101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7363.151157153627,
            "unit": "ns/iter",
            "extra": "iterations: 94888\ncpu: 7362.730798415055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14602.227074781542,
            "unit": "ns/iter",
            "extra": "iterations: 47993\ncpu: 14601.306440522601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13949.784181691331,
            "unit": "ns/iter",
            "extra": "iterations: 50195\ncpu: 13948.482916625218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5143.681868743015,
            "unit": "ns/iter",
            "extra": "iterations: 135749\ncpu: 5143.636417211204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25963.760742589082,
            "unit": "ns/iter",
            "extra": "iterations: 26879\ncpu: 25963.1310688641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21047.761723435084,
            "unit": "ns/iter",
            "extra": "iterations: 33352\ncpu: 21047.1366035024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20786.098813522618,
            "unit": "ns/iter",
            "extra": "iterations: 33629\ncpu: 20784.31413363463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21266.550459273854,
            "unit": "ns/iter",
            "extra": "iterations: 32878\ncpu: 21265.14994829405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48428.18892124052,
            "unit": "ns/iter",
            "extra": "iterations: 14424\ncpu: 48409.38019966652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160992.5021774056,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 160982.7183130846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133526.9335364597,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133517.76804418274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132130.45983745722,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132122.94462294396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133919.4872727394,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133913.0143540678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82876.72205830128,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 82869.64475392326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133951.61998470363,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133948.85364921842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4958.425829463984,
            "unit": "ns/iter",
            "extra": "iterations: 141296\ncpu: 4958.007303816172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25527.187381196232,
            "unit": "ns/iter",
            "extra": "iterations: 27356\ncpu: 25526.520690159174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20194.72495667019,
            "unit": "ns/iter",
            "extra": "iterations: 34620\ncpu: 20193.68573079167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20122.84011187889,
            "unit": "ns/iter",
            "extra": "iterations: 35037\ncpu: 20122.290721237423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20422.15066817994,
            "unit": "ns/iter",
            "extra": "iterations: 34347\ncpu: 20421.253675721608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46797.30287851052,
            "unit": "ns/iter",
            "extra": "iterations: 14973\ncpu: 46796.12636078186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155357.35974256665,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155350.710164226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128796.15410138662,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 128793.03225806446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128294.92194132601,
            "unit": "ns/iter",
            "extra": "iterations: 5419\ncpu: 128290.16423694567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128715.55809243603,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128713.60707052033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82147.58816637998,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 82145.29584065541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128538.07138924545,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128532.40961644473 ns\nthreads: 1"
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
        "date": 1705958473186,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1392.421101564048,
            "unit": "ns/iter",
            "extra": "iterations: 498001\ncpu: 1392.4148746689264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16235.590370410602,
            "unit": "ns/iter",
            "extra": "iterations: 51051\ncpu: 16235.38618244501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34813.092595694296,
            "unit": "ns/iter",
            "extra": "iterations: 23878\ncpu: 34811.73465114331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51166.46246518403,
            "unit": "ns/iter",
            "extra": "iterations: 16518\ncpu: 51164.74149412763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56828.18119998956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56827.330000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71878.78540597648,
            "unit": "ns/iter",
            "extra": "iterations: 12279\ncpu: 71877.83207101554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85270.57573682256,
            "unit": "ns/iter",
            "extra": "iterations: 10213\ncpu: 85268.07989816896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98127.36550331455,
            "unit": "ns/iter",
            "extra": "iterations: 8911\ncpu: 98126.0689036023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113306.26420112059,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 113302.76706132758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1214.6735794949298,
            "unit": "ns/iter",
            "extra": "iterations: 576802\ncpu: 1214.6504346378827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 998.1104200084494,
            "unit": "ns/iter",
            "extra": "iterations: 701938\ncpu: 998.0598001532888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 971.7769411386357,
            "unit": "ns/iter",
            "extra": "iterations: 720608\ncpu: 971.759264398951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 984.3925693614865,
            "unit": "ns/iter",
            "extra": "iterations: 710733\ncpu: 984.3876673800153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1826.23034474459,
            "unit": "ns/iter",
            "extra": "iterations: 381819\ncpu: 1826.206396224387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5680.670960000498,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5680.590999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30815.920345775467,
            "unit": "ns/iter",
            "extra": "iterations: 26954\ncpu: 30814.992208948563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24096.877820647594,
            "unit": "ns/iter",
            "extra": "iterations: 34212\ncpu: 24096.758447328433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23708.749556257564,
            "unit": "ns/iter",
            "extra": "iterations: 34930\ncpu: 23708.141998282263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23486.774558693043,
            "unit": "ns/iter",
            "extra": "iterations: 34896\ncpu: 23486.52854195323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71921.62231655797,
            "unit": "ns/iter",
            "extra": "iterations: 12251\ncpu: 71917.57407558586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570428.406000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570390.7000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567209.266449616,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567164.8859934845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 570059.252117305,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 570027.9478827353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555589.1751486035,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 555558.3608724397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325548.36963816575,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 325526.78105184657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566148.380559072,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 566110.9275730628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2343665.9015154727,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2343529.0404040366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1052448.8561643872,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1052396.3470319659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3244467.4330982184,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3244310.5633802894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8452.045183884666,
            "unit": "ns/iter",
            "extra": "iterations: 99084\ncpu: 8451.676355415602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44955.36674749065,
            "unit": "ns/iter",
            "extra": "iterations: 18146\ncpu: 44952.95932987983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35266.83872609347,
            "unit": "ns/iter",
            "extra": "iterations: 23581\ncpu: 35264.7724863236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34447.990201802226,
            "unit": "ns/iter",
            "extra": "iterations: 23984\ncpu: 34446.485156771065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34801.224209194144,
            "unit": "ns/iter",
            "extra": "iterations: 23710\ncpu: 34799.06368620851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81825.67466043639,
            "unit": "ns/iter",
            "extra": "iterations: 10675\ncpu: 81822.90398126423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 607979.9329997967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607915.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596214.1594501531,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 596190.0343642583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 596997.1785225923,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 596981.5321477397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589117.947440309,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 589077.1331058004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339398.3088922964,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 339384.20436817606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580578.6310550604,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 580560.451227605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2488149.7043014695,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2488020.1612903317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101290.8095237673,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1101222.3809523783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5503.833230000055,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5503.691999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29975.36807769994,
            "unit": "ns/iter",
            "extra": "iterations: 27592\ncpu: 29974.18817048429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23326.093617259452,
            "unit": "ns/iter",
            "extra": "iterations: 35314\ncpu: 23324.939117630245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22869.68559826551,
            "unit": "ns/iter",
            "extra": "iterations: 36447\ncpu: 22869.1222871567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22806.802968961776,
            "unit": "ns/iter",
            "extra": "iterations: 36309\ncpu: 22805.500013770547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68949.06951286053,
            "unit": "ns/iter",
            "extra": "iterations: 12789\ncpu: 68945.08562045505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582106.7639999455,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582085.400000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571772.5999999936,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 571747.1523178816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576782.6688439221,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 576748.726322661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571919.9691894986,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 571904.2866711334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330644.9268752766,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 330630.45608745026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573287.7556854731,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 573273.4243014952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.5571447098926,
            "unit": "ns/iter",
            "extra": "iterations: 1341664\ncpu: 521.5509993560235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3297.5759459716014,
            "unit": "ns/iter",
            "extra": "iterations: 212480\ncpu: 3297.5338855421646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2366.4435764951586,
            "unit": "ns/iter",
            "extra": "iterations: 293796\ncpu: 2366.411387493372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2514.1087634798273,
            "unit": "ns/iter",
            "extra": "iterations: 278200\ncpu: 2514.0772825305385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2007.5369649804945,
            "unit": "ns/iter",
            "extra": "iterations: 347207\ncpu: 2007.4333178766558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18101.013862663458,
            "unit": "ns/iter",
            "extra": "iterations: 38665\ncpu: 18100.470709944475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31933.017634658576,
            "unit": "ns/iter",
            "extra": "iterations: 21832\ncpu: 31932.333272261116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7494.735683197179,
            "unit": "ns/iter",
            "extra": "iterations: 93282\ncpu: 7494.339744001967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7488.993708469944,
            "unit": "ns/iter",
            "extra": "iterations: 93459\ncpu: 7488.421660835142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7258.544132046901,
            "unit": "ns/iter",
            "extra": "iterations: 92937\ncpu: 7258.333064334027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14394.828258723923,
            "unit": "ns/iter",
            "extra": "iterations: 48608\ncpu: 14394.644914417324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13638.538569424134,
            "unit": "ns/iter",
            "extra": "iterations: 51336\ncpu: 13638.051270063988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5146.51803259376,
            "unit": "ns/iter",
            "extra": "iterations: 135976\ncpu: 5146.49496970049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26046.849006027118,
            "unit": "ns/iter",
            "extra": "iterations: 26862\ncpu: 26045.83426401597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20898.26387687936,
            "unit": "ns/iter",
            "extra": "iterations: 33527\ncpu: 20897.68843022036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20727.928469456896,
            "unit": "ns/iter",
            "extra": "iterations: 33622\ncpu: 20727.368984593566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21169.269138104544,
            "unit": "ns/iter",
            "extra": "iterations: 33206\ncpu: 21168.701439499066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48703.58124349839,
            "unit": "ns/iter",
            "extra": "iterations: 14395\ncpu: 48702.18131295576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157874.83984640677,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 157874.51999096698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132913.65623222088,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132911.6676152533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132139.81426954098,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 132139.29784824475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133202.91020016564,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133200.61010486048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81790.31080441963,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 81787.76834159096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131997.14382275884,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131992.22681186494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4981.140324322613,
            "unit": "ns/iter",
            "extra": "iterations: 140724\ncpu: 4981.042323981717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25633.817865008532,
            "unit": "ns/iter",
            "extra": "iterations: 27260\ncpu: 25632.703595010862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20330.494838765997,
            "unit": "ns/iter",
            "extra": "iterations: 34391\ncpu: 20330.02820505392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20145.09036473721,
            "unit": "ns/iter",
            "extra": "iterations: 34737\ncpu: 20145.130552437062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20551.00164657558,
            "unit": "ns/iter",
            "extra": "iterations: 34010\ncpu: 20550.394001764467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46900.119325808395,
            "unit": "ns/iter",
            "extra": "iterations: 14892\ncpu: 46898.448831587026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151384.14660490738,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 151379.34303350977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126469.2118644107,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 126468.82437792944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125354.60517861047,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125347.73214285723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126131.04110329688,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 126129.27708671332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80733.28366268109,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 80729.9172794109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125886.97161455425,
            "unit": "ns/iter",
            "extra": "iterations: 5531\ncpu: 125885.01175194328 ns\nthreads: 1"
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
        "date": 1705959946900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1349.318201256711,
            "unit": "ns/iter",
            "extra": "iterations: 516783\ncpu: 1349.2583927876885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15920.513538986641,
            "unit": "ns/iter",
            "extra": "iterations: 50927\ncpu: 15920.181828892339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34579.416124731404,
            "unit": "ns/iter",
            "extra": "iterations: 23988\ncpu: 34577.17191929298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51444.373938027195,
            "unit": "ns/iter",
            "extra": "iterations: 16361\ncpu: 51442.01454678808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57131.54789999635,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57128.58000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71544.8767458897,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 71541.50126602955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84886.53424389512,
            "unit": "ns/iter",
            "extra": "iterations: 10250\ncpu: 84881.9902439025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98558.93175039806,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 98555.31085111263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114815.01010906608,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 114805.65309922856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1196.5844488768896,
            "unit": "ns/iter",
            "extra": "iterations: 587083\ncpu: 1196.523489864295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 981.8162037644906,
            "unit": "ns/iter",
            "extra": "iterations: 714982\ncpu: 981.7577225720352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 973.1348898434537,
            "unit": "ns/iter",
            "extra": "iterations: 720929\ncpu: 973.1339701967869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 956.0163606628814,
            "unit": "ns/iter",
            "extra": "iterations: 722159\ncpu: 955.9851777794075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1849.2331531796056,
            "unit": "ns/iter",
            "extra": "iterations: 384301\ncpu: 1849.107340339996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5489.817750000157,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5489.56500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30961.03333081653,
            "unit": "ns/iter",
            "extra": "iterations: 26492\ncpu: 30959.03291559715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24352.618419113176,
            "unit": "ns/iter",
            "extra": "iterations: 33943\ncpu: 24351.957693780754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23961.034467715577,
            "unit": "ns/iter",
            "extra": "iterations: 34380\ncpu: 23959.066317626573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24050.94405472001,
            "unit": "ns/iter",
            "extra": "iterations: 34355\ncpu: 24050.181924028497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71682.0177898852,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 71674.7415658306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 567868.0219999705,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567821.4000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555371.4493794938,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 555312.4101894194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560732.7460617344,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 560688.4688090754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 543732.0639645244,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 543703.7365421148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 313697.84564977576,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 313676.1922096834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559539.6296060999,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 559535.8958068604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2346503.8664986305,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2346375.566750625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1070794.2901733387,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1070740.115606937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3246111.7750001126,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3245895.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8740.376571925704,
            "unit": "ns/iter",
            "extra": "iterations: 94152\ncpu: 8740.05969071288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45252.44116993389,
            "unit": "ns/iter",
            "extra": "iterations: 17984\ncpu: 45248.73776690402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35555.58861411934,
            "unit": "ns/iter",
            "extra": "iterations: 23292\ncpu: 35552.820710973814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35309.50614094567,
            "unit": "ns/iter",
            "extra": "iterations: 23612\ncpu: 35307.94087752003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35114.345467768144,
            "unit": "ns/iter",
            "extra": "iterations: 23377\ncpu: 35112.341190058796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83099.89092470428,
            "unit": "ns/iter",
            "extra": "iterations: 10479\ncpu: 83097.8337627637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608773.4679999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608714.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 578926.857044204,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 578900.0690607728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581055.2618888265,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 581038.7139986596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582160.0399201657,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 582152.5615435813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336768.70522674185,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 336765.5265180622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 570631.270341191,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 570626.5748031457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2480377.5576408994,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2480326.2734584366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118189.048019203,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1118164.5858343393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5429.364560000066,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5429.311000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29801.641955595354,
            "unit": "ns/iter",
            "extra": "iterations: 26304\ncpu: 29800.80215936739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23418.626281069126,
            "unit": "ns/iter",
            "extra": "iterations: 33956\ncpu: 23417.7936152669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23020.047388951625,
            "unit": "ns/iter",
            "extra": "iterations: 34354\ncpu: 23019.054549688542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22825.360040131513,
            "unit": "ns/iter",
            "extra": "iterations: 34885\ncpu: 22824.08198366052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71955.19967321023,
            "unit": "ns/iter",
            "extra": "iterations: 12240\ncpu: 71953.58660130731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 591727.0759999838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591689.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578774.0794702261,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 578749.0066225163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576201.5434638718,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 576162.043795623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579737.9900728421,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 579727.068166774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330358.9977392654,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 330345.25244913244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568182.32922878,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 568173.6876215201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.6831607553768,
            "unit": "ns/iter",
            "extra": "iterations: 1346058\ncpu: 521.6797493124373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3277.2238248610433,
            "unit": "ns/iter",
            "extra": "iterations: 214230\ncpu: 3277.2160761798077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2520.714418368611,
            "unit": "ns/iter",
            "extra": "iterations: 275690\ncpu: 2520.7044143784647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2500.4317693675584,
            "unit": "ns/iter",
            "extra": "iterations: 278885\ncpu: 2500.4180934794076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2027.3316026026162,
            "unit": "ns/iter",
            "extra": "iterations: 343978\ncpu: 2027.2107518504076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18169.475740784434,
            "unit": "ns/iter",
            "extra": "iterations: 38439\ncpu: 18169.187543900687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31160.634330679317,
            "unit": "ns/iter",
            "extra": "iterations: 22493\ncpu: 31158.978348819637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7338.062570662607,
            "unit": "ns/iter",
            "extra": "iterations: 95524\ncpu: 7337.828189774391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7279.688266217352,
            "unit": "ns/iter",
            "extra": "iterations: 96252\ncpu: 7279.2908199310405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7333.232807947853,
            "unit": "ns/iter",
            "extra": "iterations: 95422\ncpu: 7333.294208882628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14679.250235655496,
            "unit": "ns/iter",
            "extra": "iterations: 47739\ncpu: 14679.17426003901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13922.562825766112,
            "unit": "ns/iter",
            "extra": "iterations: 50266\ncpu: 13922.402817013362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5192.703184722953,
            "unit": "ns/iter",
            "extra": "iterations: 135522\ncpu: 5192.556928026449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26089.000484044587,
            "unit": "ns/iter",
            "extra": "iterations: 26857\ncpu: 26087.947276315183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20968.056149170894,
            "unit": "ns/iter",
            "extra": "iterations: 33411\ncpu: 20967.39097901888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20819.87565893432,
            "unit": "ns/iter",
            "extra": "iterations: 33577\ncpu: 20819.114274652104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21121.139639778736,
            "unit": "ns/iter",
            "extra": "iterations: 33035\ncpu: 21120.629635235477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48909.52232454311,
            "unit": "ns/iter",
            "extra": "iterations: 14334\ncpu: 48906.662480814986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156235.10492456346,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 156231.61047027586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131808.1676061661,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131800.26305900086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131163.51845606248,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131160.80194866157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131426.13524666484,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131420.746576627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82365.51285664155,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 82364.28319831078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130761.48407762269,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 130758.0365554941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4995.244565450068,
            "unit": "ns/iter",
            "extra": "iterations: 140306\ncpu: 4995.192650349971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25675.015453269407,
            "unit": "ns/iter",
            "extra": "iterations: 27114\ncpu: 25674.843254407744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20498.12361953505,
            "unit": "ns/iter",
            "extra": "iterations: 34137\ncpu: 20497.849840349125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20235.858021481694,
            "unit": "ns/iter",
            "extra": "iterations: 34632\ncpu: 20235.30261030262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20476.841349138766,
            "unit": "ns/iter",
            "extra": "iterations: 33829\ncpu: 20475.689497176856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47058.97990590916,
            "unit": "ns/iter",
            "extra": "iterations: 14880\ncpu: 47059.36155913957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154976.56627311616,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 154969.5255067937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129472.64700461064,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129468.70046082884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128052.21008249736,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128047.75435380283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128008.81217171124,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 128003.69498279235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82241.69228058223,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82240.35953472092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129324.64909722721,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 129319.75196060482 ns\nthreads: 1"
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
        "date": 1705961952399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1424.1488027866328,
            "unit": "ns/iter",
            "extra": "iterations: 488593\ncpu: 1423.957363286007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15891.442133868253,
            "unit": "ns/iter",
            "extra": "iterations: 51887\ncpu: 15890.743346117526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33994.41571829124,
            "unit": "ns/iter",
            "extra": "iterations: 24252\ncpu: 33992.7964703942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50411.26488595428,
            "unit": "ns/iter",
            "extra": "iterations: 16660\ncpu: 50410.45018007201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57441.4872000034,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57436.859999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70430.49002362104,
            "unit": "ns/iter",
            "extra": "iterations: 12279\ncpu: 70427.72212720913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84160.10061216523,
            "unit": "ns/iter",
            "extra": "iterations: 10128\ncpu: 84157.21761453392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97176.60892656464,
            "unit": "ns/iter",
            "extra": "iterations: 8850\ncpu: 97175.25423728819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113983.23141654533,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 113980.4539079434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1204.950009653629,
            "unit": "ns/iter",
            "extra": "iterations: 580092\ncpu: 1204.9309419885114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.0480021423103,
            "unit": "ns/iter",
            "extra": "iterations: 720697\ncpu: 971.0319315884487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.3622738093128,
            "unit": "ns/iter",
            "extra": "iterations: 726710\ncpu: 963.3403971322816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 978.6253875843128,
            "unit": "ns/iter",
            "extra": "iterations: 716941\ncpu: 978.6011680180095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1847.8053649653848,
            "unit": "ns/iter",
            "extra": "iterations: 378940\ncpu: 1847.746872855861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5619.074049999426,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5618.964000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30779.60039369925,
            "unit": "ns/iter",
            "extra": "iterations: 26924\ncpu: 30779.178428168147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24146.791609009077,
            "unit": "ns/iter",
            "extra": "iterations: 33965\ncpu: 24146.65096422787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23438.527443940744,
            "unit": "ns/iter",
            "extra": "iterations: 35363\ncpu: 23437.638209427954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22952.29739798178,
            "unit": "ns/iter",
            "extra": "iterations: 35434\ncpu: 22952.164587684114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72184.39604914976,
            "unit": "ns/iter",
            "extra": "iterations: 12453\ncpu: 72183.00811049543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557044.9230000349,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557026.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 543667.4047769003,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 543625.455688247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548873.0550688485,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 548849.4367959964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550080.3883617582,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 550064.579380139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323240.2632929861,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 323216.3916391643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 549945.5191082836,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 549915.286624204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2338190.2550506145,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2338123.4848484886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075959.8845265354,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1075944.4572748274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3251934.709790196,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3251860.8391608372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8058.285132088583,
            "unit": "ns/iter",
            "extra": "iterations: 103794\ncpu: 8058.155577393666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43398.45660277815,
            "unit": "ns/iter",
            "extra": "iterations: 19045\ncpu: 43398.1990023627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33932.11881147616,
            "unit": "ns/iter",
            "extra": "iterations: 24299\ncpu: 33931.277007284145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33561.67095157042,
            "unit": "ns/iter",
            "extra": "iterations: 24738\ncpu: 33561.18117875326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34329.97158790156,
            "unit": "ns/iter",
            "extra": "iterations: 24567\ncpu: 34329.40937029349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 87466.4315686272,
            "unit": "ns/iter",
            "extra": "iterations: 10200\ncpu: 87465.90196078413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603270.7159999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603255.0999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 581683.3414305203,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 581675.303643723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 577702.7101739981,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 577686.7469879527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581958.1406666809,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 581937.800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334339.56917149085,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 334337.4566473983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581651.4273560143,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 581642.801047123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2494049.1774194706,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2493973.1182795814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1095881.5047057911,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1095827.6470588276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5255.5281800005105,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5255.508999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28397.487995321957,
            "unit": "ns/iter",
            "extra": "iterations: 29072\ncpu: 28397.065905338615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22113.33847520673,
            "unit": "ns/iter",
            "extra": "iterations: 37146\ncpu: 22112.838529047607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21926.795866802153,
            "unit": "ns/iter",
            "extra": "iterations: 37598\ncpu: 21925.913612426208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21538.761131929914,
            "unit": "ns/iter",
            "extra": "iterations: 38695\ncpu: 21538.60705517518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70070.68044232539,
            "unit": "ns/iter",
            "extra": "iterations: 12389\ncpu: 70069.40834611357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577785.1150000971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577781.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 584502.5731225401,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 584469.4334650831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581367.5259698093,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 581364.562787641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 586874.66976742,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 586871.2956810595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329060.77038707095,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 329042.01428034634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 576160.7519479947,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 576157.0779220766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 516.4366124986418,
            "unit": "ns/iter",
            "extra": "iterations: 1355843\ncpu: 516.428229522145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3218.166376550377,
            "unit": "ns/iter",
            "extra": "iterations: 217729\ncpu: 3218.147329937686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2581.123901792041,
            "unit": "ns/iter",
            "extra": "iterations: 271465\ncpu: 2581.0358609765626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2336.8466040236667,
            "unit": "ns/iter",
            "extra": "iterations: 299369\ncpu: 2336.8364793950113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1971.5724102566078,
            "unit": "ns/iter",
            "extra": "iterations: 354929\ncpu: 1971.5441679885216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18367.01480445439,
            "unit": "ns/iter",
            "extra": "iterations: 37894\ncpu: 18366.64115691136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31842.949815566084,
            "unit": "ns/iter",
            "extra": "iterations: 21959\ncpu: 31841.545607723372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7462.007179323865,
            "unit": "ns/iter",
            "extra": "iterations: 94020\ncpu: 7461.824079983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7414.030293708429,
            "unit": "ns/iter",
            "extra": "iterations: 94277\ncpu: 7413.914316323218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7542.272211375139,
            "unit": "ns/iter",
            "extra": "iterations: 93218\ncpu: 7542.227895899922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14712.202089935518,
            "unit": "ns/iter",
            "extra": "iterations: 47657\ncpu: 14712.107350441687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14426.88596960939,
            "unit": "ns/iter",
            "extra": "iterations: 48566\ncpu: 14426.423835605101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5211.419738212048,
            "unit": "ns/iter",
            "extra": "iterations: 134460\ncpu: 5211.390004462257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26321.174520007437,
            "unit": "ns/iter",
            "extra": "iterations: 26719\ncpu: 26320.187881283277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21075.644997887408,
            "unit": "ns/iter",
            "extra": "iterations: 33166\ncpu: 21075.5593077249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20913.618921099045,
            "unit": "ns/iter",
            "extra": "iterations: 33497\ncpu: 20913.042959071074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21328.80053320282,
            "unit": "ns/iter",
            "extra": "iterations: 33008\ncpu: 21328.117426078876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48583.5930660725,
            "unit": "ns/iter",
            "extra": "iterations: 14393\ncpu: 48581.9426109911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160511.1908361974,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160510.28636884352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133968.57625502264,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133966.34853979707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133889.2757500519,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 133886.83355627776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134399.85483248852,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134399.15286869308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83345.3892194221,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83344.0980485478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133901.41055267453,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 133900.71249759395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4979.175061737339,
            "unit": "ns/iter",
            "extra": "iterations: 139705\ncpu: 4978.922014244323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25796.835612419087,
            "unit": "ns/iter",
            "extra": "iterations: 27277\ncpu: 25796.440224364753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20627.299347520202,
            "unit": "ns/iter",
            "extra": "iterations: 34024\ncpu: 20627.177874441408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20271.83683369826,
            "unit": "ns/iter",
            "extra": "iterations: 34425\ncpu: 20271.477124182824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20725.461919302343,
            "unit": "ns/iter",
            "extra": "iterations: 33731\ncpu: 20725.101538644118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47071.08145253682,
            "unit": "ns/iter",
            "extra": "iterations: 14843\ncpu: 47070.77410227065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157136.15308642513,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 157135.12906846442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130216.65449125177,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130215.71002609153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129881.69303445076,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129879.28862541742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129820.21974759037,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 129814.9406087591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82179.1763736879,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82178.62101423639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131305.39333333133,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 131303.2777777797 ns\nthreads: 1"
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
        "date": 1705963437171,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1390.7724711409771,
            "unit": "ns/iter",
            "extra": "iterations: 493177\ncpu: 1390.7418634688966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16214.292134609084,
            "unit": "ns/iter",
            "extra": "iterations: 50843\ncpu: 16214.082567905116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34449.68565223282,
            "unit": "ns/iter",
            "extra": "iterations: 22561\ncpu: 34448.67248792164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50808.59023058213,
            "unit": "ns/iter",
            "extra": "iterations: 16480\ncpu: 50806.94781553399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56474.355500006364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56473.54 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71725.36438699237,
            "unit": "ns/iter",
            "extra": "iterations: 11990\ncpu: 71725.38782318596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84913.99774133334,
            "unit": "ns/iter",
            "extra": "iterations: 10183\ncpu: 84910.20327997647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98547.31481481787,
            "unit": "ns/iter",
            "extra": "iterations: 8802\ncpu: 98547.60281754151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115785.71218680967,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 115783.40548340543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1207.0148220187982,
            "unit": "ns/iter",
            "extra": "iterations: 580960\ncpu: 1206.9970393830897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 981.7570164508305,
            "unit": "ns/iter",
            "extra": "iterations: 714250\ncpu: 981.7164858242907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 965.143763551842,
            "unit": "ns/iter",
            "extra": "iterations: 724996\ncpu: 965.1290489878559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.2973480234124,
            "unit": "ns/iter",
            "extra": "iterations: 734735\ncpu: 953.2948614126175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1826.2200620291198,
            "unit": "ns/iter",
            "extra": "iterations: 381756\ncpu: 1826.1832165047806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5655.216870000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5655.102000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30628.54018322714,
            "unit": "ns/iter",
            "extra": "iterations: 26852\ncpu: 30628.117086250586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24209.776379019808,
            "unit": "ns/iter",
            "extra": "iterations: 33919\ncpu: 24210.242047230186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23486.243464566287,
            "unit": "ns/iter",
            "extra": "iterations: 34925\ncpu: 23485.798138869002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23447.510544637582,
            "unit": "ns/iter",
            "extra": "iterations: 34757\ncpu: 23447.501222775223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71799.63452019179,
            "unit": "ns/iter",
            "extra": "iterations: 12526\ncpu: 71795.70493373778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 547660.5849999032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547654.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 544978.6654135655,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 544966.1027568928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 550492.3272844987,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 550489.6953985725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 549147.0050031833,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 549136.5228267667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320213.53439349605,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 320209.09763313655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552693.8813668708,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 552690.1998710502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2352855.9622168783,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2352698.23677581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1080068.8538011583,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1080039.415204679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3258210.7342658946,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3258080.7692307723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8599.837077167726,
            "unit": "ns/iter",
            "extra": "iterations: 98384\ncpu: 8599.386079037247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44898.56964141315,
            "unit": "ns/iter",
            "extra": "iterations: 18545\ncpu: 44896.37638177419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35491.29008088467,
            "unit": "ns/iter",
            "extra": "iterations: 23490\ncpu: 35491.106853980324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34851.91774328467,
            "unit": "ns/iter",
            "extra": "iterations: 23840\ncpu: 34850.30201342276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34872.48676668845,
            "unit": "ns/iter",
            "extra": "iterations: 23728\ncpu: 34870.8825016856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83326.53947622582,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 83322.39553244738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 581383.30700001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581377.1999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596666.5030344416,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 596640.795684423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583937.5085092119,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 583904.969366916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588200.9851851646,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 588189.4949494974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338347.06508184515,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 338335.3078721753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576681.088353464,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 576653.7483266398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2487294.829333223,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2487249.0666666827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1083827.017523389,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1083810.39719626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5518.958520000297,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5518.9269999999615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30436.36634756865,
            "unit": "ns/iter",
            "extra": "iterations: 27160\ncpu: 30434.69440353467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23827.0890903336,
            "unit": "ns/iter",
            "extra": "iterations: 34639\ncpu: 23826.320043881078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23240.215499720263,
            "unit": "ns/iter",
            "extra": "iterations: 35420\ncpu: 23239.147374364737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23077.580411875242,
            "unit": "ns/iter",
            "extra": "iterations: 35399\ncpu: 23076.91460210742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69784.79515681256,
            "unit": "ns/iter",
            "extra": "iterations: 12595\ncpu: 69779.34894799488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566390.0030000376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566373.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569155.3558124709,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 569144.1233140668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571611.6638325386,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 571574.3623283193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564586.4041450679,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564555.3108808283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326407.3313388009,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 326379.88032909425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570076.802896721,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 570070.1511335035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 518.1020083421511,
            "unit": "ns/iter",
            "extra": "iterations: 1352409\ncpu: 518.0829911661342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3271.0130793607314,
            "unit": "ns/iter",
            "extra": "iterations: 213619\ncpu: 3270.9997706196805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2646.88235027181,
            "unit": "ns/iter",
            "extra": "iterations: 264429\ncpu: 2646.852274145405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2547.222403438785,
            "unit": "ns/iter",
            "extra": "iterations: 274074\ncpu: 2547.1927289710147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2024.8994898313567,
            "unit": "ns/iter",
            "extra": "iterations: 344592\ncpu: 2024.7820611041388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18068.942344586467,
            "unit": "ns/iter",
            "extra": "iterations: 38574\ncpu: 18068.48395292168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30646.452950138784,
            "unit": "ns/iter",
            "extra": "iterations: 22965\ncpu: 30644.951012410034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7168.891400080293,
            "unit": "ns/iter",
            "extra": "iterations: 97873\ncpu: 7168.627711421924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7150.539095152964,
            "unit": "ns/iter",
            "extra": "iterations: 98094\ncpu: 7150.159031133382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7171.916552275251,
            "unit": "ns/iter",
            "extra": "iterations: 97618\ncpu: 7171.754184679143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14380.621291880328,
            "unit": "ns/iter",
            "extra": "iterations: 48441\ncpu: 14380.502054045306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13616.019712211904,
            "unit": "ns/iter",
            "extra": "iterations: 51288\ncpu: 13615.557245359487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5153.6719231934885,
            "unit": "ns/iter",
            "extra": "iterations: 135197\ncpu: 5153.635065866798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25871.107507707926,
            "unit": "ns/iter",
            "extra": "iterations: 26919\ncpu: 25869.5010958801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21023.47549371741,
            "unit": "ns/iter",
            "extra": "iterations: 33420\ncpu: 21023.073010173743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20777.659438585342,
            "unit": "ns/iter",
            "extra": "iterations: 33665\ncpu: 20777.40086142851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21221.522029169846,
            "unit": "ns/iter",
            "extra": "iterations: 32979\ncpu: 21221.09221019444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48762.24298545037,
            "unit": "ns/iter",
            "extra": "iterations: 14363\ncpu: 48759.736823783416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158354.38679674597,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158347.77676951018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132551.28690387137,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132550.35957607988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132135.71927506023,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132133.52841231087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132379.9629277543,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132376.61596958278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82117.51209772134,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82115.71529246015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130367.07337724537,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 130366.09595484521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5093.224359866428,
            "unit": "ns/iter",
            "extra": "iterations: 136495\ncpu: 5092.945529140305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25774.194158267965,
            "unit": "ns/iter",
            "extra": "iterations: 27081\ncpu: 25773.16938074679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20473.341934542375,
            "unit": "ns/iter",
            "extra": "iterations: 34220\ncpu: 20471.677381648125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20420.208669001444,
            "unit": "ns/iter",
            "extra": "iterations: 34260\ncpu: 20419.99708114411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20681.668756838048,
            "unit": "ns/iter",
            "extra": "iterations: 33809\ncpu: 20681.430979916608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46695.52175656737,
            "unit": "ns/iter",
            "extra": "iterations: 14961\ncpu: 46695.36127264227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153328.70783331664,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 153325.55094916027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128771.86389553946,
            "unit": "ns/iter",
            "extra": "iterations: 5437\ncpu: 128771.65716387672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125578.11916725572,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 125579.55850682005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126005.43512686309,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 126002.46535900571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80672.57547170071,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 80672.42291762437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125158.94360903598,
            "unit": "ns/iter",
            "extra": "iterations: 5586\ncpu: 125153.50877192922 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}