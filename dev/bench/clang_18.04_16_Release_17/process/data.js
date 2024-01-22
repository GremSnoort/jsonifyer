window.BENCHMARK_DATA = {
  "lastUpdate": 1705955061588,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 18.04 Release c++-17": [
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
        "date": 1702490335674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1387.3639159867623,
            "unit": "ns/iter",
            "extra": "iterations: 507826\ncpu: 1387.340742695333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16374.528588052995,
            "unit": "ns/iter",
            "extra": "iterations: 49846\ncpu: 16374.240661236609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34816.7370128518,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 34814.89783020855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51571.6559310629,
            "unit": "ns/iter",
            "extra": "iterations: 16363\ncpu: 51568.838232597926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56480.54260000209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56479.57999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71015.84787908087,
            "unit": "ns/iter",
            "extra": "iterations: 12306\ncpu: 71014.00130017882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85697.11201810492,
            "unit": "ns/iter",
            "extra": "iterations: 10168\ncpu: 85693.88276947281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98615.85876863149,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 98611.32354614772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115437.48716578199,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 115434.33155080196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1175.552191692122,
            "unit": "ns/iter",
            "extra": "iterations: 596206\ncpu: 1175.5423461018502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 966.9295306448481,
            "unit": "ns/iter",
            "extra": "iterations: 726188\ncpu: 966.9059527284968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 905.0395234606959,
            "unit": "ns/iter",
            "extra": "iterations: 738827\ncpu: 904.9546104839158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 914.5250369457465,
            "unit": "ns/iter",
            "extra": "iterations: 765988\ncpu: 914.4796002026142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1819.0860223763802,
            "unit": "ns/iter",
            "extra": "iterations: 382633\ncpu: 1819.0851285696697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5503.742919999013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5503.432000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29418.142842004894,
            "unit": "ns/iter",
            "extra": "iterations: 28311\ncpu: 29416.91568648229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23069.67075624481,
            "unit": "ns/iter",
            "extra": "iterations: 35782\ncpu: 23068.341624280347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23021.807467847044,
            "unit": "ns/iter",
            "extra": "iterations: 35298\ncpu: 23021.03801915125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22800.415624131794,
            "unit": "ns/iter",
            "extra": "iterations: 35970\ncpu: 22799.221573533454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 68806.18506939373,
            "unit": "ns/iter",
            "extra": "iterations: 13114\ncpu: 68802.61552539273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 553831.1029999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553819.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556852.6305733117,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 556828.2165605102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558894.9495851651,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 558886.407147416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560595.0308880397,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 560562.7413127419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325474.58145648765,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 325457.50750750763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558298.5345384437,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 558253.9703034221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361516.032994741,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2361475.126903548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085821.4049295904,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1085770.1877934306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3306087.227758012,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3305969.3950177967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8514.436277294782,
            "unit": "ns/iter",
            "extra": "iterations: 98552\ncpu: 8513.885055605137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43957.17733041126,
            "unit": "ns/iter",
            "extra": "iterations: 18677\ncpu: 43954.31279113341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33714.564239739484,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 33671.742037950426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32799.277586546246,
            "unit": "ns/iter",
            "extra": "iterations: 25275\ncpu: 32799.22848664686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32762.826325990405,
            "unit": "ns/iter",
            "extra": "iterations: 25283\ncpu: 32761.721314717353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80521.8330710085,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 80518.92417368722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600254.2779999658,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600224.1000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595302.2550882179,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 595301.5603799174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584399.0684745562,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 584367.050847457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591243.9460751327,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 591220.8191126267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338360.217171747,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 338356.0606060598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582137.6626746276,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 582085.0299401218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2502202.4146340876,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2502055.28455285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1136228.0498783018,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1136188.929440389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5359.080069999891,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5358.92000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29410.010649286058,
            "unit": "ns/iter",
            "extra": "iterations: 28077\ncpu: 29409.748192470794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23143.319633038012,
            "unit": "ns/iter",
            "extra": "iterations: 35644\ncpu: 23142.67197845353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22635.891319300314,
            "unit": "ns/iter",
            "extra": "iterations: 36345\ncpu: 22635.768331269916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22377.654502137477,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 22377.443283339784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67969.16436656643,
            "unit": "ns/iter",
            "extra": "iterations: 12898\ncpu: 67967.89424716985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585664.0659999357,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585649.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581668.8537233942,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 581660.2393617022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574326.572847747,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 574317.0198675512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566269.0390116919,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 566258.9726918039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326005.89219333034,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 326005.91078066867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561648.3461784922,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 561643.0956968528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 514.6490460724922,
            "unit": "ns/iter",
            "extra": "iterations: 1361267\ncpu: 514.6405517800679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3169.1602377787844,
            "unit": "ns/iter",
            "extra": "iterations: 220541\ncpu: 3169.0520130043838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2539.4249984580338,
            "unit": "ns/iter",
            "extra": "iterations: 275561\ncpu: 2539.3999876615344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2515.5790930723897,
            "unit": "ns/iter",
            "extra": "iterations: 287895\ncpu: 2515.5521978499096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1926.2301484342188,
            "unit": "ns/iter",
            "extra": "iterations: 363057\ncpu: 1926.2005690566498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17829.661133428082,
            "unit": "ns/iter",
            "extra": "iterations: 39579\ncpu: 17829.381742843467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31072.283867444763,
            "unit": "ns/iter",
            "extra": "iterations: 21968\ncpu: 31072.359796066736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7064.212425939519,
            "unit": "ns/iter",
            "extra": "iterations: 99244\ncpu: 7064.237636532177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7080.347326276106,
            "unit": "ns/iter",
            "extra": "iterations: 98907\ncpu: 7080.211714034397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7083.256500273665,
            "unit": "ns/iter",
            "extra": "iterations: 98842\ncpu: 7082.974848748457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14562.226051644195,
            "unit": "ns/iter",
            "extra": "iterations: 48020\ncpu: 14562.026239067103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13555.08064016604,
            "unit": "ns/iter",
            "extra": "iterations: 51674\ncpu: 13555.070248093927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5146.998143126042,
            "unit": "ns/iter",
            "extra": "iterations: 136789\ncpu: 5146.990620590896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26315.62340890017,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 26315.270768998977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21073.380959560356,
            "unit": "ns/iter",
            "extra": "iterations: 33161\ncpu: 21073.004432918384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20895.16116434763,
            "unit": "ns/iter",
            "extra": "iterations: 33289\ncpu: 20894.944275886814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21267.931232528495,
            "unit": "ns/iter",
            "extra": "iterations: 32908\ncpu: 21267.953081317737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49431.40634516513,
            "unit": "ns/iter",
            "extra": "iterations: 14121\ncpu: 49430.11826357932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156319.45965713903,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 156315.47428571206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131262.14502946928,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 131259.5704238753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132589.17327766816,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132589.14405010428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134477.94221201914,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134476.578645235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84352.19486622873,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84351.01229211898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134196.9969442357,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 134194.21313979977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5042.375949752127,
            "unit": "ns/iter",
            "extra": "iterations: 138194\ncpu: 5042.318045645987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26255.041397686295,
            "unit": "ns/iter",
            "extra": "iterations: 26644\ncpu: 26255.033028073693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20806.52250670033,
            "unit": "ns/iter",
            "extra": "iterations: 33590\ncpu: 20805.96903840408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20685.93406333941,
            "unit": "ns/iter",
            "extra": "iterations: 33881\ncpu: 20685.153921076828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21081.54346972753,
            "unit": "ns/iter",
            "extra": "iterations: 33115\ncpu: 21081.34682168202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47391.37127536209,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47390.850471729864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155701.7254683363,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 155698.3942908124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130329.17181682012,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130326.15413253878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129360.45310191631,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129359.25036927641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130451.56071294965,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130449.49870033444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83202.5512241528,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83202.53149512559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130242.07882504961,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130239.04071388536 ns\nthreads: 1"
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
        "date": 1702490335674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1387.3639159867623,
            "unit": "ns/iter",
            "extra": "iterations: 507826\ncpu: 1387.340742695333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16374.528588052995,
            "unit": "ns/iter",
            "extra": "iterations: 49846\ncpu: 16374.240661236609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34816.7370128518,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 34814.89783020855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51571.6559310629,
            "unit": "ns/iter",
            "extra": "iterations: 16363\ncpu: 51568.838232597926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56480.54260000209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56479.57999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71015.84787908087,
            "unit": "ns/iter",
            "extra": "iterations: 12306\ncpu: 71014.00130017882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85697.11201810492,
            "unit": "ns/iter",
            "extra": "iterations: 10168\ncpu: 85693.88276947281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98615.85876863149,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 98611.32354614772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115437.48716578199,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 115434.33155080196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1175.552191692122,
            "unit": "ns/iter",
            "extra": "iterations: 596206\ncpu: 1175.5423461018502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 966.9295306448481,
            "unit": "ns/iter",
            "extra": "iterations: 726188\ncpu: 966.9059527284968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 905.0395234606959,
            "unit": "ns/iter",
            "extra": "iterations: 738827\ncpu: 904.9546104839158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 914.5250369457465,
            "unit": "ns/iter",
            "extra": "iterations: 765988\ncpu: 914.4796002026142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1819.0860223763802,
            "unit": "ns/iter",
            "extra": "iterations: 382633\ncpu: 1819.0851285696697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5503.742919999013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5503.432000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29418.142842004894,
            "unit": "ns/iter",
            "extra": "iterations: 28311\ncpu: 29416.91568648229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23069.67075624481,
            "unit": "ns/iter",
            "extra": "iterations: 35782\ncpu: 23068.341624280347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23021.807467847044,
            "unit": "ns/iter",
            "extra": "iterations: 35298\ncpu: 23021.03801915125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22800.415624131794,
            "unit": "ns/iter",
            "extra": "iterations: 35970\ncpu: 22799.221573533454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 68806.18506939373,
            "unit": "ns/iter",
            "extra": "iterations: 13114\ncpu: 68802.61552539273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 553831.1029999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553819.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556852.6305733117,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 556828.2165605102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558894.9495851651,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 558886.407147416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560595.0308880397,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 560562.7413127419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325474.58145648765,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 325457.50750750763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558298.5345384437,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 558253.9703034221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361516.032994741,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2361475.126903548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085821.4049295904,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1085770.1877934306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3306087.227758012,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3305969.3950177967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8514.436277294782,
            "unit": "ns/iter",
            "extra": "iterations: 98552\ncpu: 8513.885055605137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43957.17733041126,
            "unit": "ns/iter",
            "extra": "iterations: 18677\ncpu: 43954.31279113341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33714.564239739484,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 33671.742037950426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32799.277586546246,
            "unit": "ns/iter",
            "extra": "iterations: 25275\ncpu: 32799.22848664686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32762.826325990405,
            "unit": "ns/iter",
            "extra": "iterations: 25283\ncpu: 32761.721314717353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80521.8330710085,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 80518.92417368722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600254.2779999658,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600224.1000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595302.2550882179,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 595301.5603799174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584399.0684745562,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 584367.050847457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591243.9460751327,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 591220.8191126267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338360.217171747,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 338356.0606060598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582137.6626746276,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 582085.0299401218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2502202.4146340876,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2502055.28455285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1136228.0498783018,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1136188.929440389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5359.080069999891,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5358.92000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29410.010649286058,
            "unit": "ns/iter",
            "extra": "iterations: 28077\ncpu: 29409.748192470794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23143.319633038012,
            "unit": "ns/iter",
            "extra": "iterations: 35644\ncpu: 23142.67197845353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22635.891319300314,
            "unit": "ns/iter",
            "extra": "iterations: 36345\ncpu: 22635.768331269916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22377.654502137477,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 22377.443283339784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67969.16436656643,
            "unit": "ns/iter",
            "extra": "iterations: 12898\ncpu: 67967.89424716985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585664.0659999357,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585649.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581668.8537233942,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 581660.2393617022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574326.572847747,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 574317.0198675512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566269.0390116919,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 566258.9726918039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326005.89219333034,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 326005.91078066867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561648.3461784922,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 561643.0956968528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 514.6490460724922,
            "unit": "ns/iter",
            "extra": "iterations: 1361267\ncpu: 514.6405517800679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3169.1602377787844,
            "unit": "ns/iter",
            "extra": "iterations: 220541\ncpu: 3169.0520130043838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2539.4249984580338,
            "unit": "ns/iter",
            "extra": "iterations: 275561\ncpu: 2539.3999876615344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2515.5790930723897,
            "unit": "ns/iter",
            "extra": "iterations: 287895\ncpu: 2515.5521978499096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1926.2301484342188,
            "unit": "ns/iter",
            "extra": "iterations: 363057\ncpu: 1926.2005690566498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17829.661133428082,
            "unit": "ns/iter",
            "extra": "iterations: 39579\ncpu: 17829.381742843467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31072.283867444763,
            "unit": "ns/iter",
            "extra": "iterations: 21968\ncpu: 31072.359796066736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7064.212425939519,
            "unit": "ns/iter",
            "extra": "iterations: 99244\ncpu: 7064.237636532177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7080.347326276106,
            "unit": "ns/iter",
            "extra": "iterations: 98907\ncpu: 7080.211714034397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7083.256500273665,
            "unit": "ns/iter",
            "extra": "iterations: 98842\ncpu: 7082.974848748457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14562.226051644195,
            "unit": "ns/iter",
            "extra": "iterations: 48020\ncpu: 14562.026239067103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13555.08064016604,
            "unit": "ns/iter",
            "extra": "iterations: 51674\ncpu: 13555.070248093927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5146.998143126042,
            "unit": "ns/iter",
            "extra": "iterations: 136789\ncpu: 5146.990620590896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26315.62340890017,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 26315.270768998977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21073.380959560356,
            "unit": "ns/iter",
            "extra": "iterations: 33161\ncpu: 21073.004432918384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20895.16116434763,
            "unit": "ns/iter",
            "extra": "iterations: 33289\ncpu: 20894.944275886814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21267.931232528495,
            "unit": "ns/iter",
            "extra": "iterations: 32908\ncpu: 21267.953081317737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49431.40634516513,
            "unit": "ns/iter",
            "extra": "iterations: 14121\ncpu: 49430.11826357932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156319.45965713903,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 156315.47428571206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131262.14502946928,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 131259.5704238753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132589.17327766816,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132589.14405010428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134477.94221201914,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 134476.578645235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84352.19486622873,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84351.01229211898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134196.9969442357,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 134194.21313979977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5042.375949752127,
            "unit": "ns/iter",
            "extra": "iterations: 138194\ncpu: 5042.318045645987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26255.041397686295,
            "unit": "ns/iter",
            "extra": "iterations: 26644\ncpu: 26255.033028073693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20806.52250670033,
            "unit": "ns/iter",
            "extra": "iterations: 33590\ncpu: 20805.96903840408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20685.93406333941,
            "unit": "ns/iter",
            "extra": "iterations: 33881\ncpu: 20685.153921076828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21081.54346972753,
            "unit": "ns/iter",
            "extra": "iterations: 33115\ncpu: 21081.34682168202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47391.37127536209,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47390.850471729864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155701.7254683363,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 155698.3942908124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130329.17181682012,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130326.15413253878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129360.45310191631,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129359.25036927641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130451.56071294965,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130449.49870033444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83202.5512241528,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83202.53149512559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130242.07882504961,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130239.04071388536 ns\nthreads: 1"
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
        "date": 1702492942949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1407.0887212745397,
            "unit": "ns/iter",
            "extra": "iterations: 502078\ncpu: 1407.0252032552714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16779.252536254477,
            "unit": "ns/iter",
            "extra": "iterations: 49581\ncpu: 16778.97581734939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34974.18386809454,
            "unit": "ns/iter",
            "extra": "iterations: 23593\ncpu: 34972.8521171534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50982.28104375508,
            "unit": "ns/iter",
            "extra": "iterations: 16364\ncpu: 50979.1065754094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57214.46069999274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57214.169999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71974.38545751674,
            "unit": "ns/iter",
            "extra": "iterations: 12240\ncpu: 71972.05065359478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85784.2187717752,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 85782.64158455264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98896.58225953793,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98889.41555453285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114566.8680794718,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 114560.38410596015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1202.2866598820199,
            "unit": "ns/iter",
            "extra": "iterations: 582701\ncpu: 1202.1966669012047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 957.9775164402636,
            "unit": "ns/iter",
            "extra": "iterations: 732046\ncpu: 957.8878922909228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 971.9246022409559,
            "unit": "ns/iter",
            "extra": "iterations: 739518\ncpu: 971.8484201872034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 959.434045988459,
            "unit": "ns/iter",
            "extra": "iterations: 730835\ncpu: 959.340617239187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.7081399557771,
            "unit": "ns/iter",
            "extra": "iterations: 370174\ncpu: 1881.6986066012196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5510.840470000176,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5510.63899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30116.67650065807,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 30114.546516722643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24004.42637857396,
            "unit": "ns/iter",
            "extra": "iterations: 34202\ncpu: 24002.979357932247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23286.125432986686,
            "unit": "ns/iter",
            "extra": "iterations: 35509\ncpu: 23284.978456166005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23063.50589824982,
            "unit": "ns/iter",
            "extra": "iterations: 35519\ncpu: 23061.7669416369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 68986.3296923057,
            "unit": "ns/iter",
            "extra": "iterations: 13000\ncpu: 68980.67692307672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561988.1699999495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561979.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561879.64857881,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 561864.7932816534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 542286.5820801582,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 542264.6616541359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562715.6837769046,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 562684.7275031682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326933.08314852376,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 326922.46858832275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560848.1203883761,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 560820.1941747589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2363829.3172588153,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2363766.7512690388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066662.7869615252,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1066640.3958090805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3279603.5915493937,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3279505.281690148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8316.09948029734,
            "unit": "ns/iter",
            "extra": "iterations: 100442\ncpu: 8315.652814559657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43952.993485516905,
            "unit": "ns/iter",
            "extra": "iterations: 18881\ncpu: 43949.86494359407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34175.43971337739,
            "unit": "ns/iter",
            "extra": "iterations: 24143\ncpu: 34174.51435198616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34409.451843193645,
            "unit": "ns/iter",
            "extra": "iterations: 23953\ncpu: 34407.610737694624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34573.68907563156,
            "unit": "ns/iter",
            "extra": "iterations: 23919\ncpu: 34572.60755048278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81273.09188987213,
            "unit": "ns/iter",
            "extra": "iterations: 10752\ncpu: 81269.24293154746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 609881.5259999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609856.1999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597200.5955983648,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 597174.7592847303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591809.5689069511,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 591778.7508486097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587414.069815189,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 587396.5092402464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339455.588235288,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 339437.69349845016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585406.4476317769,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 585381.654436293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2515095.796195881,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2514985.3260869556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1103424.3365154718,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1103349.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5362.379390001024,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5362.188999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29576.548761692833,
            "unit": "ns/iter",
            "extra": "iterations: 27901\ncpu: 29575.284039998678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23078.701515913654,
            "unit": "ns/iter",
            "extra": "iterations: 35754\ncpu: 23077.829054091948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22544.925332968473,
            "unit": "ns/iter",
            "extra": "iterations: 36415\ncpu: 22543.69078676372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22517.798503399503,
            "unit": "ns/iter",
            "extra": "iterations: 36750\ncpu: 22516.560544217708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68078.74645486496,
            "unit": "ns/iter",
            "extra": "iterations: 12905\ncpu: 68076.16427741187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580271.8280000362,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580246.8999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582641.2120805134,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 582633.288590602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567928.1406768449,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 567910.6834771086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575169.9856584204,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 575162.5814863062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333744.59250853537,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 333742.7166099118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 574820.4709762359,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 574795.9762532976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.9455987552748,
            "unit": "ns/iter",
            "extra": "iterations: 1308573\ncpu: 537.9322361075737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3245.6342555507013,
            "unit": "ns/iter",
            "extra": "iterations: 215965\ncpu: 3245.5485842613243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2357.6986106381355,
            "unit": "ns/iter",
            "extra": "iterations: 296467\ncpu: 2357.6576819679667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2398.709184617664,
            "unit": "ns/iter",
            "extra": "iterations: 291814\ncpu: 2398.656335885189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1999.8030161703873,
            "unit": "ns/iter",
            "extra": "iterations: 350577\ncpu: 1999.7655293986804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17643.851353143706,
            "unit": "ns/iter",
            "extra": "iterations: 37653\ncpu: 17643.5768730247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32004.87418122393,
            "unit": "ns/iter",
            "extra": "iterations: 21984\ncpu: 32004.357714701786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7425.698943959832,
            "unit": "ns/iter",
            "extra": "iterations: 94504\ncpu: 7425.510031321485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7430.313335754454,
            "unit": "ns/iter",
            "extra": "iterations: 93628\ncpu: 7430.126671508562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7446.90175920301,
            "unit": "ns/iter",
            "extra": "iterations: 93963\ncpu: 7446.666240967057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14953.599358083919,
            "unit": "ns/iter",
            "extra": "iterations: 46735\ncpu: 14953.373274847436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14142.286450408632,
            "unit": "ns/iter",
            "extra": "iterations: 49293\ncpu: 14141.928874282168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5185.95538390806,
            "unit": "ns/iter",
            "extra": "iterations: 134772\ncpu: 5185.832368741254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26510.63906758484,
            "unit": "ns/iter",
            "extra": "iterations: 26426\ncpu: 26509.91447816507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21053.750512480157,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 21053.433618714673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20845.05984209691,
            "unit": "ns/iter",
            "extra": "iterations: 33438\ncpu: 20844.951851187612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21504.031738266513,
            "unit": "ns/iter",
            "extra": "iterations: 32705\ncpu: 21503.690567191552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48892.081222522844,
            "unit": "ns/iter",
            "extra": "iterations: 14331\ncpu: 48890.51706091661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156126.7400542474,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 156123.77938517038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129840.23942093995,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 129839.51373422277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129422.73851262688,
            "unit": "ns/iter",
            "extra": "iterations: 5419\ncpu: 129420.22513378965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129873.94958449165,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129866.86980609447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82975.62926018894,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 82974.02921268198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130945.60368234963,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130942.88636786246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4935.13398766714,
            "unit": "ns/iter",
            "extra": "iterations: 141416\ncpu: 4935.044125134307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25550.622350882884,
            "unit": "ns/iter",
            "extra": "iterations: 27462\ncpu: 25549.58488092614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20192.8587440063,
            "unit": "ns/iter",
            "extra": "iterations: 34618\ncpu: 20192.194811947495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19997.792202983735,
            "unit": "ns/iter",
            "extra": "iterations: 35116\ncpu: 19997.32885294448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20522.549501758927,
            "unit": "ns/iter",
            "extra": "iterations: 34120\ncpu: 20522.22157092599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47362.22761370693,
            "unit": "ns/iter",
            "extra": "iterations: 14797\ncpu: 47360.16084341416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154148.09269044563,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 154147.3139586068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128243.73850416327,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 128241.80978762511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127430.21652110157,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127429.65793304173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127804.65150119345,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 127802.46822619079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82195.07636533726,
            "unit": "ns/iter",
            "extra": "iterations: 8551\ncpu: 82191.48637586198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126956.15761566126,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 126953.84896690334 ns\nthreads: 1"
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
        "date": 1702503993631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1413.1033575014803,
            "unit": "ns/iter",
            "extra": "iterations: 513209\ncpu: 1413.0952496935947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16208.738951473331,
            "unit": "ns/iter",
            "extra": "iterations: 50776\ncpu: 16208.76398298409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34237.439448368976,
            "unit": "ns/iter",
            "extra": "iterations: 24219\ncpu: 34236.851232503395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51420.54826349093,
            "unit": "ns/iter",
            "extra": "iterations: 16441\ncpu: 51421.203089836396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57153.14170000738,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57153.649999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71876.25470071699,
            "unit": "ns/iter",
            "extra": "iterations: 12179\ncpu: 71875.29353805736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84698.89448865312,
            "unit": "ns/iter",
            "extra": "iterations: 10179\ncpu: 84697.13134885552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98148.960882424,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 98149.09028883331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116188.0537256961,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 116188.37742980558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1213.2709560206574,
            "unit": "ns/iter",
            "extra": "iterations: 576839\ncpu: 1213.273027655896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1036.286945008041,
            "unit": "ns/iter",
            "extra": "iterations: 699357\ncpu: 1036.2877614723243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 973.5562142275371,
            "unit": "ns/iter",
            "extra": "iterations: 714063\ncpu: 973.5499528753065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 986.9247980103426,
            "unit": "ns/iter",
            "extra": "iterations: 711670\ncpu: 986.932988604269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.5920349358905,
            "unit": "ns/iter",
            "extra": "iterations: 373255\ncpu: 1881.6072122275634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5587.346369999295,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5587.391999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29522.557473761604,
            "unit": "ns/iter",
            "extra": "iterations: 27630\ncpu: 29522.21498371335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23189.121107265528,
            "unit": "ns/iter",
            "extra": "iterations: 35258\ncpu: 23189.30739123035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22843.1355544401,
            "unit": "ns/iter",
            "extra": "iterations: 35838\ncpu: 22843.038115966297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22807.10326844707,
            "unit": "ns/iter",
            "extra": "iterations: 35858\ncpu: 22806.386301522696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69116.19210402896,
            "unit": "ns/iter",
            "extra": "iterations: 12842\ncpu: 69113.89970409579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 555597.0970000317,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555602.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549353.4426751425,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 549339.872611466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552920.044529276,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 552899.6183206114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559828.4505851719,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 559821.1313394002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326884.57703704474,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 326874.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559516.1868916767,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 558890.7852044123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2360399.1700508283,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2360274.3654822353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1076414.391907568,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1076369.9421965303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3280513.816901661,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3280467.6056337976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8302.035943555195,
            "unit": "ns/iter",
            "extra": "iterations: 101409\ncpu: 8301.708921298916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43822.00495258082,
            "unit": "ns/iter",
            "extra": "iterations: 18980\ncpu: 43821.174920969555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34838.66923985434,
            "unit": "ns/iter",
            "extra": "iterations: 23706\ncpu: 34837.44621614768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34346.17335106828,
            "unit": "ns/iter",
            "extra": "iterations: 24061\ncpu: 34345.14774947002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33987.025759576805,
            "unit": "ns/iter",
            "extra": "iterations: 24224\ncpu: 33985.59280052846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79870.11429105491,
            "unit": "ns/iter",
            "extra": "iterations: 10692\ncpu: 79867.7983539094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 586554.8970000418,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586550.5999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586270.758597417,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 586244.7066756542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591456.8027397352,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 591435.2054794506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589013.1406250121,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 588998.4375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338813.23829949787,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 338805.18720749056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575247.1856010783,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 575228.3355350055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2495124.5374332624,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2495038.235294104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1079696.3240740828,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1079679.0509259282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5435.0101399995765,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5434.747999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28785.902797204417,
            "unit": "ns/iter",
            "extra": "iterations: 28600\ncpu: 28784.25874125874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22753.223985840876,
            "unit": "ns/iter",
            "extra": "iterations: 36163\ncpu: 22752.29378093625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22505.400059714808,
            "unit": "ns/iter",
            "extra": "iterations: 36842\ncpu: 22504.690299115107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22574.280932980524,
            "unit": "ns/iter",
            "extra": "iterations: 36571\ncpu: 22573.358672171853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67681.64850220259,
            "unit": "ns/iter",
            "extra": "iterations: 12919\ncpu: 67679.4024305283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579396.4640000695,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579376.1999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 572503.3905325197,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 572491.5187376722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568779.7996031692,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 568763.7566137562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567683.4482084269,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567671.1400651438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331776.1796317184,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 331768.01954152447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567887.6185499507,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 567864.9248856948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 526.3186226086128,
            "unit": "ns/iter",
            "extra": "iterations: 1331183\ncpu: 526.2890226212314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3322.4112374170995,
            "unit": "ns/iter",
            "extra": "iterations: 210511\ncpu: 3322.275795564143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2717.5982115911356,
            "unit": "ns/iter",
            "extra": "iterations: 258442\ncpu: 2717.5048947152486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2550.782975225983,
            "unit": "ns/iter",
            "extra": "iterations: 274964\ncpu: 2550.6840895535315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2015.7995207371114,
            "unit": "ns/iter",
            "extra": "iterations: 350121\ncpu: 2015.7105686319892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17983.23686910165,
            "unit": "ns/iter",
            "extra": "iterations: 38992\ncpu: 17982.411776774723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31558.09995033954,
            "unit": "ns/iter",
            "extra": "iterations: 22151\ncpu: 31557.08997336509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7372.489460295602,
            "unit": "ns/iter",
            "extra": "iterations: 94737\ncpu: 7372.255824018124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7325.812185678904,
            "unit": "ns/iter",
            "extra": "iterations: 95046\ncpu: 7325.5970793088645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7366.197266242472,
            "unit": "ns/iter",
            "extra": "iterations: 95034\ncpu: 7366.026895637368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14912.700098098436,
            "unit": "ns/iter",
            "extra": "iterations: 46892\ncpu: 14912.078819414635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14060.57150323595,
            "unit": "ns/iter",
            "extra": "iterations: 49746\ncpu: 14060.091263619379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5213.895297295561,
            "unit": "ns/iter",
            "extra": "iterations: 134008\ncpu: 5213.725299982086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26574.791013303846,
            "unit": "ns/iter",
            "extra": "iterations: 26083\ncpu: 26573.223938963976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21052.792019274664,
            "unit": "ns/iter",
            "extra": "iterations: 33205\ncpu: 21052.03734377328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21000.197278708056,
            "unit": "ns/iter",
            "extra": "iterations: 33293\ncpu: 20999.564473012026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21417.899430103498,
            "unit": "ns/iter",
            "extra": "iterations: 32813\ncpu: 21417.57230366014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49958.130741796456,
            "unit": "ns/iter",
            "extra": "iterations: 14020\ncpu: 49954.87874465083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158499.52159169313,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 158495.29730951952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131492.79337899815,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 131488.8508371381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129609.97791799196,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129610.03896826947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129739.09747961427,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129737.5463306144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83241.61275382884,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83237.58460990337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132280.76482656205,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 132273.51734427531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4978.023219890666,
            "unit": "ns/iter",
            "extra": "iterations: 141775\ncpu: 4977.917122200656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26280.628685770404,
            "unit": "ns/iter",
            "extra": "iterations: 26487\ncpu: 26279.808962887793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20910.491905910814,
            "unit": "ns/iter",
            "extra": "iterations: 33543\ncpu: 20909.42968726738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20532.208335786298,
            "unit": "ns/iter",
            "extra": "iterations: 33950\ncpu: 20531.210603829015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21176.35902538896,
            "unit": "ns/iter",
            "extra": "iterations: 33162\ncpu: 21175.53223569156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47769.152884610536,
            "unit": "ns/iter",
            "extra": "iterations: 14560\ncpu: 47687.85714285698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152357.8770402646,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152356.88792165523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127446.61349581848,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 127445.94397962902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129739.92698705879,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129741.07208872454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129462.60805793283,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 129463.79502413746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82915.99280576082,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82915.85092581752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129124.36192204345,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 129123.35448776206 ns\nthreads: 1"
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
        "date": 1705575676605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1383.0441764523337,
            "unit": "ns/iter",
            "extra": "iterations: 504907\ncpu: 1382.9521080119705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16070.441004397479,
            "unit": "ns/iter",
            "extra": "iterations: 50936\ncpu: 16070.015313334381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34457.64885432603,
            "unit": "ns/iter",
            "extra": "iterations: 23916\ncpu: 34457.12493728049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51331.83775244463,
            "unit": "ns/iter",
            "extra": "iterations: 16142\ncpu: 51329.767067277906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57179.17889999171,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57177.960000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71689.46230499134,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 71686.74344523402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85621.51767852488,
            "unit": "ns/iter",
            "extra": "iterations: 10097\ncpu: 85619.66920867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98551.26145060269,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 98547.17304397482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114984.4629504682,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 114982.15683628013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1181.4523297905473,
            "unit": "ns/iter",
            "extra": "iterations: 588701\ncpu: 1181.4083889784463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 966.2497690035606,
            "unit": "ns/iter",
            "extra": "iterations: 727284\ncpu: 966.2159486527963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 926.4136019052432,
            "unit": "ns/iter",
            "extra": "iterations: 729339\ncpu: 926.3678481474315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 924.9993502634144,
            "unit": "ns/iter",
            "extra": "iterations: 757230\ncpu: 924.9599197073538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1856.3692923358542,
            "unit": "ns/iter",
            "extra": "iterations: 383826\ncpu: 1856.2520517109322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5540.06706999985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5539.956000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30146.78876216067,
            "unit": "ns/iter",
            "extra": "iterations: 27443\ncpu: 30145.77852275624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23264.593483318797,
            "unit": "ns/iter",
            "extra": "iterations: 34803\ncpu: 23262.994569433646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22810.643784162967,
            "unit": "ns/iter",
            "extra": "iterations: 35675\ncpu: 22809.283812193455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22699.301732783762,
            "unit": "ns/iter",
            "extra": "iterations: 35896\ncpu: 22697.918988188074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69200.91574448097,
            "unit": "ns/iter",
            "extra": "iterations: 13103\ncpu: 69196.98542318554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 548618.0129998957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548603.5000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553169.3702754979,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 553127.8026905818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 546122.1596958282,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 546096.007604562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550350.4001263892,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 550312.9582806592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321426.8864661691,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 321400.75187969883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568430.0380469696,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 568383.0057070378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2358146.687817373,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2358029.4416243634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095169.5123674695,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1093973.8515901037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3280881.4452298223,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3280709.1872791625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8267.572593079667,
            "unit": "ns/iter",
            "extra": "iterations: 101821\ncpu: 8267.369206745163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44553.47517274671,
            "unit": "ns/iter",
            "extra": "iterations: 18669\ncpu: 44552.3916653276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34699.06657403014,
            "unit": "ns/iter",
            "extra": "iterations: 23748\ncpu: 34697.385042951144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34004.80403662109,
            "unit": "ns/iter",
            "extra": "iterations: 24030\ncpu: 34002.58426966293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33835.19877174965,
            "unit": "ns/iter",
            "extra": "iterations: 24425\ncpu: 33833.05629477981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81235.36657483321,
            "unit": "ns/iter",
            "extra": "iterations: 10890\ncpu: 81231.44168962348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590250.2259999665,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590210.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590312.5623735733,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 590275.7248819967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594906.5957592586,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 594870.4514363848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593493.276944088,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 593466.9849931778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338886.52691555314,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 338864.71512770344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584893.4843437617,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 584866.6888740826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2525100.684782506,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2525001.90217392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113473.5492788376,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1113425.9615384655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5310.31381000048,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5310.088999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29159.039783644927,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 29158.373069532514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23186.47455051684,
            "unit": "ns/iter",
            "extra": "iterations: 35541\ncpu: 23185.875467769747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22577.8675216059,
            "unit": "ns/iter",
            "extra": "iterations: 36104\ncpu: 22576.883447817443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22366.747216065054,
            "unit": "ns/iter",
            "extra": "iterations: 36549\ncpu: 22365.613286273223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67853.40194604859,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 67851.98955778766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 568605.3819999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568583.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573636.5215374302,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 573595.5599734935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568620.9850260434,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 568603.5807291693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569961.6975228444,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 569949.282920471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327316.7535263598,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 327311.0987379347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559185.7550632971,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 559165.1265822798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.7445490783933,
            "unit": "ns/iter",
            "extra": "iterations: 1333857\ncpu: 523.7242822881311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3021.8533566392753,
            "unit": "ns/iter",
            "extra": "iterations: 232271\ncpu: 3021.7810230291457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2386.4741436013664,
            "unit": "ns/iter",
            "extra": "iterations: 293409\ncpu: 2386.4305457569385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2528.716484163624,
            "unit": "ns/iter",
            "extra": "iterations: 248032\ncpu: 2528.573329247815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2015.3816504516628,
            "unit": "ns/iter",
            "extra": "iterations: 347420\ncpu: 2015.295607621892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17482.55684970887,
            "unit": "ns/iter",
            "extra": "iterations: 40009\ncpu: 17481.366692494248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30245.221809065944,
            "unit": "ns/iter",
            "extra": "iterations: 23128\ncpu: 30243.579211345397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7372.110123696188,
            "unit": "ns/iter",
            "extra": "iterations: 94748\ncpu: 7371.521298602655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7338.15580321199,
            "unit": "ns/iter",
            "extra": "iterations: 95473\ncpu: 7338.0358844909315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7390.852456438915,
            "unit": "ns/iter",
            "extra": "iterations: 95382\ncpu: 7390.729907110309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14852.34294168899,
            "unit": "ns/iter",
            "extra": "iterations: 46973\ncpu: 14851.814872373583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13916.897193847413,
            "unit": "ns/iter",
            "extra": "iterations: 50318\ncpu: 13916.658054771564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5161.502928686302,
            "unit": "ns/iter",
            "extra": "iterations: 136580\ncpu: 5161.399912139388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26195.34005828327,
            "unit": "ns/iter",
            "extra": "iterations: 26766\ncpu: 26194.803108421143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22156.88078752488,
            "unit": "ns/iter",
            "extra": "iterations: 33218\ncpu: 22155.990727918797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20850.31047954327,
            "unit": "ns/iter",
            "extra": "iterations: 33532\ncpu: 20848.306095669424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21057.803691020283,
            "unit": "ns/iter",
            "extra": "iterations: 32999\ncpu: 21055.568350556077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48729.82765558719,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 48727.46131964238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158875.28233995818,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 158863.68653421526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133748.39889356983,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133738.34414345646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133404.59859153777,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 133397.25923106197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133720.3801983837,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133717.7413201071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84302.14008619948,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 84298.16810344825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133216.88683559006,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133209.12554772315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4971.672463336387,
            "unit": "ns/iter",
            "extra": "iterations: 140943\ncpu: 4971.477121957017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25418.952944593057,
            "unit": "ns/iter",
            "extra": "iterations: 27542\ncpu: 25417.68208554231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20270.227903875544,
            "unit": "ns/iter",
            "extra": "iterations: 34497\ncpu: 20268.948024466124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20078.682113889863,
            "unit": "ns/iter",
            "extra": "iterations: 34893\ncpu: 20077.99272060311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20635.392612899872,
            "unit": "ns/iter",
            "extra": "iterations: 33924\ncpu: 20634.30904374497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46767.0993846938,
            "unit": "ns/iter",
            "extra": "iterations: 14952\ncpu: 46766.39914392765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155671.8428034485,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 155667.14569975642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127757.33782553965,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127754.16135494353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126802.48342028033,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 126799.19895678134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127150.65982192162,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 127147.3196438311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82409.66191542216,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 82406.42007303583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127248.71155594244,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127247.00636942718 ns\nthreads: 1"
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
        "date": 1705773466006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1414.1639685522769,
            "unit": "ns/iter",
            "extra": "iterations: 453959\ncpu: 1414.1208787577732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16729.885817939925,
            "unit": "ns/iter",
            "extra": "iterations: 51269\ncpu: 16729.2437925452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34922.3812730286,
            "unit": "ns/iter",
            "extra": "iterations: 23613\ncpu: 34921.64909160209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51797.53556562239,
            "unit": "ns/iter",
            "extra": "iterations: 16336\ncpu: 51795.80068560236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57466.669899997665,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57465.70999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72268.21617366502,
            "unit": "ns/iter",
            "extra": "iterations: 12069\ncpu: 72263.08724832215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86064.62462790229,
            "unit": "ns/iter",
            "extra": "iterations: 10078\ncpu: 86063.50466362371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98462.42423545707,
            "unit": "ns/iter",
            "extra": "iterations: 8698\ncpu: 98459.79535525411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116905.06190223379,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 116901.88629117947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1242.9822211401997,
            "unit": "ns/iter",
            "extra": "iterations: 562747\ncpu: 1242.9546492473537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 978.178262804866,
            "unit": "ns/iter",
            "extra": "iterations: 716661\ncpu: 978.1264782093608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 964.5799226568357,
            "unit": "ns/iter",
            "extra": "iterations: 727666\ncpu: 964.5745438154313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 970.9080392993859,
            "unit": "ns/iter",
            "extra": "iterations: 721232\ncpu: 970.876777514033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1938.6238844264685,
            "unit": "ns/iter",
            "extra": "iterations: 376488\ncpu: 1938.586621618749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5573.316109999952,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5573.273000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30438.955078828196,
            "unit": "ns/iter",
            "extra": "iterations: 27782\ncpu: 30438.75170974009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23727.165169317195,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 23726.215157797746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23273.90198356371,
            "unit": "ns/iter",
            "extra": "iterations: 35290\ncpu: 23273.284216491866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23211.125353869593,
            "unit": "ns/iter",
            "extra": "iterations: 35324\ncpu: 23210.264975653885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69417.36179583862,
            "unit": "ns/iter",
            "extra": "iterations: 12941\ncpu: 69416.50567962296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562855.5980000555,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562840.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 569465.6220219197,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 569434.0631036707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 566692.194838725,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 566643.9354838701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 568582.8582626344,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 568555.7805355994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330617.326553667,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 330588.32391713845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556957.9444085222,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 556925.66257272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2348318.1010101014,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2348259.343434345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1090378.4728774508,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1090331.3679245273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3273471.1731448253,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3273249.4699646607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8988.507832244775,
            "unit": "ns/iter",
            "extra": "iterations: 83884\ncpu: 8987.716370225577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43401.14991384268,
            "unit": "ns/iter",
            "extra": "iterations: 19151\ncpu: 43399.40473082345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34665.09165864432,
            "unit": "ns/iter",
            "extra": "iterations: 23893\ncpu: 34662.44925291934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34096.05517985223,
            "unit": "ns/iter",
            "extra": "iterations: 24103\ncpu: 34094.403186325144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34106.501254579896,
            "unit": "ns/iter",
            "extra": "iterations: 24311\ncpu: 34105.14170540086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80539.362054449,
            "unit": "ns/iter",
            "extra": "iterations: 10689\ncpu: 80534.74600056179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606873.7329999295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606801.7000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595970.0425383354,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 595928.5216178491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585748.5359302022,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 585719.4089993284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580727.305312763,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 580687.1553463365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336962.27321983443,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 336949.18730650045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571888.9710906345,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571863.9290407383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2515521.587601035,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2515264.6900269617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1098336.6092089796,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1098277.8040141661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5458.575470000824,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5458.373000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29202.927206295022,
            "unit": "ns/iter",
            "extra": "iterations: 28464\ncpu: 29202.273046655315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23238.995704083827,
            "unit": "ns/iter",
            "extra": "iterations: 35848\ncpu: 23238.158335193042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22814.507775558865,
            "unit": "ns/iter",
            "extra": "iterations: 36589\ncpu: 22812.50102489813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22487.97783850991,
            "unit": "ns/iter",
            "extra": "iterations: 36956\ncpu: 22485.83991773993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67869.18806664071,
            "unit": "ns/iter",
            "extra": "iterations: 12905\ncpu: 67866.23789229005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582974.0109999193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582976.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 583221.1576846065,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 583195.8083832345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577647.7901315951,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 577629.2105263163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 501347.4569999517,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501339.89999999787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331695.6843100291,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 331684.46124763874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569787.2372333483,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 569769.5539754364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.5996017756154,
            "unit": "ns/iter",
            "extra": "iterations: 1345975\ncpu: 521.5784097030063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3202.8987644040353,
            "unit": "ns/iter",
            "extra": "iterations: 218599\ncpu: 3201.9872003073842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2495.7894569953055,
            "unit": "ns/iter",
            "extra": "iterations: 280679\ncpu: 2495.664798577735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2410.6630524407396,
            "unit": "ns/iter",
            "extra": "iterations: 292271\ncpu: 2410.5323484026962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1976.9193083669377,
            "unit": "ns/iter",
            "extra": "iterations: 302299\ncpu: 1976.8421331198515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17548.583371275978,
            "unit": "ns/iter",
            "extra": "iterations: 39534\ncpu: 17547.645065007335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31717.550881427953,
            "unit": "ns/iter",
            "extra": "iterations: 23201\ncpu: 31716.292401189417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7361.979520033607,
            "unit": "ns/iter",
            "extra": "iterations: 95215\ncpu: 7361.8736543610785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7312.726009189306,
            "unit": "ns/iter",
            "extra": "iterations: 95547\ncpu: 7312.766491883615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7346.41626023158,
            "unit": "ns/iter",
            "extra": "iterations: 95546\ncpu: 7346.280325706911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14693.244532051413,
            "unit": "ns/iter",
            "extra": "iterations: 47687\ncpu: 14692.647891458835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14116.337793653613,
            "unit": "ns/iter",
            "extra": "iterations: 49548\ncpu: 14116.123758779202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5233.020282628249,
            "unit": "ns/iter",
            "extra": "iterations: 133957\ncpu: 5232.973267541088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26206.448725148515,
            "unit": "ns/iter",
            "extra": "iterations: 26709\ncpu: 26206.589539106968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21015.921571574134,
            "unit": "ns/iter",
            "extra": "iterations: 33266\ncpu: 21015.76083689012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20805.483194776156,
            "unit": "ns/iter",
            "extra": "iterations: 33680\ncpu: 20805.599762470156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21200.395055743054,
            "unit": "ns/iter",
            "extra": "iterations: 33008\ncpu: 21200.493819680352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48639.12388152813,
            "unit": "ns/iter",
            "extra": "iterations: 14417\ncpu: 48638.34362211242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157617.69410707313,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157618.62348178256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130350.32278481362,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130350.85629188253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130861.94689436576,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 130860.34903358968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131422.4803297062,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131419.1832146859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83263.08631377168,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83262.64902241263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136967.97857688263,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 136964.84315225846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5002.04632999953,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5002.074000000079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25829.350406717913,
            "unit": "ns/iter",
            "extra": "iterations: 26923\ncpu: 25828.986368532667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20443.72882700076,
            "unit": "ns/iter",
            "extra": "iterations: 34041\ncpu: 20443.509297611916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20335.45203572667,
            "unit": "ns/iter",
            "extra": "iterations: 34484\ncpu: 20335.346827514113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20752.205822131218,
            "unit": "ns/iter",
            "extra": "iterations: 33699\ncpu: 20752.007477966737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47627.77974078751,
            "unit": "ns/iter",
            "extra": "iterations: 14660\ncpu: 47627.42155525316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152889.49413328763,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 152884.85720611035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129201.8890324901,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129200.94165435748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129376.32341527728,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 129375.1801885051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129002.92140220766,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 129002.06642066444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82641.74740565923,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82641.01415094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129013.76221976752,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 129012.58728408805 ns\nthreads: 1"
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
        "date": 1705774902745,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1387.781722554931,
            "unit": "ns/iter",
            "extra": "iterations: 507084\ncpu: 1387.78368081028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16218.98783416583,
            "unit": "ns/iter",
            "extra": "iterations: 50798\ncpu: 16218.93578487342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34195.17995662513,
            "unit": "ns/iter",
            "extra": "iterations: 23978\ncpu: 34193.85269830679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50856.99776893085,
            "unit": "ns/iter",
            "extra": "iterations: 16584\ncpu: 50855.64399421128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56588.01439999479,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56586.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71337.03233953053,
            "unit": "ns/iter",
            "extra": "iterations: 12276\ncpu: 71335.85043988269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84827.67531070249,
            "unit": "ns/iter",
            "extra": "iterations: 10219\ncpu: 84825.5308738624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98024.14803899404,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 98023.05599637276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114396.21241143522,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 114392.75780635019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1202.3956142338095,
            "unit": "ns/iter",
            "extra": "iterations: 583068\ncpu: 1202.3637037189478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.290921196538,
            "unit": "ns/iter",
            "extra": "iterations: 735945\ncpu: 952.2593400322025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 947.2570512308033,
            "unit": "ns/iter",
            "extra": "iterations: 737779\ncpu: 947.2480241373092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 943.8540103002878,
            "unit": "ns/iter",
            "extra": "iterations: 742114\ncpu: 943.8398952182554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1906.7332033617279,
            "unit": "ns/iter",
            "extra": "iterations: 366234\ncpu: 1906.7093716039456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5535.82575000064,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5535.647000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29988.194388414584,
            "unit": "ns/iter",
            "extra": "iterations: 27764\ncpu: 29987.487393747324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23497.83859306921,
            "unit": "ns/iter",
            "extra": "iterations: 34856\ncpu: 23496.958916685806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23140.35775692553,
            "unit": "ns/iter",
            "extra": "iterations: 35594\ncpu: 23139.425184019725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22868.290175574726,
            "unit": "ns/iter",
            "extra": "iterations: 35768\ncpu: 22867.09349138895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69399.67495724537,
            "unit": "ns/iter",
            "extra": "iterations: 12866\ncpu: 69396.88325820009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562250.8779999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562204.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563515.774886123,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 563503.5133376707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557093.308135854,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 557078.0909673285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561377.4082687171,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 561367.8940568492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331964.64425982186,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 331946.6767371605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555129.2670056656,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 555112.7781309603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2353626.4060911136,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2353598.4771573627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1076444.786542863,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1076448.9559164734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3280004.69395003,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3279828.113879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8301.928080112175,
            "unit": "ns/iter",
            "extra": "iterations: 100459\ncpu: 8301.318946037678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44206.49803245412,
            "unit": "ns/iter",
            "extra": "iterations: 18551\ncpu: 44205.37976389426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34937.358125026076,
            "unit": "ns/iter",
            "extra": "iterations: 22763\ncpu: 34935.71585467653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34428.97321093021,
            "unit": "ns/iter",
            "extra": "iterations: 23965\ncpu: 34427.515126225604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34283.65180528568,
            "unit": "ns/iter",
            "extra": "iterations: 24179\ncpu: 34282.23665163967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80875.28275345074,
            "unit": "ns/iter",
            "extra": "iterations: 10663\ncpu: 80872.88755509703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595623.4010000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595582.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591297.5336926903,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 591288.3423180615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587696.1269518241,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 587686.7617107944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588932.8371777737,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 588920.4884667544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335833.50269644073,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 335821.34052388347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577785.4630738578,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 577757.5515635356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2545718.964383674,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2545674.794520548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1132671.3118149424,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1132638.4896467743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5440.718649999781,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5440.516999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29191.17330733856,
            "unit": "ns/iter",
            "extra": "iterations: 28210\ncpu: 29190.58489897203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22987.517194479224,
            "unit": "ns/iter",
            "extra": "iterations: 36029\ncpu: 22987.74598240312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22697.055176943715,
            "unit": "ns/iter",
            "extra": "iterations: 36537\ncpu: 22696.55144100503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22750.733255089624,
            "unit": "ns/iter",
            "extra": "iterations: 36638\ncpu: 22749.05016649375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67520.69545949512,
            "unit": "ns/iter",
            "extra": "iterations: 12862\ncpu: 67518.9783859431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570231.8569999534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570239.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577246.5589005095,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 577228.2068062801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571603.274950393,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 571564.5736946457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563248.3837055877,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 563234.4283837067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330260.69683257357,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 330246.90799396706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 554774.666239603,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 554752.9147982084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 517.8535705555329,
            "unit": "ns/iter",
            "extra": "iterations: 1341752\ncpu: 517.8415981492842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3142.8580097198433,
            "unit": "ns/iter",
            "extra": "iterations: 222642\ncpu: 3142.8634309788786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2533.1079034580903,
            "unit": "ns/iter",
            "extra": "iterations: 286052\ncpu: 2533.0887391103784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2416.4694287197585,
            "unit": "ns/iter",
            "extra": "iterations: 290943\ncpu: 2416.4489264220097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1947.1673623656898,
            "unit": "ns/iter",
            "extra": "iterations: 359830\ncpu: 1947.1694967067867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17554.448104117113,
            "unit": "ns/iter",
            "extra": "iterations: 39955\ncpu: 17554.631460392982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31710.485610694628,
            "unit": "ns/iter",
            "extra": "iterations: 22065\ncpu: 31710.20167686359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7380.6268135876135,
            "unit": "ns/iter",
            "extra": "iterations: 94564\ncpu: 7380.138319021965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7385.637845589683,
            "unit": "ns/iter",
            "extra": "iterations: 94838\ncpu: 7385.232712625772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7395.6283708283745,
            "unit": "ns/iter",
            "extra": "iterations: 94858\ncpu: 7395.285584768865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14816.143056759467,
            "unit": "ns/iter",
            "extra": "iterations: 47233\ncpu: 14816.162428810498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13976.749304798373,
            "unit": "ns/iter",
            "extra": "iterations: 49626\ncpu: 13976.613065731684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5181.615944916934,
            "unit": "ns/iter",
            "extra": "iterations: 135504\ncpu: 5181.34003424256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26404.99276421978,
            "unit": "ns/iter",
            "extra": "iterations: 26673\ncpu: 26403.516664792205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20832.07188918085,
            "unit": "ns/iter",
            "extra": "iterations: 33496\ncpu: 20831.442560305448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20732.928211960236,
            "unit": "ns/iter",
            "extra": "iterations: 33780\ncpu: 20731.9597394908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21179.121169160804,
            "unit": "ns/iter",
            "extra": "iterations: 33152\ncpu: 21178.152147683417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48226.04506186082,
            "unit": "ns/iter",
            "extra": "iterations: 14469\ncpu: 48223.97539567416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156600.28244789815,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 156599.59650302737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130516.51885032863,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130511.90742814595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130817.65017667385,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130815.08275990233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131962.95064052957,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131959.25018839564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82373.90781563878,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82372.95768006529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129405.66147203458,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 129406.90950056435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4866.25024004283,
            "unit": "ns/iter",
            "extra": "iterations: 142683\ncpu: 4866.119299425967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25248.761433337335,
            "unit": "ns/iter",
            "extra": "iterations: 27879\ncpu: 25248.190394203586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20170.617175075065,
            "unit": "ns/iter",
            "extra": "iterations: 34585\ncpu: 20170.333959809246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19880.928905783774,
            "unit": "ns/iter",
            "extra": "iterations: 35249\ncpu: 19881.151238332972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20443.21940953173,
            "unit": "ns/iter",
            "extra": "iterations: 34210\ncpu: 20442.85296696859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46854.354071796995,
            "unit": "ns/iter",
            "extra": "iterations: 14932\ncpu: 46853.174390570406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153522.3004849948,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 153519.42239858833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127513.28342441253,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 127509.19854280425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127301.01619654786,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127294.23111919945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128051.40014603543,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 128046.25775830654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81627.97058823457,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 81625.26844070923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127500.31449405712,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127497.93983591642 ns\nthreads: 1"
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
        "date": 1705778463247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1503.931418480048,
            "unit": "ns/iter",
            "extra": "iterations: 494346\ncpu: 1503.828492594256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16526.01291549577,
            "unit": "ns/iter",
            "extra": "iterations: 50482\ncpu: 16525.004952260213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35185.3750429227,
            "unit": "ns/iter",
            "extra": "iterations: 23296\ncpu: 35183.86847527474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51945.169966995454,
            "unit": "ns/iter",
            "extra": "iterations: 16362\ncpu: 51942.51925192521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56805.031199996854,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56804.400000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71673.28076827891,
            "unit": "ns/iter",
            "extra": "iterations: 12131\ncpu: 71669.969499629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85276.5375360446,
            "unit": "ns/iter",
            "extra": "iterations: 10057\ncpu: 85275.43999204537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97760.83146321776,
            "unit": "ns/iter",
            "extra": "iterations: 8823\ncpu: 97758.95953757226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114137.17367652719,
            "unit": "ns/iter",
            "extra": "iterations: 7537\ncpu: 114132.94414223153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1185.177424528869,
            "unit": "ns/iter",
            "extra": "iterations: 592280\ncpu: 1185.148409536028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 968.2035407264383,
            "unit": "ns/iter",
            "extra": "iterations: 724936\ncpu: 968.1749837227015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 937.5865611768515,
            "unit": "ns/iter",
            "extra": "iterations: 745854\ncpu: 937.5674059534444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.1597346914748,
            "unit": "ns/iter",
            "extra": "iterations: 735144\ncpu: 953.1304071039128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1872.1289020927338,
            "unit": "ns/iter",
            "extra": "iterations: 373966\ncpu: 1872.114577261034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5528.18618999936,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5528.116000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29700.08002997382,
            "unit": "ns/iter",
            "extra": "iterations: 28027\ncpu: 29698.29806971846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23367.88365313794,
            "unit": "ns/iter",
            "extra": "iterations: 35334\ncpu: 23366.726099507523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23182.477577040805,
            "unit": "ns/iter",
            "extra": "iterations: 35923\ncpu: 23181.16248642932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22934.321294100504,
            "unit": "ns/iter",
            "extra": "iterations: 35855\ncpu: 22933.437456421652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 68766.5916582806,
            "unit": "ns/iter",
            "extra": "iterations: 12923\ncpu: 68762.51644355034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 576019.6850000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575975.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552306.3414166715,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 552270.2616464582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567353.2875399438,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 567324.728434506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556786.3284156799,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 556779.0891597195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327603.91448842786,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 327596.9380134437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561181.2243051259,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561158.9528118939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2330458.67676766,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2330398.73737374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1064601.5883694708,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1064505.7012542752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3287676.5390072945,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3287458.1560283783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8494.588908176424,
            "unit": "ns/iter",
            "extra": "iterations: 99659\ncpu: 8494.153061941202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43680.374960172856,
            "unit": "ns/iter",
            "extra": "iterations: 18834\ncpu: 43678.83083784651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34519.77431483827,
            "unit": "ns/iter",
            "extra": "iterations: 23936\ncpu: 34517.655414438355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34317.47599900511,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 34315.79754601224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34168.33724498152,
            "unit": "ns/iter",
            "extra": "iterations: 24116\ncpu: 34166.87261569071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79161.8039799089,
            "unit": "ns/iter",
            "extra": "iterations: 10754\ncpu: 79157.94123116972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 607798.8920000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607793.1000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 605515.8672199498,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 605493.153526972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 598083.7575966989,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598071.6160220975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590341.1636116669,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 590307.8071961972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336820.06527613173,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 336809.3858632681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577920.8669786291,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 577916.3770053447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2509970.3315362604,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2509800.808625327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1072671.8099652254,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1072639.745075321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5339.949509999542,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5339.7849999999635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29295.82548036145,
            "unit": "ns/iter",
            "extra": "iterations: 28312\ncpu: 29295.334133936034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22765.699050241223,
            "unit": "ns/iter",
            "extra": "iterations: 36325\ncpu: 22764.982794218813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22437.59168088493,
            "unit": "ns/iter",
            "extra": "iterations: 36927\ncpu: 22437.490183334623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22318.48423472157,
            "unit": "ns/iter",
            "extra": "iterations: 36980\ncpu: 22317.09843158469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68000.48446338643,
            "unit": "ns/iter",
            "extra": "iterations: 12905\ncpu: 68000.15497869029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581336.1489999807,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581322.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570232.5642715684,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 570219.9736321699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566527.3109243525,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 566494.5054945067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564184.0863402124,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 564171.4561855674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330006.4179775495,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 329999.2134831462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558348.7374516982,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 558323.1660231645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 520.5279320216557,
            "unit": "ns/iter",
            "extra": "iterations: 1344192\ncpu: 520.5236305527792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3168.51625894582,
            "unit": "ns/iter",
            "extra": "iterations: 220494\ncpu: 3168.398686585578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2555.0951237318395,
            "unit": "ns/iter",
            "extra": "iterations: 302711\ncpu: 2555.075302846623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2553.4296381597337,
            "unit": "ns/iter",
            "extra": "iterations: 274403\ncpu: 2553.33724485521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1976.9708420039763,
            "unit": "ns/iter",
            "extra": "iterations: 354654\ncpu: 1976.9454172235378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17505.98242931834,
            "unit": "ns/iter",
            "extra": "iterations: 39896\ncpu: 17505.584519751268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31124.346659048075,
            "unit": "ns/iter",
            "extra": "iterations: 22763\ncpu: 31124.056583051795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7353.472452513749,
            "unit": "ns/iter",
            "extra": "iterations: 95290\ncpu: 7353.280512120967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7341.084558053574,
            "unit": "ns/iter",
            "extra": "iterations: 95532\ncpu: 7340.721433655693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7350.17470962419,
            "unit": "ns/iter",
            "extra": "iterations: 95135\ncpu: 7350.201292899537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14093.440618653436,
            "unit": "ns/iter",
            "extra": "iterations: 49721\ncpu: 14092.634902757458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14162.198716390978,
            "unit": "ns/iter",
            "extra": "iterations: 49392\ncpu: 14162.036362164023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5199.41561991625,
            "unit": "ns/iter",
            "extra": "iterations: 134623\ncpu: 5199.134620384381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26047.941845668392,
            "unit": "ns/iter",
            "extra": "iterations: 26722\ncpu: 26046.920140708073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20829.403249761832,
            "unit": "ns/iter",
            "extra": "iterations: 33664\ncpu: 20829.167656844034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20817.834821427605,
            "unit": "ns/iter",
            "extra": "iterations: 33600\ncpu: 20816.705357142546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21109.113309135475,
            "unit": "ns/iter",
            "extra": "iterations: 33060\ncpu: 21108.690260133262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49001.2248441937,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 48996.79294167133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159475.15328639705,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 159466.61971830888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135548.63641476756,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 135532.64579036148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131651.44099962144,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131645.32130777926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132415.53967954623,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 132410.59377945392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83449.44835792581,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83449.71442170498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132190.9440347918,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132187.27547740663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4963.317108611675,
            "unit": "ns/iter",
            "extra": "iterations: 141081\ncpu: 4963.326741375597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25647.832966385373,
            "unit": "ns/iter",
            "extra": "iterations: 27252\ncpu: 25647.313958608553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20724.227573768265,
            "unit": "ns/iter",
            "extra": "iterations: 33822\ncpu: 20724.274141091697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20401.24710402101,
            "unit": "ns/iter",
            "extra": "iterations: 34099\ncpu: 20400.988298777196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20782.561658091578,
            "unit": "ns/iter",
            "extra": "iterations: 33629\ncpu: 20781.85792024741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47229.22660098759,
            "unit": "ns/iter",
            "extra": "iterations: 14819\ncpu: 47227.99784061021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154456.34203539093,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 154455.84070796455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126072.6097426315,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 126068.40073529536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125967.39985628605,
            "unit": "ns/iter",
            "extra": "iterations: 5567\ncpu: 125960.98437219174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126026.50675553858,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 126021.2033867758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81751.9858760325,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 81747.02929847078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125699.71303100906,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 125699.98207564068 ns\nthreads: 1"
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
        "date": 1705953632715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1373.8957371997988,
            "unit": "ns/iter",
            "extra": "iterations: 488036\ncpu: 1373.902949782393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16211.128584334647,
            "unit": "ns/iter",
            "extra": "iterations: 50916\ncpu: 16211.226333569015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34969.99953541397,
            "unit": "ns/iter",
            "extra": "iterations: 23677\ncpu: 34969.19373231405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51762.14181214478,
            "unit": "ns/iter",
            "extra": "iterations: 16268\ncpu: 51762.035898696835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57228.26209999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57228.98000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72383.0909615179,
            "unit": "ns/iter",
            "extra": "iterations: 12137\ncpu: 72383.95814451676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85729.69656940157,
            "unit": "ns/iter",
            "extra": "iterations: 10144\ncpu: 85729.14037854891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98384.70780254096,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 98383.23475887171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114535.07504962674,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 114533.5671740569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1191.2368101068917,
            "unit": "ns/iter",
            "extra": "iterations: 590490\ncpu: 1191.2435434977717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 961.1335432235333,
            "unit": "ns/iter",
            "extra": "iterations: 727682\ncpu: 961.1282125983581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 945.6418382725909,
            "unit": "ns/iter",
            "extra": "iterations: 740456\ncpu: 945.6466015536375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 964.2036636380393,
            "unit": "ns/iter",
            "extra": "iterations: 722888\ncpu: 964.197911709696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1859.460016681402,
            "unit": "ns/iter",
            "extra": "iterations: 375269\ncpu: 1859.466942379997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5523.37499000032,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5523.442000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30270.507529013415,
            "unit": "ns/iter",
            "extra": "iterations: 27228\ncpu: 30270.541354488032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23980.966260078825,
            "unit": "ns/iter",
            "extra": "iterations: 34351\ncpu: 23980.75456318594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23378.292604957798,
            "unit": "ns/iter",
            "extra": "iterations: 35037\ncpu: 23378.374290036227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23407.013505391013,
            "unit": "ns/iter",
            "extra": "iterations: 34949\ncpu: 23407.287762167733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69175.19447232921,
            "unit": "ns/iter",
            "extra": "iterations: 12953\ncpu: 69172.63182274392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552402.3780000107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552392.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555033.6197182876,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 555014.0845070436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553185.849367071,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 553188.5443037982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567779.3819935909,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 567775.4340836003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332112.1400602006,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 332112.1611445785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563740.8284959991,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 563694.459102901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2350627.4005038533,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2350625.1889168755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074275.5865273785,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1074254.355400696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3278884.985915328,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3278825.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8314.978701381195,
            "unit": "ns/iter",
            "extra": "iterations: 100476\ncpu: 8315.079222898992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43655.692182237355,
            "unit": "ns/iter",
            "extra": "iterations: 19008\ncpu: 43655.813341750945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34636.32272344022,
            "unit": "ns/iter",
            "extra": "iterations: 23720\ncpu: 34636.306913996756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34286.15636483681,
            "unit": "ns/iter",
            "extra": "iterations: 24219\ncpu: 34286.56426772372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34312.4114685201,
            "unit": "ns/iter",
            "extra": "iterations: 24031\ncpu: 34312.37568141148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81426.84855296988,
            "unit": "ns/iter",
            "extra": "iterations: 10677\ncpu: 81426.05600824255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 613467.8969999641,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613468.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 607756.0751404224,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 607762.7808988779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 598275.2074175493,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 598264.972527471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 601026.2961165289,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 601017.2676837714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341902.23973407573,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 341906.296441144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 594368.5047814149,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 594366.3251366126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2516915.298629911,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2516912.8767123306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1094410.992932803,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1094402.1201413486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5437.967849999268,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5438.031999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28883.092042216875,
            "unit": "ns/iter",
            "extra": "iterations: 28802\ncpu: 28883.04631622813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22949.681188553783,
            "unit": "ns/iter",
            "extra": "iterations: 36313\ncpu: 22949.65439374341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22708.691942998114,
            "unit": "ns/iter",
            "extra": "iterations: 36701\ncpu: 22708.258630554956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22567.850833539338,
            "unit": "ns/iter",
            "extra": "iterations: 36771\ncpu: 22567.721846020122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68127.62036675656,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 68126.53140850562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 590834.6679999568,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590829.4000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 584585.4523489919,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 584583.22147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580841.3313373149,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 580841.5169660705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578367.0405046792,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 578359.1633466133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332449.4196733987,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 332444.89175844897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573815.5564304293,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 573822.7034120745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.7306793636196,
            "unit": "ns/iter",
            "extra": "iterations: 1337016\ncpu: 524.7203474004813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3219.8978414614717,
            "unit": "ns/iter",
            "extra": "iterations: 217045\ncpu: 3219.8852772466694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2507.4068697470543,
            "unit": "ns/iter",
            "extra": "iterations: 278642\ncpu: 2507.3951522024613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2499.2448925646036,
            "unit": "ns/iter",
            "extra": "iterations: 279935\ncpu: 2499.2741172057786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1998.2241165875582,
            "unit": "ns/iter",
            "extra": "iterations: 351393\ncpu: 1998.21510388653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17899.151455867657,
            "unit": "ns/iter",
            "extra": "iterations: 39358\ncpu: 17899.095482494093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32185.50753560667,
            "unit": "ns/iter",
            "extra": "iterations: 21697\ncpu: 32185.29750656792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7585.942304768422,
            "unit": "ns/iter",
            "extra": "iterations: 92070\ncpu: 7586.034538937681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7521.284230740289,
            "unit": "ns/iter",
            "extra": "iterations: 93213\ncpu: 7521.250254792852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7537.543894588698,
            "unit": "ns/iter",
            "extra": "iterations: 92893\ncpu: 7537.4043254066855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15140.572104682175,
            "unit": "ns/iter",
            "extra": "iterations: 46273\ncpu: 15140.405852224847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14422.701058364026,
            "unit": "ns/iter",
            "extra": "iterations: 48471\ncpu: 14422.398960203116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5249.730240923861,
            "unit": "ns/iter",
            "extra": "iterations: 133445\ncpu: 5249.792049158827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26365.970669180344,
            "unit": "ns/iter",
            "extra": "iterations: 26525\ncpu: 26365.74929311992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20971.7489668825,
            "unit": "ns/iter",
            "extra": "iterations: 33394\ncpu: 20971.47092292025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20902.17087355385,
            "unit": "ns/iter",
            "extra": "iterations: 33358\ncpu: 20902.041489297717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21398.02217956936,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21398.287786003555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48529.98901939046,
            "unit": "ns/iter",
            "extra": "iterations: 14389\ncpu: 48528.77197859445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158440.3862349973,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 158434.23137876394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132873.8564902858,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 132869.2424819203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132609.08778553884,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132595.46913347294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132997.40361217016,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132998.06083650305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83706.6678229667,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83705.49043062211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132863.6130929735,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132856.1480075891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5020.97464644367,
            "unit": "ns/iter",
            "extra": "iterations: 138521\ncpu: 5020.752810043294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25316.85543402537,
            "unit": "ns/iter",
            "extra": "iterations: 27337\ncpu: 25317.167209276788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20162.31593851057,
            "unit": "ns/iter",
            "extra": "iterations: 34608\ncpu: 20162.216828478835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19819.14552101395,
            "unit": "ns/iter",
            "extra": "iterations: 35287\ncpu: 19819.386742993138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20418.642236715037,
            "unit": "ns/iter",
            "extra": "iterations: 34193\ncpu: 20418.986342233715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47017.93162509392,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 47018.2967443755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153523.8871569818,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 153524.98353457815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128098.4239150473,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 128098.82805346942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127499.29322897363,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127497.59737895933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125025.42736879949,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 125023.57155651072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81255.29187376957,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 81256.30562940732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125211.76614780002,
            "unit": "ns/iter",
            "extra": "iterations: 5589\ncpu: 125208.55251386653 ns\nthreads: 1"
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
        "date": 1705955057522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1388.5536745970053,
            "unit": "ns/iter",
            "extra": "iterations: 507838\ncpu: 1388.557177682647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16102.181344918961,
            "unit": "ns/iter",
            "extra": "iterations: 51096\ncpu: 16102.413104744011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34740.850329505265,
            "unit": "ns/iter",
            "extra": "iterations: 23672\ncpu: 34740.15714768504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52195.71095714142,
            "unit": "ns/iter",
            "extra": "iterations: 16309\ncpu: 52194.996627628956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57551.138799999535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57550.879999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72522.87731729634,
            "unit": "ns/iter",
            "extra": "iterations: 12137\ncpu: 72519.47763038643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85753.69349112612,
            "unit": "ns/iter",
            "extra": "iterations: 10140\ncpu: 85751.33136094673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99373.3593497839,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 99371.63938206133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114967.0473977679,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 114963.70154009567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1197.4002905052,
            "unit": "ns/iter",
            "extra": "iterations: 581745\ncpu: 1197.352792030871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 961.2915314412405,
            "unit": "ns/iter",
            "extra": "iterations: 731187\ncpu: 961.2453448980916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 948.7833291058984,
            "unit": "ns/iter",
            "extra": "iterations: 737261\ncpu: 948.7687535350434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 955.1561208574133,
            "unit": "ns/iter",
            "extra": "iterations: 735379\ncpu: 955.1693752473218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1866.519126718051,
            "unit": "ns/iter",
            "extra": "iterations: 374816\ncpu: 1866.4811534192759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5530.378049999172,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.141999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30115.935355670725,
            "unit": "ns/iter",
            "extra": "iterations: 27427\ncpu: 30115.451926933292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23962.066709522864,
            "unit": "ns/iter",
            "extra": "iterations: 34223\ncpu: 23961.911579931635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23165.60136700233,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23165.70920183017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23761.544613803613,
            "unit": "ns/iter",
            "extra": "iterations: 35034\ncpu: 23761.343266541127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69839.13606877453,
            "unit": "ns/iter",
            "extra": "iterations: 12795\ncpu: 69837.65533411498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564936.6200000258,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564916.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 570216.7973856162,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 570175.2941176473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558254.1354839386,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 558240.9032258062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 567290.2178734218,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 567263.2746249198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330073.1110251456,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 330059.6905222429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569178.4977257745,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 569172.8395061749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2386303.515706866,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2386214.6596858627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1086418.4730047635,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1086410.0938967145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3318253.249110504,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3318169.750889681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8491.57249018636,
            "unit": "ns/iter",
            "extra": "iterations: 100117\ncpu: 8491.59982820098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43921.39006039931,
            "unit": "ns/iter",
            "extra": "iterations: 18874\ncpu: 43921.10310480031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34708.92119838867,
            "unit": "ns/iter",
            "extra": "iterations: 23832\ncpu: 34709.025679758255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34869.6148235579,
            "unit": "ns/iter",
            "extra": "iterations: 23719\ncpu: 34868.624309625244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34470.085769009325,
            "unit": "ns/iter",
            "extra": "iterations: 24018\ncpu: 34469.447914064425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81976.48803561556,
            "unit": "ns/iter",
            "extra": "iterations: 10782\ncpu: 81976.0805045445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 589726.877999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589735.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590439.2620502573,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 590426.8839103882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589390.0361527597,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 589378.1718963132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596005.0198766611,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 595991.7751884845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343106.0981474145,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 343098.69925108564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587748.8865771219,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 587729.3959731539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2509829.2972975164,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2509753.7837837846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1107631.9713261581,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1107602.270011945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5426.134350000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5426.126999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28972.850225224043,
            "unit": "ns/iter",
            "extra": "iterations: 28416\ncpu: 28972.67736486488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23331.503571328594,
            "unit": "ns/iter",
            "extra": "iterations: 35421\ncpu: 23330.882809632745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22814.500346538145,
            "unit": "ns/iter",
            "extra": "iterations: 36071\ncpu: 22813.783926145636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22570.201023589587,
            "unit": "ns/iter",
            "extra": "iterations: 36538\ncpu: 22569.14718922772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68098.6519748587,
            "unit": "ns/iter",
            "extra": "iterations: 12887\ncpu: 68096.1046015366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 559077.2409999545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559085.5999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566843.8490686902,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 566845.0867052024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 560998.8219264977,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 560961.343472749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571901.3530534463,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 571889.1857506373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328859.13682242564,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 328860.59813084226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562639.327763481,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 562605.9768637549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 538.4835010938332,
            "unit": "ns/iter",
            "extra": "iterations: 1303147\ncpu: 538.4628134815188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3224.9599148275684,
            "unit": "ns/iter",
            "extra": "iterations: 217911\ncpu: 3224.869327385976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2585.131739777429,
            "unit": "ns/iter",
            "extra": "iterations: 270799\ncpu: 2585.0597675766735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2584.6116642375882,
            "unit": "ns/iter",
            "extra": "iterations: 292981\ncpu: 2584.519815278115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1992.1842729209961,
            "unit": "ns/iter",
            "extra": "iterations: 351750\ncpu: 1992.1313432835746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17652.933875736264,
            "unit": "ns/iter",
            "extra": "iterations: 39577\ncpu: 17653.16219016099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31513.521236386972,
            "unit": "ns/iter",
            "extra": "iterations: 22226\ncpu: 31513.542697741115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7328.63925147783,
            "unit": "ns/iter",
            "extra": "iterations: 95762\ncpu: 7328.475804598941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7340.607955556029,
            "unit": "ns/iter",
            "extra": "iterations: 95581\ncpu: 7340.316590117232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7357.73536997031,
            "unit": "ns/iter",
            "extra": "iterations: 95386\ncpu: 7357.510536137346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14815.935029801423,
            "unit": "ns/iter",
            "extra": "iterations: 47314\ncpu: 14814.875089825495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14198.484205210794,
            "unit": "ns/iter",
            "extra": "iterations: 49510\ncpu: 14197.828721470367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5179.993167127803,
            "unit": "ns/iter",
            "extra": "iterations: 135375\ncpu: 5179.932779316658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26197.325772040655,
            "unit": "ns/iter",
            "extra": "iterations: 26715\ncpu: 26196.844469399362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20905.14357508255,
            "unit": "ns/iter",
            "extra": "iterations: 33230\ncpu: 20905.425820042077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20729.115214310877,
            "unit": "ns/iter",
            "extra": "iterations: 33876\ncpu: 20728.58070610482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21164.161843550355,
            "unit": "ns/iter",
            "extra": "iterations: 32828\ncpu: 21163.461069818364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48195.211144099725,
            "unit": "ns/iter",
            "extra": "iterations: 14483\ncpu: 48193.98605261408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157841.06885686686,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157835.46354635328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130721.71727650476,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 130719.50207468976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129167.91255521956,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 129165.97938144402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130231.4973997022,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130225.39004457604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82855.35951341418,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82852.8994921459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129400.0683665851,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129401.90317812111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4982.511928549477,
            "unit": "ns/iter",
            "extra": "iterations: 140629\ncpu: 4982.380590063303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25646.29802290457,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 25645.287079594636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20234.709799471522,
            "unit": "ns/iter",
            "extra": "iterations: 34359\ncpu: 20233.734974824834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20006.24262136675,
            "unit": "ns/iter",
            "extra": "iterations: 35203\ncpu: 20006.28639604594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20569.954358430103,
            "unit": "ns/iter",
            "extra": "iterations: 34026\ncpu: 20570.058190795182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46890.23733564713,
            "unit": "ns/iter",
            "extra": "iterations: 14983\ncpu: 46888.37348995526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151318.0566566068,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 151318.35415769092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128128.967635763,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 128130.8283049928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 123957.99494220459,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 123953.77528901766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124516.80773324975,
            "unit": "ns/iter",
            "extra": "iterations: 5638\ncpu: 124516.05179141552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80977.76299640142,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 80974.38925552837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 123816.0986586609,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 123812.3190963659 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}