window.BENCHMARK_DATA = {
  "lastUpdate": 1702394181109,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-6.0 18.04 Debug c++-17": [
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702392461123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9163.603691283257,
            "unit": "ns/iter",
            "extra": "iterations: 76342\ncpu: 9163.219459799326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106243.15823492706,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106236.44499689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205752.4844079596,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 205738.00703399774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 307288.70808118384,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 307281.70167319337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400571.007006072,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 400542.03643157403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 498579.4664391575,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 498533.56086461875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593806.9036885474,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593784.3579234972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 557723.3679999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557680.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 633614.7900000243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633553.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7349.434435767399,
            "unit": "ns/iter",
            "extra": "iterations: 95395\ncpu: 7349.266733057293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6053.772516400844,
            "unit": "ns/iter",
            "extra": "iterations: 115538\ncpu: 6053.578909103505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5962.723136982017,
            "unit": "ns/iter",
            "extra": "iterations: 117578\ncpu: 5962.1357736991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6108.602242577925,
            "unit": "ns/iter",
            "extra": "iterations: 114957\ncpu: 6108.276138034222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10126.169546514397,
            "unit": "ns/iter",
            "extra": "iterations: 69043\ncpu: 10125.746274061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57062.105469559036,
            "unit": "ns/iter",
            "extra": "iterations: 14535\ncpu: 57060.055039559644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235268.15821224597,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235255.36057033148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 182436.07544346893,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182428.29664458203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182297.65380516616,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182286.91110637394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181435.87760307593,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 181424.28814279643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 425550.9396171121,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 425535.1497299952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3283537.9577464587,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283315.492957746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2696724.7579250396,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696587.0317002865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2707694.780346991,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707462.7167630014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2743516.808823522,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743405.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1619470.9755244525,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619350.1748251752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2626377.3456093343,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626265.722379604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11311244.542552464,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310652.127659569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6651893.319149457,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6651324.113475165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13430617.341772562,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13429668.35443034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52959.40360824587,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 52954.658505154664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238815.71909798097,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 238801.72605790614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185015.25809236267,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185002.20112214013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187921.32315464783,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 187913.20298769773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 191687.71422202652,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 191682.94694605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 429859.18582759146,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429825.0743310212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3316300.3772242162,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316171.530249112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2737243.0381230297,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737092.3753665723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2722400.523255992,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2722331.686046509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2779460.7886905605,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779339.583333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1639521.5912281633,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639425.964912284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2652345.2869320544,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2652266.7613636227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11491165.694737421,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11490723.157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6503067.797203025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6502717.48251747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55039.939970819396,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 55037.63597771307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 229008.4437033138,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228998.1323372471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184427.19006479153,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184415.31317494524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180163.77317635872,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 180147.65608576845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183796.83841002345,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 183786.10931086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419053.76635969506,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 419021.0373242847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3319496.5409255708,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319263.7010676186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2720177.0935673336,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719961.111111128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2716387.374999708,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2716269.476744188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2749493.6253686906,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2749351.3274336453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1628801.7870854682,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628714.3106457188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2645472.642045248,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645300.5681818067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.234486909966,
            "unit": "ns/iter",
            "extra": "iterations: 212643\ncpu: 3286.9109258240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23243.182553358496,
            "unit": "ns/iter",
            "extra": "iterations: 30172\ncpu: 23241.647885456554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17595.934403509687,
            "unit": "ns/iter",
            "extra": "iterations: 39682\ncpu: 17594.440804395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.12702131594,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17837.724413659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13550.041947217842,
            "unit": "ns/iter",
            "extra": "iterations: 51684\ncpu: 13549.638185898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96940.64586274483,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 96932.2366563115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 214005.73632751216,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 213990.10082493376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52541.29169811076,
            "unit": "ns/iter",
            "extra": "iterations: 13250\ncpu: 52535.42641509379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52268.85775313158,
            "unit": "ns/iter",
            "extra": "iterations: 13343\ncpu: 52265.81728247019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53079.36512034556,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 53078.8095057322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 111745.28418360904,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111736.59043659165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98537.7417041565,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98528.69797525315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27916.939825340123,
            "unit": "ns/iter",
            "extra": "iterations: 25077\ncpu: 27913.7177493317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137732.75853943886,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137723.43934040237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110629.40873142128,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110618.55425498293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 109724.75727700508,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109720.84507042274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 110859.82551506502,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 110856.16481774962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201743.42700520786,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201739.18061165756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 894630.4533844781,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894572.4137931111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762698.304678995,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 762617.5190424372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749881.8780747915,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749813.9037433161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 765759.2601536463,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 765733.809001106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 487301.0125523523,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487268.06136680645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735964.2218717022,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 735956.9926393186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27570.806446548286,
            "unit": "ns/iter",
            "extra": "iterations: 25471\ncpu: 27569.85198853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134420.9350924434,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134417.00693374453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109809.09632525395,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109796.30961688838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110022.34725274649,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 110016.656200941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110678.38638876229,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110668.21411653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199398.55961206206,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 199386.3662293205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 892202.6331211278,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892175.1592356813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 758166.4490239371,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 758150.433839471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 750465.1465240843,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 750424.3850267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769417.3870614476,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 769345.7236842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 488508.3008356209,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488472.7715877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 737420.7787145441,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 737331.9283456348 ns\nthreads: 1"
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
        "date": 1702394180703,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9272.69194791365,
            "unit": "ns/iter",
            "extra": "iterations: 75260\ncpu: 9272.766409779431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 108231.89023926592,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 108228.16812254715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 210993.43136785232,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 210978.63451897822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 310344.18960573873,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 310344.55197132606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 405016.33270409494,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 405002.642756017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 499224.9919354732,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 499207.6612903228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 602741.764419727,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 602746.490618485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 564313.071000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564292.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 644891.848000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644867.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7328.472764236213,
            "unit": "ns/iter",
            "extra": "iterations: 95426\ncpu: 7328.262737618684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6038.964196038605,
            "unit": "ns/iter",
            "extra": "iterations: 116691\ncpu: 6038.966158486935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5996.618213779527,
            "unit": "ns/iter",
            "extra": "iterations: 117186\ncpu: 5996.50982199239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6037.720055098387,
            "unit": "ns/iter",
            "extra": "iterations: 116155\ncpu: 6037.548103826773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10142.149446815502,
            "unit": "ns/iter",
            "extra": "iterations: 68874\ncpu: 10141.795162180215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 58032.97171929731,
            "unit": "ns/iter",
            "extra": "iterations: 14250\ncpu: 58031.684210526306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 243353.80607274204,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 243343.19679174994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 187975.95515793783,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 187969.0081731833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 188721.32256637092,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 188714.57964601705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 191219.94840294783,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 191216.10453428677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 416588.5694310366,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 416576.7116682752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3306813.8409892563,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3306634.2756183757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2721033.9020173503,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2720965.7060518702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2727604.6326533,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2727493.5860058307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2749519.252941301,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2749461.76470589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1667615.6858170177,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1667546.3195691225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2654842.9512896347,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2654783.66762178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11558530.222221937,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11558047.7777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6602332.464788553,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6602146.478873234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13822844.171052769,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13822085.526315797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 54141.273419546924,
            "unit": "ns/iter",
            "extra": "iterations: 15233\ncpu: 54139.93304011023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 242517.87092238173,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 242508.5770528677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 191305.00688735195,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 191300.02221728614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 194995.46512681444,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 194995.38043478326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 193232.9183397141,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 193229.00969997753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 424959.4353808771,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 424945.55282555096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3319807.5124555933,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319686.832740205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2803316.1917402865,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2803252.507374633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2734291.759643667,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2734213.056379818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2767112.84523807,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2767047.916666683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1655747.5551601565,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1655680.604982206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2674646.465714302,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2674624.285714283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11757608.588888817,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11757384.44444442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5005490.029999464,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5005543.000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 54564.606495563654,
            "unit": "ns/iter",
            "extra": "iterations: 15118\ncpu: 54562.99113639345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 235128.56188389857,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 235123.22015334162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 187678.56098095074,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 187674.8412524625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 183855.63357632462,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 183853.02315609014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 190421.23273942593,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 190410.93541202554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 414705.89635314606,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 414690.7389635318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3311751.8220639834,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3311631.6725978637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2725936.671554256,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2725876.246334306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2719046.8070174525,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2718952.339181295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2742388.926470633,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2742247.6470588297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1691945.0996377063,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1688651.4492753537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2676623.997142867,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2676562.857142853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3287.3777716730915,
            "unit": "ns/iter",
            "extra": "iterations: 203848\ncpu: 3287.2689454887945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23205.163307921488,
            "unit": "ns/iter",
            "extra": "iterations: 30170\ncpu: 23204.269141531353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18183.543709645524,
            "unit": "ns/iter",
            "extra": "iterations: 39648\ncpu: 18182.806194511635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18029.529419332808,
            "unit": "ns/iter",
            "extra": "iterations: 38869\ncpu: 18028.778718258647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13589.944213914987,
            "unit": "ns/iter",
            "extra": "iterations: 51572\ncpu: 13590.046924687747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95661.61534262796,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 95661.56156156103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 213625.64462055865,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 213619.1709844562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52337.1104551217,
            "unit": "ns/iter",
            "extra": "iterations: 13381\ncpu: 52334.39952170976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52462.66888457326,
            "unit": "ns/iter",
            "extra": "iterations: 13376\ncpu: 52461.333732057334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53244.45690637748,
            "unit": "ns/iter",
            "extra": "iterations: 13169\ncpu: 53244.24785481023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 113869.65035530062,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 113865.47157622765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98614.38784717006,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 98612.57577893762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27826.854541839803,
            "unit": "ns/iter",
            "extra": "iterations: 25155\ncpu: 27826.153846154117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 139029.36159551097,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 139027.6808979762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 112261.00863309478,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 112255.71542765909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 111271.43020304853,
            "unit": "ns/iter",
            "extra": "iterations: 6304\ncpu: 111268.38515228538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 112691.28887464479,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 112689.8204552743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201807.26227614837,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 201798.2091276711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 909494.3610390064,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909491.5584415471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 762222.8558951732,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 762192.6855895289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 764460.8287895331,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 764430.9705561571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 767663.8640351722,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 767639.3640350928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 502471.6820000777,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502456.2000000117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 750814.7228786579,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 750790.547798072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28228.544199894604,
            "unit": "ns/iter",
            "extra": "iterations: 24853\ncpu: 28227.163722689773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 137185.32530355992,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 137181.55111633215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 111400.96311019166,
            "unit": "ns/iter",
            "extra": "iterations: 6289\ncpu: 111396.9470504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 111374.728459944,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 111371.4763497379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 113329.0639158559,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 113328.54368931991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 199668.2124322782,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 199644.82463643805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 900306.1731770086,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 900279.6875000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 760633.5186403312,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 760603.7280701803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 771346.3062569118,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 771334.7969264543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 772707.4248078818,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 772694.4017563045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 499558.87911303435,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 499547.7110157307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 743786.3804929417,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 743766.988210066 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}