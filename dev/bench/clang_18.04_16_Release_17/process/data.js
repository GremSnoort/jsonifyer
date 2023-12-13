window.BENCHMARK_DATA = {
  "lastUpdate": 1702492945165,
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
      }
    ]
  }
}