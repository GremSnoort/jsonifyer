window.BENCHMARK_DATA = {
  "lastUpdate": 1702489571421,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 20.04 Debug c++-17": [
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
        "date": 1702489569837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7584.992995106643,
            "unit": "ns/iter",
            "extra": "iterations: 92364\ncpu: 7584.727816032221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69208.21702579164,
            "unit": "ns/iter",
            "extra": "iterations: 12252\ncpu: 69205.09304603329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133487.0319245958,
            "unit": "ns/iter",
            "extra": "iterations: 6578\ncpu: 133484.41775615688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196355.4725671592,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 196343.5312711673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 259580.69407896107,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 259576.6746411483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 318723.61137970013,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 318714.1688359985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 381505.02769230324,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 381488.8351648351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 445683.83188554045,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 445660.4496678586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 505028.8995354537,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 505001.16144018585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5771.829287023868,
            "unit": "ns/iter",
            "extra": "iterations: 121098\ncpu: 5771.635369700579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4868.554941282353,
            "unit": "ns/iter",
            "extra": "iterations: 144163\ncpu: 4868.224162926691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4860.313156196152,
            "unit": "ns/iter",
            "extra": "iterations: 144107\ncpu: 4860.1435044793125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4875.719077115697,
            "unit": "ns/iter",
            "extra": "iterations: 143680\ncpu: 4875.496937639197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8530.690693874874,
            "unit": "ns/iter",
            "extra": "iterations: 82032\ncpu: 8530.393017359078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30693.532927191587,
            "unit": "ns/iter",
            "extra": "iterations: 26756\ncpu: 30692.581103303997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127939.2849679088,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 127936.93088520708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99721.18738991741,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 99715.46319126448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100805.80603907963,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 100803.96684428657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99943.6165316344,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 99939.43876951963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255674.78661579613,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 255667.91899031404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2054087.3503325742,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2054008.869179602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1669888.601436118,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1669839.8563734258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1715223.3591161908,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1715179.7421731136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1721543.5185185606,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1721518.1481481502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1021320.8855885359,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 1021251.4851485146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1650385.0053096656,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650297.3451327407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6946886.179999866,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6946301.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3844206.934426435,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3843936.065573768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8805449.169354659,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8804926.612903217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29564.105737554037,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29561.896832579216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122579.39083596466,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 122570.26716460774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101706.04412114408,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 101704.75792988342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100629.55273714979,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 100627.28881547862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100699.74263657349,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 100698.77672209076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256731.80423902368,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 256729.05504857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2059005.3702882866,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2058862.5277161903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1702995.9321101352,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1702960.5504587193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1725523.6301113763,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1725473.6059479543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1734367.7955389612,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1734327.8810408853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1022421.3220152659,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 1022361.5553121602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1664880.7193606165,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1664852.575488452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6981503.630000816,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6981059.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3887845.259414633,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3887771.9665271733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28892.379685358952,
            "unit": "ns/iter",
            "extra": "iterations: 28413\ncpu: 28891.180093619303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121971.15474995862,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 121968.0326694372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100015.83372420567,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 100011.08114446588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99814.17687631464,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 99810.72013093335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99494.3150477529,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 99488.48124854427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252622.19982625303,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 252608.3695337391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2058652.8650440907,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2058534.2920354046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1681438.8563733564,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1681340.5745062882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1717434.2715594706,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1717323.3027522974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1725207.0904060171,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1725118.4501845106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1025971.8098900571,
            "unit": "ns/iter",
            "extra": "iterations: 910\ncpu: 1025916.4835164794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1656142.5553569668,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1656069.1071428657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2971.3383061172312,
            "unit": "ns/iter",
            "extra": "iterations: 233806\ncpu: 2971.245391478418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15831.826054521636,
            "unit": "ns/iter",
            "extra": "iterations: 44238\ncpu: 15830.778968307786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11806.95872262245,
            "unit": "ns/iter",
            "extra": "iterations: 59403\ncpu: 11806.250526067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12055.07704470032,
            "unit": "ns/iter",
            "extra": "iterations: 58187\ncpu: 12054.345472356385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10028.562995847606,
            "unit": "ns/iter",
            "extra": "iterations: 69830\ncpu: 10027.86195045113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60244.509701240815,
            "unit": "ns/iter",
            "extra": "iterations: 11648\ncpu: 60243.741414835014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135444.8507058553,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 135435.42835041578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35024.03715928797,
            "unit": "ns/iter",
            "extra": "iterations: 19995\ncpu: 35022.74568642181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35371.017380757774,
            "unit": "ns/iter",
            "extra": "iterations: 19792\ncpu: 35370.983225545744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35406.000810333906,
            "unit": "ns/iter",
            "extra": "iterations: 19745\ncpu: 35405.530514053804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73054.63996249763,
            "unit": "ns/iter",
            "extra": "iterations: 9599\ncpu: 73053.14095218253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64262.18224298808,
            "unit": "ns/iter",
            "extra": "iterations: 10914\ncpu: 64256.57870624846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19986.492289030302,
            "unit": "ns/iter",
            "extra": "iterations: 34626\ncpu: 19984.950615144735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95510.74377465717,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 95502.0819159074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76264.9142044205,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 76261.8187787253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76746.56189014259,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 76743.38340094255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77555.54318789435,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 77553.16117542362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144736.2334020515,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 144731.81443298876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 594138.7000000381,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 594110.8474576309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 501505.91307464696,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 501492.45689654927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506123.9244734624,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 506118.15541032027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511575.6542397676,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511524.4152046812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333025.3003331672,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 332996.4302712976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 497789.2038351619,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 497780.11363636615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20295.233045445402,
            "unit": "ns/iter",
            "extra": "iterations: 34504\ncpu: 20294.34268490621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96415.62227436095,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96405.31327628977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77492.74277168403,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 77487.00564971851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76484.2925683108,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 76478.06557377065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77698.42666813923,
            "unit": "ns/iter",
            "extra": "iterations: 9007\ncpu: 77697.24658598859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144055.6166324349,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 144052.381930185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 589730.3445378782,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 589671.7647058811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 497719.16714283696,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 497712.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 506576.0354815951,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 506531.35409123113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 507825.6287164216,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 507787.74474256183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337353.46187258686,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 337320.60810810403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 494765.8504606723,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 494732.4592487551 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}