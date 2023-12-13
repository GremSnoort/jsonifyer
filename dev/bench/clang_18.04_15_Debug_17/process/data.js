window.BENCHMARK_DATA = {
  "lastUpdate": 1702489604713,
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
      }
    ]
  }
}