window.BENCHMARK_DATA = {
  "lastUpdate": 1702422476690,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 20.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397889567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 693.7088254341471,
            "unit": "ns/iter",
            "extra": "iterations: 1023757\ncpu: 693.6762337156182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6041.432380340636,
            "unit": "ns/iter",
            "extra": "iterations: 136972\ncpu: 6041.09160996408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11717.698935930694,
            "unit": "ns/iter",
            "extra": "iterations: 71048\ncpu: 11717.260162143903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17668.69235289157,
            "unit": "ns/iter",
            "extra": "iterations: 47652\ncpu: 17668.00344161839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23787.024286111107,
            "unit": "ns/iter",
            "extra": "iterations: 36070\ncpu: 23785.95231494318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28564.432612539793,
            "unit": "ns/iter",
            "extra": "iterations: 29412\ncpu: 28562.53229974161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34251.77108832164,
            "unit": "ns/iter",
            "extra": "iterations: 24184\ncpu: 34250.529275554094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39587.18068203721,
            "unit": "ns/iter",
            "extra": "iterations: 20644\ncpu: 39585.80701414451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44740.50239414484,
            "unit": "ns/iter",
            "extra": "iterations: 18587\ncpu: 44738.32786356051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 627.6473242655188,
            "unit": "ns/iter",
            "extra": "iterations: 1121991\ncpu: 627.6393482657179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 483.58525886496267,
            "unit": "ns/iter",
            "extra": "iterations: 1450119\ncpu: 483.5676934099891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 488.06316444693454,
            "unit": "ns/iter",
            "extra": "iterations: 1439449\ncpu: 488.04473100470994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 497.20884061130187,
            "unit": "ns/iter",
            "extra": "iterations: 1390017\ncpu: 497.1865092297434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 963.3756946962505,
            "unit": "ns/iter",
            "extra": "iterations: 739172\ncpu: 963.3729362042948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2830.96439375084,
            "unit": "ns/iter",
            "extra": "iterations: 285287\ncpu: 2830.8173874028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14051.61679749616,
            "unit": "ns/iter",
            "extra": "iterations: 58473\ncpu: 14051.575941032605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11372.90832167714,
            "unit": "ns/iter",
            "extra": "iterations: 72209\ncpu: 11372.04780567522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11129.01642565391,
            "unit": "ns/iter",
            "extra": "iterations: 70743\ncpu: 11128.582333234363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11036.799266864224,
            "unit": "ns/iter",
            "extra": "iterations: 73929\ncpu: 11036.641913187003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33189.91829204169,
            "unit": "ns/iter",
            "extra": "iterations: 24661\ncpu: 33189.48542232685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277554.71763174195,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 277532.95380611555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 222602.13728470795,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 222597.6190476192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 227686.16683751563,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 227665.68426448037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218251.0221136512,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 218247.64721007916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114914.8287777227,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 114907.12996389899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 213338.14827336167,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 213329.0026563635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5903.76004999996,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5903.527000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30722.334369266882,
            "unit": "ns/iter",
            "extra": "iterations: 26707\ncpu: 30721.54865765533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24786.849473839844,
            "unit": "ns/iter",
            "extra": "iterations: 33735\ncpu: 24784.982955387673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24128.417477959534,
            "unit": "ns/iter",
            "extra": "iterations: 34821\ncpu: 24128.138192470025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 24434.910089443205,
            "unit": "ns/iter",
            "extra": "iterations: 34323\ncpu: 24433.764531072433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48423.49341064976,
            "unit": "ns/iter",
            "extra": "iterations: 17073\ncpu: 48421.28506999366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301057.87888199196,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 301041.959972395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235699.40630048641,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 235690.118470653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233796.66099865243,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 233787.15249662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 236218.9134458386,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 236206.77735438087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125875.98174053757,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 125868.42880282665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223026.91733195138,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 223011.25418490884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 899975.2364485987,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 899946.6355140201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 504587.6611522959,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 504537.9349686227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2834.614533650993,
            "unit": "ns/iter",
            "extra": "iterations: 281581\ncpu: 2834.5502715026937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13713.09389105111,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 13712.464252489377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10780.983037480639,
            "unit": "ns/iter",
            "extra": "iterations: 77347\ncpu: 10780.860279002422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10559.845747019928,
            "unit": "ns/iter",
            "extra": "iterations: 77334\ncpu: 10558.944319445545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9977.584777066122,
            "unit": "ns/iter",
            "extra": "iterations: 83926\ncpu: 9977.545695017041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31383.387552670923,
            "unit": "ns/iter",
            "extra": "iterations: 26817\ncpu: 31380.489987694324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292071.22763158334,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 292065.1315789476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 224208.28542611754,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 224190.94805849687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 221601.59504550326,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 221592.41658240595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 219003.75351939385,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 218989.52827858715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110691.37336914704,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 110687.91250959256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 209515.83703525012,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 209508.40173829018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.44973189444647,
            "unit": "ns/iter",
            "extra": "iterations: 2891585\ncpu: 242.4450258249392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1682.1479310858147,
            "unit": "ns/iter",
            "extra": "iterations: 415822\ncpu: 1682.0969068495585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1336.8984850799623,
            "unit": "ns/iter",
            "extra": "iterations: 523460\ncpu: 1336.8354793107321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1193.6871042805737,
            "unit": "ns/iter",
            "extra": "iterations: 591328\ncpu: 1193.6130201850765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 989.7392949705217,
            "unit": "ns/iter",
            "extra": "iterations: 706864\ncpu: 989.6814663075269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9969.717641601099,
            "unit": "ns/iter",
            "extra": "iterations: 71133\ncpu: 9969.107165450672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13523.37708835179,
            "unit": "ns/iter",
            "extra": "iterations: 51476\ncpu: 13523.024322014226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3098.4733623873035,
            "unit": "ns/iter",
            "extra": "iterations: 226015\ncpu: 3098.3301993230534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3147.726237661595,
            "unit": "ns/iter",
            "extra": "iterations: 223789\ncpu: 3147.5470197373293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3139.2101330093474,
            "unit": "ns/iter",
            "extra": "iterations: 223744\ncpu: 3139.0687571510225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6011.607271133311,
            "unit": "ns/iter",
            "extra": "iterations: 116378\ncpu: 6011.436010242468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6030.528871538703,
            "unit": "ns/iter",
            "extra": "iterations: 115529\ncpu: 6030.336106085977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2060.5374692126484,
            "unit": "ns/iter",
            "extra": "iterations: 295576\ncpu: 2060.4301431780846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10832.028414242097,
            "unit": "ns/iter",
            "extra": "iterations: 63982\ncpu: 10831.430714888673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8524.491548989743,
            "unit": "ns/iter",
            "extra": "iterations: 82712\ncpu: 8523.951784505374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8526.946207232824,
            "unit": "ns/iter",
            "extra": "iterations: 82130\ncpu: 8526.72592231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8444.632679498589,
            "unit": "ns/iter",
            "extra": "iterations: 81825\ncpu: 8444.628169874668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18901.401819397488,
            "unit": "ns/iter",
            "extra": "iterations: 37375\ncpu: 18900.572575250822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60935.0864078511,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 60930.40049075471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50003.46060000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50002.39999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 50258.23684020262,
            "unit": "ns/iter",
            "extra": "iterations: 13849\ncpu: 50258.199147953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 50203.489400001905,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50200.39999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28729.3435528996,
            "unit": "ns/iter",
            "extra": "iterations: 23941\ncpu: 28727.49676287535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 49059.261176802225,
            "unit": "ns/iter",
            "extra": "iterations: 14293\ncpu: 49057.6785839229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2330.8497946145394,
            "unit": "ns/iter",
            "extra": "iterations: 301141\ncpu: 2330.7473907571607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10910.924029932004,
            "unit": "ns/iter",
            "extra": "iterations: 64815\ncpu: 10910.33402761709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 10574.885203007747,
            "unit": "ns/iter",
            "extra": "iterations: 66500\ncpu: 10574.003007518795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 10376.389719269773,
            "unit": "ns/iter",
            "extra": "iterations: 68108\ncpu: 10376.133493862577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10416.187406252136,
            "unit": "ns/iter",
            "extra": "iterations: 66668\ncpu: 10416.168176636522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19846.568994309346,
            "unit": "ns/iter",
            "extra": "iterations: 35329\ncpu: 19845.905629935492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60374.28555508268,
            "unit": "ns/iter",
            "extra": "iterations: 11665\ncpu: 60370.39862837613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 51785.781900518814,
            "unit": "ns/iter",
            "extra": "iterations: 13691\ncpu: 51782.95230443321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 51975.79455241179,
            "unit": "ns/iter",
            "extra": "iterations: 13327\ncpu: 51974.31529976755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49355.65495230043,
            "unit": "ns/iter",
            "extra": "iterations: 14256\ncpu: 49352.53226711579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28101.898224374912,
            "unit": "ns/iter",
            "extra": "iterations: 24780\ncpu: 28100.064568200545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 50128.50159835552,
            "unit": "ns/iter",
            "extra": "iterations: 14077\ncpu: 50125.467073951026 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409083143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 699.7521782555167,
            "unit": "ns/iter",
            "extra": "iterations: 1000227\ncpu: 699.721963114373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6337.705373873065,
            "unit": "ns/iter",
            "extra": "iterations: 129683\ncpu: 6337.62328138615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12269.219996772126,
            "unit": "ns/iter",
            "extra": "iterations: 68151\ncpu: 12268.67837595927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18051.88531342514,
            "unit": "ns/iter",
            "extra": "iterations: 46614\ncpu: 18051.536019221694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24129.49628321593,
            "unit": "ns/iter",
            "extra": "iterations: 35111\ncpu: 24128.330152943512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29140.41434150705,
            "unit": "ns/iter",
            "extra": "iterations: 28421\ncpu: 29139.403961859163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35451.526594840645,
            "unit": "ns/iter",
            "extra": "iterations: 23576\ncpu: 35449.49524940617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40825.355803769155,
            "unit": "ns/iter",
            "extra": "iterations: 20323\ncpu: 40822.467155439634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46593.31502055536,
            "unit": "ns/iter",
            "extra": "iterations: 18002\ncpu: 46591.63426285967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 676.3024591185936,
            "unit": "ns/iter",
            "extra": "iterations: 1042650\ncpu: 676.273533784108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 523.2759813554258,
            "unit": "ns/iter",
            "extra": "iterations: 1340442\ncpu: 523.2594174160471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 524.6737601040793,
            "unit": "ns/iter",
            "extra": "iterations: 1333862\ncpu: 524.672942178427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 528.3926636334674,
            "unit": "ns/iter",
            "extra": "iterations: 1324225\ncpu: 528.361418943155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 967.2849295977395,
            "unit": "ns/iter",
            "extra": "iterations: 721852\ncpu: 967.2496578245931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2998.892001554441,
            "unit": "ns/iter",
            "extra": "iterations: 267652\ncpu: 2998.781626888644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14505.031597622461,
            "unit": "ns/iter",
            "extra": "iterations: 56365\ncpu: 14504.699725006656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11711.48513172722,
            "unit": "ns/iter",
            "extra": "iterations: 69006\ncpu: 11710.817899892754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11692.55356023969,
            "unit": "ns/iter",
            "extra": "iterations: 70220\ncpu: 11691.800056963802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11153.049024553346,
            "unit": "ns/iter",
            "extra": "iterations: 73351\ncpu: 11152.416463306612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34062.045004986925,
            "unit": "ns/iter",
            "extra": "iterations: 24064\ncpu: 34060.97074468092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282745.91849934607,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 282731.17723156454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 227961.86884816538,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 227953.48167539318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 222912.18585858512,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 222908.0050505047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 224410.21204323275,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 224406.94801852832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 117896.47162740788,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 117893.52248393977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 217466.1257128652,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 217455.4673939993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 6176.266498814105,
            "unit": "ns/iter",
            "extra": "iterations: 137025\ncpu: 6176.037219485472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 32222.02117483742,
            "unit": "ns/iter",
            "extra": "iterations: 25927\ncpu: 32221.749527519674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 25373.475434848348,
            "unit": "ns/iter",
            "extra": "iterations: 32770\ncpu: 25372.261214525453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 25204.181640625655,
            "unit": "ns/iter",
            "extra": "iterations: 33280\ncpu: 25203.554687500022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 24421.98195422626,
            "unit": "ns/iter",
            "extra": "iterations: 34080\ncpu: 24421.423122065637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50466.48884518677,
            "unit": "ns/iter",
            "extra": "iterations: 16271\ncpu: 50465.50918812618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 302927.6468349905,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 302913.040470425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 240009.9649026494,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 240001.28873046386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 239473.13027877602,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 239324.62048026468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 245331.66436845562,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 245323.52454495238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 129689.46112995692,
            "unit": "ns/iter",
            "extra": "iterations: 6779\ncpu: 129685.66160200564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 232102.73504722482,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 232097.14060860372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 909406.385796539,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 909391.4587332053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 515002.7879320541,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 514977.15289982525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2904.9136043601156,
            "unit": "ns/iter",
            "extra": "iterations: 278521\ncpu: 2904.8664194082235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13910.920470390416,
            "unit": "ns/iter",
            "extra": "iterations: 59525\ncpu: 13910.504829903392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10993.241556496409,
            "unit": "ns/iter",
            "extra": "iterations: 76094\ncpu: 10993.21891344913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10859.920539327171,
            "unit": "ns/iter",
            "extra": "iterations: 74389\ncpu: 10859.549126887043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10551.416116450115,
            "unit": "ns/iter",
            "extra": "iterations: 78454\ncpu: 10551.189231906643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31879.022663542048,
            "unit": "ns/iter",
            "extra": "iterations: 26033\ncpu: 31878.02788768117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292341.4040937701,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 292340.7725321874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 223164.07046208796,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 223153.48480980337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 219279.95575221634,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 219272.5158027814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 222079.70986266944,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 222075.13108614268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 113152.73890675312,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 113147.4855305463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 215614.32740994025,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 215607.20545277622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 262.7135289547214,
            "unit": "ns/iter",
            "extra": "iterations: 2661536\ncpu: 262.70210134298395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1790.5138760538382,
            "unit": "ns/iter",
            "extra": "iterations: 388475\ncpu: 1790.4655383229187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1343.365206024373,
            "unit": "ns/iter",
            "extra": "iterations: 535495\ncpu: 1343.2967628082397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1296.6496460650787,
            "unit": "ns/iter",
            "extra": "iterations: 540071\ncpu: 1296.6071127685043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1016.4732076960056,
            "unit": "ns/iter",
            "extra": "iterations: 689657\ncpu: 1016.4594863823598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10571.92043691154,
            "unit": "ns/iter",
            "extra": "iterations: 66375\ncpu: 10571.724293785352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14093.194528082755,
            "unit": "ns/iter",
            "extra": "iterations: 49818\ncpu: 14092.671323617931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3288.011658911172,
            "unit": "ns/iter",
            "extra": "iterations: 213399\ncpu: 3287.802660743509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3262.60155673442,
            "unit": "ns/iter",
            "extra": "iterations: 215451\ncpu: 3262.5678228460497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3267.1492606091174,
            "unit": "ns/iter",
            "extra": "iterations: 214839\ncpu: 3267.0948943161857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5852.090377401035,
            "unit": "ns/iter",
            "extra": "iterations: 119687\ncpu: 5851.932958466653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6107.778272756961,
            "unit": "ns/iter",
            "extra": "iterations: 114483\ncpu: 6107.694592210283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2052.8523925290347,
            "unit": "ns/iter",
            "extra": "iterations: 339766\ncpu: 2052.792804459541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10721.228501827043,
            "unit": "ns/iter",
            "extra": "iterations: 65680\ncpu: 10720.892204628592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8457.75043176786,
            "unit": "ns/iter",
            "extra": "iterations: 82799\ncpu: 8457.449969202513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8549.803860363472,
            "unit": "ns/iter",
            "extra": "iterations: 82013\ncpu: 8549.643349225058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8494.449823450426,
            "unit": "ns/iter",
            "extra": "iterations: 82130\ncpu: 8494.34920248382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18550.850104793666,
            "unit": "ns/iter",
            "extra": "iterations: 37693\ncpu: 18550.37274825569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60944.0987363798,
            "unit": "ns/iter",
            "extra": "iterations: 11475\ncpu: 60943.076252722676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49660.76240246172,
            "unit": "ns/iter",
            "extra": "iterations: 13969\ncpu: 49659.80385138488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49257.72657018458,
            "unit": "ns/iter",
            "extra": "iterations: 14234\ncpu: 49257.73500070277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49483.10815035685,
            "unit": "ns/iter",
            "extra": "iterations: 14073\ncpu: 49482.17153414343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 29740.45049381872,
            "unit": "ns/iter",
            "extra": "iterations: 24098\ncpu: 29740.136110880547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48396.29461639066,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 48395.82959950345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2260.3839816410527,
            "unit": "ns/iter",
            "extra": "iterations: 297621\ncpu: 2260.3220202875373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12075.579410190105,
            "unit": "ns/iter",
            "extra": "iterations: 57883\ncpu: 12075.353730801688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9787.237354246743,
            "unit": "ns/iter",
            "extra": "iterations: 72554\ncpu: 9787.147503928027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9540.766931645998,
            "unit": "ns/iter",
            "extra": "iterations: 73339\ncpu: 9540.51868719245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9460.52653449516,
            "unit": "ns/iter",
            "extra": "iterations: 71473\ncpu: 9460.438207434987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19802.346037489802,
            "unit": "ns/iter",
            "extra": "iterations: 35369\ncpu: 19801.77839350853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61690.94858000043,
            "unit": "ns/iter",
            "extra": "iterations: 11338\ncpu: 61688.587052390845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49906.88188920264,
            "unit": "ns/iter",
            "extra": "iterations: 14080\ncpu: 49905.305397726894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50449.74255995708,
            "unit": "ns/iter",
            "extra": "iterations: 13844\ncpu: 50448.72869112922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 51155.5709903616,
            "unit": "ns/iter",
            "extra": "iterations: 13692\ncpu: 51154.981010808864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29984.17836667167,
            "unit": "ns/iter",
            "extra": "iterations: 23547\ncpu: 29983.131609122625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 50009.40333190439,
            "unit": "ns/iter",
            "extra": "iterations: 13986\ncpu: 50008.29400829397 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412545569,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 648.227264812739,
            "unit": "ns/iter",
            "extra": "iterations: 1079714\ncpu: 648.1863715761766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6188.1286157796985,
            "unit": "ns/iter",
            "extra": "iterations: 133996\ncpu: 6187.769037881727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11645.930498174348,
            "unit": "ns/iter",
            "extra": "iterations: 70919\ncpu: 11644.782075325367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17409.47723102976,
            "unit": "ns/iter",
            "extra": "iterations: 48509\ncpu: 17408.243831041666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22707.74575992074,
            "unit": "ns/iter",
            "extra": "iterations: 36438\ncpu: 22706.965256051375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28467.98941979588,
            "unit": "ns/iter",
            "extra": "iterations: 29300\ncpu: 28466.62116040955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34371.11190652523,
            "unit": "ns/iter",
            "extra": "iterations: 24306\ncpu: 34369.21747716614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39966.21346779078,
            "unit": "ns/iter",
            "extra": "iterations: 21221\ncpu: 39964.69534894682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45432.840249408706,
            "unit": "ns/iter",
            "extra": "iterations: 18604\ncpu: 45429.77854224894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 624.0357240440253,
            "unit": "ns/iter",
            "extra": "iterations: 1123585\ncpu: 624.0140265311479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 487.7945459403536,
            "unit": "ns/iter",
            "extra": "iterations: 1429614\ncpu: 487.76236102892034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 502.54477406799344,
            "unit": "ns/iter",
            "extra": "iterations: 1393273\ncpu: 502.5305880469948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 496.64164559058565,
            "unit": "ns/iter",
            "extra": "iterations: 1417485\ncpu: 496.61534337224055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 932.4716192030578,
            "unit": "ns/iter",
            "extra": "iterations: 744817\ncpu: 932.4450166953756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2816.30929945605,
            "unit": "ns/iter",
            "extra": "iterations: 285264\ncpu: 2816.2141034270035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13503.70162895639,
            "unit": "ns/iter",
            "extra": "iterations: 60284\ncpu: 13503.669298653078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10995.239208798579,
            "unit": "ns/iter",
            "extra": "iterations: 76289\ncpu: 10995.033359986372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11061.402303656309,
            "unit": "ns/iter",
            "extra": "iterations: 74143\ncpu: 11060.713755850187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10643.089628215635,
            "unit": "ns/iter",
            "extra": "iterations: 77007\ncpu: 10642.541587128468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33081.526630065,
            "unit": "ns/iter",
            "extra": "iterations: 24953\ncpu: 33077.942531960005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272947.27453454776,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 272933.1650362896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211158.62168196234,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 211152.02183081087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218544.82801908348,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 218531.508912879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214142.65012407707,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 214135.1116625311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111313.30155295298,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 111308.52851323843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208653.88528500218,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 208643.00023849276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5655.283250000025,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5655.068000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 33571.55717797258,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 33570.49565249303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23969.20627802715,
            "unit": "ns/iter",
            "extra": "iterations: 34565\ncpu: 23967.96181108053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24043.009690883773,
            "unit": "ns/iter",
            "extra": "iterations: 34259\ncpu: 24042.245833211702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23237.024700430014,
            "unit": "ns/iter",
            "extra": "iterations: 35384\ncpu: 23235.36909337554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48027.952214592784,
            "unit": "ns/iter",
            "extra": "iterations: 16888\ncpu: 48024.08218853644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 289535.5848303536,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 289512.27544910205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228551.58791493374,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 228527.25622406782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233008.76694914702,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 232990.75741525457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228520.8826728842,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 228496.39989640008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123321.66286365488,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 123310.16828294365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217659.6058194416,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 217636.5580701314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 896317.2067038944,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 896259.8696461857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 497620.57262105733,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 497540.6789092946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2858.547575741287,
            "unit": "ns/iter",
            "extra": "iterations: 278745\ncpu: 2858.3357549014117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13975.49444640535,
            "unit": "ns/iter",
            "extra": "iterations: 59511\ncpu: 13974.043454151277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10613.959590003484,
            "unit": "ns/iter",
            "extra": "iterations: 79708\ncpu: 10613.83926331113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10798.219644228226,
            "unit": "ns/iter",
            "extra": "iterations: 76847\ncpu: 10797.77219670254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9911.585926050031,
            "unit": "ns/iter",
            "extra": "iterations: 83246\ncpu: 9911.353098046737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31463.06914489681,
            "unit": "ns/iter",
            "extra": "iterations: 26336\ncpu: 31461.034325637862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279265.0820754726,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 279254.05660377274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216091.2115949172,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 216066.12035224892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 220723.5154382449,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 220699.1035856577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215111.80391676194,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 215088.12729498057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110249.89731695074,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 110242.66549648918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205381.21170436888,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 205359.43110282128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 253.82270245360266,
            "unit": "ns/iter",
            "extra": "iterations: 2760151\ncpu: 253.8069837483522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1725.2366595439503,
            "unit": "ns/iter",
            "extra": "iterations: 406208\ncpu: 1725.128259413911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1370.5828648587785,
            "unit": "ns/iter",
            "extra": "iterations: 512479\ncpu: 1370.5293290066543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1358.87321774435,
            "unit": "ns/iter",
            "extra": "iterations: 514236\ncpu: 1358.7877939311934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 986.2218567102672,
            "unit": "ns/iter",
            "extra": "iterations: 711635\ncpu: 986.1955918413171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9786.286286272178,
            "unit": "ns/iter",
            "extra": "iterations: 70681\ncpu: 9785.260536777896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12632.031176649894,
            "unit": "ns/iter",
            "extra": "iterations: 55811\ncpu: 12631.112146351046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3081.1687051654867,
            "unit": "ns/iter",
            "extra": "iterations: 227782\ncpu: 3080.9146464602063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3109.209442932491,
            "unit": "ns/iter",
            "extra": "iterations: 225269\ncpu: 3109.0056776565143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3056.2464539547937,
            "unit": "ns/iter",
            "extra": "iterations: 229199\ncpu: 3055.952251100576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5877.387837115579,
            "unit": "ns/iter",
            "extra": "iterations: 119692\ncpu: 5876.977575777831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5891.319081180044,
            "unit": "ns/iter",
            "extra": "iterations: 119327\ncpu: 5891.0011983876375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2009.4850276751304,
            "unit": "ns/iter",
            "extra": "iterations: 346339\ncpu: 2009.372320183378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10540.57427128788,
            "unit": "ns/iter",
            "extra": "iterations: 67139\ncpu: 10540.294016890384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8229.620521135059,
            "unit": "ns/iter",
            "extra": "iterations: 85736\ncpu: 8228.702062144383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8175.27660397677,
            "unit": "ns/iter",
            "extra": "iterations: 85288\ncpu: 8174.752602945312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8084.643913944468,
            "unit": "ns/iter",
            "extra": "iterations: 83946\ncpu: 8084.171967693616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18472.81640387005,
            "unit": "ns/iter",
            "extra": "iterations: 37735\ncpu: 18470.255730753648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57779.91715043998,
            "unit": "ns/iter",
            "extra": "iterations: 12058\ncpu: 57776.78719522354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46870.686346617746,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46864.74993313708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47550.327878788776,
            "unit": "ns/iter",
            "extra": "iterations: 14850\ncpu: 47547.50168350201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47278.49194522904,
            "unit": "ns/iter",
            "extra": "iterations: 14898\ncpu: 47274.10390656434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27637.643629023107,
            "unit": "ns/iter",
            "extra": "iterations: 25263\ncpu: 27633.72521078293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46795.78036296156,
            "unit": "ns/iter",
            "extra": "iterations: 15043\ncpu: 46795.752177092996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2171.1181675391917,
            "unit": "ns/iter",
            "extra": "iterations: 324700\ncpu: 2170.9125346473793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12460.218451711698,
            "unit": "ns/iter",
            "extra": "iterations: 56049\ncpu: 12459.19998572674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9994.45373495754,
            "unit": "ns/iter",
            "extra": "iterations: 70215\ncpu: 9993.578295236048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8945.316141746964,
            "unit": "ns/iter",
            "extra": "iterations: 78139\ncpu: 8944.216076479212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9676.281290948418,
            "unit": "ns/iter",
            "extra": "iterations: 76316\ncpu: 9676.108548666047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19100.559369939685,
            "unit": "ns/iter",
            "extra": "iterations: 36441\ncpu: 19099.083449960162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58008.68317079068,
            "unit": "ns/iter",
            "extra": "iterations: 11997\ncpu: 58004.692839876116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47711.89626641071,
            "unit": "ns/iter",
            "extra": "iterations: 14624\ncpu: 47707.95951859992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46804.97881865226,
            "unit": "ns/iter",
            "extra": "iterations: 14966\ncpu: 46802.63263397012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47337.87552174586,
            "unit": "ns/iter",
            "extra": "iterations: 14854\ncpu: 47334.36111485143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29333.157644984116,
            "unit": "ns/iter",
            "extra": "iterations: 23813\ncpu: 29330.848696090135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46969.40504550388,
            "unit": "ns/iter",
            "extra": "iterations: 14944\ncpu: 46965.88597430432 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418358638,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 672.4542165641294,
            "unit": "ns/iter",
            "extra": "iterations: 1036543\ncpu: 672.4203433914465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6278.689856502018,
            "unit": "ns/iter",
            "extra": "iterations: 129827\ncpu: 6278.546835404037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12086.18262806345,
            "unit": "ns/iter",
            "extra": "iterations: 68697\ncpu: 12085.804329155571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18138.261695842997,
            "unit": "ns/iter",
            "extra": "iterations: 46042\ncpu: 18138.180357065285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23753.964798505083,
            "unit": "ns/iter",
            "extra": "iterations: 35311\ncpu: 23753.402622412286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29437.485534500294,
            "unit": "ns/iter",
            "extra": "iterations: 27652\ncpu: 29436.514537827286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36122.77769839031,
            "unit": "ns/iter",
            "extra": "iterations: 23792\ncpu: 36118.405346334905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40800.597748556036,
            "unit": "ns/iter",
            "extra": "iterations: 20609\ncpu: 40798.43272356736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46666.425778694604,
            "unit": "ns/iter",
            "extra": "iterations: 18364\ncpu: 46665.25811370069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 789.2665419890238,
            "unit": "ns/iter",
            "extra": "iterations: 881741\ncpu: 789.2264281688159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 597.5430079016642,
            "unit": "ns/iter",
            "extra": "iterations: 1176714\ncpu: 597.5218277338425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 573.8638130958798,
            "unit": "ns/iter",
            "extra": "iterations: 1251251\ncpu: 573.8564844303825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 564.4721207836062,
            "unit": "ns/iter",
            "extra": "iterations: 1238844\ncpu: 564.4482275411594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 918.5605083186065,
            "unit": "ns/iter",
            "extra": "iterations: 757871\ncpu: 918.5301984110753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2836.916067908814,
            "unit": "ns/iter",
            "extra": "iterations: 283086\ncpu: 2836.8358025476364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13829.905567109347,
            "unit": "ns/iter",
            "extra": "iterations: 58666\ncpu: 13829.719087716912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10947.79451411753,
            "unit": "ns/iter",
            "extra": "iterations: 74555\ncpu: 10947.611830192473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11250.253348614842,
            "unit": "ns/iter",
            "extra": "iterations: 72418\ncpu: 11249.832914468776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10578.995252548963,
            "unit": "ns/iter",
            "extra": "iterations: 77094\ncpu: 10578.76877578022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32983.8615201436,
            "unit": "ns/iter",
            "extra": "iterations: 25195\ncpu: 32982.075808692236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272167.61057542264,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 272160.87091757474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213329.00601202413,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 213326.07715430844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214640.2076788677,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 214633.80703066633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214888.72188040614,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 214885.7986709326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112116.60463618193,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 112113.0328396655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206594.9421115063,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 206589.46619217013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5667.724469999485,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5667.460999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30373.60150763141,
            "unit": "ns/iter",
            "extra": "iterations: 27195\ncpu: 30372.833241404624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23893.751764264343,
            "unit": "ns/iter",
            "extra": "iterations: 34717\ncpu: 23893.642883889755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23722.619042165905,
            "unit": "ns/iter",
            "extra": "iterations: 34933\ncpu: 23722.477313714877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23763.594149801138,
            "unit": "ns/iter",
            "extra": "iterations: 34939\ncpu: 23763.07278399498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49007.94019654332,
            "unit": "ns/iter",
            "extra": "iterations: 16688\ncpu: 49006.95110258861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 289248.33544301876,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 289230.0466355776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229524.25415238328,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 229522.83153176852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230419.6854287117,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 230410.31036296603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228144.8215031234,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 228139.45720250573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123965.33233830813,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 123961.42146410784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219111.76201257555,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 219104.6792452838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 885046.3131969874,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 885021.5613382934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 483200.16530724365,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 483193.85535617126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2859.3553414205217,
            "unit": "ns/iter",
            "extra": "iterations: 284971\ncpu: 2859.1512820602784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13696.901514525578,
            "unit": "ns/iter",
            "extra": "iterations: 60415\ncpu: 13696.108582305778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10336.531661143532,
            "unit": "ns/iter",
            "extra": "iterations: 79656\ncpu: 10335.82906497943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10397.475468398952,
            "unit": "ns/iter",
            "extra": "iterations: 80060\ncpu: 10397.088433674744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10057.974117475107,
            "unit": "ns/iter",
            "extra": "iterations: 81754\ncpu: 10057.538469065707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31301.843008066087,
            "unit": "ns/iter",
            "extra": "iterations: 26409\ncpu: 31301.188988602455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280420.6492490583,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 280420.2753441807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214274.61644888952,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 214274.22495516346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214236.2732558063,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 214233.09108527063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212678.1581237872,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 212670.55125725403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109533.17819416769,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 109531.11167002027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204048.11139534356,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 204042.8372093027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 261.5505601648051,
            "unit": "ns/iter",
            "extra": "iterations: 2676623\ncpu: 261.54572384680233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1733.074933351723,
            "unit": "ns/iter",
            "extra": "iterations: 403612\ncpu: 1733.0272638078104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1378.569512949139,
            "unit": "ns/iter",
            "extra": "iterations: 509495\ncpu: 1378.4690723167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1328.1260962065078,
            "unit": "ns/iter",
            "extra": "iterations: 527843\ncpu: 1328.054554100369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1020.3882392628582,
            "unit": "ns/iter",
            "extra": "iterations: 687746\ncpu: 1020.2984822885146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10102.692346366517,
            "unit": "ns/iter",
            "extra": "iterations: 69614\ncpu: 10102.568448875252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13395.412221386783,
            "unit": "ns/iter",
            "extra": "iterations: 51909\ncpu: 13394.844824596865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3109.408625955143,
            "unit": "ns/iter",
            "extra": "iterations: 224949\ncpu: 3109.3950184263845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3162.524387815474,
            "unit": "ns/iter",
            "extra": "iterations: 220930\ncpu: 3162.404381478296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3129.666042984928,
            "unit": "ns/iter",
            "extra": "iterations: 223939\ncpu: 3129.565194093043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5913.012731806229,
            "unit": "ns/iter",
            "extra": "iterations: 117501\ncpu: 5912.548829371643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5878.362403720909,
            "unit": "ns/iter",
            "extra": "iterations: 118666\ncpu: 5877.871504896123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2059.6702932153325,
            "unit": "ns/iter",
            "extra": "iterations: 336408\ncpu: 2059.5773584457106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10456.97831390151,
            "unit": "ns/iter",
            "extra": "iterations: 66817\ncpu: 10455.925887124653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8405.425369040217,
            "unit": "ns/iter",
            "extra": "iterations: 83866\ncpu: 8405.23215605839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8315.436530476662,
            "unit": "ns/iter",
            "extra": "iterations: 83804\ncpu: 8314.944394062297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8184.260277986053,
            "unit": "ns/iter",
            "extra": "iterations: 85328\ncpu: 8183.76617288578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18581.244799277923,
            "unit": "ns/iter",
            "extra": "iterations: 37639\ncpu: 18580.411275538903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57858.31637479918,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 57851.80512905585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47212.63374706228,
            "unit": "ns/iter",
            "extra": "iterations: 14905\ncpu: 47209.33243877933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46990.55277089129,
            "unit": "ns/iter",
            "extra": "iterations: 14923\ncpu: 46986.55096160223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46946.55150142739,
            "unit": "ns/iter",
            "extra": "iterations: 15019\ncpu: 46944.84319861509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27491.547885327294,
            "unit": "ns/iter",
            "extra": "iterations: 25394\ncpu: 27491.123887532296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46382.842741936336,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46381.59703860385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2044.177275575188,
            "unit": "ns/iter",
            "extra": "iterations: 343155\ncpu: 2044.1418600923885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10622.076832942388,
            "unit": "ns/iter",
            "extra": "iterations: 65714\ncpu: 10621.765529415336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9712.297689144494,
            "unit": "ns/iter",
            "extra": "iterations: 72008\ncpu: 9712.133374069597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9973.714853374844,
            "unit": "ns/iter",
            "extra": "iterations: 70213\ncpu: 9973.456482417925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9195.15775516343,
            "unit": "ns/iter",
            "extra": "iterations: 76549\ncpu: 9194.808553998091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18697.066933545095,
            "unit": "ns/iter",
            "extra": "iterations: 37470\ncpu: 18696.981585268324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59743.874436740756,
            "unit": "ns/iter",
            "extra": "iterations: 11540\ncpu: 59741.14384748696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46651.93011187202,
            "unit": "ns/iter",
            "extra": "iterations: 14838\ncpu: 46648.8003774092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46877.009406074765,
            "unit": "ns/iter",
            "extra": "iterations: 14884\ncpu: 46873.52862133791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48200.063810093496,
            "unit": "ns/iter",
            "extra": "iterations: 15123\ncpu: 48197.00456258724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28842.950041254455,
            "unit": "ns/iter",
            "extra": "iterations: 24240\ncpu: 28841.00247524779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48148.87387205984,
            "unit": "ns/iter",
            "extra": "iterations: 14850\ncpu: 48146.11447811486 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421411474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 661.678181704561,
            "unit": "ns/iter",
            "extra": "iterations: 1056242\ncpu: 661.6771535311036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6220.706533507903,
            "unit": "ns/iter",
            "extra": "iterations: 132073\ncpu: 6220.596942599925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12077.314870577224,
            "unit": "ns/iter",
            "extra": "iterations: 69076\ncpu: 12077.213503966645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18020.6684108247,
            "unit": "ns/iter",
            "extra": "iterations: 46823\ncpu: 18020.173846186706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23641.588914408447,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 23639.898943500226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28981.321258474607,
            "unit": "ns/iter",
            "extra": "iterations: 28765\ncpu: 28979.780983834502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34663.414637155365,
            "unit": "ns/iter",
            "extra": "iterations: 24308\ncpu: 34660.61790357084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39938.68472315399,
            "unit": "ns/iter",
            "extra": "iterations: 20842\ncpu: 39935.98982823145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45653.58663028692,
            "unit": "ns/iter",
            "extra": "iterations: 18325\ncpu: 45653.39154160981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 636.6864511877413,
            "unit": "ns/iter",
            "extra": "iterations: 1104702\ncpu: 636.6858211535776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 503.00281539319116,
            "unit": "ns/iter",
            "extra": "iterations: 1395187\ncpu: 502.997017604092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 505.88102451631113,
            "unit": "ns/iter",
            "extra": "iterations: 1384302\ncpu: 505.878630530044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 526.054291128574,
            "unit": "ns/iter",
            "extra": "iterations: 1330862\ncpu: 526.044473431505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 942.4629195028842,
            "unit": "ns/iter",
            "extra": "iterations: 728213\ncpu: 942.4482946610401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2834.5054735148433,
            "unit": "ns/iter",
            "extra": "iterations: 282177\ncpu: 2834.5251384769153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14253.107354349402,
            "unit": "ns/iter",
            "extra": "iterations: 56402\ncpu: 14252.85982766566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11201.291994082803,
            "unit": "ns/iter",
            "extra": "iterations: 73683\ncpu: 11200.628367466043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11602.342838177892,
            "unit": "ns/iter",
            "extra": "iterations: 72314\ncpu: 11601.580606798141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11064.33993194293,
            "unit": "ns/iter",
            "extra": "iterations: 74056\ncpu: 11063.743653451438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32751.506382809872,
            "unit": "ns/iter",
            "extra": "iterations: 24989\ncpu: 32749.40974028571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 284862.3415584459,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 284844.9350649341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211806.5403508889,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 211797.54385964927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217643.3020050145,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 217636.01503759404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213020.56559621944,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 213014.04032860373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111673.1260115653,
            "unit": "ns/iter",
            "extra": "iterations: 7785\ncpu: 111666.33269107278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208667.38485576518,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 208661.2980769227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5927.8271596844725,
            "unit": "ns/iter",
            "extra": "iterations: 137277\ncpu: 5927.487488800005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30202.45732855857,
            "unit": "ns/iter",
            "extra": "iterations: 27079\ncpu: 30201.152184349423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23839.563089486997,
            "unit": "ns/iter",
            "extra": "iterations: 34776\ncpu: 23839.478375891453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24278.40836885969,
            "unit": "ns/iter",
            "extra": "iterations: 34246\ncpu: 24278.1054721719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23711.705949920837,
            "unit": "ns/iter",
            "extra": "iterations: 34824\ncpu: 23710.89191362279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48797.2411969802,
            "unit": "ns/iter",
            "extra": "iterations: 17210\ncpu: 48794.369552585755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 300935.26185635827,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 300918.19105691154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236980.76558266164,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 236968.23848238532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 237992.19836511058,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 237972.64305177127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 236980.20785908255,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 236964.9322493209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125617.98629939709,
            "unit": "ns/iter",
            "extra": "iterations: 6934\ncpu: 125611.40755696573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 225192.4708600663,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 225174.9679075743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 890501.5032377156,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 890451.5263644723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 490392.63676633564,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 490359.08084163745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2876.9603641651265,
            "unit": "ns/iter",
            "extra": "iterations: 279873\ncpu: 2876.8066230040063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13972.848483240878,
            "unit": "ns/iter",
            "extra": "iterations: 56535\ncpu: 13972.210135314344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10567.497071694923,
            "unit": "ns/iter",
            "extra": "iterations: 78373\ncpu: 10566.55991221468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10865.223530030893,
            "unit": "ns/iter",
            "extra": "iterations: 75954\ncpu: 10864.836611633362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10395.98667052672,
            "unit": "ns/iter",
            "extra": "iterations: 79448\ncpu: 10395.963397442347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31814.445033566462,
            "unit": "ns/iter",
            "extra": "iterations: 26216\ncpu: 31812.953921269527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284550.9800443334,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 284536.33196072205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217116.95999999988,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 217104.51851851883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 217025.52167415243,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 217012.43148978555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215634.3071831312,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 215623.82936994484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109714.26488244272,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 109708.84192096026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204972.62782042078,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 204961.38636892333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 254.9540268114257,
            "unit": "ns/iter",
            "extra": "iterations: 2757107\ncpu: 254.93714970075482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1744.0411082221265,
            "unit": "ns/iter",
            "extra": "iterations: 387684\ncpu: 1743.94352101196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1297.3780214455348,
            "unit": "ns/iter",
            "extra": "iterations: 540718\ncpu: 1297.296927418729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1330.5094368384712,
            "unit": "ns/iter",
            "extra": "iterations: 524805\ncpu: 1330.492849725137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1046.3846873359475,
            "unit": "ns/iter",
            "extra": "iterations: 664979\ncpu: 1046.3768028764857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9935.744330537256,
            "unit": "ns/iter",
            "extra": "iterations: 70818\ncpu: 9935.212799005893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12810.689906386358,
            "unit": "ns/iter",
            "extra": "iterations: 54906\ncpu: 12809.991622044883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3131.6821215141504,
            "unit": "ns/iter",
            "extra": "iterations: 223727\ncpu: 3131.4669217394367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3153.330209679711,
            "unit": "ns/iter",
            "extra": "iterations: 222816\ncpu: 3153.196808128683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3234.689140530056,
            "unit": "ns/iter",
            "extra": "iterations: 222451\ncpu: 3234.4938885417614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5366.990439726962,
            "unit": "ns/iter",
            "extra": "iterations: 131377\ncpu: 5366.695844782577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5886.718622275322,
            "unit": "ns/iter",
            "extra": "iterations: 119153\ncpu: 5886.372143378636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2022.5108700350988,
            "unit": "ns/iter",
            "extra": "iterations: 347055\ncpu: 2022.3685006699438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10415.598979744454,
            "unit": "ns/iter",
            "extra": "iterations: 66650\ncpu: 10415.419354838717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8441.233947111408,
            "unit": "ns/iter",
            "extra": "iterations: 82929\ncpu: 8440.785491203338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8461.093882758303,
            "unit": "ns/iter",
            "extra": "iterations: 83093\ncpu: 8460.592348332655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8466.812982106307,
            "unit": "ns/iter",
            "extra": "iterations: 83099\ncpu: 8466.336538345853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18504.152571625247,
            "unit": "ns/iter",
            "extra": "iterations: 37661\ncpu: 18503.504952072428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58779.9667259402,
            "unit": "ns/iter",
            "extra": "iterations: 11811\ncpu: 58779.59529252309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47923.85839018055,
            "unit": "ns/iter",
            "extra": "iterations: 14660\ncpu: 47923.57435197822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47893.494984646495,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47892.86250426513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48111.15030695588,
            "unit": "ns/iter",
            "extra": "iterations: 14497\ncpu: 48110.8919086702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28175.78923587536,
            "unit": "ns/iter",
            "extra": "iterations: 25009\ncpu: 28175.70874485215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47278.44429385013,
            "unit": "ns/iter",
            "extra": "iterations: 14756\ncpu: 47277.69043101105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2343.0637108216924,
            "unit": "ns/iter",
            "extra": "iterations: 297422\ncpu: 2343.0543133998463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11494.468869622806,
            "unit": "ns/iter",
            "extra": "iterations: 61130\ncpu: 11494.35792573204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9775.309892548226,
            "unit": "ns/iter",
            "extra": "iterations: 72125\ncpu: 9775.316464471432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9665.103858138222,
            "unit": "ns/iter",
            "extra": "iterations: 72522\ncpu: 9665.072667604372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9267.741508045365,
            "unit": "ns/iter",
            "extra": "iterations: 76072\ncpu: 9267.604374802848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19945.90321575279,
            "unit": "ns/iter",
            "extra": "iterations: 35295\ncpu: 19945.507862303395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60530.65631794779,
            "unit": "ns/iter",
            "extra": "iterations: 11499\ncpu: 60530.25480476516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48821.54570364318,
            "unit": "ns/iter",
            "extra": "iterations: 14233\ncpu: 48821.344762172484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47663.865027736305,
            "unit": "ns/iter",
            "extra": "iterations: 14603\ncpu: 47662.87749092664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 50545.32565008282,
            "unit": "ns/iter",
            "extra": "iterations: 13883\ncpu: 50544.810199523934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29016.865112235017,
            "unit": "ns/iter",
            "extra": "iterations: 24146\ncpu: 29016.673569121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 49082.07100796678,
            "unit": "ns/iter",
            "extra": "iterations: 14435\ncpu: 49081.52407343195 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421926562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 658.1572988315289,
            "unit": "ns/iter",
            "extra": "iterations: 1059423\ncpu: 658.1301331007539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6184.128024162994,
            "unit": "ns/iter",
            "extra": "iterations: 132764\ncpu: 6183.816396010967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11848.838869862713,
            "unit": "ns/iter",
            "extra": "iterations: 70080\ncpu: 11848.33904109589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17682.164045227975,
            "unit": "ns/iter",
            "extra": "iterations: 47493\ncpu: 17681.13827300866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23233.839713118385,
            "unit": "ns/iter",
            "extra": "iterations: 35973\ncpu: 23233.302754843906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28610.752147196705,
            "unit": "ns/iter",
            "extra": "iterations: 28642\ncpu: 28609.339431603956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34365.32445828007,
            "unit": "ns/iter",
            "extra": "iterations: 24413\ncpu: 34364.801540163025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40527.24508058707,
            "unit": "ns/iter",
            "extra": "iterations: 20785\ncpu: 40527.2263651672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46096.68182801414,
            "unit": "ns/iter",
            "extra": "iterations: 18490\ncpu: 46094.77014602489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 638.6749024897136,
            "unit": "ns/iter",
            "extra": "iterations: 1098089\ncpu: 638.6627131316311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 500.50590534371094,
            "unit": "ns/iter",
            "extra": "iterations: 1381630\ncpu: 500.486309648749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.60751253298554,
            "unit": "ns/iter",
            "extra": "iterations: 1380360\ncpu: 508.5944246428461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 515.3047561251127,
            "unit": "ns/iter",
            "extra": "iterations: 1357807\ncpu: 515.2831735290812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.6579942987216,
            "unit": "ns/iter",
            "extra": "iterations: 741935\ncpu: 934.6363225889072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2825.806153227359,
            "unit": "ns/iter",
            "extra": "iterations: 283461\ncpu: 2825.742165588912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14213.984463227063,
            "unit": "ns/iter",
            "extra": "iterations: 57026\ncpu: 14213.80247606355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11151.921090347712,
            "unit": "ns/iter",
            "extra": "iterations: 73261\ncpu: 11151.783349940639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11565.38929689755,
            "unit": "ns/iter",
            "extra": "iterations: 70260\ncpu: 11565.26757756903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10694.570153955981,
            "unit": "ns/iter",
            "extra": "iterations: 75541\ncpu: 10694.42819131333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33136.2502523096,
            "unit": "ns/iter",
            "extra": "iterations: 24771\ncpu: 33135.78377941947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 286954.7849359085,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 286952.98076923034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 232817.37493605138,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 232816.01023017967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216175.77825106482,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 216170.45853169583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213490.73243981766,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 213486.175229586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114801.10686119916,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 114799.3690851735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209998.2614127788,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 209995.7712638151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5860.395519999884,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5860.184000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30437.001497936133,
            "unit": "ns/iter",
            "extra": "iterations: 27371\ncpu: 30436.242738665027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23922.848382382275,
            "unit": "ns/iter",
            "extra": "iterations: 34897\ncpu: 23922.552081840906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24022.66049579195,
            "unit": "ns/iter",
            "extra": "iterations: 34571\ncpu: 24022.12548089438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23662.560119640424,
            "unit": "ns/iter",
            "extra": "iterations: 35105\ncpu: 23661.42429853297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48764.05452491104,
            "unit": "ns/iter",
            "extra": "iterations: 16818\ncpu: 48761.892020454274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 298341.66507828666,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 298330.4969366911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 237960.87103765723,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 237952.56028176704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235857.72047670936,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 235845.63921993528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233073.32332250723,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 233064.9350649343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 126891.38253578007,
            "unit": "ns/iter",
            "extra": "iterations: 6917\ncpu: 126883.83692352117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223042.21252912504,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 223031.91819829118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 902145.6081982672,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 902097.0448045743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 489520.1204159839,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 489500.65681445104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2876.4213865837924,
            "unit": "ns/iter",
            "extra": "iterations: 278483\ncpu: 2876.2850874200712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14141.749769867842,
            "unit": "ns/iter",
            "extra": "iterations: 58662\ncpu: 14141.01121680124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10474.206603688464,
            "unit": "ns/iter",
            "extra": "iterations: 77593\ncpu: 10473.64324101395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10691.999482314246,
            "unit": "ns/iter",
            "extra": "iterations: 77267\ncpu: 10691.913753607558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10097.641260910517,
            "unit": "ns/iter",
            "extra": "iterations: 82829\ncpu: 10097.371693488994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31715.379905214024,
            "unit": "ns/iter",
            "extra": "iterations: 26375\ncpu: 31714.381042654168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 287297.78114912426,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 287282.8276307311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217741.60992555902,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 217734.93796526108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 220028.47551224305,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 220020.48975512222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215396.16707556762,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 215390.13738959804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 112954.87272027266,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 112948.70279989648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 208585.17654000653,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 208579.34859570456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 261.9940466026317,
            "unit": "ns/iter",
            "extra": "iterations: 2682166\ncpu: 261.9832254976022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1729.9301124300086,
            "unit": "ns/iter",
            "extra": "iterations: 404607\ncpu: 1729.8576149201483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1383.506055406156,
            "unit": "ns/iter",
            "extra": "iterations: 505251\ncpu: 1383.446445430086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1392.5144972165428,
            "unit": "ns/iter",
            "extra": "iterations: 503338\ncpu: 1392.4821889068558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1026.136967414899,
            "unit": "ns/iter",
            "extra": "iterations: 682520\ncpu: 1026.1053155951402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10305.717073385758,
            "unit": "ns/iter",
            "extra": "iterations: 68106\ncpu: 10305.319648782863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13650.134033630187,
            "unit": "ns/iter",
            "extra": "iterations: 51502\ncpu: 13649.98640829483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3131.562004571603,
            "unit": "ns/iter",
            "extra": "iterations: 224427\ncpu: 3131.556363539147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3127.212232998332,
            "unit": "ns/iter",
            "extra": "iterations: 223641\ncpu: 3127.1868753940357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3137.3549846088217,
            "unit": "ns/iter",
            "extra": "iterations: 222204\ncpu: 3137.3130096667765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6110.116951287346,
            "unit": "ns/iter",
            "extra": "iterations: 114304\ncpu: 6110.040768477005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6052.806058421387,
            "unit": "ns/iter",
            "extra": "iterations: 116499\ncpu: 6052.70345668203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2048.127288039502,
            "unit": "ns/iter",
            "extra": "iterations: 344345\ncpu: 2048.1098897907714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10628.64699896738,
            "unit": "ns/iter",
            "extra": "iterations: 66827\ncpu: 10628.533377227779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8383.3963368227,
            "unit": "ns/iter",
            "extra": "iterations: 84080\ncpu: 8383.236203615657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8339.063271861347,
            "unit": "ns/iter",
            "extra": "iterations: 84050\ncpu: 8338.924449732182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8384.27086825723,
            "unit": "ns/iter",
            "extra": "iterations: 84111\ncpu: 8384.055593204166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18840.969564290415,
            "unit": "ns/iter",
            "extra": "iterations: 37456\ncpu: 18840.61031610423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60145.9804325488,
            "unit": "ns/iter",
            "extra": "iterations: 11652\ncpu: 60145.382766906456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48582.04378404574,
            "unit": "ns/iter",
            "extra": "iterations: 14503\ncpu: 48580.9901399709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48460.50072698926,
            "unit": "ns/iter",
            "extra": "iterations: 14443\ncpu: 48460.09139375471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48425.14214498471,
            "unit": "ns/iter",
            "extra": "iterations: 14443\ncpu: 48424.64861870753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28539.135481241232,
            "unit": "ns/iter",
            "extra": "iterations: 24520\ncpu: 28538.31566068511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47709.45956553865,
            "unit": "ns/iter",
            "extra": "iterations: 14777\ncpu: 47708.08012451862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2348.0679137905627,
            "unit": "ns/iter",
            "extra": "iterations: 296950\ncpu: 2348.040410843589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10586.9174097955,
            "unit": "ns/iter",
            "extra": "iterations: 65601\ncpu: 10586.846237100084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 10510.472203819785,
            "unit": "ns/iter",
            "extra": "iterations: 66412\ncpu: 10510.347527555128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 10152.520112038066,
            "unit": "ns/iter",
            "extra": "iterations: 69262\ncpu: 10152.325950737848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9985.24952078643,
            "unit": "ns/iter",
            "extra": "iterations: 69906\ncpu: 9985.044202214392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18645.208979656214,
            "unit": "ns/iter",
            "extra": "iterations: 37262\ncpu: 18644.858032311768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59594.18396467511,
            "unit": "ns/iter",
            "extra": "iterations: 11774\ncpu: 59593.74044504849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 50144.39730000504,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50143.64000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50336.70510041772,
            "unit": "ns/iter",
            "extra": "iterations: 13842\ncpu: 50335.31281606759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48054.12609144214,
            "unit": "ns/iter",
            "extra": "iterations: 14545\ncpu: 48053.53729804052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29766.020642979067,
            "unit": "ns/iter",
            "extra": "iterations: 23640\ncpu: 29765.761421319847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48999.02776813109,
            "unit": "ns/iter",
            "extra": "iterations: 14405\ncpu: 48998.49357861894 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422476254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 664.9782777117123,
            "unit": "ns/iter",
            "extra": "iterations: 1048094\ncpu: 664.9558150318579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6208.251544080926,
            "unit": "ns/iter",
            "extra": "iterations: 131146\ncpu: 6208.065057264422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11983.811255423509,
            "unit": "ns/iter",
            "extra": "iterations: 69602\ncpu: 11983.63983793569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17615.00665277925,
            "unit": "ns/iter",
            "extra": "iterations: 47048\ncpu: 17614.58510457405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23715.934843559167,
            "unit": "ns/iter",
            "extra": "iterations: 35668\ncpu: 23714.433105304477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28863.65355039503,
            "unit": "ns/iter",
            "extra": "iterations: 28870\ncpu: 28863.36681676479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34846.817940310786,
            "unit": "ns/iter",
            "extra": "iterations: 24091\ncpu: 34844.83832136482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40707.83688942998,
            "unit": "ns/iter",
            "extra": "iterations: 20575\ncpu: 40704.85540704739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46146.931157823354,
            "unit": "ns/iter",
            "extra": "iterations: 18172\ncpu: 46144.56306405464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 635.5030585001908,
            "unit": "ns/iter",
            "extra": "iterations: 1119176\ncpu: 635.4639484763784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 500.54125328034655,
            "unit": "ns/iter",
            "extra": "iterations: 1398107\ncpu: 500.5107620518312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 502.10132285137325,
            "unit": "ns/iter",
            "extra": "iterations: 1395924\ncpu: 502.09997105859634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 509.43589984317225,
            "unit": "ns/iter",
            "extra": "iterations: 1363382\ncpu: 509.3992732777754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 935.0294309834355,
            "unit": "ns/iter",
            "extra": "iterations: 757535\ncpu: 934.9632690238741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2832.7524436091094,
            "unit": "ns/iter",
            "extra": "iterations: 281960\ncpu: 2832.6184565186554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14020.469928698101,
            "unit": "ns/iter",
            "extra": "iterations: 58062\ncpu: 14019.372395026026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11386.304729664587,
            "unit": "ns/iter",
            "extra": "iterations: 72077\ncpu: 11385.478030439644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11499.13412681745,
            "unit": "ns/iter",
            "extra": "iterations: 71835\ncpu: 11498.329505115918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10596.006981531273,
            "unit": "ns/iter",
            "extra": "iterations: 76774\ncpu: 10595.463307890688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33529.15472081398,
            "unit": "ns/iter",
            "extra": "iterations: 24625\ncpu: 33526.83045685272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 279335.22034976666,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 279315.1351351356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214589.48266331048,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 214575.70351758788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216739.4082765617,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216727.27731516468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216107.88600252944,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 216095.2332912987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111943.6326950312,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 111936.78190463959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209668.3570743299,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 209656.25899280628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5840.404530000568,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5839.86699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 31279.554418956002,
            "unit": "ns/iter",
            "extra": "iterations: 26590\ncpu: 31277.709665287683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24284.954429781985,
            "unit": "ns/iter",
            "extra": "iterations: 33794\ncpu: 24282.98218618695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24346.668335564387,
            "unit": "ns/iter",
            "extra": "iterations: 34354\ncpu: 24345.32805495729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23846.37852689354,
            "unit": "ns/iter",
            "extra": "iterations: 35123\ncpu: 23845.087264755366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50091.26492183873,
            "unit": "ns/iter",
            "extra": "iterations: 16888\ncpu: 50088.784936049284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297051.08232118044,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 297039.20377867756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231463.92385247536,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 231453.46245688605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 235305.45760001283,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 235287.519999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230342.79678017853,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 230327.76458168536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125384.1374821153,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 125376.59513590904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220500.06695299398,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 220497.44820616435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 885755.1409897517,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 885747.8057889816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482949.2961748581,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 482930.60109289724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2898.654674801355,
            "unit": "ns/iter",
            "extra": "iterations: 276354\ncpu: 2898.627485037309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13738.204729662373,
            "unit": "ns/iter",
            "extra": "iterations: 59962\ncpu: 13737.375337713891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10644.935303186548,
            "unit": "ns/iter",
            "extra": "iterations: 77840\ncpu: 10644.248458376172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10906.424639751845,
            "unit": "ns/iter",
            "extra": "iterations: 76267\ncpu: 10905.832142342066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10418.163773898956,
            "unit": "ns/iter",
            "extra": "iterations: 79451\ncpu: 10417.487508023796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31725.57890928599,
            "unit": "ns/iter",
            "extra": "iterations: 26258\ncpu: 31724.042196663886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286561.6762706395,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 286543.02363224304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218371.3208476831,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 218358.7481517981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 218620.10354293752,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 218615.4690618769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 218659.17753086565,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 218661.06172839538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110504.63439908744,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 110498.19284721387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207705.96973249668,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 207697.09056780834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 260.0359152864236,
            "unit": "ns/iter",
            "extra": "iterations: 2693310\ncpu: 260.03601516349914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1768.1768073670273,
            "unit": "ns/iter",
            "extra": "iterations: 397014\ncpu: 1768.1331136937117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1275.156600412876,
            "unit": "ns/iter",
            "extra": "iterations: 543466\ncpu: 1275.0839978949898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1337.875484980938,
            "unit": "ns/iter",
            "extra": "iterations: 519608\ncpu: 1337.761543317264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1002.6740515663627,
            "unit": "ns/iter",
            "extra": "iterations: 698362\ncpu: 1002.6000841970191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10054.42414935502,
            "unit": "ns/iter",
            "extra": "iterations: 70329\ncpu: 10054.07299975827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13603.720809829516,
            "unit": "ns/iter",
            "extra": "iterations: 51764\ncpu: 13603.450274321927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3143.174791048763,
            "unit": "ns/iter",
            "extra": "iterations: 222540\ncpu: 3143.1688685180347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3185.156170179897,
            "unit": "ns/iter",
            "extra": "iterations: 218851\ncpu: 3184.970139501309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3140.8288339390765,
            "unit": "ns/iter",
            "extra": "iterations: 222141\ncpu: 3140.7052277607395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5967.302318453379,
            "unit": "ns/iter",
            "extra": "iterations: 117449\ncpu: 5967.086990949254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6015.052262351579,
            "unit": "ns/iter",
            "extra": "iterations: 116317\ncpu: 6014.879166415934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2051.3102706587874,
            "unit": "ns/iter",
            "extra": "iterations: 339394\ncpu: 2051.2687319163065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10453.218552056915,
            "unit": "ns/iter",
            "extra": "iterations: 66149\ncpu: 10452.895735385282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8464.160377814527,
            "unit": "ns/iter",
            "extra": "iterations: 82792\ncpu: 8464.038796018822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8260.708410881716,
            "unit": "ns/iter",
            "extra": "iterations: 84355\ncpu: 8260.699425048895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8161.89187738462,
            "unit": "ns/iter",
            "extra": "iterations: 85699\ncpu: 8161.892204109746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18626.817553190278,
            "unit": "ns/iter",
            "extra": "iterations: 37600\ncpu: 18625.675531914814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58365.01022610247,
            "unit": "ns/iter",
            "extra": "iterations: 10659\ncpu: 58360.221409137346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47974.8008293045,
            "unit": "ns/iter",
            "extra": "iterations: 14711\ncpu: 47972.20447284319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47504.138653467315,
            "unit": "ns/iter",
            "extra": "iterations: 14749\ncpu: 47503.37650010223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47196.74174315216,
            "unit": "ns/iter",
            "extra": "iterations: 14927\ncpu: 47191.73310109196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27759.314950346936,
            "unit": "ns/iter",
            "extra": "iterations: 25277\ncpu: 27759.21588796181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46787.94958206011,
            "unit": "ns/iter",
            "extra": "iterations: 15074\ncpu: 46787.04391667742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2080.3864797561746,
            "unit": "ns/iter",
            "extra": "iterations: 333707\ncpu: 2080.304878231514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10811.550086489215,
            "unit": "ns/iter",
            "extra": "iterations: 64748\ncpu: 10811.501513560417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9231.93520658124,
            "unit": "ns/iter",
            "extra": "iterations: 75733\ncpu: 9231.930598286068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9008.464224066238,
            "unit": "ns/iter",
            "extra": "iterations: 77049\ncpu: 9008.275253410133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8630.938877443876,
            "unit": "ns/iter",
            "extra": "iterations: 80085\ncpu: 8630.84472747699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19518.920466241558,
            "unit": "ns/iter",
            "extra": "iterations: 35947\ncpu: 19518.107213397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58677.32100939584,
            "unit": "ns/iter",
            "extra": "iterations: 11928\ncpu: 58677.129443327365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49441.620287000216,
            "unit": "ns/iter",
            "extra": "iterations: 14216\ncpu: 49441.15785030939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47785.21906582913,
            "unit": "ns/iter",
            "extra": "iterations: 14644\ncpu: 47780.86588363832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48132.98735916067,
            "unit": "ns/iter",
            "extra": "iterations: 14556\ncpu: 48132.131079966435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27621.381806636564,
            "unit": "ns/iter",
            "extra": "iterations: 25196\ncpu: 27621.0985870776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48870.80106228715,
            "unit": "ns/iter",
            "extra": "iterations: 14497\ncpu: 48870.53183417249 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}