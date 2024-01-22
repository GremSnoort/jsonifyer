window.BENCHMARK_DATA = {
  "lastUpdate": 1705961315823,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 18.04 Debug c++-17": [
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
        "date": 1702489596374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.754258612913,
            "unit": "ns/iter",
            "extra": "iterations: 44909\ncpu: 15685.553007192324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124099.12718718231,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124092.30995441845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233465.07735848377,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233464.4474393531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341075.83024078765,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341059.4157125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450112.58220602805,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450086.10822060355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555922.7866323994,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 555889.6529562979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536221.9130000767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536219.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621362.7210000822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621336.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710212.8382913365,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 710162.013729977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12327.77085656637,
            "unit": "ns/iter",
            "extra": "iterations: 56493\ncpu: 12327.166197582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10447.097264711147,
            "unit": "ns/iter",
            "extra": "iterations: 67013\ncpu: 10446.001522092738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10285.276736396776,
            "unit": "ns/iter",
            "extra": "iterations: 68072\ncpu: 10284.957104242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10381.426963960279,
            "unit": "ns/iter",
            "extra": "iterations: 67453\ncpu: 10381.349977021046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17596.572174967572,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 17595.673792877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52048.85580000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52048.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263969.8055555725,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 263961.6416978778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205289.35660968756,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205280.35155309425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201448.5102958424,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 201441.70414201161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198138.6221187519,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198129.15017462135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573795.5931657063,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 573781.9471308833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3749111.927419335,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748893.9516128986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082044.5100001353,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081964.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072936.966887314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072849.3377483427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055723.66229529,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049760.9836065513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813187.858823651,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813087.0588235308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985711.7443365096,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2985640.129449843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11534128.499999704,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533546.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5189937.370000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5189722.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14887803.985916562,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14887185.915492976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57993.74790000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57990.780000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294694.226726235,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294682.20542768895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228613.9703446465,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228605.58375634544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235089.51647449055,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 235079.68149368616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229278.8463597532,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229268.76338329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578869.1638907138,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578826.3824117222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862527.7219919018,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862201.659751044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3149339.572881495,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149169.491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156712.4353741254,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156683.6734694005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3111033.264214109,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110898.9966555214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1859521.9239998641,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859386.80000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3059318.2491806084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059136.0655737706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11885286.102272825,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 11884264.772727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5310465.569999678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5309977.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56039.27084750827,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 56035.34213032229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258337.8902953558,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258322.001205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201169.5881937804,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201159.85418626547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198416.28548123664,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198397.1102307162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193562.00500567348,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 193556.2457337869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534408.911493526,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534369.2685925005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783873.589430933,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783684.959349579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085824.4536425117,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085622.8476821175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3087203.5728477375,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087035.0993377576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3063294.5559211657,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063207.2368421108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1789103.5106383965,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1788983.9458413909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993433.7234725603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993327.6527331215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.312446489142,
            "unit": "ns/iter",
            "extra": "iterations: 112128\ncpu: 6237.920947488622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34829.71415748293,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 34827.84620755018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28058.480699927524,
            "unit": "ns/iter",
            "extra": "iterations: 24974\ncpu: 28057.40770401219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28030.338935896063,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 28030.010432363393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21663.26521133301,
            "unit": "ns/iter",
            "extra": "iterations: 32295\ncpu: 21662.988078649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156049.79104142883,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156045.33034714402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263279.6572611116,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263261.5124153466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66387.20360702739,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 66384.69862363444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67002.6852205473,
            "unit": "ns/iter",
            "extra": "iterations: 10474\ncpu: 66998.88294825247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66404.53331434299,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66403.85345482123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135317.58132763774,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135314.16925465886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111182.1325721453,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 111175.76910878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40617.81934582401,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40616.80246769844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196238.2608328647,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 196229.06584130583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158700.25755167543,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 158692.66409266324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158228.38430219403,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158216.4442433835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.44936131878,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 159265.10036496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305615.97337405133,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305613.96769969503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117557.1006390145,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117494.5686901063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927290.6472148405,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927265.782493371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937600.1854839062,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937544.7580645208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927207.8015979222,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 927149.2676431442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612163.753940449,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612162.2591943933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920765.9973718578,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920725.7555847672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40693.20357329912,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 40690.04830355584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200491.66896157438,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 200485.11187607498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161268.91030665458,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161263.82291906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159305.46797356452,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159297.08228857908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161306.0361278513,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 161307.73506252587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303898.28279757197,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303888.7923544793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1108295.0680380925,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108242.2468354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923646.8612945043,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923565.3896961722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925585.9021164776,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925532.9365079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919801.5380577227,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919746.8503937065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611808.4171029442,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611792.1465968601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915271.8843627657,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 915237.7135348254 ns\nthreads: 1"
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
        "date": 1702489596374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.754258612913,
            "unit": "ns/iter",
            "extra": "iterations: 44909\ncpu: 15685.553007192324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124099.12718718231,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124092.30995441845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233465.07735848377,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233464.4474393531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341075.83024078765,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341059.4157125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450112.58220602805,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450086.10822060355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555922.7866323994,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 555889.6529562979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536221.9130000767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536219.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621362.7210000822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621336.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710212.8382913365,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 710162.013729977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12327.77085656637,
            "unit": "ns/iter",
            "extra": "iterations: 56493\ncpu: 12327.166197582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10447.097264711147,
            "unit": "ns/iter",
            "extra": "iterations: 67013\ncpu: 10446.001522092738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10285.276736396776,
            "unit": "ns/iter",
            "extra": "iterations: 68072\ncpu: 10284.957104242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10381.426963960279,
            "unit": "ns/iter",
            "extra": "iterations: 67453\ncpu: 10381.349977021046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17596.572174967572,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 17595.673792877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52048.85580000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52048.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263969.8055555725,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 263961.6416978778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205289.35660968756,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205280.35155309425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201448.5102958424,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 201441.70414201161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198138.6221187519,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198129.15017462135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573795.5931657063,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 573781.9471308833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3749111.927419335,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748893.9516128986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082044.5100001353,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081964.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072936.966887314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072849.3377483427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055723.66229529,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049760.9836065513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813187.858823651,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813087.0588235308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985711.7443365096,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2985640.129449843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11534128.499999704,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533546.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5189937.370000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5189722.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14887803.985916562,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14887185.915492976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57993.74790000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57990.780000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294694.226726235,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294682.20542768895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228613.9703446465,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228605.58375634544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235089.51647449055,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 235079.68149368616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229278.8463597532,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229268.76338329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578869.1638907138,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578826.3824117222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862527.7219919018,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862201.659751044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3149339.572881495,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149169.491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156712.4353741254,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156683.6734694005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3111033.264214109,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110898.9966555214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1859521.9239998641,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859386.80000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3059318.2491806084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059136.0655737706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11885286.102272825,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 11884264.772727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5310465.569999678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5309977.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56039.27084750827,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 56035.34213032229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258337.8902953558,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258322.001205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201169.5881937804,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201159.85418626547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198416.28548123664,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198397.1102307162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193562.00500567348,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 193556.2457337869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534408.911493526,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534369.2685925005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783873.589430933,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783684.959349579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085824.4536425117,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085622.8476821175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3087203.5728477375,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087035.0993377576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3063294.5559211657,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063207.2368421108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1789103.5106383965,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1788983.9458413909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993433.7234725603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993327.6527331215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.312446489142,
            "unit": "ns/iter",
            "extra": "iterations: 112128\ncpu: 6237.920947488622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34829.71415748293,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 34827.84620755018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28058.480699927524,
            "unit": "ns/iter",
            "extra": "iterations: 24974\ncpu: 28057.40770401219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28030.338935896063,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 28030.010432363393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21663.26521133301,
            "unit": "ns/iter",
            "extra": "iterations: 32295\ncpu: 21662.988078649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156049.79104142883,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156045.33034714402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263279.6572611116,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263261.5124153466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66387.20360702739,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 66384.69862363444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67002.6852205473,
            "unit": "ns/iter",
            "extra": "iterations: 10474\ncpu: 66998.88294825247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66404.53331434299,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66403.85345482123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135317.58132763774,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135314.16925465886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111182.1325721453,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 111175.76910878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40617.81934582401,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40616.80246769844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196238.2608328647,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 196229.06584130583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158700.25755167543,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 158692.66409266324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158228.38430219403,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158216.4442433835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.44936131878,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 159265.10036496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305615.97337405133,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305613.96769969503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117557.1006390145,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117494.5686901063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927290.6472148405,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927265.782493371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937600.1854839062,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937544.7580645208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927207.8015979222,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 927149.2676431442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612163.753940449,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612162.2591943933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920765.9973718578,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920725.7555847672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40693.20357329912,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 40690.04830355584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200491.66896157438,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 200485.11187607498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161268.91030665458,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161263.82291906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159305.46797356452,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159297.08228857908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161306.0361278513,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 161307.73506252587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303898.28279757197,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303888.7923544793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1108295.0680380925,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108242.2468354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923646.8612945043,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923565.3896961722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925585.9021164776,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925532.9365079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919801.5380577227,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919746.8503937065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611808.4171029442,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611792.1465968601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915271.8843627657,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 915237.7135348254 ns\nthreads: 1"
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
        "date": 1702489596374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.754258612913,
            "unit": "ns/iter",
            "extra": "iterations: 44909\ncpu: 15685.553007192324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124099.12718718231,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124092.30995441845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233465.07735848377,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233464.4474393531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341075.83024078765,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341059.4157125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450112.58220602805,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450086.10822060355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555922.7866323994,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 555889.6529562979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536221.9130000767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536219.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621362.7210000822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621336.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710212.8382913365,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 710162.013729977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12327.77085656637,
            "unit": "ns/iter",
            "extra": "iterations: 56493\ncpu: 12327.166197582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10447.097264711147,
            "unit": "ns/iter",
            "extra": "iterations: 67013\ncpu: 10446.001522092738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10285.276736396776,
            "unit": "ns/iter",
            "extra": "iterations: 68072\ncpu: 10284.957104242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10381.426963960279,
            "unit": "ns/iter",
            "extra": "iterations: 67453\ncpu: 10381.349977021046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17596.572174967572,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 17595.673792877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52048.85580000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52048.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263969.8055555725,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 263961.6416978778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205289.35660968756,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205280.35155309425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201448.5102958424,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 201441.70414201161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198138.6221187519,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198129.15017462135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573795.5931657063,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 573781.9471308833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3749111.927419335,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748893.9516128986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082044.5100001353,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081964.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072936.966887314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072849.3377483427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055723.66229529,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049760.9836065513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813187.858823651,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813087.0588235308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985711.7443365096,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2985640.129449843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11534128.499999704,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533546.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5189937.370000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5189722.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14887803.985916562,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14887185.915492976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57993.74790000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57990.780000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294694.226726235,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294682.20542768895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228613.9703446465,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228605.58375634544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235089.51647449055,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 235079.68149368616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229278.8463597532,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229268.76338329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578869.1638907138,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578826.3824117222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862527.7219919018,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862201.659751044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3149339.572881495,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149169.491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156712.4353741254,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156683.6734694005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3111033.264214109,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110898.9966555214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1859521.9239998641,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859386.80000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3059318.2491806084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059136.0655737706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11885286.102272825,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 11884264.772727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5310465.569999678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5309977.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56039.27084750827,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 56035.34213032229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258337.8902953558,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258322.001205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201169.5881937804,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201159.85418626547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198416.28548123664,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198397.1102307162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193562.00500567348,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 193556.2457337869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534408.911493526,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534369.2685925005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783873.589430933,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783684.959349579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085824.4536425117,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085622.8476821175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3087203.5728477375,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087035.0993377576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3063294.5559211657,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063207.2368421108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1789103.5106383965,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1788983.9458413909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993433.7234725603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993327.6527331215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.312446489142,
            "unit": "ns/iter",
            "extra": "iterations: 112128\ncpu: 6237.920947488622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34829.71415748293,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 34827.84620755018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28058.480699927524,
            "unit": "ns/iter",
            "extra": "iterations: 24974\ncpu: 28057.40770401219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28030.338935896063,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 28030.010432363393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21663.26521133301,
            "unit": "ns/iter",
            "extra": "iterations: 32295\ncpu: 21662.988078649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156049.79104142883,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156045.33034714402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263279.6572611116,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263261.5124153466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66387.20360702739,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 66384.69862363444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67002.6852205473,
            "unit": "ns/iter",
            "extra": "iterations: 10474\ncpu: 66998.88294825247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66404.53331434299,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66403.85345482123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135317.58132763774,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135314.16925465886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111182.1325721453,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 111175.76910878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40617.81934582401,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40616.80246769844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196238.2608328647,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 196229.06584130583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158700.25755167543,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 158692.66409266324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158228.38430219403,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158216.4442433835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.44936131878,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 159265.10036496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305615.97337405133,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305613.96769969503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117557.1006390145,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117494.5686901063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927290.6472148405,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927265.782493371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937600.1854839062,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937544.7580645208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927207.8015979222,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 927149.2676431442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612163.753940449,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612162.2591943933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920765.9973718578,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920725.7555847672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40693.20357329912,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 40690.04830355584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200491.66896157438,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 200485.11187607498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161268.91030665458,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161263.82291906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159305.46797356452,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159297.08228857908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161306.0361278513,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 161307.73506252587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303898.28279757197,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303888.7923544793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1108295.0680380925,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108242.2468354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923646.8612945043,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923565.3896961722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925585.9021164776,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925532.9365079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919801.5380577227,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919746.8503937065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611808.4171029442,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611792.1465968601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915271.8843627657,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 915237.7135348254 ns\nthreads: 1"
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
        "date": 1702489596374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.754258612913,
            "unit": "ns/iter",
            "extra": "iterations: 44909\ncpu: 15685.553007192324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124099.12718718231,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124092.30995441845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233465.07735848377,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233464.4474393531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341075.83024078765,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341059.4157125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450112.58220602805,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450086.10822060355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555922.7866323994,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 555889.6529562979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536221.9130000767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536219.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621362.7210000822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621336.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710212.8382913365,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 710162.013729977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12327.77085656637,
            "unit": "ns/iter",
            "extra": "iterations: 56493\ncpu: 12327.166197582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10447.097264711147,
            "unit": "ns/iter",
            "extra": "iterations: 67013\ncpu: 10446.001522092738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10285.276736396776,
            "unit": "ns/iter",
            "extra": "iterations: 68072\ncpu: 10284.957104242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10381.426963960279,
            "unit": "ns/iter",
            "extra": "iterations: 67453\ncpu: 10381.349977021046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17596.572174967572,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 17595.673792877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52048.85580000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52048.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263969.8055555725,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 263961.6416978778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205289.35660968756,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205280.35155309425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201448.5102958424,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 201441.70414201161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198138.6221187519,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198129.15017462135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573795.5931657063,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 573781.9471308833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3749111.927419335,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748893.9516128986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082044.5100001353,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081964.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072936.966887314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072849.3377483427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055723.66229529,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049760.9836065513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813187.858823651,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813087.0588235308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985711.7443365096,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2985640.129449843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11534128.499999704,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533546.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5189937.370000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5189722.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14887803.985916562,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14887185.915492976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57993.74790000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57990.780000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294694.226726235,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294682.20542768895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228613.9703446465,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228605.58375634544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235089.51647449055,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 235079.68149368616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229278.8463597532,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229268.76338329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578869.1638907138,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578826.3824117222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862527.7219919018,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862201.659751044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3149339.572881495,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149169.491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156712.4353741254,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156683.6734694005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3111033.264214109,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110898.9966555214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1859521.9239998641,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859386.80000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3059318.2491806084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059136.0655737706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11885286.102272825,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 11884264.772727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5310465.569999678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5309977.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56039.27084750827,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 56035.34213032229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258337.8902953558,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258322.001205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201169.5881937804,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201159.85418626547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198416.28548123664,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198397.1102307162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193562.00500567348,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 193556.2457337869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534408.911493526,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534369.2685925005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783873.589430933,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783684.959349579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085824.4536425117,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085622.8476821175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3087203.5728477375,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087035.0993377576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3063294.5559211657,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063207.2368421108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1789103.5106383965,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1788983.9458413909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993433.7234725603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993327.6527331215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.312446489142,
            "unit": "ns/iter",
            "extra": "iterations: 112128\ncpu: 6237.920947488622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34829.71415748293,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 34827.84620755018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28058.480699927524,
            "unit": "ns/iter",
            "extra": "iterations: 24974\ncpu: 28057.40770401219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28030.338935896063,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 28030.010432363393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21663.26521133301,
            "unit": "ns/iter",
            "extra": "iterations: 32295\ncpu: 21662.988078649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156049.79104142883,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156045.33034714402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263279.6572611116,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263261.5124153466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66387.20360702739,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 66384.69862363444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67002.6852205473,
            "unit": "ns/iter",
            "extra": "iterations: 10474\ncpu: 66998.88294825247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66404.53331434299,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66403.85345482123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135317.58132763774,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135314.16925465886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111182.1325721453,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 111175.76910878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40617.81934582401,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40616.80246769844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196238.2608328647,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 196229.06584130583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158700.25755167543,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 158692.66409266324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158228.38430219403,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158216.4442433835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.44936131878,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 159265.10036496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305615.97337405133,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305613.96769969503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117557.1006390145,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117494.5686901063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927290.6472148405,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927265.782493371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937600.1854839062,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937544.7580645208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927207.8015979222,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 927149.2676431442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612163.753940449,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612162.2591943933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920765.9973718578,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920725.7555847672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40693.20357329912,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 40690.04830355584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200491.66896157438,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 200485.11187607498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161268.91030665458,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161263.82291906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159305.46797356452,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159297.08228857908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161306.0361278513,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 161307.73506252587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303898.28279757197,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303888.7923544793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1108295.0680380925,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108242.2468354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923646.8612945043,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923565.3896961722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925585.9021164776,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925532.9365079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919801.5380577227,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919746.8503937065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611808.4171029442,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611792.1465968601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915271.8843627657,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 915237.7135348254 ns\nthreads: 1"
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
        "date": 1702489596374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.754258612913,
            "unit": "ns/iter",
            "extra": "iterations: 44909\ncpu: 15685.553007192324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124099.12718718231,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124092.30995441845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233465.07735848377,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233464.4474393531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341075.83024078765,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341059.4157125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450112.58220602805,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 450086.10822060355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555922.7866323994,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 555889.6529562979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536221.9130000767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536219.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621362.7210000822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621336.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710212.8382913365,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 710162.013729977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12327.77085656637,
            "unit": "ns/iter",
            "extra": "iterations: 56493\ncpu: 12327.166197582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10447.097264711147,
            "unit": "ns/iter",
            "extra": "iterations: 67013\ncpu: 10446.001522092738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10285.276736396776,
            "unit": "ns/iter",
            "extra": "iterations: 68072\ncpu: 10284.957104242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10381.426963960279,
            "unit": "ns/iter",
            "extra": "iterations: 67453\ncpu: 10381.349977021046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17596.572174967572,
            "unit": "ns/iter",
            "extra": "iterations: 39619\ncpu: 17595.673792877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52048.85580000109,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52048.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263969.8055555725,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 263961.6416978778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205289.35660968756,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205280.35155309425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201448.5102958424,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 201441.70414201161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198138.6221187519,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198129.15017462135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573795.5931657063,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 573781.9471308833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3749111.927419335,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748893.9516128986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082044.5100001353,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081964.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072936.966887314,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072849.3377483427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055723.66229529,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049760.9836065513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813187.858823651,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813087.0588235308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985711.7443365096,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2985640.129449843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11534128.499999704,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533546.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5189937.370000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5189722.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14887803.985916562,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14887185.915492976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57993.74790000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57990.780000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294694.226726235,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294682.20542768895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228613.9703446465,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228605.58375634544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235089.51647449055,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 235079.68149368616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229278.8463597532,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229268.76338329705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578869.1638907138,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578826.3824117222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862527.7219919018,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862201.659751044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3149339.572881495,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149169.491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156712.4353741254,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156683.6734694005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3111033.264214109,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110898.9966555214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1859521.9239998641,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859386.80000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3059318.2491806084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059136.0655737706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11885286.102272825,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 11884264.772727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5310465.569999678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5309977.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56039.27084750827,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 56035.34213032229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258337.8902953558,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 258322.001205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201169.5881937804,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201159.85418626547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198416.28548123664,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198397.1102307162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193562.00500567348,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 193556.2457337869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534408.911493526,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534369.2685925005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783873.589430933,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783684.959349579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085824.4536425117,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085622.8476821175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3087203.5728477375,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087035.0993377576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3063294.5559211657,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063207.2368421108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1789103.5106383965,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1788983.9458413909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993433.7234725603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993327.6527331215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.312446489142,
            "unit": "ns/iter",
            "extra": "iterations: 112128\ncpu: 6237.920947488622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34829.71415748293,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 34827.84620755018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28058.480699927524,
            "unit": "ns/iter",
            "extra": "iterations: 24974\ncpu: 28057.40770401219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28030.338935896063,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 28030.010432363393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21663.26521133301,
            "unit": "ns/iter",
            "extra": "iterations: 32295\ncpu: 21662.988078649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156049.79104142883,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156045.33034714402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263279.6572611116,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263261.5124153466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66387.20360702739,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 66384.69862363444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67002.6852205473,
            "unit": "ns/iter",
            "extra": "iterations: 10474\ncpu: 66998.88294825247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66404.53331434299,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66403.85345482123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135317.58132763774,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135314.16925465886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111182.1325721453,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 111175.76910878465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40617.81934582401,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40616.80246769844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196238.2608328647,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 196229.06584130583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158700.25755167543,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 158692.66409266324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158228.38430219403,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158216.4442433835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159271.44936131878,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 159265.10036496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305615.97337405133,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305613.96769969503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117557.1006390145,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117494.5686901063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927290.6472148405,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927265.782493371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937600.1854839062,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937544.7580645208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927207.8015979222,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 927149.2676431442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612163.753940449,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612162.2591943933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920765.9973718578,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920725.7555847672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40693.20357329912,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 40690.04830355584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200491.66896157438,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 200485.11187607498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161268.91030665458,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161263.82291906775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159305.46797356452,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159297.08228857908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161306.0361278513,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 161307.73506252587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303898.28279757197,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303888.7923544793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1108295.0680380925,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1108242.2468354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923646.8612945043,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 923565.3896961722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925585.9021164776,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925532.9365079438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919801.5380577227,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919746.8503937065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611808.4171029442,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611792.1465968601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915271.8843627657,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 915237.7135348254 ns\nthreads: 1"
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
        "date": 1702492213762,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15534.581095835116,
            "unit": "ns/iter",
            "extra": "iterations: 44879\ncpu: 15533.40537890773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125992.71411626202,
            "unit": "ns/iter",
            "extra": "iterations: 6744\ncpu: 125985.97271648872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239252.32322952867,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 239240.0110223201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349152.4389652476,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 349135.81244947447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459879.44661734154,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 459826.47991543333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570746.3368421516,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 570707.302631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 548603.7770000394,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548603.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638675.6150000109,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638620.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 727516.8250980106,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 727468.6274509806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12600.094794138011,
            "unit": "ns/iter",
            "extra": "iterations: 55668\ncpu: 12599.21139613424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10574.695369140441,
            "unit": "ns/iter",
            "extra": "iterations: 66208\ncpu: 10573.924601256656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10355.24535167393,
            "unit": "ns/iter",
            "extra": "iterations: 67605\ncpu: 10355.225205236304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10628.703148720655,
            "unit": "ns/iter",
            "extra": "iterations: 65868\ncpu: 10628.092548733843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17739.028296377583,
            "unit": "ns/iter",
            "extra": "iterations: 39369\ncpu: 17737.938479514323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51814.14070000301,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51809.19999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271626.13504924835,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 271609.72354623437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208483.0407615398,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208471.2228459848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 215786.15546836372,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 215774.3746934777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204959.82115384948,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 204946.61057692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 579832.6295336855,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 579808.4196891199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3958499.7531914697,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3958315.31914894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3220977.4429068393,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220729.757785473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3165736.1535833394,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165516.040955632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3169056.3664382854,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3168791.4383561714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1828277.7470355663,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1828174.5059288496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3096262.508361072,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3095944.8160535195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11668836.09890137,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11668058.24175822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5181116.050000582,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5181022.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14906398.15492966,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14906011.267605629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60506.50299999915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60505.04999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 304315.37393765507,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 304311.93342776236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237717.28642657466,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 237708.9473684225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 241776.90267229805,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 241770.01406469778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234988.10472784902,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 234978.94447498713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 563020.3626943439,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 563000.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4012729.6060607918,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4012674.8917748723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3272803.4753520335,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3272569.718309866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3215218.519031233,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3215162.2837370355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3310941.048443084,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3310871.9723183205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1883877.5375253703,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1883756.9979716032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3147133.1452702256,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146989.8648648593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11866938.651686203,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11866405.617977506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5373798.149998947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5373709.000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50742.24849998927,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50741.29999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263297.3646254403,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 263280.82064034836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202113.41925611623,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 202105.13182674197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205179.8196642679,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 205164.34052757785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199276.75034997685,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 199266.35557629546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537649.7819641202,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 537611.5503397166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3988392.2222222677,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3988198.290598293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3223144.083044975,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3222953.2871972467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3170145.2040818143,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3169920.4081632635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3191813.818493102,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3191658.56164385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1838935.31163724,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838902.9585798795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3103769.361203918,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3103576.2541806046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6229.903254193188,
            "unit": "ns/iter",
            "extra": "iterations: 112501\ncpu: 6229.801512875442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34906.323563533755,
            "unit": "ns/iter",
            "extra": "iterations: 19823\ncpu: 34904.530091308116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28072.70763441233,
            "unit": "ns/iter",
            "extra": "iterations: 24979\ncpu: 28071.271868369528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27509.310400315262,
            "unit": "ns/iter",
            "extra": "iterations: 25480\ncpu: 27507.048665620106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21899.25864008575,
            "unit": "ns/iter",
            "extra": "iterations: 32002\ncpu: 21898.30323104803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160017.35738752503,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160017.1043617267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268663.54147465964,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 268663.0184331799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67678.48321624052,
            "unit": "ns/iter",
            "extra": "iterations: 10248\ncpu: 67674.3266978913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67358.36501204439,
            "unit": "ns/iter",
            "extra": "iterations: 10375\ncpu: 67353.16626506015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67238.9390044986,
            "unit": "ns/iter",
            "extra": "iterations: 10427\ncpu: 67235.32176081273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130107.06531822511,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 130097.9959176118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124704.68936701011,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124702.22261735304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40195.41600183678,
            "unit": "ns/iter",
            "extra": "iterations: 17423\ncpu: 40193.60041324663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 202992.01834603242,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 202985.4925204654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158989.49000456647,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 158985.89277601155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157637.7602987843,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 157633.8841104575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157545.6573678387,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 157541.77727783984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 299245.725331052,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 299224.0068346843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1140601.3109657767,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1140583.3060556464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 951118.9265307324,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951090.0680272102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 951992.7272728712,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 951970.6919945708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 945639.0663956273,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 945620.3252032485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612808.6239015585,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 612779.7012302284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 936358.2232620569,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936339.9732620335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39886.89100662238,
            "unit": "ns/iter",
            "extra": "iterations: 17524\ncpu: 39884.69527505139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197386.45757918342,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 197372.0588235276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160756.30144529254,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 160748.58912594593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159973.41401419212,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 159964.66681932422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161621.42738205576,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 161610.43015726106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 304696.2208695632,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 304676.08695652214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1140759.7614379113,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1140666.1764705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 951298.4272108964,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951246.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 940064.353970334,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 940040.2422611036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 945086.3888887792,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 945022.6287262985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 617537.7855887671,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 617490.2460456969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 938647.715436264,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938544.2953020054 ns\nthreads: 1"
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
        "date": 1702503280415,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15983.554486525445,
            "unit": "ns/iter",
            "extra": "iterations: 44277\ncpu: 15982.702080086729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127656.40250527012,
            "unit": "ns/iter",
            "extra": "iterations: 6626\ncpu: 127652.3543616058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240005.16454292627,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 239990.19390581723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 350767.85245238413,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 350749.9797324686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 463143.000532178,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 463137.4135178285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 572627.3775577949,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 572598.4158415844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550614.2689999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550608.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 640074.1360000665,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640020.5999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 729679.4637795757,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 729647.1653543303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12696.371887185847,
            "unit": "ns/iter",
            "extra": "iterations: 55135\ncpu: 12695.888274235944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10814.818742462816,
            "unit": "ns/iter",
            "extra": "iterations: 65509\ncpu: 10814.30032514617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10490.286556445792,
            "unit": "ns/iter",
            "extra": "iterations: 66835\ncpu: 10489.761352584715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10640.184198926714,
            "unit": "ns/iter",
            "extra": "iterations: 65793\ncpu: 10640.016415120137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17897.49263690879,
            "unit": "ns/iter",
            "extra": "iterations: 39114\ncpu: 17897.54307920439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53603.84609999756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53600.7399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277523.98574669607,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 277521.21801101434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 211450.18575698187,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 211439.44223107543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 215171.67095956812,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 215168.98989899052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 206850.40576552844,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 206845.93023255837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 615124.111111112,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 615115.2949245543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3900797.1680671326,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3900484.453781518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3180446.0787670966,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3180304.4520547907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3190461.233677049,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3190261.512027497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3174864.56506877,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3174665.753424655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1833668.2857143243,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1833580.7539682542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3083927.2566663567,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3083786.3333333363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11686200.692307157,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11685235.164835164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5214011.349999054,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5213692.000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14950110.42253525,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14949928.169014055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57945.575600001575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57942.59000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 308275.9903743396,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 308272.6916221045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 241526.68884485762,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 241512.00453001086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 245297.53795473996,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 245294.75794901195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 237486.15735332615,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 237472.92187934497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592329.2320936293,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 592297.1074380128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3969200.8205128736,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3969135.47008546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3242210.4564459305,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242102.7874564254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3243145.8680556426,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3243072.9166666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3212190.972318353,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3212052.595155694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1864174.9598395652,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1864090.361445783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3127868.346801222,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3127696.632996643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11868653.786516946,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11867949.438202221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5245394.959999885,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5245266.999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57288.66510686433,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 57287.15602737845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 273123.3672172899,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 273116.2960609907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210111.5034213319,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 210092.3264907134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208033.0815534002,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 208033.39805825314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204868.0255736097,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 204860.22944550545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567126.573941368,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567097.1335504898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3939161.076271287,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3938874.152542367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3205332.1855672104,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3205151.202749139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3182405.9488052917,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182198.6348122912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3166571.6156462035,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166332.993197286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1833994.3688362327,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833931.3609467356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3091269.5695361583,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3091170.1986755026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6372.829354208086,
            "unit": "ns/iter",
            "extra": "iterations: 109865\ncpu: 6372.752924043129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35488.31609341409,
            "unit": "ns/iter",
            "extra": "iterations: 19741\ncpu: 35486.78385086878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28882.63226126129,
            "unit": "ns/iter",
            "extra": "iterations: 24221\ncpu: 28882.189009536985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28344.286546868705,
            "unit": "ns/iter",
            "extra": "iterations: 24708\ncpu: 28343.16011008592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22108.42879222844,
            "unit": "ns/iter",
            "extra": "iterations: 31703\ncpu: 22107.47247894533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168864.10988747087,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 168850.49078285895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265030.42041588353,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 265025.8979206032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67980.86174443802,
            "unit": "ns/iter",
            "extra": "iterations: 10307\ncpu: 67978.48064422261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68180.58715327906,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68179.2798053521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68106.82699767406,
            "unit": "ns/iter",
            "extra": "iterations: 10312\ncpu: 67982.37975174587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137517.22505891797,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 137513.17753338633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125294.42184421227,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 125291.11906893428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40421.91932230573,
            "unit": "ns/iter",
            "extra": "iterations: 17353\ncpu: 40420.757217772196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197135.10025417563,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197129.37023439663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158999.08164656427,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 158987.74164202926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157104.56158850587,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157104.2180839138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158869.80979367724,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158865.47268193332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 293846.5060796561,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 293843.3123689726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1123684.1316212374,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1123628.4109149405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947436.5391892317,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 947377.1621621553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 942944.7732792938,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 942933.7381916346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 935592.6823055944,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935524.1286863293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 610040.4447368004,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 610033.7719298322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 931593.1118508633,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 931543.0093209066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40466.0486787198,
            "unit": "ns/iter",
            "extra": "iterations: 17256\ncpu: 40466.121928604196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195156.6932703059,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 195154.00444938763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159312.3711151899,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 159309.6892138961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158205.6201218178,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 158197.40581998575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158141.67700315703,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158132.70710728946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 298986.4799316884,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 298982.7070879624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1122970.5377207175,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122910.9149277683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 984680.8575269533,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 984635.0806451603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 943086.7962213309,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 943025.5060728746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 939961.1881721534,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 939889.2473118306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 615582.449122804,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 615555.438596497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 932785.6138482295,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932731.4247669677 ns\nthreads: 1"
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
        "date": 1705574904649,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15413.254380956812,
            "unit": "ns/iter",
            "extra": "iterations: 45538\ncpu: 15412.365496947607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125176.17971738982,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 125170.04710038267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237478.4671354926,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 237469.29943197191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342021.3570576871,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 342010.85487077513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451280.3916883389,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 451262.8051948053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558594.6926546729,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 558588.0798969071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538857.1270000284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538859.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 620720.7639999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620702.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 711032.0667689972,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 711027.6285495004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12339.295008897738,
            "unit": "ns/iter",
            "extra": "iterations: 56761\ncpu: 12338.847095717123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10414.033923063242,
            "unit": "ns/iter",
            "extra": "iterations: 67093\ncpu: 10413.868808966663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10346.762457760407,
            "unit": "ns/iter",
            "extra": "iterations: 67769\ncpu: 10346.792781360211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10428.460725817416,
            "unit": "ns/iter",
            "extra": "iterations: 67207\ncpu: 10428.17712440667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17881.60511407109,
            "unit": "ns/iter",
            "extra": "iterations: 39186\ncpu: 17881.643954473544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52012.89920000818,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52012.380000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264003.8922507051,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 264002.3772769376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204872.91937423055,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 204873.93501805057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 208763.7179424533,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 208765.26084836622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 208518.29652845857,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 208512.8254580516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 604598.766085763,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 604595.8445040233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3810741.987705081,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3810618.852459009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3109662.872483394,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3109601.6778523466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3098247.591973339,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3098187.2909699013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3100395.408163187,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3100305.782312923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1811715.539062453,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1811677.9296874981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3014416.1856676145,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3014301.954397398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11554713.728260238,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11554122.82608694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5206757.7699995125,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5206234.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14810099.915493224,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14809264.788732365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58775.9946999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58772.61000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290896.1359945731,
            "unit": "ns/iter",
            "extra": "iterations: 2956\ncpu: 290884.3369418132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229967.83180839193,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 229958.12701829895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237691.68155339255,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 237675.75589459218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231971.4232659757,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 231956.66302566903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 565338.3285434365,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 565296.995427824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3862268.433333327,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3862094.166666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3148926.9863479896,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3148755.972696235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150478.6768707726,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3150320.7482993156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3139541.05084746,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3139370.169491528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1855298.4402389035,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1855176.494023915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3056086.417763326,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055935.197368406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11771639.000000454,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11770661.111111103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5236366.479999788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5236303.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51053.21500000173,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51049.239999999685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 257538.851807594,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 257528.35374962812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 197473.2812137911,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 197470.76673615957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199490.54737832863,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 199484.8812602866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196199.98981245406,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 196191.31743459185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 546425.3402385573,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 546397.1123666037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3808966.9426226206,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808804.098360655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3093642.4186046473,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3093518.936877077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3101841.1754967896,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3101696.688741737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3121663.391304209,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121520.4013377996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1814336.9804305418,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1814242.8571428624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3010608.9709677016,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010419.0322580663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6299.957239749619,
            "unit": "ns/iter",
            "extra": "iterations: 110874\ncpu: 6299.582408860536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34922.61963129452,
            "unit": "ns/iter",
            "extra": "iterations: 20070\ncpu: 34920.792227204896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27116.423650088225,
            "unit": "ns/iter",
            "extra": "iterations: 25835\ncpu: 27114.391329591428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27576.255249702488,
            "unit": "ns/iter",
            "extra": "iterations: 25430\ncpu: 27574.32559968537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21729.323785610686,
            "unit": "ns/iter",
            "extra": "iterations: 32259\ncpu: 21728.299079326745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162543.65986078122,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 162535.3828306264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261781.96074767166,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 261762.80373831993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67236.32058569156,
            "unit": "ns/iter",
            "extra": "iterations: 10381\ncpu: 67232.44388787096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66753.96335629193,
            "unit": "ns/iter",
            "extra": "iterations: 10452\ncpu: 66753.41561423765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66785.42482851123,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 66784.93711890276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136056.4042759867,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 136046.4334305148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123144.18856639332,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123135.56728232148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40161.332777459276,
            "unit": "ns/iter",
            "extra": "iterations: 17390\ncpu: 40161.08108108145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197312.1349676054,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 197307.29783037285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157307.64361342174,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157305.15881955653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 155057.75100221444,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 155056.39198218248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155238.46218673873,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 155238.96651142187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 309499.87721633376,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 309492.55319148616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1110316.0842607676,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1110299.8410175075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 937866.633199541,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937869.6117804594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 935767.8701471778,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 935687.81793842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 930240.3861517927,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 930179.094540617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607032.9493007199,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 607008.8286713226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 916887.1557591719,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 916891.2303664903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40053.13438825647,
            "unit": "ns/iter",
            "extra": "iterations: 17442\ncpu: 40050.9345258579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193459.91772501837,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 193451.76697956843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157502.28420341233,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157498.5598559868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157193.77330935936,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 157190.1819815764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158125.2448610607,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 158115.99277162814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305466.0139433808,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 305446.448801738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1118084.6006339835,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1118029.4770205978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 926856.4940239205,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 926773.5723771639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925439.972222221,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925418.650793657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924863.7015914863,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 924866.4456233409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 613633.8261253638,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 613615.9752868441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 914676.3564876236,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 914679.2922673664 ns\nthreads: 1"
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
        "date": 1705772737389,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15792.713190936329,
            "unit": "ns/iter",
            "extra": "iterations: 44758\ncpu: 15791.838330577777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126744.05140537089,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 126739.50097700284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237286.3657470632,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 237274.9521988528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345624.3144805446,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 345609.6269554751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 458106.2019989583,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 458075.8022093638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564627.6132812063,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 564595.7031250002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 544233.112000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544185.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630595.8110000347,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630564.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721128.3964174365,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 721098.0529595013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12692.372792807115,
            "unit": "ns/iter",
            "extra": "iterations: 54934\ncpu: 12691.640878144663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10683.616649723144,
            "unit": "ns/iter",
            "extra": "iterations: 65911\ncpu: 10683.063525056537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10476.227161160044,
            "unit": "ns/iter",
            "extra": "iterations: 66816\ncpu: 10475.547772988499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10595.289886959537,
            "unit": "ns/iter",
            "extra": "iterations: 65905\ncpu: 10595.138456869727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17709.674736284243,
            "unit": "ns/iter",
            "extra": "iterations: 39531\ncpu: 17709.23831929372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52308.80429999161,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52306.969999999885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259933.08310500465,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259934.2770167428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205166.30454546266,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 205161.2679425835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201349.12550509535,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 201351.6520085568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193201.77265464334,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 193196.46199497834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 588214.7726675271,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 588194.4809461235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3861315.311203167,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3861282.157676357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3131698.550675623,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3131618.2432432435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3124441.3097641063,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3124410.7744107717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3106230.1872910527,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3106127.090301004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1796682.0330740379,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1796680.9338521431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3034622.8576161815,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3034598.675496681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11463051.537633317,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11462719.354838707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5265564.10000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5265483.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14684250.430556113,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14684297.22222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62860.75272058992,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 62861.0955882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286618.84755894064,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 286615.3769511781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 226792.00238789426,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 226790.4218625628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231387.0622799841,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 231382.9136203618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225483.5927685244,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 225484.71892319986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 566861.7918089114,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 566851.3993174061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3917879.4177214205,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3917898.7341772164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3189707.643835543,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3189670.205479445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3214728.619047869,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3214599.3197278837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3180709.4143835935,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3180695.20547944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1843393.3194443407,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843332.1428571441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3087641.990033259,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3087607.308970111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11705416.857143274,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11704923.076923084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5215562.180000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5215482.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50825.2361000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50825.92000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252700.8239124105,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 252704.320804973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 191309.85230836997,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 191305.8045719404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198559.7786790299,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 198557.4044032448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190831.80093835387,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 190826.92135835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 532219.5646842507,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 532226.364193746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3879595.7375000967,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3879494.5833333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3138270.1644293936,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3138240.939597324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3113487.4247491737,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3113484.9498327947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3123841.067114146,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3123765.4362416044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1800846.9187620473,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800807.9303675015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3040197.343137217,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3040070.261437909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6277.51591187839,
            "unit": "ns/iter",
            "extra": "iterations: 111709\ncpu: 6277.606996750501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34938.73868919896,
            "unit": "ns/iter",
            "extra": "iterations: 20003\ncpu: 34937.84432335124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27501.796484187365,
            "unit": "ns/iter",
            "extra": "iterations: 25428\ncpu: 27500.668554349464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27975.85399448859,
            "unit": "ns/iter",
            "extra": "iterations: 25047\ncpu: 27974.220465524762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21731.899388063994,
            "unit": "ns/iter",
            "extra": "iterations: 32193\ncpu: 21730.47246295772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161270.9949460166,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 161261.49781759633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265245.64857684675,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 265239.31688804406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67638.86045164913,
            "unit": "ns/iter",
            "extra": "iterations: 10362\ncpu: 67636.02586373308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67519.20810811796,
            "unit": "ns/iter",
            "extra": "iterations: 10360\ncpu: 67514.19884169889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67155.61701312562,
            "unit": "ns/iter",
            "extra": "iterations: 10439\ncpu: 67152.22722482965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130243.27107315917,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130235.05384329823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124168.55429382814,
            "unit": "ns/iter",
            "extra": "iterations: 5636\ncpu: 124161.97657913221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40241.87777522527,
            "unit": "ns/iter",
            "extra": "iterations: 17386\ncpu: 40232.83101345924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197261.24879840866,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 197255.97964376677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158942.0143116615,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 158934.8932303501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156392.7732375439,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 156390.86214638493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158341.16519973616,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 158335.4321823501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303027.216262984,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 303009.42906574334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1125095.9677939147,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1125020.4508856782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936813.5647529672,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 936752.3364485991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 945031.902833995,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944940.0809716438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 928976.3559998695,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 928961.733333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 603635.1345987665,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 603611.4754098362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 927620.7360742543,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927560.6100795837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40383.57911483815,
            "unit": "ns/iter",
            "extra": "iterations: 17285\ncpu: 40381.77032108775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195914.05282283438,
            "unit": "ns/iter",
            "extra": "iterations: 3578\ncpu: 195905.00279485888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159029.08059022503,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 159020.36322361045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158587.15097329524,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158577.7274784959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159279.06596906748,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 159272.13375796346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 301021.233576658,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 301022.62773722154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1129251.8465267303,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1129212.924071099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 937612.1140939476,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 937596.3758389232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 944922.2135134352,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 944886.0810810953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 934747.0950468067,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 934725.301204833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611981.1484716008,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 611978.7772925794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 926929.1388888378,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 926902.2486772612 ns\nthreads: 1"
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
        "date": 1705774139290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15159.681638983855,
            "unit": "ns/iter",
            "extra": "iterations: 46419\ncpu: 15159.337771171291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123004.86374909717,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 123003.35521517141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232487.35294117598,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 232469.35828877005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340345.49291340134,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 340334.4881889763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 448595.95811516774,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 448572.35602094245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 562084.4964766748,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 562081.8065342725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535610.9099999458,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535583.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 620872.4529999472,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620874.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 707614.3918711221,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 707589.7239263806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12103.397811611298,
            "unit": "ns/iter",
            "extra": "iterations: 57668\ncpu: 12103.29645557328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10231.610163530828,
            "unit": "ns/iter",
            "extra": "iterations: 68244\ncpu: 10231.413750659383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10145.315160113849,
            "unit": "ns/iter",
            "extra": "iterations: 69076\ncpu: 10145.035902484224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10273.358490565834,
            "unit": "ns/iter",
            "extra": "iterations: 68158\ncpu: 10273.410311335418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17588.8303351582,
            "unit": "ns/iter",
            "extra": "iterations: 39802\ncpu: 17588.66891110999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51235.83570000392,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51235.280000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262893.1361128224,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 262885.6223175968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205001.07247070898,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 204997.4408036355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203476.49511790834,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 203471.11216956412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200281.9752824912,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 200280.06120527306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 602169.9033130999,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 602128.2623394179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3721739.44799988,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3721468.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3031775.473856093,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3031696.078431374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3072849.6821191264,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072786.092715232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3054849.226973557,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3054755.263157893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1764971.904761816,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1764921.3333333302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2968229.891025614,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2968202.2435897407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11402310.698924819,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11401708.602150545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5290026.250000892,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5289986.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14834692.38028064,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14833135.211267617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56787.55469999714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56781.270000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286345.89920157584,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 286327.3453093805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 225501.26606478126,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 225494.18481147147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229021.66880682713,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 229000.96308186278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229688.72683189154,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 229678.31357758673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 590927.5743519458,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 590902.3192360172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3805091.282787242,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3804696.721311466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3109252.0535117504,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109123.411371237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3123243.9023568854,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3123028.2828282607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3096577.056478426,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3096416.2790697515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1811507.9648437505,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1811383.2031250026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3008534.7258066926,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3008336.129032238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11688720.109889671,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11688190.109890169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5292357.719999927,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5291688.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58159.25913902395,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 58155.85744530668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 254214.2883362821,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 254194.13854351663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198288.8044032633,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 198277.40440324464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198525.78144472084,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 198506.66974382603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194802.59507525148,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 194790.03647970824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550720.1230183684,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 550686.6835764076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3792606.3699186174,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3792287.8048780523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3072855.9013155634,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3072714.8026315984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3084316.861386409,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3084095.379537967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3082646.8382836557,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082514.5214521396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1770231.157196935,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1770058.712121221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2983924.7316295444,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2983935.7827476137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6284.021189293936,
            "unit": "ns/iter",
            "extra": "iterations: 111377\ncpu: 6283.773130897759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33562.89426720757,
            "unit": "ns/iter",
            "extra": "iterations: 20845\ncpu: 33562.643319740746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27054.94413537221,
            "unit": "ns/iter",
            "extra": "iterations: 25884\ncpu: 27053.07525884691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26466.735057949652,
            "unit": "ns/iter",
            "extra": "iterations: 26402\ncpu: 26466.854783728355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21478.930224695574,
            "unit": "ns/iter",
            "extra": "iterations: 32533\ncpu: 21478.089939445912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162330.2097707937,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 162319.17110442233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258292.7828487375,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 258260.47110783684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66261.12122645382,
            "unit": "ns/iter",
            "extra": "iterations: 10567\ncpu: 66256.56288445179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66329.56968608015,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66326.13464447818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65607.98286677386,
            "unit": "ns/iter",
            "extra": "iterations: 10681\ncpu: 65605.90768654688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133286.28427266714,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133284.9771515617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 103175.9918926921,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 103164.15094339557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40141.850108905724,
            "unit": "ns/iter",
            "extra": "iterations: 17446\ncpu: 40142.00962971519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198573.2735822245,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198556.96779709493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157422.85191009523,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157421.57303370707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157197.67018173457,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157195.73704285457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155974.97775800308,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 155969.9510676161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306535.4759405,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 306521.0411198611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1103283.3669291653,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1103229.1338582542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934567.8061498058,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 934549.5989304966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937485.5624161297,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 937464.5637583911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 944073.8849929885,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 944064.9368863937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 616073.4410163366,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 616067.5136116175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918925.0039473731,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 918918.5526315781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40327.51276289558,
            "unit": "ns/iter",
            "extra": "iterations: 17355\ncpu: 40324.77672140614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193909.11191135715,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 193902.7700831031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158637.4319057362,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158636.61907999203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157569.96912327933,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 157565.26932612015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159414.82160690057,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 159407.6486609178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311115.17102344823,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 311108.15241471026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1110809.3269839743,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1110798.7301587383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 929207.0557029817,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 929195.0928382127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 932800.3115846146,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932763.9147803034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 930996.019815031,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 930963.4081902246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 612036.0183406747,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 612025.9388646369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 914643.891218836,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 914637.4836172874 ns\nthreads: 1"
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
        "date": 1705777708651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15593.09101581646,
            "unit": "ns/iter",
            "extra": "iterations: 45146\ncpu: 15592.081247508086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125945.74534623779,
            "unit": "ns/iter",
            "extra": "iterations: 6715\ncpu: 125929.06924795234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238295.18607840297,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 238283.44751986838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346637.4535957998,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 346615.62876657286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 456709.2630194743,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 456668.0168332456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 573448.6884816951,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 573393.5863874347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 546504.5480000299,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546495.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 635013.0479999052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634949.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721751.29836834,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 721732.2455322455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12407.750528503573,
            "unit": "ns/iter",
            "extra": "iterations: 55818\ncpu: 12407.603282095353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10451.16177699521,
            "unit": "ns/iter",
            "extra": "iterations: 67012\ncpu: 10451.011759087934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10370.172726869521,
            "unit": "ns/iter",
            "extra": "iterations: 67627\ncpu: 10370.15541130023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10374.443467431005,
            "unit": "ns/iter",
            "extra": "iterations: 67439\ncpu: 10374.104005100917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17694.79349642928,
            "unit": "ns/iter",
            "extra": "iterations: 39486\ncpu: 17694.29924530216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52596.67379999655,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52595.94000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 269623.77109570755,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 269623.0793450883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208158.47936505752,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 208156.14163614152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 211619.1606435763,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 211605.61881188158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 206281.84570594734,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 206279.62154293995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 612100.0320381606,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 612093.7968643486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3876953.6541664703,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3876842.9166666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3153882.45547943,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3153768.8356164326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3149247.5728813494,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149218.983050848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3131852.7946127793,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3131801.3468013452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1827412.613412272,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1827358.579881658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3063821.5463578273,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3063773.841059608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11692958.692307642,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11692694.505494537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5259283.499999583,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5259183.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15092606.64285778,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15092165.714285702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58954.5193000049,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58953.1700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295931.82015131845,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 295927.888583219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233677.38793337363,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 233672.97297297258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 241580.6950977434,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 241571.63502408663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 233324.06506286017,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 233318.8627665397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589299.5379876429,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 589287.2005475704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3930408.419491233,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3930275.4237288223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3216338.882352955,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3216248.442906592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3224621.536332174,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3224587.8892733697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3199765.2508592797,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3199687.628865981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1890362.7006108232,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1890278.4114052954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3122753.0771811656,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3122690.939597318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11952076.325842477,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11951743.82022473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5335499.889999937,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5335393.999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58715.477413830806,
            "unit": "ns/iter",
            "extra": "iterations: 14013\ncpu: 58714.22964390181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 257275.30974514617,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 257269.11544227935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203267.22652722435,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 203252.9355835504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205598.4551558801,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 205586.52278177356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202185.24911033048,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202174.04507710494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553241.6706776567,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 553214.312856237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3909444.799163295,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3909184.518828451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3173507.5513700875,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3173252.0547945197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3152935.6587838405,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3152831.418918909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3166899.66440686,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3166699.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1836521.6673267845,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1836386.9306930744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3070609.937293868,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3070451.1551154917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6281.043325852293,
            "unit": "ns/iter",
            "extra": "iterations: 111827\ncpu: 6280.702334856509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34735.51079457973,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 34733.6939798499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27312.993606840573,
            "unit": "ns/iter",
            "extra": "iterations: 25496\ncpu: 27310.699717602896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27693.801689762182,
            "unit": "ns/iter",
            "extra": "iterations: 25329\ncpu: 27693.10276757878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21759.884571181094,
            "unit": "ns/iter",
            "extra": "iterations: 32193\ncpu: 21758.624545708757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161779.12985518805,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 161766.4904619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266433.47446647513,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 266407.3932926799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67251.6352388201,
            "unit": "ns/iter",
            "extra": "iterations: 10426\ncpu: 67245.20429694997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67599.5414671478,
            "unit": "ns/iter",
            "extra": "iterations: 10442\ncpu: 67595.82455468304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66320.66236642563,
            "unit": "ns/iter",
            "extra": "iterations: 10387\ncpu: 66318.98527004912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135840.56984219866,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 135834.3074225599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123826.90950784559,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 123814.4646322105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41109.85266310239,
            "unit": "ns/iter",
            "extra": "iterations: 17029\ncpu: 41109.072758236245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199553.09479606058,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 199541.04078762376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158304.61996379812,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158285.49117247437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156946.922784237,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156933.16920322107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156974.20170328516,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 156960.28686687778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297472.4489795656,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297459.4387755132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1128895.9693053463,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1128797.5767366674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 941465.3306232058,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 941450.5420054343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 946951.3220568945,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946894.7225981227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 938742.7238605892,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 938661.5281501396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 621307.7337488302,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 621274.9777382023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 931298.6208277615,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 931200.2670226943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41120.134830141906,
            "unit": "ns/iter",
            "extra": "iterations: 17014\ncpu: 41115.89867168238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 194431.5893104187,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 194406.0924951545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159064.7396071183,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159056.53266331906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158131.43926712792,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158126.9169871083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160073.44795240508,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 160066.620910548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300746.4530912111,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 300735.66796367883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1128287.5177993474,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1128189.644012947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 944317.7560647114,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 944254.8517520141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 939894.8045515037,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 939772.6907630572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 930756.3395721404,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 930676.8716577666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 616790.9037952111,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 616770.2559576405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 932477.8466666429,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 932381.8666666549 ns\nthreads: 1"
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
        "date": 1705952905706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15592.716816128512,
            "unit": "ns/iter",
            "extra": "iterations: 44939\ncpu: 15592.612207659271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126209.95128129036,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 126207.0917759237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236956.3913755321,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 236954.06659388656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344127.4046381437,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 344112.5549780089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454433.2148457969,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 454414.27077888156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 562866.3400259283,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 562830.6347150258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 542793.598000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542763.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 627562.7530000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627526.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 720093.2170542891,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 720065.5038759694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12713.227272728918,
            "unit": "ns/iter",
            "extra": "iterations: 56078\ncpu: 12712.361353828568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10377.456343772485,
            "unit": "ns/iter",
            "extra": "iterations: 67184\ncpu: 10377.423195999052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10250.106695172895,
            "unit": "ns/iter",
            "extra": "iterations: 68288\ncpu: 10249.827202436743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10352.08447350183,
            "unit": "ns/iter",
            "extra": "iterations: 67607\ncpu: 10352.169154081685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17900.375447112874,
            "unit": "ns/iter",
            "extra": "iterations: 39140\ncpu: 17900.316811446086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57268.372029056656,
            "unit": "ns/iter",
            "extra": "iterations: 14179\ncpu: 57267.317864447374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 268061.2367679135,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 268058.37770122115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205413.6709257526,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 205406.340405014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204481.6851807462,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 204478.93224802462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198755.75673144736,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 198750.08194802137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591270.522229574,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 591268.745852689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3894488.665198654,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 3894426.8722466943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3153290.7755103204,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3153222.789115648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3116260.533557127,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3116233.892617448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3145168.71283772,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145131.081081078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1810864.3013697732,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1810831.5068493136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3056151.9372935942,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3056031.023102313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11481408.892473644,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11480821.505376365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5135619.440000027,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5135362.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14831605.887324462,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830459.154929588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58083.03300000261,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58081.350000000144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291532.39695944736,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 291523.7837837828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231049.71508979987,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 231048.94130259976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237909.63036849955,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 237903.2973122746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226524.00450210873,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 226522.6959745776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 593834.1540578388,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 593823.3149931235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3956923.012820301,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3956848.7179487203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3205926.885813185,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3205832.17993079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3177466.619863184,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177409.931506844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3190880.920415253,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3190814.5328719653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1851735.4979999254,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851700.799999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3099031.133333104,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3098982.9999999804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11751853.944444217,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11751392.22222228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5227512.069999421,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5227430.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54244.58469001112,
            "unit": "ns/iter",
            "extra": "iterations: 15049\ncpu: 54242.11575519951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256829.80977939992,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 256809.30232558172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199145.10962441665,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 199134.57746478895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201953.58315640272,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 201939.08940787887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194136.5441543698,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 194121.021566402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553140.6588010223,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 553105.6122448981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3906781.3109244443,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3906557.983193264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3157084.357142634,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156834.353741506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3107247.678929793,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107075.9197324445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3149055.959322094,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3148885.084745751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1798532.179884022,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798424.7582205075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3059983.055921198,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3059832.565789473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6263.07764497537,
            "unit": "ns/iter",
            "extra": "iterations: 111778\ncpu: 6262.650968884764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34031.25770185338,
            "unit": "ns/iter",
            "extra": "iterations: 20547\ncpu: 34029.49822358509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28137.372828886506,
            "unit": "ns/iter",
            "extra": "iterations: 24872\ncpu: 28136.145062721156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27378.5851970622,
            "unit": "ns/iter",
            "extra": "iterations: 25576\ncpu: 27377.177822959082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21637.72568795751,
            "unit": "ns/iter",
            "extra": "iterations: 32124\ncpu: 21636.963018304126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159248.15388116866,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 159239.81333940307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 252174.76455697624,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 252160.7956600356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66828.64325977498,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 66822.96742142025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67101.99760076021,
            "unit": "ns/iter",
            "extra": "iterations: 10420\ncpu: 67098.84836852297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66590.85461128334,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 66589.07202743858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134331.51302682437,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 134326.09195402125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123460.78124448257,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 123454.48616252304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40332.94243648879,
            "unit": "ns/iter",
            "extra": "iterations: 17320\ncpu: 40330.50230946897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197452.41541935233,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197438.9720417998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159111.39658701472,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 159096.4277588169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158651.6430838928,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158638.2086167776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157346.1561797609,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157333.77528089873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304570.5056521673,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 304548.5217391353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1137145.2532468343,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1137096.1038961094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 945035.7192982221,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 945018.893387318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936731.5909090932,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936685.1604278152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940173.3763440085,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 940130.1075268913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607738.3709818446,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 607692.87576021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 933104.6324899589,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932876.298268974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.00874329646,
            "unit": "ns/iter",
            "extra": "iterations: 17156\ncpu: 40725.83352762875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197381.57018284136,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 197368.35443037987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160003.65414565295,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 159998.87769124896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162450.3423713374,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 162444.78400735263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161622.3382488541,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 161614.05529954107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305490.9746614453,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 305481.38925294514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1137373.6337114794,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1137364.0194489523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 940957.5168237236,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 940914.6702557156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 936423.7466487045,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 936397.3190348486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 940161.4953019926,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940153.4228187804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 616330.6517150298,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 616326.561125762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 931165.9920105677,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 931158.9880159957 ns\nthreads: 1"
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
        "date": 1705954320871,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16154.586698602146,
            "unit": "ns/iter",
            "extra": "iterations: 44672\ncpu: 16153.487643266475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125403.27841500287,
            "unit": "ns/iter",
            "extra": "iterations: 6713\ncpu: 125399.15090123643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236689.1402936315,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 236671.6965742251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344005.51658009255,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 343977.34718338004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459502.720210018,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 459475.32808398985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563270.2407528653,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 563240.2985074626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 540112.8920000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540089.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 626942.8699999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626863.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716509.2806200508,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 716475.8139534876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12541.740840452867,
            "unit": "ns/iter",
            "extra": "iterations: 56089\ncpu: 12540.99912638841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10486.882512070224,
            "unit": "ns/iter",
            "extra": "iterations: 66909\ncpu: 10486.595226352227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10371.66565484812,
            "unit": "ns/iter",
            "extra": "iterations: 67535\ncpu: 10371.210483453016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10479.419035662384,
            "unit": "ns/iter",
            "extra": "iterations: 66906\ncpu: 10478.943592502936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17655.155668361804,
            "unit": "ns/iter",
            "extra": "iterations: 39597\ncpu: 17654.21117761446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58226.60278273538,
            "unit": "ns/iter",
            "extra": "iterations: 14015\ncpu: 58223.831608990426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 261042.8447837153,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 261026.90839694694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204740.45619114558,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 204730.678252474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202927.38094098147,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 202914.52113685204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198759.8926738122,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 198745.10032664484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591319.6249999991,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 591260.6481481501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3855500.033195316,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3855358.0912863123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3150663.979661242,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3150505.7627118607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3156980.5355926384,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3156726.4406779655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3137953.2229722543,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3137769.9324324275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1830154.120792184,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1830047.9207920854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3058868.158415454,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3058658.4158415827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11611962.706522066,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11611105.434782634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5232757.36999949,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5232494.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14868922.323942147,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14867974.647887308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57976.54819998569,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57974.959999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288767.992953013,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 288756.2080536914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228095.30141376442,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 228086.87650039868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235522.49848527386,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 235506.0313963093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227803.9076882235,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 227788.88002128268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 565060.3213350368,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 565020.3534031431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3944540.451477093,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3944297.0464134947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3190874.496528156,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3190647.5694444394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3208125.8724137396,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3207898.965517243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3172026.5442183,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3171834.6938775643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1861397.7811242423,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1861285.5421686703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3103025.1409393963,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3102867.449664438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11883300.87640342,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11882387.640449446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5217573.009999796,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5217268.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50650.50989999236,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50648.959999999475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 250479.28129561368,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 250473.3586227015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194750.69587039598,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 194745.5395847596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 195267.30263459403,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 195264.7651775494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192867.11023086868,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 192863.92032593978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 545035.179245316,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 545023.9622641518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3904739.415966984,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3904534.033613455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3155279.8231291645,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3155119.387755081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3163809.016891842,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3163712.8378378353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3134632.659932647,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3134466.329966311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829938.5976329276,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1829828.2051282034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3067576.822368479,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3067389.802631566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6239.272433701458,
            "unit": "ns/iter",
            "extra": "iterations: 112409\ncpu: 6238.939942531282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34979.77433872267,
            "unit": "ns/iter",
            "extra": "iterations: 19999\ncpu: 34977.0988549426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25806.17845267108,
            "unit": "ns/iter",
            "extra": "iterations: 27066\ncpu: 25804.65159240379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28273.140099355165,
            "unit": "ns/iter",
            "extra": "iterations: 24761\ncpu: 28272.383990953444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21751.374121086366,
            "unit": "ns/iter",
            "extra": "iterations: 32142\ncpu: 21750.846244788754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163835.0205655567,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163828.20752512343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 251141.57482015237,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 251129.9280575521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67079.5549808427,
            "unit": "ns/iter",
            "extra": "iterations: 10440\ncpu: 67077.4712643674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67670.99845366672,
            "unit": "ns/iter",
            "extra": "iterations: 10347\ncpu: 67667.80709384334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67041.58381115344,
            "unit": "ns/iter",
            "extra": "iterations: 10464\ncpu: 67040.05160550465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137387.11773944122,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 137376.0792778651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123733.2537550984,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123724.88072097678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40523.99287575826,
            "unit": "ns/iter",
            "extra": "iterations: 17265\ncpu: 40521.54068925562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195807.28207283473,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 195792.4649859951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 155804.11518674376,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 155791.25475285374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157647.87316964124,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157639.4007659396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157465.99055754897,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157460.56654676408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303201.611255385,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 303191.2987012958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1124556.9421224056,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1124551.2861736245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 946551.4654937417,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946523.6806495343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 944320.5107816715,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 944288.5444743967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 930632.8962765669,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 930586.5691489388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 617055.0598065058,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 617033.1574318388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 924988.9587766681,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 924984.0425531925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40328.31190174737,
            "unit": "ns/iter",
            "extra": "iterations: 17342\ncpu: 40326.99803944209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 192901.5340689963,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 192889.24137931096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159499.69342730957,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159491.6988856035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158797.83212831413,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 158790.2620876668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159471.3732362201,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159455.53026855044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305422.10887625435,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 305407.6956711843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1128429.4494381382,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1128366.6131621304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 934928.2740640044,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 934846.3903743194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 934948.3529411465,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 934892.5133689884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 928701.3222370895,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 928646.0719041463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 619225.6492471985,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 619202.1257750221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 925064.0688741447,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 924979.0728476804 ns\nthreads: 1"
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
        "date": 1705956307102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15754.449620576788,
            "unit": "ns/iter",
            "extra": "iterations: 38875\ncpu: 15753.538263665594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126245.49527465488,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 126239.13171884231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235348.96721755544,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 235335.41045787046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343673.4453747598,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 343661.08452950564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 453708.04533614387,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 453668.2126107346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 566081.325732828,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 566066.1889250812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 540994.1130001243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540984.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 628154.927999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628150.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714128.5320461884,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 714103.4749034754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12608.325654637254,
            "unit": "ns/iter",
            "extra": "iterations: 55565\ncpu: 12607.580311347085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10501.526286568942,
            "unit": "ns/iter",
            "extra": "iterations: 66650\ncpu: 10501.369842460614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10322.712002595319,
            "unit": "ns/iter",
            "extra": "iterations: 67827\ncpu: 10322.228611025086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10466.333219428814,
            "unit": "ns/iter",
            "extra": "iterations: 67307\ncpu: 10465.846048702224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17821.993302266474,
            "unit": "ns/iter",
            "extra": "iterations: 39267\ncpu: 17820.75024830007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57462.33851700248,
            "unit": "ns/iter",
            "extra": "iterations: 14147\ncpu: 57462.58570721709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263926.3609741174,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 263918.27990135615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204550.56547906285,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 204542.8021184397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203706.03313836886,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 203693.71345029215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199140.65540698275,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 199130.16654937793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591221.5225165203,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 591190.7284768207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3879211.2510459237,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3878953.138075321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3169893.631399363,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3169777.1331057996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3128857.821549153,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128764.9831649777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3162260.875000498,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3162033.445945954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812851.4414064155,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812766.4062500063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3061454.2450329107,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3061384.4370861026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11537593.423912788,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11537358.695652151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5021676.229998775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5021302.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14894936.408449162,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14893987.323943703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57115.78340001324,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57111.57 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 289194.9571380784,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 289173.0340870748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229326.1159614819,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 229312.93519014327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234054.86502055338,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234049.0534979427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230775.15959162213,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 230767.94734013948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 582037.540686072,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 582005.6489576322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3927467.131355547,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3927368.6440677983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3219339.5224911813,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3219188.2352941185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3174800.2852236195,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3174707.2164948317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3182852.6130131073,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3182817.8082191995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1846043.099601457,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1846032.4701195247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3105048.6733336886,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3104903.666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11728471.769232044,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11727953.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5248791.869998967,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5248704.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51189.44470000315,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51186.08000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253467.8552398069,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 253455.86145648363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198944.22743257717,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 198931.88745603737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199268.97118289655,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 199259.2609807103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192639.31753231675,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 192626.4685869806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557296.8579655698,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 557256.9417786314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3900162.188284568,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900111.2970711454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3153673.061016457,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3153584.4067796497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3122288.2140472177,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3122187.959866234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3183365.699323924,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3181453.7162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1810928.2280701306,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1810846.198830399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3056113.165015925,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3056050.1650164933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6288.0490183816355,
            "unit": "ns/iter",
            "extra": "iterations: 111856\ncpu: 6287.738699756821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35063.65488096961,
            "unit": "ns/iter",
            "extra": "iterations: 19996\ncpu: 35061.907381476325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27539.61764473542,
            "unit": "ns/iter",
            "extra": "iterations: 25390\ncpu: 27537.932256794036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27422.450352395845,
            "unit": "ns/iter",
            "extra": "iterations: 25540\ncpu: 27421.722787783685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21620.118021831684,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21618.062041876623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 164034.20919214853,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 164035.13385453555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264632.877450977,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 264624.6606334881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67442.53488147892,
            "unit": "ns/iter",
            "extra": "iterations: 10378\ncpu: 67441.03873578727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67542.44692143853,
            "unit": "ns/iter",
            "extra": "iterations: 10362\ncpu: 67542.81026828848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67020.78526255257,
            "unit": "ns/iter",
            "extra": "iterations: 10436\ncpu: 67018.23495592207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134005.51187281383,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 134006.3385676005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123784.11187579538,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 123781.87753661572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40841.23234396884,
            "unit": "ns/iter",
            "extra": "iterations: 17048\ncpu: 40841.44181135633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198747.2971591005,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 198737.0170454553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159404.8444747547,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 159399.04502046373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158863.50590909098,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 158857.0681818201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160768.39691318801,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 160762.3589034789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 301492.4881311839,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 301479.93094519107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1133402.4264946969,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1133382.5525040426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 944287.4777327523,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944280.8367071515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 950402.8389716367,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 950342.4898511622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 944978.8070176635,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944938.3265857064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 613768.6371603976,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 613743.9088518835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 930438.2493334439,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 930411.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41293.07178276439,
            "unit": "ns/iter",
            "extra": "iterations: 16940\ncpu: 41291.61157024794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198676.36208853225,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 198664.7559591373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160530.37712449286,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160529.74276527125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160855.8476958271,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 160851.26728110842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160667.85294791596,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 160661.36728607555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 306173.75262242486,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 306161.05769230763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1134422.3074435263,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1134393.3656957778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 942341.2253710967,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 942279.89203779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 944503.6765100668,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 944456.1073825483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 944590.6874153456,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 944577.4018944547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 613611.1431081096,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 613606.4091308195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 934537.6104418081,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 934518.4738955665 ns\nthreads: 1"
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
        "date": 1705957764919,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15453.178762549389,
            "unit": "ns/iter",
            "extra": "iterations: 45222\ncpu: 15452.826058113307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122736.51184764304,
            "unit": "ns/iter",
            "extra": "iterations: 6879\ncpu: 122730.73121093182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233540.7569963967,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 233530.5901911887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 335376.935458794,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 335367.8071539658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444580.3948849289,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 444464.5524296675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549100.8287888202,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 549078.5668991758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 527818.1180000274,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527808.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 610714.0569999956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610686.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 700886.8990964455,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 700836.6716867463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12287.202080446388,
            "unit": "ns/iter",
            "extra": "iterations: 57007\ncpu: 12286.847229287627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10302.386408423723,
            "unit": "ns/iter",
            "extra": "iterations: 67998\ncpu: 10301.789758522315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10176.152548535809,
            "unit": "ns/iter",
            "extra": "iterations: 68765\ncpu: 10175.48025885262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10328.300038530608,
            "unit": "ns/iter",
            "extra": "iterations: 67478\ncpu: 10327.608998488402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17697.77210300707,
            "unit": "ns/iter",
            "extra": "iterations: 39610\ncpu: 17696.596818985086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51201.24439999927,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51197.49000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257978.29024462576,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 257969.22379945632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208384.3894839421,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 208378.72444011693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202967.0776005868,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 202956.24851225887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204254.3318903418,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 204246.34439634447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 610621.890550625,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 610602.9911624743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3751820.8024196047,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3751560.080645155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3021133.883116995,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3021052.922077921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3034071.6797388056,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3033936.928104571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3038724.5737704346,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3038605.5737704895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1756689.5523809546,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1756610.2857142866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2950878.904153396,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2950744.0894568674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11219783.54736879,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11219001.052631564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5109842.020000314,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5109385.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14636046.736110114,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14635036.111111116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59756.95079999923,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59755.090000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293811.63334474235,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 293799.6918863397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230004.24797625153,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 229992.39071775525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233732.33005196528,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 233716.16078753106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224069.72650920757,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 224063.7270341211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589590.3190476081,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 589576.6666666693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3818217.659836014,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3817993.0327868992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3078398.7185431733,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3078285.7615893963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3081762.3013245757,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3081656.622516555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3096783.9099999615,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3096679.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1786343.2123553117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1786251.544401535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2996054.1294497442,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2995970.550161793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11447563.771738438,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11447003.260869568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5226865.729999873,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5226621.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55813.404794339964,
            "unit": "ns/iter",
            "extra": "iterations: 14684\ncpu: 55812.21737946081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 250293.68746355368,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 250284.7521865881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202398.86685621558,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 202390.8789386401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197085.91839556547,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 197076.07192254398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194114.39593329025,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 194108.84167237836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550772.5041165627,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 550739.265357818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3785580.624489925,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3785389.3877551127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3040225.150819603,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3040125.901639345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3047649.571895324,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3047513.3986928095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3061780.401315679,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061723.6842105146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1753028.0602636123,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752948.2109227898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2955084.5079365033,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2954967.301587299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6245.967035018832,
            "unit": "ns/iter",
            "extra": "iterations: 112483\ncpu: 6245.674457473576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34816.54414173161,
            "unit": "ns/iter",
            "extra": "iterations: 20151\ncpu: 34815.22505086586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26198.002247697794,
            "unit": "ns/iter",
            "extra": "iterations: 26694\ncpu: 26196.85322544396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27275.24024736418,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 27274.123915833694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21636.627381465732,
            "unit": "ns/iter",
            "extra": "iterations: 32438\ncpu: 21635.541648683717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163763.95194774828,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 163758.17588056787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257555.2096359251,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 257537.07245310658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66513.61868735071,
            "unit": "ns/iter",
            "extra": "iterations: 10574\ncpu: 66333.1378853791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66171.5629020062,
            "unit": "ns/iter",
            "extra": "iterations: 10572\ncpu: 66169.09761634396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66221.83492212988,
            "unit": "ns/iter",
            "extra": "iterations: 10595\ncpu: 66219.16941953744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132164.22793422535,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132158.57115857187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121002.02895553246,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 120993.91589107175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40723.090312461696,
            "unit": "ns/iter",
            "extra": "iterations: 17218\ncpu: 40721.54721802816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194848.9908129239,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 194841.39755011152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157736.5891367849,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 157733.80662609744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156387.90811296698,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 156377.74540564645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158442.00903954983,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 158439.52542372906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304932.57074445684,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 304908.1845885959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1099571.7625787447,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1099479.0880503217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 917566.0183486268,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917510.3538663146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 922083.8018493598,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 922011.889035669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 914228.3503268093,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 914197.3856209099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 598560.4283276798,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 598500.0853242392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 902695.6407263568,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 902640.9857328032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40844.22749810463,
            "unit": "ns/iter",
            "extra": "iterations: 17143\ncpu: 40841.048824592515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196987.90470819766,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 196973.35776712504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160296.13195876128,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160281.4203894604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159416.7129840432,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159407.69931662732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159029.52594447095,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159023.3500227587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303741.3237722994,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 303733.33333333174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1098472.017295595,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1098457.232704411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 911903.229765018,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 911859.791122716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 917655.4259502309,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917587.8112712969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 921993.8129116837,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 921930.1712779881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 602929.4514187505,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 602895.7867583777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 906361.0516796373,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 906333.4625322985 ns\nthreads: 1"
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
        "date": 1705959257796,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15893.84806660358,
            "unit": "ns/iter",
            "extra": "iterations: 45283\ncpu: 15892.745621977345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124395.43156507568,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 124385.25791324736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234192.17379611116,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 234174.1458165187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342068.6320792036,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 342041.108910891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451888.3892931602,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 451868.19126819127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 562269.993544174,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562223.7572627497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537644.8669999263,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537652.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625264.389999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625203.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713758.4607088163,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 713702.9275808937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12375.39547812328,
            "unit": "ns/iter",
            "extra": "iterations: 56481\ncpu: 12373.761087799445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10465.543090036943,
            "unit": "ns/iter",
            "extra": "iterations: 66860\ncpu: 10464.898294944654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10183.136944810452,
            "unit": "ns/iter",
            "extra": "iterations: 68670\ncpu: 10182.379496140951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10432.683804666249,
            "unit": "ns/iter",
            "extra": "iterations: 67822\ncpu: 10432.285983899032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17507.943015123423,
            "unit": "ns/iter",
            "extra": "iterations: 39607\ncpu: 17507.665311687324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50637.767600005645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50630.15000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 273024.3450031566,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 272997.4220241882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206890.2734318372,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 206866.5536449506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203718.47645234404,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 203708.05641883862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200506.61245264008,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 200483.877840909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 597874.5599482405,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 597851.6526247566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3846997.6721989573,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3846790.456431543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3149336.250848044,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149019.661016957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089099.5514953323,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3088859.468438535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3159372.775510029,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3159018.707482995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1805921.0351561995,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1805818.7500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3051463.1809209827,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3051211.1842105254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11528316.119566903,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11527409.782608723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5235254.120000264,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5235193.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14919912.777780078,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14918724.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60174.33649999475,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60165.68000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290382.7140925989,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 290361.372085163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230522.734897491,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 230502.02265372287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234192.30889192506,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 234180.41039671705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228588.80181382693,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 228572.3659642566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577270.8487060005,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 577204.5122760419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3903349.1050418937,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3903168.907563024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3208800.8482764177,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3208470.3448276008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3156702.2305083256,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3156474.915254236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3167230.4539250582,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3167007.508532417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1840299.8190858185,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1840086.87872763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3085446.1926916833,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3085273.421926913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11897061.388887981,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11896702.222222267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5244796.280001083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5244740.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58108.25285009803,
            "unit": "ns/iter",
            "extra": "iterations: 14210\ncpu: 58105.6579873329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261752.38105393836,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 261752.5738653672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198660.68125727217,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 198650.2910360886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197557.93189714244,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 197560.36599490434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194220.11453342982,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 194194.13643623143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544222.9376966731,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 544210.8244178718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3887784.4937242386,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3887582.0083681876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3167979.047619304,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167512.925170064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092454.231788051,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092250.993377485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3167261.625850763,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167064.6258503413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1796240.164728962,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796120.7364341116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3048077.042763746,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3047801.315789464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6247.679782310039,
            "unit": "ns/iter",
            "extra": "iterations: 111902\ncpu: 6247.460277743002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35286.72180299398,
            "unit": "ns/iter",
            "extra": "iterations: 19878\ncpu: 35286.10021128889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28176.90445705551,
            "unit": "ns/iter",
            "extra": "iterations: 24837\ncpu: 28176.249144421534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27613.41536520422,
            "unit": "ns/iter",
            "extra": "iterations: 25356\ncpu: 27612.474365041744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21777.239399870985,
            "unit": "ns/iter",
            "extra": "iterations: 32193\ncpu: 21777.085080607518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159355.54223433865,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 159347.8201634875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262108.40157190687,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 262101.30988024452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68288.01315285086,
            "unit": "ns/iter",
            "extra": "iterations: 10416\ncpu: 68277.0065284177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66924.66309136797,
            "unit": "ns/iter",
            "extra": "iterations: 10442\ncpu: 66920.58992530289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67008.8662541446,
            "unit": "ns/iter",
            "extra": "iterations: 10505\ncpu: 67004.46454069481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133218.44194900032,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 133217.54853445137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123628.03329222246,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 123623.44548176948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39679.89860992162,
            "unit": "ns/iter",
            "extra": "iterations: 17625\ncpu: 39678.6609929082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198739.2307692036,
            "unit": "ns/iter",
            "extra": "iterations: 3510\ncpu: 198737.97720797991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159769.81512799917,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 159754.06764168118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156310.67764340635,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 156302.0833333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157704.49229372852,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 157682.09428830698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 290504.52404643956,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 290485.5306799344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1115555.0956936642,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1115422.9665071836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 939667.2274564466,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 939659.6231494027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 923237.8815789544,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 923211.3157894798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 930491.8738380269,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930462.2841965554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 603292.655411139,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 603300.0000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 917818.2096984838,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917788.0733945069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40243.574569195094,
            "unit": "ns/iter",
            "extra": "iterations: 17467\ncpu: 40244.06595293976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197119.7514060864,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 197109.9831271123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160359.4252873827,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 160346.25287356472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157788.50179937857,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157775.75348627934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159965.37958712823,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 159964.72477064258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296623.3746824874,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 296593.98814563686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1121326.453376329,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1121295.3376205605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 934318.5914553668,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934232.0427236358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922684.7650917603,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 922656.4304461943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 933853.2202938334,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933865.287049396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 608722.7083333918,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 608678.8194444489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 920510.6649145586,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920485.8081471821 ns\nthreads: 1"
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
        "date": 1705961311837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15492.517672948634,
            "unit": "ns/iter",
            "extra": "iterations: 44984\ncpu: 15492.003823581717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124599.16651745417,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 124596.25484929871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234348.75734700923,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 234339.47155567538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341215.968712889,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 341208.67326732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452129.9320539304,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 452101.4522821576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560964.6296774108,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 560927.2258064516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538218.0930000687,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538204.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624263.038951349,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 624189.8127340828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 712637.2794457173,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 712585.4503464198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12551.30299119872,
            "unit": "ns/iter",
            "extra": "iterations: 55797\ncpu: 12550.32528630572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10800.914906068461,
            "unit": "ns/iter",
            "extra": "iterations: 66644\ncpu: 10800.286597443144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10515.806589357033,
            "unit": "ns/iter",
            "extra": "iterations: 66744\ncpu: 10515.309241280105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10547.032199042833,
            "unit": "ns/iter",
            "extra": "iterations: 66679\ncpu: 10546.480901033305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17777.247149059567,
            "unit": "ns/iter",
            "extra": "iterations: 39373\ncpu: 17776.857237192966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58143.587315192846,
            "unit": "ns/iter",
            "extra": "iterations: 14001\ncpu: 58141.247053781895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264404.9086121546,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 264391.0470879805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210244.68948535167,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 210225.70795370595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203635.10440614464,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 203624.1618773944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201959.4919431172,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 201950.54502369658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 581437.541069148,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 581385.0065189063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3893025.205021259,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3892740.5857740664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3166066.6075087627,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165898.9761092165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3178009.170068247,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3177821.4285714244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3115487.140468095,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3115188.6287625437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1836584.009901128,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1836464.1584158416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3064046.6026490526,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3063822.185430469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11701007.395603793,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11700524.175824193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5358490.350000693,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5358002.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15101699.714286301,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15101131.428571435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58437.48839999989,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58431.609999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298734.73963053984,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 298715.4757755317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 227541.43103906437,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 227519.53228806765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 240993.70689171072,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 240979.60618846636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227111.3582844773,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 227091.42248268484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 567563.9144421736,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 567534.2915811075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3976627.905982556,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3976455.1282051485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3212815.9930797187,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3212547.058823515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3234771.982578619,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3234581.8815331045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3153895.7167237015,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3153631.3993174047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1879184.9645092303,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1879160.3340292354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3108878.782608369,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3108564.8829431515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11943967.370786104,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11943288.764044907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5339038.920000121,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5338951.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54275.93984862348,
            "unit": "ns/iter",
            "extra": "iterations: 15062\ncpu: 54273.33023502885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 257818.34773477504,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 257808.4008400844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201776.22911750927,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 201759.20245398913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 196799.96723940226,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 196786.52920962227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189815.48384221926,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 189807.66659237776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538746.98445274,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 538720.6467661699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3929927.843881866,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929629.113924032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3176265.433446875,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176097.610921506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3163244.8040541424,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3163082.7702702503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3129707.835570351,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3129369.4630872323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1828777.7799606984,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828614.1453830968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3063024.871287123,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062862.0462046266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6269.686535878376,
            "unit": "ns/iter",
            "extra": "iterations: 111630\ncpu: 6269.303054734392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35152.48064694119,
            "unit": "ns/iter",
            "extra": "iterations: 19971\ncpu: 35146.41730509247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27689.19510071333,
            "unit": "ns/iter",
            "extra": "iterations: 25269\ncpu: 27687.65681269549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25946.52826691234,
            "unit": "ns/iter",
            "extra": "iterations: 26975\ncpu: 25944.189063948008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21770.6727882915,
            "unit": "ns/iter",
            "extra": "iterations: 32181\ncpu: 21767.779124328103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 164162.39658800737,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 164147.1839214741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263823.7958490637,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 263807.92452830024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66983.7127324704,
            "unit": "ns/iter",
            "extra": "iterations: 10485\ncpu: 66978.94134477738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67599.2633099133,
            "unit": "ns/iter",
            "extra": "iterations: 10387\ncpu: 67593.84807933046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66154.80411776384,
            "unit": "ns/iter",
            "extra": "iterations: 10394\ncpu: 66152.01077544747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135949.47153681456,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 135937.16728191092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123945.55866715182,
            "unit": "ns/iter",
            "extra": "iterations: 5642\ncpu: 123933.60510457486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40243.09468782653,
            "unit": "ns/iter",
            "extra": "iterations: 17394\ncpu: 40241.00264458987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196269.9635241116,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196256.45342311807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158258.34934598365,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 158230.3563373913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157700.4730769169,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 157692.91855203593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157440.608303239,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 157435.10830324882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292144.9699874747,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 292127.38641100016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1122721.758842546,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1122649.3569131782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 933053.0000000942,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 932949.5989304743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 949100.6108843054,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 949032.244897953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927835.7925032618,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 927773.09236947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 619520.6114082456,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 619485.8288770042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 926449.4314247435,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 926431.0252995915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40812.45743070556,
            "unit": "ns/iter",
            "extra": "iterations: 17172\ncpu: 40810.02212904737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196115.20083913885,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 196106.2377622384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159848.95033189474,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 159839.3453879608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159551.99509803657,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 159545.63492063427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159162.93830802737,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 159147.33499659537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294376.58746845915,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 294358.03195962723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1125438.403877273,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1125381.9063004763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 929652.2509960597,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 929603.3200531311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 944900.3292846287,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944823.8866396734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 926766.0384106698,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 926753.112582788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 617172.876991088,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 617128.6725663773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 925870.0688741743,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 925819.3377483557 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}