window.BENCHMARK_DATA = {
  "lastUpdate": 1702503253959,
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
      }
    ]
  }
}