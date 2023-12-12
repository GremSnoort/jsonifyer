window.BENCHMARK_DATA = {
  "lastUpdate": 1702394201405,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392420197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17422.532157295904,
            "unit": "ns/iter",
            "extra": "iterations: 38094\ncpu: 17422.221347193783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 165969.90994152502,
            "unit": "ns/iter",
            "extra": "iterations: 5130\ncpu: 165966.21832358677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 316499.4976216371,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 316490.15733626054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 466323.1815747682,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 466298.4467059453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 617769.784604511,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 617748.0225988702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 617918.4239999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617877.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 740337.7086991261,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 740286.4325618518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 857370.3786046386,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 857294.9767441858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 974529.8874867695,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 974475.3943217663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14049.668413309199,
            "unit": "ns/iter",
            "extra": "iterations: 49619\ncpu: 14049.037667022718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11445.073422041229,
            "unit": "ns/iter",
            "extra": "iterations: 60949\ncpu: 11444.763654858993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11384.382987727151,
            "unit": "ns/iter",
            "extra": "iterations: 61438\ncpu: 11383.135844265767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11418.663050030711,
            "unit": "ns/iter",
            "extra": "iterations: 61383\ncpu: 11417.635175863023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19602.107581993587,
            "unit": "ns/iter",
            "extra": "iterations: 35703\ncpu: 19600.767442511868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69485.0026031042,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 69476.45001220213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 368927.19593428116,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 368895.93425605545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 294627.0689892842,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 294604.0013797858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 289887.7687074856,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 289865.9863945587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286869.63127736945,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 286841.8941691954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595022.3859999824,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594949.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5213550.353932681,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5213115.168539321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4223102.8772727605,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4222715.909090915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4177766.452915119,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4177371.300448429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4199834.461883359,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4199447.533632292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2436398.3254590677,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2436203.412073497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4093800.336283043,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4093600.8849557377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16325759.353846408,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16324223.076923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7409068.339999294,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7408597.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20859472.27451069,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 20857315.686274525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79167.45780668742,
            "unit": "ns/iter",
            "extra": "iterations: 10760\ncpu: 79160.4368029741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 429629.7895261932,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 429595.0623441384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 331203.11662147014,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 331176.90817512415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 327814.1737805125,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 327771.684451219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 318781.9057591413,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 318743.30590875144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584076.1989999237,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584022.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5294499.051136629,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 5294085.79545455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4280288.359447176,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4279945.622119822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4260287.625570673,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4259783.1050228365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4232595.07727287,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4232293.181818166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2475698.250666634,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2475462.1333333375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4152625.580357291,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4152286.607142841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16655175.937499322,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16653592.187499955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7170816.179999519,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7169914.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67629.04149643957,
            "unit": "ns/iter",
            "extra": "iterations: 12483\ncpu: 67626.59617079217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 373353.58438722685,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 373310.292193633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 285466.76091333537,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 285448.5224983216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282333.1140961956,
            "unit": "ns/iter",
            "extra": "iterations: 3015\ncpu: 282317.3466003319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277949.4814090118,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 277944.25962165644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 548573.5480000358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548549.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5277477.350282836,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5277372.31638417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4278008.484018726,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4277826.940639278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4225453.436936994,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4225191.891891898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4199695.950672734,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4199687.443946194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2441129.4068240654,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2441020.734908127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4123847.278761199,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4123596.4601769843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6662.038043995446,
            "unit": "ns/iter",
            "extra": "iterations: 105194\ncpu: 6661.861893263824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43201.59775294709,
            "unit": "ns/iter",
            "extra": "iterations: 16199\ncpu: 43200.38891289611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32289.575891827997,
            "unit": "ns/iter",
            "extra": "iterations: 21669\ncpu: 32288.739674188917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33522.94926632426,
            "unit": "ns/iter",
            "extra": "iterations: 20854\ncpu: 33521.66011316759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26127.167669142742,
            "unit": "ns/iter",
            "extra": "iterations: 26767\ncpu: 26126.756827436646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 190847.42696935553,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 190827.65317286763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 352040.1526870551,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 351984.63083877607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 86551.87917387385,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 86543.76700469841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85259.35100547965,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85252.09018890852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85898.94558157073,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 85890.90574825404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 177929.8037572976,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 177910.4087331832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 156262.15430995778,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 156257.1013845463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 52007.500482514646,
            "unit": "ns/iter",
            "extra": "iterations: 13471\ncpu: 52002.28639299248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 258043.87223044827,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 258019.38700147835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 211969.09391092896,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 211944.7743108114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 210379.01318154455,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 210362.5823846609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 214087.37706420978,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 214063.73088685304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 367718.8247639388,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 367690.7660020939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1502371.4077253216,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1502287.1244634984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1251366.4303570848,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1251213.392857155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1252218.9463325846,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1252090.5187835486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1245394.0177620568,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1245325.5772646365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 803395.2991944213,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 803371.1162255551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1237279.1201414256,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1237182.5088339327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52410.55792157834,
            "unit": "ns/iter",
            "extra": "iterations: 13337\ncpu: 52406.59068756042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 258227.58521257408,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 258202.1072088732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 213218.25901243,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 213192.30536201215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211182.91125866387,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 211162.5415031717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 211663.34689571138,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 211634.7498493077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 368128.13820286526,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 368080.34682080493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1496295.593147705,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1496120.5567451832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1247931.726785672,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1247871.6071428712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1235022.614159346,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1234983.1858407129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1244147.142095932,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1244037.8330372781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 799731.6295454869,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 799651.8181818114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1236236.929453234,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1236113.2275132458 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394200477,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17824.582369202668,
            "unit": "ns/iter",
            "extra": "iterations: 39068\ncpu: 17823.8814374936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 164121.23954669834,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 164111.2348573662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 310216.0307362434,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 310211.79413867043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 454166.899265453,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 454132.0041972716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 621259.9365517235,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 621240.4137931034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606692.8750000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606684.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 723509.934799698,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 723493.3228593869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 840124.8136363454,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 840098.2727272725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 957155.5257731613,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 957146.597938144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14102.027755348881,
            "unit": "ns/iter",
            "extra": "iterations: 49540\ncpu: 14101.586596689534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11631.007331797622,
            "unit": "ns/iter",
            "extra": "iterations: 59467\ncpu: 11630.744782820722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11479.669808222354,
            "unit": "ns/iter",
            "extra": "iterations: 60904\ncpu: 11478.735386838294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11533.419688606953,
            "unit": "ns/iter",
            "extra": "iterations: 60695\ncpu: 11532.921986984084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19764.81731149523,
            "unit": "ns/iter",
            "extra": "iterations: 35410\ncpu: 19764.075120022582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 66465.28491490008,
            "unit": "ns/iter",
            "extra": "iterations: 12867\ncpu: 66461.95694412052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359673.0315607432,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 359654.5611759616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287383.9148286459,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 287374.55039022764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 281821.3272787373,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 281810.20475561346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 280391.86725955445,
            "unit": "ns/iter",
            "extra": "iterations: 3036\ncpu: 280382.8722002636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 575078.2000000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575031.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5069707.300546657,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 5069490.710382528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4124179.2246696083,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4123968.722466952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4079763.6710529034,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4079679.3859649105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4047251.7205241537,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4047017.4672489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2359550.3409669315,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2359440.9669211204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3992978.2188843414,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3992871.6738197324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15692141.588235632,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15691224.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7081293.680000726,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081087.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19763026.203705706,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19762112.96296296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76902.79615593197,
            "unit": "ns/iter",
            "extra": "iterations: 11082\ncpu: 76899.01642302838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 413549.616795343,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 413522.53861003934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319819.07611938834,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 319810.820895522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313325.6825164685,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 313312.3262618881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 311105.47001092555,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 311087.27735368727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 570029.8919999795,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569993.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5178057.943502953,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5177896.04519776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4174143.434977752,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4173961.883408072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4178564.8750004405,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4178467.410714275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4132787.7079643295,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4132700.884955779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2428545.198952822,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2428506.020942401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4046617.817391507,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4046505.2173913037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16140288.515151206,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16139628.787878798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6936771.00000059,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6936787.999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66935.23421491402,
            "unit": "ns/iter",
            "extra": "iterations: 12591\ncpu: 66934.26256850135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 355347.2839352806,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 355342.00913242105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 276328.4105297226,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 276329.0697674424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 273545.9597553303,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 273542.0476497099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 267663.22410548263,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 267653.01318267355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534363.9430000167,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534351.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5143388.082417884,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 5143317.032967059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4129501.3407078744,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4129469.02654866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4121427.8362833154,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4121274.3362832065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4109951.176211738,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4109900.4405286177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2389502.0694087218,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2389463.496143955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4006712.2456896454,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4006592.24137931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6553.123542186076,
            "unit": "ns/iter",
            "extra": "iterations: 106838\ncpu: 6553.033564836498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41482.48656311106,
            "unit": "ns/iter",
            "extra": "iterations: 16931\ncpu: 41481.111570491834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33248.98619675756,
            "unit": "ns/iter",
            "extra": "iterations: 21082\ncpu: 33248.178540935485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31959.023014751023,
            "unit": "ns/iter",
            "extra": "iterations: 21899\ncpu: 31957.57340517846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25984.10306862586,
            "unit": "ns/iter",
            "extra": "iterations: 26885\ncpu: 25983.448019341453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188459.6955818919,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188455.9267241373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 338259.5091787389,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 338255.2657004839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 83975.26631541505,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 83972.54221051454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 82853.83949149497,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 82852.97611975735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 83489.48925560425,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 83489.58803276852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171333.55351006685,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 171330.09327442507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158898.96009071238,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158895.53287981998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50676.89651675908,
            "unit": "ns/iter",
            "extra": "iterations: 13809\ncpu: 50675.05250199202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 254251.98581302425,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 254246.78064750662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206458.14799525184,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206453.0070754739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 205895.69838473503,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 205893.27459618336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 209526.9488704165,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 209408.62068965557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 363729.82874934596,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 363705.9678256399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1459585.0814195883,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1459572.0250522182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1210053.0588236009,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1209977.3356401403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1211266.8096885458,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1211205.8823529293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1201880.6838487447,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1201809.106529229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770983.1651982162,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 770928.3039647434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1196133.3743589716,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1196088.2051282062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 51571.80762156836,
            "unit": "ns/iter",
            "extra": "iterations: 13593\ncpu: 51571.27197822394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 252487.78465970128,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 252487.9366222557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 207262.36179706722,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 207260.16066647004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 207117.65788695152,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 207118.14146196956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 206129.80076629217,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 206125.61155319694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 361654.8506460034,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 361654.9870801012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1452258.2479166603,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1452215.4166666763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1209279.765517271,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1209242.4137931052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1195896.4236707115,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1195878.0445969275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1205931.7745265749,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1205904.9913941463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765818.6947483135,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765808.6433260369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1197874.1538462047,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1197832.820512828 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}