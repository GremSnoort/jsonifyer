window.BENCHMARK_DATA = {
  "lastUpdate": 1702492218378,
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
      }
    ]
  }
}