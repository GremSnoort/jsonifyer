window.BENCHMARK_DATA = {
  "lastUpdate": 1705958300420,
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
        "date": 1702492199430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15852.10030119766,
            "unit": "ns/iter",
            "extra": "iterations: 44157\ncpu: 15851.670176868902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127331.07360483034,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 127330.66365007544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239715.46213378516,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 239711.19402985077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349027.9914876433,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 349023.55087150366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459229.0587923766,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 459211.01694915286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569330.4675835009,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 569315.2586771448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 547397.3229999843,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547385.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 635612.2299999925,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635597.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 725242.1549295973,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 725228.9514866984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12341.611307975918,
            "unit": "ns/iter",
            "extra": "iterations: 57287\ncpu: 12341.32525703912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10075.497273828632,
            "unit": "ns/iter",
            "extra": "iterations: 69328\ncpu: 10075.090872374793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10162.491960761992,
            "unit": "ns/iter",
            "extra": "iterations: 68912\ncpu: 10162.372300905505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10198.391877360646,
            "unit": "ns/iter",
            "extra": "iterations: 68820\ncpu: 10198.004940424318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16760.477893881194,
            "unit": "ns/iter",
            "extra": "iterations: 41821\ncpu: 16759.508380956955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57545.04353912765,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 57543.20313593737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252295.63829787538,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 252280.053191489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193191.93940763848,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 193182.45534704978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 191127.977533139,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 191116.7602785888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 188356.0372422998,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 188348.52582575916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 471039.7824919392,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 471011.7078410311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3933306.584745653,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3933149.1525423788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3141893.431972744,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3141711.224489792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3133417.3513513207,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3133248.3108108123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3149172.44594618,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148990.8783783764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1819738.7874015851,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1819654.5275590522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3068183.2425248753,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3068031.561461796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11537666.440859852,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11536941.93548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5233564.600000591,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5233281.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15125154.357143141,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15124034.285714265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53595.37230000342,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53594.38999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 287765.8165997094,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 287751.8072289155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224241.1478965114,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 224230.5722498032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227766.4770618048,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 227751.9756032882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 222566.91824553104,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 222558.88917726476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 491109.6400226859,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 491086.67800453666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4033137.8913042895,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4032933.478260874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3209833.8546710503,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3209723.8754325146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3192102.8969069226,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3191945.360824733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3201431.3333335235,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201326.1168384943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1858794.5551102902,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1858691.5831663336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3123722.5973155093,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3123609.7315436103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11929955.449438259,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11929261.797752755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5275145.159999966,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5274872.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53819.89971834193,
            "unit": "ns/iter",
            "extra": "iterations: 15267\ncpu: 53820.141481627084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 257223.30228365836,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 257218.59975961514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196939.26208650926,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 196938.14480684692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200297.4259910885,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 200293.43185550027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 191155.01030697813,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 191150.16804839787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 450381.7405293139,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 450370.42034250236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3971936.889361325,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3971863.4042553175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3163599.1314878142,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3163587.197231841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3144703.720538634,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144623.569023585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3158376.891156663,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3158331.9727891283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1817279.3588236095,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1817251.3725490202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3080946.927152039,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3080869.8675496727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5924.366013293537,
            "unit": "ns/iter",
            "extra": "iterations: 117952\ncpu: 5924.343800868173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34947.99645354815,
            "unit": "ns/iter",
            "extra": "iterations: 20020\ncpu: 34947.55244755272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27581.69811097655,
            "unit": "ns/iter",
            "extra": "iterations: 25410\ncpu: 27581.397087760823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27532.388034459607,
            "unit": "ns/iter",
            "extra": "iterations: 25423\ncpu: 27531.95924949875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20728.7081273132,
            "unit": "ns/iter",
            "extra": "iterations: 33775\ncpu: 20728.580310880974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 134641.70737325712,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134642.28110599073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269654.2340015491,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 269647.91827293835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67721.41096949007,
            "unit": "ns/iter",
            "extra": "iterations: 10356\ncpu: 67721.83275395932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67307.29751033486,
            "unit": "ns/iter",
            "extra": "iterations: 10403\ncpu: 67305.08507161388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67407.00346253463,
            "unit": "ns/iter",
            "extra": "iterations: 10397\ncpu: 67406.51149370083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135647.4837082821,
            "unit": "ns/iter",
            "extra": "iterations: 5156\ncpu: 135645.19006982096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125602.02402293764,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 125596.73718178559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40111.14738228497,
            "unit": "ns/iter",
            "extra": "iterations: 17458\ncpu: 40110.551036773795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 202773.43381504275,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 202772.22543352508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161586.65320719246,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 161587.51730503028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159950.449232193,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 159948.1090992441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161945.11374188156,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 161938.44011142035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 278001.91226677474,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277989.678443831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1152802.7990115539,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1152735.0906095526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 943911.9649123767,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 943878.1376518134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 949452.3337857134,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 949394.436906378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 950811.8817935109,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 950795.652173911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 617720.0450530428,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 617688.9575971668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 941897.7163977675,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 941857.123655926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40336.29044711154,
            "unit": "ns/iter",
            "extra": "iterations: 17356\ncpu: 40334.54713067556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195998.57250630873,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 195987.6781223797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160144.19775694274,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 160138.24673838553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158557.68757075412,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 158550.6452343215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159239.78672123174,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 159231.8781264191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273951.7355242723,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 273933.29420970473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1141955.3066884005,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1141903.2626427584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 939170.0120967512,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 939149.8655913841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 944223.1862348652,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944168.6909581668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 941130.2163978504,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 941090.8602150406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 612964.9465380755,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 612968.1858019229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 937132.7727272026,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 937125.6684491953 ns\nthreads: 1"
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
        "date": 1702503248296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15834.29812946428,
            "unit": "ns/iter",
            "extra": "iterations: 44105\ncpu: 15833.671919283528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126302.21442553782,
            "unit": "ns/iter",
            "extra": "iterations: 6641\ncpu: 126301.17452190936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238174.0115893994,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 238075.11037527598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345026.8950343283,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 345019.05530884117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 457051.89700472774,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 457034.4193378876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 566992.9378678788,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 566962.3937213868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550343.9170000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550312.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623707.5779999942,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623678.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 718748.2843822887,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 718712.8205128195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12180.004748934338,
            "unit": "ns/iter",
            "extra": "iterations: 57276\ncpu: 12179.672113974433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10213.620122784749,
            "unit": "ns/iter",
            "extra": "iterations: 68738\ncpu: 10212.700398615028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10275.265237543508,
            "unit": "ns/iter",
            "extra": "iterations: 69040\ncpu: 10274.623406720744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10296.440341533698,
            "unit": "ns/iter",
            "extra": "iterations: 68163\ncpu: 10295.767498496254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16924.035365883392,
            "unit": "ns/iter",
            "extra": "iterations: 41311\ncpu: 16923.025344339258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57035.40833391347,
            "unit": "ns/iter",
            "extra": "iterations: 14351\ncpu: 57031.72601212461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 246355.72748200817,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 246343.42446043188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193118.26139197953,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 193107.29993198824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192327.30329719448,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 192315.58265582644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190402.7217877066,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 190385.31843575384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 465304.35904254863,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 465293.8297872332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3959770.553191486,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3959466.8085106285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3194471.6185567887,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3194241.924398632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3190559.893835649,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3190369.8630137034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3145673.506756913,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145503.0405405513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1820901.1807465784,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1820785.4616895844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3084945.960132922,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084775.7475082995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11600360.22826059,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11599840.217391288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5242778.459999613,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5242561.000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15235230.246376438,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15234152.173913062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53457.23679999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53451.36000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286676.3704568146,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 286659.58652884304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224592.22283319643,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 224577.79523435485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224063.72345421425,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 224051.0827028442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 219358.1557376997,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 219354.68750000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 491371.4781869602,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 491367.3654390928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4039914.93478276,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4039854.782608674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3239456.447916764,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3239345.486111119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3229167.467128156,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3229139.446366781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3214800.5551724853,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3214736.8965517352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867357.4036144607,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1867297.1887550275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3138001.53378375,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3137930.4054054157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11867791.066666516,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11867495.555555508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5377151.980000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5376903.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52980.24890237758,
            "unit": "ns/iter",
            "extra": "iterations: 15488\ncpu: 52977.66012396693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248681.33787307993,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 248665.72008113735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 195382.4004111407,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 195371.33394244057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198371.9487357876,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 198369.86778009788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190346.12798749414,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 190340.65222246983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 447683.53312627965,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 447670.0310559019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3987957.952789493,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3987836.051502145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3219795.8546714,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3219726.98961938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3220480.358620809,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3220418.2758620745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164225.9795918576,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164178.571428585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1813240.6445312554,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1813210.7421874877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3104746.0066890325,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3104647.1571906293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5978.684061723147,
            "unit": "ns/iter",
            "extra": "iterations: 117428\ncpu: 5978.635419150464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34288.511907096865,
            "unit": "ns/iter",
            "extra": "iterations: 20408\ncpu: 34288.22030576273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26423.08030188806,
            "unit": "ns/iter",
            "extra": "iterations: 26500\ncpu: 26422.60754716977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27419.822551627025,
            "unit": "ns/iter",
            "extra": "iterations: 25568\ncpu: 27419.356226533066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21534.015635560074,
            "unit": "ns/iter",
            "extra": "iterations: 32554\ncpu: 21533.836087731073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 133282.66698399864,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133281.5689261218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268264.3162131168,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 268261.97776925896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68515.4609061588,
            "unit": "ns/iter",
            "extra": "iterations: 10219\ncpu: 68513.37704276327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69945.35866351394,
            "unit": "ns/iter",
            "extra": "iterations: 10146\ncpu: 69944.20461265587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67652.23935758183,
            "unit": "ns/iter",
            "extra": "iterations: 10336\ncpu: 67651.04489164116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134528.70500963915,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 134524.75915221832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125354.39474155355,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 125351.38615632425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39858.97780686349,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 39858.0435895977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201147.1158466697,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 201145.42334095822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160752.60596330694,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 160748.94495412795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158534.4036676491,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 158531.5825220726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159445.77792976028,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 159442.1796625646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276249.5860704171,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 276244.75662841316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1160390.8063439343,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1160380.801335536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 963157.0027473336,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 963148.6263736292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 959856.5246574566,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 959825.4794520412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 960205.7805213119,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 960154.3209876473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 625511.9052725763,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 625506.702412875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 948454.6445365592,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 948446.6113416404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39989.90857143055,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 39989.24675324688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198489.0510348966,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 198484.06577827994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159798.32206487827,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159795.5002284154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158843.45985069842,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158838.13616828958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158126.08645598113,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 158117.67494356673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275135.9976406,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275121.03814392583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1147133.4761904213,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1147024.4663382678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 956132.0286885072,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 956067.6229508267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 952867.8472033517,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 952801.3642564852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 949852.6350067882,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 949804.8846675577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 615289.2647317001,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 615257.5197889224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 947499.9459458817,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 947400.945945948 ns\nthreads: 1"
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
        "date": 1705574895168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15636.606347935875,
            "unit": "ns/iter",
            "extra": "iterations: 44928\ncpu: 15635.92191951567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125424.66568352413,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 125425.55670255124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234782.8628509657,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 234779.42764578827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340614.73335974343,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 340620.9191759112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 448846.7875647598,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 448833.41968911927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554733.5755441246,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 554718.3098591547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534555.5179999337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534557.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 641650.2840000931,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641651.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 712769.7801526234,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 712765.1908396952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12438.52285637905,
            "unit": "ns/iter",
            "extra": "iterations: 56155\ncpu: 12438.625233728053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10298.36348115331,
            "unit": "ns/iter",
            "extra": "iterations: 67943\ncpu: 10298.310348380272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10313.168130636794,
            "unit": "ns/iter",
            "extra": "iterations: 67852\ncpu: 10313.112362200098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10210.227351699865,
            "unit": "ns/iter",
            "extra": "iterations: 68493\ncpu: 10210.279882615732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16818.827699044043,
            "unit": "ns/iter",
            "extra": "iterations: 41561\ncpu: 16818.045764057657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56403.92936470193,
            "unit": "ns/iter",
            "extra": "iterations: 14497\ncpu: 56401.365799820676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249590.18081071577,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 249582.58967629058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193291.56119675527,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 193293.0870353585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194925.85779606889,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 194927.36625514418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191670.63404733824,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191670.41713641502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 465984.58963517006,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 465987.14965626603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3919739.8828450805,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3919346.8619246734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3105656.716666469,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3105635.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3088140.813953558,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3088093.0232558125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3057474.648026327,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3057327.960526321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1787982.7388781747,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1787929.4003868497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3016857.8538961527,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3016735.7142857155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11327247.436169844,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11326940.42553192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5144790.599999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5144161.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14665232.680554949,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14664502.777777769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54424.72329999646,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54420.28000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294512.5484423056,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 294501.1639849371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230482.87922184877,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 230479.81626587457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226007.24690383783,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 226006.93017127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 219912.45246069744,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 219901.1079618648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 492119.55884022644,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 492095.9067652061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3968090.66239323,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3968035.4700854504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3157294.833333414,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3157358.8435374144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3136053.3141889228,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3136080.405405401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3124358.687919603,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3124352.013422824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1825163.1196079087,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1825128.6274509854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3052832.9013157263,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3052786.1842105244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11626300.326087324,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11626353.260869602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5247292.199999265,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5246818.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52253.74620002526,
            "unit": "ns/iter",
            "extra": "iterations: 15658\ncpu: 52252.49712607003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 250999.95077643823,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 250990.74128332778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196222.27632184172,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 196220.5057471263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197317.13011494852,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 197310.52873563103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192282.03752261362,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 192281.39692585895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 448648.3041904012,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 448632.02276254504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3931114.8860760336,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3930948.101265838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3136757.198653225,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3136676.4309764253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3118857.602006631,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3118673.9130434664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3098499.059800501,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3098437.873754156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1786051.729729881,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1785977.9922779822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3035493.915032686,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3035371.895424825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6014.209873068522,
            "unit": "ns/iter",
            "extra": "iterations: 117228\ncpu: 6014.085372095365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34383.25519171148,
            "unit": "ns/iter",
            "extra": "iterations: 20369\ncpu: 34382.13952574985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27216.27947241205,
            "unit": "ns/iter",
            "extra": "iterations: 25702\ncpu: 27215.566881954717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27548.522268675493,
            "unit": "ns/iter",
            "extra": "iterations: 24878\ncpu: 27546.752150494427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21668.300517813503,
            "unit": "ns/iter",
            "extra": "iterations: 32251\ncpu: 21668.149824811604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130222.8159417477,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 130220.62721672693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265030.39725036133,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 265021.63531114534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67154.51967747947,
            "unit": "ns/iter",
            "extra": "iterations: 10418\ncpu: 67155.85525052682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66397.66808833173,
            "unit": "ns/iter",
            "extra": "iterations: 10551\ncpu: 66397.42204530383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65848.51141166335,
            "unit": "ns/iter",
            "extra": "iterations: 10647\ncpu: 65848.8306565231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132766.681645813,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132769.07470610537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123786.47657392906,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 123784.0043923858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39889.06672379044,
            "unit": "ns/iter",
            "extra": "iterations: 17505\ncpu: 39888.91745215582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195149.2026763225,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 195142.54251463307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159924.23299862878,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 159921.74806024562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156407.72012509315,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 156398.68215322957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159340.30188678432,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 159333.03023414165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276866.77056961873,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 276847.50791138795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1139779.6260161255,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1139700.4878048848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 943699.6837146698,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 943662.9878869443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 935670.3404538397,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 935653.2710280393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 931692.5186170765,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931690.0265957355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 599017.8445772721,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 598982.5789923087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 925055.7010581681,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925048.4126984064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40049.35460830884,
            "unit": "ns/iter",
            "extra": "iterations: 17501\ncpu: 40048.66579052623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197794.9248799967,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197796.78057045958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158051.71425344088,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 158048.45267675616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156204.2415102675,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156203.77569258137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157525.61867266725,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 157521.57480314965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271915.44024913956,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 271903.8147138986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1136627.2724305475,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1136597.553017926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936246.1802403962,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 936195.8611482034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 926420.316622714,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 926369.2612137182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 916913.5971127953,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 916852.2309711281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 592519.2478777983,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 592504.4991510988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 916890.5947020396,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 916895.231788069 ns\nthreads: 1"
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
        "date": 1705773265339,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15322.083589360662,
            "unit": "ns/iter",
            "extra": "iterations: 45568\ncpu: 15322.147120786516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123446.41947729544,
            "unit": "ns/iter",
            "extra": "iterations: 6849\ncpu: 123440.21024967151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232419.01044457336,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 232419.68398500266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339045.89885871543,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 339034.71074380167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446370.38728325506,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 446371.72884918575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553299.1825143264,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 553292.4058710913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533512.0540000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533449.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616208.4439999944,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616202.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 703555.2653992419,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 703523.4980988586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12183.232099236147,
            "unit": "ns/iter",
            "extra": "iterations: 57721\ncpu: 12182.188458273404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10121.942455409358,
            "unit": "ns/iter",
            "extra": "iterations: 69129\ncpu: 10121.339813971006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10161.08556312916,
            "unit": "ns/iter",
            "extra": "iterations: 68803\ncpu: 10160.189235934498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10105.844087033396,
            "unit": "ns/iter",
            "extra": "iterations: 69077\ncpu: 10105.35055083456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16837.71957722788,
            "unit": "ns/iter",
            "extra": "iterations: 41630\ncpu: 16836.99495556089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57293.56468691023,
            "unit": "ns/iter",
            "extra": "iterations: 14261\ncpu: 57290.79307201459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 261338.81171419192,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 261315.2407237046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200274.87869544319,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 200265.60300328516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200454.9587048248,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 200439.25387142255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198331.07401392245,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 198322.48259860807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 460319.7427669474,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 460295.89689637034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3880143.59414233,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3880097.071129704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3094088.655518552,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3093939.464882947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3069621.0165015836,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3069503.300330029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3067556.841584195,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3067420.792079209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1757481.9942965647,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1757488.0228136876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3007912.6051781224,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3007828.155339811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11313927.842105076,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11313472.631578939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5177535.969999667,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5177569.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14801352.86111148,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14800654.166666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53082.663500003946,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53080.47000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 302024.1769041734,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 302022.744822745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234139.29912901644,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 234125.74850299433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232338.61115623493,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 232336.44733279178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227277.55215540584,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 227273.60298031024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 484087.7926966414,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 484076.74157303164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3978249.0982905827,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3978209.401709426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3161962.3741497886,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3161880.9523809664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3112653.2943144687,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3112527.7591973264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3130146.0100671984,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130101.006711406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1789481.84749029,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1789349.6138996095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3052494.039215856,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052278.4313725503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11552875.456521736,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11551496.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5186603.590000232,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5186628.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52513.35396071437,
            "unit": "ns/iter",
            "extra": "iterations: 15578\ncpu: 52512.819360636895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263802.49492774945,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 263798.6781432525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202911.32384342302,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202899.09845788832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205508.0585975056,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 205496.4697406339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197605.63481705412,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 197595.5488231175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 447990.24315949314,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 447936.44811564067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3913949.3823530255,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3913694.9579831995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3114007.8528428194,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3113779.2642140593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3069497.7269734493,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3069458.5526315733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3109920.2145212824,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3108680.1980198035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1750538.9548024002,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1750410.9227871983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3007443.7411004393,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3007156.6343042064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6044.031643283789,
            "unit": "ns/iter",
            "extra": "iterations: 116328\ncpu: 6043.391960662967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34664.93645054427,
            "unit": "ns/iter",
            "extra": "iterations: 20189\ncpu: 34661.02332953604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25719.845419847123,
            "unit": "ns/iter",
            "extra": "iterations: 27248\ncpu: 25717.366412213905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26973.188105862646,
            "unit": "ns/iter",
            "extra": "iterations: 25996\ncpu: 26970.63009693783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21364.263368453598,
            "unit": "ns/iter",
            "extra": "iterations: 32745\ncpu: 21362.033898305028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130324.84853024417,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 130311.53342070864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264652.3351003325,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 264638.7731919764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66325.12381673856,
            "unit": "ns/iter",
            "extra": "iterations: 10564\ncpu: 66324.43203332109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65429.681779939725,
            "unit": "ns/iter",
            "extra": "iterations: 10697\ncpu: 65423.28690286902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65381.23804175059,
            "unit": "ns/iter",
            "extra": "iterations: 10683\ncpu: 65373.986707853575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131110.70173798257,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 131099.17772378947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122366.62979841487,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 122354.4259421581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40104.61640772722,
            "unit": "ns/iter",
            "extra": "iterations: 17443\ncpu: 40100.65355730055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197545.52813119392,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 197530.36471586008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159992.25900436143,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 159987.56595549587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157159.62550517023,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157154.24337673816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159355.8465042084,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159344.0218629005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 275406.7854889449,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 275403.0362776033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1129389.1211631717,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1129290.63004846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934056.8077436638,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933951.935914547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917947.9947505716,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 917859.0551181079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 924123.0278145386,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 924075.8940397287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 595773.2081911019,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 595753.8395904416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920703.5361367343,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920605.2562417992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39648.96625836344,
            "unit": "ns/iter",
            "extra": "iterations: 17634\ncpu: 39645.78654871307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195713.939792788,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 195698.73984878365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159158.83079025164,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159144.3634707365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156967.89055505954,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156948.38854073518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156683.43432536843,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 156665.51801297782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273642.97569580236,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 273622.6577812617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1124310.572580608,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1124180.1612903194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 927801.0662251139,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 927766.4900662255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 917749.0459318341,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 917669.5538057766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 917600.1732283522,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 917491.4698162735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 595190.5926870651,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 595101.6156462551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 914059.7391304228,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 913950.0658761566 ns\nthreads: 1"
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
        "date": 1705774760877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15245.812482269295,
            "unit": "ns/iter",
            "extra": "iterations: 45825\ncpu: 15245.03873431533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123892.04015239926,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 123885.11137162952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232947.78793566956,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 232943.35120643437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341411.2383949725,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 341404.56333595613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446972.9701952766,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 446960.3802672148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553631.4578544204,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 553598.659003831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 532287.1550000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532277.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616392.7190000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616349.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714205.5864432553,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 714153.0083777612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12245.3228066486,
            "unit": "ns/iter",
            "extra": "iterations: 57093\ncpu: 12244.637696390088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10192.14671803412,
            "unit": "ns/iter",
            "extra": "iterations: 68526\ncpu: 10191.873157633607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10253.879377489004,
            "unit": "ns/iter",
            "extra": "iterations: 68304\ncpu: 10253.534200046844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10187.728278729714,
            "unit": "ns/iter",
            "extra": "iterations: 68769\ncpu: 10187.533627070337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16861.276824602985,
            "unit": "ns/iter",
            "extra": "iterations: 41557\ncpu: 16861.041461125693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57204.13593521057,
            "unit": "ns/iter",
            "extra": "iterations: 14323\ncpu: 57202.6600572506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259738.21046228686,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 259731.29562043824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200194.3078007546,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 200182.04887218063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200012.47902507475,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 200007.405671432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198643.0283985102,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 198637.89571694552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 446188.11230221007,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 446171.41398672696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3910637.739495838,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3910601.260504208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3153005.9489795486,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3152918.3673469354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3166430.013605429,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166353.4013605476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3132832.7871622182,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3132742.5675675645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1802172.47859923,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1802112.6459143967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3055455.930693104,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3055277.887788774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11589717.677419422,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11581960.215053795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5236399.679999976,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5236143.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14829445.760563456,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14828576.05633805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53567.68020000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53566.909999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298602.65416665754,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 298595.8680555561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232425.64670820505,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 232418.6399349764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233631.85982581333,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 233618.91671203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227829.0317164109,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 227822.5479744146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470605.2440087079,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 470589.324618736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3973874.645299168,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3973746.58119659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3222889.4791666265,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3222757.638888894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3214073.9169550356,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3213975.7785467254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3188477.616438322,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188411.301369866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1824651.0395256525,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1824567.3913043386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3109540.1672241283,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109492.6421404574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11716283.615384612,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11715709.89010985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5228241.369999864,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5227977.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52798.472750724664,
            "unit": "ns/iter",
            "extra": "iterations: 15505\ncpu: 52796.03353756835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 265325.015146844,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 265317.7743431219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202498.55074521012,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 202494.2985568964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205964.2960115352,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 205961.67707832842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197071.3239015389,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 197063.03197607596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 430433.00597610394,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 430420.06972111505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3933810.721519024,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3933678.9029535847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3160856.3754264703,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3160713.3105802205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3190267.7808219567,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3190176.3698630086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3144969.381756829,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3144842.5675675776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1799876.4418604507,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1799788.178294568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3070248.6854303987,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3070014.5695364103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6046.41855978676,
            "unit": "ns/iter",
            "extra": "iterations: 115594\ncpu: 6045.917608180348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34902.11902385438,
            "unit": "ns/iter",
            "extra": "iterations: 20038\ncpu: 34899.12665934739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25921.060173192505,
            "unit": "ns/iter",
            "extra": "iterations: 27022\ncpu: 25919.043742135935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27706.36392442638,
            "unit": "ns/iter",
            "extra": "iterations: 25247\ncpu: 27704.816413831355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21573.822324865338,
            "unit": "ns/iter",
            "extra": "iterations: 32475\ncpu: 21573.15473441104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128889.27159132209,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128884.80338110897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 253759.92675850567,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 253738.75997099187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67183.98332374729,
            "unit": "ns/iter",
            "extra": "iterations: 10434\ncpu: 67159.59363618988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67119.94948237235,
            "unit": "ns/iter",
            "extra": "iterations: 10432\ncpu: 67117.61886503042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66584.19780639668,
            "unit": "ns/iter",
            "extra": "iterations: 10485\ncpu: 66581.32570338584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127685.51312909099,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127680.34281546278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124683.64906332757,
            "unit": "ns/iter",
            "extra": "iterations: 5605\ncpu: 124681.57002676044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39915.98743432169,
            "unit": "ns/iter",
            "extra": "iterations: 17508\ncpu: 39914.45624857227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199363.55197949577,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 199354.45741953867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161015.46362176404,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 161009.06587101467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159922.34574954785,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 159919.72120658262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161784.18604114803,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161771.15784608232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274947.80416833196,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 274933.7003539098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1146801.04255325,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1146731.260229133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947845.8480325732,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 947792.8086838602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 953968.7452314808,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 953905.5858310584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940970.4037685896,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 940935.8008075404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607132.9601040449,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607096.0104076279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 935212.3377837207,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 935150.7343124086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39890.47950679274,
            "unit": "ns/iter",
            "extra": "iterations: 17518\ncpu: 39887.52711496708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197958.74851484585,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 197942.03677510863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160341.54775023338,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 160333.60881542804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 161145.3374021215,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 161141.5246430206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159910.9575051321,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 159905.57459447425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275155.3754413547,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 275144.3311102394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1133280.6699029158,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1133194.9838187778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 942100.7587600753,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 942085.8490566065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955121.3441733954,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 953795.9349593585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 938777.2882036647,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 938730.5630026837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 603249.537467682,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 603220.9302325567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 934854.6122995161,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 934821.7914438547 ns\nthreads: 1"
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
        "date": 1705777711583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15382.688107358916,
            "unit": "ns/iter",
            "extra": "iterations: 45381\ncpu: 15382.13349199004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124796.15434652827,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 124793.11058545239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234759.97674417534,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 234748.86425094653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342804.131746029,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 342792.26190476195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451811.7535101255,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 451796.09984399355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561109.24224808,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 561094.5090439274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536619.3959999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536614.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 622650.3379999712,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622628.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 724302.7357910778,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 724279.1858678962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12353.707179495657,
            "unit": "ns/iter",
            "extra": "iterations: 56731\ncpu: 12353.556256720289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10247.27305422628,
            "unit": "ns/iter",
            "extra": "iterations: 68122\ncpu: 10246.956930213451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10422.14775436471,
            "unit": "ns/iter",
            "extra": "iterations: 67531\ncpu: 10421.960284906194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10221.248540535786,
            "unit": "ns/iter",
            "extra": "iterations: 68347\ncpu: 10220.842173028806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17010.790777987462,
            "unit": "ns/iter",
            "extra": "iterations: 41119\ncpu: 17010.457452759067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55752.54547937587,
            "unit": "ns/iter",
            "extra": "iterations: 14644\ncpu: 55751.19502868065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248041.34516880164,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 248037.1653084979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197188.48228077946,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 197180.62244434367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192370.98710697013,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 192369.30558697126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190510.83224938536,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 190498.22830230973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 451739.6127197188,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 451714.42605998035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3935403.1610167697,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3935198.3050847477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3192156.251724288,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3192007.586206899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3148528.3322034143,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3148416.610169485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3138572.3108107373,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3138336.486486489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1799512.352140137,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1799443.7743190636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3067855.1357616335,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3067608.940397353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11458775.150538135,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11458070.967741933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5144542.340000271,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5144102.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14993956.971831184,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14993363.380281713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53427.579300000616,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53424.50000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285953.44281427574,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 285951.61720573535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 223650.99529904829,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 223641.44685296444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225789.81784777515,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 225784.69816272994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221446.39269050717,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 221436.34007257572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 479350.5085588355,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 479335.0082827159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4010097.6810346707,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4009996.9827586235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3242373.7412588736,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3242297.9020978957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3237774.3573880657,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3237658.7628865987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3177182.136518855,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3177064.1638225242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1814836.0653464743,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1814795.6435643635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3115868.4816054148,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3115789.6321070264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11721666.076923512,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11721118.681318684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5127669.23000072,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5127551.999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52267.0386722739,
            "unit": "ns/iter",
            "extra": "iterations: 15696\ncpu: 52266.583843017295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252210.1205278521,
            "unit": "ns/iter",
            "extra": "iterations: 3410\ncpu: 252202.55131964918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194531.2871107168,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 194524.48283700767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200582.77191749134,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 200575.71495546258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192372.67290351682,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 192357.98016230777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 440829.53915664525,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 440821.98795180756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3985414.0944204084,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3985274.248927047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3217511.550172899,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3217488.581314883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3167373.7925168136,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167241.4965986293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3151664.555932288,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151502.0338983103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1809058.1856865676,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1809026.6924564813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3086798.671096255,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086690.0332226004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6054.890914391845,
            "unit": "ns/iter",
            "extra": "iterations: 116624\ncpu: 6054.768315269607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34298.255943646844,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 34296.585461305294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26583.861863347298,
            "unit": "ns/iter",
            "extra": "iterations: 26329\ncpu: 26583.679592844288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27066.148095203636,
            "unit": "ns/iter",
            "extra": "iterations: 25882\ncpu: 27065.265435437756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21631.266847524643,
            "unit": "ns/iter",
            "extra": "iterations: 32438\ncpu: 21630.83112399039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129081.41012378217,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 129074.13633844533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 255093.56448664656,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 255088.8564121304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67640.51807462092,
            "unit": "ns/iter",
            "extra": "iterations: 10346\ncpu: 67638.81693408148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67184.35305398564,
            "unit": "ns/iter",
            "extra": "iterations: 10429\ncpu: 67179.5090612708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67298.64897605922,
            "unit": "ns/iter",
            "extra": "iterations: 10401\ncpu: 67297.36563791905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127221.63189404279,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127215.65674891134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124223.04588298433,
            "unit": "ns/iter",
            "extra": "iterations: 5623\ncpu: 124220.36279566036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39513.79432987012,
            "unit": "ns/iter",
            "extra": "iterations: 17601\ncpu: 39512.61291972009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197156.43971830758,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 197154.7887323946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159758.15400363467,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 159750.40946314827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156006.94133393362,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 155995.04795895537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159331.5160118212,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 159320.0090847156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 282185.275473217,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 282165.68666935107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1143476.0473083758,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1143440.1305057092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 948016.569877855,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 947988.738127546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 942289.853297463,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 942281.8304172293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 937975.359838282,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 937939.7574123858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609364.09424084,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 609352.2687609111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 934622.2140957832,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 934581.9148936047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39880.52552124691,
            "unit": "ns/iter",
            "extra": "iterations: 17554\ncpu: 39878.26706163894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196207.99609483418,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 196200.50209204905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158096.4733393615,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 158086.8730230451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157576.605535552,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157571.1971197114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156911.6547165409,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 156905.3327358295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 280453.6724137883,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 280451.32317562314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1136822.2491749686,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1136786.963696368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 945991.2395128162,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 945972.6657645381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 942094.7459677937,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 942049.059139786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924351.202113656,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924266.1822985454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 596069.1882997979,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 596057.4954296165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 925556.5454546232,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 925529.6791443677 ns\nthreads: 1"
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
        "date": 1705953492722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15344.193789006735,
            "unit": "ns/iter",
            "extra": "iterations: 46788\ncpu: 15343.491921005387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121626.98777505831,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 121619.12843376961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229728.93858725936,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 229714.83921982077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 333959.7915699823,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 333932.90796597063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444149.2742017124,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 444126.7612772432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546640.1060226266,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546643.1618569636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 523067.9350000855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523058.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 606784.3609999955,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606732.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 696191.7625468378,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 696173.632958801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12147.148184801426,
            "unit": "ns/iter",
            "extra": "iterations: 57597\ncpu: 12146.514575411931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10151.593170308557,
            "unit": "ns/iter",
            "extra": "iterations: 69110\ncpu: 10151.758066849963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10147.273776051195,
            "unit": "ns/iter",
            "extra": "iterations: 68998\ncpu: 10146.823096321647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10046.606798001774,
            "unit": "ns/iter",
            "extra": "iterations: 69491\ncpu: 10046.184397979587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16863.92413378332,
            "unit": "ns/iter",
            "extra": "iterations: 41560\ncpu: 16863.07507218479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59931.16674669372,
            "unit": "ns/iter",
            "extra": "iterations: 14579\ncpu: 59929.75512723785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250820.20368206338,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 250809.08825248393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 191161.06573930604,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 191159.6814000447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 191227.7227567604,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 191224.7482658319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 188482.922360248,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 188482.0097604264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 448134.3237998014,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 448113.1256384057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3893821.7833333514,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3893705.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3163597.6996586756,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3163489.761092152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3098945.1070233425,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3098727.759197321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3080643.7707641306,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3080604.9833887047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1786228.835589877,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1786214.1199226263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3031296.134426172,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3031271.147540978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11381295.500000838,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11381081.91489364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5007063.550000339,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5006993.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14766011.222222788,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14765848.611111151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53477.205999990925,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53476.85999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 282525.7999333109,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 282522.9409803269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222592.73116882372,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 222590.1038961033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223368.14874741287,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 223365.81419624205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217581.84299209982,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 217580.95481235592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 469851.1416168968,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 469846.0119370613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3954351.902127607,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3954343.829787224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3224700.58620693,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3224724.1379310326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3146531.327702577,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146414.1891892017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3133146.630872162,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3133039.5973154386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1813343.8336596347,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1813282.7788649779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3076844.6303630364,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076755.7755775573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11661994.206521157,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11661699.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5022920.910000721,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5022853.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52131.18793532706,
            "unit": "ns/iter",
            "extra": "iterations: 15649\ncpu: 52130.57064349164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248782.044327804,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 248773.98658500993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 192424.2154123663,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 192413.51960342453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193629.64028124104,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 193630.52846450353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 185954.66921897628,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 185950.86414351285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 427734.12518701045,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 427712.86783042393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3897533.0502091623,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897542.259414217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3158269.5254239636,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158178.9830508404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3102284.2300001234,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3102185.333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3083761.8466663724,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3083583.6666666456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1787458.1428571353,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1787402.8957528984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3024930.0292206053,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3024866.233766237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5961.54429462612,
            "unit": "ns/iter",
            "extra": "iterations: 117328\ncpu: 5961.379210418652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34224.8279049299,
            "unit": "ns/iter",
            "extra": "iterations: 20448\ncpu: 34223.45461658857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26328.481094097588,
            "unit": "ns/iter",
            "extra": "iterations: 26579\ncpu: 26327.73242033173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27297.00864890258,
            "unit": "ns/iter",
            "extra": "iterations: 25668\ncpu: 27296.224871435297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21275.72510178155,
            "unit": "ns/iter",
            "extra": "iterations: 32914\ncpu: 21275.06228352683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130307.34090063092,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130302.06550055898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261661.35166481795,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 261654.021698465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65470.182269243174,
            "unit": "ns/iter",
            "extra": "iterations: 10682\ncpu: 65464.4354989699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65711.10794219984,
            "unit": "ns/iter",
            "extra": "iterations: 10589\ncpu: 65710.2275946737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65101.523765238024,
            "unit": "ns/iter",
            "extra": "iterations: 10751\ncpu: 65100.40926425441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132007.59675593412,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132002.3576009057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122079.673423046,
            "unit": "ns/iter",
            "extra": "iterations: 5723\ncpu: 122073.6676568224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39785.522072609085,
            "unit": "ns/iter",
            "extra": "iterations: 17601\ncpu: 39783.41003352125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 193479.2994475036,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 193474.47513812434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157118.23242757056,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 157102.44778800974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156825.34846790766,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156819.235070453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157235.8419398341,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157229.8832510102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 273783.9241298398,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 273778.764176768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120899.9120000955,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120893.2799999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 935596.605614971,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935601.6042780825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 928351.6923076228,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 928337.6657824883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 925387.6380448812,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 925359.3130779373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602363.8798283153,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 602364.8068669455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918372.4139290992,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 918364.9145860738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39652.84264505801,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 39652.10788757902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195108.1231197646,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 195103.50974930322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156065.59156814578,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156064.6665179565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157057.42211731416,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 157059.901101373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157292.62228199837,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 157291.01098408678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271058.7824575,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 271058.8098918076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1113763.527822109,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1113720.0317965127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 943343.8867924544,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 943326.4150943321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 931837.6764313917,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 931820.1065246278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 914070.0521512779,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 914071.3168187795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 592941.9356477475,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 592943.1837425954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 913541.8455497094,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 913535.7329842887 ns\nthreads: 1"
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
        "date": 1705954940937,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15055.803951730897,
            "unit": "ns/iter",
            "extra": "iterations: 46157\ncpu: 15053.77082566025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121499.35393905135,
            "unit": "ns/iter",
            "extra": "iterations: 6956\ncpu: 121492.32317423807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 228655.0342465781,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 228635.90621707065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 332734.9204940167,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 332715.16788884596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 438710.73888889595,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 438687.87878787884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544057.9048215236,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 544016.0300563552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 527252.7710000076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527238.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 606066.6519999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606004.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 692170.7752809105,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692105.7677902621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12074.353480832175,
            "unit": "ns/iter",
            "extra": "iterations: 57989\ncpu: 12073.520840159343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10064.042072828239,
            "unit": "ns/iter",
            "extra": "iterations: 69451\ncpu: 10063.377057205782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10112.157023838934,
            "unit": "ns/iter",
            "extra": "iterations: 69257\ncpu: 10111.46743289489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10074.646698139994,
            "unit": "ns/iter",
            "extra": "iterations: 69476\ncpu: 10073.888824917958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16749.134363340534,
            "unit": "ns/iter",
            "extra": "iterations: 41812\ncpu: 16747.364392997213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58080.25886524997,
            "unit": "ns/iter",
            "extra": "iterations: 14100\ncpu: 58074.00000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251950.63930567043,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 251927.83171521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197288.35410896744,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 197270.7987072942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197023.87563220118,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 197014.3678160919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196446.09518321938,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 196435.9760313439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 439301.87857497646,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 439259.80933266453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3844169.355371727,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3843799.173553716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3115958.8959730747,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3115753.6912751696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3098751.4299999927,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3098567.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3071654.7052979846,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3071549.0066225184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1797943.094961139,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1797815.5038759687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3002843.9870130573,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3002500.9740259815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11367714.96808517,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11366851.063829804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5275767.8099999335,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5275340.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15051451.126759864,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15050701.40845072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55955.591600002204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55952.22 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290834.5203114598,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 290815.6398104263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229078.16795727878,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 229066.2216288381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230484.30895400333,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 230480.1559559021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226625.12440444014,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 226604.55267337296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462148.1109925497,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 462106.2433297749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3944668.317796325,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3944230.93220339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3166741.744897987,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166419.0476190452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3154044.986486595,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3153783.783783789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3128886.3892620075,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128561.744966454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1821229.4597249778,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1821105.893909627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3061868.8190790825,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061526.6447368413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11737366.208791712,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11736521.978022005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5224648.829999979,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5223778.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53243.69182144449,
            "unit": "ns/iter",
            "extra": "iterations: 15345\ncpu: 53239.87618116647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 254203.86436644333,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 254171.029149316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199157.68786533145,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 199140.47229366426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202860.96886142044,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 202841.73995721314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196940.04635609023,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 196924.46955719564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 420326.8604764194,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 420302.771025763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3889026.3833332974,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3888702.4999999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3128572.75838954,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128403.355704694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3109730.863333198,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109428.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3085960.1860465407,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3085774.4186046305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1792573.5606936042,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1792437.3795761114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3031868.4918566206,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3031516.9381107553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5897.306684108226,
            "unit": "ns/iter",
            "extra": "iterations: 118490\ncpu: 5896.924634990299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34158.491989839924,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 34157.59988277828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27196.513370441102,
            "unit": "ns/iter",
            "extra": "iterations: 25691\ncpu: 27196.294422171275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25822.054540091813,
            "unit": "ns/iter",
            "extra": "iterations: 27136\ncpu: 25821.08637971709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21419.375836874806,
            "unit": "ns/iter",
            "extra": "iterations: 32711\ncpu: 21417.828864908028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129125.82257469988,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129117.5949833993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262961.0398795838,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 262944.43190368864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66363.52864782556,
            "unit": "ns/iter",
            "extra": "iterations: 10472\ncpu: 66356.55080213987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65945.62647309079,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 65936.51362307968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65415.642857140534,
            "unit": "ns/iter",
            "extra": "iterations: 10724\ncpu: 65414.24841477018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132663.05547141633,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132655.49034456394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121905.76209536305,
            "unit": "ns/iter",
            "extra": "iterations: 5746\ncpu: 121893.99582318138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39260.639739701284,
            "unit": "ns/iter",
            "extra": "iterations: 17826\ncpu: 39257.842477280145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195604.4600781522,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 195593.99776660948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157694.91555654918,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 157684.30797019688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156290.5696712364,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156269.13442182844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158122.4088447571,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 158112.11642599228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276707.1709537156,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 276674.1986545277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117723.1467304532,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117644.019138744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927641.1673306922,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 927581.8061089126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 933774.425333316,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 933694.3999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 928673.4926765285,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 928596.1384820173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609860.547432518,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609794.865100084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918549.1090670408,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 918515.637319316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39672.64205575727,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 39668.370353581646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 191317.4897680896,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 191306.57571623276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155832.93855744266,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155824.24309884195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155906.85691999292,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 155900.20057945154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156452.5905336137,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156444.20629604827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 272553.26710734295,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 272539.2301710737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1107420.349282266,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1107340.8293460836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 929070.5478722345,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 928927.3936170138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 917178.8871391119,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 917125.065616806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 912654.6553965802,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 912585.8257477285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 614693.2771084071,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 614644.1480206593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915469.7614678649,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 915452.0314547818 ns\nthreads: 1"
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
        "date": 1705956483602,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15155.903839090304,
            "unit": "ns/iter",
            "extra": "iterations: 46287\ncpu: 15154.881500205242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121255.82789829049,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 121248.2258296222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 227076.0007898747,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 227062.05897840974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 330274.50057625194,
            "unit": "ns/iter",
            "extra": "iterations: 2603\ncpu: 330269.074145217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 436201.7911646663,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 436188.35341365443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542478.9894080722,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 542464.6105919005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 527367.4829999208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527369.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 603242.5280000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603229.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 685706.4940652401,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 685681.8249258158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12161.157009703402,
            "unit": "ns/iter",
            "extra": "iterations: 57506\ncpu: 12161.172747191606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10095.570397787948,
            "unit": "ns/iter",
            "extra": "iterations: 69434\ncpu: 10095.477719849065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10107.31323661507,
            "unit": "ns/iter",
            "extra": "iterations: 69066\ncpu: 10107.184432282149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10004.624633137752,
            "unit": "ns/iter",
            "extra": "iterations: 69849\ncpu: 10004.682958954307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16677.48015428995,
            "unit": "ns/iter",
            "extra": "iterations: 41999\ncpu: 16677.073263649145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57512.46295386028,
            "unit": "ns/iter",
            "extra": "iterations: 14239\ncpu: 57512.0022473488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259142.7333738127,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 259138.80959611275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199616.352459017,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 199616.74473067897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198538.75233210973,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 198534.32835820856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194977.87365775803,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 194967.51199451654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456340.54391369445,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 456336.4663585015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3881999.1422591913,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3881917.1548117106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3118484.1241610376,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3118404.697986574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3090039.196013321,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089876.0797342225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3072400.6006601476,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3072244.88448845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1763294.285714264,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1763296.952380955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3004131.1521035293,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3003965.372168277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11342125.884210108,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11342025.2631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5212992.409999515,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5212882.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14667365.013889052,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14667218.055555549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54377.37859999743,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54376.54999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295018.94562970486,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295014.17756366194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230489.90061944828,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230487.853487745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231524.19752753555,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 231518.54340231093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226295.72616847258,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 226287.16662265616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470845.7086056482,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 470845.8061002155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3991270.3047210705,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3991064.806866961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3167275.387754996,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167204.081632665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3136865.518518308,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3136794.6127946246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3120324.076923017,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3120224.749163883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1788989.7769230437,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1788974.6153846122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3072821.7788778883,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3072702.6402640305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11557378.097825717,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11556656.521739105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5267883.469999787,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5267602.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52784.25437972756,
            "unit": "ns/iter",
            "extra": "iterations: 15469\ncpu: 52780.18617880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260733.3648277963,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 260707.95489180158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200429.61758497325,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 200417.60844079807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204987.05069678978,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 204961.46083613613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192688.68783784384,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 192674.05405405432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 431571.78315049625,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 431527.5672981055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3913802.527426156,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3913431.2236286816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3134436.1979864095,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3134164.093959737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3107946.79999996,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3107600.66666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3096231.996677597,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3096052.4916943344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1760659.1363635478,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1760478.7878787955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3030345.8306187917,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3030065.7980456157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5968.559184579958,
            "unit": "ns/iter",
            "extra": "iterations: 117142\ncpu: 5967.936350753763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33666.83565726944,
            "unit": "ns/iter",
            "extra": "iterations: 20798\ncpu: 33664.68891239528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26534.93301453784,
            "unit": "ns/iter",
            "extra": "iterations: 26349\ncpu: 26531.982238415043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26759.501565963874,
            "unit": "ns/iter",
            "extra": "iterations: 26182\ncpu: 26757.421129019942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21578.579744571583,
            "unit": "ns/iter",
            "extra": "iterations: 32416\ncpu: 21576.0951382034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128630.26413362665,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128620.44787077757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263610.25479867373,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 263575.38577342435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66609.62196860801,
            "unit": "ns/iter",
            "extra": "iterations: 10515\ncpu: 66607.20874940617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65762.51490641956,
            "unit": "ns/iter",
            "extra": "iterations: 10633\ncpu: 65754.69763942432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65527.56205541282,
            "unit": "ns/iter",
            "extra": "iterations: 10684\ncpu: 65521.99550730147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131796.08900622555,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 131787.57307184627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122786.15279482477,
            "unit": "ns/iter",
            "extra": "iterations: 5707\ncpu: 122767.54862449596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40559.44993626253,
            "unit": "ns/iter",
            "extra": "iterations: 17258\ncpu: 40555.58581527432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197377.09085779666,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 197357.78781038136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158900.57091074975,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 158886.11236973235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160091.94159716085,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 160082.19308700992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158462.0936295805,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158454.7268193142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274950.5120031508,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 274930.7359307365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1127321.8435482865,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1127210.3225806516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 931616.7593085007,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931555.5851063806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 923378.5719946881,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923293.2628797842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927060.5464190817,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 926989.655172412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 592336.5663567588,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 592302.1978021977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 917210.8431373974,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 917111.7647058753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40150.97530651545,
            "unit": "ns/iter",
            "extra": "iterations: 17454\ncpu: 40148.69943852444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195947.39798488043,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 195945.36803806308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158605.50418457366,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158598.71069893573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159138.72498869867,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 159129.2213671337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157283.4254504572,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 157281.59909909798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 269205.39638600266,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 269201.2302960423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1111155.8489667499,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1111118.7599364058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 926601.068783087,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 926496.164021168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922343.9772727228,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 922346.2566844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913798.40000003,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 913801.0457516413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594228.6997455404,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 594220.3562340958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 914165.2421466941,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 914134.9476439831 ns\nthreads: 1"
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
        "date": 1705958296939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15408.936427097948,
            "unit": "ns/iter",
            "extra": "iterations: 45554\ncpu: 15408.300039513548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124912.08876785307,
            "unit": "ns/iter",
            "extra": "iterations: 6793\ncpu: 124910.31944648903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235868.87902331352,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 235868.22974472816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343380.8095427283,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 343378.92644135177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452152.80589162215,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 452135.56023145723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560284.9301423199,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 560277.1668822767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 543603.2239999805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543594.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624293.8659999595,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624282.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 712269.4845916855,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 712261.1710323584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12413.004132230682,
            "unit": "ns/iter",
            "extra": "iterations: 56386\ncpu: 12412.721242861706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10330.323007607833,
            "unit": "ns/iter",
            "extra": "iterations: 67695\ncpu: 10330.157323288266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10281.399999999543,
            "unit": "ns/iter",
            "extra": "iterations: 68150\ncpu: 10281.022743947173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10285.536230603006,
            "unit": "ns/iter",
            "extra": "iterations: 67857\ncpu: 10285.162916132453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16856.641709425705,
            "unit": "ns/iter",
            "extra": "iterations: 41511\ncpu: 16856.382645563805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56827.56425396078,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 56825.159766601784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249577.38001757796,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 249570.08496923558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197246.08433734195,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 197235.21779425448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197030.69946870639,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 197023.14622314618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197053.68251391244,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 197050.16233766216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 448520.7789688462,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 448489.4844308315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3971531.678111597,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3971401.716738188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3175292.095563039,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175221.160409564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3205280.2110726326,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3205229.757785477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3161417.017006822,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3161335.7142857127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1805530.642578157,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1805511.914062502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3092077.4133333378,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3092020.33333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11525075.849462649,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11524902.150537642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5296368.099999995,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5296218.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14821666.36619663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14821366.197183078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55375.728999996456,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55374.49999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 289200.64004044235,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 289202.6289180983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232242.46948739345,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 232236.09981014335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229951.34620541346,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 229929.63260927913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227755.5239978907,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 227745.64873417656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468226.6433982658,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 468224.729437228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4056036.471615847,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4055812.227074239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3232267.4320557415,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3232117.0731707485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3242877.8919860893,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242813.9372822256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3195647.3013698454,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3195422.945205465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1831913.5562129193,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831841.8145956595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3137654.6632997696,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3137483.1649831845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11753338.188889176,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11752812.222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5176669.470000092,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5176344.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52917.603927670934,
            "unit": "ns/iter",
            "extra": "iterations: 15429\ncpu: 52916.63750081052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263470.481299799,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 263467.7191906789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201631.3558282252,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 201628.45681925523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204465.17948717554,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 204460.34028276938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197813.48019457684,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 197807.87583970453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 432897.38966203347,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 432888.6679920451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3999400.682403364,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3999140.343347636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3197303.35273972,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3197222.9452054757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3222242.5620690943,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3222067.241379303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3167377.723549473,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3167280.546075093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1799873.2144249268,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1799805.8479532208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3109602.1739130416,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109420.401337793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6032.500030115475,
            "unit": "ns/iter",
            "extra": "iterations: 116219\ncpu: 6032.349271633733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34451.75817734053,
            "unit": "ns/iter",
            "extra": "iterations: 20300\ncpu: 34450.22660098496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26717.926667176172,
            "unit": "ns/iter",
            "extra": "iterations: 26182\ncpu: 26716.58391261159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27773.816102468834,
            "unit": "ns/iter",
            "extra": "iterations: 25139\ncpu: 27772.580452683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21665.125216637836,
            "unit": "ns/iter",
            "extra": "iterations: 32312\ncpu: 21664.536395147246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130018.45533890557,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 130013.63045496796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257642.1120117868,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 257631.687546055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67791.53665149657,
            "unit": "ns/iter",
            "extra": "iterations: 10327\ncpu: 67788.5445918462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67520.62790473468,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 67517.70321087597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69572.19339622684,
            "unit": "ns/iter",
            "extra": "iterations: 10388\ncpu: 69569.65729688194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134232.15684392312,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134225.87828757925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125904.00687410048,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 125895.18813313932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39654.43667800422,
            "unit": "ns/iter",
            "extra": "iterations: 17640\ncpu: 39652.31859410456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198961.56144853015,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 198956.1733675492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159565.24982856144,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 159556.27428571528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160284.25512529892,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 160270.22779043228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159790.72723122765,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 159787.33165944164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274309.66601409,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 274298.59044636175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1158686.0448503792,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1158678.7375415186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 956920.8820301415,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 956847.5994513094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 954052.1918366648,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 953987.8911564618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 944621.5128900927,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 944557.1234735574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 601031.6196213381,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 600975.645438904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 939128.2815013999,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 939110.0536192924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40295.21074972485,
            "unit": "ns/iter",
            "extra": "iterations: 17433\ncpu: 40292.342109792015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197875.15617057603,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197870.9686529243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159036.52887676103,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 159031.173260573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158889.05759638853,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158881.541950114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159182.1747069536,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 159170.89720468645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274763.5585480433,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 274747.697111633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1142221.822186063,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1142182.3817291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 944906.7611335823,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944845.8839406354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 953143.8843537,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 953117.6870748298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 937665.1981257971,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937616.8674698789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 597939.4854202127,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 597913.7221269278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 936470.9530201565,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 936436.3758389105 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}