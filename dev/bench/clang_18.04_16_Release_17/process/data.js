window.BENCHMARK_DATA = {
  "lastUpdate": 1702490338277,
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
      }
    ]
  }
}