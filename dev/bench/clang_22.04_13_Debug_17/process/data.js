window.BENCHMARK_DATA = {
  "lastUpdate": 1702489593681,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 22.04 Debug c++-17": [
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
        "date": 1702489591318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15491.904627340557,
            "unit": "ns/iter",
            "extra": "iterations: 45296\ncpu: 15491.939685623454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125464.22446255307,
            "unit": "ns/iter",
            "extra": "iterations: 6745\ncpu: 125451.10452186807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236332.95292516518,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 236324.81632653065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345124.9988004866,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 345104.31827269087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452443.965626673,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 452416.1819143311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561494.8475016331,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 561483.7118754057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539239.1220000264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539185.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 627156.4390000321,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627090.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713664.5340557502,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 713641.4860681121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12418.655973842324,
            "unit": "ns/iter",
            "extra": "iterations: 56580\ncpu: 12417.256981265475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10290.65232207687,
            "unit": "ns/iter",
            "extra": "iterations: 68667\ncpu: 10290.369464225898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10354.048212222693,
            "unit": "ns/iter",
            "extra": "iterations: 67514\ncpu: 10353.360784429893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10267.282090317134,
            "unit": "ns/iter",
            "extra": "iterations: 68315\ncpu: 10266.739369099014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16806.839980800938,
            "unit": "ns/iter",
            "extra": "iterations: 41670\ncpu: 16805.927525797975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56613.99709080777,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 56611.352774122075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258901.8703187883,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 258884.80346641925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200929.47982060962,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 200921.85508614584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199165.16683725067,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 199145.57318321377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197866.93469671195,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 197855.00813386022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 448661.553104172,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 448621.395587479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3993187.0643776334,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3993004.291845493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3178807.1433446445,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178699.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3218600.0379307065,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3218333.44827587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3183774.106164165,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3183690.7534246477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813726.494117641,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813594.7058823516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3097761.220735788,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3097662.207357856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11701455.186813131,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11700624.175824152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5472015.3200003095,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5471834.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15268580.02898405,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15267699.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54009.074099997175,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54008.28000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 296120.117219928,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 295868.3609958512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233479.92687584803,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 233474.870395635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232185.18804111774,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 232172.6731601728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231087.7488559844,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 231080.96904441388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 482373.5000000256,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 482357.61957731005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4069290.5789473783,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4069079.8245613966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3227869.628472509,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3227809.7222222276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3236896.1909720423,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3236762.15277777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3250392.7456442867,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3250314.2857142896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1844051.3492063498,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843925.0000000072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3146775.472973064,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146589.864864866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11888013.887640769,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11887595.50561793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5290457.069999093,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5290249.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53289.61632653177,
            "unit": "ns/iter",
            "extra": "iterations: 15435\ncpu: 53287.96242306457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 268806.5964857505,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 268787.6372764358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202922.1395017807,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202906.73784104365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205472.8434635843,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 205464.4235407637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198204.93187122792,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 198196.73355109742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 432138.24348695535,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 432113.4268537073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4035222.3852811945,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4034995.670995685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3200598.5171231446,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3200417.4657534244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3199967.7876711595,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3199761.986301375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3200078.4810998393,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3199997.2508591125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1814757.570312686,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814677.9296874944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3120530.171141023,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3120423.489932881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5971.366399863688,
            "unit": "ns/iter",
            "extra": "iterations: 117440\ncpu: 5971.19124659402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35452.967061323674,
            "unit": "ns/iter",
            "extra": "iterations: 19764\ncpu: 35453.096539162274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25840.018199270373,
            "unit": "ns/iter",
            "extra": "iterations: 27089\ncpu: 25839.04167743349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27874.836843575256,
            "unit": "ns/iter",
            "extra": "iterations: 25117\ncpu: 27874.435641199012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21441.204362768392,
            "unit": "ns/iter",
            "extra": "iterations: 32594\ncpu: 21439.970546726494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129754.02723230864,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129746.64690626142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 270781.7419604467,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 270761.4877954254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67712.23993778053,
            "unit": "ns/iter",
            "extra": "iterations: 10286\ncpu: 67708.6428154764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67599.47492766975,
            "unit": "ns/iter",
            "extra": "iterations: 10370\ncpu: 67598.48601735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67346.26509615264,
            "unit": "ns/iter",
            "extra": "iterations: 10400\ncpu: 67342.6730769222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135319.67057214075,
            "unit": "ns/iter",
            "extra": "iterations: 5121\ncpu: 135312.63425112344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119620.37662339018,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 119607.26247436715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39297.258218332674,
            "unit": "ns/iter",
            "extra": "iterations: 17826\ncpu: 39296.8416919102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197306.94165726218,
            "unit": "ns/iter",
            "extra": "iterations: 3548\ncpu: 197296.3359639205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159258.49931601027,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 159256.8171454629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157886.3048478149,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 157876.18940247854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158950.46503179288,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 158946.11716621133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 282141.02376157796,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 282131.3733387023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1155285.9917356193,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1155263.8016528946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 944714.4056604389,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 944692.3180592904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 956043.441860502,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 956005.7455540444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 952855.1634878392,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 952802.9972751999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 622727.5222420183,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 622698.487544487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 948300.3709239375,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 948212.7717391426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40107.30145126821,
            "unit": "ns/iter",
            "extra": "iterations: 17502\ncpu: 40105.08513312799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195013.20384295055,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 194994.01280980423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158490.18686296788,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 158480.20385050916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159701.76225211198,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159685.50262138137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157930.06564747702,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157928.75449640444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 278324.32763419964,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278305.76540755486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1142876.9395424705,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1142849.83660131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 939287.6632201589,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 939243.7223042868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 949398.4435374885,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 949362.3129251737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 947279.2513441442,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 947258.198924714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605431.7235702437,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 605396.7937608365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 932590.3355526356,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932568.0426098553 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}