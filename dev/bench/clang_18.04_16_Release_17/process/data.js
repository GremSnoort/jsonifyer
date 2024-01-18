window.BENCHMARK_DATA = {
  "lastUpdate": 1705575678991,
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
      }
    ]
  }
}