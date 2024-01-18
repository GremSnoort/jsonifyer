window.BENCHMARK_DATA = {
  "lastUpdate": 1705575612633,
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
      }
    ]
  }
}