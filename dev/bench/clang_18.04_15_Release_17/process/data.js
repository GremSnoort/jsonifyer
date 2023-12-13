window.BENCHMARK_DATA = {
  "lastUpdate": 1702490346753,
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
      }
    ]
  }
}