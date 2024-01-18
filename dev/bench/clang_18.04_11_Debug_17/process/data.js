window.BENCHMARK_DATA = {
  "lastUpdate": 1705574917249,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 18.04 Debug c++-17": [
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
        "date": 1702489565914,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17339.440450379894,
            "unit": "ns/iter",
            "extra": "iterations: 40588\ncpu: 17339.464866462993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139345.58693850943,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 139341.45532902368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 261274.36726062317,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261267.3512533977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 380787.61408948037,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 380766.3269827203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 501534.81249999214,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 501517.0138888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 500862.94300001557,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500853.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 598113.5700000095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598114.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 693546.6855631255,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 693537.2637944064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 793508.210977711,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 793500.7718696401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13792.505401995108,
            "unit": "ns/iter",
            "extra": "iterations: 50722\ncpu: 13792.08824573164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11573.192014615392,
            "unit": "ns/iter",
            "extra": "iterations: 60761\ncpu: 11572.900380178056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11644.278125206793,
            "unit": "ns/iter",
            "extra": "iterations: 60124\ncpu: 11644.300113099594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11601.299607154038,
            "unit": "ns/iter",
            "extra": "iterations: 60329\ncpu: 11600.979628371115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20103.374687545547,
            "unit": "ns/iter",
            "extra": "iterations: 34805\ncpu: 20103.4190489872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58917.141499989615,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58915.49000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294949.22601793264,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 294946.96342305036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234821.22054379297,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 234818.23674814607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232984.2541632287,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 232980.83538083502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231161.35140995414,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 231155.99240780875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 517966.8990000437,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517954.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4321692.294930861,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4321541.935483876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3499563.5601506233,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3499522.932330825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3457674.477611994,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3457579.850746261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3442197.366666733,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3442091.8518518456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1999099.8311690027,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1999015.5844155834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3361951.61818151,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3361954.9090909115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12689789.831326205,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12689639.759036144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5699786.299999232,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5699597.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16758616.55384709,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16758218.461538488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62273.83013841187,
            "unit": "ns/iter",
            "extra": "iterations: 13511\ncpu: 62273.07379172534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 335838.72854915983,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 335834.1263650547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265533.640692618,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 265530.5813234384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264839.1826893664,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 264839.47449768294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255757.41975308023,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 255746.16079493958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 526190.769999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526181.3000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4347123.037558437,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4347069.48356805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3546199.0801525274,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3546154.96183205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3538933.315589428,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3538874.5247148206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3524390.498113084,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3524352.075471694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2039689.8439560244,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2039565.054945056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3423581.3173430418,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3423498.5239852457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12976330.79268258,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12975763.414634123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5778445.709999004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5778099.000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53097.56940000625,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53094.98000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 302022.1262786628,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 302018.1657848338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232523.48715175246,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 232518.04165539745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225244.8667546274,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 225240.58047493527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224724.69826680448,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 224717.5945378138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583283.3709677495,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 583276.2096774217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4318889.8935187375,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4318706.481481476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3508122.3479996882,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3508005.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3469940.798507606,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3469836.5671641827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3470192.8252789476,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3470079.5539033557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1999006.9139784507,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1998918.7096774196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3386315.8836365156,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3386221.8181818095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6704.825761727214,
            "unit": "ns/iter",
            "extra": "iterations: 104007\ncpu: 6704.546809349395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38731.44807221033,
            "unit": "ns/iter",
            "extra": "iterations: 17948\ncpu: 38728.287274348426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30798.96605825121,
            "unit": "ns/iter",
            "extra": "iterations: 22627\ncpu: 30798.91280328796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29918.136794868067,
            "unit": "ns/iter",
            "extra": "iterations: 23400\ncpu: 29916.62820512825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23624.844746084225,
            "unit": "ns/iter",
            "extra": "iterations: 29616\ncpu: 23624.625202593088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175375.7367101311,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175370.2858575732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296575.7088235336,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 296565.29411764786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74332.53185046947,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 74332.65401187849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74553.75095866196,
            "unit": "ns/iter",
            "extra": "iterations: 9388\ncpu: 74552.5351512574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74234.8373129586,
            "unit": "ns/iter",
            "extra": "iterations: 9423\ncpu: 74231.53984930445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150075.50345423238,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150070.91968911822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 137312.0806070159,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 137305.81395348982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46631.533915246306,
            "unit": "ns/iter",
            "extra": "iterations: 15008\ncpu: 46630.07729211052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227786.26930568,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 227772.25827384595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181088.0463059345,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 181075.5463059298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180378.91823575407,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180369.9509930336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182983.61518394435,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 182977.69371249946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 350364.9148614494,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 350347.60705289204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1259838.9802513376,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1259776.481149012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1049194.0209895477,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1049178.2608695822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1072426.4334828758,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1072371.1509716152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1034961.7311669104,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1034938.1093057769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670546.1168583147,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670508.2375478916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1029847.6769456718,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1029825.1101321523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46375.957660356624,
            "unit": "ns/iter",
            "extra": "iterations: 15045\ncpu: 46373.22033898312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228098.11074918564,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 228092.70358306347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183203.45318647227,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 183192.44689221168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183474.50117401787,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 183465.22306287478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183246.7564807438,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 183238.07279392655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 346111.61994077294,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 346087.0681145065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1245668.7517858509,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1245670.0000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1046425.443113791,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1046425.1497005931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1041029.8526784412,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1041006.6964285712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1038728.8456972622,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038665.4302670509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 674238.5057692629,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 674217.4038461549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1026590.073313687,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1026591.4956011844 ns\nthreads: 1"
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
        "date": 1702492174488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17647.41289458488,
            "unit": "ns/iter",
            "extra": "iterations: 39567\ncpu: 17647.554780498904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144275.23100510656,
            "unit": "ns/iter",
            "extra": "iterations: 5870\ncpu: 144255.04258943783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 271456.51803074294,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 271443.46190028224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 396521.4458218396,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 396502.5252525251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 525871.8077155029,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 525839.059674503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 522358.5349999666,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522332.80000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 622730.1449999913,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622726.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 722478.0273651548,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 722453.010164191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 823872.2557932124,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 823845.9893048136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14078.788615396976,
            "unit": "ns/iter",
            "extra": "iterations: 48996\ncpu: 14078.057392440189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11799.036175666579,
            "unit": "ns/iter",
            "extra": "iterations: 59294\ncpu: 11798.647417951219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11800.340771993897,
            "unit": "ns/iter",
            "extra": "iterations: 59016\ncpu: 11799.757692829051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11944.154661161689,
            "unit": "ns/iter",
            "extra": "iterations: 58612\ncpu: 11943.52009827338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20518.973369311065,
            "unit": "ns/iter",
            "extra": "iterations: 34096\ncpu: 20518.450844673866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58777.88360000409,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58776.31000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293492.23822524166,
            "unit": "ns/iter",
            "extra": "iterations: 2930\ncpu: 293486.313993174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229231.18891281247,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 229215.79655543555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228633.7940546339,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 228632.53883235107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230010.72521322197,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 230002.79850746252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 522544.96000000474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522527.80000000243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4454239.253588463,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4454016.267942575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3604262.0000001593,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3604166.6666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3587512.705426314,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3587342.2480620113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3575785.94980689,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3575569.8841698887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2022490.8512034912,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2022372.8665207878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3480507.1616542796,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3480313.1578947366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12982062.182927148,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12981491.463414654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5834640.600000398,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5834405.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16667040.285714364,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16666590.476190498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59846.543199995496,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59844.25000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326949.2916030568,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 326940.4580152678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260608.81523058782,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 260604.30825242712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263428.38522831356,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 263426.5093472252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251828.71598335204,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 251799.22756981783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 522415.0129999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522403.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4528116.965853747,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4528053.658536601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3660311.047244203,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3660300.7874015616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3664310.413385673,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3664132.6771653625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3648955.6784315524,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3648879.215686258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2056355.988864077,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2056305.1224944384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3542564.2585550165,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542461.216730041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13223768.087499365,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13223321.24999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5742703.440000128,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5742552.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55523.13949999643,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55519.81999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 300878.4564837472,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 300875.91751136095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 229326.22994365322,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 229322.18942849385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225793.0725593695,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 225790.58047493402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221450.98513302897,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 221442.56651017268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 589541.7302989181,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 589517.2554347828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4475115.846153753,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4474907.21153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3612508.9260700047,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3612399.6108949585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3620640.591439502,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620585.992217894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3613868.6705425764,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3613827.131782961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2042226.916299566,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2042135.462555065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3498054.0827067452,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3498045.4887218196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6854.054343141808,
            "unit": "ns/iter",
            "extra": "iterations: 102092\ncpu: 6853.5898993065475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38748.525290533886,
            "unit": "ns/iter",
            "extra": "iterations: 18070\ncpu: 38747.45434421664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31117.531861001407,
            "unit": "ns/iter",
            "extra": "iterations: 22504\ncpu: 31115.66832563092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31263.163509258324,
            "unit": "ns/iter",
            "extra": "iterations: 23173\ncpu: 31263.004358520735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24116.95412149359,
            "unit": "ns/iter",
            "extra": "iterations: 29055\ncpu: 24115.53261056605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177314.3589353702,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177309.20152091267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304667.1587646873,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 304654.58895172045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76514.52238479747,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76514.11880323174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76854.7527188887,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 76851.88399428844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76360.85207035816,
            "unit": "ns/iter",
            "extra": "iterations: 9153\ncpu: 76356.37495902955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145265.12380755547,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 145261.65491497348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 142259.343623068,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 142252.843216896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46989.40143682036,
            "unit": "ns/iter",
            "extra": "iterations: 14894\ncpu: 46987.64603195888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226903.18027985538,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 226890.53042629402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182847.13677889833,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 182834.95170973672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 183746.69743722674,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 183737.4215481155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 184323.4193633194,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184324.88818732154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 345995.4975296645,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 345981.3241106727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1299460.262081662,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1299453.5315984876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1078892.4169231416,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1078825.384615396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1080818.3384853054,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1080782.0710973858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1078792.107692397,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1078731.8461538574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 690568.3227722704,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 690533.2673267308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1061085.6767830153,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1061079.9696509938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47178.40641855768,
            "unit": "ns/iter",
            "extra": "iterations: 14832\ncpu: 47176.82038834891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227751.5985020936,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 227743.3083686098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183430.86759309508,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 183418.98269533436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183424.04185196853,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 183419.27805388544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 184933.51228533685,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 184932.5495376478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342038.4022483173,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 342040.81133919826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1290040.0904059736,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1290016.420664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1079276.3204929826,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1079251.0015408215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1073154.2846154368,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1073110.769230779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1073229.2756509357,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073191.8836140863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 687047.2721021579,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 687030.1571709316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1058062.0891238868,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1058037.9154078546 ns\nthreads: 1"
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
        "date": 1702503228547,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16969.261127020607,
            "unit": "ns/iter",
            "extra": "iterations: 41206\ncpu: 16969.121001795855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 136842.8834043978,
            "unit": "ns/iter",
            "extra": "iterations: 6098\ncpu: 136826.59888488028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 257350.56096113942,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 257346.48472263422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 374810.01912212366,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 374808.0399826164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 494174.439316234,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 494158.0056980056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 613601.1264124085,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 613596.9632768364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 589574.4370000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589561.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 688129.7832219824,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 688114.1796585001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 777479.4718250971,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 777461.5643397813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13480.970887049432,
            "unit": "ns/iter",
            "extra": "iterations: 51970\ncpu: 13480.552241677875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11334.382188667418,
            "unit": "ns/iter",
            "extra": "iterations: 61590\ncpu: 11334.166260756625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11352.915969396103,
            "unit": "ns/iter",
            "extra": "iterations: 61430\ncpu: 11352.705518476323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11452.762866301126,
            "unit": "ns/iter",
            "extra": "iterations: 61459\ncpu: 11452.65136106999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19374.60225036764,
            "unit": "ns/iter",
            "extra": "iterations: 36083\ncpu: 19374.295374553112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60171.583099997864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60170.109999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287102.64932885364,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 287095.3355704696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227616.07321618748,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 227612.83280085205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224884.09934123282,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 224876.75889328078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223928.0167978914,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223923.04461942284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 513114.41100000363,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513092.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4237276.176470757,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4237064.253393661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3383426.2189780883,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3383280.6569343074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3389256.6423358247,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3388974.0875912467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3382970.8181817546,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3382768.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1943761.8949579622,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1943682.3529411792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3305630.8749999227,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3305555.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12483482.564706558,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12483043.529411767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5482463.719999942,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5482406.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16089722.075758854,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16088645.454545503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59159.43060000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59159.60000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 325881.96661610325,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 325871.3960546277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256843.92153339172,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 256840.6409104517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255507.4274603682,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 255503.55967693677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250063.209818852,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 250055.93220339125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 516679.4389999723,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516678.4000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4300573.351851835,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4300515.277777791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3486410.2293230426,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3486357.518797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3482814.634328457,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3482726.1194029716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3463851.611940072,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3463738.059701495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1994455.9139784488,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1994434.8387096908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3368539.8369566496,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3368435.8695652257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12766465.012047654,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12765880.722891565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5594038.080000701,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5593932.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53184.079899995144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53182.559999999765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 296757.8303911287,
            "unit": "ns/iter",
            "extra": "iterations: 2889\ncpu: 296744.8251990293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224376.2314158073,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 224371.47360126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218366.42359866019,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 218354.54312771966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 217334.00638895304,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 217318.83465371735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 576415.7048634357,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 576399.5336442384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4217863.3755655615,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4217678.28054299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3521964.069343257,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3514678.8321167966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3409830.3479854437,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3409682.783882786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3416799.7435897402,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3416660.0732600694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1942123.5585776109,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1942003.765690384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3307077.6486485563,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3307017.374517384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6819.760298933595,
            "unit": "ns/iter",
            "extra": "iterations: 102899\ncpu: 6819.631872029793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37736.28212878679,
            "unit": "ns/iter",
            "extra": "iterations: 18527\ncpu: 37735.844982997725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28495.929731710592,
            "unit": "ns/iter",
            "extra": "iterations: 24563\ncpu: 28495.46065220042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30559.541466399194,
            "unit": "ns/iter",
            "extra": "iterations: 22886\ncpu: 30559.215240758465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23647.3218716295,
            "unit": "ns/iter",
            "extra": "iterations: 29664\ncpu: 23647.181769147563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173724.124875629,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 173722.8358208967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 288607.2253928817,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 288595.11993383244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72896.75926311211,
            "unit": "ns/iter",
            "extra": "iterations: 9608\ncpu: 72896.00333055732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73443.02356267897,
            "unit": "ns/iter",
            "extra": "iterations: 9549\ncpu: 73440.402136349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73186.68667917317,
            "unit": "ns/iter",
            "extra": "iterations: 9594\ncpu: 73183.57306650018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140883.32073954603,
            "unit": "ns/iter",
            "extra": "iterations: 4976\ncpu: 140880.4059485537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135456.5233861757,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 135453.44027831533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45854.15649392324,
            "unit": "ns/iter",
            "extra": "iterations: 15630\ncpu: 45852.597568778045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220119.04838201625,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 220105.15237197495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174915.73067330537,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 174903.44139651186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174701.70037452245,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174698.8514357033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176755.9752525213,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 176756.5404040384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 332530.24774134223,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 332527.72230147634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1223976.3123909181,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1223935.9511343883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1021879.6690961856,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1021833.236151606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1022578.6705539871,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1022557.5801749113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1022308.3688046876,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1022268.3673469406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 665895.0504281302,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 665873.5490009576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1006343.7025862066,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1006313.3620689814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44991.229210882026,
            "unit": "ns/iter",
            "extra": "iterations: 15549\ncpu: 44989.1439963983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219586.74253382254,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 219587.45677460154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176573.9359717733,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176574.38870683205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174878.89255371992,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 174868.6656671657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177097.24271597428,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 177084.5198885225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 328734.00942951575,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 328720.6506364971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1218489.2760418206,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1218436.9791666446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1025918.8204379188,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1025809.7810218836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1012124.1507246284,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1012045.6521739168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1012092.265896014,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1012068.7861271745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 660598.3713477241,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 660573.4213006641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1001665.7564470045,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1001620.3438395535 ns\nthreads: 1"
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
        "date": 1705574904363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17303.62377809551,
            "unit": "ns/iter",
            "extra": "iterations: 40306\ncpu: 17303.647099687394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140151.2349127066,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 140106.56691604323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 263503.49634369067,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 263493.3881779404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 384769.8773963431,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 384753.633526527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 505707.6522753989,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 505671.29521586973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508577.5149999563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508540.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 601591.2780000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601592.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 697725.9878788049,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 697716.3636363635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 793436.8347676247,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 793416.8674698788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14012.690402043583,
            "unit": "ns/iter",
            "extra": "iterations: 50094\ncpu: 14011.837745039338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12206.230196623976,
            "unit": "ns/iter",
            "extra": "iterations: 60318\ncpu: 12204.522696375872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11497.73712296474,
            "unit": "ns/iter",
            "extra": "iterations: 60903\ncpu: 11497.56169646816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11598.184519375167,
            "unit": "ns/iter",
            "extra": "iterations: 60411\ncpu: 11597.914287133151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19727.70303902607,
            "unit": "ns/iter",
            "extra": "iterations: 35439\ncpu: 19726.727616467742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59256.05490000408,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59252.47000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295878.02200825926,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 295871.97386519937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237551.5783031825,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 237541.66898470075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236343.84591895054,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 236339.2004441983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230225.68800648302,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 230219.39492166438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 513739.6360000821,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513723.1999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4366806.367442075,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4366697.6744186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3470099.8955224124,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3469988.4328358225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3459664.0149253975,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3459395.1492537274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3472299.9475654894,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3472190.6367041236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2037806.1774193905,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2037659.4470046107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3380423.4452554407,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3380264.5985401557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12847187.301205456,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12846614.457831305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5571009.2000003895,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5570735.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16263828.246154005,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16262933.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62033.943243834314,
            "unit": "ns/iter",
            "extra": "iterations: 13743\ncpu: 62031.12129811541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 336084.2029722162,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 336073.4454438785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 268200.66604128224,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 268193.6835522198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267412.04576802405,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 267406.6771159877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261022.89847559438,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 261016.2804878041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 508622.24399998016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508592.2000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4398166.312796278,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4398004.26540284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3529926.349809953,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3529871.8631178876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3539412.406844228,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3539292.0152091333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3544474.623574125,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3544413.3079847773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2045864.673289264,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2045757.6158940385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3453747.531598716,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3453536.431226751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13095232.951218627,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 13094931.707317084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5745739.069999444,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5745375.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55988.13330000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55985.23000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 310812.67939484416,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 310812.6080691642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 236997.99168974796,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 236979.00277008186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 234667.9392113717,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 234659.03614457726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 226669.52111553735,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 226652.93492695707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 579384.2660428456,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 579346.7245989289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4390785.197183248,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4390546.948356809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3482815.37313425,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3482558.9552238756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3486589.5992508526,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3486405.6179775097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3472527.6417908156,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472344.029850756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2009458.5260870229,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2009349.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3416403.2344323867,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3416275.0915750917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6797.425951620012,
            "unit": "ns/iter",
            "extra": "iterations: 103061\ncpu: 6796.918329921124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37626.780754130414,
            "unit": "ns/iter",
            "extra": "iterations: 18591\ncpu: 37626.42138669253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30451.84027867315,
            "unit": "ns/iter",
            "extra": "iterations: 23253\ncpu: 30450.599922590412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29220.42697332784,
            "unit": "ns/iter",
            "extra": "iterations: 23957\ncpu: 29219.330467086784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23958.095881507998,
            "unit": "ns/iter",
            "extra": "iterations: 29234\ncpu: 23957.55284942174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175142.18571428038,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175142.25563909905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 297683.4974402705,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 297680.54607508413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73802.34427786568,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 73800.855152028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74714.40468334098,
            "unit": "ns/iter",
            "extra": "iterations: 9395\ncpu: 74711.5806279947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74546.73910732815,
            "unit": "ns/iter",
            "extra": "iterations: 9410\ncpu: 74543.30499468672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147609.17449946894,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147606.57534246438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124579.7899324073,
            "unit": "ns/iter",
            "extra": "iterations: 5622\ncpu: 124576.09391675518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45893.87187725463,
            "unit": "ns/iter",
            "extra": "iterations: 15251\ncpu: 45892.50540948171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226678.13186815294,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 226671.65481577205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 184108.67981071858,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184103.44374343046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181659.38887444357,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 181655.52378476766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183682.34305993057,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 183682.202944269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335755.9774472288,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 335743.9539347382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1257054.4565218256,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1257042.0289855183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1044766.2611941675,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044733.7313432804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1044173.9583333811,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1044117.4107142859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1047557.4507463127,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1047534.4776119501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678269.3745210848,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 678237.7394636129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1029153.3906020157,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1029143.3186490327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45532.411267239615,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 45530.62060889907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228728.19327455963,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 228723.4410708436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184995.96170101906,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 184988.53671420898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183924.14398526266,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 183922.4006317474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 184536.68087923972,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 184536.5995762716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333893.7815165534,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 333592.7488151655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254220.3339317685,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1254163.1956911993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1055995.23867056,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1055923.4138972785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1046635.2194030219,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1046602.8358208989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1042111.3892214533,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1042097.9041916314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 666965.1428571688,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 666939.9047619132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1026044.2991202286,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1026003.5190616 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}