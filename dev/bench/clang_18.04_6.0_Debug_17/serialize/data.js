window.BENCHMARK_DATA = {
  "lastUpdate": 1702392471430,
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
      }
    ]
  }
}