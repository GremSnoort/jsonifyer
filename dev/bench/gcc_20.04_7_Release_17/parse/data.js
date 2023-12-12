window.BENCHMARK_DATA = {
  "lastUpdate": 1702409083454,
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
      }
    ]
  }
}