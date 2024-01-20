window.BENCHMARK_DATA = {
  "lastUpdate": 1705772740895,
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
      }
    ]
  }
}