window.BENCHMARK_DATA = {
  "lastUpdate": 1705958152424,
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
        "date": 1702492201473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7794.786358599802,
            "unit": "ns/iter",
            "extra": "iterations: 90240\ncpu: 7794.708554964539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72739.14048107067,
            "unit": "ns/iter",
            "extra": "iterations: 11724\ncpu: 72736.75366769021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139357.86291348631,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 139355.31170483463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205829.2752555479,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 205830.4492512478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273830.1766200578,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 273828.4625158831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337912.69098040124,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 337910.7058823528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 406247.72301991924,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 406239.87957387714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 467990.77634404134,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 467970.698924731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534567.2581239126,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 534558.0012262415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5897.042639807866,
            "unit": "ns/iter",
            "extra": "iterations: 118645\ncpu: 5896.9101099919935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4996.85183623812,
            "unit": "ns/iter",
            "extra": "iterations: 139960\ncpu: 4996.701914832811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4980.566957632528,
            "unit": "ns/iter",
            "extra": "iterations: 140910\ncpu: 4980.527286920722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5010.138689999621,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5010.180000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8682.012217683556,
            "unit": "ns/iter",
            "extra": "iterations: 80539\ncpu: 8681.937943108314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31371.958320541187,
            "unit": "ns/iter",
            "extra": "iterations: 26056\ncpu: 31371.31562787848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130621.31599877757,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 130620.46497399795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102957.44919657927,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 102956.98924731214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104867.48834052969,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 104867.18075262183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101327.38021951493,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 101325.00596516313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 258522.29653936767,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 258501.93914081214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2153452.8116278527,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2153451.395348839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1803244.216634387,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1803058.9941972964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767757.3219697077,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767671.7803030284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1786102.3346153633,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1785961.5384615436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081790.9329478825,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1081735.4913294804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735805.955307282,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735695.344506515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7182274.140000118,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7181680.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3978767.292372591,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3978466.5254237233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9157448.369747926,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9156811.764705868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31221.45844976827,
            "unit": "ns/iter",
            "extra": "iterations: 23261\ncpu: 31218.88568849147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132030.0215583706,
            "unit": "ns/iter",
            "extra": "iterations: 6494\ncpu: 132015.3988296889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105352.54941395001,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 105348.19247378198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 104497.79431233532,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 104496.98455503758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103909.68069184848,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 103907.74043179512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 265618.7852123647,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 265614.0238313481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2180046.553738206,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2179957.476635511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1820457.3151751105,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1820447.6653696527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1785905.2160612491,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785841.491395788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1817320.2932038056,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1817314.9514563081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1081121.363108993,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1081084.918793503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1737618.0391059767,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1737604.4692737418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7246830.240000009,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7246509.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4068656.012875411,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4068563.519313318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29451.253518588815,
            "unit": "ns/iter",
            "extra": "iterations: 27781\ncpu: 29451.096072855606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125982.53101406373,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 125979.79274611418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101647.24910692875,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 101645.24886877798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105114.25959173712,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 105113.63748155476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102628.35748792364,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 102627.8985507245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 265315.5457307856,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 265313.09632330557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2168577.1651164033,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2168493.953488361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1808517.358527265,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1808474.2248062019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1786165.5506691844,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786153.5372848948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1802987.5822050273,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802959.1876208892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1074897.856156472,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1074875.60414269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1735177.1123594774,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1735135.205992508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3051.455069948186,
            "unit": "ns/iter",
            "extra": "iterations: 229312\ncpu: 3051.43254605078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16161.46110236898,
            "unit": "ns/iter",
            "extra": "iterations: 43216\ncpu: 16161.326823398711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11721.792809996708,
            "unit": "ns/iter",
            "extra": "iterations: 59694\ncpu: 11721.687271752568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12470.485467344051,
            "unit": "ns/iter",
            "extra": "iterations: 56115\ncpu: 12470.364430187947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10521.438152773513,
            "unit": "ns/iter",
            "extra": "iterations: 66543\ncpu: 10521.169769923275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60655.09809714451,
            "unit": "ns/iter",
            "extra": "iterations: 11509\ncpu: 60653.792683986525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141479.11111112163,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 141473.39393939506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36787.842916513735,
            "unit": "ns/iter",
            "extra": "iterations: 19009\ncpu: 36787.50591824954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36715.368084329486,
            "unit": "ns/iter",
            "extra": "iterations: 19069\ncpu: 36714.122397608495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37120.06339111103,
            "unit": "ns/iter",
            "extra": "iterations: 18867\ncpu: 37119.81767106623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75540.76659828266,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 75538.88589009999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67127.35746950943,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 67125.69550304931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20407.24183292367,
            "unit": "ns/iter",
            "extra": "iterations: 34284\ncpu: 20406.3353167659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96932.35113446623,
            "unit": "ns/iter",
            "extra": "iterations: 7228\ncpu: 96931.26729385601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78258.84172258672,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 78258.0872483225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78566.92314586193,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 78561.47210396618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80605.95485908772,
            "unit": "ns/iter",
            "extra": "iterations: 8551\ncpu: 80600.56133785463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150071.84130387058,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 150064.76517263643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 618492.7637168504,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 618484.4247787645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 528588.2982588708,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 528582.2104466255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526263.4295403084,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 526233.5342878621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 526200.2827067536,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526203.8345864689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346068.79702970793,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 346056.33663366805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 515702.8696612643,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515648.4536082503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20637.952711443155,
            "unit": "ns/iter",
            "extra": "iterations: 34004\ncpu: 20636.113398424015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98518.20816325262,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 98515.83391977519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79149.92224745029,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 79143.77979568637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78508.85070106442,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 78505.49635445741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80110.21428570269,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 80109.38285714247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148842.6108866667,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 148835.36040825082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 619989.5270630317,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 619970.0088731052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 522559.2531740776,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522554.0702016421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 523355.8398203342,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 523339.9700598876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 525838.3960990538,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 525841.5603900953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 348467.85892946133,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 348457.4787393641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 515071.29182015645,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 515057.77450258017 ns\nthreads: 1"
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
        "date": 1702503251906,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7557.287299909939,
            "unit": "ns/iter",
            "extra": "iterations: 92708\ncpu: 7557.196789921042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71633.5514042306,
            "unit": "ns/iter",
            "extra": "iterations: 11857\ncpu: 71631.57628405161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136793.16582915993,
            "unit": "ns/iter",
            "extra": "iterations: 6368\ncpu: 136789.8555276382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200873.0684137242,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 200859.3228200372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265383.11029185896,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 265373.9477726574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327835.35087055346,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 327821.04466313415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390761.65036562015,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 390747.5776965268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453437.7633229064,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 453425.44409613404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517287.0857653511,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 517271.8284693276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5937.673294588336,
            "unit": "ns/iter",
            "extra": "iterations: 118036\ncpu: 5937.475854823948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4991.000114002822,
            "unit": "ns/iter",
            "extra": "iterations: 140348\ncpu: 4990.713797132836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4924.887235481933,
            "unit": "ns/iter",
            "extra": "iterations: 141862\ncpu: 4924.860780194841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5041.407669421551,
            "unit": "ns/iter",
            "extra": "iterations: 138811\ncpu: 5041.331738839143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8733.714512222927,
            "unit": "ns/iter",
            "extra": "iterations: 80098\ncpu: 8733.598841419249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30476.01935341288,
            "unit": "ns/iter",
            "extra": "iterations: 27127\ncpu: 30475.928042171956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125623.09225795968,
            "unit": "ns/iter",
            "extra": "iterations: 6807\ncpu: 125622.74129572477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101402.59733776876,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 101401.40242453055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101627.37818224053,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 101622.65048774694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100104.65078620009,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 100102.85144332277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264152.312518964,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 264142.8311609579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2153779.344907405,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2153755.09259259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1751414.7048871538,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751377.6315789477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1732780.420560647,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1732741.1214953281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1748270.4250936934,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1748285.0187265954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1075983.8919860409,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1075934.6109175398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1711781.3455882089,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1711729.2279411743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7242726.08000092,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7242050.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4120495.0748899523,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120321.5859030867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9086106.658333886,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9085591.66666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29920.45430933911,
            "unit": "ns/iter",
            "extra": "iterations: 27336\ncpu: 29919.38103599651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127208.00282991325,
            "unit": "ns/iter",
            "extra": "iterations: 6714\ncpu: 127199.0616621981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103308.96875761995,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 103307.40785940962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100408.63177790615,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 100403.41405788477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101956.05227352833,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 101951.50972669756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 267587.3776889783,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 267573.5709895519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2179354.9789718552,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2179314.018691587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1768612.1043643255,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1768499.4307400377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1760078.3686200469,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1760026.0869565234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1762226.2849055727,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1762177.5471698134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1079859.4918224823,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1079869.9766355166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1724049.000000006,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1723939.3715342002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7230784.920000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7230598.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4079524.4824558967,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4079421.491228094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30244.276363770652,
            "unit": "ns/iter",
            "extra": "iterations: 27149\ncpu: 30244.25209031644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121283.71589772224,
            "unit": "ns/iter",
            "extra": "iterations: 7001\ncpu: 121280.1742608201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99408.94862814159,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 99403.6310566256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101259.72487213563,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 101254.58546449439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101935.21070233225,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 101936.09651218337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 260425.56783466358,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 260415.33393231587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2157576.3379631126,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2157529.1666666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1756464.020992447,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1756443.702290069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1758003.5698113036,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757971.1320754786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1759218.0943395605,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1759178.1132075554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1071518.2078071258,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1071497.703788744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1716679.3789279775,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716696.857670982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3115.5981894892475,
            "unit": "ns/iter",
            "extra": "iterations: 224688\ncpu: 3115.389339884638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15775.48029601054,
            "unit": "ns/iter",
            "extra": "iterations: 44458\ncpu: 15774.767196005296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12266.128768577471,
            "unit": "ns/iter",
            "extra": "iterations: 56520\ncpu: 12266.01556970975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12210.526228419396,
            "unit": "ns/iter",
            "extra": "iterations: 57228\ncpu: 12210.32012301659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10351.705486543397,
            "unit": "ns/iter",
            "extra": "iterations: 67620\ncpu: 10351.688849452876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62145.92118531753,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 62143.803626713714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141656.54112641595,
            "unit": "ns/iter",
            "extra": "iterations: 4936\ncpu: 141651.88411669267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36428.55752534152,
            "unit": "ns/iter",
            "extra": "iterations: 19235\ncpu: 36425.963088120254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36172.089004961854,
            "unit": "ns/iter",
            "extra": "iterations: 19336\ncpu: 36172.48655357915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36304.33782662671,
            "unit": "ns/iter",
            "extra": "iterations: 19288\ncpu: 36302.87743674773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76311.15310900251,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 76307.47032560047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68131.68910071284,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 68127.633352589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20406.481946670814,
            "unit": "ns/iter",
            "extra": "iterations: 34315\ncpu: 20405.787556462146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97513.05045999712,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 97510.66350710833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78859.03944550629,
            "unit": "ns/iter",
            "extra": "iterations: 8873\ncpu: 78855.92246139995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79694.37761279622,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 79691.20502570033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80749.35304969369,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 80744.6904185392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148463.3469951226,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 148455.7655553171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 614346.2707423248,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 614322.6200873319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510180.162909075,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 510132.50909090857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514728.34241534234,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 514694.550810015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 510822.514598595,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510779.99999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340800.17492713395,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 340791.8853255561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506417.1072463167,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 506388.04347825714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20439.07231453127,
            "unit": "ns/iter",
            "extra": "iterations: 34184\ncpu: 20438.038263514994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98023.16510555879,
            "unit": "ns/iter",
            "extra": "iterations: 7153\ncpu: 98023.93401369933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78847.9701610222,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 78844.09413354273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79051.80990054381,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 79049.66094032489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79733.0677327329,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 79728.00685322739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148669.5170068047,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148661.09693877565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609070.1913043354,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 609076.1739130442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511105.1918307821,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511081.18161925604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515311.90395891754,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 515301.02639295976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513270.5157972378,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 513252.60837619356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 348882.57640619326,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 348857.34196117334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 506498.13115943497,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 506474.2753623137 ns\nthreads: 1"
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
        "date": 1705574927443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7517.294042121646,
            "unit": "ns/iter",
            "extra": "iterations: 92684\ncpu: 7516.829226187907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70631.66241453652,
            "unit": "ns/iter",
            "extra": "iterations: 11994\ncpu: 70628.88110722028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136376.16814988907,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 136370.02341920376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200608.34042553065,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 200600.43940795565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264814.08282396954,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 264804.24816625926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326581.9889524036,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 326558.2476190477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389651.0812387614,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 389633.97666068195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 452202.8891779186,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 452171.4880332987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517069.3141330218,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 517034.798099763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5681.749443826651,
            "unit": "ns/iter",
            "extra": "iterations: 122264\ncpu: 5681.496597526668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4856.773418205487,
            "unit": "ns/iter",
            "extra": "iterations: 143745\ncpu: 4856.56475007827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4827.032772131835,
            "unit": "ns/iter",
            "extra": "iterations: 144452\ncpu: 4826.881593885858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4973.6807166414155,
            "unit": "ns/iter",
            "extra": "iterations: 140712\ncpu: 4973.278043095106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8726.670391549113,
            "unit": "ns/iter",
            "extra": "iterations: 80271\ncpu: 8726.60612176252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31502.93487314222,
            "unit": "ns/iter",
            "extra": "iterations: 25934\ncpu: 31500.80974782136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127400.62312762858,
            "unit": "ns/iter",
            "extra": "iterations: 6676\ncpu: 127399.61054523678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99297.63184371057,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 99293.92840430487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101245.98514613943,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 101246.52611403899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98255.9724505142,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 98257.52980669064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269129.8005583241,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 269128.0707196035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2110407.515908977,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2110395.227272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1752809.4248120424,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752771.616541356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1752417.2015066019,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752445.009416199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1765660.7121211183,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765639.3939393936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1086183.131609955,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1086200.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700835.3345521707,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1700863.0712979883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7395761.849999189,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7395721.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4134786.669603156,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4134665.1982378904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9129760.899159124,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9129515.966386558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29763.65103805391,
            "unit": "ns/iter",
            "extra": "iterations: 27407\ncpu: 29763.173641770274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 123040.77115216943,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 123039.21455385502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101148.11196682742,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 101146.32701421832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98701.70214978259,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 98702.10355987017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 98674.93771024031,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 98675.02609906068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 272045.94097329705,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 272042.6059654641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2126450.78669718,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2126414.908256868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1791617.0246680623,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1791625.0474383293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1763145.7584905478,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1763174.5283018895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1782380.9103053275,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1782359.3511450351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1103851.2162485044,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1103839.665471925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1720020.0369002838,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1720026.937269373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7436649.300000226,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7436757.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4168167.83928553,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4168034.821428579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29267.64455349443,
            "unit": "ns/iter",
            "extra": "iterations: 27917\ncpu: 29265.598022710095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121699.71005411139,
            "unit": "ns/iter",
            "extra": "iterations: 7022\ncpu: 121693.6485331816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 97836.90254579241,
            "unit": "ns/iter",
            "extra": "iterations: 8681\ncpu: 97833.71731367345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.8577479728,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 99551.31191905009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98533.83235191077,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 98526.17480660473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 267619.1545314984,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 267620.0614439329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2105840.6674210015,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2105724.886877832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1762040.287593949,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1761969.1729323342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1751163.4288388712,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1751023.7827715373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1764011.1393596763,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1763898.116760828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1090778.1525820866,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1090714.3192488258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1708793.9376147047,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1708698.5321100983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3043.9342993824644,
            "unit": "ns/iter",
            "extra": "iterations: 230561\ncpu: 3043.6713060752036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15551.713689908458,
            "unit": "ns/iter",
            "extra": "iterations: 45077\ncpu: 15551.332164962212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11999.450459862266,
            "unit": "ns/iter",
            "extra": "iterations: 58387\ncpu: 11998.559610872313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12451.449586690096,
            "unit": "ns/iter",
            "extra": "iterations: 56374\ncpu: 12451.039486288104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10191.870478275936,
            "unit": "ns/iter",
            "extra": "iterations: 68475\ncpu: 10191.493245710104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61531.18767655488,
            "unit": "ns/iter",
            "extra": "iterations: 11328\ncpu: 61526.34180790941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138365.37206550248,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138361.37305188394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35767.57511629037,
            "unit": "ns/iter",
            "extra": "iterations: 19563\ncpu: 35764.87246332351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36154.60653027602,
            "unit": "ns/iter",
            "extra": "iterations: 19356\ncpu: 36152.531514776325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36205.980856786126,
            "unit": "ns/iter",
            "extra": "iterations: 19328\ncpu: 36203.585471853774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75769.57269484315,
            "unit": "ns/iter",
            "extra": "iterations: 9251\ncpu: 75765.93881742453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59140.525786272396,
            "unit": "ns/iter",
            "extra": "iterations: 11828\ncpu: 59135.382144063886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20083.99040417137,
            "unit": "ns/iter",
            "extra": "iterations: 34911\ncpu: 20083.180086505654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93176.85526665313,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 93175.27195542578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75875.88179260399,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 75874.95128815803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77047.01242714575,
            "unit": "ns/iter",
            "extra": "iterations: 9093\ncpu: 77044.57274826695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76411.42595420897,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 76405.40894220209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149108.84322485953,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 149102.2973835366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 596962.8404436499,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 596918.9419795127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515570.41598811996,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 515548.85270170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511726.021961919,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 511706.808199115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516494.1687638597,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 516449.4448556615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344238.59617270203,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 344210.99116781406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 500527.2379928613,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 500490.0358422991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20417.947156135087,
            "unit": "ns/iter",
            "extra": "iterations: 34214\ncpu: 20418.042321856705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92963.98029817571,
            "unit": "ns/iter",
            "extra": "iterations: 7512\ncpu: 92962.566560172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75609.01288436801,
            "unit": "ns/iter",
            "extra": "iterations: 9236\ncpu: 75604.22260718969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75509.98156731646,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 75504.78602996697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77218.1521572018,
            "unit": "ns/iter",
            "extra": "iterations: 9109\ncpu: 77210.79152486581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147231.4035420589,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 147229.09550916986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 596545.4360068168,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 596555.2901023859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515000.4478707699,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514988.47283406474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510649.0826627665,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 510638.2589612287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515295.12739319785,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515303.97643594135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 347952.86623567104,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 347958.52809547615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503250.5745140233,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 503250.25197984034 ns\nthreads: 1"
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
        "date": 1705772759902,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7940.022665787418,
            "unit": "ns/iter",
            "extra": "iterations: 87974\ncpu: 7939.610566758361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75129.23778012984,
            "unit": "ns/iter",
            "extra": "iterations: 11334\ncpu: 75125.36615493207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142240.14056094343,
            "unit": "ns/iter",
            "extra": "iterations: 6097\ncpu: 142232.4749876989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209073.83632396322,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 209064.81571290008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275043.8668374005,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 275032.49039692694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343349.2041946769,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 343330.7479224378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 408244.0680850976,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 408232.5768321513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 476240.4510988569,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 476220.1648351649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 541097.7586207138,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 541077.9310344824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6096.968382480543,
            "unit": "ns/iter",
            "extra": "iterations: 114620\ncpu: 6096.5765136974305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5096.479153797007,
            "unit": "ns/iter",
            "extra": "iterations: 137603\ncpu: 5096.463739889399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4973.819734911982,
            "unit": "ns/iter",
            "extra": "iterations: 140482\ncpu: 4973.748238208463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5082.135587310444,
            "unit": "ns/iter",
            "extra": "iterations: 137653\ncpu: 5082.128976484345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9088.62931447594,
            "unit": "ns/iter",
            "extra": "iterations: 77211\ncpu: 9088.400616492481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31709.551688529664,
            "unit": "ns/iter",
            "extra": "iterations: 26147\ncpu: 31709.15975064063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127617.38553855306,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 127613.20132013224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100513.96781418384,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 100510.28059419969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103260.1299298281,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 103255.68594241468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101341.11679352813,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 101339.64081826816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 261974.3971652717,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 261961.15802171302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2198636.443127969,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2198523.9336492894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1781917.4788461223,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1781831.5384615425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1773403.2848948222,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1773383.3652007657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1795241.2019418015,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1795156.8932038876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1074302.4368482267,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1074252.2595596756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735501.97570098,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1735402.9906542024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7356702.959999667,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7356595.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4296216.406392476,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4295991.780821932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9281242.478632286,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9280536.752136774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30092.250468734914,
            "unit": "ns/iter",
            "extra": "iterations: 27201\ncpu: 30091.390022425694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126919.03813621051,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 126911.72280753774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103899.5056493813,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 103893.60952496699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100821.43499823395,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 100815.14936828493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100924.70613307205,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 100918.65972057778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 262484.5049954658,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 262474.4474719962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2201735.823809345,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2201583.571428568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1802714.496124001,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802587.2093023253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1797884.974999857,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1797802.884615384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1816459.2475632143,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816399.2202729103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1092659.1329411273,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1092628.235294116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1761264.590132829,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1761147.0588235345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7429843.63000005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7429811.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4224925.207207488,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4224708.558558549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30227.496857873393,
            "unit": "ns/iter",
            "extra": "iterations: 27370\ncpu: 30224.78991596639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123248.0830324902,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 123240.8664259936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99214.68685927657,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 99210.3797763278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101203.91699323512,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 101032.28832680227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100255.62079510315,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 100253.48153375639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 259008.85892859884,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 258990.14880952364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2222809.3428571764,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2222722.1428571516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1807646.9281553621,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1807506.4077669892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800779.584139287,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800665.3771760229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1827443.7274510323,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1827296.8627450985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1083362.000000029,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1083261.01295642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1766992.967741817,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1766881.7836812132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3105.9383287407213,
            "unit": "ns/iter",
            "extra": "iterations: 224286\ncpu: 3105.6615214502854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15969.447869838983,
            "unit": "ns/iter",
            "extra": "iterations: 43823\ncpu: 15968.347671314159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12178.098861896939,
            "unit": "ns/iter",
            "extra": "iterations: 57464\ncpu: 12177.307531672055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12705.968430978408,
            "unit": "ns/iter",
            "extra": "iterations: 55149\ncpu: 12704.884948049916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10339.363765373459,
            "unit": "ns/iter",
            "extra": "iterations: 67648\ncpu: 10339.02406575214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61583.53089689426,
            "unit": "ns/iter",
            "extra": "iterations: 11328\ncpu: 61579.03425141268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147471.57855784567,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 147460.73165574198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37528.01496407307,
            "unit": "ns/iter",
            "extra": "iterations: 18511\ncpu: 37526.135811139444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37219.07459182743,
            "unit": "ns/iter",
            "extra": "iterations: 18742\ncpu: 37217.66620424669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37852.910409005024,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 37851.17398831388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77308.11436464057,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 77306.46408839793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68688.01807997853,
            "unit": "ns/iter",
            "extra": "iterations: 10177\ncpu: 68687.67809767084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20334.256565362793,
            "unit": "ns/iter",
            "extra": "iterations: 34385\ncpu: 20333.657117929317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95878.00466136159,
            "unit": "ns/iter",
            "extra": "iterations: 7294\ncpu: 95874.15684123954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77767.46089850472,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 77761.81919023894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77702.789724816,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77700.3217931634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80171.02733303863,
            "unit": "ns/iter",
            "extra": "iterations: 8744\ncpu: 80170.45974382543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149986.309028504,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 149978.7475873929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630336.8685868966,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 630299.5499549867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 534313.4059406125,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 534279.5125666425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526631.4714286034,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526621.6541353354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 532672.376833975,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 532668.8803088855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 352333.83021725895,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 352327.13491662615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 520612.7605948178,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 520587.2862453517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20326.48918251699,
            "unit": "ns/iter",
            "extra": "iterations: 34435\ncpu: 20325.558298242937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97909.38650994631,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 97908.66218863748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79130.3587682534,
            "unit": "ns/iter",
            "extra": "iterations: 8833\ncpu: 79126.10664553431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78392.9994394631,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 78390.97533632269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79388.84873567923,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79386.48372831251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150509.42654640367,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 150496.3487972505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626586.5339893157,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 626581.7531305839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 530587.2259287002,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 530557.8468536824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 524867.0721261991,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 524855.9729526639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 532626.0667677827,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 532604.0971168438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 355125.0005096907,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 355114.47502548376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 521376.22973977024,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521373.45724906423 ns\nthreads: 1"
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
        "date": 1705774703563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7931.425513115921,
            "unit": "ns/iter",
            "extra": "iterations: 88284\ncpu: 7930.920665126184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73631.40413337683,
            "unit": "ns/iter",
            "extra": "iterations: 11516\ncpu: 73627.33588051406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141724.49200193342,
            "unit": "ns/iter",
            "extra": "iterations: 6189\ncpu: 141720.84343189525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207925.02729884797,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 207912.38026819928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275540.712043571,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 275529.14798206283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 342077.67298581003,
            "unit": "ns/iter",
            "extra": "iterations: 2532\ncpu: 342054.9368088468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 408786.5257732152,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 408765.0421743204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 475315.1052345028,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 475299.78189749137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 543269.3770186086,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 543249.3788819873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6164.363213098695,
            "unit": "ns/iter",
            "extra": "iterations: 115552\ncpu: 6154.885246469124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5112.070975103312,
            "unit": "ns/iter",
            "extra": "iterations: 136724\ncpu: 5111.935724525332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5001.169889999346,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5001.058000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5078.02559100573,
            "unit": "ns/iter",
            "extra": "iterations: 138408\ncpu: 5077.799693659329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8836.932535583515,
            "unit": "ns/iter",
            "extra": "iterations: 79390\ncpu: 8836.66582693034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32750.11876102957,
            "unit": "ns/iter",
            "extra": "iterations: 24924\ncpu: 32749.51051195629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 129443.3270516729,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 129439.27051671733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103290.1164168242,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 103286.61750483535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104613.73872433665,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 104611.31866781367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103353.21982288196,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 103352.22613126277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253173.26972155645,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 253166.93735498821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2215993.0551557667,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2215908.1534772157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1830681.5643564723,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1830642.1782178218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1822492.571428651,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1822463.796477495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1806526.3450291036,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1806466.4717348928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1076453.4270832741,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1076415.5092592575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1762129.4301888293,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1762121.1320754716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7379114.57999985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7378362.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4282688.273972523,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4282580.3652968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9341637.863247568,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9341381.196581192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31959.571539829158,
            "unit": "ns/iter",
            "extra": "iterations: 26964\ncpu: 31958.94526034721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130171.68471484155,
            "unit": "ns/iter",
            "extra": "iterations: 6575\ncpu: 130167.63498098821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 108112.7470890189,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 108110.11643921371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106625.58699451076,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 106623.78931602651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105036.9516268693,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 105036.13757268271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256295.85373750195,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 256291.23013537374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2232676.548309195,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2232609.903381645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1844877.3524751952,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1844793.6633663317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1829612.4078431728,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829593.9215686242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1824054.043052798,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1824006.262230931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1083728.931235403,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1083687.179487179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1777909.8323699462,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1777799.4219653248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7457492.5199999595,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7456776.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4194052.8963961313,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4193948.6486486397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30139.379847518594,
            "unit": "ns/iter",
            "extra": "iterations: 27282\ncpu: 30138.820467707676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125888.29917549918,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 125885.95406360444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104509.3239143738,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 104506.59327217072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107049.99262777134,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 107046.09521429455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104417.83586106458,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 104415.81457925598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250387.70011467492,
            "unit": "ns/iter",
            "extra": "iterations: 3488\ncpu: 250382.76949541445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2210488.780429529,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2210430.0715990486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1832277.2086615108,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832218.8976377917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1829681.0512821719,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1829631.163708081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1818822.0800781085,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1818804.4921874923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1082558.1047730022,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1082515.2502910409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1762747.771863144,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1762702.2813688251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2985.2966003245597,
            "unit": "ns/iter",
            "extra": "iterations: 234140\ncpu: 2985.127274280353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16260.62223412742,
            "unit": "ns/iter",
            "extra": "iterations: 42934\ncpu: 16259.577491032736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12735.058778584664,
            "unit": "ns/iter",
            "extra": "iterations: 54969\ncpu: 12734.222925648983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12876.73605948026,
            "unit": "ns/iter",
            "extra": "iterations: 54338\ncpu: 12875.83275056128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10436.9296965723,
            "unit": "ns/iter",
            "extra": "iterations: 67166\ncpu: 10436.262394664027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59707.2189737468,
            "unit": "ns/iter",
            "extra": "iterations: 11732\ncpu: 59705.18240709166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145098.18217615192,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145091.50259067322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37378.57011428787,
            "unit": "ns/iter",
            "extra": "iterations: 17500\ncpu: 37377.519999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37318.2062300315,
            "unit": "ns/iter",
            "extra": "iterations: 18780\ncpu: 37317.52928647471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37046.469410457205,
            "unit": "ns/iter",
            "extra": "iterations: 18879\ncpu: 37045.37846284202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75798.54145919328,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 75797.86750378899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67527.20464175486,
            "unit": "ns/iter",
            "extra": "iterations: 10384\ncpu: 67520.50269645515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22136.731216387703,
            "unit": "ns/iter",
            "extra": "iterations: 33287\ncpu: 22134.797368341988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98380.57327706415,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 98373.64275668054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79730.601502905,
            "unit": "ns/iter",
            "extra": "iterations: 8783\ncpu: 79726.0047819647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79984.07483693583,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 79980.07781210645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81404.9074418552,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 81396.6860465119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150305.92103004028,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 150296.73819742486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 636827.8180164206,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 636774.4313011783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 543136.1417564916,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 543084.6687211072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 536706.13113501,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536701.2269938624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 533960.1080669898,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 533924.733637743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 354986.55516193487,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 354976.7206477764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 527573.0000000787,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 527533.9366515864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20708.719936100497,
            "unit": "ns/iter",
            "extra": "iterations: 33803\ncpu: 20707.33662692665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99847.20618850423,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99841.45158990523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80865.8263784585,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80860.7213038955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79885.2319452328,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 79883.86765544853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81619.56918056021,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81613.02016552164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 146789.11220638873,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 146781.77432886165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 635984.4281817831,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 635940.8181818213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 538584.3861538958,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 538566.4615384656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 539224.3786482608,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 539209.3701996871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 534564.9189602379,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 534518.3486238556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 354699.340759447,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 354682.5822784832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525297.3821321013,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525264.1891891833 ns\nthreads: 1"
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
        "date": 1705777695102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7641.7447026736945,
            "unit": "ns/iter",
            "extra": "iterations: 91650\ncpu: 7641.42062193126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70304.77292647971,
            "unit": "ns/iter",
            "extra": "iterations: 12093\ncpu: 70302.74538989499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134448.06534440393,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 134446.12546125462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 197623.20173240584,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 197617.46067927973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 259936.04119064484,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 259927.3601924235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321714.33730456274,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 321704.83991064783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 384278.8102058952,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 384274.35094001796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 445856.28967639036,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 445850.79609655886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 508945.878646393,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 508946.1493582266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5811.571650160147,
            "unit": "ns/iter",
            "extra": "iterations: 120558\ncpu: 5811.51230113306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4903.6396666062055,
            "unit": "ns/iter",
            "extra": "iterations: 142654\ncpu: 4903.6073296227305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4849.223201714539,
            "unit": "ns/iter",
            "extra": "iterations: 144179\ncpu: 4849.151402076586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4921.254603986607,
            "unit": "ns/iter",
            "extra": "iterations: 142268\ncpu: 4921.275339500094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8883.72465538244,
            "unit": "ns/iter",
            "extra": "iterations: 80234\ncpu: 8883.641598324903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31773.707438017034,
            "unit": "ns/iter",
            "extra": "iterations: 26015\ncpu: 31773.223140495906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126971.57964536212,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 126970.52600208581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101160.47581700058,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 101160.87938205582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102809.5427226709,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 102809.86000482769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99948.42016214509,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 99948.61943367416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254043.8093009571,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 254037.9058204155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2030104.177243068,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2030104.3763676167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1695869.2358318232,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1695864.1681901312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1660825.5706619201,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1660820.7513416817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1680065.5380434627,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1680066.6666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1012582.1827133229,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1012582.0568927785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1628500.992957827,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1628432.9225352076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6948551.850000513,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6948334.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3884861.5767635815,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3884731.9502074686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8818985.25806484,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8818737.096774183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30148.63509800474,
            "unit": "ns/iter",
            "extra": "iterations: 27295\ncpu: 30147.61311595536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128517.37885860426,
            "unit": "ns/iter",
            "extra": "iterations: 6641\ncpu: 128515.08808914328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104313.1222466989,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 104311.78414096955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100863.05874673185,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 100862.82933776382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100411.67671038822,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 100412.9032258065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 262282.9239130174,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262282.5785024144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2057876.8123620485,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2057870.6401765936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1730566.8581950902,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1730529.4659300218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1686182.6642467373,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1686126.8602540863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1697149.193784231,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1697099.9999999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1023606.4271523481,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1023579.4701986753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1655811.9786477084,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1655777.7580071145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7025778.560000617,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7025308.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4016021.7565214583,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4015904.7826086837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29553.427607735648,
            "unit": "ns/iter",
            "extra": "iterations: 27869\ncpu: 29552.366428648184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123187.00852725399,
            "unit": "ns/iter",
            "extra": "iterations: 6919\ncpu: 123182.17950570874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99811.1035208758,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 99808.07111942877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101868.8820365621,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 101866.8817975381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100844.0566772924,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 100841.55154091347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253241.45227006145,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 253236.43771827637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2051774.1015453967,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2051713.4657836526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1724462.8782286262,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1724428.044280446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1693046.5419707377,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1692997.9927007256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1705065.3211677491,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1705062.7737226202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1027421.5812155012,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1027425.5248618791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1658407.9680851428,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1658341.6666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3072.273088739075,
            "unit": "ns/iter",
            "extra": "iterations: 227860\ncpu: 3072.2430439743803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15897.863817391602,
            "unit": "ns/iter",
            "extra": "iterations: 43941\ncpu: 15897.790218702345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11596.491392437965,
            "unit": "ns/iter",
            "extra": "iterations: 60412\ncpu: 11596.393100708534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12063.582276952739,
            "unit": "ns/iter",
            "extra": "iterations: 57981\ncpu: 12063.129300977995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10324.303172151307,
            "unit": "ns/iter",
            "extra": "iterations: 67935\ncpu: 10323.959667329085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60407.00361757059,
            "unit": "ns/iter",
            "extra": "iterations: 11610\ncpu: 60406.29629629666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129939.56798366763,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 129936.15284733867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35805.14206698599,
            "unit": "ns/iter",
            "extra": "iterations: 19526\ncpu: 35804.76288026197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35887.79797099845,
            "unit": "ns/iter",
            "extra": "iterations: 19517\ncpu: 35886.24788645794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35709.269311169235,
            "unit": "ns/iter",
            "extra": "iterations: 19613\ncpu: 35708.58614184438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73302.7825039303,
            "unit": "ns/iter",
            "extra": "iterations: 9545\ncpu: 73300.70193818702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64242.32794414518,
            "unit": "ns/iter",
            "extra": "iterations: 10886\ncpu: 64242.33878375986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20691.83947734142,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20691.76101930412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95817.41015463769,
            "unit": "ns/iter",
            "extra": "iterations: 7307\ncpu: 95814.84877514836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77796.7638454622,
            "unit": "ns/iter",
            "extra": "iterations: 8956\ncpu: 77793.4457347028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77742.62315626553,
            "unit": "ns/iter",
            "extra": "iterations: 9017\ncpu: 77740.31274259686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78899.61060452258,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 78897.45581447786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145694.8374661287,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 145694.2071264839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 599204.7854700795,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 599186.4102564052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 512012.61758243013,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 511994.1391941455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 504209.63504708477,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 504212.09268645867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 503117.6222865467,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 503117.94500724226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334144.91599045054,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 334146.01431981055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 497065.8633452279,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 497055.231316723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20487.238099421756,
            "unit": "ns/iter",
            "extra": "iterations: 34158\ncpu: 20486.547807248407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100562.42703245298,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 100563.58804940991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79726.0164046437,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 79724.98291182426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77636.07442323957,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 77633.28527063118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79065.64879265532,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 79064.00634848743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143814.1062911332,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 143809.90953947356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 599588.745501332,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 599595.8868894584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 508018.64731491357,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 508012.7721335208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 504623.6726748516,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 504604.97476567986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 506773.98039215175,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 506768.4095860576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342607.6374755346,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 342593.3463796454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 499406.04724410066,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 499400.28632784274 ns\nthreads: 1"
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
        "date": 1705952889499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7627.256302246017,
            "unit": "ns/iter",
            "extra": "iterations: 91634\ncpu: 7626.945238666872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70091.22951766869,
            "unit": "ns/iter",
            "extra": "iterations: 12108\ncpu: 70088.09051866534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133789.54978488313,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 133786.17086662567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 197523.68639454665,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 197523.10657596367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260696.86466164564,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 260697.77443609023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 320820.9743207865,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 320823.1112765167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 382467.7749999885,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 382465.86363636353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 446827.4396507631,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 446800.2054442735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 507650.11500289553,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 507639.40455341496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5892.275306041298,
            "unit": "ns/iter",
            "extra": "iterations: 118203\ncpu: 5892.153329441725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4943.036062962131,
            "unit": "ns/iter",
            "extra": "iterations: 141863\ncpu: 4943.006985612881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4831.2661860559065,
            "unit": "ns/iter",
            "extra": "iterations: 144677\ncpu: 4831.1950068082715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4885.096840989902,
            "unit": "ns/iter",
            "extra": "iterations: 143431\ncpu: 4884.864499306281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8775.343438392694,
            "unit": "ns/iter",
            "extra": "iterations: 79828\ncpu: 8775.36077566769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31442.486336695445,
            "unit": "ns/iter",
            "extra": "iterations: 25982\ncpu: 31442.390885998026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131127.95518249008,
            "unit": "ns/iter",
            "extra": "iterations: 6493\ncpu: 131127.56815031607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102566.09752285962,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 102564.55026455013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104126.624908327,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 104121.8406257639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100829.30475964857,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 100826.05967321825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 261435.58622770663,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261424.07127755994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2089814.7297296966,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2089811.4864864892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1700868.7743119155,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1700765.8715596343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1679532.7577415141,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1679430.6010928995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1695510.9219599743,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1695471.5063520868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1022840.9856512407,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1022837.7483443727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1649742.0496454865,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1649729.9645390043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7019960.140000876,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7020049.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4010238.5427350127,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4010141.452991452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8746238.241935734,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8746113.709677394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30673.257950926436,
            "unit": "ns/iter",
            "extra": "iterations: 26695\ncpu: 30672.699007304633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128994.42970623521,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 128994.1546762588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105334.35459404827,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 105333.70632848481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103720.11022560038,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 103718.74693477155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103342.56281956508,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 103340.02921840773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 268688.1666666471,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 268684.1433021813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2104566.9477271903,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2104400.90909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1732903.4301675374,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1732857.1694599648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1710675.557587005,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1710629.2504570377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1729551.6270871272,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1729540.8163265206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1039412.0723829997,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1039403.6748329649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1672590.8186715143,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672571.454219032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7056017.679999514,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7056010.999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4043174.5826085913,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4043079.1304347822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29508.84688463502,
            "unit": "ns/iter",
            "extra": "iterations: 27894\ncpu: 29508.973255897286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124496.14285714633,
            "unit": "ns/iter",
            "extra": "iterations: 6839\ncpu: 124495.62801579265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104044.93862860758,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 104045.40019521638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103703.95998540602,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 103702.78521041127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102229.29771634116,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 102229.12259615444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 268895.8146189768,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 268891.6329704508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2097252.076749339,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2097250.1128668142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1720689.5867159104,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1720680.2583025885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1708235.2807340303,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1708218.7155963357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1717292.4483395363,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1717274.5387453812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1030140.5535911972,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1030137.4585635406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1663639.3196429417,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663594.285714292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3053.722624671797,
            "unit": "ns/iter",
            "extra": "iterations: 228600\ncpu: 3053.6469816272906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16399.28923719391,
            "unit": "ns/iter",
            "extra": "iterations: 42619\ncpu: 16398.179215842614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12885.812993244062,
            "unit": "ns/iter",
            "extra": "iterations: 54613\ncpu: 12885.611484445188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12571.00251197495,
            "unit": "ns/iter",
            "extra": "iterations: 55733\ncpu: 12571.058439344695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10557.76754180856,
            "unit": "ns/iter",
            "extra": "iterations: 66313\ncpu: 10557.741317690385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62545.937567182336,
            "unit": "ns/iter",
            "extra": "iterations: 11164\ncpu: 62544.22250089565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138904.40598968885,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 138894.5061483536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35856.81452978392,
            "unit": "ns/iter",
            "extra": "iterations: 19491\ncpu: 35855.00487404438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35746.68797222958,
            "unit": "ns/iter",
            "extra": "iterations: 19588\ncpu: 35744.75699407808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36008.95895178624,
            "unit": "ns/iter",
            "extra": "iterations: 19538\ncpu: 35961.945951479116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73244.34819000048,
            "unit": "ns/iter",
            "extra": "iterations: 9558\ncpu: 73240.91860221786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65184.05260207591,
            "unit": "ns/iter",
            "extra": "iterations: 10703\ncpu: 65180.80911893786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19992.101278437534,
            "unit": "ns/iter",
            "extra": "iterations: 35121\ncpu: 19992.07027134752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93753.57152424096,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 93750.05357621337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75803.45865800732,
            "unit": "ns/iter",
            "extra": "iterations: 9240\ncpu: 75801.15800865779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75463.084911753,
            "unit": "ns/iter",
            "extra": "iterations: 9292\ncpu: 75458.17907877741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76744.37140977247,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 76740.52839289627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146780.31948815254,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 146778.1623662681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 595544.6371379195,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 595530.91993185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 504099.48345321015,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 504083.66906474665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 499774.97134668956,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 499755.80229226046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 503898.9316546917,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 503880.1438848891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334829.0343839241,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 334811.9866284638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 491991.8139045149,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491968.0477528016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19793.915334651072,
            "unit": "ns/iter",
            "extra": "iterations: 35410\ncpu: 19793.151652075547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95301.55327254579,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 95297.36018505829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76890.56122448469,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 76890.94799210083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76149.17982170731,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 76145.75994781527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77602.72301199619,
            "unit": "ns/iter",
            "extra": "iterations: 9004\ncpu: 77599.44469124771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144370.04986549943,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 144361.55596937818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 597144.4727426931,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 597115.8432708695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 504028.9935390756,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 504031.5865039408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 498084.14224753703,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 498062.9445234716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 504574.9193664558,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504577.4658027291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336251.855288448,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 336247.259615382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495465.47666197,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495441.58415841684 ns\nthreads: 1"
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
        "date": 1705954330369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7799.342103793519,
            "unit": "ns/iter",
            "extra": "iterations: 89505\ncpu: 7799.090553600357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70634.29190895759,
            "unit": "ns/iter",
            "extra": "iterations: 12038\ncpu: 70631.77438112644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136797.878029956,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 136795.72332870154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199732.17072051472,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 199725.24093620921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263887.53237187176,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 263877.2629640993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325132.80490565073,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 325117.2075471697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388593.8556747473,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 388593.2082216266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 451195.308449997,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 451188.07672369113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513974.66902653023,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 513969.02654867247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5962.1183250722015,
            "unit": "ns/iter",
            "extra": "iterations: 117211\ncpu: 5961.9702928906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5028.370084062237,
            "unit": "ns/iter",
            "extra": "iterations: 139063\ncpu: 5028.290055586325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5005.460531110225,
            "unit": "ns/iter",
            "extra": "iterations: 139971\ncpu: 5005.505426123986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5062.831279415082,
            "unit": "ns/iter",
            "extra": "iterations: 138110\ncpu: 5062.69929766129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8922.584401205952,
            "unit": "ns/iter",
            "extra": "iterations: 78583\ncpu: 8922.107835027937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30639.741895861458,
            "unit": "ns/iter",
            "extra": "iterations: 26869\ncpu: 30638.873795079842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125786.64124169813,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 125778.50702143394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99381.26181860648,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 99378.68565425448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102061.40953749472,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102056.17062065672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99422.3164763516,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 99421.35865765534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276108.85242780705,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 276102.38019676256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2102001.3061224497,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2101919.274376414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1716252.3480663998,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716221.5469613257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1726852.5557620726,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1726808.1784386588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1729925.66480464,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729939.1061452508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1031059.0468749175,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1031007.031250003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1670026.3153153001,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670022.52252252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7046756.979999599,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7046251.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3993355.3234045287,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3993353.617021288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8903228.333333498,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8902569.105691066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30525.582831661184,
            "unit": "ns/iter",
            "extra": "iterations: 26910\ncpu: 30524.60423634342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127548.57050993362,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 127547.51009421267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102265.45399878998,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 102265.36380036091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102378.72780921758,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 102374.9367698419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101711.73225690066,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 101707.73587179213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278436.4586108486,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 278423.4697113858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2134523.2275860263,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2134523.448275863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1740219.8429905847,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740145.0467289693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1742956.7588784844,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1742905.420560743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1755491.6353384142,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1755448.8721804537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1037187.0246085187,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 1037172.8187919409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1691533.9107467323,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1691460.4735883402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7130870.790000472,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7130626.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4074778.4805195266,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4074641.9913419867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28988.315306087086,
            "unit": "ns/iter",
            "extra": "iterations: 28309\ncpu: 28987.572856688676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121751.50564850529,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 121743.70084370144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99383.69026444365,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 99381.33629768326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101156.53969193688,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 101153.92180094853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100183.03788235565,
            "unit": "ns/iter",
            "extra": "iterations: 8500\ncpu: 100180.97647058756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277702.95775535324,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 277691.1727616645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2105456.764705934,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2105395.248868772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1720084.3327171833,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1720043.4380776319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1722973.706641933,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1722875.4612546028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1743903.757009295,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1743884.29906542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1034089.626532964,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1034040.4682274223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1682136.260397811,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1682150.2712477364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3133.3909240904923,
            "unit": "ns/iter",
            "extra": "iterations: 223647\ncpu: 3133.2935384780385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15796.150334931908,
            "unit": "ns/iter",
            "extra": "iterations: 44188\ncpu: 15795.820132162664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12476.849467708586,
            "unit": "ns/iter",
            "extra": "iterations: 56360\ncpu: 12476.410574875777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12580.067283340295,
            "unit": "ns/iter",
            "extra": "iterations: 55675\ncpu: 12580.026942074635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10232.740050261413,
            "unit": "ns/iter",
            "extra": "iterations: 68444\ncpu: 10232.595990883074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61251.449203013195,
            "unit": "ns/iter",
            "extra": "iterations: 11418\ncpu: 61250.02627430371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139273.336251501,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 139272.74174293588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35824.492074044385,
            "unit": "ns/iter",
            "extra": "iterations: 19556\ncpu: 35823.36878707315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36032.328924343536,
            "unit": "ns/iter",
            "extra": "iterations: 19430\ncpu: 36032.22336592894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36204.27170201766,
            "unit": "ns/iter",
            "extra": "iterations: 19330\ncpu: 36202.705638903135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74454.08172111194,
            "unit": "ns/iter",
            "extra": "iterations: 9459\ncpu: 74453.00771751763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65438.05702039744,
            "unit": "ns/iter",
            "extra": "iterations: 10733\ncpu: 65433.67185316346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20175.03030390253,
            "unit": "ns/iter",
            "extra": "iterations: 34682\ncpu: 20174.643907502465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97380.36869952494,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 97376.92843219022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78308.18087854762,
            "unit": "ns/iter",
            "extra": "iterations: 8901\ncpu: 78304.23547916074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78333.53964165422,
            "unit": "ns/iter",
            "extra": "iterations: 8930\ncpu: 78332.03807390774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80376.37871656293,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 80374.04431179039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149389.69016183328,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 149384.43356047655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 603701.9870466208,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 603689.378238352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 507709.06545461586,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 507686.5454545482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506514.5014492518,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 506505.21739130554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 515944.6241709525,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 515926.3080324276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 341237.11890836665,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 341224.0253411261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501567.16738502186,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 501551.9396551709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20381.245586993664,
            "unit": "ns/iter",
            "extra": "iterations: 34387\ncpu: 20380.37921307475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97104.66426392402,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 97103.06348766308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78358.96225780665,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 78358.7523798865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78954.11972466989,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 78954.84089370296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79144.27347909386,
            "unit": "ns/iter",
            "extra": "iterations: 8827\ncpu: 79140.87458932675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143968.4083230261,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 143963.32921301946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 601070.828326181,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 601052.2746781174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507654.7501826208,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 507652.66617969004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 506917.7781818078,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 506906.54545455385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515312.27675283054,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 515288.1180811772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 343733.9715546935,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 343715.54683668935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502063.5863798966,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502036.4874551975 ns\nthreads: 1"
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
        "date": 1705956393510,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7640.737565695356,
            "unit": "ns/iter",
            "extra": "iterations: 91139\ncpu: 7640.696079614655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70620.04154894255,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 70619.70250955624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135019.64770444014,
            "unit": "ns/iter",
            "extra": "iterations: 6469\ncpu: 135013.89704745705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201418.27492518045,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 201407.5754087036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278655.5666463827,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 278646.3177115033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326018.196820603,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 326014.00454201346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387787.54812832753,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 387777.4064171122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 450341.3505687529,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 450333.04033091996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 513213.0712603209,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 513179.15194346325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5716.518128883368,
            "unit": "ns/iter",
            "extra": "iterations: 122622\ncpu: 5716.388576275046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4875.08477566346,
            "unit": "ns/iter",
            "extra": "iterations: 143980\ncpu: 4874.889567995554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4824.821718057853,
            "unit": "ns/iter",
            "extra": "iterations: 144838\ncpu: 4824.7870034107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4888.919912533568,
            "unit": "ns/iter",
            "extra": "iterations: 144055\ncpu: 4877.239943077293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8534.274777418535,
            "unit": "ns/iter",
            "extra": "iterations: 81768\ncpu: 8534.216319342513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31657.691589147318,
            "unit": "ns/iter",
            "extra": "iterations: 25800\ncpu: 31656.399224806228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128448.59951712849,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 128448.07605251254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99709.68518951185,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 99708.57510528786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102595.17941317844,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 102591.63059163034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100747.4418522455,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 100743.53717450231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253926.3594523668,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 253921.40984561638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2066610.7511111577,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2066577.111111114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786885.2642201975,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1786791.5596330261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1712051.3809522523,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1711970.6959706978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1718109.6378677427,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1718022.7941176496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1015863.4566410455,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 1015824.698133921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1654059.682709399,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1653997.6827094494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6936295.870000321,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6935767.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3916505.225941737,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3916376.1506276107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8781215.483871333,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8780789.51612902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30367.482606295074,
            "unit": "ns/iter",
            "extra": "iterations: 27165\ncpu: 30365.92306276458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129152.38273099708,
            "unit": "ns/iter",
            "extra": "iterations: 6613\ncpu: 129145.84908513549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103851.70971665312,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 103846.88070047475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101599.54034753554,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 101595.15591525838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101553.61761903913,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 101550.66666666609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260858.34123923696,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 260857.57485917545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2090555.2179775962,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2090483.8202247235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1723740.0296296445,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1723711.851851851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1734181.1777778612,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1734127.0370370357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1747439.568480263,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1747429.6435271993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1031326.5720670343,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1031291.9553072675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1670305.7859712376,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1670300.8992805756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7020923.6900007,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7020520.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4041581.3577587986,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4041535.3448275863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28921.387568745726,
            "unit": "ns/iter",
            "extra": "iterations: 28364\ncpu: 28921.19235650837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123170.19552991733,
            "unit": "ns/iter",
            "extra": "iterations: 6935\ncpu: 123157.89473684145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99888.49748919136,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 99886.65187434254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101966.82067890571,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 101960.6213266166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100512.2150588693,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 100504.55572737014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253706.31806394935,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 253697.29184672944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2063345.7782704965,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2063279.3791574193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1711576.312614167,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1711524.3144424153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1725188.3518518433,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725119.2592592577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1731977.0129629602,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1731921.2962962955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1027064.7196467803,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1027005.6291390664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1658356.5178570277,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1658321.4285714298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3010.679492139168,
            "unit": "ns/iter",
            "extra": "iterations: 232662\ncpu: 3010.690185763028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15755.748976929433,
            "unit": "ns/iter",
            "extra": "iterations: 44474\ncpu: 15755.097360255406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11973.8845062711,
            "unit": "ns/iter",
            "extra": "iterations: 58514\ncpu: 11973.731072905632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11832.104214246752,
            "unit": "ns/iter",
            "extra": "iterations: 59109\ncpu: 11832.039114178853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10069.30893828998,
            "unit": "ns/iter",
            "extra": "iterations: 69454\ncpu: 10068.766377746484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59416.949732530426,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 59414.01885030149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134802.2951609743,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 134799.2673992673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35233.87341772185,
            "unit": "ns/iter",
            "extra": "iterations: 19829\ncpu: 35233.96540420602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35845.09483597128,
            "unit": "ns/iter",
            "extra": "iterations: 19539\ncpu: 35843.78422641962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35762.48926577156,
            "unit": "ns/iter",
            "extra": "iterations: 19517\ncpu: 35762.28416252455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69914.72541392977,
            "unit": "ns/iter",
            "extra": "iterations: 10026\ncpu: 69912.70696189927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63867.39509884052,
            "unit": "ns/iter",
            "extra": "iterations: 10977\ncpu: 63866.94907534005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20227.037949457834,
            "unit": "ns/iter",
            "extra": "iterations: 34625\ncpu: 20226.64259927776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94992.11575649443,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 94990.33092741363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76266.34515777363,
            "unit": "ns/iter",
            "extra": "iterations: 9190\ncpu: 76262.1327529914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77480.59254343079,
            "unit": "ns/iter",
            "extra": "iterations: 9039\ncpu: 77476.14780396073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79173.66146540706,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 79167.58254183581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144190.8741762968,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 144185.77018121997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 597697.0583262511,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 597441.2510566342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510130.99270605337,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 510107.9504011697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 508604.51386858127,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 508559.6350364958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 508815.96078435023,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 508786.8554829307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336477.2925072069,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 336456.53218059504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495352.15215860313,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495330.2901627729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20557.27055788421,
            "unit": "ns/iter",
            "extra": "iterations: 34111\ncpu: 20556.146111225058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95816.27554644995,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95811.21584699466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77686.13925877519,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77685.46382600912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79027.1993378293,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 79024.67176618279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79787.25846154484,
            "unit": "ns/iter",
            "extra": "iterations: 8775\ncpu: 79784.22792022768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144412.53005350218,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 144400.94689172655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 595036.1449275657,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 595009.803921569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 503157.59381739626,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503148.3105679311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 511037.0950292428,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511012.5730994202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 509731.13230990106,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 509706.5789473611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340150.41541441315,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 340129.47164323844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495521.13300144806,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 495499.3598862025 ns\nthreads: 1"
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
        "date": 1705958151521,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7695.411789894753,
            "unit": "ns/iter",
            "extra": "iterations: 91078\ncpu: 7695.234853641933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70583.98114460825,
            "unit": "ns/iter",
            "extra": "iterations: 12039\ncpu: 70584.41731040784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134670.31044637723,
            "unit": "ns/iter",
            "extra": "iterations: 6452\ncpu: 134668.76937383757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198611.36576411265,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 198612.55162918768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263486.57488602167,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 263482.5324447561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 323458.79029200954,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 323443.3447098974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389460.1125055656,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 389431.06230389944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449014.6136245393,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 448991.93967758695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 511082.5196711927,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 511047.4456840868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5814.833718013901,
            "unit": "ns/iter",
            "extra": "iterations: 120446\ncpu: 5814.494462248637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4895.746791214029,
            "unit": "ns/iter",
            "extra": "iterations: 141954\ncpu: 4895.703537765754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4892.836762037494,
            "unit": "ns/iter",
            "extra": "iterations: 143300\ncpu: 4892.457780879276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5010.242281254268,
            "unit": "ns/iter",
            "extra": "iterations: 139660\ncpu: 5010.138908778453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8528.213397772946,
            "unit": "ns/iter",
            "extra": "iterations: 81730\ncpu: 8527.600636241297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31492.007791407075,
            "unit": "ns/iter",
            "extra": "iterations: 25926\ncpu: 31490.0601712566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126120.71897268499,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 126113.61342042756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99438.89647935847,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 99432.83982280265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99445.36446309874,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 99444.26955812043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99085.55622467228,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 99085.17660683281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 252817.07766141876,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 252812.9726585228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2072568.5389755326,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2072532.5167037887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1702394.4076784074,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1702291.224862892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1673855.4690908298,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1673747.4545454555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1699683.533088143,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1699584.1911764722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1042836.368125712,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1042777.2166105508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1649194.8096086727,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1649104.8042704617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7124086.259999557,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7123927.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4065688.9825328207,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4065438.86462883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8941427.691057263,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8940642.276422774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29812.254782605716,
            "unit": "ns/iter",
            "extra": "iterations: 27600\ncpu: 29810.289855072442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126429.92526952266,
            "unit": "ns/iter",
            "extra": "iterations: 6771\ncpu: 126423.12804607867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101819.16732354522,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 101812.54030813335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99591.62361581181,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 99583.63445622979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100314.97821991437,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 100313.45655757033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254946.54489863536,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 254947.69874477148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2088157.977578395,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2088118.8340807124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1716977.5027624627,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716917.4953959486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1694055.0127040704,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1694021.9600725938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1718890.188539592,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1718861.5526802116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1053361.0386363275,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1053353.8636363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1669509.58497326,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1669454.5617173547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7158294.929998874,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7157751.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4086103.6739126733,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4085870.8695652173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29570.900695762077,
            "unit": "ns/iter",
            "extra": "iterations: 28458\ncpu: 29546.573898376577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 120502.73670813715,
            "unit": "ns/iter",
            "extra": "iterations: 7072\ncpu: 120498.67081447918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99139.29622728405,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 99135.7126222634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98754.19275565339,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 98750.22129047292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99999.28652015448,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 99993.57151251653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251932.22092358925,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 251913.85404789122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2076921.715555626,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2076838.6666666712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1706405.8427788632,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1706329.7989031079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1685899.862567687,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1685775.4068716073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1717799.88397786,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1717688.2136279966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1060592.8730158322,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 1060561.9047619035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1658203.637010644,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1658089.6797152983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2978.4180269363987,
            "unit": "ns/iter",
            "extra": "iterations: 235370\ncpu: 2978.3978416960535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15405.375459690149,
            "unit": "ns/iter",
            "extra": "iterations: 45411\ncpu: 15404.917310783689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12182.685889612005,
            "unit": "ns/iter",
            "extra": "iterations: 57362\ncpu: 12182.212963285847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11689.361507042488,
            "unit": "ns/iter",
            "extra": "iterations: 59985\ncpu: 11688.707176794198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9933.326990258136,
            "unit": "ns/iter",
            "extra": "iterations: 70418\ncpu: 9932.843875145607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58110.14772447036,
            "unit": "ns/iter",
            "extra": "iterations: 12151\ncpu: 58107.15167475935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134943.7662813053,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 134937.86127167635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35345.195640105354,
            "unit": "ns/iter",
            "extra": "iterations: 19817\ncpu: 35345.460967855775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35242.389728098584,
            "unit": "ns/iter",
            "extra": "iterations: 19860\ncpu: 35240.63947633454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35237.68475308882,
            "unit": "ns/iter",
            "extra": "iterations: 19886\ncpu: 35235.612994066214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70321.5993751289,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 70318.46401935046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63828.66630197214,
            "unit": "ns/iter",
            "extra": "iterations: 10968\ncpu: 63829.35813275023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20369.33897612518,
            "unit": "ns/iter",
            "extra": "iterations: 34262\ncpu: 20368.51614033036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90698.67090247874,
            "unit": "ns/iter",
            "extra": "iterations: 7712\ncpu: 90695.17634854896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73721.14167016432,
            "unit": "ns/iter",
            "extra": "iterations: 9508\ncpu: 73719.09970551226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73384.09980765579,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 73379.40799316076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75841.13430086615,
            "unit": "ns/iter",
            "extra": "iterations: 9233\ncpu: 75840.89678327697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145606.72462563368,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 145605.94841929985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 590950.6349072519,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 590944.6880269903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 501448.40700996964,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501435.83690987166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494777.79025426245,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494764.6186440695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 496897.84528030694,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496884.4570617441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335339.958752988,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 335332.42206235416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 487449.05509063014,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487444.9093444967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19751.78495714899,
            "unit": "ns/iter",
            "extra": "iterations: 35472\ncpu: 19751.150202977045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94850.59445124716,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 94848.89160886766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75156.88433839129,
            "unit": "ns/iter",
            "extra": "iterations: 9303\ncpu: 75156.39041169408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74467.68156721887,
            "unit": "ns/iter",
            "extra": "iterations: 9418\ncpu: 74464.21745593625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75117.58379887755,
            "unit": "ns/iter",
            "extra": "iterations: 9308\ncpu: 75116.34078212408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142065.5699492383,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 142066.37563451775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 588296.2859574577,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 588284.68085107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 500483.69142855017,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 500478.92857142934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 492184.02510757203,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 492168.4361549456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 502833.7022955903,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 502829.34002869506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340437.3378906311,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 340432.1289062484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 492195.4122190921,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 492183.8483146114 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}